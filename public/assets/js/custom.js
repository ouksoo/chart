'use strict';

var PJT = {
    /**
     * Intro & login
     */
    loginInit: function loginInit() {
        this.introAnimationStart();
    },
    introAnimationStart: function introAnimationStart() {
        $('#sequenceArea').on('click', function () {
            PJT.loadImageRandom();
            $('.intro-bg').fadeOut('slow');
        });

        var sequenceStart = void 0;
        var position = 250;
        var interval = 25;
        var diff = 250;
        var sequencesize = 2500;
        if (sequenceStart == 1) {
            sequenceStart = setInterval(function () {
                document.getElementById('sequenceArea').style.backgroundPosition = '-' + position + 'px 0px';
                if (position < sequencesize) {
                    position = position + diff;
                } else {
                    position = 250;
                    clearInterval(sequenceStart);
                    $('#sequenceArea').on('click', function () {
                        PJT.loadImageRandom();
                        $('.intro-bg').fadeOut('slow');
                    });
                }
            }, interval);
        }
    },
    loadImageRandom: function loadImageRandom() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function () {
            $('header, footer').addClass('on');
            $('.login-wrap input#userId').focus();
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function loginKeyCheck() {
        $('.login-wrap input').on('keyup', function (e) {
            if ($('#userId').val() !== '' && $('#passWd').val() !== '') {
                $('.login-wrap .form-wrap, a.login-button').addClass('on');
            } else {
                $('.login-wrap .form-wrap, a.login-button').removeClass('on');
            }
        });
    },
    scrollPlugIn: function scrollPlugIn() {},
    utilsAliveLinks: function utilsAliveLinks() {
        // header > monitoring link
        $('a.header-monitor, header .product-btn').on('mouseenter', function () {
            $('header .product-btn').addClass('on');
        });
        $('a.header-monitor, header .product-btn').on('mouseleave', function () {
            $('header .product-btn').removeClass('on');
        });

        // header > profile show hide
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseenter', function () {
            $('div.personal-list-wrap').stop().fadeIn('fast');
        });
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseleave', function () {
            $('div.personal-list-wrap').stop().fadeOut('fast');
        });

        // header > notice show hide
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseenter', function () {
            $('div.notice-list-wrap').stop().fadeIn(300);
        });
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseleave', function () {
            $('div.notice-list-wrap').stop().fadeOut(300);
        });

        // lnb > calendar click
        $('a.lnb-calendar').on('click', function () {
            $('.lnb-tools-wrap.calendar').fadeIn('fast', function () {
                $('.lnb-tools-wrap.calendar div.from-date p.date').on('click', function () {
                    $('div.calendar-popup-date').fadeIn('fast');
                    PJT.calendarPopupDate();
                    $('div.calendar-popup-date div.inner a.close').on('click', function () {
                        $('div.calendar-popup-date').fadeOut();
                    });
                });
            });
        });

        // lnb > create a report
        $('a.lnb-createreport').on('click', function () {
            $('.lnb-tools-wrap.create-report').fadeIn('fast', function () {
                $('input.create-report-email').on('keyup', function (e) {
                    if ($(this).val() !== '') {
                        $('div.lnb-tools-wrap.create-report a.b').css('display', 'none');
                        $('div.lnb-tools-wrap.create-report a.c').css('display', 'inline-block');
                    } else {
                        $('div.lnb-tools-wrap.create-report a.b').css('display', 'inline-block');
                        $('div.lnb-tools-wrap.create-report a.c').css('display', 'none');
                    }
                });
            });
        });

        // lnb > snapshot
        $('a.lnb-snapshot').on('click', function () {
            $('.lnb-tools-wrap.snap-shot').fadeIn('fast');
        });

        // lnb > add charts click
        $('a.lnb-addcharts').on('click', function () {
            $('.lnb-tools-wrap.add-charts').fadeIn('fast');
        });

        // lnb > navigation tooltip
        $('ul.lnb-nav li').on('mouseenter', function () {
            var thisName = $(this).data('name');
            var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
            toolTipDiv += '<div class="tooltip-container">';
            toolTipDiv += '<div class="tooltip-text animated">';
            toolTipDiv += thisName;
            toolTipDiv += '</div>';
            toolTipDiv += '<div class="tooltip-tip animated"></div>';
            toolTipDiv += '</div>';
            toolTipDiv += '</div>';
            $(this).append(toolTipDiv).delay(500).queue(function (next) {
                $('.tiny-tooltip').fadeIn('fast');
                next();
            });
        });
        $('ul.lnb-nav li').on('mouseleave', function () {
            $('div.tiny-tooltip').remove();
        });

        // document click
        $(document).on('click', function () {
            $('.lnb-content_popup').fadeOut('fast');
        });
        $('.lnb-wrap li, .lnb-content_popup').on('click', function (e) {
            e.stopPropagation();
        });
    },
    // calendar popup date
    calendarPopupDate: function calendarPopupDate() {
        $('.select-area a').on('click', function (e) {
            var optionValues = [];
            var thisOption = $(this).data();
            $(this).siblings().removeClass('on');
            $(this).addClass('on');

            for (var key in thisOption) {
                optionValues.push([key, thisOption[key]]);
            }
            var opt = optionValues[0][0];
            var optv = optionValues[0][1];
            if (opt === 'year') {
                $('div.selected-date p.date > span.year').text(optv);
            } else if (opt === 'month') {
                $('div.selected-date p.date > span.month').text(optv);
            } else if (opt === 'date') {
                $('div.selected-date p.date > span.date').text(optv);
            } else if (opt === 'hour') {
                $('div.selected-date p.time > span.hour').text(optv);
            } else if (opt === 'minute') {
                $('div.selected-date p.time > span.minute').text(optv);
            }
        });
    },

    /**
     * global
     */
    siteResizeResponse: function siteResizeResponse() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        $('.content-wrap').css('width', winWidth - 375);
        $('.device-list').css('height', winHeight - 169);

        $(window).on('resize', function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var realSize = winWidth - 375;
            $('.content-wrap').css('width', realSize);
            $('.device-list').css('height', winHeight - 169);
        });
    }

    // bootstrap modal events
};$('#modalTempSearch').on('shown.bs.modal', function (e) {
    $('#deviceSearchInput').val('').focus().css('opacity', .5);
    $('.search-header input').on('keydown', function () {
        $(this).css('opacity', 1);
    });
});

// after loaded execute
window.onload = function () {
    PJT.loginInit();
    PJT.siteResizeResponse();
    PJT.utilsAliveLinks();
};