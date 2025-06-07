'use strict';

var j = k;
function k(c, a) {
  var d = b();
  k = function (e, f) {
    e = e - 141;
    var b = d[e];
    return b;
  };
  return k(c, a);
}
function b() {
  var c = ["ithSound", "4651668tAfyEl", "ngs", "addKey", "defineProp", "12cjefcv", "9oahDaj", "PlayAudio", "12275ygVxta", "altKeyStat", "key_Up", "1526390ibfIVD", "pressedTim", "onMapping", "ntroller", "2466kGtugV", "isPressed", "value", "isKeyPress", "2GbfepM", "InputSetti", "4291636FNrrXy", "Down", "now", "RemoveActi", "ModUtils", "6477904evePqg", "_number", "IsMyKeyUp", "key_Down", "erty", "isKeyAlt", "LeftAlt", "72676nSryVn", "3mrXjdF", "26662119QwaQZc", "InputKeyCo", "apping", "IsInputKey", "play_ui_fx", "RemoveTogg", "AddActionM", "_com_count", "isKeyDown"];
  b = function () {
    return c;
  };
  return b();
}
(function (b, a) {
  var c = k;
  var d = b();
  while (true) {
    try {
      var e = -parseInt(c("0xb3")) / 1 * (-parseInt(c(165)) / 2) + parseInt(c(180)) / 3 * (parseInt(c(167)) / 4) + -parseInt(c("0x9a")) / 5 * (parseInt(c(161)) / 6) + -parseInt(c("0x93")) / 7 + -parseInt(c(172)) / 8 + parseInt(c("0x98")) / 9 * (-parseInt(c("0x9d")) / 10) + parseInt(c(181)) / 11 * (parseInt(c(151)) / 12);
      if (e === a) {
        break;
      } else {
        d.push(d.shift());
      }
    } catch (b) {
      d.push(d.shift());
    }
  }
})(b, 933508);
var a = {
  [j(163)]: true
};
Object[j("0x96") + j("0xb0")](exports, "__esModule", a);
exports[j(182) + j("0xa0")] = undefined;
const c = require("ue");
const l = {};
const e = require("../Utils/ModUtils");
const f = require("../../InputSettings/InputSettings");
class d {
  static keyState = false;
  static [j(155) + "e"] = false;
  static [j("0x91")](a) {
    var b = j;
    if (!l[a]) {
      var c = {
        [b(175)]: false,
        key_Up: false
      };
      l[a] = c;
    }
    const d = l[a];
    var e = f[b("0xa6") + b("0x94")]["IsInputKey" + b(168)](a);
    if (e && !d[b(175)]) {
      d[b("0xaf")] = true;
      return true;
    }
    if (!e && d[b("0xaf")]) {
      d[b(175)] = false;
    }
    return false;
  }
  static IsKeyHold(a, b = 500) {
    var c = j;
    const d = f[c(166) + c(148)][c(184) + c("0xa8")](a);
    if (d && !l[a]) {
      l[a] = {
        pressedTime: Date[c(169)]()
      };
    }
    if (!d && l[a]) {
      delete l[a];
    }
    if (d && l[a] && Date.now() - l[a][c("0x9e") + "e"] > b) {
      return true;
    }
    return false;
  }
  static [j("0xa4") + "ed"](a) {
    var b = j;
    if (!l[a]) {
      var c = {
        isPressed: false
      };
      l[a] = c;
    }
    const d = l[a];
    const e = f[b(166) + "ngs"][b("0xb8") + "Down"](a);
    if (e && !d.isPressed) {
      d[b("0xa2")] = true;
      return true;
    }
    if (!e) {
      d[b("0xa2")] = false;
    }
    return false;
  }
  static [j(177)](a) {
    var b = j;
    var c = f[b(166) + b("0x94")][b(184) + b("0xa8")](a);
    var g = f[b("0xa6") + "ngs"][b(184) + b("0xa8")](b("0xb2"));
    if (g && c && !this.keyState) {
      c = false;
      g = false;
      this[b(155) + "e"] = true;
      return true;
    }
    if (!c) {
      this[b(155) + "e"] = false;
      return false;
    }
    return false;
  }
  static ["listenKeyW" + j(146)](a, b) {
    var c = j;
    var d = this[c("0xae")](b);
    if (d) {
      e[c("0xab")][c(153)](c(141) + c("0x90") + c(173));
    }
    return d;
  }
  static [j("0x95")](a, b) {
    var c = j;
    f[c(166) + c("0x94")][c(143) + c(183)](a, b);
  }
  static [j("0xae")](a) {
    var b = j;
    if (!l[a]) {
      var c = {
        [b("0xaf")]: false,
        key_Up: false
      };
      l[a] = c;
    }
    var d = l[a];
    var e = f[b("0xa6") + b(148)][b("0xb8") + b(168)](a);
    if (e && !d[b(175)]) {
      d[b("0xaf")] = true;
      d[b("0x9c")] = false;
    }
    if (!e && d.key_Down && !d.key_Up) {
      d[b("0x9c")] = true;
    }
    if (d[b("0xaf")] && d[b("0x9c")]) {
      d[b(175)] = false;
      d[b("0x9c")] = false;
      return true;
    }
    return false;
  }
  static AddToggle(a, b) {
    var c = j;
    f[c("0xa6") + c("0x94")]["AddActionM" + c(183)](a, b);
  }
  static [j("0x8e") + "le"](a, b) {
    var c = j;
    f[c(166) + c("0x94")][c(170) + c(159)](a, b);
  }
  static RemoveKey(a, b) {
    var c = j;
    f[c(166) + "ngs"][c(170) + c(159)](a, b);
  }
}
exports[j(182) + "ntroller"] = d;