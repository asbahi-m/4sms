/* Change Icons Section FAQ */
jQuery('#accordion .btn-link').click(function(){
    if(jQuery(this).hasClass('collapsed')){
        jQuery(this).find('.fa').removeClass('fa-plus');
        jQuery(this).find('.fa').addClass('fa-minus');
    }
    else{
        jQuery(this).find('.fa').removeClass('fa-minus');
        jQuery(this).find('.fa').addClass('fa-plus');
    }
})

/* Show & Hide List Control Panel */
$('#listControlPanel').on('show.bs.collapse', function () {
    var node = document.getElementsByClassName("column");
    jQuery(node[0]).removeClass('d-none');
    jQuery(node[0]).addClass('d-block');
    jQuery(node[1]).removeClass('col-sm-12');
    jQuery(node[1]).addClass('col-sm-8');
})
$('#listControlPanel').on('hide.bs.collapse', function () {
    var node = document.getElementsByClassName("column");
    jQuery(node[0]).removeClass('d-block');
    jQuery(node[0]).addClass('d-none');
    jQuery(node[1]).removeClass('col-sm-8');
    jQuery(node[1]).addClass('col-sm-12');
})

/* Show & Hide Search Box In Control Panel */
$('#searchBox').on('show.bs.collapse', function () {
    var node = document.getElementById("searchBtn");
    jQuery(node).addClass('active');
})
$('#searchBox').on('hide.bs.collapse', function () {
    var node = document.getElementById("searchBtn");
    jQuery(node).removeClass('active');

})

/* Scroll to top when arrow up clicked BEGIN */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});
$(document).ready(function() {
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

/* Calculate Progress Bar */
document.body.onload = function progress() {
    var ration = parseInt(document.getElementById("ration").innerText);
    var deg = "rotate(" + (ration * 3.6) + "deg)";
    var defaultDeg = "rotate(180deg)";
    if (ration > 50) {
        document.getElementById("right-side").setAttribute("style","transform: " + defaultDeg + ";");
        document.getElementById("pie").setAttribute("style","animation: progress 1s step-start; opacity: 1;");
        document.getElementById("left-side").setAttribute("style","animation: progress 1s step-end; transform: " + deg + "; opacity: 1;");
    } else {
        document.getElementById("pie").setAttribute("style","animation: progress 1s step-start; opacity: 1; clip: rect(0, 120px, 120px, 60px);");
        document.getElementById("right-side").setAttribute("style","transform: " + deg + ";");
        document.getElementById("left-side").setAttribute("style","display: none;");
    }
}

jQuery('#packagesSlider').ready(function items(){
    var screen = window.matchMedia("(min-width: 992px)");
    var totalItems = $("#packagesSlider .carousel-item").length;
    if (totalItems <= 3 && screen.matches) {
        $('#packagesSlider, #packagesSlider > div, #packagesSlider > div > div').removeClass('carousel slide carousel-inner carousel-item');
        $('#packagesSlider > .carousel-control-prev, #packagesSlider > .carousel-control-next').remove();
    }
});
$("#packagesSlider").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#packagesSlider .carousel-item").length;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#packagesSlider .carousel-item")
            .eq(i)
            .appendTo("#packagesSlider .carousel-inner");
        } else {
          $("#packagesSlider .carousel-item")
            .eq(0)
            .appendTo("#packagesSlider .carousel-inner");
        }
      }
    }
});