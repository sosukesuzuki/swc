//// [anyAsGenericFunctionCall.ts]
var x;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
x(), x("hello"), x(x), x(x);
