'use strict';

var GATE = {
    // 영상대체 시퀀스
    introAnimationStart: function introAnimationStart() {
        $('#sequenceArea').on('click', function () {
            GATE.loadImageRandom();
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
                        GATE.loadImageRandom();
                        $('.intro-bg').fadeOut('slow');
                    });
                }
            }, interval);
        }
    },
    // 로그인 배경이미지 렌덤
    loadImageRandom: function loadImageRandom() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function () {
            $('.login-header, .login-footer').addClass('on');
            $('.login-wrap input#userId').focus();
            GATE.loginKeyCheck();
        });
    },
    // 아이디,페스워드 입력 시 로그인버튼 출력
    loginKeyCheck: function loginKeyCheck() {
        $('.login-wrap input').on('keyup', function (e) {
            if ($('#userId').val() !== '' && $('#passWd').val() !== '') {
                $('.login-wrap .form-wrap, a.login-button').addClass('on');
            } else {
                $('.login-wrap .form-wrap, a.login-button').removeClass('on');
            }
        });

        // login button 
        $('a.login-button').on('click', function () {
            $('div.gate-wrapper').fadeOut('fast');
            return false;
        });
    }
};

GATE.introAnimationStart();