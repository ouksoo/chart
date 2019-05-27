'use strict';

var HEADER = {
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
    }
};

HEADER.utilsAliveLinks();