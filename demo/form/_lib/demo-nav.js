var DemoNav = {
    init: function () {
        this.in_server = window.location.protocol === "http:" || window.location.protocol === "https:";
        this.pageTitle = document.title;
        this.initNavIndex();
        this.initView();
    },
    initNavIndex: function () {
        var navIndexDiv = z.dom.query("nav.demo-nav-index");
        if (!navIndexDiv) {
            return;
        }
        var items = (window.NavIndexItems || []);
        if (items.length === 0) {
            z.dom.remove(navIndexDiv);
            return;
        }
        var widgetDiv = z.dom.create("div", "demo-index-items");
        var indexDiv = z.dom.create("div", "list");
        items.forEach(function (item) {
            var a = z.dom.create("a");
            a.innerHTML = (item.icon || "") + item.name;
            z.dom.setAttribute(a, "href", item.url);
            var span = z.dom.create("span");
            span.appendChild(a);
            indexDiv.appendChild(span);
        });
        widgetDiv.appendChild(indexDiv);
        var collapse = z.widget.Collapse();
        collapse.setData([{
            name: "Demos",
            content: widgetDiv
        }]);
        navIndexDiv.appendChild(collapse.getRoot());
    },
    initView: function () {
        if (!this.in_server) {
            z.dom.setStyle("#demoDescriptionDiv", "display", "none");
            z.dom.setStyle("#demoSourceDiv", "display", "none");
        }
        this.initNavTree();
        this.initThemeSelect();
        this.initFilter();

        var hash = z.bom.getURLHash();
        if (hash === "*") {
            this.iterateDemos();
            return;
        }
        var view_introduction = z.dom.query(".view_introduction");
        if (!view_introduction || !view_introduction.textContent.trim()) {
            var lastData;
            if (hash) {
                hash = decodeURI(hash).toLowerCase();
                lastData = this.tree.findData(function (data) {
                    if (data.get("name").toLowerCase() === hash) {
                        if (data.get("url") != null) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            if (!lastData) {
                var last = z.bom.getSessionStorage(this.pageTitle + "_current");
                if (last) {
                    lastData = this.tree.findData(function (data) {
                        if (data.get("name") === last) {
                            if (data.get("url") != null) {
                                return true;
                            }
                        }
                        return false;
                    });
                }
            }
            this.tree.setSelect(lastData || this.tree.getDataArray()[0]);
        }
    },
    initNavTree: function () {
        var _this = this;
        this.tree = z.widget.Tree({
            appendTo: ".sidebar>.nav-tree",
            data: window.NavItems || [],
            expand_on_click: true,
            onSelectBatchChange: function () {
                _this.setCurrent(this.getLastSelected());
            },
            isSelectable: function (data) {
                return data.get("url") != null;
            },
            render: function (data, inWrapper) {
                var change = data.get("change");
                if (change) {
                    var changeSpan = z.dom.create("span", change);
                    changeSpan.innerHTML = change;
                    inWrapper.appendChild(changeSpan);
                }
            }
        });
    },
    initThemeSelect: function () {
        var themeSelect = z.dom.query("#themeSelect");
        if (!themeSelect) {
            return;
        }
        var themes = [
            {value: "bootstrap", label: "Bootstrap"}
        ];
        themes.forEach(function (item) {
            var option = z.dom.create("option");
            option.innerHTML = item.label;
            z.dom.setAttribute(option, "value", item.value);
            themeSelect.appendChild(option);
        });
        var currentTheme = z.bom.getLocalStorage("theme") || "bootstrap";
        z.dom.setValue(themeSelect, currentTheme);
        z.dom.event.onchange(themeSelect, function () {
            var theme = z.dom.getValue(themeSelect);
            z.bom.setLocalStorage("theme", theme);
            z.dom.query("#demoIF").contentWindow.location.reload();
        });
    },
    initFilter: function () {
        if (!z.dom.query("#filterInput")) {
            return;
        }
        this.tree.addVisibleFilter(function (data) {
            var filterValue = z.dom.getValue("#filterInput").trim();
            if (filterValue) {
                filterValue = filterValue.toLowerCase();
                return data.get("name").toLowerCase().indexOf(filterValue) >= 0;
            }
            return true;
        });
        z.dom.event.on("#filterInput", "input", function () {
            this.tree.update();
        }, this);
        z.dom.event.on("#filterInput", "keydown.Escape", function (evt) {
            z.dom.setValue("#filterInput", "");
            this.tree.update();
        }, this);
    },
    iterateDemos: function () {
        var tree = this.tree;
        var list = tree.filterData(function (data) {
            return data.get("url") != null;
        });
        var index = 0;
        z.util.callInterval(function () {
            var item = list[index++];
            if (!item) {
                return false;
            }
            tree.setSelect(item);
        }, 2000, null, true);
    },

    setCurrent: function (data) {
        z.bom.setSessionStorage(this.pageTitle + "_current", data.get("name"));
        z.dom.setStyle(".demo_content", "display", "block");
        z.dom.setStyle(".view_introduction", "display", "none");
        var url = data.get("url");
        // z.dom.query("#demoIF").src = url;
        z.dom.query("#demoIF").contentWindow.location.replace(url);
        z.dom.query("#openLink").href = url;
        z.dom.setValue("#demoTitle", this.pageTitle + " / " + data.get("name"));
        this.loadSource(url);
    },
    loadSource: function (url) {
        if (!this.in_server) {
            return;
        }
        var _this = this;
        this.loadPageSource(null, url, function (result, success) {
            var desc = "";
            if (success !== false) {
                result = result.replace('<!--<link rel="stylesheet" href="../_lib/focus-ui/theme/bootstrap.min.css">-->',
                    '<link rel="stylesheet" href="../_lib/focus-ui/theme/bootstrap.min.css">');
                var descIndex = result.indexOf("<demo-desc>");
                if (descIndex >= 0) {
                    desc = result.substring(
                        descIndex + 11, result.indexOf("</demo-desc>")
                    );
                }
                result = result.substring(0, result.indexOf("</html>") + 7);
                result = DemoNav.encodeSource(result);
            }
            _this.updateSourceCode(result);
            _this.updateDescription(desc);
        });
    },
    updateSourceCode: function (sourceCode) {
        z.dom.query("#sourceCode").innerHTML = sourceCode;
        if (hljs) {
            hljs.highlightBlock(z.dom.query("#sourceCode"));
        }
    },
    updateDescription: function (desc) {
        if (desc) {
            z.dom.removeStyle("#demoDescriptionDiv", "display");
            z.dom.query("#demoDescription").innerHTML = desc;
        } else {
            z.dom.setStyle("#demoDescriptionDiv", "display", "none");
        }
    },
    encodeSource: function (result) {
        return result.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },
    loadPageSource: function (key, url, callBack, context) {
        if (key) {
            var cached = z.bom.getLocalStorage(key);
            if (cached) {
                callBack.apply(context, [cached]);
                return;
            }
        }
        z.ajax.get(url, {
            complete: function (status, result) {
                if (status === 200) {
                    if (key) {
                        z.bom.setLocalStorage(key, result, 12 * 60);
                    }
                } else {
                    if (status === 408) {
                        result = "load '" + url + "' timeout";
                    } else {
                        result = "load '" + url + "' fail";
                    }
                }
                callBack.apply(context, [result, status === 200])
            }
        });
    }
};
z.ready(function () {
    DemoNav.init();
});
