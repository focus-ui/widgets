var BrowserMenuArray = [
    {
        name: "File",
        children: [
            {name: "New Tab"},
            {name: "New Window"},
            {name: "Open File...", icon: "../_icons/menu/open.png"},
            {divider: true},
            {name: "Save Page AS...", icon: "../_icons/menu/save.png"},
            {divider: true},
            {name: "Print Preview"},
            {name: "Print...", icon: "../_icons/menu/print.png"},
            {divider: true},
            {name: "Exit"}
        ]
    },
    {
        name: "Edit",
        children: [
            {name: "Undo", icon: "../_icons/menu/undo.png"},
            {name: "Redo", icon: "../_icons/menu/redo.png"},
            {divider: true},
            {name: "Cut", icon: "../_icons/menu/cut.png"},
            {name: "Copy", icon: "../_icons/menu/copy.png"},
            {name: "Paste", icon: "../_icons/menu/paste.png"},
            {name: "Delete", icon: "../_icons/menu/delete.png"},
            {divider: true},
            {name: "Select All"}
        ]
    },
    {
        name: "View",
        children: [
            {
                name: "Toolbars",
                children: [
                    {name: "Menu Bar", checkbox_visible: true},
                    {name: "Bookmarks Toolbar", checkbox_visible: true},
                    {divider: true},
                    {name: "Customize..."}
                ]
            },
            {
                name: "Sidebar",
                children: [
                    {name: "Bookmarks", checkbox_visible: true},
                    {name: "History", checkbox_visible: true},
                    {name: "Synced Tabs"}
                ]
            },
            {divider: true},
            {
                name: "Zoom",
                children: [
                    {name: "Zoom In", icon: "../_icons/menu/zoom_in.png"},
                    {name: "Zoom Out", icon: "../_icons/menu/zoom_out.png"},
                    {divider: true},
                    {name: "Reset"}
                ]
            },
            {name: "Page Style", disabled: true},
            {divider: true},
            {name: "Full Screen", icon: "../_icons/menu/fullscreen.png"}
        ]
    },
    {
        name: "Bookmarks",
        children: [
            {name: "Show All Bookmarks"},
            {divider: true},
            {name: "Bookmark This Page", icon: "../_icons/menu/bookmark_add.png"}
        ]
    },
    {
        name: "Help",
        children: [
            {name: "Help Center", icon: "../_icons/menu/help.png"},
            {name: "Report An Issue"},
            {divider: true},
            {name: "About"}
        ]
    }
];
var BrowserFontIconMenuArray = [
    {
        name: "File",
        children: [
            {name: "New Tab"},
            {name: "New Window"},
            {name: "<i class='fa fa-folder-open-o'></i>Open File..."},
            {divider: true},
            {name: "<i class='fa fa-save'></i>Save Page AS..."},
            {divider: true},
            {name: "Print Preview"},
            {name: "<i class='fa fa-print'></i>Print..."},
            {divider: true},
            {name: "Exit"}
        ]
    },
    {
        name: "Edit",
        children: [
            {name: "<i class='fa fa-undo'></i>Undo"},
            {name: "<i class='fa fa-repeat'></i>Redo"},
            {divider: true},
            {name: "<i class='fa fa-cut'></i>Cut"},
            {name: "<i class='fa fa-copy'></i>Copy"},
            {name: "<i class='fa fa-paste'></i>Paste"},
            {name: "<i class='fa fa-remove'></i>Delete"},
            {divider: true},
            {name: "Select All"}
        ]
    },
    {
        name: "View",
        children: [
            {
                name: "Toolbars",
                children: [
                    {name: "Menu Bar", checkbox_visible: true},
                    {name: "Bookmarks Toolbar", checkbox_visible: true},
                    {divider: true},
                    {name: "Customize..."}
                ]
            },
            {
                name: "Sidebar",
                children: [
                    {name: "Bookmarks", checkbox_visible: true},
                    {name: "History", checkbox_visible: true},
                    {name: "Synced Tabs"}
                ]
            },
            {divider: true},
            {
                name: "Zoom",
                children: [
                    {name: "<i class='fa fa-search-plus'></i>Zoom In"},
                    {name: "<i class='fa fa-search-minus'></i>Zoom Out"},
                    {divider: true},
                    {name: "Reset"}
                ]
            },
            {name: "Page Style", disabled: true},
            {divider: true},
            {name: "<i class='fa fa-expand'></i>Full Screen"}
        ]
    },
    {
        name: "Bookmarks",
        children: [
            {name: "Show All Bookmarks"},
            {divider: true},
            {name: "<i class='fa fa-bookmark-o'></i>Bookmark This Page"}
        ]
    },
    {
        name: "Help",
        children: [
            {name: "<i class='fa fa-question-circle-o'></i>Help Center"},
            {name: "Report An Issue"},
            {divider: true},
            {name: "About"}
        ]
    }
];
var GoogleProductArray = [
    {"name": "Search", icon: "../_icons/google/search.png"},
    {"name": "Maps", icon: "../_icons/google/maps.png"},
    {"name": "Groups", icon: "../_icons/google/groups.png"},
    {"name": "YouTube", icon: "../_icons/google/youtube.png"},
    {"name": "Play", icon: "../_icons/google/play.png"},
    {"name": "Gmail", icon: "../_icons/google/gmail.png"},
    {"name": "Contacts", icon: "../_icons/google/contacts.png"},
    {"name": "Drive", icon: "../_icons/google/drive.png"},
    {"name": "Calendar", icon: "../_icons/google/calendar.png"},
    {divider: true},
    {"name": "Google+", icon: "../_icons/google/google+.png"},
    {"name": "Translate", icon: "../_icons/google/translate.png"},
    {"name": "Photos", icon: "../_icons/google/photos.png"}
];