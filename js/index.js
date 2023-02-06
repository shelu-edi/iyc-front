// Dropdown

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu__item');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', ()=> {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active')
            });
            option.classList.add('active');
        });
    });
});


// Carousel
$('input').on('change', function() {
    $('body').toggleClass('blue');
});

// Scroll
$(document).ready(function() {
    $(window).on("scroll", function() {
        var scroll_pos = $(window).scrollTop();
        var element_pos = $(".tag").offset().top;

        if (scroll_pos >= element_pos) {
            $(".tag").addClass("visible");
        }
    });
});

// Carousel

const repeat = true;
const noArrows = false;
const noBullets = false;


const container = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-single');
var slideTotal = slide.length - 1;
var slideCurrent = -1;

function initBullets() {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    container.appendChild(bulletContainer);
}

function initArrows() {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa')
    iLeft.classList.add('fa-arrow-left')
    leftArrow.classList.add('slider-left')
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('fa')
    iRight.classList.add('fa-arrow-right')
    rightArrow.classList.add('slider-right')
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
        slideRight();
    })
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(function () {
        slideRight();
    }, 500);
}

function updateBullet() {
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent === 0) {
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];

    }

    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
    } else {
        var proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
    } else {
        var preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet();
}

function goToIndexSlide(index) {
    const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
        sliding();
    }
}

slideInitial();

// Drop 2
/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle   = '[data-toggle="dropdown"]'
    var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.VERSION = '3.4.1'

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector !== '#' ? $(document).find(selector) : null

        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function () {
            var $this         = $(this)
            var $parent       = getParent($this)
            var relatedTarget = { relatedTarget: this }

            if (!$parent.hasClass('open')) return

            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
        })
    }

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent  = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div'))
                    .addClass('dropdown-backdrop')
                    .insertAfter($(this))
                    .on('click', clearMenus)
            }

            var relatedTarget = { relatedTarget: this }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger($.Event('shown.bs.dropdown', relatedTarget))
        }

        return false
    }

    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent  = getParent($this)
        var isActive = $parent.hasClass('open')

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menu' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0)                 index--         // up
        if (e.which == 40 && index < $items.length - 1) index++         // down
        if (!~index)                                    index = 0

        $items.eq(index).trigger('focus')
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data  = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown             = Plugin
    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


$(function () {
    $('.selectpicker').selectpicker();
});



