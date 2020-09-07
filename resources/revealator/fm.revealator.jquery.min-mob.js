var Revealator = "undefined" != typeof Revealator ? Revealator : {};
$(function() {
    Revealator = $.extend({}, { timer: null, busy: !1, scroll_padding: -800, effects_padding: -800, refresh: function() {} }, "undefined" != typeof Revealator ? Revealator : {}), Revealator.refresh = function() {
        var a = $(window),
            e = $(document),
            o = $(document.body),
            t = 0,
            l = Revealator.effects_padding,
            r = a.height() - Revealator.effects_padding,
            s = Revealator.scroll_padding,
            v = e.height() - Revealator.scroll_padding;
        0 === a.scrollTop() ? o.hasClass("at-top") || o.addClass("at-top").removeClass("at-bottom").removeClass("near-top").removeClass("near-bottom") : a.scrollTop() + a.height() === e.height() ? o.hasClass("at-bottom") || o.addClass("at-bottom").removeClass("at-top").removeClass("near-top").removeClass("near-bottom") : a.scrollTop() <= s ? o.hasClass("near-top") || o.addClass("near-top").removeClass("near-bottom").removeClass("at-top").removeClass("at-bottom") : a.scrollTop() + a.height() >= v ? o.hasClass("near-bottom") || o.addClass("near-bottom").removeClass("near-top").removeClass("at-top").removeClass("at-bottom") : (o.hasClass("at-top") || o.hasClass("at-bottom") || o.hasClass("near-top") || o.hasClass("near-bottom")) && o.removeClass("at-top").removeClass("at-bottom").removeClass("near-top").removeClass("near-bottom"), $('*[class*="revealator"]').each(function() {
            t++;
            var a = this,
                e = $(a),
                o = a.getBoundingClientRect(),
                s = void 0;
            s = o.top > r && o.bottom > r ? "revealator-below" : o.top < r && o.bottom > r ? "revealator-partially-below" : o.top < l && o.bottom > l ? "revealator-partially-above" : o.top < l && o.bottom < l ? "revealator-above" : "revealator-within", e.hasClass("revealator-load") && !e.hasClass("revealator-within") && (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass("revealator-within")), e.hasClass(s) || e.hasClass("revealator-load") || (e.hasClass("revealator-once") ? (e.hasClass("revealator-within") || (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass(s)), (e.hasClass("revealator-partially-above") || e.hasClass("revealator-above")) && e.addClass("revealator-within")) : (e.removeClass("revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"), e.addClass(s)))
        })
    }, $(window).bind("scroll resize load ready", function() { Revealator.busy || (Revealator.busy = !0, setTimeout(function() { Revealator.busy = !1, Revealator.refresh() }, 150)) })
});
//# sourceMappingURL=fm.revealator.jquery.min.map