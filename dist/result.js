var result =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"b\":\"AccessBot\",\"c\":\"1.1.6\",\"a\":\"Assisted Evaluation powered by QualWeb.\"}");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(4)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEARLReport = exports.generateEARLAssertions = void 0;
const lodash_clonedeep_1 = __importDefault(__webpack_require__(1));
const act_rules_reporter_1 = __importDefault(__webpack_require__(5));
const html_techniques_reporter_1 = __importDefault(__webpack_require__(6));
const css_techniques_reporter_1 = __importDefault(__webpack_require__(7));
const best_practices_reporter_1 = __importDefault(__webpack_require__(8));
async function generateEARLAssertions(report, date) {
    switch (report.type) {
        case 'act-rules':
            return await act_rules_reporter_1.default(report, date);
        case 'html-techniques':
            return await html_techniques_reporter_1.default(report, date);
        case 'css-techniques':
            return await css_techniques_reporter_1.default(report, date);
        case 'best-practices':
            return await best_practices_reporter_1.default(report, date);
        default:
            throw new Error('Invalid report type');
    }
}
exports.generateEARLAssertions = generateEARLAssertions;
function reportModule(module, options) {
    if (!options || !options.modules) {
        return true;
    }
    else {
        switch (module) {
            case 'act':
                return !!options.modules.act;
            case 'html':
                return !!options.modules.html;
            case 'css':
                return !!options.modules.css;
            case 'best-practices':
                return !!options.modules['best-practices'];
            default:
                return false;
        }
    }
}
async function generateSingleEarlReport(report, options) {
    var _a;
    const earlReport = {
        '@context': 'https://act-rules.github.io/earl-context.json',
        '@graph': new Array()
    };
    const assertor = {
        '@id': report.system.name,
        '@type': 'Software',
        title: report.system.name,
        description: report.system.description,
        hasVersion: report.system.version,
        homepage: report.system.homepage
    };
    const testSubject = {
        '@type': 'TestSubject',
        source: ((_a = report.system.url) === null || _a === void 0 ? void 0 : _a.inputUrl) || '',
        assertor,
        assertions: new Array()
    };
    if (report.system.url && report.system.url.inputUrl !== report.system.url.completeUrl) {
        testSubject.redirectedTo = report.system.url.completeUrl;
    }
    if (report.modules['act-rules'] && reportModule('act', options)) {
        testSubject.assertions = [
            ...testSubject.assertions,
            ...(await generateEARLAssertions(report.modules['act-rules'], report.system.date))
        ];
    }
    if (report.modules['html-techniques'] && reportModule('html', options)) {
        testSubject.assertions = [
            ...testSubject.assertions,
            ...(await generateEARLAssertions(report.modules['html-techniques'], report.system.date))
        ];
    }
    if (report.modules['css-techniques'] && reportModule('css', options)) {
        testSubject.assertions = [
            ...testSubject.assertions,
            ...(await generateEARLAssertions(report.modules['css-techniques'], report.system.date))
        ];
    }
    if (report.modules['best-practices'] && reportModule('best-practices', options)) {
        testSubject.assertions = [
            ...testSubject.assertions,
            ...(await generateEARLAssertions(report.modules['best-practices'], report.system.date))
        ];
    }
    earlReport['@graph'].push(lodash_clonedeep_1.default(testSubject));
    return earlReport;
}
async function generateAggregatedEarlReport(reports, options) {
    const aggregatedReport = {
        '@context': 'https://act-rules.github.io/earl-context.json',
        '@graph': new Array()
    };
    for (const report of reports || []) {
        const earlReport = await generateSingleEarlReport(report, options);
        aggregatedReport['@graph'].push(lodash_clonedeep_1.default(earlReport['@graph'][0]));
    }
    return aggregatedReport;
}
async function generateEARLReport(reports, options) {
    const earlReports = {};
    if (options && options.aggregated) {
        const firstUrl = Object.keys(reports)[0];
        earlReports[options.aggregatedName || firstUrl] = await generateAggregatedEarlReport(Object.values(reports), options);
    }
    else {
        for (const url in reports || {}) {
            const earlReport = await generateSingleEarlReport(reports[url], options);
            earlReports[url] = lodash_clonedeep_1.default(earlReport);
        }
    }
    return lodash_clonedeep_1.default(earlReports);
}
exports.generateEARLReport = generateEARLReport;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

async function ACTRulesReportToEARL(report, date) {
    var _a;
    const assertions = new Array();
    for (const ruleName in report.assertions || {}) {
        if (report.assertions[ruleName]) {
            const rule = report.assertions[ruleName];
            if (rule) {
                const sources = new Array();
                for (const result of rule.results || []) {
                    const source = {
                        result: {
                            pointer: (_a = result.elements) === null || _a === void 0 ? void 0 : _a.filter(e => e.pointer !== undefined).map(e => e.pointer).join(', '),
                            outcome: 'earl:' + (result.verdict !== 'warning' ? result.verdict : 'cantTell')
                        }
                    };
                    sources.push(source);
                }
                const result = {
                    '@type': 'TestResult',
                    outcome: 'earl:' + (rule.metadata.outcome !== 'warning' ? rule.metadata.outcome : 'cantTell'),
                    source: sources,
                    description: rule.metadata.description,
                    date: date ? date : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                };
                const assertion = {
                    '@type': 'Assertion',
                    test: {
                        '@id': rule.metadata.url,
                        '@type': 'TestCase',
                        title: rule.name,
                        description: rule.description
                    },
                    mode: 'earl:automatic',
                    result
                };
                assertions.push(assertion);
            }
        }
    }
    return assertions;
}
module.exports = ACTRulesReportToEARL;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

async function HTMLTechniquesReportToEARL(report, date) {
    const assertions = new Array();
    for (const techniqueName in report.assertions || {}) {
        if (report.assertions[techniqueName]) {
            const technique = report.assertions[techniqueName];
            if (technique) {
                const sources = new Array();
                for (const result of technique.results || []) {
                    const source = {
                        result: {
                            pointer: result.pointer,
                            outcome: 'earl:' + (result.verdict !== 'warning' ? result.verdict : 'cantTell')
                        }
                    };
                    sources.push(source);
                }
                const result = {
                    '@type': 'TestResult',
                    outcome: 'earl:' + (technique.metadata.outcome !== 'warning' ? technique.metadata.outcome : 'cantTell'),
                    source: sources,
                    description: technique.metadata.description,
                    date: date ? date : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                };
                const assertion = {
                    '@type': 'Assertion',
                    test: {
                        '@id': technique.metadata.url,
                        '@type': 'TestCase',
                        title: technique.name,
                        description: technique.description
                    },
                    mode: 'earl:automatic',
                    result
                };
                assertions.push(assertion);
            }
        }
    }
    return assertions;
}
module.exports = HTMLTechniquesReportToEARL;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

async function CSSTechniquesReportToEARL(report, date) {
    const assertions = new Array();
    for (const techniqueName in report.assertions || {}) {
        if (report.assertions[techniqueName]) {
            const technique = report.assertions[techniqueName];
            if (technique) {
                const sources = new Array();
                for (const result of technique.results || []) {
                    const source = {
                        result: {
                            pointer: result.pointer,
                            outcome: 'earl:' + (result.verdict !== 'warning' ? result.verdict : 'cantTell')
                        }
                    };
                    sources.push(source);
                }
                const result = {
                    '@type': 'TestResult',
                    outcome: 'earl:' + (technique.metadata.outcome !== 'warning' ? technique.metadata.outcome : 'cantTell'),
                    source: sources,
                    description: technique.metadata.description,
                    date: date ? date : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                };
                const assertion = {
                    '@type': 'Assertion',
                    test: {
                        '@id': typeof technique.metadata.url === 'string' ? technique.metadata.url : technique.metadata.url[0],
                        '@type': 'TestCase',
                        title: technique.name,
                        description: technique.description
                    },
                    mode: 'earl:automatic',
                    result
                };
                assertions.push(assertion);
            }
        }
    }
    return assertions;
}
module.exports = CSSTechniquesReportToEARL;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

async function BestPracticesReportToEARL(report, date) {
    const assertions = new Array();
    for (const bpName in report.assertions || {}) {
        if (report.assertions[bpName]) {
            const bestPractice = report.assertions[bpName];
            if (bestPractice) {
                const sources = new Array();
                for (const result of bestPractice.results || []) {
                    const source = {
                        result: {
                            pointer: result.pointer,
                            outcome: 'earl:' + (result.verdict !== 'warning' ? result.verdict : 'cantTell')
                        }
                    };
                    sources.push(source);
                }
                const result = {
                    '@type': 'TestResult',
                    outcome: 'earl:' + (bestPractice.metadata.outcome !== 'warning' ? bestPractice.metadata.outcome : 'cantTell'),
                    source: sources,
                    description: bestPractice.metadata.description,
                    date: date ? date : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
                };
                const assertion = {
                    '@type': 'Assertion',
                    test: {
                        '@id': bestPractice.metadata.url || bestPractice.name,
                        '@type': 'TestCase',
                        title: bestPractice.name,
                        description: bestPractice.description
                    },
                    mode: 'earl:automatic',
                    result
                };
                assertions.push(assertion);
            }
        }
    }
    return assertions;
}
module.exports = BestPracticesReportToEARL;


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./rules/const.js
//para actualizar qdo necessário

/* harmony default export */ var rules_const = ({
    IMAGE: "Image",
    TITLE: "Title",
    KEYBOARD: "Keyboard",
    LANGUAGE: "Language",
    TIME: "Time",
    ORIENTATION: "Orientation",
    SENSORYVISUALCLUES: "Sensory and Visual Clue",
    AUDIOVIDEO: "Audio and Video",
    PARSING: "Parsing",
    ARIA: "ARIA",
    FORMS: "Form",
    HEADINGS: "Heading",
    TABLES: "Table",
    CONTRAST: "Contrast",
    LINKS: "Link",
    IFRAMES: "iFrame",
    BUTTONS: "Button",
    LABEL: "Label",
    OBJECT: "Object",
    TEXT: "Text"

});


// CONCATENATED MODULE: ./rules/R1.js



/* harmony default export */ var R1 = ({
    code: 'QW-ACT-R1',
    category: rules_const.TITLE,
    plusRule: [ {plusRuleCode:'c4a8a4', plusRuleUrl: 'https://act-rules.github.io/rules/c4a8a4', plusRuleName: 'HTML page title is descriptive.'}],
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: 'Does title describe page?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`title\` element exists and it's not empty and describes page. ",
                
            },
            {
                key: 'Fail',
                title: "The \`title\` element exists and is not empy but does not describe page. ",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R2.js



/* harmony default export */ var R2 = ({
    code: 'QW-ACT-R2',
    category: rules_const.LANGUAGE,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Is the content of the page according to the value of lang attribute?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "`The \`lang\` attribute exists and its value is according to the content of the page. ",
                
            },
            {
                key: 'Fail',
                title: "`The \`lang\` attribute value  isn't according to the content of the page. ",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R6.js


/* harmony default export */ var R6 = ({
    code: 'QW-ACT-R6',
    category: rules_const.IMAGE,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The `image button` has an accessible name #{a} that describes purpose",
                
            },
            {
                key: 'Fail',
                title: "The \`image button\` has an accessible name #{a} that does not describe purpose",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R8.js



/* harmony default export */ var R8 = ({
    code: 'QW-ACT-R8',
    category: rules_const.IMAGE,
    tree: [{
        prerequisite: 'RC1',
        flow:[
            {
            key: '1A',
            title: 'Does accessible name #{a} describes purpose?',
            answerYes: 'Pass',
            answerNo: 'Fail',
            },
            {
            key: 'Pass',
            title: "The element's accessible name uses the filename which accurately describes the image and purpose",
            
            },
            {
            key: 'Fail',
            title: "The presence of the file extension in the accessible name does not accurately describe purpose of the image",
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R9.js



/* harmony default export */ var R9 = ({
    code: 'QW-ACT-R9',
    category: rules_const.LINKS,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: 'Is the content equivalent?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`links\` with the same accessible name have equivalent content.`",
                
            },
            {
                key: 'Fail',
                title: "`The \`links\` with the same accessible name have different content.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R10.js



/* harmony default export */ var R10 = ({
    code: 'QW-ACT-R10',
    category: rules_const.IFRAMES,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: 'Is the content equivalent?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`iframes\` with the same accessible name have equal content.",
                
            },
            {
                key: 'Fail',
                title: "`The \`iframes\` with the same accessible name have different content.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R11.js



/* harmony default export */ var R11 = ({
    code: 'QW-ACT-R11',
    category: rules_const.BUTTONS,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a valid accessible name and it describes its purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has a valid accessible name but doesn't describe its purpose.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R12.js



/* harmony default export */ var R12 = ({
    code: 'QW-ACT-R12',
    category: rules_const.LINKS,
    plusRule: [ {plusRuleCode:'5effbb', plusRuleUrl: 'https://act-rules.github.io/rules/5effbb', plusRuleName: 'Link in context is descriptive.'}],
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a valid accessible name and it describes its purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has a valid accessible name but doesn't describe its purpose.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R15.js



/* harmony default export */ var R15 = ({
    code: 'QW-ACT-R15',
    category: rules_const.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC5',
        flow: [
            {
                key: '1A',
                title: 'Can you verify if target has a visible control mechanism?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a control mechanism to stop or mute it.",
                
            },
            {
                key: 'Fail',
                title: "The test target does not have a control mechanism to stop or mute it.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R16.js



/* harmony default export */ var R16 = ({
    code: 'QW-ACT-R16',
    category: rules_const.FORMS,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has an accessible name and describes purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has an accessible name but does not describe purpose",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R17.js


/* harmony default export */ var R17 = ({
        code: 'QW-ACT-R17',
        category: rules_const.IMAGE,
        tree: [{
            prerequisite: 'RC1',
            flow: [
                {
                    key: '1A',
                    title: 'Is the image decorative?',
                    answerYes: 'Pass',
                    answerNo: 'Fail',
                },
                {
                    key: 'Pass',
                    title: "The test target is decorative.",
                },
                {
                    key: 'Fail',
                    title: "The presence of the file extension in the accessible name does not accurately describe purpose of the image",
                }
            ]
        },
        {
            prerequisite: 'RC3, RC6',
            flow: [
                {
                    key: '1B',
                    title: 'Is image a complex image (for example, a graph)?',
                    answerYes: '2A',
                    answerNo: '2B',
                },
                {
                    key: '2A',
                    title: "Does accessible name #{a} describe purpose?",
                    answerYes:"3A",
                    answerNo: "2AFail"
                },
                {
                    key: '3A',
                    title: "Does accessible name #{a} describe content?",
                    answerYes:"3APass",
                    answerNo: "3AFail"
                    
                },
                {   key: '3APass',
                    title: "Accessible name describes purpose and content."
                },
                {
                    key: '3AFail',
                    title: "Accessible name does not describe purpose and content."
                },
                {
                    key: "2B",
                    title: "Is image a CAPTCHA image?",
                    answerYes: "3B",
                    answerNo: "3C"
                },
                {
                    key: "3B",
                    title: "Accessible name #{a} comunicates purpose?",
                    answerYes: "4A",
                    answerNo: "3BFail"
                },
                {
                    key: "4A",
                    title: "Accessible name #{a} communicates content?",
                    answerYes: "4AFail",
                    answerNo: "4APass"
                },
                {
                    key: '4AFail',
                    title: "Accessible name communicates purpose and communicates content."
            
                },
                {
                    key: '4APass',
                    title: "Accessible name communicates purpose and does not communicate content."
            
                },
                {
                    key: '3BFail',
                    title: "Accessible name does not communicate purpose"
            
                },
                {
                    key: '3C',
                    title: 'Is an image of text?',
                    answerYes:"4B",
                    answerNo:'5A'
            
                },
                {
                    key: '4B',
                    title: 'Does accessible name #{a} matches text within image?',
                    answerYes:"4BPass",
                    answerNo:'4BFail'
            
                },
                {
                    key: '4BPass',
                    title: 'Accessible name matches text.',
            
                },
                {
                    key: '4BFail',
                    title: "Accessible name does not match text within image.",
                },
                {
                    key: "5A",
                    title: "Does accessible name #{a} describe purpose?",
                    answerYes: "5APass",
                    answerNo: "5AFail"
                },
                {
                    key: '5APass',
                    title: "The element's accessible name describes purpose.",
                },
                {
                    key: '5AFail',
                    title: "The element's accessible name does not describe purpose."
                }
            ]
        }]
});
// CONCATENATED MODULE: ./rules/R19.js



/* harmony default export */ var R19 = ({
    code: 'QW-ACT-R19',
    category: rules_const.IFRAMES,
    tree: [{
        prerequisite: 'RC2',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has an accessible name and describes its purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has a valid accessible name but does not describe its purpose.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R21.js


/* harmony default export */ var R21 = ({
    code: 'QW-ACT-R21',
    category: rules_const.IMAGE,
    tree: [{
    prerequisite: 'RC2',
    flow: [
    {
        key: '1A',
        title: 'Is image a complex image (for example, a graph)?',
        answerYes: '2A',
        answerNo: '2B',
    },
    {
        key: '2A',
        title: "Does accessible name #{a} describe purpose?",
        answerYes:"3A",
        answerNo: "2AFail"    
    },
    {
        key: '3A',
        title: "Does accessible name #{a} describe content?",
        answerYes:"3APass",
        answerNo: "3AFail"
            
    },
    {   key: '3APass',
        title: "Accessible name #{a} describes purpose and content"
    },
    {
        key: '3AFail',
        title: "Accessible name does not describe purpose and content"
    },
    {
        key: "2B",
        title: "Is image a CAPTCHA image?",
        answerYes: "3B",
        answerNo: "3C"
    },
    {
        key: "3B",
        title: "Does accessible name #{a} comunicate purpose?",
        answerYes: "4A",
        answerNo: "3BFail"
    },
    {
        key: "4A",
        title: "Does accessible name #{a} communicate content?",
        answerYes: "4AFail",
        answerNo: "4APass"
    },
    {
        key: '4AFail',
        title: "Accessible name communicates purpose and communicates content."
    },
    {
        key: '4APass',
        title: "Accessible name communicates purpose and does not communicate content."
    },
    {
        key: '3BFail',
        title: "Accessible name does not communicate purpose."
    
    },
    {
        key: '3C',
        title: 'Is an image of text?',
        answerYes:"4B",
        answerNo:'5A'
    },
    {
        key: '4B',
        title: 'Does accessible name #{a} match text within image?',
        answerYes:"4BPass",
        answerNo:'4BFail'
    },
    {
        key: '4BPass',
        title: 'Accessible name matches text.',
    },
    {
        key: '4BFail',
        title: "Accessible name does not match text within image.",
    },
    {
        key: "5A",
        title: "Does accessible name #{a} describe purpose?",
        answerYes: "5APass",
        answerNo: "5AFail"
    },
    {
        key: '5APass',
        title: "The element's accessible name describes purpose.",
    },
    {
        key: '5AFail',
        title: "The element's accessible name does not describe purpose."

    }
]
}]
});

// CONCATENATED MODULE: ./rules/R22.js



/* harmony default export */ var R22 = ({
    code: 'QW-ACT-R22',
    category: rules_const.LANGUAGE,
    tree: [{
        prerequisite: 'RC2',
        flow: [
            {
                key: '1A',
                title: 'Is the language content  of the element the same as the value of lang attribute?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a valid `lang` attribute which is according to the language of the element",
                
            },
            {
                key: 'Fail',
                title: "`The \`lang\` attribute value  is not according to the language of the element.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R23.js



/* harmony default export */ var R23 = ({
    code: 'QW-ACT-R23',
    category: rules_const.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: "Is it an  audio alternative (voice over)?",
                answerYes: '1B',
                answerNo: '2B',
            },
            {
                key: '1B',
                title: "Does the audio content describe its purpose?",
                answerYes: "1BPass",
                answerNO: "1BFail"
                
            },
            {
                key: '1BPass',
                title: "The audio alternative describes the video content.",
            
            },
            {
                key: '1BFail',
                title: "'The audio alternative doesn/'t describe video content."

            },
            {
                key:"2B",
                title: "Is there text overlaid when media is playing?",
                answerYes:"2C" ,
                answerNo: "3A"

            },
            {
                key:"2C",
                title: "Does they describe the content of the video?",
                answerYes:"2CPass",
                answerNo: "2CFail"

            },
            {
                key: "2CPass",
                title: "The `track` element correctly describes the auditive content of the video."

            },
            {
                key:"2CFail",
                title: "The track element does not describe the content of the video."
            },
            {
                key: "3A",
                title: "Do you have access to a transcript?",
                answerYes: "3B",
                answerNo: "4A"
            },
            {
                key: "3B",
                title: "Does the transcript describe the video?",
                answerYes: "3BPass",
                answerNo: "3BFail"
            },
            {
                key: "3BPass",
                title: "The transcript correctly describes the auditive content of the video."
            },
            {
                key:"3BFail",
                title: "The transcript does not describe the auditive content of the video."
            },
            {
                key: "4A",
                title: "Does text on a page describe enterily the video content?",
                answerYes: "4APass",
                answerNo: "4AFail"
            },
            {
                key: "4APass",
                title: "The text on the page describes the content of the video."
            },
            {
                key: "4AFail",
                title: "The video does not have any content alternative."
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R29.js



/* harmony default export */ var R29 = ({
    code: 'QW-ACT-R29',
    category: rules_const.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does it have a text alternative?',
                answerYes: '2A',
                answerNo: '1AFail',
            },
            {
                key: '1AFail',
                title: "The audio element does not have a text alternative"
                
            },
            {
                key: '2A',
                title: "Does it describe the purpose of audio?",
                answerYes: "2APass",
                answerNo: "2AFail"
            
            },
            {
                key: "2AFail",
                title: "The text alternative does not describe the purpose of audio."
            },
            {
                key: "2APass",
                title: "The text alternative describes the purpose of audio."
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R30.js



/* harmony default export */ var R30 = ({
    code: 'QW-ACT-R30',
    category: rules_const.LABEL,
    tree: [{
        prerequisite: 'RC4',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name and it's accessible name also describes purpose.",
                
            },
            {
                key: 'Fail',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name but the accessible name does not describe purpose.",
            
            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R35.js



/* harmony default export */ var R35 = ({
    code: 'QW-ACT-R35',
    category: rules_const.HEADINGS,
    plusRule: [{plusRuleCode:'b49b2e', plusRuleUrl: 'https://act-rules.github.io/rules/b49b2e', plusRuleName: 'Heading is descriptive.'}],
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does the heading describe the contents of its section?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The heading describes the contents of its section."
                
            },
            {
                key: "Fail",
                title: "The heading does not describe the contents of its section."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R36.js



/* harmony default export */ var R36 = ({
    code: 'QW-ACT-R36',
    category: rules_const.TABLES,
    tree: [{
        prerequisite: 'RC7',
        flow: [
            {
                key: '1A',
                title: 'Does the data cells have appropriate headers?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The data cells have appropriate headers."
                
            },
            {
                key: "Fail",
                title: "The data cells do not have appropriate headers."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R37.js



/* harmony default export */ var R37 = ({
    code: 'QW-ACT-R37',
    category: rules_const.CONTRAST,
    tree: [{
        prerequisite: 'RC12',
        flow: [
            {
                key: '1A',
                title: 'Can you read text presented over the background?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Text is readable over the background."
                
            },
            {
                key: "Fail",
                title: "Text is not readable over the background."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R40.js



/* harmony default export */ var R40 = ({
    code: 'QW-ACT-R40',
    category: rules_const.SENSORYVISUALCLUES,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Can you verify if text content is not clipped?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Text content is not clipped."
                
            },
            {
                key: "Fail",
                title: "Text content is clipped."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R41.js



/* harmony default export */ var R41 = ({
    code: 'QW-ACT-R41',
    category: rules_const.FORMS,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'An error indicator appeared when there is an invalid form field value?',
                answerYes: '2A',
                answerNo: '1AFail',
            },
            {
                key: '2A',
                title: 'Does the error  indicator identify the cause of the error or how to fix the error?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Error messages appear and they describe invalid form fields values."
                
            },
            {
                key: "Fail",
                title: "Error indicator appear  when there is an invalid form field value but the error message does not identify the cause of error or how to fix the error."
            },
            {
                key: '1AFail',
                title: 'Error indicator do not appear when there is an invalid form field value'

            }
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R42.js



/* harmony default export */ var R42 = ({
    code: 'QW-ACT-R42',
    category: rules_const.OBJECT,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Accessible name #{a} describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a non-empty accessible name and it describes its purpose."
                
            },
            {
                key: "Fail",
                title: "The test target has a valid accessible name but doesn't describe its purpose."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/R44.js



/* harmony default export */ var R44 = ({
    code: 'QW-ACT-R44',
    category: rules_const.LINKS,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: 'Do the links have the same purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`links\` with the same accessible name have equal purpose."
                
            },
            {
                key: "Fail",
                title: "`The \`links\` with the same accessible name have different content."
            },
        ]
    }]
});
// CONCATENATED MODULE: ./rules/index.js
//import only semi-automatic rules




























/* harmony default export */ var rules = ([R1, R2, R6, R8, R9, R10, R11, R12, R15, R16, R17, R19, R21, R22, R23, R29, R30, R35, R36, R37, R40, R41, R42, R44]);
// CONCATENATED MODULE: ./rules/categories.js
 

//here to put all rules
/* harmony default export */ var categories = ({
    [rules_const.IMAGE]: ["R6", "R8", "R17", "R21"],
    [rules_const.TITLE]: ["R1"],
    [rules_const.KEYBOARD]: ["R43"],
    [rules_const.LANGUAGE]: ["R2", "R3", "R5", "R22"],
    [rules_const.TIME]: ["R4"],
    [rules_const.ORIENTATION]: ["R7"],
    [rules_const.SENSORYVISUALCLUES]: ["R14", "R40"],
    [rules_const.AUDIOVIDEO] : ["R15", "R23", "R26", "R29", "R31", "R32"],
    [rules_const.PARSING] : ["R18", "R48"],
    [rules_const.ARIA] : ["R13","R20", "R25", "R27", "R28", "R33", "R34", "R38"],
    [rules_const.FORMS]: ["R16", "R30", "R24", "R41"],
    [rules_const.HEADINGS]: ["R35"],
    [rules_const.TABLES]: ["R36","R39"],
    [rules_const.CONTRAST]: ["R37"],
    [rules_const.LINKS]: ["R9", "R12", "R44"],
    [rules_const.IFRAMES]: ["R10", "R19"],
    [rules_const.BUTTONS]: ["R11"],
    [rules_const.OBJECT]: ["R42"],

});


// CONCATENATED MODULE: ./rules/assessments/Keyboard-focusable.js



/* harmony default export */ var Keyboard_focusable = ({
    code: '80af7b',
    url: 'https://act-rules.github.io/rules/80af7b',
    name: 'Are elements focusable with keyboard?',
    category: rules_const.KEYBOARD,
    whyImportant: `Users must be able to access and interact with interface components using only the
    keyboard because using a mouse is not possible when the user has no vision or low vision
    or doesn't have the physical capability or dexterity to effectively control a pointing
    device.`,
    descriptionTest:`Users must be able to navigate away from all components using a keyboard.`,
    tree: [
        {
            key: '',
            title: `Tab through content from start to finish by using  standard keyboard commands 
            (Tab key; Shift+Tab; Arrow keys
                Esc key
                Enter key
                Space key) to navigate through
            all the interactive interface components in the target page.Check to see that keyboard focus is not trapped in any of the content.`,
            question: 'Can you navigate?',
            answerYes: 'Pass',
            answerNo: 'nextStep1'
        },
        {
            key: "nextStep1",
            title: `If you can't navigate away from a component using standard keyboard commands 
            (keyboard focus appears to be trapped in any of the content), check that help information is 
            available explaining how to exit the content and can be accessed via the keyboard.
            Examine the component's accessible name and accessible description to
            determine whether they describe an alternative keyboard command.
            If an alternative keyboard command is documented, test whether it works.`,
            question: 'Could you find an alternative way to navigate?',
            answerYes: "Pass",
            answerNo: "Fail"
        
        },
        {
            key: 'Pass',
            title: "No trap for keyboard navigation.",
        },
        {
            key: 'Fail',
            title: "There are traps in keyboard navigation",
        }
    ],


    
});
// CONCATENATED MODULE: ./rules/assessments/Text-content-automatically-changes.js



/* harmony default export */ var Text_content_automatically_changes = ({
    code: 'efbfc7',
    url: 'https://act-rules.github.io/rules/efbfc7',
    name: 'Text content that changes automatically can be paused, stopped or hidden.',
    category: rules_const.TIME,
    whyImportant: `The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.`,
    descriptionTest:`This rule checks that for any text content that automatically changes in a 10 minute time span, there are instruments to pause, stop, or hide it or to control its changing frequency. The arbitrary 10 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG. Content that changes less frequently may fail success criteria 2.2.2 without failing this rule.`,
    tree: [
        {
            key: '',
            title: `Interact with the Web page. `,
            question: 'Can you see if there is any text content  that automatically changes?',
            answerYes: 'nextStep1',
            answerNo: '1APass'
        },
        {
            key: "nextStep1",
            title: `Verify if there is any mechanism that allow you to  pause, stop and hide or to control its changing frequency?`,
            question: 'Is the mechanism present?',
            answerYes: "Pass",
            answerNo: "Fail"
        
        },
        {
            key: '1APass',
            title: "There is no text content that changes automaticallyon the Web page.",
        },
        {
            key: 'Pass',
            title: "There is a mechanism present that allows user to pause, stop, hide or control text content changing frequency.",
        },
        {
            key: 'Fail',
            title: "There is no mechanism present that allows user to pause, stop, hide or control text content changing frequency.",
        }
    ],


    
});
// CONCATENATED MODULE: ./rules/assessments/index.js



/* harmony default export */ var assessments = ([Keyboard_focusable, Text_content_automatically_changes]);

// CONCATENATED MODULE: ./DecisionTree.js
let fail = 0;
let pass = 0;
let innaplicable = 0;

class DecisionTree {
    static fail() {
        return fail;
    }
    
    static pass() {
        return pass;
    }

    static innaplicable() {
        return innaplicable;
    }

    static addToFail() {
        fail++;
    }

    static removeFail() {
        fail--;
    }

    static addToPass() {
        pass++;
    }

    static addToInnaplicable() {
        innaplicable++;
    }

    static removeInnaplicable() {
        innaplicable--;
    }

    static removePass() {
        pass--;
    }

    static count() {
        return fail + pass + innaplicable;
    }

    constructor(data) {
        this.data = data.flow;
        this._current = this.data[0];
        this.allValues = [this.data[0]];
    }

    next(result) {
        let resultValue;

        if (this._current.status) {
            return this._current;
        }

        if (result === true) {
            resultValue = "answerYes";
        } else {
            resultValue = "answerNo";
        }

        const resultIndex = this.data.findIndex(value => {
            return value.key === this._current[resultValue];
        });

        this.allValues.push(this.data[resultIndex]);
        this._current = this.data[resultIndex];

        if (!this._current.answerYes && !this._current.answerNo) {
            const checkPass = this._current.key.includes("Pass");
            const checkFail = this._current.key.includes("Fail");
            if (checkPass) {
                DecisionTree.addToPass();
                this._current.status = "Pass";
            } else if (checkFail) {
                DecisionTree.addToFail();
                this._current.status = "Fail";
            } else {
                DecisionTree.addToInnaplicable();
                this._current.status = "Innaplicable";
            }
        }

        return this._current;
    }

    current() {
        return this._current;
    }

    revert() {
        if (this._current.status && this._current.status === "Pass") {
            DecisionTree.removePass();
        } else if (this._current.status && this._current.status === "Fail") {
            DecisionTree.removeFail();
        }

        this.allValues = [this.allValues[0]];
        this._current = this.allValues[0];
        return this._current;
    }

    prev() {
        if(this.allValues.length === 1) {
            return this._current;
        } 
        const removedValue = this.allValues.pop();

        if(removedValue === "Pass") {
            DecisionTree.removePass();
        }

        if(removedValue === "Fail") {
            DecisionTree.removeFail();
        }

        if(removedValue === "Innaplicable") {
            DecisionTree.removeInnaplicable();
        }

        this._current = this.allValues[this.allValues.length - 1];

        return this._current;
    }

    getStatus() {
        return this._current.status;
    }

    firstElement() {
        return this.allValues.length === 1;
    }
}
// CONCATENATED MODULE: ./ManualSteps.js
let ManualSteps_fail = 0;
let ManualSteps_pass = 0;

class ManualSteps {
    static fail() {
        return ManualSteps_fail;
    }
    static pass() {
        return ManualSteps_pass;
    }
    static addToFail() {
        ManualSteps_fail++;
    }

    static removeFail() {
        ManualSteps_fail--;
    }

    static addToPass() {
        ManualSteps_pass++;
    }

    static removePass() {
        ManualSteps_pass--;
    }

    static count() {
        return ManualSteps_fail + ManualSteps_pass;
    }

    constructor(data) {
        this.data = data;
        this._current = this.data[0];
        this.allValues = [this.data[0]];
    }

    next(result) {
        let resultValue;

        if (this._current.status) {
            return this._current;
        }

        if (result === true) {
            resultValue = "answerYes";
        } else {
            resultValue = "answerNo";
        }

        const resultIndex = this.data.findIndex(value => {
            return value.key === this._current[resultValue];
        });

        this.allValues.push(this.data[resultIndex]);
        this._current = this.data[resultIndex];

        if (!this._current.answerYes && !this._current.answerNo) {
            const checkPass = this._current.key.includes("Pass");
            const checkFail = this._current.key.includes("Fail");
            if (checkPass) {
                ManualSteps.addToPass();
                this._current.status = "Pass";
            } else {
                ManualSteps.addToFail();
                this._current.status = "Fail";
            }
        }

        return this._current;
    }

    current() {
        return this._current;
    }

    getQuestion() {
        return this._current.question;
    }

    revert() {
        if (this._current.status && this._current.status === "Pass") {
            ManualSteps.removePass();
        } else if (this._current.status && this._current.status === "Fail") {
            ManualSteps.removeFail();
        }

        this.allValues = [this.allValues[0]];
        this._current = this.allValues[0];
        return this._current;
    }

    prev() {
        if(this.allValues.length === 1) {
            return this._current;
        } 
        const removedValue = this.allValues.pop();

        if(removedValue === "Pass") {
            ManualSteps.removePass();
        }

        if(removedValue === "Fail") {
            ManualSteps.removeFail();
        }

        this._current = this.allValues[this.allValues.length - 1];

        return this._current;
    }

    getStatus() {
        return this._current.status;
    }

    firstElement() {
        return this.allValues.length === 1;
    }
}
// EXTERNAL MODULE: ./manifest.json
var manifest = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@qualweb/earl-reporter/dist/index.js
var dist = __webpack_require__(2);

// CONCATENATED MODULE: ./earl.js



let origin;
let website;
let manualAssertedBy;

async function resultToEarl(earlResult, accessbotResult, web, firstname, lastname) {

    origin = accessbotResult;
    website = web;

    let test = {
        system: {
            name: manifest["b" /* name */],
            description: manifest["a" /* description */],
            version: manifest["c" /* version */],
            homepage: "https://github.com/qualweb/AccessBot",
            date: new Date(),
            url: {
                inputUrl: website,
                completeUrl: website
            },
        },
        modules: {
            "act-rules": earlResult
        },
    };

    const generatedEarl = await Object(dist["generateEARLReport"])({[test.system.url.completeUrl]: test});

    manualAssertedBy = firstname;

    const assign = Object.assign({}, generatedEarl[website]["@graph"][0].assertor);
    const newAssertor = {
        "@id" : firstname,
        name: firstname + " " + lastname,
        "@type": "Person"
    }
    
    generatedEarl[website]["@graph"][0].assertor = [assign, newAssertor]

    const newAssertions = generateAssertions();
    const filteredAutomaticAsertions = adjustAutotoManual(generatedEarl, assign["@id"]);

    generatedEarl[website]["@graph"][0].assertions = [...filteredAutomaticAsertions, ...newAssertions];

    return generatedEarl;
}

function adjustAutotoManual(generatedEarl, assertor) {
    const onlyAutomatic = generatedEarl[website]["@graph"][0].assertions.filter(assertion => assertion.mode === "earl:automatic");
    
    const filteredAssertions = []

    for (const assertion of onlyAutomatic) {
        let categoryIndex = -1;
        let ruleIndex = -1;
        origin.categories.some((category, index) => {
            return category.rules.some((rule, rIndex) => {
                if (rule.url === assertion.test["@id"]) {
                    categoryIndex = index;
                    ruleIndex = rIndex;
                    return true;
                }
              
                return false;
            })
        });

        if(ruleIndex === -1) {
            continue;
        }

        const assertionsToKeep = assertion.result.source.filter(question => {
            return !origin.categories[categoryIndex].rules[ruleIndex].questions.some(originQuestion => {
                return originQuestion.elements[0] && originQuestion.elements[0].pointer === question.result.pointer && originQuestion.type === "semi" ||
                originQuestion.manualAnswer && originQuestion.manualAnswer !== originQuestion.verdict
            })
        }).map((questionResult, index, originalArray) => {
            const questionIndex = origin.categories[categoryIndex].rules[ruleIndex].questions.findIndex(question => {
                return originalArray.some(earlQuestion => {
                    return question.elements[0] && question.elements[0].pointer === earlQuestion.result.pointer;
                })
            });
            return {
                ...questionResult,
                result: {
                    ...questionResult.result,
                    modified: false,
                    observations: questionIndex > -1 ? origin.categories[categoryIndex].rules[ruleIndex].questions[questionIndex].note : "",
                    description: questionIndex > -1 ? origin.categories[categoryIndex].rules[ruleIndex].questions[questionIndex].description : "",
                },
            }
        });

        if (assertionsToKeep.length > 0) {
            const duplicateAssertion = {
                ...assertion,
                test: {
                    ...assertion.test,
                    category: origin.categories[categoryIndex].name,
                    idRule: origin.categories[categoryIndex].rules[ruleIndex].id
                },
            };
            duplicateAssertion.result.source = assertionsToKeep;
            duplicateAssertion["@assertedBy"] = assertor;
            filteredAssertions.push(duplicateAssertion);
        }
    };

    return filteredAssertions;
}

function generateAssertions() {
    const assertions = [];

    const semiRules = filterRulesByType("semi");
    const manualRules = filterRulesByType("manual");

    return assertions.concat(addSemiRules(semiRules), addManualRules(manualRules));
}

function addRules(rules, mode) {
    let tests;
    let earlMode;
    let tree;

    if (!mode) {
        return;
    }

    switch(mode) {
        case "semi":
            tests = "questions"
            earlMode = "earl:semiAuto"
            tree = "decisionTree"
        break;
        case "manual":
            tests = "manualTest"
            earlMode = "earl:manual"
            tree = "manualTest"
        break;
        default:
        break;
    }

    const assertions = [];

    for (const rule of rules) {
        console.log("rule");
        console.log(rule);
        const autoAssertions = {
            "@type" : "Assertion",
            "@assertedBy": manualAssertedBy,
            mode: earlMode,
            result: {    
                date: new Date(),
                description: "",       
                source: [],
                "@type": "TestResult",
            },
            test: {
                "@id": rule.url,
                "@type": "TestCase",
                description: mode === "manual" && rule[tests] && rule[tests].test ? rule[tests].description : rule.description,
                title: rule.name,
                idRule: mode === "manual" ? rule.rule : rule.id,
                category: rule.category
            }
        }

        let getStatus;

        let questions = [];

        if(mode !== "manual") {
            for (const question of rule[tests]) {

                const status = question[tree].getStatus();

                if (!question.complete) {
                    continue;
                }

                switch (status) {
                    case "Pass":
                        getStatus = "passed"
                        break;
                    case "Fail":
                        getStatus = "failed"
                        break;
                    default:
                        getStatus = ""
                }

                if (!getStatus) {
                    continue;
                }

                let pointer = "";
                if (question.elements) {
                    question.elements.forEach(element => {
                        if (element.pointer) {
                            pointer = `${pointer}, ${element.pointer}`
                        }
                    });
                }

                questions.push({
                    result:{
                        outcome: getStatus === "passed" ? "earl:passed" : "earl:failed", 
                        pointer: pointer,
                        description: question[tree].current().title,
                        modified: false,
                        observations: question.note
                    }
                })
            }
        } else {
            if(rule[tests] && rule[tests].test) {
                const status = rule[tests].test.getStatus();

                autoAssertions.result = {
                    date: new Date(),
                    description: "",       
                    source: [],
                    "@type": "TestResult",
                }

                if (!rule.manualTest.complete) {
                    continue;
                }

                switch (status) {
                    case "Pass":
                        getStatus = "passed"
                        break;
                    case "Fail":
                        getStatus = "failed"
                        break;
                    default:
                        getStatus = ""
                }

                if (!getStatus) {
                    continue;
                }

                questions.push({
                    result:{
                        outcome: getStatus === "passed" ? "earl:passed" : "earl:failed", 
                        pointer: "",
                        description: rule[tests].test.current().title,
                        modified: false,
                        observations: rule[tests].note
                    }
                });
            } else {
                for (const question of rule.questions) {
    
                    if (!question.complete || 
                        question.type !== "auto" ||
                        question.manualAnswer === "" ||
                        question.manualAnswer !== "" && question.manualAnswer === question.verdict) {
                        continue;
                    }

                    let pointer = "";
                    if (question.elements) {
                        question.elements.forEach(element => {
                            if (element.pointer) {
                                pointer = `${pointer}, ${element.pointer}`;
                            }
                        });
                    }

                    let getStatus; 

                    switch(question.manualAnswer) {
                        case "passed": 
                            getStatus = "earl:passed";
                            break;
                        case "failed": 
                            getStatus = "earl:failed";
                            break;
                        case "innaplicable": 
                            getStatus = "earl:inapplicable";
                            break;
                        default:
                            getStatus = "earl:inapplicable";
                            break;
                    }
    
                    questions.push({
                        result:{
                            outcome: getStatus,
                            pointer: pointer,
                            description: question.description,
                            modified: true,
                            observations: question.note
                        }
                    })
                }
            } 
        }

        if(!questions.length) {
            continue;
        }

        const failedIndex = questions.findIndex(question => question.result.outcome === "earl:failed");
        autoAssertions.result.outcome = failedIndex === -1 ? "earl:passed" : "earl:failed";
        autoAssertions.result.description = questions[failedIndex > -1 ? failedIndex : 0].result.description; 

        questions.forEach(question => {
            // const {description, ...filterQuestion} = question.result;
            autoAssertions.result.source.push({result: question.result});
        });

        assertions.push(autoAssertions);
    };

    return assertions;
}

function addManualRules(manualRules) {
    return addRules(manualRules, "manual");
}

function addSemiRules(semiRules) {
    return addRules(semiRules, "semi"); 
}

function filterRulesByType(type) {
    let filterResults = [];

    origin.categories.forEach(category => {
        const filterRule = category.rules.forEach(rule => {
            if(rule.questions && type !== "manual") {
                const filterQuestions = rule.questions.filter(question => {
                    return question.type === "semi"
                })

                if (filterQuestions.length > 0) {
                    filterResults.push({
                        ...rule,
                        category: category.name,
                        questions: filterQuestions
                    });
                }

            } else if (rule.manualTest && type === "manual") {
                filterResults.push({
                    ...rule,
                    category: category.name,
                    manualTest: {
                        ...rule.manualTest,
                        type: "manual"
                    }
                });
            } else if (rule.questions && type === "manual") {
                const filterQuestions = rule.questions.filter(question => {
                    return question.type === "auto" && question.manualAnswer && question.manualAnswer !== question.verdict
                })

                if (filterQuestions.length > 0) {
                    filterResults.push({
                        ...rule,
                        category: category.name,
                        questions: filterQuestions
                    });
                }   
            }
        })
    })

    return filterResults;
}
// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__(1);
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// CONCATENATED MODULE: ./result.js

 






let resultData = {};
let highlightedItems = [];

let filters = {
    pass : true,
    fail : true,
    cannotTell : true,
    inapplicable : true,
    uncompletedTests : true
}

let filtersLeft = {
    pass : true,
    fail : true,
    cannotTell : true,
    inapplicable : true,
    uncompletedTests : true
}

let storedQuestions = [];

let jsonResult = {};

chrome.runtime.sendMessage({message:"resultLoaded"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "resultsToResultPopup") {
            resultData = generateManualTests(generateCategoriesData(request.values, request.options), request.options.manual);
            console.log(resultData);
            updateResults();
            const exportToEarlButton = document.querySelectorAll('#downloadEARL')[0];
            const exportToCSVButton = document.querySelectorAll('#downloadCSV')[0];
            const removeHighlights = document.querySelectorAll('.HighlightButton')[0];
            const popupClass = document.querySelectorAll('.popup-wrapper')[0];
            const popupClassButton = document.querySelectorAll('#popupContentId button')[0];
            const formAssertor = document.forms[0];
            let clickedDownload = "";

            const cloneresultData = lodash_clonedeep_default()(resultData);

            exportToEarlButton.onclick = async function() {
                clickedDownload = "earl";
                popupClass.classList.toggle('show');
            }

            exportToCSVButton.onclick = async function() {
                clickedDownload = "csv";
                popupClass.classList.toggle('show');
            }
            popupClassButton.onclick = async function() {
                const formData = new FormData(formAssertor);
                const firstname = formData.get("fname");
                const lastname = formData.get("lname");
                jsonResult = await resultToEarl(request.result, resultData, request.website, firstname, lastname);
                console.log(jsonResult)
                
                if (clickedDownload === "csv") {
                    downloadCSV(request.website);
                } else if (clickedDownload === "earl") {
                    downloadEARL();
                }
                
                popupClass.classList.toggle('show');
            }


            removeHighlights.onclick = async function() {
                highlightedItems.forEach(pointer => {
                    chrome.runtime.sendMessage({message:"outResultElement", element: pointer});
                });
                highlightedItems = [];
                resultData.categories.forEach(category => {
                    
                    category.rules.forEach(rule => {
                        if(rule.questions) {
                            rule.questions.forEach(question => {
                                if(question.selected === true) {
                                    question.selected = false;
                                }
                            });
                        }
                        if(rule.manualTest) {
                            rule.manualTest.selected = false
                        }
                    });
                });
                updateResults();
            }
        }
    }
);


function downloadEARL() {
    var  dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonResult, null, 2));
    const newLocal = 'downloadEARL';
    const  dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "accessBot_earl.json");
    dlAnchorElem.click();
}

function downloadCSV(website) {
   
    console.log(jsonResult);

    let csv = [];

    //falata category, rule id, reason (by result), observations, modified
    const keys = ["ASSERT BY", "CATEGORY", "TYPE OF TEST", "RULE ID", "RULE NAME", "TEST RESULT", "REASON", "POINTER", "OBSERVATIONS", "MODIFIED" ];
    csv.push(keys);

    const result = jsonResult[website]["@graph"][0]["assertions"];

    for (let i = 0; i < result.length; i++){
        const mode = result[i].mode;
        const assertBy = result[i]["@assertedBy"];
        const ruleName = result[i]["test"]["title"];
        const ruleCategory = result[i]["test"]["category"];
        const ruleId = result[i]["test"]["idRule"];
        const sources = result[i]["result"]["source"];
        for (let source = 0; source < sources.length; source++) {
            let csvLine = new Array(keys.length);
            csvLine[0] = `\"${assertBy}\"`;
            csvLine[1] = `\"${ruleCategory}\"`;
            csvLine[2] = `\"${mode}\"`;
            csvLine[3] = `\"${ruleId}\"`;
            csvLine[4] = `\"${ruleName}\"`;
            csvLine[5] = `\"${sources[source]["result"]["outcome"]}\"`;
            csvLine[6] = `\"${sources[source]["result"]["description"]}\"`;
            csvLine[7] = `\"${sources[source]["result"]["pointer"]}\"`;
            csvLine[8] = `\"${sources[source]["result"]["observations"]}\"`;
            csvLine[9] = `\"${sources[source]["result"]["modified"]}\"`;
            csv.push(csvLine);
        }
    }

    csv.forEach((line, index) => {
        csv[index] = line.join(',');
    })

    console.log(csv);

    const csv2 = csv.join('\r\n');

    console.log(csv2)

    var  dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(csv2);
    const newLocal = 'downloadCSV';
    var  dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "accessBot_csv.csv");
    dlAnchorElem.click();
}

function isRuleValid(ruleToCheck, result) {
    return ruleToCheck.tree.some(function(step) {
        const prerequesiteArray = step.prerequisite.replace(/\s/g, '').split(',');
        return prerequesiteArray.some(prerequesite => {
            return result.resultCode === prerequesite;
        })
    });
}

function generateCategoriesData(result, options) {
    const semiManualTests = {
        total: 0,
        count: 0,
        pass: 0,
        fail: 0,
        inapplicable: 0,
        warning: 0,
        missing: 0,
        legend: true,
        filterLeft: false,
        categories: []
    };

    for (let i = 0; i < result.length; i++) {
        const ruleValue = result[i];
        const ruleCode = ruleValue.code;
        const ruleName = ruleValue.name;
        const ruleDescription = ruleValue.description;
        const url = ruleValue.url;
        const id = ruleValue.id;

        const rulesArray = Object.entries(categories);

        const indexValue = rulesArray.findIndex(rule => {
            return rule[1].some(ruleCategoryValue => ruleCategoryValue === ruleCode.split("-")[2]); 
        });

        if(indexValue > -1) {
            const currentCategory = rulesArray[indexValue][0];
            const getCategoryIndex = semiManualTests.categories.findIndex(function(category) {
                return category.name === currentCategory;
            });

            const categoryNextIndex = semiManualTests.categories.length;

            const manualRuleIndex = rules.findIndex(manualRule => {
                return manualRule.code === ruleCode;
            });

            let manualRule;

            if (manualRuleIndex > -1) {
                manualRule = rules[manualRuleIndex];
            }

            let total = 0;
            let questions = [];

            ruleValue.results.forEach((result) => {
                if (manualRule && isRuleValid(manualRule, result) && options.semimanual) {
                    let ruleToDecisionTree;
                    manualRule.tree.forEach(function(manual) {
                        manual.prerequisite.split(',').forEach(function(prerequisite) {
                            const prerequisiteNoSpace = prerequisite.replace(/\s/g, '');
                            if (prerequisiteNoSpace === result.resultCode) {
                                ruleToDecisionTree = manual;
                            }
                        })
                    });

                    questions.push({
                        ...result,
                        decisionTree: new DecisionTree(ruleToDecisionTree),
                        complete: false,
                        selected: false,
                        manualAnswer: "",
                        note: '',
                        type: 'semi',
                        index: total
                    });
                    total++;
                } else if(options.automatic) {
                    questions.push({
                        ...result,
                        selected: false,
                        complete: true,
                        manualAnswer: "",
                        note: '',
                        type: 'auto',
                        index: total
                    });
                    total++;
                }
            });

            semiManualTests.total += total;

            if (getCategoryIndex === -1) {
                semiManualTests.categories.push({
                    name: currentCategory,
                    fixedName: currentCategory.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                    total: total,
                    count: 0,
                    pass: 0,
                    fail: 0,
                    inapplicable: 0,
                    warning: 0,
                    missing: 0,
                    selected: false,
                    index: categoryNextIndex,
                    rules: [
                        {
                            rule: ruleCode,
                            name: ruleName,
                            description: ruleDescription,
                            id,
                            url,
                            total: total,
                            count: 0,
                            pass: 0,
                            fail: 0,
                            inapplicable: 0,
                            warning: 0,
                            missing: 0,
                            questions: questions,
                            selected: false,
                            plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : [],
                            index: 0
                        }
                    ],
                });
            } else {
                const ruleNextIndex = semiManualTests.categories[getCategoryIndex].rules.length;
                semiManualTests.categories[getCategoryIndex].rules.push(
                    {
                        rule: ruleCode,
                        name: ruleName,
                        description: ruleDescription,
                        id,
                        url,
                        total: total,
                        count: 0,
                        pass: 0,
                        fail: 0,
                        inapplicable: 0,
                        warning: 0,
                        missing: 0,
                        questions: questions,
                        selected: false,
                        plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : [],
                        index: ruleNextIndex
                    }
                );
                semiManualTests.categories[getCategoryIndex].total += total;
            }
        }
    }
    return semiManualTests;
}

function generateManualTests(manualTests, optionManual) {
    if (!optionManual) {
        return manualTests;
    }

    let total = 0;

    assessments.forEach(function(assessment) {
        const getCategoryIndex = manualTests.categories.findIndex(function(category) {
            return category.name === assessment.category;
        });

        const categoryNextIndex = manualTests.categories.length;

        if (getCategoryIndex === -1) {
            manualTests.categories.push({
                name: assessment.category,
                fixedName: assessment.category.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                total: 1,
                count: 0,
                selected: false,
                index: categoryNextIndex,
                rules: [
                    {
                        rule: assessment.code,
                        name: assessment.name,
                        description: assessment.description,
                        code: assessment.code,
                        url: assessment.url,
                        id: assessment.id,
                        total: 1,
                        count: 0,
                        pass: 0,
                        fail: 0,
                        inapplicable: 0,
                        warning: 0,
                        missing: 0,
                        selected: false,
                        index: 0,
                        manualTest: {
                            test: new ManualSteps(assessment.tree),
                            description: assessment.descriptionTest,
                            importance: assessment.whyImportant,
                            complete: false,
                            selected: false,
                            note: '',
                        } 
                    }
                ],
            });
            total++;
        } else {
            const rulesNextIndex = manualTests.categories[getCategoryIndex].rules.length;
            manualTests.categories[getCategoryIndex].rules.push(
                {
                    rule: assessment.code,
                    name: assessment.name,
                    description: assessment.description,
                    code: assessment.code,
                    url: assessment.url,
                    id: assessment.id,
                    count: 0,
                    pass: 0,
                    fail: 0,
                    inapplicable: 0,
                    warning: 0,
                    missing: 0,
                    total: 1,
                    selected: false,
                    index: rulesNextIndex,
                    manualTest: {
                        test: new ManualSteps(assessment.tree),
                        description: assessment.descriptionTest,
                        importance: assessment.whyImportant,
                        complete: false,
                        selected: false,
                        note: '',
                    } 
                }
            );
            manualTests.categories[getCategoryIndex].total++;
            total++;
        }
    });

    manualTests.categories.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    manualTests.total += total;

    manualTests.categories.forEach((category, index) => {
        category.index = index;
    });

    return manualTests;
}

function filterResultDataLeft() {
    let filterCategories = [];
    resultData.categories.forEach(function(category) {
        let filterRules = [];
        let totalCategory = 0;
        let countCategory = 0;
        category.rules.forEach(function(rule) {
            let filterQuestions = [];
            let filterManual = undefined;
            if(rule.questions) {
                filterQuestions = rule.questions.filter(question => {
                    if(question.complete === false) {
                        return filtersLeft.uncompletedTests === true
                    } else if (question.manualAnswer) {
                        return  question.manualAnswer === "passed" && filtersLeft.pass === true ||
                        question.manualAnswer === "failed" && filtersLeft.fail === true ||
                        question.manualAnswer === "inapplicable" && filtersLeft.inapplicable === true
                    } else if (question.decisionTree) {
                        return question.decisionTree.getStatus() === "Pass" && filtersLeft.pass === true ||
                        question.decisionTree.getStatus() === "Fail" && filtersLeft.fail === true
                    } else {
                        return question.verdict === "passed" && filtersLeft.pass === true ||
                        question.verdict === "failed" && filtersLeft.fail === true ||
                        question.verdict === "inapplicable" && filtersLeft.inapplicable === true ||
                        question.verdict === "warning" && filtersLeft.cannotTell === true ||
                        question.verdict === "" && filtersLeft.cannotTell === true
                    }
                })
            } else if(rule.manualTest) {
                if(rule.manualTest.complete === false && filtersLeft.uncompletedTests === true) {
                    filterManual = rule.manualTest;
                } else if (rule.manualTest.test.getStatus() === "Pass" && filtersLeft.pass === true ||
                rule.manualTest.test.getStatus() === "Fail" && filtersLeft.fail === true) {
                    filterManual = rule.manualTest;
                }
            }

            if (filterQuestions.length > 0) {
                let count = 0;

                filterQuestions.forEach(question => {
                    if(question.complete)
                        count++
                });

                totalCategory += filterQuestions.length;
                countCategory += count;

                filterRules.push({
                    ...rule,
                    total: filterQuestions.length,
                    count,
                    questions: filterQuestions,
                })
            }else if (rule.questions && rule.questions.length === 0) {
                filterRules.push({
                    ...rule
                })
            } else if(filterManual) {
                const count = filterManual.complete ? 1 : 0;
                totalCategory += 1;
                countCategory += count;

                filterRules.push({
                    ...rule,
                    count,
                    manualTest: filterManual,
                })
            }
        });

        if (filterRules.length > 0) {
            filterCategories.push({
                ...category,
                rules: filterRules,
                total: totalCategory,
                count: countCategory
            });
        }
    });

    return {
        ...resultData,
        categories: filterCategories,
    }
}

function updateResults() {
    console.log(resultData);
    updateTotal();
    removeHTML();
    generateResultCount();
    filterResultDataLeft().categories.forEach(function (category){
        const originalCategory = resultData.categories[category.index];
        generateAccordions(originalCategory, category);
        category.rules.forEach(function(rule) {
            const originalRule = originalCategory.rules[rule.index];
            generatePanelRule(originalCategory, originalRule, rule);
            if (rule.selected) {
                if(rule.questions) {
                    generateQuestionSection(originalRule, rule);
                    showFilters(rule)
                } else if(rule.manualTest) {
                    generateManualTestSection(originalRule, rule);
                }
            }
        })
    })
    addHTMLEvents();
}

function addHTMLEvents() {
    const legendElements = document.querySelectorAll('.legend-hover');

    legendElements.forEach(element => {
        element.addEventListener('mouseenter', e => {
            element.classList.add("active")
        });
        element.addEventListener('mouseleave', e => {
            element.classList.remove("active")
        });
    })

}


function showQuestion(question) {
    if(question.complete === false) {
        return filters.uncompletedTests;
    } else if (question.decisionTree && question.decisionTree.status === "") {
        return filters.uncompletedTests;
    } else if (question.decisionTree && question.decisionTree.status !== "") {
        const findIndex = storedQuestions.findIndex(storedQuestion => {
            if(!storedQuestion.elements[0] || !question.elements[0]) {
                return false;
            }
            return storedQuestion.elements[0].pointer === question.elements[0].pointer
        });
        if(findIndex > -1) {
            return filters.uncompletedTests;
        }
        switch(question.decisionTree.getStatus()) {
            case "Pass":
                return filters.pass;
            case "Fail":
                return filters.fail; 
        }
    } else {
        switch(question.verdict) {
            case "passed":
                return filters.pass;
            case "failed":
                return filters.fail;
            case "inapplicable":
                return filters.inapplicable;
            case "warning":
                return filters.cannotTell;
            case "":
                return filters.cannotTell;
        }
    }
}

function showFilters(rule) {
    const resultSection = document.querySelector('.ResultList');

    let checkboxesFilters = "";

    if (filtersLeft.pass) {
        checkboxesFilters += `<div class="filter-rule">
            <div class="filter-checkbox">
                <input type="checkbox" id="passFilter" name="passFilter" value="passFilter" checked>
                <label class="checkbox" for="passFilter">Pass:&nbsp</label>
            </div>
            <div class="result-counter result-counter-pass">${rule.pass}</div>
        </div>`;
    }


    if (filtersLeft.fail) {
        checkboxesFilters += `<div class="filter-rule">
            <div class="filter-checkbox">
                <input type="checkbox" id="failFilter" name="failFilter" value="failFilter" checked>
                <label class="checkbox" for="failFilter">Fail:&nbsp</label>
            </div>
            <div class="result-counter result-counter-fail">${rule.fail}</div>
        </div>`;
    }

    if (filtersLeft.cannotTell) {
        checkboxesFilters += `<div class="filter-rule">
            <div class="filter-checkbox">
                <input type="checkbox" id="cannotTellFilter" name="cannotTellFilter" value="cannotTellFilter" checked>
                <label class="checkbox" for="cannotTellFilter">Cannot tell:&nbsp</label>
            </div>
            <div class="result-counter result-counter-cannottell">${rule.warning}</div>
        </div>`;
    }

    if (filtersLeft.inapplicable) {
        checkboxesFilters += `<div class="filter-rule">
            <div class="filter-checkbox">
                <input type="checkbox" id="inapplicableFilter" name="inapplicableFilter"  value="inapplicableFilter" checked>
                <label class="checkbox" for="inapplicableFilter">Inapplicable:&nbsp</label>
            </div>
            <div class="result-counter result-counter-inapplicable">${rule.inapplicable}</div>
        </div>`;
    }

    if (filtersLeft.uncompletedTests) {
        checkboxesFilters += `<div class="filter-rule">
            <div class="filter-checkbox">
                <input type="checkbox" id="uncompletedTestsFilter" name="uncompletedTestsFilter" value="uncompletedTestsFilter" checked>
                <label class="checkbox" for="uncompletedTestsFilter">Uncompleted tests:&nbsp</label>
            </div>
            <div class="result-counter result-counter-uncompleted">${rule.missing}</div>
        </div>`;
    }

    resultSection.insertAdjacentHTML('beforeBegin', `<div class="resultFilters">${checkboxesFilters}</div>`);

    const passFilter = document.querySelector('#passFilter');
    const failFilter = document.querySelector('#failFilter');
    const cannotTellFilter = document.querySelector('#cannotTellFilter');
    const inapplicableFilter = document.querySelector('#inapplicableFilter');
    const uncompletedTestsFilter = document.querySelector('#uncompletedTestsFilter');


    if (passFilter) {
        passFilter.checked = filters.pass;
        passFilter.onchange = function(e) {
            filters.pass = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }

    if (failFilter) {
        failFilter.checked = filters.fail;
        failFilter.onchange = function(e) {
            filters.fail = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }

    if (cannotTellFilter) {
        cannotTellFilter.checked = filters.cannotTell;
        cannotTellFilter.onchange = function(e) {
            filters.cannotTell = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  

    if (inapplicableFilter) {
        inapplicableFilter.checked = filters.inapplicable;
        inapplicableFilter.onchange = function(e) {
            filters.inapplicable = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  

    if (uncompletedTestsFilter) {
        uncompletedTestsFilter.checked = filters.uncompletedTests;
        uncompletedTestsFilter.onchange = function(e) {
            filters.uncompletedTests = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  
}

function removeHTML() {
    const questionSection = document.querySelectorAll('.result');
    questionSection.forEach(function(result, index) {
        result.innerHTML = '';
        if(index === 0) {
            result.innerHTML = '<div id="resultcount"></div>';
        }
     });
}

function generateQuestionSection(rule, filteredRule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `
    <h2 class="RuleTitle">${rule.name}</h2>
    <div class="plusRule">
        <span class="RuleLink">
            ${rule.rule} ACT <a href="${rule.url}" target="_blank">${rule.id}</a>
        </span>
    </div>
    <p class="RuleDescription">${rule.description}</p>
    <h2>Show evaluations by result:</h2>
    <ol class="ResultList"></ol>`
    filteredRule.questions.forEach(function(question) {
        const originalQuestion = rule.questions[question.index]
        const isVisible = showQuestion(originalQuestion);
        if (isVisible) {
            if(!question.decisionTree) {
                generateResult(originalQuestion, question.index);
            } else {
                generateQuestion(originalQuestion, question.index);
            }
        }
    });

    rule.plusRule.forEach(function (plusLink) {
        const plusRuleSelection = document.querySelector('.ResultPage .result:last-child .plusRule .RuleLink');
        plusRuleSelection.insertAdjacentHTML('beforeend', `, <a href="${plusLink.plusRuleUrl}" target="_blank">${plusLink.plusRuleCode}</a>`);
    })

    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function generateManualTestSection(rule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `
    <h2 class="RuleTitle">${rule.name}</h2>
    <p class ="RuleLink">ACT <a href="${rule.url}">${rule.code}</a></p>
    <p class="RuleDescription">${rule.manualTest.description}</p>
    <p class="RuleImportance"><span class="RuleWhy">Why is this important:</span> ${rule.manualTest.importance}</p>
    <p class="stepsReproduce">Steps to reproduce:</p>
    <ol class="ResultList ManualTest"></ol>`
    generateManualTest(rule.manualTest, 0);
}

function generateManualTest(manualTest, index) {
    const manualSection = document.querySelector('.ResultList');
    const test = manualTest.test;
    const title = test.current().title;
    const status = test.getStatus();
    const question = test.getQuestion();

    if (!status) {
        manualSection.insertAdjacentHTML('beforeend', `<li>
            <div id="manualTest-${index}">
                <div class="manualTestText" id="text-0">${title}</div>
                <div class="Flex-h" id="manualTest-area-${index}">
                    <div class="manualTest-area">
                        <div class="manualTestQuestion" id="question-0">${question}</div>
                        <div id="radios-${index}">
                            <label for="yes">yes</label>
                            <input id="yes" type="radio" name="radio-${index}" value="1">
                            <label for="no">no</label>
                            <input id="no" type="radio" name="radio-${index}" value="0">
                        </div>
                    </div>
                </div>
            </div>
        </li>`);
    } else {
        manualSection.insertAdjacentHTML('beforeend', `<li>
            <div id="manualTest-${index}">
                <div class="CommunicateResult" id="manualTest-area-${index}">
                    <div>Status: <span>${status}</span></div>
                    <div>Reason: <span>${test.current().title}</span></div>
                    <textarea placeholder="add an observation here and will be automatically saved">${manualTest.note}</textarea>
                </div>
            </div>
        </li>`);
    }

    if(!test.firstElement()) {
        const manualTestArea = document.querySelector(`#manualTest-area-${index}`);
        manualTestArea.insertAdjacentHTML('beforeend', `<button id="button-revert-${index}">Revert</button>`);
    }

    const radios = document.querySelectorAll("input[type='radio'][name='radio-"+ index +"']");
    for (let f = 0; f < radios.length; f++) {
        radios[f].onchange = function (e) {
            if (e.target.value === "1") {
                test.next(true);
            } else {
                test.next(false);
            }
            if(test.getStatus()) {
                manualTest.complete = true;
            }
            updateResults();
        }
    }

    const button = document.querySelector(`#button-revert-${index}`);
    const textarea = document.querySelector(`#manualTest-area-${index} > textarea`);

    console.log("found textarea");
    console.log(textarea)

    if(button) {
        button.onclick = function() {
            test.revert(); 
            manualTest.complete = false;
            manualTest.note = '';
            updateResults();
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(manualTest)
            manualTest.note = e.target.value;
        }
    }
}

function generateResult(result, index) {
    let visible = '';

    if(result.manualAnswer !== "" && result.manualAnswer !== result.verdict) {
        visible = 'visible';
    }

    const questionSection = document.querySelector('.ResultList');
    let verdict = result.verdict;
    if(verdict === "warning") {
        verdict = "Cannot tell"
    }

    console.log(verdict);

    let counterClass = "";
    switch(verdict) {
        case "passed":
            counterClass = "result-counter-pass";
            break;
        case "failed":
            counterClass = "result-counter-fail";
            break;
        case "inapplicable":
            counterClass = "result-counter-inapplicable";
            break;
        case "Cannot tell":
            counterClass = "result-counter-cannottell";
            break;
        default:
            counterClass = "result-counter-uncompleted";
            break;
    }

    questionSection.insertAdjacentHTML('beforeend', `<li>
        <div id="question-${index}" class="result-counter-before ${counterClass}">
            <div class="htmlCodeWrapper">
            </div>
            <div class="CommunicateResult" id="question-area-${index}">
                <div>Status: <span>${verdict}</span></div>
                <div>Reason: <span>${result.description}</span></div>
                <textarea placeholder="add an observation here and will be automatically saved">${result.note}</textarea>
            </div>
            <i class="material-icons selectwarning ${visible}">verified</i>
            <label class="checkmark" for="select-${index}">Manually change this result:</label>
            <select id="select-${index}">
                <option value="" selected>--</option>
                <option value="passed">Pass</option>
                <option value="failed">Fail</option>
                <option value="inapplicable">Inapplicable</option>
            </select>
        </div>
    </li>`);
    
    result.elements.forEach(function(htmlElement) {
        document.querySelector(`.ResultList #question-${index} .htmlCodeWrapper`).insertAdjacentHTML('beforeend', `<pre><code class="html">
        ${htmlElement.htmlCode.replace(/</g,"&lt;")}</code></pre>`);
    });

    if (result.elements[0]) {
        document.querySelector(`#question-${index}`).insertAdjacentHTML('afterbegin', `<label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>`);
    }

    function checkPageHighlight(checkmark) {
        checkmark.checked = result.selected;
        if (checkmark.checked) {
            result.elements.forEach(function(htmlElement) {
                highlightedItems.push(htmlElement.pointer);
                chrome.runtime.sendMessage({message:"overResultElement", element: htmlElement.pointer});
            });
        } else {
            result.elements.forEach(function(htmlElement) {
                const index = highlightedItems.findIndex(pointer => pointer === htmlElement.pointer);
                if (index > -1) {
                    highlightedItems.splice(index, 1);
                }
                chrome.runtime.sendMessage({message:"outResultElement", element: htmlElement.pointer});
            });
        }
    }

    const checkmark = document.querySelector(`#checkmark-question-${index}`);
    const select = document.querySelector(`#select-${index}`);
    const textarea = document.querySelector(`#question-area-${index} > textarea`);

    if (result.manualAnswer !== "warning" && result.manualAnswer !== "") {
        document.querySelector(`#select-${index} [value=${result.manualAnswer}]`).selected = true;
    }

    if (checkmark) {
        checkPageHighlight(checkmark);
        checkmark.onchange = function(e) {
            result.selected = e.target.checked;
            checkPageHighlight(checkmark);
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(result)
            result.note = e.target.value;
        }
    }

    select.onchange = function(e) {
        result.manualAnswer = e.target.value;
        updateResults();
    }

}

function generateQuestion(question, index) {
    const questionSection = document.querySelector('.ResultList');
    const decisionTree = question.decisionTree;
    let title = "";

    if (question.elements[0] && question.elements[0].accessibleName) {
        title = decisionTree.current().title.replace("#{a}", `"${question.elements[0].accessibleName}"`);
    } else {
        title = decisionTree.current().title.replace("#{a}", '');
    }
    
    const status = decisionTree.getStatus();

    console.log(status);

    let counterClass = "";
    switch(status) {
        case "Pass":
            counterClass = "result-counter-pass";
            break;
        case "Fail":
            counterClass = "result-counter-fail";
            break;
        default:
            counterClass = "result-counter-uncompleted";
            break;
    }

    if (!status) {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}" class="result-counter-before ${counterClass}">
                <div class="htmlCodeWrapper"> 
                </div>
                <div class="QuestionText" id="text-0">${title}</div>
                <div class="Flex-h" id="question-area-${index}">
                    <div id="radios-${index}">
                        <label for="yes">yes</label>
                        <input id="yes" type="radio" name="radio-${index}" value="1">
                        <label for="no">no</label>
                        <input id="no" type="radio" name="radio-${index}" value="0">
                    </div>
                </div>
            </div>
        </li>`);
    } else {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}" class="result-counter-before ${counterClass}">
                <div class="htmlCodeWrapper"> 
                </div>
                <div class="CommunicateResult" id="question-area-${index}">
                    <div>Status: <span>${status}</span></div>
                    <div>Reason: <span>${decisionTree.current().title}</span></div>
                    <textarea placeholder="add an observation here and will be automatically saved">${question.note}</textarea>
                </div>
            </div>
        </li>`);
    }

    question.elements.forEach(function(htmlElement) {
        document.querySelector(`.ResultList #question-${index} .htmlCodeWrapper`).insertAdjacentHTML('beforeend', `<pre><code class="html">
        ${htmlElement.htmlCode.replace(/</g,"&lt;")}</code></pre>`);
    });
    
    if(!decisionTree.firstElement()) {
        const question = document.querySelector(`#question-area-${index}`);
        question.insertAdjacentHTML('beforeend', `<button id="button-revert-${index}">Revert</button>`);
    }

    const radios = document.querySelectorAll("input[type='radio'][name='radio-"+ index +"']");
    for (let f = 0; f < radios.length; f++) {
        radios[f].onchange = function (e) {
            if (e.target.value === "1") {
                decisionTree.next(true);
            } else {
                decisionTree.next(false);
            }
            if(decisionTree.getStatus()) {
                storedQuestions.push(question);
                question.complete = true;
            }
            updateResults();
        }
    }

    if (question.elements[0]) {
        document.querySelector(`#question-${index}`).insertAdjacentHTML('afterbegin', `<label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>`);
    }

    function checkPageHighlight(checkmark) {
        checkmark.checked = question.selected;
        if (checkmark.checked) {
            question.elements.forEach(function(htmlElement) {
                highlightedItems.push(htmlElement.pointer);
                chrome.runtime.sendMessage({message:"overResultElement", element: htmlElement.pointer});
            });
        } else {
            question.elements.forEach(function(htmlElement) {
                const index = highlightedItems.findIndex(pointer => pointer === htmlElement.pointer);
                if (index > -1) {
                    highlightedItems.splice(index, 1);
                }
                chrome.runtime.sendMessage({message:"outResultElement", element: htmlElement.pointer});
            });
        }
    }

    const button = document.querySelector(`#button-revert-${index}`);
    const textarea = document.querySelector(`#question-area-${index} > textarea`);
    const checkmark = document.querySelector(`#checkmark-question-${index}`);

    console.log("found textarea");
    console.log(textarea)

    if(button) {
        button.onclick = function() {
            decisionTree.revert(); 
            question.complete = false;
            const storedQuestionIndex = storedQuestions.findIndex(storedQuestion => {
                if(!storedQuestion.elements[0]  || !question.elements[0]) {
                    return false;
                }
                return storedQuestion.elements[0].pointer === question.elements[0].pointer;
            });
            if (storedQuestionIndex > -1) {
                storedQuestions.splice(storedQuestionIndex, 1);
            }
            question.note = '';
            updateResults();
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(question)
            question.note = e.target.value;
        }
    }

    if(checkmark) {
        checkPageHighlight(checkmark);
        checkmark.onchange = function(e) {
            question.selected = e.target.checked;
            checkPageHighlight(checkmark);
        }
    }
}

function updateTotal() {
    resultData.count = 0;
    resultData.pass = 0;
    resultData.fail = 0;
    resultData.inapplicable = 0;
    resultData.warning = 0;
    resultData.missing = 0;
    resultData.categories.forEach(function (category) {
        category.count = 0;
        category.pass = 0;
        category.fail = 0;
        category.inapplicable = 0;
        category.warning = 0;
        category.missing = 0;
        category.rules.forEach(function(rule) {
            rule.count = 0;
            rule.pass = 0;
            rule.fail = 0;
            rule.inapplicable = 0;
            rule.warning = 0;
            rule.missing = 0;
            if (rule.manualTest) {
                if(rule.manualTest.complete) {
                    resultData.count++;
                    category.count++;
                    rule.count++;
                    switch(rule.manualTest.test.getStatus()) {
                        case 'Pass':
                            resultData.pass++;
                            category.pass++;
                            rule.pass++;
                            break;
                        case 'Fail':
                            resultData.fail++;
                            category.fail++;
                            rule.fail++;
                            break;
                    }
                } else {
                    category.missing++;
                    resultData.missing++;
                    rule.missing++;
                }
            } else {
                rule.questions.forEach(function(question) {
                    if(question.complete) {
                        resultData.count++;
                        category.count++;
                        rule.count++;
                        if (!question.decisionTree) {
                            const changed = question.manualAnswer || question.verdict;
                            switch(changed) {
                                case 'passed':
                                    resultData.pass++;
                                    category.pass++;
                                    rule.pass++;
                                    break;
                                case 'failed':
                                    resultData.fail++;
                                    category.fail++;
                                    rule.fail++;
                                    break;
                                case 'inapplicable':
                                    resultData.inapplicable++;
                                    category.inapplicable++;
                                    rule.inapplicable++;
                                    break;
                                case 'warning':
                                    resultData.warning++;
                                    category.warning++;
                                    rule.warning++;
                                    break;
                            }
                        } else {
                            switch(question.decisionTree.getStatus()) {
                                case 'Pass':
                                    resultData.pass++;
                                    category.pass++;
                                    rule.pass++;
                                    break;
                                case 'Fail':
                                    resultData.fail++;
                                    category.fail++;
                                    rule.fail++;
                                    break;
                                case 'Inapplicable':
                                    resultData.inapplicable++;
                                    category.inapplicable++;
                                    rule.inapplicable++;
                                    break;
                                case 'warning':
                                    resultData.warning++;
                                    category.warning++;
                                    rule.warning++;
                                    break;
                            }
                        }
                    } else {
                        category.missing++;
                        resultData.missing++;
                        rule.missing++;
                    }
                });
            }
        });
    });
}

function legendInfo(type, classes, text) {
    let infoText = "";
    switch(type) {
        case "pass":
            infoText = "Pass";
        break;
        case "fail":
            infoText = "Fail";
        break;
        case "cannot tell":
            infoText = "Cannot tell";
        break;
        case "inapplicable":
            infoText = "Inapplicable";
        break;
        case "uncompleted":
            infoText = "Uncompleted";
        break;
        case "total":
            infoText = "Total";
        break;
        case "auto":
            infoText = "automatic";
        break;
        case "semi":
            infoText = "semi-automatic";
        break;
        case "manual":
            infoText = "manual";
        break;
        default:
        break;
    }

    return `<div class="${classes} legend-hover">
        <div class="info-hover">${infoText}</div>
        ${text}
    </div>`;
}

function generateResultCount() {
    const text = document.querySelector(".buttons-top-wrapper");
    text.innerHTML = `
    <div class="buttons-top">
        <button id="legendButton">
            ${resultData.legend ? 'Hide' : 'Show'} Legend
        </button>
        <button id="filterButton">
            ${resultData.filterLeft ? 'Hide' : 'Show'} Filters
        </button>
    </div>
    <div class="panel ${resultData.legend ? 'active' : ''} top-block">
        <div id="legend" class="resultFilters">
            <div class="filter-rule">
                Pass:&nbsp
                <label class="result-counter result-counter-pass reduce-size"></label>
            </div>
            <div class="filter-rule">
                Fail:&nbsp
                <label class="result-counter result-counter-fail reduce-size"></label>
            </div>
            <div class="filter-rule">
                Cannot Tell:&nbsp
                <label class="result-counter result-counter-cannottell reduce-size"></label>
            </div>
            <div class="filter-rule">
                Inapplicable:&nbsp
                <label class="result-counter result-counter-inapplicable reduce-size"</label>
            </div>
            <div class="filter-rule">
                Uncompleted tests:&nbsp
                <label class="result-counter result-counter-uncompleted reduce-size"</label>
            </div>
            <div class="filter-rule">
                Total evaluations:&nbsp
                <label class="result-counter result-counter-total reduce-size"</label>
            </div>
            <div class="filter-rule">
                Automatic test:&nbsp
                <i class="material-icons result-icon">miscellaneous_services</i>
            </div>
            <div class="filter-rule">
                Semi-automatic test:&nbsp
                <i class="material-icons result-icon">engineering</i>
            </div>
            <div class="filter-rule">
                Manual test:&nbsp
                <i class="material-icons result-icon">person</i>
            </div>
        </div>
    </div>
    <div class="panel ${resultData.filterLeft ? 'active' : ''} top-block">
        <div class="resultFilters">
                <div class="filter-rule">
                    <input type="checkbox" id="passLeftFilter" name="passLeftFilter" value="passLeftFilter" checked>
                    <label class="checkbox" for="passLeftFilter">Pass:&nbsp</label>
                    <span id="passCount" class="result-counter result-counter-pass">${resultData.pass}</span>
                </div>
                <div class="filter-rule">
                    <input type="checkbox" id="failLeftFilter" name="failLeftFilter" value="failLeftFilter" checked>
                    <label class="checkbox" for="failLeftFilter">Fail:&nbsp</label>
                    <span id="failCount" class="result-counter result-counter-fail">${resultData.fail}</span> 
                </div>
                <div class="filter-rule">
                    <input type="checkbox" id="cannotTellLeftFilter" name="cannotTellLeftFilter" value="cannotTellLeftFilter" checked>
                    <label class="checkbox" for="cannotTellLeftFilter">Cannot tell:&nbsp</label>
                    <span id="warningCount" class="result-counter result-counter-cannottell">${resultData.warning}</span>
                </div>
                <div class="filter-rule">
                    <input type="checkbox" id="inapplicableLeftFilter" name="inapplicableLeftFilter" value="inapplicableLeftFilter" checked>
                    <label class="checkbox" for="inapplicableLeftFilter">Inapplicable:&nbsp</label>
                    <span id="inappliacbleCount" class="result-counter result-counter-inapplicable">${resultData.inapplicable}</span> 
                </div>
                <div class="filter-rule">
                    <input type="checkbox" id="uncompletedLeftFilter" name="uncompletedLeftFilter" value="uncompletedLeftFilter" checked>
                    <label class="checkbox" for="uncompletedLeftFilter">Uncompleted tests:&nbsp</label>
                    <span id="missingCount" class="result-counter result-counter-uncompleted">${resultData.missing}</span>
                </div>
        </div>
    </div>`;

    const resultsTop = document.querySelector('.show-results-top ul');
    let filterTopCount = "";

    if(filtersLeft.pass)
        filterTopCount += `<li>${legendInfo("pass", "result-counter result-counter-pass", resultData.pass)}</li>`;
    if(filtersLeft.uncompletedTests)
        filterTopCount += `<li>${legendInfo("uncompleted", "result-counter result-counter-uncompleted", resultData.missing)}</li>`;
    if(filtersLeft.fail)
        filterTopCount += `<li>${legendInfo("fail", "result-counter result-counter-fail", resultData.fail)}</li>`;
    if(filtersLeft.cannotTell)
        filterTopCount += `<li>${legendInfo("cannot tell", "result-counter result-counter-cannottell", resultData.warning)}</li>`;
    if(filtersLeft.inapplicable)
        filterTopCount += `<li>${legendInfo("inapplicable", "result-counter result-counter-inapplicable", resultData.inapplicable)}</li>`;
       
    filterTopCount += `<li> ${legendInfo("total", "result-counter result-counter-total", resultData.total)}</li>`;
    
    resultsTop.innerHTML = filterTopCount;

    const legendButton = document.querySelector('#legendButton');
    const filterButton = document.querySelector('#filterButton');

    legendButton.onclick = function() {
        resultData.filterLeft = false;
        resultData.legend = !resultData.legend;
        updateResults();
    }

    filterButton.onclick = function() {
        resultData.legend = false;
        resultData.filterLeft = !resultData.filterLeft;
        updateResults();
    }

    const uncompletedTestsFilter = document.querySelector('#uncompletedLeftFilter');
    const inapplicableFilter = document.querySelector('#inapplicableLeftFilter');
    const failFilter = document.querySelector('#failLeftFilter');
    const passFilter = document.querySelector('#passLeftFilter');
    const cannotTellFilter = document.querySelector('#cannotTellLeftFilter');

    passFilter.checked = filtersLeft.pass;
    failFilter.checked = filtersLeft.fail;
    cannotTellFilter.checked = filtersLeft.cannotTell;
    inapplicableFilter.checked = filtersLeft.inapplicable;
    uncompletedTestsFilter.checked = filtersLeft.uncompletedTests;

    uncompletedTestsFilter.onchange = function(e) {
        filtersLeft.uncompletedTests = e.target.checked;
        updateResults();
    }
    inapplicableFilter.onchange = function(e) {
        filtersLeft.inapplicable = e.target.checked;
        updateResults();        
    }
    failFilter.onchange = function(e) {
        filtersLeft.fail = e.target.checked;
        updateResults();        
    }
    cannotTellFilter.onchange = function(e) {
        filtersLeft.cannotTell = e.target.checked;
        updateResults();        
    }
    passFilter.onchange = function(e) {
        filtersLeft.pass = e.target.checked;
        updateResults();        
    }
    
}

function generateAccordions(originalCategory, category) {
    const accordionSection = document.querySelector('.categories-result');

    let text = "";
    if (category.total === 0) {
        text = `No evaluations available.`;
    } else if (category.total === category.count) {
            text = `All evaluations completed.`;
    } else {
        text = `Completed ${category.count} out of ${category.total} evaluations.`;
    }

    let filterCategoryCount = "";

    if(filtersLeft.pass)
        filterCategoryCount += `<li>${legendInfo("pass", "result-counter result-counter-pass", category.pass)}</li>`;
    if(filtersLeft.uncompletedTests)
        filterCategoryCount += `<li>${legendInfo("fail", "result-counter result-counter-uncompleted", category.missing)}</li>`;
    if(filtersLeft.fail)
        filterCategoryCount += `<li>${legendInfo("fail", "result-counter result-counter-fail", category.fail)}</li>`;
    if(filtersLeft.cannotTell)
        filterCategoryCount += `<li>${legendInfo("cannot tell", "result-counter result-counter-cannottell", category.warning)}</li>`;
    if(filtersLeft.inapplicable)
        filterCategoryCount += `<li>${legendInfo("inapplicable", "result-counter result-counter-inapplicable", category.inapplicable)}</li>`;

    filterCategoryCount += `<li>${legendInfo("total", "result-counter result-counter-total", category.total)}</li>`;

    accordionSection.insertAdjacentHTML('beforeend', `
    <div class="accordion-group">
    <button id="category-button-${category.fixedName}" class="accordion">
        <div class="category-content">
            <span>${category.name}</span>
            <ul class="counter-list-color">
                ${filterCategoryCount}
            </ul>
        </div>
    </button>
    <div id="panel-category-${category.fixedName}" class="panel ${category.selected ? 'active' : ''}"></div>
    </div>`);

    const button = document.querySelector(`#category-button-${category.fixedName}`);

    button.onclick = function() {
        originalCategory.selected = !originalCategory.selected;
        updateResults();
    }
}

function generatePanelRule(category, originalRule, rule) {
    const accordion = document.querySelector(`#panel-category-${category.fixedName}`);

    let hasAuto = false;
    let hasSemi = false;
    let hasManual = false;

    if(rule.questions) {
        hasAuto = rule.questions.some(question => question.type === 'auto');
        hasSemi = rule.questions.some(question => question.type === 'semi');
    } else {
        hasManual = true;
    }

    let text = "";
    if (rule.total === 0) {
        text = `No evaluations available.`;
    } else if (rule.total === rule.count) {
            text = `All ${rule.total} evaluations completed.`;
    } else {
        text = `Completed ${rule.count} out of ${rule.total} evaluations.`;
    }


    const panel = `<button id="rule-button-${rule.rule}" class="Flex-h PanelButton ${rule.selected ? 'active' : ''}">
        <div class="panelRule">
            <span class="panelRuleName">${rule.name}</span>
        </div>
        <span class="panelRuleCount">${text}</span>
    </button>`

    

    accordion.insertAdjacentHTML('beforeend', panel);

    
    //antes afterbegin

    const ruleName = document.querySelector(`#rule-button-${rule.rule} .panelRuleName`);
    if (hasManual) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">person</i>`);
    }

    if (hasSemi) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">engineering</i>`);
    }

    if (hasAuto) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">miscellaneous_services</i>`);
    }


    const button = document.querySelector(`#rule-button-${rule.rule}`);
    button.onclick = function() {
        resultData.categories.forEach(function(category) {
            category.rules.forEach(function (changeRule) {
                changeRule.selected = false;
            });
        });
        originalRule.selected = true;
        document.querySelector(`.ResultSection.result`).scrollTop = 0;
        storedQuestions = [];
        updateResults();
    }
}

/***/ })
/******/ ]);