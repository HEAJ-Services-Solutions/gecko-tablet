// |jit-test| exitstatus: 6;

load(libdir + "asm.js");

suppressSignalHandlers(true);
var g = asmLink(asmCompile(USE_ASM + "function f() {} function g() { while(1) { f() } } return g"));
timeout(1);
g();
assertEq(true, false);
