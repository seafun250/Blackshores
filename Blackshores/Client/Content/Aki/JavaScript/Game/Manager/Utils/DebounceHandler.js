'use strict';

var f = g;
function g(d, a) {
  var f = b();
  g = function (d, e) {
    d = d - 243;
    var b = f[d];
    return b;
  };
  return g(d, a);
}
(function (b, a) {
  var c = g;
  var d = b();
  while (true) {
    try {
      var e = -parseInt(c("0x109")) / 1 + parseInt(c("0x106")) / 2 + -parseInt(c("0xf7")) / 3 * (-parseInt(c(253)) / 4) + -parseInt(c("0x101")) / 5 + parseInt(c("0x105")) / 6 * (-parseInt(c("0xf4")) / 7) + -parseInt(c("0xf3")) / 8 + parseInt(c("0x108")) / 9;
      if (e === a) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(b, 337598);
var a = {};
function b() {
  var c = ["515932dIMTOU", "nTick", "erty", "andler", "1402090zwYTgt", "delay", "lastRemain", "countdownT", "37626RxlCVZ", "223760FvVuHv", "DebouncedH", "16446492jzsKfD", "468235Hohiht", "ngTime", "imer", "getRemaini", "applyFn", "cancel", "debounceTi", "ingTime", "__esModule", "5146928TWHslo", "378UEwVlm", "defineProp", "args", "3jRPurd", "ime", "mer", "remainingT", "isRunning", "onCountdow"];
  b = function () {
    return c;
  };
  return b();
}
a.value = true;
Object[f(245) + f(255)](exports, f("0x111"), a);
exports[f(263) + f(256)] = undefined;
class c {
  constructor(a, b, c = null) {
    var d = f;
    this.delay = a;
    this[d("0x10d")] = b;
    this["debounceTi" + d("0xf9")] = null;
    this[d(260) + d(267)] = null;
    this[d("0xfa") + d(248)] = 0;
    this[d("0xfc") + "nTick"] = c;
    this[d("0xfb")] = false;
    this[d("0x103") + d(272)] = -1;
  }
  trigger(...a) {
    var b = f;
    this[b("0x10e")]();
    this[b(246)] = a;
    this[b(250) + b("0xf8")] = this.delay;
    if (this[b("0xfc") + b("0xfe")]) {
      this[b(259) + b(272)] = this[b("0xfa") + b("0xf8")];
      this[b(252) + b("0xfe")](this[b(250) + b(248)] / 1000);
    }
    this["countdownT" + b("0x10b")] = // TOLOOK
    // TOLOOK
    setInterval(() => {
      var c = b;
      this[c("0xfa") + "ime"] -= 1000;
      if (this[c("0xfc") + "nTick"] && this[c(250) + c("0xf8")] !== this[c("0x103") + c("0x110")]) {
        this["lastRemain" + c("0x110")] = this[c("0xfa") + c(248)];
        this[c("0xfc") + c(254)](Math.max(this["remainingT" + c("0xf8")] / 1000, 0));
      }
      if (this["remainingT" + c("0xf8")] <= 0) {
        this[c(270)]();
      }
    }, 1000);
    this[b("0x10f") + b(249)] = // TOLOOK
    // TOLOOK
    setTimeout(() => {
      var c = b;
      this.applyFn(...this[c(246)]);
      this.cancel();
    }, this[b("0x102")]);
  }
  cancel() {
    var a = f;
    if (this["debounceTi" + a(249)] !== null) {
      clearTimeout(this[a("0x10f") + a("0xf9")]);
      this[a("0x10f") + a(249)] = null;
    }
    if (this[a("0x104") + a(267)] !== null) {
      clearInterval(this[a(260) + "imer"]);
      this[a("0x104") + a(267)] = null;
    }
    this[a("0xfa") + a("0xf8")] = 0;
    this[a(251)] = false;
    this[a("0x103") + "ingTime"] = -1;
    this[a(246)] = [];
  }
  [f(268) + f(266)]() {
    var a = f;
    return this[a("0xfa") + a(248)];
  }
}
exports[f(263) + f("0x100")] = c;