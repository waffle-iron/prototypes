function LayoutCtrl() {

    var isSidebarShow = false;

    function setEvents() {
        setEventsBtnToggle();
        setEventsOverlayBlack();
        setEventMouseOver();
    }

    function setEventMouseOver() {
        $(window).on('mousemove', function (event) {
            if (event.pageX < 10 && !isSidebarShow) {
                toggleMenu();
                event.preventDefault();
            }
        });
    }

    function setEventsBtnToggle() {
        $('.btn-toggle').on('click', function (event) {
            toggleMenu();
            event.preventDefault();
        });
    }

    function setEventsOverlayBlack() {
        $('.overlay').on('click', function (event) {
            toggleMenu();
            event.preventDefault();
        });
    }

    function toggleMenu() {
        $('.sidebar').toggleClass('sidebar-toggled');
        $('.overlay').toggleClass('overlay-toggled');
        $('body').toggleClass('body-toggled');
        isSidebarShow = !isSidebarShow;
    }

    return {
        setEvents: setEvents
    };
}

var layoutCtrl = new LayoutCtrl();
layoutCtrl.setEvents();