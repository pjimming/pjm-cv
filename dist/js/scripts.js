/*!
* Start Bootstrap - Resume v1.0.0 (https://cv.pjmcode.top)
* Copyright 2023-2023 panjiangming
* Licensed under MIT (https://github.com/pjimming/pjm-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function getCopyrightYear() {
    var startYear = 2023;
    var endYear = new Date().getFullYear();
    if (startYear === endYear) {
        return startYear;
    }
    return startYear + " - " + endYear;
}

window.onload = function () {
    document.getElementById("copyrightYear").textContent = getCopyrightYear();
};
