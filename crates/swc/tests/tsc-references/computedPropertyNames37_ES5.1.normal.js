//// [computedPropertyNames37_ES5.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
var Foo = function Foo() {
    "use strict";
    _class_call_check(this, Foo);
};
var Foo2 = function Foo2() {
    "use strict";
    _class_call_check(this, Foo2);
};
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    _create_class(C, [
        {
            key: "get1",
            get: // Computed properties
            function get() {
                return new Foo;
            }
        },
        {
            key: "set1",
            set: function set(p) {}
        }
    ]);
    return C;
}();
