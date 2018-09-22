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
