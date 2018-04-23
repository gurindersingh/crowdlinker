require('./boostrap');

(function ($) {

    function scrollToAnimate() {
        $('a.scroll-to-animate').on('click', function (e) {
            let target = this.hash;
            let $target = $(target);

            if ($target.length > 0) {
                e.preventDefault();
                $('html, body').animate({
                    'scrollTop': $target.offset().top - 80
                }, 900, 'swing');
            }

        });
    }

    scrollToAnimate();

    function stickyNavbar() {
        window.onscroll = () => stickyFunction();
        let navbar = document.getElementById("sticky-nav");
        let sticky = navbar.offsetTop;

        function stickyFunction() {
            if (window.pageYOffset <= sticky) {
                navbar.classList.remove("is-sticky")
            } else {
                navbar.classList.add("is-sticky");
            }
        }
    }

    stickyNavbar();

    function equalize(objects) {
        let maxHeight = 0;
        let $els = typeof  objects === 'string' ? $(`.${objects}`) : objects;

        $($els).css("height", "auto");
        $($els).each((index, item) => $(item).css("height", "auto"));
        $($els).each((index, item) => maxHeight = $(item).outerHeight() > maxHeight ? $(item).outerHeight() : maxHeight);
        $($els).each((index, item) => $(item).css("height", `${maxHeight}px`));
    }

    equalize('equal-heights-title-1');
    equalize('equal-heights-title-2');
    equalize('equal-heights-icon-1');

    let teams = document.querySelectorAll('.equalize-team');
    for (let i = 0; i < teams.length; i++) {
        let teamMembers = $(teams[i]).find('.box');
        equalize(teamMembers);
    }

    window.addEventListener('resize', (event) => {
        equalize('equal-heights-title-1');
        equalize('equal-heights-title-2');
        equalize('equal-heights-icon-1');
        equalize('equalize-children');

        for (let i = 0; i < teams.length; i++) {

            let teamMembers = $(teams[i]).find('.box');

            if (teamMembers.length > 0) {
                if (event.target.innerWidth < 992) {
                    console.log(event.target.innerWidth);
                    console.log(teamMembers);
                    $(teamMembers).each((index, item) => {
                        console.log($(item).css({"height": "auto"}))
                    })
                } else {
                    equalize(teamMembers);
                }

            }

        }

    });

}(jQuery));