(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-7').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/ribbonbanner-2880.png' : 'images/ribbonbanner-1920.png') : 'images/ribbonbanner-960.png');
var a='data-lazy'; if($('.gallery-2 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.gallery-2 .slider-for .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/stafford-s-perry-hotel-2880.jpg' : 'images/stafford-s-perry-hotel-1920.jpg') : 'images/stafford-s-perry-hotel-960.jpg');
$('.gallery-2 .slider-nav .slide0').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/thumb-stafford-s-perry-hotel-828.jpg' : 'images/thumb-stafford-s-perry-hotel-552.jpg') : 'images/thumb-stafford-s-perry-hotel-276.jpg');
var a='data-lazy'; if($('.gallery-2 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.gallery-2 .slider-for .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/9268919569_8c0294dcf2_o-2880.jpg' : 'images/9268919569_8c0294dcf2_o-1920.jpg') : 'images/9268919569_8c0294dcf2_o-960.jpg');
$('.gallery-2 .slider-nav .slide1').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/thumb-9268919569_8c0294dcf2_o-828.jpg' : 'images/thumb-9268919569_8c0294dcf2_o-552.jpg') : 'images/thumb-9268919569_8c0294dcf2_o-276.jpg');
var a='data-lazy'; if($('.gallery-2 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.gallery-2 .slider-for .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/12767142213_e0d81f1926_o-2880.jpg' : 'images/12767142213_e0d81f1926_o-1920.jpg') : 'images/12767142213_e0d81f1926_o-960.jpg');
$('.gallery-2 .slider-nav .slide2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/thumb-12767142213_e0d81f1926_o-828.jpg' : 'images/thumb-12767142213_e0d81f1926_o-552.jpg') : 'images/thumb-12767142213_e0d81f1926_o-276.jpg');
var a='data-lazy'; if($('.gallery-2 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.gallery-2 .slider-for .slide3').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/is55-1336400000-03680-2880.jpeg' : 'images/is55-1336400000-03680-1920.jpeg') : 'images/is55-1336400000-03680-960.jpeg');
$('.gallery-2 .slider-nav .slide3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/thumb-is55-1336400000-03680-828.jpeg' : 'images/thumb-is55-1336400000-03680-552.jpeg') : 'images/thumb-is55-1336400000-03680-276.jpeg');
var a='data-lazy'; if($('.gallery-2 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.gallery-2 .slider-for .slide4').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/screen-shot-2015-03-13-at-23.07.29-2880.png' : 'images/screen-shot-2015-03-13-at-23.07.29-1920.png') : 'images/screen-shot-2015-03-13-at-23.07.29-960.png');
$('.gallery-2 .slider-nav .slide4').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/thumb-screen-shot-2015-03-13-at-23.07.29-828.png' : 'images/thumb-screen-shot-2015-03-13-at-23.07.29-552.png') : 'images/thumb-screen-shot-2015-03-13-at-23.07.29-276.png');};
$(window).resize(r);
r();
if('ontouchstart' in window) { $("html").addClass("nofixed"); }var mapOptions = {zoom: 16,center: new google.maps.LatLng(45.3759091, -84.95394379999999),mapTypeId: google.maps.MapTypeId.ROADMAP,};var map = new google.maps.Map($('.map-2').get(0), mapOptions);var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(45.3759091, -84.95394379999999),});var infowindow = new google.maps.InfoWindow({content: "<div class=\"map-2-label\"><b>Reception Location</b><br>Stafford's Perry Hotel<br>100 Lewis St<br>Petoskey, MI 49770</div>",});google.maps.event.addListener(marker, "click", function() {infowindow.open(map, marker);});infowindow.open(map, marker);$('.gallery-2 .slider-for').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,arrows: false,fade: true,infinite: true,asNavFor: '.gallery-2 .slider-nav',});$('.gallery-2 .slider-nav').slick({slidesToShow: 3,slidesToScroll: 1,asNavFor: '.gallery-2 .slider-for',centerMode: true,focusOnSelect: true,dots: false,arrows: true,infinite: true});$('.cont-134').Stickyfill();
});