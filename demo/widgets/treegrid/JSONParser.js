var JSONParser = {
    parseJSON: function (jsonTxt) {
        var dataArr = [];
        if (!jsonTxt) {
            return dataArr;
        }
        var json;
        try {
            if (z.util.isObject(jsonTxt) || z.util.isArray(jsonTxt)) {
                json = jsonTxt
            } else if (z.util.isString(jsonTxt)) {
                json = JSON.parse(jsonTxt);
            }
        } catch (e) {
            z.widget.notify("Parse error", {type: "error", duration: 2000});
        }
        if (!json) {
            return dataArr;
        }
        if (z.util.isObject(json)) {
            JSONParser._parseObjectData(dataArr, json);
        } else {
            JSONParser._parseArrayData(dataArr, json);
        }
        return dataArr;
    },
    _parseArrayData: function (dataArr, arrValue) {
        arrValue.forEach(function (item, index) {
            var itemData = {
                key: index,
                children: []
            };
            dataArr.push(itemData);
            if (z.util.isArray(item)) {
                JSONParser._parseArrayData(itemData.children, item);
            } else if (z.util.isObject(item)) {
                JSONParser._parseObjectData(itemData.children, item);
            } else {
                itemData.value = item;
            }
        });
    },
    _parseObjectData: function (dataArr, objValue) {
        z.util.eachObject(objValue, function (key, value) {
            var itemData = {
                key: key,
                children: []
            };
            dataArr.push(itemData);
            if (z.util.isArray(value)) {
                itemData.key += ":[]";
                JSONParser._parseArrayData(itemData.children, value);
            } else if (z.util.isObject(value)) {
                itemData.key += ":{}";
                JSONParser._parseObjectData(itemData.children, value);
            } else {
                itemData.value = value;
            }
        });
    }
};