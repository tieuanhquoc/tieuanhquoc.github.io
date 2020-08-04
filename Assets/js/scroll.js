!(function (e) {
  var t = e(".section"),
    n = 0,
    o = !1,
    i = function () {
      setTimeout(function () {
        o = !1;
      }, 300);
    };
  document.addEventListener(
    "wheel",
    function (r) {
      var f = e(t[n]);
      if (o) r.preventDefault();
      else if (-r.deltaY < 0) {
        if (n + 1 >= t.length) return;
        if (!(f[0].getBoundingClientRect().bottom <= e(window).height()))
          return;
        r.preventDefault();
        var u = e(t[++n]).offset().top;
        (o = !0), e("html, body").animate({ scrollTop: u }, 200, i);
      } else {
        if (n - 1 < 0) return;
        if (
          !(function (e) {
            return e[0].getBoundingClientRect().top >= 0;
          })(f)
        )
          return;
        r.preventDefault();
        u = e(t[--n]).offset().top;
        (o = !0), e("html, body").animate({ scrollTop: u }, 200, i);
      }
    },
    { passive: !1 }
  );
})(jQuery);
