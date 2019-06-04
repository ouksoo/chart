'use strict';

var PJT = {
    state: {
        filter: false
    },
    /**
     * Intro & login
     */
    loginInit: function loginInit() {
        this.introAnimationStart();
    },
    introAnimationStart: function introAnimationStart() {
        var sequenceStart = 1;
        var position = 0;
        var interval = 25;
        var diff = 181;
        var sequencesize = 26600;
        if (sequenceStart == 1) {
            sequenceStart = setInterval(function () {
                document.getElementById('sequenceArea').style.backgroundPosition = '0px -' + position + 'px';
                if (position < sequencesize) {
                    position = position + diff;
                } else {
                    position = 0;
                    clearInterval(sequenceStart);
                }
            }, interval);
        }
    },
    skipIntroAnimation: function skipIntroAnimation() {
        PJT.loadImageRandom();
        $('.intro-bg').fadeOut('slow');
    },
    loadImageRandom: function loadImageRandom() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function () {
            $('.login-header, .login-footer').addClass('on');
            $('.login-wrap input#userId').focus();
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function loginKeyCheck() {
        if ($('#userId').val() !== '' && $('#passWd').val() !== '') {
            $('.login-wrap .form-wrap, a.login-button').addClass('on');
        } else {
            $('.login-wrap .form-wrap, a.login-button').removeClass('on');
        }
    },
    scrollPlugIn: function scrollPlugIn() {},
    loginButtonSubmit: function loginButtonSubmit() {
        $('div.gate-wrapper').fadeOut('fast');
        return false;
    },
    headerMonitoryShow: function headerMonitoryShow() {
        $('header .product-btn').addClass('on');
    },
    headerMonitoryHide: function headerMonitoryHide() {
        $('header .product-btn').removeClass('on');
    },
    headerProfileShow: function headerProfileShow() {
        $('div.personal-list-wrap').stop().fadeIn('fast');
    },
    headerProfileHide: function headerProfileHide() {
        $('div.personal-list-wrap').stop().fadeOut('fast');
    },
    headerNoticeShow: function headerNoticeShow() {
        $('div.notice-list-wrap').stop().fadeIn(300);
    },
    headerNoticeHide: function headerNoticeHide() {
        $('div.notice-list-wrap').stop().fadeOut(300);
    },
    lnbCalendarShow: function lnbCalendarShow() {
        $('.lnb-tools-wrap.calendar').fadeIn('fast');
    },
    lnbCreateReportShow: function lnbCreateReportShow() {
        $('.lnb-tools-wrap.create-report').fadeIn('fast');
    },
    lnbCreateReportEmail: function lnbCreateReportEmail() {
        if ($('#reportEmail').val() !== '') {
            $('div.lnb-tools-wrap.create-report a.b').css('display', 'none');
            $('div.lnb-tools-wrap.create-report a.c').css('display', 'inline-block');
        } else {
            $('div.lnb-tools-wrap.create-report a.b').css('display', 'inline-block');
            $('div.lnb-tools-wrap.create-report a.c').css('display', 'none');
        }
    },
    lnbSnapShot: function lnbSnapShot() {
        $('.lnb-tools-wrap.snap-shot').fadeIn('fast');
    },
    lnbAddChart: function lnbAddChart() {
        $('.lnb-tools-wrap.add-charts').fadeIn('fast');
    },
    lnbMouseEnter: function lnbMouseEnter(obj) {
        var thisName = $(obj).data('name');
        var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
        toolTipDiv += '<div class="tooltip-container">';
        toolTipDiv += '<div class="tooltip-text animated">';
        toolTipDiv += thisName;
        toolTipDiv += '</div>';
        toolTipDiv += '<div class="tooltip-tip animated"></div>';
        toolTipDiv += '</div>';
        toolTipDiv += '</div>';
        $(obj).append(toolTipDiv).delay(500).queue(function (next) {
            $('.tiny-tooltip').fadeIn('fast');
            next();
        });
    },
    lnbMouseLeave: function lnbMouseLeave() {
        $('div.tiny-tooltip').remove();
    },
    deviceFilterShow: function deviceFilterShow() {
        var deviceListHeight = $('.device-list').height();
        $('.device-wrap div.filter-options').addClass('on');
        $('.device-list').css('height', deviceListHeight - 121);
        PJT.state.filter = true;
        $('.filter-options > .option a').on('click', function () {
            if ($(this).hasClass('clear-all')) {
                $('.filter-options > .option a').removeClass('on');
            } else {
                $(this).toggleClass('on');
            }
        });
    },
    deviceAddList: function deviceAddList() {
        $('#addDeviceList').fadeIn('fast');
    },
    deviceRemoveList: function deviceRemoveList() {
        $('.device-wrap div.device-inner').addClass('on');
    },
    inventorySearch: function inventorySearch() {
        $('.device-inventory-wrap .search-input').addClass('on');
        $('.device-inventory-wrap .inventory-search').addClass('on').focus();
    },
    inventoryFilterClear: function inventoryFilterClear() {
        $('.inventory-filter li.add-filters').remove();
    },
    eventDataDetail: function eventDataDetail() {
        $('#eventMonitoringForce').fadeIn();
    },
    eventDataToolTip: function eventDataToolTip(e) {},

    utilsAliveLinks: function utilsAliveLinks() {
        // document click
        $(document).on('click', function () {
            $('.lnb-content_popup, .select-wrap div.options, .grid_select-option').fadeOut('fast');
            $('.device-list div.device-inner').removeClass('on');
        });
        $('.lnb-wrap li, .lnb-content_popup, .select-wrap, .select-wrap div.options, .device-wrap a.device-remove, .device-wrap a.remove').on('click', function (e) {
            e.stopPropagation();
        });
    },
    // selectBox option show (협의후 변경되면 삭제)
    selectOptionsForm: function selectOptionsForm() {
        $('.select_data-options').on('click', function (e) {
            $(this).next().fadeIn(function () {
                var thisOptions = $(e.target).next('.options');
                var thisValue = $(thisOptions).children().children();
                thisValue.each(function () {
                    $(this).children().on('click', function (evt) {
                        var thisV = $(this).data('value');
                        $(this).parents('.options').siblings('.select_data-options').val(thisV);
                        $(this).parents('.options').fadeOut('fast');
                        evt.preventDefault();
                    });
                });
            });
        });

        // grid options
        $('a.grid_select-options').on('click', function (e) {
            $('.grid_select-option').fadeOut();
            $(this).next().fadeIn();
            e.stopPropagation();
            return false;
        });
        $('.grid_select-option').on('click', function (e) {
            e.stopPropagation();
        });
    },
    // device inventory add filter
    deviceInventoryFilter: function deviceInventoryFilter() {
        $('div.inventory-filter').slideDown();
        var inner = '<li class="add-filters"><span class="cs-btn"><span>TYPE - Cloud Server</span> <a href="#" class="remove">remove</a></span></li>';
        $('div.inventory-filter ul').prepend(inner);
    },
    // event content fix title
    eventFixTitle: function eventFixTitle() {
        $('div.affix-layout').each(function () {
            var $this = $(this);
            var offset = $this.offset().top;
            var scrollTop = $(window).scrollTop() + 200;

            if (scrollTop > offset) {
                $this.addClass('fixed');
            } else {
                $this.removeClass('fixed');
            }
        });
    },
    /**
     * global
     */
    siteResizeResponse: function siteResizeResponse() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var headerEventHeader = 150; // header 와 event 헤더의 높이

        // $('.event-date-list').scroll(PJT.eventFixTitle());
        $('.event-date-list').on('scroll', function () {
            PJT.eventFixTitle();
        });

        $('.content-wrap').css('width', winWidth - 375);
        $('.device-list').css('height', winHeight - 169);
        $('.event-date-list').css('height', winHeight - headerEventHeader);
        $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);

        $(window).on('resize', function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var realSize = winWidth - 375;
            var headerEventHeader = 159; // header 와 event 헤더의 높이

            $('.content-wrap').css('width', realSize);
            $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);
            $('.event-date-list').css('height', winHeight - headerEventHeader);

            if (!PJT.state.filter) {
                // is filter open
                $('.device-list').css('height', winHeight - 169);
            } else {
                $('.device-list').css('height', winHeight - 290);
            }
        });
    }

    // after loaded execute
};window.onload = function () {
    PJT.loginInit();
    PJT.siteResizeResponse();
    PJT.utilsAliveLinks();
    PJT.selectOptionsForm();
};