"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//photo swiper
var isExistPhotoSwiper = document.querySelector('.photos__swiper');
if (isExistPhotoSwiper) {
  var swiper = new Swiper('.photos__swiper', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    loop: true,
    autoplay: true
  }, "autoplay", true), "slidesPerView", 3), "effect", 'fade'), "crossFade", true), "spaceBetween", 10), "navigation", {
    nextEl: '.photos__swiper-next',
    prevEl: '.photos__swiper-prev'
  }));
}
//# sourceMappingURL=swiperinit.js.map
