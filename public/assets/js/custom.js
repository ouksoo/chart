'use strict';

var PJT = {
    init: function init() {
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
        var imageClass = ['type-1', 'type-2', 'type-3'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn('slow', function () {
            $('header, footer').addClass('on');
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function loginKeyCheck() {
        $('.login-wrap input').on('keydown', function (e) {
            if ($('#userid').val() !== '' && $('#passwd').val() !== '') {
                $('.login-wrap a.login-button').fadeIn('slow');
            }
        });
    }

    // after loaded execute
};window.onload = function () {
    PJT.init();
    PJT.loginKeyCheck();
};