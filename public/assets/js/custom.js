'use strict';

var PJT = {
    /**
     * Intro & login
     */
    loginInit: function loginInit() {
        this.introAnimationStart();
    },
    introAnimationStart: function introAnimationStart() {
        var sequenceStart = void 0;
        var position = 250;
        var interval = 25;
        var diff = 250;
        var sequencesize = 2500;
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
    }

    // after loaded execute
};window.onload = function () {
    PJT.loginInit();
};