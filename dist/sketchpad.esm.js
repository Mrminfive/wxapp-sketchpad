/**
  * wxapp-sketchpad v0.1.0
  * (c) 2018 minfive
  * @license MIT
  */
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var runtime = createCommonjsModule(function (module) {

  !function (global) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      {
        module.exports = runtime;
      }

      return;
    }

    runtime = global.regeneratorRuntime = module.exports;

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    var ContinueSentinel = {};

    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    runtime.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

      return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        context[delegate.resultName] = info.value;

        context.next = delegate.nextLoc;

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        return info;
      }

      context.delegate = null;
      return ContinueSentinel;
    }

    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;

        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function stop() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },

      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }(function () {
    return this;
  }() || Function("return this")());
});

var g = function () {
  return this;
}() || Function("return this")();

var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

var oldRuntime = hadRuntime && g.regeneratorRuntime;

g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  g.regeneratorRuntime = oldRuntime;
} else {
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

var SAVED_FILES_KEY = 'savedFiles';
var KEY_TOTAL_SIZE = 'totalSize';
var KEY_PATH = 'path';
var KEY_TIME = 'time';
var KEY_SIZE = 'size';

var MAX_SPACE_IN_B = 6 * 1024 * 1024;
var savedFiles = {};

var Dowloader = function () {
    function Dowloader() {
        classCallCheck(this, Dowloader);

        wx.getStorage({
            key: SAVED_FILES_KEY,
            success: function success(res) {
                if (res.data) {
                    savedFiles = res.data;
                }
            }
        });
    }

    createClass(Dowloader, [{
        key: 'download',
        value: function download(url) {
            return new Promise(function (resolve, reject) {
                if (!(url && url.startsWith('http'))) {
                    resolve(url);
                    return;
                }
                var file = getFile(url);
                if (file) {
                    resolve(file[KEY_PATH]);
                    return;
                }
                wx.downloadFile({
                    url: url,
                    success: function success(res) {
                        if (res.statusCode !== 200) {
                            console.error('downloadFile ' + url + ' failed res.statusCode is not 200');
                            reject();
                            return;
                        }
                        var tempFilePath = res.tempFilePath;

                        wx.getFileInfo({
                            filePath: tempFilePath,
                            success: function success(tmpRes) {
                                var newFileSize = tmpRes.size;
                                doLru(newFileSize).then(function () {
                                    saveFile(url, newFileSize, tempFilePath).then(function (filePath) {
                                        resolve(filePath);
                                    });
                                }, function () {
                                    resolve(tempFilePath);
                                });
                            },
                            fail: function fail(error) {
                                console.error('getFileInfo ' + res.tempFilePath + ' failed, ' + JSON.stringify(error));
                                resolve(res.tempFilePath);
                            }
                        });
                    },
                    fail: function fail(error) {
                        console.error('downloadFile failed, ' + JSON.stringify(error) + ' ');
                        reject();
                    }
                });
            });
        }
    }]);
    return Dowloader;
}();


function saveFile(key, newFileSize, tempFilePath) {
    return new Promise(function (resolve, reject) {
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function success(fileRes) {
                var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
                savedFiles[key] = {};
                savedFiles[key][KEY_PATH] = fileRes.savedFilePath;
                savedFiles[key][KEY_TIME] = new Date().getTime();
                savedFiles[key][KEY_SIZE] = newFileSize;
                savedFiles['totalSize'] = newFileSize + totalSize;
                wx.setStorage({
                    key: SAVED_FILES_KEY,
                    data: savedFiles
                });
                resolve(fileRes.savedFilePath);
            },
            fail: function fail(error) {
                console.error('saveFile ' + key + ' failed, then we delete all files, ' + JSON.stringify(error));

                resolve(tempFilePath);

                reset();
            }
        });
    });
}

function reset() {
    wx.removeStorage({
        key: SAVED_FILES_KEY,
        success: function success() {
            wx.getSavedFileList({
                success: function success(listRes) {
                    removeFiles(listRes.fileList);
                },
                fail: function fail(getError) {
                    console.error('getSavedFileList failed, ' + JSON.stringify(getError));
                }
            });
        }
    });
}

function doLru(size) {
    return new Promise(function (resolve, reject) {
        var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;

        if (size + totalSize <= MAX_SPACE_IN_B) {
            resolve();
            return;
        }

        var pathsShouldDelete = [];

        var allFiles = JSON.parse(JSON.stringify(savedFiles));
        delete allFiles[KEY_TOTAL_SIZE];
        var sortedKeys = Object.keys(allFiles).sort(function (a, b) {
            return allFiles[a][KEY_TIME] - allFiles[b][KEY_TIME];
        });

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var sortedKey = _step.value;

                totalSize -= savedFiles[sortedKey].size;
                pathsShouldDelete.push(savedFiles[sortedKey][KEY_PATH]);
                delete savedFiles[sortedKey];
                if (totalSize + size < MAX_SPACE_IN_B) {
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        savedFiles['totalSize'] = totalSize;

        wx.setStorage({
            key: SAVED_FILES_KEY,
            data: savedFiles,
            success: function success() {
                if (pathsShouldDelete.length > 0) {
                    removeFiles(pathsShouldDelete);
                }
                resolve();
            },
            fail: function fail(error) {
                console.error('doLru setStorage failed, ' + JSON.stringify(error));
                reject();
            }
        });
    });
}

function removeFiles(pathsShouldDelete) {
    var _loop = function _loop(pathDel) {
        var delPath = pathDel;
        if ((typeof pathDel === 'undefined' ? 'undefined' : _typeof(pathDel)) === 'object') {
            delPath = pathDel.filePath;
        }
        wx.removeSavedFile({
            filePath: delPath,
            fail: function fail(error) {
                console.error('removeSavedFile ' + pathDel + ' failed, ' + JSON.stringify(error));
            }
        });
    };

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = pathsShouldDelete[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var pathDel = _step2.value;

            _loop(pathDel);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

function getFile(key) {
    if (!savedFiles[key]) {
        return;
    }
    savedFiles[key]['time'] = new Date().getTime();
    wx.setStorage({
        key: SAVED_FILES_KEY,
        data: savedFiles
    });
    return savedFiles[key];
}

var downloadFile = function () {
    var _ref = asyncToGenerator(regenerator.mark(function _callee(url) {
        var filePath;
        return regenerator.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return downloader.download(url);

                    case 2:
                        filePath = _context.sent;
                        return _context.abrupt('return', filePath);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function downloadFile(_x3) {
        return _ref.apply(this, arguments);
    };
}();

var saveImageToPhotosAlbum = function () {
    var _ref2 = asyncToGenerator(regenerator.mark(function _callee2(filePath) {
        var url;
        return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return downloadFile(filePath);

                    case 2:
                        url = _context2.sent;
                        _context2.next = 5;
                        return promisify('saveImageToPhotosAlbum')({
                            filePath: url
                        });

                    case 5:
                        return _context2.abrupt('return', _context2.sent);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function saveImageToPhotosAlbum(_x4) {
        return _ref2.apply(this, arguments);
    };
}();

var downloader = new Dowloader();

function errorInfo(info) {
    var message = '[wxapp-sketchpad] Error: ' + info;

    if (typeof console !== 'undefined') {
        console.error(message);
    }

    try {
        throw new Error(message);
    } catch (x) {}
}

function checkIsWxFliePath(url) {
    return (/^wxfile:\/\/(tmp|store)/.test(url) || /^http:\/\/(tmp|store)\//.test(url)
    );
}

function checkIsNetworkFile(url) {
    return (/^(http|https):\/\/(?!(tmp|store)\/)/.test(url)
    );
}

function promisify(method) {
    return function () {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return new Promise(function (resolve, reject) {
            var md = wx[method];

            if (md && typeof md === 'function') {
                md(_extends({}, option, {
                    success: function success() {
                        option.success && typeof option.success === 'function' && option.success();
                        resolve.apply(undefined, arguments);
                    },
                    fail: function fail() {
                        option.fail && typeof option.fail === 'function' && option.fail();
                        reject.apply(undefined, arguments);
                    }
                }));
            } else {
                errorInfo('wx method must be a function');
            }
        });
    };
}

function promisifyList() {
    var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (Array.isArray(methods)) {
        methods.forEach(function (method) {
        });
    } else {
        errorInfo('wx method list must be a array');
    }
}

var utils = /*#__PURE__*/Object.freeze({
	errorInfo: errorInfo,
	checkIsWxFliePath: checkIsWxFliePath,
	checkIsNetworkFile: checkIsNetworkFile,
	promisify: promisify,
	promisifyList: promisifyList,
	downloadFile: downloadFile,
	saveImageToPhotosAlbum: saveImageToPhotosAlbum
});

var COLOR_TRANSPRENT = 'transprent';

var Element = function () {
    function Element(config) {
        classCallCheck(this, Element);

        this.config = _extends({
            left: 0,
            top: 0,
            width: '100%',
            height: null,
            border: null,
            padding: [0, 0, 0, 0],
            text: '',
            fontSize: '20px',
            lineHeight: 1.3,
            textAlign: 'left',
            textVerticalAlign: 'top',
            color: '#000000',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontFamily: 'sans-serif',
            backgroundColor: COLOR_TRANSPRENT,
            backgroundImage: null,
            backgroundSize: null,
            zIndex: 0
        }, config);
    }

    createClass(Element, [{
        key: '_processText',
        value: function _processText(text, maxWidth) {
            var config = this.config,
                _aidctx = this._aidctx,
                _adaptation = this._adaptation;


            _aidctx.save();

            _aidctx.font = [config.fontStyle, 'normal', config.fontWeigth, _adaptation(0, parseFloat(config.fontSize))[1] + 'px', config.fontFamily].filter(function (val) {
                return val != null;
            }).join(' ');

            function calc(str) {
                var width = _aidctx.measureText(str).width;

                if (width > maxWidth) {
                    var len = str.length;
                    var idx = 0;
                    var result = [];

                    while (idx < len) {
                        var nowStr = str.substring(0, idx + 1);
                        var strWidth = _aidctx.measureText(nowStr).width;

                        if (strWidth <= maxWidth) {
                            result[0] = {
                                text: nowStr,
                                width: strWidth
                            };
                        } else {
                            break;
                        }

                        idx++;
                    }

                    return idx === len ? result : result.concat(calc(str.substring(idx)));
                } else {
                    return [{ text: str, width: width }];
                }
            }

            var res = calc(text);
            _aidctx.restore();
            return res;
        }
    }, {
        key: '_processBorder',
        value: function _processBorder() {
            var border = this.config.border;

            var borderStr = border == null ? '0 #000000' : border;
            var borderSetting = borderStr.split(' ');

            return {
                width: this._adaptation(parseFloat(borderSetting[0]), 0)[0],
                color: borderSetting[1]
            };
        }
    }, {
        key: '_adaptationSetting',
        value: function _adaptationSetting() {
            var _this = this;

            var config = this.config,
                _adaptation = this._adaptation;

            var border = this._processBorder();
            var adaptationConfig = {
                position: _adaptation(config.left, config.top),
                border: border,
                borderWidth: border.width,
                padding: [_adaptation(0, config.padding[0])[1], _adaptation(config.padding[1], 0)[0], _adaptation(0, config.padding[2])[1], _adaptation(config.padding[3], 0)[0]],
                fontSize: _adaptation(0, parseFloat(config.fontSize))[1]
            };

            adaptationConfig.lineHeight = typeof config.lineHeight === 'number' ? config.lineHeight * adaptationConfig.fontSize : _adaptation(0, parseFloat(config.lineHeight))[1];

            var calcRect = function calcRect() {
                var padding = adaptationConfig.padding,
                    borderWidth = adaptationConfig.borderWidth;

                var paddingSize = [padding[1] + padding[3], padding[0] + padding[2]];
                var borderSize = [borderWidth * 2, borderWidth * 2];
                var rectWidth = _adaptation(config.width, 0)[0];
                var containerWidth = rectWidth - paddingSize[0] - borderSize[0];
                var contentStrs = _this._processText(config.text, containerWidth);

                Object.assign(adaptationConfig, {
                    rect: {
                        width: rectWidth,
                        height: config.height == null ? contentStrs.length * adaptationConfig.lineHeight + borderSize[1] + paddingSize[1] : _adaptation(0, config.height)[1]
                    },
                    content: contentStrs
                });

                Object.assign(adaptationConfig, {
                    containerWidth: containerWidth,
                    containerHeight: adaptationConfig.rect.height - borderSize[1] - paddingSize[1]
                });
            };

            calcRect();

            this._adaptationConfig = adaptationConfig;
        }
    }, {
        key: '_drawContainer',
        value: function _drawContainer() {
            var _ctx = this._ctx,
                _adaptationConfig = this._adaptationConfig;
            var position = _adaptationConfig.position,
                border = _adaptationConfig.border,
                padding = _adaptationConfig.padding,
                containerWidth = _adaptationConfig.containerWidth,
                containerHeight = _adaptationConfig.containerHeight;

            _ctx.beginPath();
            _ctx.rect(position[0] + border.width + padding[3], position[1] + border.width + padding[0], containerWidth, containerHeight);
            _ctx.clip();
        }
    }, {
        key: '_drawBorder',
        value: function _drawBorder() {
            var _ctx = this._ctx,
                _adaptationConfig = this._adaptationConfig;
            var _adaptationConfig$rec = _adaptationConfig.rect,
                width = _adaptationConfig$rec.width,
                height = _adaptationConfig$rec.height;
            var border = _adaptationConfig.border;


            if (border.width === 0) return;

            _ctx.save();
            _ctx.setLineWidth(border.width);
            _ctx.setStrokeStyle(border.color);
            _ctx.strokeRect.apply(_ctx, toConsumableArray(_adaptationConfig.position.map(function (num) {
                return num + border.width / 2;
            })).concat([width - border.width, height - border.width]));
            _ctx.restore();
        }
    }, {
        key: '_drawBackground',
        value: function _drawBackground(ctx, adaptation) {
            var _ctx = this._ctx,
                _adaptationConfig = this._adaptationConfig,
                config = this.config;
            var _adaptationConfig$rec2 = _adaptationConfig.rect,
                width = _adaptationConfig$rec2.width,
                height = _adaptationConfig$rec2.height;
            var border = _adaptationConfig.border;


            if (config.backgroundColor && config.backgroundColor !== COLOR_TRANSPRENT) {
                _ctx.save();
                _ctx.setFillStyle(config.backgroundColor);
                _ctx.fillRect.apply(_ctx, toConsumableArray(_adaptationConfig.position.map(function (num) {
                    return num + border.width;
                })).concat([width - border.width * 2, height - border.width * 2]));
                _ctx.restore();
            }
            if (config.backgroundImage) {
                _ctx.save();
                _ctx.drawImage.apply(_ctx, [this._bgImage].concat(toConsumableArray(_adaptationConfig.position.map(function (num) {
                    return num + border.width;
                })), [width - border.width * 2, height - border.width * 2]));
                _ctx.restore();
            }
        }
    }, {
        key: '_drawContent',
        value: function _drawContent() {
            var _ctx = this._ctx,
                _adaptationConfig = this._adaptationConfig,
                config = this.config;
            var content = _adaptationConfig.content,
                position = _adaptationConfig.position,
                border = _adaptationConfig.border,
                padding = _adaptationConfig.padding,
                lineHeight = _adaptationConfig.lineHeight,
                containerWidth = _adaptationConfig.containerWidth,
                containerHeight = _adaptationConfig.containerHeight,
                fontSize = _adaptationConfig.fontSize;

            var alignMap = {
                'top': 0,
                'middle': 0.5,
                'bottom': 1,
                'left': 0,
                'center': 0.5,
                'right': 1
            };

            content.forEach(function (item, idx) {
                _ctx.save();
                _ctx.font = [config.fontStyle, 'normal', config.fontWeight, fontSize + 'px', config.fontFamily].filter(function (val) {
                    return val != null;
                }).join(' ');
                _ctx.setFillStyle(config.color);

                _ctx.setTextBaseline('middle');
                _ctx.fillText(item.text, position[0] + border.width + padding[3] + alignMap[config.textAlign] * (containerWidth - item.width), position[1] + border.width + padding[0] + lineHeight * (idx + 0.5) + alignMap[config.textVerticalAlign] * (containerHeight - content.length * lineHeight), containerWidth);
                _ctx.restore();
            });
        }
    }, {
        key: 'render',
        value: function render(ctx, aidctx, adaptation) {
            this._ctx = ctx;
            this._aidctx = aidctx;
            this._adaptation = adaptation;

            this._adaptationSetting();
            this._drawBorder();
            this._drawBackground();

            this._drawContent();
        }
    }, {
        key: 'preload',
        value: function () {
            var _ref = asyncToGenerator(regenerator.mark(function _callee() {
                var backgroundImage;
                return regenerator.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                backgroundImage = this.config.backgroundImage;

                                if (!backgroundImage) {
                                    _context.next = 5;
                                    break;
                                }

                                _context.next = 4;
                                return downloadFile(backgroundImage);

                            case 4:
                                this._bgImage = _context.sent;

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function preload() {
                return _ref.apply(this, arguments);
            }

            return preload;
        }()
    }]);
    return Element;
}();

var Scene = function () {
    function Scene(id, options) {
        classCallCheck(this, Scene);

        this._canvasId = id;
        this.options = _extends({}, options);
        this._elements = [];
        this._canvasRect = null;
        this._ctx = wx.createCanvasContext(id, options.context);
        this._aidctx = wx.createCanvasContext(options.aidid, options.context);
        this._systemInfo = wx.getSystemInfoSync();
        this._adaptationSize();
    }

    createClass(Scene, [{
        key: '_getClientRect',
        value: function _getClientRect() {
            var _this = this;

            return this._canvasRect ? Promise.resolve(_extends({}, this._canvasRect)) : new Promise(function (resolve) {
                var query = wx.createSelectorQuery();

                if (_this.options.context) {
                    query = query.in(_this.options.context);
                }

                query.select('#' + _this._canvasId).boundingClientRect(function (res) {
                    _this._canvasRect = res;
                    _this.options.initRect && _this.options.initRect(res);
                    resolve(res);
                }).exec();
            });
        }
    }, {
        key: '_adaptationSize',
        value: function () {
            var _ref = asyncToGenerator(regenerator.mark(function _callee() {
                var _ref2, width, height, _options$original, originalWidth, originalHeight, isPercentage, calcPercentage;

                return regenerator.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                calcPercentage = function calcPercentage(per, total) {
                                    return total * (per.substring(0, per.length - 1) / 100);
                                };

                                isPercentage = function isPercentage(num) {
                                    return (/^.*%$/.test(num.toString())
                                    );
                                };

                                _context.next = 4;
                                return this._getClientRect();

                            case 4:
                                _ref2 = _context.sent;
                                width = _ref2.width;
                                height = _ref2.height;
                                _options$original = slicedToArray(this.options.original, 2), originalWidth = _options$original[0], originalHeight = _options$original[1];
                                return _context.abrupt('return', function () {
                                    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                                    return [isPercentage(x) ? calcPercentage(x, width) : x * (width / originalWidth), isPercentage(y) ? calcPercentage(y, height) : y * (height / originalHeight)].map(function (num) {
                                        return Math.round(num);
                                    });
                                });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _adaptationSize() {
                return _ref.apply(this, arguments);
            }

            return _adaptationSize;
        }()
    }, {
        key: 'preload',
        value: function preload() {
            return Promise.all(this._elements.filter(function (element) {
                return !element.preload;
            }).map(function (element) {
                return element.preload();
            }));
        }
    }, {
        key: 'append',
        value: function append(ele) {
            if (!(ele instanceof Element)) {
                errorInfo('The appended element must inherit Element');
            }

            this._elements.push(ele);

            return this;
        }
    }, {
        key: 'draw',
        value: function () {
            var _ref3 = asyncToGenerator(regenerator.mark(function _callee2() {
                var _this2 = this;

                var idx, elements, adaptationSize, drawCanvas, element;
                return regenerator.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                idx = 0;
                                elements = this._elements.sort(function (first, next) {
                                    return first.config.zIndex - next.config.zIndex;
                                });
                                _context2.next = 4;
                                return this._adaptationSize();

                            case 4:
                                adaptationSize = _context2.sent;

                                drawCanvas = function drawCanvas() {
                                    var reserve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                                    return new Promise(function (resolve) {
                                        return _this2._ctx.draw(reserve, resolve);
                                    });
                                };

                                this._ctx.clearRect(0, 0, this._canvasRect.width, this._canvasRect.height);

                            case 7:
                                if (!(idx < elements.length)) {
                                    _context2.next = 23;
                                    break;
                                }

                                element = elements[idx];
                                _context2.t0 = element.preload;

                                if (!_context2.t0) {
                                    _context2.next = 13;
                                    break;
                                }

                                _context2.next = 13;
                                return element.preload();

                            case 13:
                                element.render(this._ctx, this._aidctx, adaptationSize);
                                _context2.next = 16;
                                return drawCanvas(true);

                            case 16:
                                _context2.t1 = ~this._systemInfo.system.indexOf('Android');

                                if (!_context2.t1) {
                                    _context2.next = 20;
                                    break;
                                }

                                _context2.next = 20;
                                return new Promise(function (res) {
                                    return setTimeout(res, 100);
                                });

                            case 20:
                                idx++;
                                _context2.next = 7;
                                break;

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function draw() {
                return _ref3.apply(this, arguments);
            }

            return draw;
        }()
    }]);
    return Scene;
}();

var Label = function (_Element) {
    inherits(Label, _Element);

    function Label(config) {
        classCallCheck(this, Label);
        return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, _extends({
            left: 0,
            top: 0,
            text: '',
            textAlign: 'left',
            color: '#000000',
            fontStyle: 'normal',
            fontWeigth: 'normal',
            fontFamily: 'sans-serif'
        }, config)));
    }

    createClass(Label, [{
        key: 'render',
        value: function render(ctx, adaptation) {
            var config = this.config;


            ctx.font = [config.fontStyle, config.fontWeigth, config.fontSize + 'px', config.fontFamily].filter(function (val) {
                return val != null;
            }).join(' ');

            ctx.setFillStyle(config.color);
            ctx.setTextBaseline('top');
            ctx.setTextAlign(config.textAlign);
            ctx.fillText.apply(ctx, [config.text].concat(toConsumableArray(adaptation(config.left, config.top)), [adaptation(config.maxWidth, 0)[0]]));
        }
    }]);
    return Label;
}(Element);

var Background = function (_Element) {
    inherits(Background, _Element);

    function Background(config) {
        classCallCheck(this, Background);

        var _this = possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, config));

        _this._bgImage = null;
        return _this;
    }

    createClass(Background, [{
        key: 'render',
        value: function render(ctx, aidctx, adaptation) {
            var _config = this.config,
                color = _config.color,
                image = _config.image;

            if (color) {
                ctx.setFillStyle(color);
                ctx.fillRect.apply(ctx, [0, 0].concat(toConsumableArray(adaptation('100%', '100%'))));
            }

            if (image) {
                ctx.drawImage.apply(ctx, [this._bgImage, 0, 0].concat(toConsumableArray(adaptation('100%', '100%'))));
            }
        }
    }, {
        key: 'preload',
        value: function () {
            var _ref = asyncToGenerator(regenerator.mark(function _callee() {
                var image;
                return regenerator.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                image = this.config.image;

                                if (!image) {
                                    _context.next = 5;
                                    break;
                                }

                                _context.next = 4;
                                return downloadFile(image);

                            case 4:
                                this._bgImage = _context.sent;

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function preload() {
                return _ref.apply(this, arguments);
            }

            return preload;
        }()
    }]);
    return Background;
}(Element);

export { Scene, Element, Label, Background, utils };
//# sourceMappingURL=sketchpad.esm.js.map
