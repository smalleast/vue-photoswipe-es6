//todo:optimize
(function (doc, win) {
  var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
    dpr = window.top === window.self ? dpr : 1, // When import by iframe,prevent scale.
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  docEl.dataset.dpr = dpr;
  var recalc = function () {
    var width = docEl.clientWidth;
    if (width / dpr > 750) {
      width = 750 * dpr;
    }
    docEl.dataset.width = width
    docEl.dataset.percent = 100 * (width / 750);
    docEl.style.fontSize = 100 * (width / 750) + 'px';
  };
  recalc()
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);
