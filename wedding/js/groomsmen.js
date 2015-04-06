(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-9').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ribbonbanner-2880.png' : 'images/ribbonbanner-1920.png') : 'images/ribbonbanner-960.png');
$('.img-10').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/tuxedo-1170.jpg' : 'images/tuxedo-780.jpg') : 'images/tuxedo-390.jpg');};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel|Josefin+Slab:400,400i,700&amp;subset=all'></link>"));
}
if('ontouchstart' in window) { $("html").addClass("nofixed"); }$('.cont-217').Stickyfill();
});