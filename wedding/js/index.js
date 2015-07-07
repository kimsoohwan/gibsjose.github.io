(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ribbonbanner-2880.png' : 'images/ribbonbanner-1920.png') : 'images/ribbonbanner-960.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_0196-1389.jpg' : 'images/img_0196-926.jpg') : 'images/img_0196-463.jpg');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/gopr0133-933.jpg' : 'images/gopr0133-622.jpg') : 'images/gopr0133-311.jpg');
$('.img-4').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1604_3-933.jpg' : 'images/img_1604_3-622.jpg') : 'images/img_1604_3-311.jpg');};
$(window).resize(r);
r();
if('ontouchstart' in window) { $("html").addClass("nofixed"); }$('.cont-36').Stickyfill();
});