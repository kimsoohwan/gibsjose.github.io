(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-5').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ribbonbanner-2880.png' : 'images/ribbonbanner-1920.png') : 'images/ribbonbanner-960.png');};
$(window).resize(r);
r();
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Cinzel|Josefin+Slab:400,700&amp;subset=all'></link>"));
}
if('ontouchstart' in window) { $("html").addClass("nofixed"); }$('.cont-68').Stickyfill();
});