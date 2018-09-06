jQuery('.btn-link').click(function(){
    if(jQuery(this).hasClass('collapsed')){
        jQuery(this).find('span').removeClass('fa fa-plus');
        jQuery(this).find('span').addClass('fa fa-minus');
    }
    else{
        jQuery(this).find('span').removeClass('fa fa-minus');
        jQuery(this).find('span').addClass('fa fa-plus');
    }
})

/*Scroll to top when arrow up clicked BEGIN*/
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
 /*Scroll to top when arrow up clicked END*/
