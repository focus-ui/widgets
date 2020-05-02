/**
 * {@link http://www.focus-ui.com}
 *
 * @version 1.1
 * @namespace
 */
var z = {};

/**
 * Releases the hold on the z shortcut identifier, so that other scripts can use it.
 *
 * @return {z}reference     - A reference to z, that you can save in a variable, for later use
 *
 * @example
 * var zx = z.noConflict();
 * console.log(zx.util.isString("abc"));
 */
z.noConflict = function () {
};

/**
 * @memberOf z
 * @namespace
 */
z.util = {
    /**
     * Determines whether the passed value is an Array.
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is an Array; otherwise, false.
     *
     * @example
     * z.util.isArray([1,2]);//true
     * z.util.isArray([]);//true
     * z.util.isArray(new Array(1,2));//true
     */
    isArray: function (value) {
    },

    /**
     * Determines whether the passed value is a String.
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is a String; otherwise, false.
     *
     * @example
     * z.util.isString("abc");//true
     * z.util.isString("");//true
     * z.util.isString(new String("abc"));//true
     */
    isString: function (value) {
    },

    /**
     * Determines whether the passed value is a Boolean
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is a Boolean; otherwise, false.
     *
     * @example
     * z.util.isBoolean(true);//true
     * z.util.isBoolean(false);//true
     * z.util.isBoolean(new Boolean(true));//true
     */
    isBoolean: function (value) {
    },

    /**
     * Determines whether the passed value is an Object
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is an Object; otherwise, false.
     *
     * @example
     * z.util.isObject({name:"focus-ui"});//true
     * z.util.isObject({});//true
     * z.util.isObject(Object.create(null));//true
     *
     * z.util.isObject(null) == false;
     * z.util.isObject(undefined) == false;
     */
    isObject: function (value) {
    },

    /**
     * Determines whether the passed value is a Function
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is a Function; otherwise, false.
     *
     * @example
     * z.util.isFunction(function(){});//true
     * z.util.isFunction(Math.abs);//true
     */
    isFunction: function (value) {
    },

    /**
     * Determines whether the passed value is a Number
     *
     * @param value         - The value to be checked.
     *
     * @return {Boolean}    - true if the value is a Number; otherwise, false.
     *
     * @example
     * z.util.isNumber(0);//true
     * z.util.isNumber(-1);//true
     * z.util.isNumber(new Number(0));//true
     */
    isNumber: function (value) {
    },

    /**
     * Merges one or more arrays to the target array
     *
     * @param {Array}targetArray    - The target array.
     * @param {Array}srcArrays      - The source array(s).
     *
     * @return {Array}targetArray   - The target array.
     *
     * @example
     * z.util.mergeArray([1,2],[3,4]);//[1,2,3,4]
     * z.util.mergeArray([1, 2], [3], [4], [[5, 6]]);//[1, 2, 3, 4, [5, 6]]
     */
    mergeArray: function (targetArray, srcArrays) {
    },

    /**
     * Executes a provided function once for each array element.
     * <b>★The callback function returns false to break the loop. If the loop will not be broken, just uses array.forEach.</b>
     *
     * @param {Array}array          - The array that eachArray is being applied to.
     * @param {Function}callback    - Function to execute for each element,<b>Returns false to break the loop.</b>, taking two arguments:
     *          <ul>
     *              <li>currentValue</li>   - The value of the current element being processed in the array.
     *              <li>index</li>          - The index of the current element being processed in the array.
     *          </ul>
     * @param {Object}[thisArg] - Value to use as this (i.e the reference Object) when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * var array = [1, 2, 3]
     * z.util.eachArray(function (item, index) {
     *    console.log(item);
     * });
     * var has2 = false;
     * z.util.eachArray(function (item, index) {
     *   console.log(item);
     *   if (item === 2) {
     *       has2 = true;
     *       return false;//stop
     *   }
     * });
     * </pre>
     */
    eachArray: function (array, callback, thisArg) {
    },

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     *
     * @param {Array}array          - The array filterArray was called upon.
     * @param {Function}callback    - Function is a predicate, to test each element of the array.
     *                                ★Return <b>true</b> to keep the element, false otherwise. It accepts two arguments:
     *                                  <ul>
     *                                      <li>element</li> - The current element being processed in the array.
     *                                      <li>index</li> - The index of the current element being processed in the array.
     *                                  </ul>
     * @param {Object}[thisArg]     - Value to use as this when executing callback.
     *
     * @return {Array}newArray - A new array with the elements that pass the test. If no elements pass the test, an empty array[] will be returned.
     *
     * @example
     * <pre>
     * var arr = [10,20,30];
     * var newArr = z.util.filterArray(arr,function (item) {
     *    return item > 10;
     * });
     * console.log(newArr);//[20,30]
     *</pre>
     */
    filterArray: function (array, callback, thisArg) {
    },

    /**
     * Returns the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
     *
     * @param {Array}array - The array findArray was called upon.
     * @param {Function}callback - Function to execute on each value in the array, taking two arguments:
     *          <ul>
     *              <li>element</li>The current element being processed in the array.
     *              <li>index</li>The index of the current element being processed in the array.
     *          </ul>
     * @param {Object}[thisArg] - Value to use as this when executing callback.
     *
     * @return {*}item - The first element in the array that satisfies the provided testing function(★return true); otherwise, undefined is returned.
     *
     * @example
     * <pre>
     * var arr = [
     *    {name:"a"},
     *    {name:"b"},
     *    {name:"c"}
     * ];
     * var c = z.util.findArray(arr,function (item) {
     *    return item.name === "c"
     * });
     * console.log(c);//{name:"c"}
     *</pre>
     */
    findArray: function (array, callback, thisArg) {
    },

    /**
     *  Removes the first element in the array that satisfies the provided testing function.
     *
     * @param {Array}array          - The array removeArrayItem was called upon.
     * @param {Function}callback    - Function to execute on each value in the array, taking two arguments:
     *                                  <ul>
     *                                      <li>element</li> - The current element being processed in the array.
     *                                      <li>index</li> - The index of the current element being processed in the array.
     *                                  </ul>
     *                                  ★<b>If the callback function returns true, the item will be removed and returned</b>
     * @param {Object}[thisArg]     - Value to use as this when executing callback.
     *
     * @return removedItem          - The first element in the array that satisfies the provided testing function; otherwise, undefined is returned.
     *
     * @example
     * <pre>
     * var arr = [
     *    {name: "a"},
     *    {name: "b"},
     *    {name: "c"}
     * ];
     * var bItem = z.util.removeArrayItem(arr, function (item) {
     *    return item.name === "b";
     * });
     * console.log(bItem);//{name:"b"}
     * console.log(arr);//[{name: "a"},{name: "c"}]
     * </pre>
     */
    removeArrayItem: function (array, callback, thisArg) {
    },

    /**
     * Creates an object composed of keys generated from the results of running each element of array.
     *
     * @param {Array}array                          - The specified array to be converted
     * @param {(String|Function)}keyOrFunction      - The specified key property or the function to generate the key.
     * @param {Object}[thisArg]                     - Value to use as this when executing key function. If keyOrFunction is not a function, it will be ignored.
     *
     * @return {Object}mapObject                    - The composed aggregate object.
     *
     * @example
     * <pre>
     * var array = [
     *      {name: "a", value: 10},
     *      {name: "b", value: 20},
     *      {name: "c", value: 30}
     * ];
     * var map1 = z.util.toArrayMap(array, "name");
     * console.log(map1);//{a:{"name":"a","value":10},b:{"name":"b","value":20},c:{"name":"c","value":30}}
     * var map2 = z.util.toArrayMap(array, function (item) {
     *      return "_" + item.name;
     * });
     * console.log(map2);//{_a:{"name":"a","value":10},_b:{"name":"b","value":20},_c:{"name":"c","value":30}}
     *
     * </pre>
     */
    toArrayMap: function (array, keyOrFunction, thisArg) {
    },


    /**
     * Merges the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
     * *Properties in the target object will be overwritten by properties in the sources if they have the same key.
     * *Later sources' properties will similarly overwrite earlier ones.
     * *For deep merge, please see {@link z.util.deepMergeObject}.
     *
     * @param {Object}targetObject          - The target object.
     * @param {...Object}sourceObjects      - The source object(s).
     *
     * @return {Object}targetObject         - The target object.
     *
     *
     * @example
     * <pre>
     * console.log(z.util.mergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {d: 4}, {e: "a"}));
     * {
     *   a: 1,
     *   b: 2,
     *   c: {x: 100, y: 200},
     *   d: 4,
     *   e: "a"
     * }
     *
     * console.log(z.util.mergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {c: 4}, {e: "a"}));
     * {
     *   a: 1,
     *   b: 2,
     *   c: 4,
     *   e: "a"
     * }
     *
     * console.log(z.util.mergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {c: {z: 300}}, {e: "a"}));
     * {
     *   a: 1,
     *   b: 2,
     *   c: {z: 300},
     *   e: "a"
     * }
     *</pre>
     */
    mergeObject: function (targetObject, sourceObjects) {
    },

    /**
     * Merges the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
     * *The difference between {@link z.util.deepMergeObject} and {@link z.util.mergeObject} is that for the Object type property,
     * <ul>
     *     <li>mergeObject</li>only makes a simple assignment
     *     <li>deepMergeObject</li>creates a new object and assigns to the targetObject
     * </ul>
     *
     * @param {Object}targetObject          - The target object.
     * @param {...Object}sourceObjects      - The source object(s).
     *
     * @return {Object}targetObject         - The target object.
     *
     *
     * @example
     * <pre>
     * console.log(z.util.deepMergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {d: 4}, {e: "a"}));
     * //same as mergeObject
     * {
     *   a: 1,
     *   b: 2,
     *   c: {x: 100, y: 200},
     *   d: 4,
     *   e: "a"
     * }
     *
     * console.log(z.util.deepMergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {c: 4}, {e: "a"}));
     * //same as mergeObject
     * {
     *   a: 1,
     *   b: 2,
     *   c: 4,
     *   e: "a"
     * }
     *
     * console.log(z.util.deepMergeObject({a: 1, b: 2, c: {x: 100, y: 200}}, {c: {z: 300}}, {e: "a"}));
     * //Different from mergeObject
     * {
     *   a: 1,
     *   b: 2,
     *   c:{x: 100, y: 200, z: 300},
     *   e: "a"
     * }
     *</pre>
     */
    deepMergeObject: function (targetObject, sourceObjects) {
    },

    /**
     * Executes a provided function once for each object enumerable own property.
     *
     * @param {Object}object        - The object that eachObject is being applied to.
     * @param {Function}callback    - Function to execute for each property, taking two arguments:
     *          <ul>
     *              <li>key</li>     - The key of the current property being processed in the object.
     *              <li>value</li>   - The value of the current property being processed in the object.
     *          </ul>
     *          *<b>If the callback function returns false, the eachObject will stop</b>
     * @param {Object}[thisArg] -Value to use as this when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * var obj = {name:"focus-ui",version:0.6};
     * z.util.eachObject(obj,function (key, value) {
     *    console.log(key,value);
     * });
     * </pre>
     */
    eachObject: function (object, callback, thisArg) {
    },

    /**
     *  Creates a new object with all enumerable own properties that pass the test implemented by the provided function.
     *
     * @param {Object}object        - The object that filterObject is being applied to.
     * @param {Function}callback    -  Function is a predicate, to test each enumerable own property of the object. Return true to keep the property, false otherwise. It accepts two arguments:
     *          <ul>
     *              <li>key</li>     - The key of the current property being processed in the object.
     *              <li>value</li>   - The value of the current property being processed in the object.
     *          </ul>
     *
     * @param {Object}[thisArg]     - Value to use as this when executing callback.
     *
     * @return {Object}newObject   - A new object with the enumerable own properties that pass the test. If no properties pass the test, an empty object will be returned.
     *
     * @example
     * <pre>
     * var object = {
     *      a: 1,
     *      b: 2,
     *      c: {x: 100, y: 200},
     *      d: "abc",
     *      e: "123"
     *  };
     * var stringObject = z.util.filterObject(object, function (key, value) {
     *    return z.util.isString(value);
     * });
     * console.log(stringObject);//{d:"abc",e:"123"}
     * </pre>
     *
     */
    filterObject: function (object, callback, thisArg) {
    },

    /**
     *  Gets the value at path of object.
     *  <b>Only processing object, array is not processed</b>
     * @param {Object}object            - The object to query
     * @param {String}deepPath          - The path of the property to get
     *
     * @param {String}[pathSeparator]   - Optional. Specifies the character, or the regular expression, to use for splitting the path. default "."
     *
     * @return {*}value   -  the result value.
     *
     * @example
     * <pre>
     * var object = {
     *     c: {
     *         x: 100,
     *         y: 200,
     *         z: {
     *             a: "abc",
     *             b: "xyz"
     *         }
     *     }
     * };
     * var czb = z.util.getObjectDeepValue(object, "c.z.b");//"xyz"
     *</pre>
     */
    getObjectDeepValue: function (object, deepPath, pathSeparator) {
    },

    /**
     *  Sets the value at path of object. If a portion of path doesn't exist, it's created
     *  <b>Only processing object, array is not processed</b>
     *
     * @param {Object}object            - The object to modify
     * @param {String}deepPath          - The path of the property to set.
     * @param {*}value                  - The value to set.
     * @param {String}[pathSeparator]   - Optional. Specifies the character, or the regular expression, to use for splitting the path. default "."
     *
     * @return void
     *
     * @example
     * <pre>
     * var object = {
     *     c: {
     *         x: 100, y: 200, z: { a: "abc",b: "xyz"}
     *     }
     * };
     * z.util.setObjectDeepValue(object, "a", "1");
     * z.util.setObjectDeepValue(object, "b.m", "1000");
     * z.util.setObjectDeepValue(object, "c.z.c", 123);
     * console.log(object)
     * /!*{
     *       a: "1",
     *       b: {m: "1000" },
     *      c: {x: 100, y: 200, z: {a: "abc", b: "xyz", c: 123}}
     *   }*!/
     * </pre>
     */
    setObjectDeepValue: function (object, deepPath, value, pathSeparator) {
    },

    /**
     * Returns an array of a given object's own enumerable property values.
     *
     * @param {Object}object            - The object whose enumerable own property values are to be returned.
     * @return {Array}valueArray        - An array containing the given object's own enumerable property values.
     *
     * @example
     * <pre>
     * var object = {
     *    a: 'a',
     *    b: 1,
     *    c: false
     * };
     * console.log(z.util.getObjectValues(object));//["a", 1, false]
     * </pre>
     *
     */
    getObjectValues: function (object) {
    },

    /*#callBatch*/
    /**
     *  Calls a function after a specified number of milliseconds.
     *
     * @param {Function}callBack        - The function that will be executed
     * @param {Number}[delay]           - The number of milliseconds to wait before executing the code. If omitted, the value 20 is used
     * @param {Object}[thisArg]         - Value to use as this when executing callback.
     *
     * @return {String} callLaterID     - A string type value, representing the ID value of the timer that is set.
     *                                     Use this value with the cancelCallLater() method to cancel the timer.
     *
     * @example
     * <pre>
     * z.util.callLater(function () {
     *     console.log("1s later")
     * }, 1000)
     * </pre>
     * @see {@link z.util.cancelCallLater}
     */
    callLater: function (callBack, delay, thisArg) {
    },

    /**
     *
     * Cancels the function set with the callLater() to execute:
     *
     * @param {(String|Function)}idOrFunction     - The identifier/function you want to cancel callLater.
     *                                             <ul>
     *                                                 <li>IF it is id</li>that should be returned by the corresponding call to callLater().
     *                                                 <li>IF it is function</li>that should be the callBack function
     *                                             </ul>
     *
     * @param {Number}[delay]       - The number of milliseconds to wait before executing the code. If omitted, the value 20 is used
     * @param {Object}[thisArg]     - Value to use as this when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * //id
     * var id = z.util.callLater(function () {
     *     console.log("never called")
     * }, 1000);
     * z.util.cancelCallLater(id);
     *
     * //function
     * var callBack = function () {
     *     console.log("never called")
     * };
     * z.util.callLater(callBack, 1000);
     * z.util.cancelCallLater(callBack, 1000);
     * </pre>
     *
     * @see {@link z.util.callLater}
     */
    cancelCallLater: function (idOrFunction, delay, thisArg) {
    },

    /**
     * Calls a function with a fixed time delay between each call
     *
     * @param {Function}callBack            - The function that will be executed.
     *                                          <b>If the callback function returns false, the callInterval will stop.</b>
     * @param {Number}[intervals]           - The intervals (in milliseconds) on how often to execute the code. If omitted, the value 20 is used.
     * @param {Object}[thisArg]             - Value to use as this when executing callback.
     * @param {Boolean}[immediately]        - If true, the callBack function will execute immediately, when call callInterval.
     *
     * @return {String} callIntervalID      - A string type value, representing the ID value of the timer that is set.
     *                                         Use this value with the cancelCallInterval() method to cancel the timer.
     *
     * @example
     * <pre>
     * z.util.callInterval(function () {
     *     console.log("1s")
     * }, 1000);
     *
     * z.util.callInterval(function () {
     *     console.log("Run only once immediately");
     *     return false;//stop interval
     * }, 10000,null,true)
     * </pre>
     *
     * @see {@link z.util.cancelCallInterval}
     */
    callInterval: function (callBack, intervals, thisArg, immediately) {
    },

    /**
     * Cancels the function set with the callInterval() to execute:
     *
     * @param {(String|Function)}idOrFunction     - The identifier/function you want to cancel callInterval.
     *                                             <ul>
     *                                                 <li>IF it is id</li>that should be returned by the corresponding call to callInterval().
     *                                                 <li>IF it is function</li>that should be the callBack function
     *                                             </ul>
     * @param {Number}[intervals]               - The intervals (in milliseconds) on how often to execute the code. If omitted, the value 20 is used.
     * @param {Object}[thisArg]                 - Value to use as this when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * //id
     * var id = z.util.callInterval(function () {
     *        console.log("never called")
     *    }, 1000);
     * z.util.cancelCallInterval(id);
     *
     * //function
     * var callBack = function () {
     *        console.log("never called")
     *    };
     * z.util.callInterval(callBack, 1000);
     * z.util.cancelCallInterval(callBack, 1000)
     *</pre>
     * @see {@link z.util.callInterval}
     */
    cancelCallInterval: function (idOrFunction, intervals, thisArg) {
    },

    /**
     * Calls a function before the browser next repaint.
     *
     * @param {Function}callBack    - The function that will be executed
     * @param {Object}[thisArg]     - Value to use as this when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * z.util.callRAFLater(function () {
     *    console.log("callRAFLater")
     * });
     * </pre>
     *
     * @see {@link z.util.callLater}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame|requestAnimationFrame}
     */
    callRAFLater: function (callBack, thisArg) {
    },

    /**
     * Calls a function when browser repaints.
     *
     * @param {Function}callBack            - The function that will be executed.
     *                                          <b>If the callback function returns false, the callInterval will stop.</b>
     * @param {Object}[thisArg]             - Value to use as this when executing callback.
     * @param {Boolean}[immediately]        - if true the callBack function will execute immediately, when call callInterval.
     *
     * @return {String} callRAFIntervalID   - A string type value, representing the ID value of the timer that is set.
     *                                         Use this value with the cancelCallRAFInterval() method to cancel the timer.
     *
     * @example
     * <pre>
     * z.util.callRAFInterval(function () {
     *    console.log("callRAFInterval")
     * });
     *
     * var time = 0;
     * z.util.callRAFInterval(function () {
     *     console.log(time++);
     *     return time < 10;//stop interval
     * },  null, true)
     * </pre>
     *
     * @see {@link z.util.callInterval}
     * @see {@link z.util.cancelCallRAFInterval}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame|requestAnimationFrame}
     */
    callRAFInterval: function (callBack, thisArg, immediately) {
    },

    /**
     *  Cancels the function set with the callRAFInterval() to execute:
     *
     * @param {(String|Function)}idOrFunction     - The identifier/function you want to cancel callRAFInterval.
     *                                             <ul>
     *                                                 <li>IF it is id</li>that should be returned by the corresponding call to callRAFInterval().
     *                                                 <li>IF it is function</li>that should be the callBack function
     *                                             </ul>
     * @param {Object}[thisArg]                 - Value to use as this when executing callback.
     *
     * @return void
     *
     * @example
     * <pre>
     * //id
     * var id = z.util.callRAFInterval(function () {
     *     console.log("callRAFInterval")
     * });
     * z.util.cancelCallRAFInterval(id);
     * //function
     * var callBack = function () {
     *     console.log("callRAFInterval")
     * };
     * z.util.callRAFInterval(callBack);
     * z.util.cancelCallRAFInterval(callBack);
     * </pre>
     *
     * @see {@link z.util.callRAFInterval}
     */
    cancelCallRAFInterval: function (idOrFunction, thisArg) {
    }
};

/**
 * @memberOf z
 * @namespace
 */
z.dom = {
    /**
     * Queries the first element that matches a specified CSS selector(s) within the document/Element.
     *
     * @param {String}selectors                 - Specifies one or more CSS selectors to match the element.
     *                                             These are used to select HTML elements based on their id, classes, types, attributes, values of attributes, etc.
     * @param {(String|Element)}[rootElement]   - The root element to query.It can be selectors or an Element.If omitted, the root element is document.
     *
     * @return element                         -  The first element that matches the specified CSS selector(s).
     *                                              If no matches are found, null is returned. Throws a SYNTAX_ERR exception if the specified selector(s) is invalid.
     *
     * @example
     * z.dom.query("#id");
     * z.dom.query(".class");
     * z.dom.query("#id","#parentID");
     *
     * @see {@link z.dom.queryAll}
     * @see {@link https://www.w3schools.com/cssref/css_selectors.asp|css_selectors}
     */
    query: function (selectors, rootElement) {
    },

    /**
     *
     * Queries all the elements that match a specified CSS selector(s) within the document/Element.
     *
     * @param {String}selectors                  - Specifies one or more CSS selectors to match the element.
     *                                             These are used to select HTML elements based on their id, classes, types, attributes, values of attributes, etc.
     * @param {(String|Element)}[rootElement]     - The root element to query.It can be selectors or an Element.If omitted, the root element is document.
     *
     * @return {Array}elementArray              - An array,representing all elements in the document that matches the specified CSS selector(s).
     *                                            The array is static, meaning that changes in the DOM has NO effect in the collection.
     *                                            Throws a SYNTAX_ERR exception if the selector(s) is invalid
     *
     * @example
     * z.dom.queryAll("a");
     * z.dom.queryAll(".class");
     * z.dom.queryAll("span","div");
     *
     * @see {@link z.dom.query}
     * @see {@link https://www.w3schools.com/cssref/css_selectors.asp|css_selectors}
     */
    queryAll: function (selectors, rootElement) {
    },

    /**
     * Gets the element immediately following the specified element, in the same tree level.
     *
     * @param {(String|Element)}element       - The specified element.It can be selectors or an Element.
     *
     * @return {Element}nextElement         - An Element node, representing the next sibling of an element, or null if there is no next sibling.
     *
     * @example
     * z.dom.nextElementSibling(z.dom.query("i","button"))
     *
     */
    nextElementSibling: function (element) {
    },

    /**
     * Gets the previous element of the specified element, in the same tree level.
     *
     * @param {(String|Element)}element       - The specified element.It can be selectors or an Element.
     *
     * @return {Element}previousElement     - An Element node, representing the previous sibling of an element, or null if there is no previous sibling.
     *
     * @example
     * z.dom.previousElementSibling(z.dom.query("i","button"))
     */
    previousElementSibling: function (element) {
    },

    /**
     * Adds one or more class names to an element.
     * If the specified class already exist, the class will not be added.
     *
     * @param {(String|Element)}element       - The specified element.It can be selectors or an Element.
     * @param {...String}cls                - The specified one or more class names.
     *
     * @return void
     *
     * @example
     * z.dom.addClass("#id", "class1");
     * z.dom.addClass("#id", "class2", "class3");
     * z.dom.addClass("#id", "class4 class5", "class6 class7");
     *
     */
    addClass: function (element, cls) {
    },

    /**
     * Removes one or more class names from an element.
     * Removing a class that does not exist, does NOT throw an error
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {...String}cls                - The specified one or more class names.
     *
     * @return void
     *
     * @example
     * z.dom.removeClass("#id", "class1");
     * z.dom.removeClass("#id", "class2", "class3");
     * z.dom.removeClass("#id", "class4 class5", "class6 class7");
     */
    removeClass: function (element, cls) {
    },

    /**
     * Toggles between one or more class names for an element.
     *
     * @param {(String|Element)}element         - The specified element.It can be selectors or an Element.
     * @param {...String}cls                    - The specified one or more class names.
     * @param {Boolean}[force]                  - Optional. A Boolean value that forces the class to be added or removed, regardless of whether or not it already existed
     *                                          If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
     *
     * @return void
     *
     * @example
     * <pre>
     * z.dom.toggleClass("#id", "class1");
     * z.dom.toggleClass("#id", "class2", "class3");
     * z.dom.toggleClass("#id", "class4 class5", "class6 class7");
     * z.dom.toggleClass("#id", "class4 class5", "class6 class7",false);//Remove class4 class5 class6 class7
     * z.dom.toggleClass("#id", "class4 class5", "class6 class7",true);//Add class4 class5 class6 class7
     * </pre>
     */
    toggleClass: function (element, cls, force) {
    },

    /**
     * Sets one or more class names to an element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {...String}cls                - The specified one or more class names.
     *
     * @return void
     *
     * @example
     * z.dom.setClass("#id","class1","class2 class3");
     */
    setClass: function (element, cls) {
    },

    /**
     * Determines whether an element has the specified class name.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}cls                   - The specified class name.
     *
     * @return {Boolean} - true if the element has the specified class name; otherwise, false.
     *
     * @example
     * z.dom.containsClass("#id","class1")
     *
     */
    containsClass: function (element, cls) {
    },


    /**
     * Sets the ★<b>inline</b> style of an element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {(String|Object)}style        - The style property. If it is Object,the value parameter will be ignored
     * @param {*}[value]                    - The specified style value.
     *
     * @return void
     *
     * @example
     * <pre>
     * z.dom.setStyle("#id","color","red");
     * z.dom.setStyle("#id",{"color":"red","font-size":"18px","fontWeight":"bold"})
     * <pre>
     */
    setStyle: function (element, style, value) {
    },

    /**
     * Gets the ★actual (computed) CSS property value of the specified element.
     * The computed style is the style actually used in displaying the element, after "stylings" from multiple sources have been applied.
     * Style sources can include: internal style sheets, external style sheets, inherited styles and browser default styles.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}style                 - The specified style property.
     *
     * @return {*}value                     - The actual (computed) CSS property value.
     *
     * @example
     * z.dom.getStyle("#id","color");
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle|getComputedStyle}
     */
    getStyle: function (element, style) {
    },

    /**
     * Removes the specified ★<b>inline</b> style of an element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}style                 - The specified style property.
     *
     * @return void
     *
     * @example
     * z.dom.removeStyle("#id","border");
     */
    removeStyle: function (element, style) {
    },

    /**
     * Sets the value of an attribute on the specified element.
     * If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
     *
     * @param {(String|Element)}element         - The specified element.It can be selectors or an Element.
     * @param {(String|Object)}attributeName    - The specified the name of the attribute whose value is to be set.
     *                                              If it is Object,the value parameter will be ignored
     * @param {String}[value]                   - The value to assign to the attribute
     *
     * @return void
     *
     * @example
     * z.dom.setAttribute("#id","model","name");
     * z.dom.setAttribute("#id",{"model":"name","disabled":true});
     *
     */
    setAttribute: function (element, attributeName, value) {
    },

    /**
     * Gets the value of a specified attribute on the element.
     * If the given attribute does not exist, the value returned will either be null or "" (the empty string)
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}attributeName         - The name of the attribute whose value you want to get.
     *
     * @return {String} value               - A String, representing the specified attribute's value.
     *
     * @example
     * z.dom.getAttribute("#id","model");
     */
    getAttribute: function (element, attributeName) {
    },

    /**
     * Gets all the attributes map on the element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     *
     * @return {Object} value               - A Object, representing all the attributes.
     *
     * @example
     * <pre>
     * &lt;input id="nameInput" model="name" rules="required" class="form-control"&gt
     *
     * console.log(z.dom.getAttributes("#nameInput"));
     * {
     *     id:"nameInput" ,
     *     model:"name" ,
     *     rules:"required" ,
     *     class:"form-control" ,
     * }
     * </pre>
     */
    getAttributes: function (element) {
    },
    /**
     * Removes the attribute with the specified name from the element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}attributeName         - The name of the attribute whose value you want to remove.
     *
     * @return void
     *
     * @example
     * z.dom.removeAttribute("#id","model")
     *
     */
    removeAttribute: function (element, attributeName) {
    },

    /**
     * Determines whether the specified element has the specified attribute or not.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}attributeName         - The specified name of the attribute.
     *
     * @return {Boolean}value               -A Boolean, returns true if the element has attributes, otherwise false
     *
     * @example
     * z.dom.hasAttribute("#id","model")
     */
    hasAttribute: function (element, attributeName) {
    },

    /**
     * Sets the value of the element.
     * If element is a multiple select,value should be an array of values.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param value                         - The specified value.
     *
     * @return void
     *
     * @example
     * z.dom.setValue("input", "abc");//value
     * z.dom.setValue("checkbox", true);//checked
     * z.dom.setValue("radio", true);//without name attribute: checked
     * z.dom.setValue("radio", "a");//without name attribute: the value of one of the radio group item
     * z.dom.setValue("select", "2");//value
     * z.dom.setValue("multiple_select", ["1","3"]);//value array
     * z.dom.setValue("textarea", "textarea text");//value
     * z.dom.setValue("img", "../_images/Chrome.png");//src
     * z.dom.setValue("div", "innerHTML");//innerHTML
     */
    setValue: function (element, value) {
    },

    /**
     * Gets the value of the element.
     * If element is a multiple select, returns an array of values.
     * If element is a radio input with name attribute, returns the value of the checked item in the same radio groups
     * If element is a radio input without name attribute, returns the checked value(true/false)
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     *
     * @return {*}value                     - The value of the element.
     *
     * @example
     * z.dom.getValue("input");//value
     * z.dom.getValue("checkbox");//checked
     * z.dom.getValue("radio");//without name attribute: checked
     * z.dom.getValue("radio");//without name attribute: the value of the checked item in the same radio groups
     * z.dom.getValue("select");//value
     * z.dom.getValue("textarea");//value
     * z.dom.getValue("img");//src
     * z.dom.getValue("div");//innerHTML
     */
    getValue: function (element) {
    },

    /**
     * Determines whether tagName of the element is the specified type.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     * @param {String}tagName               - The specified tagName.
     *
     * @return {Boolean}                    - true if the tagName of the element is specified; otherwise, false.
     *
     * @example
     * console.log(z.dom.isTagType("#setBtn", "button"));
     * console.log(z.dom.isTagType("#getBtn", "BUTTON"));
     *
     */
    isTagType: function (element, tagName) {
    },

    /**
     * Creates an Element Node with the specified tagName and class.
     *
     * @param {String}tagName           - A string that specifies the type of element to be created
     * @param {...String}[className]    - Optional. The specified class
     *
     * @return {Element}newElement      -An Element object, which represents the created Element node
     *
     * @example
     * z.dom.create("div");
     * z.dom.create("div","class1 class2");
     */
    create: function (tagName, className) {
    },

    /**
     * Removes the element from it's parentNode.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     *
     * @return {Element}removedElement      - The removed element.
     *
     * @example
     * z.dom.remove("#id");
     */
    remove: function (element) {
    },

    /**
     * Remove all child nodes from the specified element.
     *
     * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
     *
     * @return void
     *
     * @example
     * z.dom.empty("#id")
     */
    empty: function (element) {
    },

    /**
     * Inserts a node before the reference node.
     *
     * @param {(String|Element)}newNode             - The node object you want to insert
     * @param {(String|Element)}referenceNode       - The reference node.
     *
     * @return {Element}newNode                    - The Node Object, representing the inserted node
     *
     * @example
     * z.dom.insertBefore(btn0,btn1);//btn0 is before btn1
     */
    insertBefore: function (newNode, referenceNode) {
    },

    /**
     * Inserts a node after the reference node.
     *
     * @param {(String|Element)}newNode             - The node object you want to insert
     * @param {(String|Element)}referenceNode       - The reference node.
     *
     * @return {Element}newNode                    - The Node Object, representing the inserted node
     *
     * @example
     * z.dom.insertAfter(btn1,btn0);//btn1 is after btn0
     */
    insertAfter: function (newNode, referenceNode) {
    },

    /**
     * Inserts an element before the first child element of a specified parent node.
     *
     * @param {(String|Element)}newNode     - The node object you want to insert.
     * @param parentNode                    - The specified parent node.
     *
     * @return {Element}newNode            - The Node Object, representing the inserted node
     *
     * @example
     * z.dom.insertFirst(btn,div);//btn is the first child of the div.
     */
    insertFirst: function (newNode, parentNode) {
    },

    /**
     * Adds a node to the end of the list of children of a specified parent node.
     *
     * @param newNode               - The node object you want to add.
     * @param parentNode            - The specified parent node.
     *
     * @return {Element}newNode    - The Node Object, representing the inserted node
     *
     * @example
     * z.dom.insertFirst(btn,div);//btn is the last child of the div.
     */
    appendChild: function (newNode, parentNode) {
    }
    /*#focus*/
    /*#geom*/,
    event: {
        /**
         * Specifies the function to run when the page Document Object Model (DOM) is ready for JavaScript code to execute.
         * If DOM is already ready, the function will run immediately.
         * It is same as z.ready
         *
         *
         * @param {Function}listener    - The specified callBack function.
         * @param {Object}[thisArg]     - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.event.ready(function () {
         *    alert("dom is ready")
         * });
         * z.ready(function(){
         *    alert("dom is ready")
         * });
         * </pre>
         */
        ready: function (listener, thisArg) {
        },

        /**
         * Sets up a function that will be called whenever the specified event is delivered to the target
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param type                          - A string representing the event type to listen for. Event Modifiers are support
         *                                        <table>
         *                                            <tr>
         *                                                <th>modifier</th>
         *                                                <th>description</th>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>stop</td>
         *                                                <td>event.stopPropagation() method will be called</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>prevent</td>
         *                                                <td>event.preventDefault() method will be called</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>ctrl</td>
         *                                                <td>the listener will be called only when event.ctrlKey === true</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>shift</td>
         *                                                <td>the listener will be called only when event.shiftKey === true</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>alt</td>
         *                                                <td>the listener will be called only when event.altKey === true</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>meta</td>
         *                                                <td>the listener will be called only when event.metaKey === true</td>
         *                                            </tr>
         *                                            <tr>
         *                                                <td>KeyboardEvent.key</td>
         *                                                <td>for keyboard event(keyup/keydown/keypress), the listener will be called only when event.key === modifier</td>
         *                                            </tr>
         *                                        </table>
         * @param listener                      - The specified function to run when the event occurs.
         * @param {Object}[thisArg]             - The Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.event.addEventListener("#saveBtn", "click", function (event) {
         *    alert("onclick");
         * });
         *  z.dom.event.on("#saveBtn", "click.stop", function (event) {
         *    //event.stopPropagation() method will be called
         *    alert("onclick");
         * });
         * z.dom.event.on("#saveBtn", "click.ctrl", function (event) {
         *    //the listener will be called only when event.ctrlKey === true
         *    alert("onclick");
         * });
         * z.dom.event.on("#filterInput", "keydown.Escape", function (event) {
         *    //the listener will be called only when event.key === "Escape"
         *    alert("keydown");
         * });
         * z.dom.event.on("#filterInput", "keydown.Enter", function (event) {
         *    //the listener will be called only when event.key === "Enter"
         *    alert("keydown");
         * });
         *
         * </pre>
         */
        addEventListener: function (element, type, listener, thisArg) {
        },

        /**
         * Removes an event handler that has been attached with the {@link z.dom.event.addEventListener} method.
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param type                          - A string representing the event type to listen for.
         * @param listener                      - The specified function to remove.
         * @param {Object}[thisArg]             - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * var listener = function () {
         *     alert("onclick");
         * };
         * z.dom.event.addEventListener("#saveBtn", "click", listener);//add
         * z.dom.event.removeEventListener("#saveBtn", "click", listener);//remove
         * z.dom.event.off("#saveBtn", "click.ctrl", listener);//remove
         * z.dom.event.off("#filterInput", "keydown.Escape", listener);//remove
         * </pre>
         * @see {@link z.dom.event.removeEventListener}.
         */
        removeEventListener: function (element, type, listener, thisArg) {
        },

        /**
         * This is an alias for {@link z.dom.event.addEventListener}.
         */
        on: function (element, type, listener, thisArg) {
        },

        /**
         * This is an alias for {@link z.dom.event.removeEventListener}.
         */
        off: function (element, type, listener, thisArg) {
        },

        /**
         * Sets up a function that will be called whenever the click event is delivered to the target.
         * This method is a shortcut for z.dom.event.addEventListener(element, "click", listener, thisArg);
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param {Function}listener            - The specified function to run when the click event occurs.
         * @param {Object}[thisArg]             - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.event.onclick("#saveBtn",function () {
         *     alert("click");
         * });
         * </pre>
         *
         * @see {@link z.dom.event.addEventListener}
         */
        onclick: function (element, listener, thisArg) {
        },


        /**
         * Sets up a function that will be called whenever the change event is delivered to the target.
         * This method is a shortcut for z.dom.event.addEventListener(element, "change", listener, thisArg);
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param listener                      - The specified function to run when the change event occurs.
         * @param {Object}[thisArg]             - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.onchange("select",function () {
         *     alert("change");
         * });
         * </pre>
         *
         * @see {@link z.dom.event.addEventListener}
         */
        onchange: function (element, listener, thisArg) {
        },

        /**
         * Sets up a function that will be called whenever the wheel(wheel/mousewheel/MozMousePixelScroll) event is delivered to the target.
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param listener                      - The specified function to run when the wheel event occurs.
         * @param {Object}[thisArg]             - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.onwheel("div",function () {
         *     console.log("wheel");
         * });
         * </pre>
         *
         * @see {@link z.dom.event.addEventListener}
         */
        onwheel: function (element, listener, thisArg) {
        },

        /**
         * Sets up a function that will be called whenever the resize event is delivered to the target.
         *
         * @param {(String|Element)}element     - The specified element.It can be selectors or an Element.
         * @param listener                      - The specified function to run when the resize event occurs.
         * @param {Object}[thisArg]             - Value to use as this (i.e the reference Object) when executing listener.
         *
         * @return void
         *
         * @example
         * <pre>
         * z.dom.onresize("div",function () {
         *     alert("resize");
         * });
         *</pre>
         */
        onresize: function (element, listener, thisArg) {
        },
        /**
         * Starting with the event.target itself, traverses parents (heading toward the document root) of the target until it finds a node that matches the provided selectorString.
         * Will return itself or the matching ancestor. If no such element exists, it returns null.
         *
         * @param {Event}event                  - The delivered event.
         * @param {String}selectors             - A DOMString containing a selector list.
         *
         * @return {Element}closestTarget      - The Element which is the closest ancestor of the selected elements. It may be null.
         *
         * @example
         * <pre>
         * &lt;button  id="btn1" &gt;&lt;i class="fa  fa-sign-in"&gt;&lt;/i&gt; Sign In&lt;/button&gt;
         * z.dom.event.onclick("#btn1", function (evt) {
         *      console.log(evt.target);
         *      console.log(z.dom.event.getTarget(evt, "button"));
         *  });
         * </pre>
         */
        getTarget: function (event, selectors) {
        }
    }
};

/**
 * @memberOf z
 * @namespace
 */
z.bom = {
    /**
     * Sets the cookie value associated with the current document.
     * Adds that key to the cookie, or updates that key's value if it already exists.
     *
     * @param {String}cookieName            - The name of the cookie to create/overwrite
     * @param {*}value                      - The value of the cookie
     * @param {Number}[expire_minutes]      - Optional. The expires minutes.If omitted, the key will not expire
     *
     * @return void;
     *
     * @example
     * <pre>
     * z.bom.setCookie("name", "cookie value");
     * z.bom.setCookie("name1", "cookie value", 30);//expire after 30 minutes
     * </pre>
     *
     * @see {@link z.bom.getCookie}
     * @see {@link z.bom.removeCookie}
     */
    setCookie: function (cookieName, value, expire_minutes) {
    },
    /**
     * Gets the cookie value associated with the current document
     *
     * @param {String}cookieName        - The name of the cookie to query
     *
     * @return {String}value            - The value of the cookie
     *
     * @example
     * z.bom.getCookie("name");
     *
     * @see {@link z.bom.setCookie}
     * @see {@link z.bom.removeCookie}
     */
    getCookie: function (cookieName) {
    },
    /**
     * Removes the cookie value associated with the current document
     *
     * @param {String}cookieName            - The name of the cookie to remove
     *
     * @return void
     *
     * @example
     * z.bom.removeCookie("name");
     *
     * @see {@link z.bom.setCookie}
     * @see {@link z.bom.getCookie}
     */
    removeCookie: function (cookieName) {
    },

    /**
     * Saves data to localStorage.
     * Adds that key to the localStorage, or updates that key's value if it already exists.
     *
     * @param {String}key                   - The name of the key you want to create/update.
     * @param {*}value                      - The value you want to give the key you are creating/updating.
     * @param {Number}[expire_minutes]      - Optional. The expires minutes.If omitted, the key will not expire
     *
     * @return void
     *
     * @example
     * <pre>
     * z.bom.setLocalStorage("name", "localStorage value");
     * z.bom.setLocalStorage("name1", "localStorage value",30);//expire after 30 minutes
     * </pre>
     *
     * @see {@link z.bom.getLocalStorage}
     * @see {@link z.bom.removeLocalStorage}
     * @see {@link z.bom.clearLocalStorage}
     */
    setLocalStorage: function (key, value, expire_minutes) {
    },

    /**
     * Gets data from localStorage with the specified key.
     *
     * @param {String}key       - The name of the key you want to query.
     *
     * @return {*}value        - The value of the key. If the key does not exist, undefined is returned.
     *
     * @example
     * z.bom.getLocalStorage("name");
     *
     * @see {@link z.bom.setLocalStorage}
     * @see {@link z.bom.removeLocalStorage}
     * @see {@link z.bom.clearLocalStorage}
     */
    getLocalStorage: function (key) {
    },

    /**
     * Removes data from localStorage with the specified key or the specified key filter function.
     *
     * @param {String|Function}key      - The name of the key you want to remove.
     *                                   - If it is a function, it will test each key of the sessionStorage. Return <b>true</b> to remove.
     *
     * @return void
     *
     * @example
     * <pre>
     * z.bom.removeLocalStorage("name");
     * z.bom.removeLocalStorage(function (key) {
     *    return key.startsWith("cache_");
     * })
     * </pre>
     * @see {@link z.bom.setLocalStorage}
     * @see {@link z.bom.getLocalStorage}
     * @see {@link z.bom.clearLocalStorage}
     */
    removeLocalStorage: function (key) {
    },

    /**
     * Clears all keys stored in the localStorage
     *
     * @return void
     *
     * @example
     * z.bom.clearLocalStorage();
     *
     * @see {@link z.bom.setLocalStorage}
     * @see {@link z.bom.getLocalStorage}
     * @see {@link z.bom.removeLocalStorage}
     */
    clearLocalStorage: function () {
    },

    /**
     * Saves data to sessionStorage.
     * Adds that key to the sessionStorage, or updates that key's value if it already exists.
     *
     * @param {String}key                   - The name of the key you want to create/update.
     * @param {*}value                      - The value you want to give the key you are creating/updating.
     * @param {Number}[expire_minutes]      - Optional. The expires minutes.If omitted, the key will not expire
     *
     * @return void
     *
     * @example
     * <pre>
     * z.bom.setSessionStorage("name", "sessionStorage value");
     * z.bom.setSessionStorage("name1", "sessionStorage value",30);//expire after 30 minutes
     * </pre>
     *
     * @see {@link z.bom.getSessionStorage}
     * @see {@link z.bom.removeSessionStorage}
     * @see {@link z.bom.clearSessionStorage}
     */
    setSessionStorage: function (key, value, expire_minutes) {
    },

    /**
     * Gets data from sessionStorage with the specified key.
     *
     * @param {String}key       - The name of the key you want to query.
     *
     * @return {*}value        - The value of the key. If the key does not exist, undefined is returned.
     *
     * @example
     * z.bom.getSessionStorage("name");
     *
     * @see {@link z.bom.setSessionStorage}
     * @see {@link z.bom.removeSessionStorage}
     * @see {@link z.bom.clearSessionStorage}
     */
    getSessionStorage: function (key) {
    },

    /**
     * Removes data from sessionStorage with the specified key or the specified key filter function.
     *
     * @param {String|Function}key      - The name of the key you want to remove.
     *                                   - If it is a function, it will test each key of the sessionStorage. Return <b>true</b> to remove.
     *
     *
     * @return void
     *
     * @example
     * <pre>
     * z.bom.removeSessionStorage("name");
     * z.bom.removeSessionStorage(function (key) {
     *   return key.startsWith("cache_");
     * })
     * </pre>
     * @see {@link z.bom.setSessionStorage}
     * @see {@link z.bom.getSessionStorage}
     * @see {@link z.bom.clearSessionStorage}
     */
    removeSessionStorage: function (key) {
    },

    /**
     * Clears all keys stored in the sessionStorage
     *
     * @return void
     *
     * @example
     * z.bom.clearSessionStorage();
     *
     * @see {@link z.bom.setSessionStorage}
     * @see {@link z.bom.getSessionStorage}
     * @see {@link z.bom.removeSessionStorage}
     */
    clearSessionStorage: function () {
    },

    /**
     * Gets the value from the window.location.search.
     *
     * @param {String}[queryKey]        - Optional. The specified key to query from the search.
     *                                    If omitted,returns an object with all the search value.
     *
     * @return {(String|Object)}value  - The value of the query search. If queryKey omitted, returns an object with all the search value.
     */
    getURLQuery: function (queryKey) {
    },

    /**
     * Gets the location hash value.
     *
     * @return {String}value    - The hash value.
     *
     * @example
     * z.bom.getURLHash();
     */
    getURLHash: function () {
    },
    /**
     * The current browser name.
     * Chrome/Edge/IE/Firefox/Opera
     */
    browser: string,
    /**
     * The current browser version(Integer Number)
     */
    browserVersion: number
};

/**
 * @memberOf z
 * @namespace
 */
z.ajax = {
    /**
     * Send a GET request to a url
     *
     * @param {String}url           - Required. The URL to send the request to
     * @param {*}[data]             - The specified data, it will be appended to url. The data can be appended to setting too.
     * @param {Object}setting       - The request setting.
     *
     * @see {@link z.ajax.ajax}
     */
    get: function (url, data, setting) {
    },

    /**
     * Send a POST request to a url
     *
     * @param {String}url           - Required. The URL to send the request to
     * @param {*}[data]             - The specified data, it will be sent. The data can be appended to setting too.
     * @param {Object}setting       - The request setting.
     *
     * @see {@link z.ajax.ajax}
     */
    post: function (url, data, setting) {
    },

    /**
     * Sends a request to a url.
     *
     * @param {String}method        - Required. The type of request: GET or POST.
     * @param {String}url           - Required. The URL to send the request to.
     * @param {Object}setting       - The request setting.
     *                                 <table>
     *                                   <tr>
     *                                       <th>parameter</th>
     *                                       <th>description</th>
     *                                       <th>default</th>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>data</td>
     *                                       <td>The data to send. IF method is Get, the data will be appended to url</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>complete</td>
     *                                       <td>A function to be called when the request finishes.</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>context</td>
     *                                       <td>Value to use as this when executing complete function.</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>timeout</td>
     *                                       <td>Set a timeout (in milliseconds) for the request.</td>
     *                                       <td>120000</td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>headers</td>
     *                                       <td>
     *                                           An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport.
     *                                           <p>The header <b>X-Requested-With:'XMLHttpRequest'</b> and <b>Cache-Control:'no-cache, no-store, must-revalidate'</b> are added  by default.</p>
     *                                           <p>If data is an Object, <b>Content-Type:'application/json; charset=utf-8'</b> is added,
     *                                           otherwise, <b>Content-Type:'application/x-www-form-urlencoded'</b></p>
     *                                           Set the value to <b>false</b> to remove the default value,
     *                                       </td>
     *                                       <td>
     *                                       </td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>data_type</td>
     *                                       <td>
     *                                           The type of data that you're expecting back from the server.
     *                                           <p>If none is specified, will try to infer it based on the MIME type of the response.</p>
     *                                           <p>"application/json"-->"JSON"</p>
     *                                           <p>IF type is "JSON", returns an Object(JSON.parse).</p>
     *                                       </td>
     *                                       <td>
     *                                       </td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>async</td>
     *                                       <td>
     *                                           true (asynchronous) or false (synchronous), synchronous(async = false) is not recommended.
     *                                       </td>
     *                                       <td>
     *                                           true
     *                                       </td>
     *                                   </tr>
     *                               </table>
     *
     * @return {Promise}promise     - A Promise object
     *
     * @example
     * <pre>
     * //get with parameter
     * z.ajax.get("/get", {name: "focus-ui"}, {
     *     //If Content-Type of the response header is 'application/json', The result will be an Object,
     *     //otherwise, result will be httpRequest.responseText.
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     * //get without parameter
     * z.ajax.get("/get", {
     *     //If Content-Type of the response header is 'application/json', The result will be an Object,
     *     //otherwise, result will be httpRequest.responseText.
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     *
     * //post
     * z.ajax.post("/post", {name: "focus-ui"}, {
     *     data_type: "JSON",//The result will be an Object.
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     *
     * //post
     * z.ajax.post("/post",  {
     *     data:{name: "focus-ui"},//Appends data within setting.
     *     data_type: "JSON",//The result will be an Object.
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     *
     * //ajax
     * z.ajax.ajax("POST", "/ajax", {name: "focus-ui"}, {
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     *
     * //Promise
     * z.ajax.post("/post", {
     *     data: {name: "focus-ui"}
     * }).then(function (result) {
     *     alert(result);
     * }).catch(function (errStatus) {
     *     alert(errStatus);
     * });
     *
     * //file upload
     * var files = z.dom.getValue("#fileInput");//file input element.
     * var fd = new FormData();
     * z.util.eachArray(files, function (file, index) {
     *     fd.append("file_" + index, file)
     * });
     * z.ajax.post("/upload", fd, {
     *     headers: {
     *         "Content-Type": false//Removes the default value of the Content-Type.
     *     },
     *     complete: function (status, result) {
     *         if (status === 408) {
     *             alert("request timeout");
     *             return;
     *         }
     *         if (status !== 200) {
     *             alert("request failed");
     *             return;
     *         }
     *         console.log(result);
     *     }
     * });
     * </pre>
     */
    ajax: function (method, url, setting) {
    },
    /**
     * Sets the default values for all AJAX requests.
     *
     * @param {Object}setup     -The parameters specifies the settings for AJAX requests.
     *                                 <table>
     *                                   <tr>
     *                                       <th>parameter</th>
     *                                       <th>description</th>
     *                                       <th>default</th>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>timeout</td>
     *                                       <td>The timeout (in milliseconds) for the request</td>
     *                                       <td>120000</td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>headers</td>
     *                                       <td>Teh additional header key/value pairs to send along with requests using the XMLHttpRequest transport.</td>
     *                                       <td>{
     *                                               "Cache-Control": "no-cache, no-store, must-revalidate",
     *                                               "X-Requested-With": "XMLHttpRequest"
     *                                           }</td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>beforeSend</td>
     *                                       <td>A function to run before the request is sent.</td>
     *                                       <td></td>
     *                                   </tr>
     *                                    <tr>
     *                                       <td>complete</td>
     *                                       <td>A function to run when the request is finished (after success and error functions).</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   </table>
     * @return void
     *
     * @example
     * <pre>
     * z.ajax.setup({
     *       timeout: 12000,
     *       headers: {
     *           "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
     *       },
     *       beforeSend: function (xhr) {
     *           alert("beforeSend");
     *       },
     *       complete: function (xhr, timeout) {
     *           alert("complete");
     *       }
     *   });
     * </pre>
     */
    setup: function (setup) {
    },

    /**
     * Sends a JSONP request to a url.
     * JSONP is a method for sending JSON data without worrying about cross-domain issues.
     * JSONP does not use the XMLHttpRequest object, uses the < script > tag instead.
     *
     * @param {String}url           - Required. The URL to send the request to
     * @param {*}[data]             - The specified data, it will be appended to url. The data can be appended to setting too.
     * @param {Object}setting       - The request setting.
     *                                 <table>
     *                                   <tr>
     *                                       <th>parameter</th>
     *                                       <th>description</th>
     *                                       <th>default</th>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>data</td>
     *                                       <td>The data to send. IF method is Get, the data will be appended to url</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>complete</td>
     *                                       <td>A function to be called when the request finishes.</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>context</td>
     *                                       <td>Value to use as this when executing complete function.</td>
     *                                       <td></td>
     *                                   </tr>
     *                                   <tr>
     *                                       <td>timeout</td>
     *                                       <td>Set a timeout (in milliseconds) for the request.</td>
     *                                       <td>120000</td>
     *                                   </tr>
     *                               </table>
     *
     * @return void
     *
     * @example
     * <pre>
     * z.ajax.jsonp("/jsonp", { name: "focus-ui" }, {
     *     timeout: 6000,
     *     complete: function () {
     *         console.log(arguments);
     *     }
     * });
     * </pre>
     */
    jsonp: function (url, data, setting) {
    }
};

/**
 * @memberOf z
 * @namespace
 */
z.canvas = {
    /**
     * Sets the value of an attribute on the specified canvas 2d context.
     * @param {CanvasRenderingContext2D}g2d         - The specified canvas 2d context.
     * @param {(String|Object)}attr                 - The specified the name of the attribute whose value is to be set.
     *                                                 If it is Object,the value parameter will be ignored.
     * @param value                                 - The value to assign to the attribute.
     *
     * @return void
     *
     * @example
     * z.canvas.setAttribute(ctx,"fillStyle","red");
     * z.canvas.setAttribute(ctx,{"fillStyle":"red","strokeStyle":"green"});
     */
    set2DAttribute: function (g2d, attr, value) {
    },

    /**
     * Clears the canvas.
     *
     * @param {(String|HTMLCanvasElement)}cvs   - The specified canvas element.It can be selectors or an CanvasElement.
     *
     * @return void
     *
     * @example
     * z.canvas.clear("#cvs");
     */
    clear: function (cvs) {
    },

    /**
     * Calculates the size(in pixels) of text with the specified font.
     *
     * @param {String}font              - The specified font.
     * @param {String}text              - The specified text
     * @param {Number}[lineSpacing]     - Optional. The spacing(in pixels) of the wrap line. If omitted, the value 2(px) is used
     *
     * @return {Object}size             - The size of the text with the specified font, with width and height properties(in pixels)
     *
     * @example
     * var size = z.canvas.calcTextSize("20px Arial","Hello Canvas");//{width: 120, height: 22}
     *
     */
    calcTextSize: function (font, text, lineSpacing) {
    },

    /**
     * Renders the given text at the given (x, y) coordinates on the canvas with the specified style.
     * A line break is marked up as "<br>".
     *
     * @param {CanvasRenderingContext2D}g2d     - The specified canvas 2d context.
     * @param {String}text                      - The text to be rendered.
     * @param {Object}point                     - The the given (x, y) coordinates.
     * @param {Object}style                     - The specified style(font, fillStyle, strokeStyle).
     * @param {Object}[config]                  - The specified config.
     *                                             <table>
     *                                                 <tr>
     *                                                     <th>parameter</th>
     *                                                     <th>description</th>
     *                                                     <th>default</th>
     *                                                 </tr>
     *                                                 <tr>
     *                                                     <td>h_direction</td>
     *                                                     <td>The horizontal direction relative to the given point.
     *                                                      The three valid values are "right", "left", and "center".
     *                                                     </td>
     *                                                     <td>"center"</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                     <td>v_direction</td>
     *                                                     <td>The vertical direction relative to the given point.
     *                                                      The three valid values are "top", "bottom", and "middle".
     *                                                     </td>
     *                                                     <td>"middle"</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                     <td>wrap_text_align</td>
     *                                                     <td>The alignment of wrap lines.
     *                                                       The three valid values are "right", "left", and "center".
     *                                                     </td>
     *                                                     <td>"left"</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                     <td>rotate</td>
     *                                                     <td>The rotation angle(degree).
     *                                                     </td>
     *                                                     <td>0</td>
     *                                                  </tr>
     *                                             </table>
     *
     * @return void
     *
     * @example
     * <pre>
     * z.canvas.renderText(g2d, "Hello Canvas!!", {x: 100, y: 100}, {
     *       font: "20px Arial",
     *       fillStyle: "#ac2925"
     *   }, {
     *       h_direction: "right",
     *       v_direction: "top",
     *       wrap_text_align: "left",
     *       rotate: 0
     *   });
     *z.canvas.renderText(g2d, "Hello Canvas!!<br>Render Text.", {x: 200, y: 200}, {
     *       font: "20px Arial",
     *       fillStyle: "#ac2925"
     *   });
     * </pre>
     *
     */
    renderText: function (g2d, text, point, style, config) {
    },

    /**
     * Creates a path.
     * A path has a list of zero or more subpaths.
     * Each subpath consists of a list of one or more points, connected by straight or curved lines, and a flag indicating whether the subpath is closed or not.
     * A closed subpath is one where the last point of the subpath is connected to the first point of the subpath by a straight line.
     *
     * @param {CanvasRenderingContext2D}g2d     - The specified canvas 2d context.
     * @param {Array}points                     - The path point array. A "seg" attribute can be used to set the <b>next</b> segment type.
     *                                              If omitted, Adds the given point to the current subpath, connected to the previous one by a straight line(lineTo).
     *                                             Segment types:
     *                                            <table>
     *                                                <tr>
     *                                                    <th>value</th>
     *                                                    <th>description</th>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>mt</td>
     *                                                    <td>Creates a new subpath with the given point.
     *                                                    <p>previousPoint.moveTo(currentPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>qt</td>
     *                                                    <td>Adds the given point to the current subpath,
     *                                                      connected to the previous one by a quadratic Bézier curve with the given control point.
     *                                                      <p>previousPoint.quadraticCurveTo(currentControlPoint,nextPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>ct</td>
     *                                                    <td>Adds the given point to the current subpath,
     *                                                    connected to the previous one by a cubic Bézier curve with the given control points(current point).
     *                                                    <p>previousPoint.bezierCurveTo(currentControlPoint,nextControlPoint,next3rdPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td></td>
     *                                                    <td>Adds the given point to the current subpath, connected to the previous one by a straight line.
     *                                                    <p>previousPoint.lineTo(currentPoint)</p></td>
     *                                                </tr>
     *                                            </table>
     *
     * @return void
     *
     * @example
     * <pre>
     * z.canvas.path(g2d, [
     *      {x: 100, y: 100},//moveTo(100,100), first point
     *      {x: 200, y: 100, seg: "mt"},//lineTo(200,100)                    *lastSegment == default
     *      {x: 200, y: 200, seg: "qt"},//moveTo(200,200)                    *lastSegment == "mt"
     *      {x: 300, y: 300},//quadraticCurveTo control point                *lastSegment == "qt"      -->control point
     *      {x: 400, y: 200},//quadraticCurveTo(300,300,400,200)             *lastSegment == "qt"      -->quadraticCurveTo end point.
     *      {x: 400, y: 300, seg: "ct"},//lineTo(400,300)                    *lastSegment == default
     *      {x: 500, y: 400},//bezierCurveTo control point1                  *lastSegment == "ct"      -->the 1st control point
     *      {x: 600, y: 400},//bezierCurveTo control point2                  *lastSegment == "ct"      -->the 2nd control point
     *      {x: 700, y: 300},//bezierCurveTo(500,400,600,400,700,300)        *lastSegment == "ct"      -->bezierCurveTo end point.
     *      {x: 600, y: 600, seg: "close"}//lineTo(600,600)and closePath()   *lastSegment == default   -->currentSegment=="close" --> close Path.
     *  ]);
     * </pre>
     *
     * @see {@link z.canvas.renderPath}
     */
    path: function (g2d, points) {
    },

    /**
     * Creates and renders a path.
     *
     * @param {CanvasRenderingContext2D}g2d     - The specified canvas 2d context.
     * @param {Array}points                     - The path point array. A "seg" attribute can be used to set the <b>next</b> segment type.
     *                                              If omitted, Adds the given point to the current subpath, connected to the previous one by a straight line(lineTo).
     *                                             Segment types:
     *                                            <table>
     *                                                <tr>
     *                                                    <th>value</th>
     *                                                    <th>description</th>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>mt</td>
     *                                                    <td>Creates a new subpath with the given point.
     *                                                    <p>previousPoint.moveTo(currentPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>qt</td>
     *                                                    <td>Adds the given point to the current subpath,
     *                                                      connected to the previous one by a quadratic Bézier curve with the given control point.
     *                                                      <p>previousPoint.quadraticCurveTo(currentControlPoint,nextPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td>ct</td>
     *                                                    <td>Adds the given point to the current subpath,
     *                                                    connected to the previous one by a cubic Bézier curve with the given control points(current point).
     *                                                    <p>previousPoint.bezierCurveTo(currentControlPoint,nextControlPoint,next3rdPoint)</p></td>
     *                                                </tr>
     *                                                <tr>
     *                                                    <td></td>
     *                                                    <td>Adds the given point to the current subpath, connected to the previous one by a straight line.
     *                                                    <p>previousPoint.lineTo(currentPoint)</p></td>
     *                                                </tr>
     *                                            </table>
     * @param {Object}style                     - The specified style, used to render the path. For example fillStyle strokeStyle
     *
     * @return void
     *
     * @example
     * <pre>
     * z.canvas.renderPath(g2d, [
     *      {x: 100, y: 100},//moveTo(100,100), first point
     *      {x: 200, y: 150},//lineTo(200,150)                               *lastSegment == default
     *      {x: 200, y: 200, seg: "qt"},//lineTo(200,200)                    *lastSegment == "mt"
     *      {x: 300, y: 300},//quadraticCurveTo control point                *lastSegment == "qt"      -->control point
     *      {x: 400, y: 200},//quadraticCurveTo(300,300,400,200)             *lastSegment == "qt"      -->quadraticCurveTo end point.
     *      {x: 400, y: 300, seg: "ct"},//lineTo(400,300)                    *lastSegment == default
     *      {x: 500, y: 400},//bezierCurveTo control point1                  *lastSegment == "ct"      -->the 1st control point
     *      {x: 600, y: 400},//bezierCurveTo control point2                  *lastSegment == "ct"      -->the 2nd control point
     *      {x: 700, y: 300},//bezierCurveTo(500,400,600,400,700,300)        *lastSegment == "ct"      -->bezierCurveTo end point.
     *      {x: 600, y: 600}//lineTo(600,600)and closePath()                 *lastSegment == default   -->currentSegment=="close" --> close Path.
     * ],{
     *       fillStyle:"red",//Fills the the current path with red color
     *       strokeStyle:"green",//Strokes the the current path with red color
     *  });
     * </pre>
     *
     * @see {@link z.canvas.path}
     */
    renderPath: function (g2d, points, style) {
    },

    /**
     * Creates a specified shape in a rectangle.
     *
     * @param {CanvasRenderingContext2D}g2d     - The specified canvas 2d context.
     * @param {Object}rect                      - The specified outline rectangle object, with x y width and height properties(in pixels)
     * @param {String}shape                     - The specified shape.
     *                                              <table>
     *                                                  <tr>
     *                                                      <th>shape</th>
     *                                                      <th>description</th>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>rect</td>
     *                                                      <td>Creates a rectangle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>circle</td>
     *                                                      <td>Creates a circle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>ellipse</td>
     *                                                      <td>Creates a ellipse shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>roundrect</td>
     *                                                      <td>Creates a RoundRectangle shape.
     *                                                      <p>The size of the arc that rounds off the corners should be specified in config parameter</p></td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>triangle</td>
     *                                                      <td>Creates a triangle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>diamond</td>
     *                                                      <td>Creates a diamond shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>pentagon</td>
     *                                                      <td>Creates a pentagon shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>hexagon</td>
     *                                                      <td>Creates a hexagon shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>star</td>
     *                                                      <td>Creates a star shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>parallelogram</td>
     *                                                      <td>Creates a parallelogram shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>cloud</td>
     *                                                      <td>Creates a cloud shape</td>
     *                                                  </tr>
     *                                              </table>
     * @param {Object}[config]                  - Optional. The specified shape config.For example, specifies the rounded rectangle with "radius" attribute.
     *
     *
     * @return void
     *
     * @example
     * <pre>
     * var shapes = ["rect", "circle", "ellipse", "roundrect", "triangle", "diamond", "pentagon", "hexagon", "star", "parallelogram", "cloud"];
     * z.util.eachArray(shapes, function (shape, index) {
     *           var row = index / 5 | 0;
     *           var col = index % 5;
     *           var rect = {
     *               x: 10 + col * 120,
     *               y: 60 + row * 120,
     *               width: 100,
     *               height: 80
     *           };
     *           if (shape === "roundrect") {
     *               z.canvas.rectShape(g2d, rect, shape, {radius: 10});//Specifies the size of the arc that rounds off the corners.
     *           } else {
     *               z.canvas.rectShape(g2d, rect, shape);
     *           }
     *       });
     * </pre>
     *
     * @see {@link z.canvas.renderRectShape}
     */
    rectShape: function (g2d, rect, shape, config) {
    },

    /**
     * Renders the specified shape in a rectangle.
     *
     * @param {CanvasRenderingContext2D}g2d     - The specified canvas 2d context.
     * @param {Object}rect                      - The specified outline rectangle object, with x y width and height properties(in pixels)
     * @param {String}shape                     - The specified shape.
     *                                              <table>
     *                                                  <tr>
     *                                                      <th>shape</th>
     *                                                      <th>description</th>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>rect</td>
     *                                                      <td>Renders a rectangle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>circle</td>
     *                                                      <td>Renders a circle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>ellipse</td>
     *                                                      <td>Renders a ellipse shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>roundrect</td>
     *                                                      <td>Renders a RoundRectangle shape.
     *                                                      <p>The size of the arc that rounds off the corners should be specified in config parameter</p></td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>triangle</td>
     *                                                      <td>Renders a triangle shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>diamond</td>
     *                                                      <td>Renders a diamond shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>pentagon</td>
     *                                                      <td>Renders a pentagon shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>hexagon</td>
     *                                                      <td>Renders a hexagon shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>star</td>
     *                                                      <td>Renders a star shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>parallelogram</td>
     *                                                      <td>Renders a parallelogram shape</td>
     *                                                  </tr>
     *                                                  <tr>
     *                                                      <td>cloud</td>
     *                                                      <td>Renders a cloud shape</td>
     *                                                  </tr>
     *                                              </table>
     * @param {Object}style                     - The specified style, used to render the shape. For example fillStyle strokeStyle
     * @param {Object}[config]                  - Optional. The specified shape config.For example, specifies the rounded rectangle with "radius" attribute.
     *
     *
     * @return void
     *
     * @example
     * <pre>
     * var shapes = ["rect", "circle", "ellipse", "roundrect", "triangle", "diamond", "pentagon", "hexagon", "star", "parallelogram", "cloud"];
     * z.util.eachArray(shapes, function (shape, index) {
     *           var row = index / 5 | 0;
     *           var col = index % 5;
     *           var rect = {
     *               x: 10 + col * 120,
     *               y: 60 + row * 120,
     *               width: 100,
     *               height: 80
     *           };
     *           if (shape === "roundrect") {
     *               z.canvas.renderRectShape(g2d, rect, shape, {
     *                   fillStyle: "#1982c8",
     *                   strokeStyle: "#d58512"
     *               }, {radius: 10});//Specifies the size of the arc that rounds off the corners.
     *           } else {
     *               z.canvas.renderRectShape(g2d, rect, shape, {
     *                   fillStyle: "#1982c8",
     *                   strokeStyle: "#d58512"
     *               });
     *           }
     *       });
     * </pre>
     *
     * @see {@link z.canvas.rectShape}
     */
    renderRectShape: function (g2d, rect, shape, style, config) {
    },

    /**
     * creates a linear gradient object.
     * The gradient can be used to fill rectangles, circles, lines, text, etc.
     *
     * @param {Object}rect                  - The specified outline rectangle object, with x y width and height properties(in pixels)
     * @param {Number}angle                 - The rotated angle. Default is 0(From left ro right).
     * @param {Object}colorStops            - The specified different colors, and where to position the colors in the gradient object.
     *
     * @return {CanvasGradient}gradient     - An gradient object.
     *
     * @example
     * <pre>
     * var gradient = z.canvas.createLinearGradient({//rectangle
     *     x: 100,
     *     y: 100,
     *     width: 200,
     *     height: 200
     * },
     * 90,//rotated angle
     * { //colorStops
     *     0: "red",
     *     0.5: "green",
     *     1: "blue"
     * });
     */
    createLinearGradient: function (rect, angle, colorStops) {
    },

    /**
     * creates a radial/circular gradient object.
     * The gradient can be used to fill rectangles, circles, lines, text, etc.
     *
     * @param {Object}rect                  - The specified outline rectangle object, with x y width and height properties(in pixels)
     * @param {Object}center                - The radial center point in the rectangle.
     * @param {Object}colorStops            - The specified different colors, and where to position the colors in the gradient object.
     *
     * @return {CanvasGradient}gradient     - An gradient object.
     *
     * @example
     * <pre>
     * var gradient = z.canvas.createRadialGradient({//rectangle
     *      x: 100,
     *      y: 100,
     *      width: 200,
     *      height: 200
     *  }, { //center
     *      x: 100 + 100,
     *      y: 100 + 50
     *  }, { //colorStops
     *      0: "red",
     *      0.5: "green",
     *      1: "blue"
     *  })
     * </pre>
     */
    createRadialGradient: function (rect, center, colorStops) {
    }
};

/**
 *
 * The base class for all the view components and model data.
 *
 * @constructor
 * @extends Object
 *
 * @param {Object}[props]       - Optional, the initialization properties object.
 *
 * @return {$ZObject}object     - The $ZObject object.
 *
 */
var $ZObject = function (props) {
};

/**
 * Sets one or more properties of the data.
 *
 * @param {(String|Object)}key      - The key of the property to set. If it is Object,the value parameter will be ignored
 * @param {*}[value]                - The value of of the property.
 *
 * @return  {$ZObject}data          - The data object self
 *
 * @example
 * <pre>
 * var data = new z.Data({
 *     name:"focus-ui"
 * })
 * data.set("version","0.6");
 * data.set({
 *     "name": "focus-ui",
 *     "version": "0.6"
 * })
 * </pre>
 */
$ZObject.prototype.set = function (key, value) {
};

/**
 * Gets the value of the specified key.
 *
 * @param {String}key   - The specified key to get.
 *
 * @return {*}value     - The value of the key.
 *
 * @example
 * <pre>
 * var data = new z.Data({
 *      name: "focus-ui",
 *      version": 0.6
 * })
 * data.get("name");//"focus-ui"
 * </pre>
 */
$ZObject.prototype.get = function (key) {
};

/**
 * Removes the property with the specified key from the data.
 *
 * @param {String}key           - The specified key to remove
 *
 * @return  {$ZObject}data      - The data object self
 *
 * @example
 * <pre>
 * var data = new z.Data({
 *      name: "focus-ui",
 *      version": 0.6
 * })
 * data.remove("version");
 * </pre>
 */
$ZObject.prototype.remove = function (key) {
};

/**
 * Determines whether the data contains the specified property key.
 *
 * @param {String}key           - The specified key to check.
 *
 * @return {Boolean}result      - true if the data has the specified key property; otherwise, false.
 *
 * @example
 * <pre>
 * var data = new z.Data({
 *      name: "focus-ui",
 *      version": 0.6
 * })
 * data.has("name");//true
 * data.has("city");//false
 * </pre>
 */
$ZObject.prototype.has = function (key) {
};

/**
 * Gets the properties object with the specified keys.
 *
 * @param {Array}[keyArray]             - Optional, the specified key array. If omitted, returns all the own properties.
 *
 * @return {Object}properties           - The properties object contains the specified properties.
 *
 * @example
 * <pre>
 * var data = new z.Data({
 *      name: "focus-ui",
 *      version": 0.6
 * })
 * data.getProperties(["name","version"])//{name:"focus-ui","version":0.6}
 * data.getProperties();//{name:"focus-ui","version":0.6}
 * </pre>
 */
$ZObject.prototype.getProperties = function (keyArray) {
};

/**
 * The base class for all view components.
 *
 * @memberOf z
 *
 * @constructor
 * @extends $ZObject
 *
 * @param {Object}[args]    - Optional. The arguments to initialize the component.
 *                             <table>
 *                                 <tr>
 *                                     <th>option</th>
 *                                     <th>description</th>
 *                                     <th>default</th>
 *                                 </tr>
 *                                 <tr>
 *                                     <td>appendTo</td>
 *                                     <td>the parent node of the view</td>
 *                                     <td></td>
 *                                 </tr>
 *                                 <tr>
 *                                     <td>class</td>
 *                                     <td>the specified class name of the view</td>
 *                                     <td></td>
 *                                 </tr>
 *                                 <tr>
 *                                     <td>style</td>
 *                                     <td>the specified style of the view</td>
 *                                     <td></td>
 *                                 </tr>
 *                             </table>
 *
 * @return {z.IView}iView   - The IView instance
 */
z.IView = function (args) {
};

/**
 * Appends the root div of the view component to the parent node.
 *
 * @param {(Element|String)}parentNode      - The specified parent element. It can be selectors or an Element.
 *
 * @return void
 *
 * @example
 * view.appendTo("#treeDiv")
 */
z.IView.prototype.appendTo = function (parentNode) {
};

/**
 * Gets the root div of the view component.
 *
 * @return {Element}root    - The root div of the view.
 */
z.IView.prototype.getRoot = function () {
};

/**
 * Updates the view component.
 *
 * @return void
 *
 * @example
 * view.update();
 */
z.IView.prototype.update = function () {
};

/**
 * The base class for all model data components.
 *
 * @memberOf z
 * @extends z.IView
 * @param {Object}[args]    - Optional. The arguments to initialize the component. see {@link z.IView}
 *                          <table>
 *                              <tr>
 *                                  <th>option</th>
 *                                  <th>description</th>
 *                                  <th>default</th>
 *                              </tr>
 *                              <tr>
 *                                  <td>data</td>
 *                                  <td>the model data of the view , see {@link z.IDataView.setData}</td>
 *                                  <td></td>
 *                              </tr>
 *                          </table>
 * @constructor
 */
z.IDataView = function (args) {
};

/**
 * Sets the model data for the view component.
 *
 * @param {(Array|Object)}data          - The model data. It can be an array or an object
 *
 * @return void
 *
 * @example
 * <pre>
 * view.setData([
 *    {name: "data1"},
 *    {name: "data2"}
 *  ])
 * </pre>
 */
z.IDataView.prototype.setData = function (data) {
};

/**
 * Adds data to the model provider of the view component.
 *
 * @param {(Object|Array|z.Data)}data       - The data to be added. It can be an object or an array or a z.Data instance.
 * @param {Number}[index]                   - Optional. The index at which to insert the data.
 *
 * @return void
 *
 * @example
 * view.addData({name:"focus-ui"});//object
 * view.addData({name:"focus-ui"},0);//index
 *
 * view.addData([{name:"data1"},{name:"data2"}]);//array
 *
 * view.addData(new z.Data({name:"focus-ui"}));//model data
 */
z.IDataView.prototype.addData = function (data, index) {
};

/**
 * Removes the specified data from the model provider.
 *
 * @param {(Object|Array|z.Data)}data     - The specified data to be removed. It can be an object or an array or a z.Data instance.
 *
 * @return void
 *
 * @example
 * view.removeData({name: "focus-ui"});
 * view.removeData([{name: "data1"}, {name: "data2"}]);
 *
 */
z.IDataView.prototype.removeData = function (data) {
};

/**
 * Removes all the data from the model provider.
 *
 * @return void
 *
 * @example
 * view.clearData();
 *
 */
z.IDataView.prototype.clearData = function () {
};

/**
 * Determines whether the model provider contains the specified data.
 *
 * @param {(Object|z.Data)}data     - The specified data to search. It can be an object or a z.Data instance.
 *
 * @return {Boolean}                - true if the the model provider contains the data; otherwise, false.
 *
 * @example
 * view.containsData({name:"data"})
 *
 */
z.IDataView.prototype.containsData = function (data) {
};

/**
 * Returns the first data that matches the specified condition.
 *
 * @param {(String|Object|Function)}prop    - The specified property name. It can be a string or an object or a function. If prop is an object or a function, the value parameter will be ignored.
 * @param {*}[value]                        - The specified value.
 *
 * @return {z.Data}data                     - The first data the matches the specified condition; otherwise, undefined is returned.
 *
 * @example
 * <pre>
 * view.findData("name", "focus-ui");// the data with name="focus-ui"
 * view.findData({// the data with name="focus-ui" and version=0.6
 *        name: "focus-ui",
 *        version: 0.6
 *    });
 * view.findData(function (data) {
 *        return data.get("name")==="focus-ui";// the data with name="focus-ui"
 *    })
 * </pre>
 *
 */
z.IDataView.prototype.findData = function (prop, value) {
};

/**
 * Returns a new array with all the data that matches the specified condition.
 *
 * @param {(String|Object|Function)}prop    - The specified property name. It can be an object or a string or a function. If prop is an object or a function, the value parameter will be ignored.
 * @param {*}[value]                        - The specified value.
 *
 * @return {Array}dataArray                 - The array with all data that matches the specified condition.
 *
 * @example
 * <pre>
 * view.filterData("type","node");//all the data with type="node"
 * view.filterData({//all the data with type="node" and shape="circle"
 *        type:"node",
 *        shape:"circle"
 *    });
 * view.filterData(function (data) {
 *        return data.get("type")==="node";//all the data with type="node"
 *    })
 * </pre>
 *
 */
z.IDataView.prototype.filterData = function (prop, value) {
};

/**
 * Executes a provided function once for each model data.
 * <b>The callback function returns false to break the loop.</b>
 *
 * @param {Function}callback            - Function to execute for each data,<b>Returns false to break the loop.</b> taking two arguments:
 *                                          <ul>
 *                                              <li>currentData</li>    - The current data being processed in the model provider.
 *                                              <li>index</li>          - The index of the current data being processed in the model provider.
 *                                          </ul>
 * @param {Object}[thisArg]            - Value to use as this (i.e the reference Object) when executing callback.
 *
 * @return void
 *
 * @example
 * <pre>
 * var nameArr = [];
 * view.eachData(function (data) {
 *        nameArr.push(data.get("name"));
 *    });
 * var hasGroup = false;
 * view.eachData(function (data,index) {
 *        if (data.get("type") === "group") {
 *            hasGroup = true;
 *            return false;
 *        }
 *    });
 * </pre>
 *
 */
z.IDataView.prototype.eachData = function (callback, thisArg) {
};

/**
 * Returns an array containing all the data.
 *
 * @return {Array}dataArray     - The array containing all the data.
 *
 * @example
 * var arr = view.getDataArray();
 */
z.IDataView.prototype.getDataArray = function () {
};

/**
 * Returns the number of the data in model provider.
 *
 * @return {Number}size        - The number of the data
 *
 * @example
 * var count = view.getDataSize();
 */
z.IDataView.prototype.getDataSize = function () {
};

/**
 * Executes a provided function once for each model data by hierarchy .
 * <b>The callback function returns false to break the loop.</b>
 *
 * @param {Function}callback            - Function to execute for each data,<b>Returns false to break the loop.</b> taking one argument:
 *                                          <ul>
 *                                              <li>currentData</li>     - The current data being processed in the model provider.
 *                                          </ul>
 * @param {Object}[thisArg]            - Value to use as this (i.e the reference Object) when executing callback.
 *
 * @return void
 *
 * @example
 * <pre>
 * var nameArr = [];
 * view.hEachData(function (data) {
 *        nameArr.push(data.get("name"));
 *   });
 * </pre>
 */
z.IDataView.prototype.hEachData = function (callback, thisArg) {
};

/**
 * Returns an array containing all the data without parent data.
 *
 * @return {Array}rootDataArr   - The array containing all the data without parent property.
 *
 * @example
 * var rootDataArr = view.getRootDataArray();
 */
z.IDataView.prototype.getRootDataArray = function () {
};

/**
 * Adds a visible filter to the view .
 * <b>The filter function returns false to make the data hidden.</b>
 *
 *
 * @param {Function}filter  - The filter function, <b>Returns false to make the data hidden.</b> taking one argument:
 *                             <ul>
 *                                  <li>currentData</li>    - The current data being processed in the view model provider.
 *                             </ul>
 * @return void
 *
 * @example
 * <pre>
 * view.addVisibleFilter(function (data) {
 *     var filterValue = z.dom.getValue("#filterInput").trim();
 *     if (filterValue) {
 *         filterValue = filterValue.toLowerCase();
 *         var name = data.get("name");
 *         if (name.toLowerCase().indexOf(filterValue) >= 0) {
 *             return true;
 *         }
 *         return false;
 *     }
 *     return true;
 * });
 * </pre>
 *
 */
z.IDataView.prototype.addVisibleFilter = function (filter) {
};

/**
 * Removes the visible filter added to the view.
 *
 * @param {Function}addedFilter  - The visible filter function added to the view.
 *
 * @return void
 *
 * @example
 * view.removeVisibleFilter(addedFilter);
 */
z.IDataView.prototype.removeVisibleFilter = function (addedFilter) {
};

/**
 * Clears all the visible filters added to the view.
 *
 * @return void
 *
 * @example
 * view.clearVisibleFilter();
 */
z.IDataView.prototype.clearVisibleFilter = function () {
};

/**
 * Sets up a function that will be called when the data is clicked.
 *
 * @param {Function}listener        - The specified function to run when the data is clicked.
 * @param {Object}[thisArg]         - Value to use as this (i.e the reference Object) when executing listener.
 *
 * @return void
 *
 * @example
 * <pre>
 * view.onDataClick(function (evt) {
 *     console.log(evt.data);//the clicked data
 *     console.log(evt.event);//the click event
 *  })
 * </pre>
 */
z.IDataView.prototype.onDataClick = function (listener, thisArg) {
};

/**
 * Sets up a function that will be called when the data is double-clicked.
 *
 * @param {Function}listener        - The specified function to run when the data is double-clicked.
 * @param {Object}[thisArg]         - Value to use as this (i.e the reference Object) when executing listener.
 *
 * @return void
 *
 * @example
 * <pre>
 * view.onDataDblClick(function (evt) {
 *     console.log(evt.data);//the double-clicked data
 *     console.log(evt.event);//the double-clicked event
 *  })
 * </pre>
 */
z.IDataView.prototype.onDataDblClick = function (listener, thisArg) {
};

/**
 * @memberOf z
 * @namespace
 */
z.widget = {};

/**
 * The ListView component represents the listed data items.
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}[args]                    - Optional. The arguments to initialize the ListView.
 *
 * @return {z.widget.ListView}listView      -  The ListView instance
 *
 * @example
 * <pre>
 * //<b>as constructor</b>
 * var listView = new z.widget.ListView({
 *     appendTo:".container",   //the parentNode of the listView
 *     data:[                   //the model data
 *        {name: "Item1"},
 *        {name: "Item2"}
 *      ]
 *  })
 * //<b>as method</b>
 * var listView = z.widget.ListView({//'new' is omitted
 *     appendTo:".container",
 *     data:[
 *        {name: "Item1"},
 *        {name: "Item2"}
 *      ]
 *  })
 * </pre>
 */
z.widget.ListView = function (args) {
};

/**
 * The Tree component represents a hierarchical collection of items.
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args          - The arguments to initialize the Tree.
 *
 * @return {z.widget.Tree}tree  -  The Tree instance
 *
 * @example
 * <pre>
 * var tree = z.widget.Tree({
 *        appendTo: ".container",
 *        data: [
 *            {
 *                name: "This PC",
 *                children: [
 *                    {name: "Documents"},
 *                    {name: "Downloads"},
 *                    {
 *                        name: "Windows(C:)",
 *                        children: [
 *                            {name: "Program Files"},
 *                            {name: "Users"},
 *                            {name: "Windows"}
 *                        ]
 *                    }
 *                ]
 *            }
 *        ]
 *    });
 * tree.expandAll();
 * </pre>
 */
z.widget.Tree = function (args) {
};

/**
 * The Tabs component is a hybrid component that is made of a multiview and a tabbar
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args          - The arguments to initialize the Tabs.
 *
 * @return {z.widget.Tabs}tabs  -  The Tabs instance
 *
 * @example
 * <pre>
 * var tabs = z.widget.Tabs({
 *        appendTo: ".container",
 *        data: [{name: "Text", content: "Text Content"},
 *            {name: "Element", content: z.dom.query("form")}]
 *    });
 * </pre>
 */
z.widget.Tabs = function (args) {
};

/**
 * The Collapse component is used to show and hide content.
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args                  - The arguments to initialize the Collapse.
 *
 * @return {z.widget.Collapse}collapse  -  The Collapse instance
 *
 * @example
 * <pre>
 * var collapse = z.widget.Collapse({
 *        appendTo: ".container",
 *        data: [
 *            {name: "Text", content: "Text Content"},
 *            {name: "Form", content: z.dom.query("form")}
 *        ]
 *    });
 * </pre>
 */
z.widget.Collapse = function (args) {
};

/**
 * The Grid component is a lightweight Table widget built to easily replace HTML Tables.
 * That provides professional look-and-feel and convenient programming model for displaying data in a scrollable and sortable table。
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args          - The arguments to initialize the Grid.
 *
 * @return {z.widget.Grid}grid  -  The Grid instance
 *
 * @example
 * <pre>
 * var grid = z.widget.Grid({
 *        appendTo: ".container",
 *        columns: [
 *            {name: "#", field: "index"},
 *            {name: "Language", field: "language"},
 *            {name: "Ratings", field: "ratings"},
 *            {name: "Change", field: "change"}
 *        ],
 *        data: [{"index": 1, "language": "Java", "ratings": "15.93%", "change": "2.66%"},
 *            {"index": 2, "language": "C", "ratings": "14.28%", "change": "4.12%"},
 *            {"index": 3, "language": "Python", "ratings": "8.38%", "change": "4.60%"}]
 *    });
 * </pre>
 */
z.widget.Grid = function (args) {
};

/**
 * The TreeGrid component is the hybrid between Grid and Tree.
 * That supports multi-column display of hierarchical data.
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args                      - The arguments to initialize the TreeGrid.
 *
 * @return {z.widget.TreeGrid}treeGrid      -  The TreeGrid instance
 *
 * @example
 * <pre>
 * var treeGrid = z.widget.TreeGrid({
 *        appendTo: ".container",
 *        columns: [
 *            {name: "Name", field: "name"},
 *            {name: "Type", field: "type"},
 *            {name: "Total Size", field: "total_size"},
 *            {name: "Free Space", field: "free_space"}
 *        ],
 *        data: [{
 *            name: "Folders",
 *            children: [
 *                {name: "Documents", type: "System Folder"},
 *                {name: "Downloads", type: "System Folder"},
 *                {name: "Pictures", type: "System Folder"}
 *            ]
 *        }]
 *    });
 * </pre>
 */
z.widget.TreeGrid = function (args) {
};

/**
 * The Menu component is toggleable overlays for displaying lists of links and more.
 *
 * @constructor
 * @extends z.IDataView
 *
 * @param {Object}args              - The arguments to initialize the Menu.
 *
 * @return {z.widget.Menu}menu      -  The Menu instance
 *
 * @example
 * <pre>
 * var menu = z.widget.Menu({
 *        appendTo: ".container",
 *        data: [
 *            {
 *                name: "File",
 *                children: [
 *                    {name: "New Tab"},
 *                    {name: "New Window"},
 *                    {name: "Save Page AS..."},
 *                    {divider: true},
 *                    {name: "Print..."},
 *                    {divider: true},
 *                    {name: "Exit"}
 *                ]
 *            },
 *            {
 *                name: "Edit",
 *                children: [
 *                    {name: "Cut"},
 *                    {name: "Copy"},
 *                    {name: "Paste"},
 *                    {name: "Delete"},
 *                    {divider: true},
 *                    {name: "Select All"}
 *                ]
 *            }
 *        ]
 *    });
 * </pre>
 */
z.widget.Menu = function (args) {
};

/**
 * The Pagination component helps present numerous items from the dataset dividing them into groups to display on separate pages.
 * It is used in conjunction with data components like Grid.
 *
 * @constructor
 * @extends z.IView
 *
 * @param {Object}args      - The arguments to initialize the Pagination.
 *                              <table>
 *                                  <tr>
 *                                      <th>argument</th>
 *                                      <th>description</th>
 *                                      <th>default</th>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>page_sizes</td>
 *                                      <td>options of item count per page</td>
 *                                      <td>[20, 50, 100]</td>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>page_size</td>
 *                                      <td>the item count of each page</td>
 *                                      <td>20</td>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>page_index</td>
 *                                      <td>the current page index</td>
 *                                      <td>1</td>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>total</td>
 *                                      <td>total item count</td>
 *                                      <td>0</td>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>pager_count</td>
 *                                      <td>the maximum number of the pager buttons</td>
 *                                      <td>7</td>
 *                                  </tr>
 *                                  <tr>
 *                                      <td>layout</td>
 *                                      <td>layout of Pagination, separated with a comma, the valid values are: "sizes","pager","total","refresh"</td>
 *                                      <td>"sizes,pager,total,refresh"</td>
 *                                  </tr>
 *                              </table>
 *
 * @return {z.widget.Pagination}pagination      - The Pagination instance
 *
 * @example
 * <pre>
 * var pagination = z.widget.Pagination({
 *    appendTo: ".container",
 *    total: 2019,
 *    page_index: 2,
 *    page_sizes: [20, 50, 100, 200]
 * });
 * pagination.onPageChange(function (pageInfo) {
 *   console.log(pageInfo)
 * });
 * pagination.onRefresh(function (pageInfo) {
 *    console.log(pageInfo)
 * });
 * </pre>
 *
 */
z.widget.Pagination = function (args) {
};

/**
 * Gets the paging information.
 *
 * @return {Object}config   - The paging information.
 *                           {
 *                              index: 1,//page_index, start from 1
 *                              size: 20,//page_size
 *                              skip: 0,//(page_index-1)*page_size
 *                              number: 10,//page number
 *                              start: start,//the start index
 *                              end: end,//the end index
 *                              total: total//total count
 *                           };
 *
 * @example
 * pagination.getPageConfig();
 *
 */
z.widget.Pagination.prototype.getPageConfig = function () {
};

/**
 * The base class for all popup components.
 *
 * @constructor
 * @extends z.IView
 *
 * @param {Object}[args]    - The arguments to initialize the popup component.
 *                               <table>
 *                                   <tr>
 *                                       <th>option</th>
 *                                       <th>description</th>
 *                                       <th>default</th>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>close_icon_visible</td>
 *                                       <td>Specifies whether the close icon is visible. If true, the close icon will be visible. Otherwise invisible</td>
 *                                       <td></td>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>close_on_click</td>
 *                                       <td>Specifies whether the popup component should close when it is clicked</td>
 *                                       <td>false</td>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>close_on_click_outside</td>
 *                                       <td>Specifies whether the popup component should close when clicking outside of the component</td>
 *                                       <td>false</td>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>content</td>
 *                                       <td>the content of the popup component</td>
 *                                       <td></td>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>title</td>
 *                                       <td>the title of the popup component</td>
 *                                       <td></td>
 *                                   </tr>
 *                               </table>
 *
 * @return {$IPopUpView}popUpView        -  The PopUpView instance
 *
 */
var $IPopUpView = function (args) {
};

/**
 * Opens the popup component and makes the component visible.
 *
 * @param {(String|Element)}[refEle]    - The specified reference element to position the popup component.
 *                                          Only effective when the component is a IHostPopUpView instance(Tooltip/Popover)
 *
 * @example
 * <pre>
 * var tooltip = new z.widget.Tooltip({
 *      content:"This is a tooltip"
 * });
 * tooltip.open("#refButton")
 * </pre>
 *
 */
$IPopUpView.prototype.open = function (refEle) {
};

/**
 * Closes the popup component.
 * Removes the component's root div from the DOM.
 */
$IPopUpView.prototype.close = function () {
};

/**
 * The Tooltip component is used to display a popup message.
 * The {@link z.widget.tooltip}/{@link z.widget.tooltip.init}/{@link z.widget.tooltip.open}/{@link z.widget.tooltip.close} methods are the easier way to show/hide tooltip.
 *
 * @see {@link z.widget.tooltip}
 * @see {@link z.widget.tooltip.init}
 * @see {@link z.widget.tooltip.open}
 * @see {@link z.widget.tooltip.close}
 *
 * @constructor
 * @extends $IPopUpView
 *
 * @param {Object}[args]                    - The arguments to initialize the Tooltip, see {@link $IPopUpView IPopUpView }
 *                                           <table>
 *                                               <tr>
 *                                                   <th>option</th>
 *                                                   <th>description</th>
 *                                                   <th>default</th>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>direction</td>
 *                                                   <td>the direction of the tooltip, the valid values are:
 *                                                   "up_left", "up", "up_right",
 *                                                   "left_up", "left", "left_down",
 *                                                   "right_up", "right","right_down"
 *                                                   "down_left", "down","down_right"
 *                                                   "screen_center"</td>
 *                                                   <td>"right"</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>offset</td>
 *                                                   <td>the offset(px) of the tooltip</td>
 *                                                   <td>2</td>
 *                                               </tr>
 *                                           </table>
 *
 * @return {z.widget.Tooltip}tooltip        -  The Tooltip instance
 *
 *
 * @example
 * <pre>
 * var tooltip = new z.widget.Tooltip({
 *    content: "This is a tooltip",
 *    title: "Tooltip Title",
 *    direction: "right",
 *    offset: 6
 * });
 * tooltip.open("#tooltipButton");//show a  tooltip on the right of the button
 * </pre>
 */
z.widget.Tooltip = function (args) {
};

/**
 * Initializes the tooltip for the specified element, the trigger event listener is added to open/close tooltip.
 * The specified element attributes are use to show tooltip.
 * <table>
 *     <tr>
 *         <th>tooltip option</th>
 *         <th>element attribute</th>
 *         <th>description</th>
 *     </tr>
 *     <tr>
 *         <td>content</td>
 *         <td>data-content/title</td>
 *         <td>the content of the tooltip</td>
 *     </tr>
 *     <tr>
 *         <td>title</td>
 *         <td>data-title</td>
 *         <td>the title of the tooltip</td>
 *     </tr>
 *     <tr>
 *         <td>direction</td>
 *         <td>data-direction</td>
 *         <td>the direction of the tooltip, default is 'right'</td>
 *     </tr>
 *     <tr>
 *         <td>offset</td>
 *         <td>data-offset</td>
 *         <td>the offset of the tooltip</td>
 *     </tr>
 * </table>
 *
 * @function
 * @see {@link z.widget.Tooltip}
 *
 * @param {(String|Element)}refEle      - The specified reference element to position the tooltip. It can be selectors or an Element
 * @param {String}[trigger]             - Optional. The event type to show tooltip. If omitted, the 'hover' is used.
 *                                           <table>
 *                                               <tr>
 *                                                   <th>trigger</th>
 *                                                   <th>open event</th>
 *                                                   <th>close event</th>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>hover</td>
 *                                                   <td>mouseenter</td>
 *                                                   <td>mouseleave</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>focus</td>
 *                                                   <td>focus</td>
 *                                                   <td>blur</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>click</td>
 *                                                   <td>click</td>
 *                                                   <td>click</td>
 *                                               </tr>
 *                                           </table>
 * @param {Boolean}auto_close           - If false, the tooltip does not close automatically, otherwise, an event listener is added to close the tooltip automatically.
 *
 * @return void
 *
 * @example
 *
 * <button id="autoBtn"  data-content="tooltip content">tooltip()</button>
 *
 * //show tooltip when the pointer enters button, hide tooltip when the pointer leaves button
 * z.widget.tooltip("#autoBtn");
 *
 * //show tooltip when you click the button, click again to hide
 * z.widget.tooltip("#autoBtn","click");//tooltip will open on hover
 *
 */
z.widget.tooltip = function (refEle, trigger, auto_close) {
};

/**
 * Initializes tooltips for all elements with the data-toggle="tooltip" attribute.
 * The trigger event type is the value of the data-trigger attribute. Default is hover
 *
 * @function
 * @see {@link z.widget.tooltip}
 *
 * @param {(String|Element)}[container]     - Optional. The specified container element to query all the tooltip elements. If omitted, the document.body is used.
 *
 * @return void
 *
 * @example
 * z.widget.tooltip.init();
 * z.widget.tooltip.init("form");
 */
z.widget.tooltip.init = function (container) {
};

/**
 * Opens a tooltip on the specified element.
 *
 * @function
 *
 * @param {(String|Element)}refEle      - The reference refEle element to position the tooltip
 * @param {(String|Object)}options      - The specified options.
 *                                          <ul>
 *                                              <li>if options is a string</li>it will be the content of the tooltip
 *                                              <li>if options is an object</li>see {@link z.widget.Tooltip} parameters
 *                                          </ul>
 * @return {z.widget.Tooltip}tooltip    - The tooltip instance.
 *
 * @example
 *  z.widget.tooltip.open("#onBtn", "This is a tooltip");
 */
z.widget.tooltip.open = function (refEle, options) {
};

/**
 * Closes all the tooltips.
 * @return void
 *
 * @example
 * z.widget.tooltip.close();
 */
z.widget.tooltip.close = function () {
};

/**
 * The Popover component is used to display popup secondary information.
 * The {@link z.widget.popover}/{@link z.widget.popover.init}/{@link z.widget.popover.open}/{@link z.widget.popover.close} methods are the easier way to show/hide popover
 *
 * @see {@link z.widget.popover}
 * @see {@link z.widget.popover.init}
 * @see {@link z.widget.popover.open}
 * @see {@link z.widget.popover.close}
 *
 * @constructor
 * @extends $IPopUpView
 *
 * @param {Object}[args]       - The arguments to create the Popover, see {@link $IPopUpView IPopUpView }
 *                               <table>
 *                                   <tr>
 *                                       <th>option</th>
 *                                       <th>description</th>
 *                                       <th>default</th>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>direction</td>
 *                                       <td>the direction of the popover, the valid values are:
 *                                       "up_left", "up", "up_right",
 *                                       "left_up", "left", "left_down",
 *                                       "right_up", "right","right_down"
 *                                       "down_left", "down","down_right"
 *                                       "screen_center"</td>
 *                                       <th>"right"</th>
 *                                   </tr>
 *                                   <tr>
 *                                       <td>offset</td>
 *                                       <td>the offset(px) of the popover</td>
 *                                       <th>2</th>
 *                                   </tr>
 *                               </table>
 *
 */
z.widget.Popover = function (args) {
};

/**
 *
 * Initializes the popover for the specified element, the trigger event listener is added to open/close popover.
 * The specified element attributes are use to show popover.
 * <table>
 *     <tr>
 *         <th>popover option</th>
 *         <th>element attribute</th>
 *         <th>description</th>
 *     </tr>
 *     <tr>
 *         <td>content</td>
 *         <td>data-content/title</td>
 *         <td>the content of the popover</td>
 *     </tr>
 *     <tr>
 *         <td>title</td>
 *         <td>data-title</td>
 *         <td>the title of the popover</td>
 *     </tr>
 *     <tr>
 *         <td>direction</td>
 *         <td>data-direction</td>
 *         <td>the direction of the popover, default is 'right'</td>
 *     </tr>
 *     <tr>
 *         <td>offset</td>
 *         <td>data-offset</td>
 *         <td>the offset of the popover</td>
 *     </tr>
 * </table>
 *
 * @function
 * @see {@link z.widget.Popover}
 *
 * @param {(String|Element)}refEle      - The specified reference element to position the popover. It can be selectors or an Element
 * @param {String}[trigger]             - Optional. The event type to show popover. If omitted, the 'click' is used.
 *                                           <table>
 *                                               <tr>
 *                                                   <th>trigger</th>
 *                                                   <th>open event</th>
 *                                                   <th>close event</th>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>hover</td>
 *                                                   <td>mouseenter</td>
 *                                                   <td>mouseleave</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>focus</td>
 *                                                   <td>focus</td>
 *                                                   <td>blur</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>click</td>
 *                                                   <td>click</td>
 *                                                   <td>click</td>
 *                                               </tr>
 *                                           </table>
 * @param {Boolean}auto_close           - If false, the popover does not close automatically, otherwise, an event listener is added to close the popover automatically.
 *
 * @return void
 *
 * @example
 *
 * <button id="autoBtn"  data-content="popover content">popover()</button>
 *
 * //show popover when the pointer enters button, hide popover when the pointer leaves button
 * z.widget.popover("#autoBtn");
 *
 * //show popover when you click the button, click again to hide
 * z.widget.popover("#autoBtn","click");//popover will open on hover
 *
 */
z.widget.popover = function (refEle, trigger, auto_close) {
};

/**
 * Initializes popovers for all elements with the data-toggle="popover" attribute.
 * The trigger event type is the value of the data-trigger attribute. Default is click
 *
 * @function
 * @see {@link z.widget.popover}
 *
 * @param {(String|Element)}[container]     - Optional. The specified container to query all the popover elements. If omitted, the document.body is used.
 *
 * @return void
 *
 * @example
 * z.widget.popover.init();
 * z.widget.popover.init("form");
 */
z.widget.popover.init = function (container) {
};

/**
 * Opens a popover on the specified element.
 *
 * @function
 *
 * @param {(String|Element)}refEle      - The specified reference element to position the popover
 * @param {(String|Object)}options      - The specified options.
 *                                          <ul>
 *                                              <li>if options is a string</li>it is the content of the popover
 *                                              <li>if options is an object</li> see {@link z.widget.Popover} parameters
 *                                          </ul>
 * @return {z.widget.Popover}popover    - The popover instance.
 *
 * @example
 *  z.widget.popover.open("#onBtn", "This is a popover");
 */
z.widget.popover.open = function (refEle, options) {
};

/**
 * Closes all the popovers.
 *
 * @return void
 *
 * @example
 * z.widget.popover.close();
 */
z.widget.popover.close = function () {
};

/**
 *
 * Opens/Closes a dialog with the specified content element.
 *
 * @param {(String|Element)}modalContentEle         - The specified content element
 * @param {(Object|Boolean)}[options]               - The specified options to show the modal.<b>If false, the dialog will be closed.<b>
 *                                                      <table>
 *                                                          <tr>
 *                                                              <th>option</th>
 *                                                              <th>description</th>
 *                                                              <th>default</th>
 *                                                          </tr>
 *                                                          <tr>
 *                                                              <td>mask_visible</td>
 *                                                              <td>Specifies whether the mask is visible</td>
 *                                                              <td>true</td>
 *                                                          </tr>
 *                                                          <tr>
 *                                                              <td>close_on_click_outside</td>
 *                                                              <td>Specifies whether the modal should close when clicking outside of the modal</td>
 *                                                              <td>true</td>
 *                                                          </tr>
 *                                                          <tr>
 *                                                              <td>release_on_close</td>
 *                                                              <td>Specifies whether the content element should be released to the old position(before open) when the modal is closed</td>
 *                                                              <td>true</td>
 *                                                          </tr>
 *                                                      </table>
 * @param {(String|Element)}[parentNode]            - The parent node to show the modal. If omitted, the dialog will be appended to the document.body.
 *
 * @return [Modal]modal                             - The modal instance.
 *
 * @example
 * z.widget.modal("#modalDiv", {close_on_click_outside: false});//open
 * z.widget.modal("#modalDiv", false);//close
 */
z.widget.modal = function (modalContentEle, options, parentNode) {
};

/**
 * Initializes modals for all elements with the data-toggle="modal" attribute.
 * The trigger event type is the value of the data-trigger attribute. Default is click
 * The specified element attributes are use to open modal.
 * <table>
 *     <tr>
 *         <th>tooltip option</th>
 *         <th>element attribute</th>
 *         <th>description</th>
 *     </tr>
 *     <tr>
 *         <td>content</td>
 *         <td>data-content/title</td>
 *         <td>The content of the modal</td>
 *     </tr>
 *     <tr>
 *         <td>class</td>
 *         <td>data-class</td>
 *         <td>The specified className of the modal</td>
 *     </tr>
 *     <tr>
 *         <td>close_on_click_outside</td>
 *         <td>data-close-on-click-outside</td>
 *         <td>Specifies whether the modal should close when clicking outside of the modal</td>
 *     </tr>
 * </table>
 *
 *
 * @param {(String|Element)}[container]     - Optional. The specified container to query all the modal elements. If omitted, the document.body is used.
 *
 * @return void
 *
 * @example
 *  <button id="openBtn" class="btn btn-success" data-toggle="zw-modal" data-content="element:#modalDiv">open</button>
 *
 *  z.widget.modal.init();
 */
z.widget.modal.init = function (container) {
};

/**
 * Adds trigger event listener to the specified element.
 * When trigger event is delivered to the element, opens the modal.
 *
 * @param {(String|Element)}triggerEle      - The specified trigger element
 * @param {String}[trigger]                 - The trigger event type. Default is click.
 *
 * @return void
 *
 * @example
 * z.widget.modal.on("#triggerBtn");//Add modal open listener.
 */
z.widget.modal.on = function (triggerEle, trigger) {
};

/**
 * Displays an alert dialog with the optional specified content and an OK button.
 *
 * @param {String}message           - The message string you want to display in the alert dialog.
 * @param {String}title             - The title of the the alert dialog
 * @param {Function}[callBack]      - The callback function that will be called when the OK button is clicked.
 * @param {Object}[options]         - The specified options to open the alert dialog. see {@link z.widget.prompt}
 *
 * @return void
 *
 * @example
 * z.widget.alert("This is alert!!", "Alert");
 *
 */
z.widget.alert = function (message, title, callBack, options) {
};

/**
 * Displays a modal dialog with an optional message and two buttons: OK and Cancel.
 *
 * @param {String}message           - The message string you want to display in the alert dialog.
 * @param {String}title             - The title of the the alert dialog
 * @param {Function}[callBack]      - The callback function that will be called when the OK button is clicked.
 * @param {Object}[options]         - The specified options to open the alert dialog. see {@link z.widget.prompt}
 *
 * @return
 *
 * @example
 * <pre>
 * //callback
 * z.widget.confirm("This is confirm!!", "Confirm", function (result) {
 *     console.log(result)//true/false
 *  });
 *
 * //promise
 * z.widget.confirm("This is confirm!!", "Confirm").then(function (result) {
 *    console.log("OK")
 * }).catch(function (reason) {
 *    console.log("Cancel")
 * });
 * </pre>
 */
z.widget.confirm = function (message, title, callBack, options) {
};

/**
 * Displays a dialog with an optional message prompting the user to input some text.
 *
 * @param {String}message           - The message string you want to display in the alert dialog.
 * @param {String}title             - The title of the the alert dialog
 * @param {Function}[callBack]      - The callback function that will be called when the OK button is clicked.
 * @param {Object}[options]         - The specified options to open the alert dialog.
 *                                      <table>
 *                                          <tr>
 *                                              <th>option</th>
 *                                              <th>description</th>
 *                                              <th>default</th>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>confirm_class</td>
 *                                              <td>the class name of the OK button</td>
 *                                              <td>z-button primary</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>cancel_class</td>
 *                                              <td>the class name of the Cancel button</td>
 *                                              <td>z-button</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>input_class</td>
 *                                              <td>the class name of the input</td>
 *                                              <td></td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>value</td>
 *                                              <td>the initialization value of the input</td>
 *                                              <td></td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>confirm_text</td>
 *                                              <td>the label of the OK button</td>
 *                                              <td>OK</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>cancel_text</td>
 *                                              <td>the label of the Cancel button</td>
 *                                              <td>Cancel</td>
 *                                          </tr>
 *                                      </table>
 * @return
 *
 * @example
 * <pre>
 * //callback
 * z.widget.prompt("This is prompt!!", "Prompt", function (result) {
 *    console.log(result);//null/input value
 * });
 * //promise
 * z.widget.prompt("This is prompt!!", "Prompt").then(function (value) {
 *    console.log(value)
 * }).catch(function (reason) {
 *    console.log(null)
 * });
 * </pre>
 */
z.widget.prompt = function (message, title, callBack, options) {
};

/**
 * Displays a loading dialog.
 *
 * @param {(String|Boolean)}[label]         - The message string you want to display in the loading dialog.<b> If false, closes the loading dialog</b>
 * @param {(String|Element)}[parentNode]    - The specified parent element. It can be selectors or an Element. If omitted, the dialog will be appended to the document.body.
 *
 * @return
 *
 * @example
 *  z.widget.loading("loading");//open
 *  z.widget.loading(false);//close
 *
 *  z.widget.loading("loading", "#formDiv");//parentNode open
 *  z.widget.loading(false, "#formDiv");//close
 */
z.widget.loading = function (label, parentNode) {
};

/**
 * Displays an notification to the user.
 *
 * @param {(String|Boolean)}labelOrFalse    - The notification string you want to display in the notification dialog.
 * @param {Object}[options]                 - The specified options to open the notification dialog.
 *                                           <table>
 *                                               <tr>
 *                                                   <th>option</th>
 *                                                   <th>description</th>
 *                                                   <th>default</th>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>type</td>
 *                                                   <td>the type of the notification. The valid values are: success,info,warning,error</td>
 *                                                   <td></td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>duration</td>
 *                                                   <td>duration before close. It will not automatically close if value<=0</td>
 *                                                   <td></td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>title</td>
 *                                                   <td>the title of the notification dialog</td>
 *                                                   <td></td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>close_icon_visible</td>
 *                                                   <td>Specifies whether the close icon is visible. If true, the close icon will be visible. Otherwise invisible</td>
 *                                                   <td>true</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>position</td>
 *                                                   <td>the position to show the notification dialog. The valid values are: top_right,top_left,bottom_right,bottom_left </td>
 *                                                   <td>top_right</td>
 *                                               </tr>
 *                                               <tr>
 *                                                   <td>direction</td>
 *                                                   <td>the direction of the notification dialog. The valid values are: up,down,left,right.  If omitted, it is determined by position. </td>
 *                                                   <td></td>
 *                                               </tr>
 *                                           </table>
 *
 * @return
 *
 * @example
 * z.widget.notify("This is a notification!!");
 * z.widget.notify("This is a success notification!!", {type: "success", duration: 1000});
 */
z.widget.notify = function (labelOrFalse, options) {
};

/**
 * @memberOf z
 * @namespace
 */
z.form = {};

/**
 *
 * Creates a Validator instance.
 *
 * ★ All elements with the 'v-rules' attribute will be added to validation rules.
 * ★ The Validator can also be used as an Object, please see example.
 *
 * <b>
 * The difference between
 *  var validator = z.form.Validator("form");
 *  var invalidArray = validator.validate();
 * and
 *  z.form.Validator.validate("form")
 * is that z.form.Validator.validate() does not add change listener to re-validate the element when the value of the element has been changed.
 * </b>
 *
 * @memberOf z.form
 * @name z.form.Validator
 * @constructor
 *
 * @param {String|Element}form      - The form to be validated
 * @param {Array}[rules]            - The rules used to validate
 * @param {Object}[options]         - The options used to validate
 *                                      <table>
 *                                          <tr>
 *                                              <th>option</th>
 *                                              <th>description</th>
 *                                              <th>default</th>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>invalid_class</td>
 *                                              <td>The className applied to the invalid form fields</td>
 *                                              <td>'z-validator-invalid'</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>message_class</td>
 *                                              <td>The className applied to the invalid messages</td>
 *                                              <td>'z-validator-message'</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>autofocus</td>
 *                                              <td>If not false, the first invalid element will get the focus after validation</td>
 *                                              <td>true</td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>message</td>
 *                                              <td>If false, the invalid message will not be appended</td>
 *                                              <td></td>
 *                                          </tr>
 *                                          <tr>
 *                                              <td>message_container</td>
 *                                              <td>If specified, the invalid messages will be appended to the message container</td>
 *                                              <td>null</td>
 *                                          </tr>
 *                                      </table>
 *
 *  @return  {z.form.Validator}validator   -  The Validator instance
 *
 *  @example
 *  //<b>as constructor</b>
 *  <pre>
 *  var validator = new z.form.Validator("form", [
 *        {name: "username", rules: "required|alphanumeric"},
 *        {name: "email", rules: "email"},
 *        {name: "password", rules: "required|minlength[8]"},
 *        {name: "confirm_password", rules: "required|match[password]"},
 *        {name: "city", rules: "required"},
 *        {name: "agree", rules: "required"}
 *   ]);
 *   validator.validate();
 *  </pre>
 *
 *  //<b>as object</b>
 *  <pre>
 *  var invalidArray = z.form.Validator.validate("form",
 *  [
 *     {name: "username", rules: "required|alphanumeric"},
 *     {name: "email", rules: "email"},
 *     {name: "password", rules: "required|minlength[8]"},
 *     {name: "confirm_password", rules: "required|match[password]"},
 *     {name: "city", rules: "required"},
 *     {name: "agree", rules: "required"}
 *   ],
 *  {
 *     invalid_class: "is-invalid",
 *     message_class: "invalid-feedback"
 *  });
 *
 *  z.form.Validator.reset("form");
 *
 *  z.form.Validator.registerRule("alphanumeric_underscore", function (element, param) {
 *      //return true/false
 *      return /^[a-zA-Z0-9]+$/.test(z.dom.getValue(element));
 *  }, "The field must only contain alpha-numeric characters, underscores");
 *
 *   z.form.Validator.registerRuleMessage(ruleName, valMethod, ruleMsg);
 *
 *   z.form.Validator.registerRuleMessage("alphanumeric_underscore", The field must only contain alpha-numeric characters, underscores");
 *  </pre>
 */
z.form.Validator = function (form, rules, options) {
};

/**
 * Validates the form fields
 *
 * @return {Array}invalidArray        - The array of invalid fields.
 *                                     <table>
 *                                         <tr>
 *                                             <th>key</th>
 *                                             <th>description</th>
 *                                         </tr>
 *                                         <tr>
 *                                             <td> reason</td>
 *                                             <td>The invalid rule name</td>
 *                                         </tr>
 *                                         <tr>
 *                                             <td> element</td>
 *                                             <td>The invalid form element</td>
 *                                         </tr>
 *                                         <tr>
 *                                             <td> message</td>
 *                                             <td>The invalid message</td>
 *                                         </tr>
 *                                         <tr>
 *                                             <td> rule</td>
 *                                             <td>The invalid rule object</td>
 *                                         </tr>
 *                                     </table>
 *
 * @example
 * <pre>
 *  var validator = z.form.Validator("form");//equals to: var validator = new z.form.Validator("form");
 *  var invalidArray = validator.validate();
 *
 * </pre>
 */
z.form.Validator.prototype.validate = function () {
};

/**
 * Resets the invalid form fields.
 *
 * @example
 * <pre>
 *  validator.validate();
 * </pre>
 */
z.form.Validator.prototype.reset = function () {
};

/**
 * Sets up a function that will be called whenever the form elements(to be validated) are changed
 *
 * @example
 * <pre>
 * validator.onValidate(function (result) {
 *   var errArray =result.errors ;
 *   if (errArray.length > 0) {
 *       z.dom.setAttribute("#submitBtn", "disabled", "disabled");
 *   } else {
 *       z.dom.removeAttribute("#submitBtn", "disabled");
 *   }
 * });
 * </pre>
 */
z.form.Validator.prototype.onValidate = function (callBack) {
};

/**
 * Registers a new validation rule.
 *
 * List of built-in validation rules:
 * <table>
 *     <tr>
 *         <th>rule</th>
 *         <th>message</th>
 *         <th>description</th>
 *     </tr>
 *     <tr>
 *         <td>required</td>
 *         <td>The field is required</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>integer</td>
 *         <td>The field must be an integer</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>numeric</td>
 *         <td>The field must contain only numbers</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>alphanumeric</td>
 *         <td>The field must only contain alpha-numeric characters</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>alphanumeric_dash</td>
 *         <td>The field must only contain alpha-numeric characters, underscores and dashes</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>alphanumeric_space</td>
 *         <td>The field must only contain alpha-numeric characters and space characters</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>email</td>
 *         <td>The field must be a valid email address</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>ipv4</td>
 *         <td>The field must be a valid IP</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>minlength[??]</td>
 *         <td>The field must be at least ?? characters in length</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>maxlength[??]</td>
 *         <td>The field must not exceed ?? characters in length</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>greaterthan[??]</td>
 *         <td>The field must contain a number greater than ??</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>lessthan[??]</td>
 *         <td>The field must contain a number less than ??</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>equal[??]</td>
 *         <td>The field must be equal to ??</td>
 *         <td></td>
 *     </tr>
 *     <tr>
 *         <td>match[??]</td>
 *         <td>The field must match ?? field</td>
 *         <td></td>
 *     </tr>
 * </table>
 *
 * @param {String}ruleName          - The name of the rule
 * @param {Function}valMethod       - The validation method, if return false, the validation is invalid.
 * @param {String}[ruleMsg]         - The default invalid message.
 *
 * @return void
 *
 * @example
 * <pre>
 * z.form.Validator.registerRule("alphanumeric_underscore", function (element, param) {
 *     //return true/false
 *     return /^[a-zA-Z0-9]+$/.test(z.dom.getValue(element));
 * }, "The field must only contain alpha-numeric characters, underscores");
 * </pre>
 *
 */
z.form.Validator.prototype.registerRule = function (ruleName, valMethod, ruleMsg) {
};

/**
 * Registers the default message for the specified rule.
 *
 * @param {String}ruleName          - The name of the specified rule
 * @param {String}[message]         - The default invalid invalid message.
 *
 * @return void
 *
 * @example
 * <pre>
 * z.form.Validator.registerRuleMessage("alphanumeric_underscore", The field must only contain alpha-numeric characters, underscores");
 * </pre>
 *
 */
z.form.Validator.prototype.registerRuleMessage = function (ruleName, message) {
};

/**
 * Creates a Form instance.
 * z.form.Form is a form manager that allows you to easily manage the form.
 * The value and the status(visible/disabled) of the elements in the form can be set by the value object.
 *
 * setValue method can be used to set the values of the elements in the form.
 * getValue method can be used to get the values of the elements in the form.
 * clearValue method can be used to clear the values of the elements in the form.
 *
 * @memberOf z.form
 * @name z.form.Form
 * @constructor
 *
 * @param {(String|Element)}form    - The specified form to be managed.
 * @param {Object}[options]         - The options used to manage the form.
 *                                      <table>
 *                                        <tr>
 *                                            <th>option</th>
 *                                            <th>description</th>
 *                                            <th>default</th>
 *                                        </tr>
 *                                        <tr>
 *                                            <td>validate</td>
 *                                            <td>If not false, the elements in the form will be validated by {@link z.form.Validator}.
 *                                                <b>If some elements have invalid values, calling the getValue method will return null.</b></td>
 *                                            <td>true</td>
 *                                        </tr>
 *                                       </table
 *
 * @return {z.form.Form}formInstance    - The z.form.Form instance.

 *
 * @example
 * <pre>
 * var form = z.form.Form("#formDiv");
 * z.dom.event.onclick("#setBtn", function () {
 *      form.setValue({
 *          name: "Rider",
 *          email: "rider@focus-ui.com",
 *          address: {
 *              country: "United States",
 *              state: "California"
 *          },
 *          agree: true
 *      })
 *  });
 * z.dom.event.onclick("#getBtn", function () {
 *      z.widget.alert(JSON.stringify(form.getValue(), null, "  "))
 *  });
 * z.dom.event.onclick("#clearBtn", function () {
 *      form.clearValue();
 *  })
 * </pre>
 *
 */
z.form.Form = function (form, options) {
};

/**
 * Sets the values of the elements in the form and resets the invalid form fields.
 *
 * @param {Object}[value]     - The value used to set. If the value is null, the values of all elements will be cleared
 *
 * @return void
 *
 * @example
 * <pre>
 * var form = z.form.Form("#formDiv");
 * form.setValue({
 *    name: "Rider",
 *    email: "rider@focus-ui.com",
 *    address: {
 *        country: "United States",
 *        state: "California"
 *    },
 *    agree: true
 * })
 * </pre>
 */
z.form.Form.prototype.setValue = function (value) {
};

/**
 * Gets the values of the elements in the form.
 * <b>★ If validate option is not false, when some elements have invalid values, calling the getValue() method will return null.</b>
 *
 * @param {Boolean}[validate]       - If false, returns an unverified value object, otherwise returns a verified value.
 *
 * @return {(Object|null)}value     - The values of the elements in the form.
 *
 * @example
 * form.getValue()
 */
z.form.Form.prototype.getValue = function (validate) {
};

/**
 * Clears the values of the elements in the form and resets the invalid form fields.
 *
 * @return void
 * @example
 *  form.clearValue();
 */
z.form.Form.prototype.clearValue = function () {
};