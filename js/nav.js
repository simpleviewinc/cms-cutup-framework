// Helper functions

// Add "add-scroll" and remove "no-scroll" class
function add_scroll_to_mobile() {
    var $nav = $('body').find('[data-sv-mainnav]');
    var height = $(window).height();

    $nav.height(height - 67);  // minus height of nav bar
    $nav.addClass('add-scroll');
    $nav.removeClass('no-scroll');
    $('body').addClass('nav-open');
}

// Add "no-scroll" and remove "add-scroll" class
function remove_scroll() {
    var $nav = $('body').find('[data-sv-mainnav]');

    $nav.removeClass('add-scroll');
    $nav.addClass('no-scroll');
    $('body').removeClass('nav-open');
}


// Wait for when header and footer load, then attach javaScript event listeners
// DO NOT USE THIS CODE FOR SHELL SETUP
// Replace this event listener with document.ready

// header loaded
document.addEventListener("headerImported", function (event) {
    console.log("header loaded")

    // Desktop

        // Toggle submenu open on indicator click
        $('[data-menu-toggle]').on('click', function () {
            $(this).toggleClass('active');
        })

    // Mobile Nav

        // Toggle mobile dropdown on hamburger menu btn click
        $('[data-mobilenav-toggle]').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().parent().toggleClass('active');
        });

        // Toggle submenu open on indicator click
        $('[data-menu-toggle-mobile]').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().parent().toggleClass('active');
            $(this).parent().parent().find('ul').slideToggle();
        });
})

// footer loaded
document.addEventListener("footerImported", function (event) {
    console.log("footer loaded")
})