var SystemArray = [
    {
        name: "Folders",
        children: [
            {name: "Documents", type: "System Folder", icon: "document_folder.png"},
            {name: "Downloads", type: "System Folder", icon: "download_folder.png"},
            {name: "Pictures", type: "System Folder", icon: "picture_folder.png"}
        ]
    },
    {
        name: "Devices and drives",
        children: [
            {
                name: "Windows(C:)",
                type: "Local Disk",
                total_size: "120G",
                free_space: "60G",
                icon: "drive.png",
                children: [
                    {name: "Users", type: "File Folder", icon: "folder.png"},
                    {name: "Program Files", type: "File Folder", icon: "folder.png"}
                ]
            },
            {
                name: "Work(D:)",
                type: "Local Disk",
                total_size: "20G",
                free_space: "10G",
                icon: "drive.png",
                children: [
                    {name: "SDK", type: "File Folder", icon: "folder.png"},
                    {name: "WorkSpace", type: "File Folder", icon: "folder.png"}
                ]
            }
        ]
    }
];
var PopulationArray = [
    {
        continent: "World", population: 7466964280, growth_rate: "1.25%", percent: "100%",
        children: [
            {
                continent: "Asia", population: 4462676731, growth_rate: "1.14%", percent: "59.77%",
                children: [
                    {continent: "Southern Asia", population: 1846266634, growth_rate: "1.36%", percent: "24.76%"},
                    {continent: "Eastern Asia", population: 1641908531, growth_rate: "0.69%", percent: "21.99%"},
                    {continent: "Southeastern Asia", population: 641775797, growth_rate: "1.22%", percent: "8.59%"},
                    {continent: "Western Asia", population: 262938009, growth_rate: "2.06%", percent: "3.52%"},
                    {continent: "Central Asia", population: 69787760, growth_rate: "1.95%", percent: "0.93%"}
                ]
            },
            {
                continent: "Africa", population: 1225080510, growth_rate: "2.57%", percent: "16.41%",
                children: [
                    {continent: "Eastern Africa", population: 410637987, growth_rate: "3.06%", percent: "5.50%"},
                    {continent: "Western Africa", population: 362201579, growth_rate: "2.74%", percent: "4.85%"},
                    {continent: "Northern Africa", population: 229385603, growth_rate: "2.00%", percent: "3.07%"},
                    {continent: "Middle Africa", population: 158562976, growth_rate: "3.29%", percent: "2.12%"},
                    {continent: "Southern Africa", population: 64292365, growth_rate: "1.42%", percent: "0.86%"}
                ]
            },
            {
                continent: "Europe", population: 741447158, growth_rate: "0.14%", percent: "9.93%",
                children: [
                    {continent: "Eastern Europe", population: 292885221, growth_rate: "−0.10%", percent: "3.92%"},
                    {continent: "Western Europe", population: 192746859, growth_rate: "0.44%", percent: "2.58%"},
                    {continent: "Southern Europe", population: 152172107, growth_rate: "−0.13%", percent: "2.04%"},
                    {continent: "Northern Europe", population: 103642971, growth_rate: "0.65%", percent: "1.39%"}
                ]
            },
            {
                continent: "America", population: 997642449, growth_rate: "0.93%", percent: "13.36%",
                children: [
                    {continent: "North America", population: 577184405, growth_rate: "0.90%", percent: "7.73%"},
                    {continent: "South America", population: 420458044, growth_rate: "0.96%", percent: "5.63%"}
                ]
            },
            {
                continent: "Oceania", population: 39901000, growth_rate: "1.54%", percent: "0.53%",
                children: []
            }
        ]
    }
];

