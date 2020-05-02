var LanguageArray = [
    {"index": 1, "language": "Java", "ratings": "15.93%", "change": "2.66%"},
    {"index": 2, "language": "C", "ratings": "14.28%", "change": "4.12%"},
    {"index": 3, "language": "Python", "ratings": "8.38%", "change": "4.60%"},
    {"index": 4, "language": "C++", "ratings": "7.56%", "change": "2.84%"},
    {"index": 5, "language": "Visual Basic .NET", "ratings": "7.13%", "change": "4.66%"},
    {"index": 6, "language": "C#", "ratings": "3.46%", "change": "0.63%"},
    {"index": 7, "language": "JavaScript", "ratings": "3.06%", "change": "0.59%"},
    {"index": 8, "language": "PHP", "ratings": "2.44%", "change": "0.85%"},
    {"index": 9, "language": "SQL", "ratings": "2.18%", "change": "2.18%"},
    {"index": 10, "language": "Objective-C", "ratings": "1.48%", "change": "-0.02%"},
    {"index": 11, "language": "Delphi/Object Pascal", "ratings": "1.40%", "change": "0.00%"},
    {"index": 12, "language": "Assembly language", "ratings": "1.37%", "change": "-0.10%"},
    {"index": 13, "language": "MATLAB", "ratings": "1.28%", "change": "-0.29%"},
    {"index": 14, "language": "Swift", "ratings": "1.22%", "change": "-0.35%"},
    {"index": 15, "language": "Go", "ratings": "1.19%", "change": "-0.20%"},
    {"index": 16, "language": "R", "ratings": "1.11%", "change": "-0.80%"},
    {"index": 17, "language": "Ruby", "ratings": "1.11%", "change": "-0.32%"},
    {"index": 18, "language": "Perl", "ratings": "1.01%", "change": "-0.42%"},
    {"index": 19, "language": "Visual Basic", "ratings": "0.98%", "change": "-0.37%"},
    {"index": 20, "language": "PL/SQL", "ratings": "0.84%", "change": "-0.52%"}
];
var NBAArray = [
    {
        "team": "Houston Rockets",
        "wins": 65, "losses": 17, "pct": 0.793, "gb": "-",
        "home": "34-7", "away": "31-10", "div": "12-4", "conf": "41-11",
        "ppg": 112.4, "opp_ppg": 103.9, "diff": 8.5
    },
    {
        "team": "Toronto Raptors",
        "wins": 59, "losses": 23, "pct": 0.72, "gb": 6,
        "home": "34-7", "away": "25-16", "div": "12-4", "conf": "40-12",
        "ppg": 111.7, "opp_ppg": 103.9, "diff": 7.8
    },
    {
        "team": "Golden State Warriors",
        "wins": 58, "losses": 24, "pct": 0.707, "gb": 7,
        "home": "29-12", "away": "29-12", "div": "13-3", "conf": "34-18",
        "ppg": 113.5, "opp_ppg": 107.5, "diff": 6
    },
    {
        "team": "Boston Celtics",
        "wins": 55, "losses": 27, "pct": 0.671, "gb": 10,
        "home": "27-14", "away": "28-13", "div": "12-4", "conf": "33-19",
        "ppg": 104, "opp_ppg": 100.4, "diff": 3.6
    },
    {
        "team": "Philadelphia 76ers",
        "wins": 52, "losses": 30, "pct": 0.634, "gb": 13,
        "home": "30-11", "away": "22-19", "div": "9-7", "conf": "34-18",
        "ppg": 109.8, "opp_ppg": 105.3, "diff": 4.5
    },
    {
        "team": "Cleveland Cavaliers",
        "wins": 50, "losses": 32, "pct": 0.61, "gb": 15,
        "home": "29-12", "away": "21-20", "div": "11-5", "conf": "35-17",
        "ppg": 110.9, "opp_ppg": 109.9, "diff": 0.9
    },
    {
        "team": "Portland Trail Blazers",
        "wins": 49, "losses": 33, "pct": 0.598, "gb": 16,
        "home": "28-13", "away": "21-20", "div": "9-7", "conf": "31-21",
        "ppg": 105.6, "opp_ppg": 103, "diff": 2.6
    },
    {
        "team": "Oklahoma City Thunder",
        "wins": 48, "losses": 34, "pct": 0.585, "gb": 17,
        "home": "27-14", "away": "21-20", "div": "5-11", "conf": "28-24",
        "ppg": 107.9, "opp_ppg": 104.4, "diff": 3.4
    },
    {
        "team": "Utah Jazz",
        "wins": 48, "losses": 34, "pct": 0.585, "gb": 17,
        "home": "28-13", "away": "20-21", "div": "7-9", "conf": "34-18",
        "ppg": 104.1, "opp_ppg": 99.8, "diff": 4.3
    },
    {
        "team": "Indiana Pacers",
        "wins": 48, "losses": 34, "pct": 0.585, "gb": 17,
        "home": "27-14", "away": "21-20", "div": "10-6", "conf": "32-20",
        "ppg": 105.6, "opp_ppg": 104.2, "diff": 1.4
    },
    {
        "team": "New Orleans Pelicans",
        "wins": 48, "losses": 34, "pct": 0.585, "gb": 17,
        "home": "24-17", "away": "24-17", "div": "9-7", "conf": "27-25",
        "ppg": 111.7, "opp_ppg": 110.4, "diff": 1.3
    },
    {
        "team": "San Antonio Spurs",
        "wins": 47, "losses": 35, "pct": 0.573, "gb": 18,
        "home": "33-8", "away": "14-27", "div": "9-7", "conf": "29-23",
        "ppg": 102.7, "opp_ppg": 99.8, "diff": 2.9
    },
    {
        "team": "Minnesota Timberwolves",
        "wins": 47, "losses": 35, "pct": 0.573, "gb": 18,
        "home": "30-11", "away": "17-24", "div": "10-6", "conf": "34-18",
        "ppg": 109.5, "opp_ppg": 107.3, "diff": 2.2
    },
    {
        "team": "Denver Nuggets",
        "wins": 46, "losses": 36, "pct": 0.561, "gb": 19,
        "home": "31-10", "away": "15-26", "div": "9-7", "conf": "28-24",
        "ppg": 110, "opp_ppg": 108.5, "diff": 1.5
    },
    {
        "team": "Miami Heat",
        "wins": 44, "losses": 38, "pct": 0.537, "gb": 21,
        "home": "26-15", "away": "18-23", "div": "11-5", "conf": "31-21",
        "ppg": 103.4, "opp_ppg": 102.9, "diff": 0.5
    },
    {
        "team": "Milwaukee Bucks",
        "wins": 44, "losses": 38, "pct": 0.537, "gb": 21,
        "home": "25-16", "away": "19-22", "div": "6-10", "conf": "27-25",
        "ppg": 106.5, "opp_ppg": 106.8, "diff": -0.3
    },
    {
        "team": "Washington Wizards",
        "wins": 43, "losses": 39, "pct": 0.524, "gb": 22,
        "home": "23-18", "away": "20-21", "div": "8-8", "conf": "28-24",
        "ppg": 106.6, "opp_ppg": 106, "diff": 0.6
    },
    {
        "team": "LA Clippers",
        "wins": 42, "losses": 40, "pct": 0.512, "gb": 23,
        "home": "22-19", "away": "20-21", "div": "12-4", "conf": "24-28",
        "ppg": 109, "opp_ppg": 109, "diff": 0
    },
    {
        "team": "Detroit Pistons",
        "wins": 39, "losses": 43, "pct": 0.476, "gb": 26,
        "home": "25-16", "away": "14-27", "div": "9-7", "conf": "24-28",
        "ppg": 103.8, "opp_ppg": 103.9, "diff": -0.1
    },
    {
        "team": "Charlotte Hornets",
        "wins": 36, "losses": 46, "pct": 0.439, "gb": 29,
        "home": "21-20", "away": "15-26", "div": "11-5", "conf": "22-30",
        "ppg": 108.2, "opp_ppg": 108, "diff": 0.3
    },
    {
        "team": "Los Angeles Lakers",
        "wins": 35, "losses": 47, "pct": 0.427, "gb": 30,
        "home": "20-21", "away": "15-26", "div": "6-10", "conf": "19-33",
        "ppg": 108.1, "opp_ppg": 109.6, "diff": -1.5
    },
    {
        "team": "New York Knicks",
        "wins": 29, "losses": 53, "pct": 0.354, "gb": 36,
        "home": "19-22", "away": "10-31", "div": "6-10", "conf": "17-35",
        "ppg": 104.5, "opp_ppg": 108, "diff": -3.6
    },
    {
        "team": "Brooklyn Nets",
        "wins": 28, "losses": 54, "pct": 0.341, "gb": 37,
        "home": "15-26", "away": "13-28", "div": "1-15", "conf": "19-33",
        "ppg": 106.6, "opp_ppg": 110.3, "diff": -3.7
    },
    {
        "team": "Sacramento Kings",
        "wins": 27, "losses": 55, "pct": 0.329, "gb": 38,
        "home": "14-27", "away": "13-28", "div": "5-11", "conf": "14-38",
        "ppg": 98.8, "opp_ppg": 105.8, "diff": -7
    },
    {
        "team": "Chicago Bulls",
        "wins": 27, "losses": 55, "pct": 0.329, "gb": 38,
        "home": "17-24", "away": "10-31", "div": "4-12", "conf": "21-31",
        "ppg": 102.9, "opp_ppg": 110, "diff": -7
    },
    {
        "team": "Orlando Magic",
        "wins": 25, "losses": 57, "pct": 0.305, "gb": 40,
        "home": "17-24", "away": "8-33", "div": "5-11", "conf": "15-37",
        "ppg": 103.4, "opp_ppg": 108.2, "diff": -4.8
    },
    {
        "team": "Dallas Mavericks",
        "wins": 24, "losses": 58, "pct": 0.293, "gb": 41,
        "home": "15-26", "away": "9-32", "div": "5-11", "conf": "14-38",
        "ppg": 102.3, "opp_ppg": 105.4, "diff": -3
    },
    {
        "team": "Atlanta Hawks",
        "wins": 24, "losses": 58, "pct": 0.293, "gb": 41,
        "home": "16-25", "away": "8-33", "div": "5-11", "conf": "11-40",
        "ppg": 103.4, "opp_ppg": 108.8, "diff": -5.5
    },
    {
        "team": "Memphis Grizzlies",
        "wins": 22, "losses": 60, "pct": 0.268, "gb": 43,
        "home": "16-25", "away": "6-35", "div": "5-11", "conf": "18-34",
        "ppg": 99.3, "opp_ppg": 105.5, "diff": -6.2
    },
    {
        "team": "Phoenix Suns",
        "wins": 21, "losses": 61, "pct": 0.256, "gb": 44,
        "home": "10-31", "away": "11-30", "div": "4-12", "conf": "15-37",
        "ppg": 103.9, "opp_ppg": 113.3, "diff": -9.4
    }
];
var ProductArray = [
    {
        "product_id": 1,
        "product_name": "Chai",
        "supplier_id": 1,
        "category_id": 1,
        "unit_price": 18,
        "units_in_stock": 39,
        "units_on_order": 0,
        "reorder_level": 10,
        "discontinued": false
    },
    {
        "product_id": 2,
        "product_name": "Chang",
        "supplier_id": 1,
        "category_id": 1,
        "unit_price": 19,
        "units_in_stock": 17,
        "units_on_order": 40,
        "reorder_level": 25,
        "discontinued": false
    },
    {
        "product_id": 3,
        "product_name": "Aniseed Syrup",
        "supplier_id": 1,
        "category_id": 2,
        "unit_price": 10,
        "units_in_stock": 13,
        "units_on_order": 70,
        "reorder_level": 25,
        "discontinued": false
    },
    {
        "product_id": 4,
        "product_name": "Chef Anton's Cajun Seasoning",
        "supplier_id": 2,
        "category_id": 2,
        "unit_price": 22,
        "units_in_stock": 53,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 5,
        "product_name": "Chef Anton's Gumbo Mix",
        "supplier_id": 2,
        "category_id": 2,
        "unit_price": 21.35,
        "units_in_stock": 0,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": true
    },
    {
        "product_id": 6,
        "product_name": "Grandma's Boysenberry Spread",
        "supplier_id": 3,
        "category_id": 2,
        "unit_price": 25,
        "units_in_stock": 120,
        "units_on_order": 0,
        "reorder_level": 25,
        "discontinued": false
    },
    {
        "product_id": 7,
        "product_name": "Uncle Bob's Organic Dried Pears",
        "supplier_id": 3,
        "category_id": 7,
        "unit_price": 30,
        "units_in_stock": 15,
        "units_on_order": 0,
        "reorder_level": 10,
        "discontinued": false
    },
    {
        "product_id": 8,
        "product_name": "Northwoods Cranberry Sauce",
        "supplier_id": 3,
        "category_id": 2,
        "unit_price": 40,
        "units_in_stock": 6,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 9,
        "product_name": "Mishi Kobe Niku",
        "supplier_id": 4,
        "category_id": 6,
        "unit_price": 97,
        "units_in_stock": 29,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": true
    },
    {
        "product_id": 10,
        "product_name": "Ikura",
        "supplier_id": 4,
        "category_id": 8,
        "unit_price": 31,
        "units_in_stock": 31,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 11,
        "product_name": "Queso Cabrales",
        "supplier_id": 5,
        "category_id": 4,
        "unit_price": 21,
        "units_in_stock": 22,
        "units_on_order": 30,
        "reorder_level": 30,
        "discontinued": false
    },
    {
        "product_id": 12,
        "product_name": "Queso Manchego La Pastora",
        "supplier_id": 5,
        "category_id": 4,
        "unit_price": 38,
        "units_in_stock": 86,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 13,
        "product_name": "Konbu",
        "supplier_id": 6,
        "category_id": 8,
        "unit_price": 6,
        "units_in_stock": 24,
        "units_on_order": 0,
        "reorder_level": 5,
        "discontinued": false
    },
    {
        "product_id": 14,
        "product_name": "Tofu",
        "supplier_id": 6,
        "category_id": 7,
        "unit_price": 23.25,
        "units_in_stock": 35,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 15,
        "product_name": "Genen Shouyu",
        "supplier_id": 6,
        "category_id": 2,
        "unit_price": 15.5,
        "units_in_stock": 39,
        "units_on_order": 0,
        "reorder_level": 5,
        "discontinued": false
    },
    {
        "product_id": 16,
        "product_name": "Pavlova",
        "supplier_id": 7,
        "category_id": 3,
        "unit_price": 17.45,
        "units_in_stock": 29,
        "units_on_order": 0,
        "reorder_level": 10,
        "discontinued": false
    },
    {
        "product_id": 17,
        "product_name": "Alice Mutton",
        "supplier_id": 7,
        "category_id": 6,
        "unit_price": 39,
        "units_in_stock": 0,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": true
    },
    {
        "product_id": 18,
        "product_name": "Carnarvon Tigers",
        "supplier_id": 7,
        "category_id": 8,
        "unit_price": 62.5,
        "units_in_stock": 42,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    },
    {
        "product_id": 19,
        "product_name": "Teatime Chocolate Biscuits",
        "supplier_id": 8,
        "category_id": 3,
        "unit_price": 9.2,
        "units_in_stock": 25,
        "units_on_order": 0,
        "reorder_level": 5,
        "discontinued": false
    },
    {
        "product_id": 20,
        "product_name": "Sir Rodney's Marmalade",
        "supplier_id": 8,
        "category_id": 3,
        "unit_price": 81,
        "units_in_stock": 40,
        "units_on_order": 0,
        "reorder_level": 0,
        "discontinued": false
    }
];