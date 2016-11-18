
mainMenuMobileToggle();
subMenus();
secondarySubMenus();


/* mainMenuMobileToggle  controls sliding the mobile menu in and out ****************
**************************************************************************************/

function mainMenuMobileToggle() {
    var $body = $('body');
    var $nav = $('.main-menu');
    var $overlay =  $('<div class="main-menu-overlay"></div>');
    // var $siteConstraint = $('.site-constraint');
    var $header = $('.header');
    var $openToggle = $('.mobile-menu-toggle');
    var $closeToggle = $('.mobile-menu-toggle-2');

    //function used to close mobile nav
    function closeMenu(time){
        setTimeout(function(){
            $openToggle.removeClass('toggle-on');
        },time);
        $body.removeClass('mobile-nav-open');
        setTimeout(function(){
            $overlay.remove();
        },time);

        //closes sub menus
        $('.sub-open').children('.submenu-wrap').slideUp(300);
        $('.sub-open').removeClass('sub-open');
        //closes secondary-submenus
        $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
        $('.secondary-sub-open').removeClass('secondary-sub-open');
    }

    //function used to open mobile nav
    $openToggle.on('click', function(){
        $header.append($overlay);
        $openToggle.toggleClass('toggle-on');
        setTimeout(function(){
            $body.toggleClass('mobile-nav-open');
        },100);
        $('.main-menu-overlay').on('swiperight', function(){
            closeMenu(500);
        });
    });

    $closeToggle.on('click', function(){
        closeMenu(500);
    });
    $($nav).on('swiperight', function(){
        closeMenu(500);
    });
    $(document).on('click', '.main-menu-overlay', function(){
        closeMenu(500);
    });
    $(window).resize(function(){
        closeMenu(500);
    });
}


/* subMenus controls toggling of the sub menus within the main menu ******************
 **************************************************************************************/

function subMenus() {
    var $toggle = $('.main-menu-list-item');
    var $clickToggle = $('.submenu-toggle');
    var md = 992;

    $toggle.hover(function(){
        var $this = $(this);
        if($(window).width() > md ){
            $this.children('.submenu-wrap').stop().slideDown(300);
        }
    }, function () {
        var $this = $(this);
        if($(window).width() > md ) {
            $this.children('.submenu-wrap').stop().slideUp(300);
            $('.customer-menu-open').removeClass('customer-menu-open');
            $('.sub-open').removeClass('sub-open');
        }
        //closes secondary-submenus
        $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
        $('.secondary-sub-open').removeClass('secondary-sub-open');
    });

    $clickToggle.on('click', function(e){
        var $this = $(this);
        var $thisSub = $this.siblings('.submenu-wrap');
        var $thisParent = $this.parent('li');

        e.preventDefault();
        if(!$thisParent.hasClass('sub-open')){
            $('.sub-open').children('.submenu-wrap').stop().slideUp(300);
            $('.sub-open').removeClass('sub-open');
            //closes secondary-submenus
            $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
            $('.secondary-sub-open').removeClass('secondary-sub-open');
            $thisSub.slideDown(300);
            $thisParent.addClass("sub-open");
        } else if($thisParent.hasClass('sub-open')) {
            $thisSub.slideUp(300);
            $thisParent.removeClass("sub-open");
        }
    });
    $(window).resize(function(){
        $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
        $('.secondary-sub-open').removeClass('secondary-sub-open');
    });
}


/* secondary-subMenus controls toggling of the secondary sub menus within the main menu ********
 ***********************************************************************************************/

function secondarySubMenus() {
    var $clickToggle = $('.secondary-menu-toggle');

    $clickToggle.on('click', function(e){
        var $this = $(this);
        var $thisSub = $this.siblings('.secondary-submenu-wrap');
        var $thisParent = $this.parent('li');

        e.preventDefault();
        if(!$thisParent.hasClass('secondary-sub-open')){
            $this.parent('li').parent('.submenu').parent('.submenu-wrap').css({height: 'auto'});
            $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
            $('.secondary-sub-open').removeClass('secondary-sub-open');
            $thisSub.slideDown(300);
            $thisParent.addClass("secondary-sub-open");
        } else if($thisParent.hasClass('secondary-sub-open')) {
            $thisSub.slideUp(300);
            $thisParent.removeClass("secondary-sub-open");
        }
    });
    $(window).resize(function(){
        $('.secondary-sub-open').children('.secondary-submenu-wrap').stop().slideUp(300);
        $('.secondary-sub-open').removeClass('secondary-sub-open');
    });
}


/*  Scroll event for header ***********************************************************
 **************************************************************************************/

// function header() {
//     var $header = $('.header');
//
//     headerScroll();
//
//     function headerScroll() {
//         $(window).on("scroll", function () {
//             var scrollPos = $(window).scrollTop();
//             if (scrollPos > 40) {
//                 $header.addClass('header-top');
//             } else {
//                 $header.removeClass('header-top');
//             }
//         });
//     }
// }