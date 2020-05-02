var EventLogUtil = {
    init: function () {
        var eventPre = z.dom.query(".log-pre");
        if (eventPre) {
            z.dom.event.on(eventPre, "contextmenu", function (evt) {
                evt.preventDefault();
                eventPre.innerHTML = "";
            });
        }
    },
    getNames: function (data) {//when type==="set" data is array
        if (z.util.isArray(data)) {
            var names = [];
            data.forEach(function (d) {
                names.push(d.get("name"));
            });
            return names.join(",");
        }
        return data.get("name");
    },
    logEvent: function (type, info) {
        var eventPre = z.dom.query(".log-pre");
        if (!eventPre) {
            return;
        }
        var typeCheck = z.dom.query("#" + type + "_check");
        if (z.dom.getValue(typeCheck) === false) {
            return;
        }
        var color = z.dom.getStyle(typeCheck.parentNode, "color");
        var label = "<label style='color:" + color + "'>";
        label += "<strong>event:</strong>" + type + "";
        if (info) {
            z.util.eachObject(info, function (p, v) {
                label += "<br><strong>" + p + ":</strong>" + v;
            });
        }
        label += "</label><br><br>";
        var current = (new Date()).getTime();
        if (EventLogUtil.lastEventTime) {
            if (current - EventLogUtil.lastEventTime > 100) {
                label += "----------------------------<br>";
                EventLogUtil.lastEventTime = current;
            }
        } else {
            EventLogUtil.lastEventTime = current;
        }
        z.dom.setValue(eventPre, label + z.dom.getValue(eventPre));
        eventPre.scrollTop = 0;
    }
};
z.ready(function () {
    EventLogUtil.init();
});