'use strict';

var GLOBAL = {
    state: {
        filter: false
    },
    utilsAliveLinks: function utilsAliveLinks() {},

    // selectBox option show (셀렉트 박스가 변경된다면 필요 없음)
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

    /**
     * global
     */
    // 브라우져 리사이즈 시 영역확보 및 조정
    siteResizeResponse: function siteResizeResponse() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        $('.content-wrap').css('width', winWidth - 375);
        $('.device-list').css('height', winHeight - 169);
        $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);

        $(window).on('resize', function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var realSize = winWidth - 375;
            $('.content-wrap').css('width', realSize);
            $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);

            if (!GLOBAL.state.filter) {
                // is filter open
                $('.device-list').css('height', winHeight - 169);
            } else {
                $('.device-list').css('height', winHeight - 290);
            }
        });
    }

    // 바탕화면 클릭 시, 열려있는 팝업등에 대한 닫기 처리 (팝업을 열때마다 호출)
};function openPopCloseEvent() {
    $(document).on('click', function () {
        $('.lnb-content_popup, .select-wrap div.options, .grid_select-option').fadeOut('fast');
        $('.device-list div.device-inner').removeClass('on');
    });
    $('.lnb-wrap li, .lnb-content_popup, .select-wrap, .select-wrap div.options, .device-wrap a.device-remove, .device-wrap a.remove').on('click', function (e) {
        e.stopPropagation();
    });
}