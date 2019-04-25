let PJT = {
    init: function() {
        this.introAnimationStart();
    },
    introAnimationStart: function() {
        let sequenceStart;
        let position = 250;
        const interval = 25;
        const diff = 250;
        const sequencesize = 2500;
        sequenceStart = setInterval(() => {
            document.getElementById('sequenceArea').style.backgroundPosition = `-${position}px 0px`;
            if(position < sequencesize) {
                position = position + diff;
            }
            else {
                position = 250;
                clearInterval(sequenceStart);
                $('#sequenceArea').on('click', function() {
                    PJT.loadImageRandom();
                    $('.intro-bg').fadeOut('slow');
                });
            }
        }, interval);
    },
    loadImageRandom: function() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function() {
            $('header, footer').addClass('on');
            $('.login-wrap input#userId').focus();
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function() {
        $('.login-wrap input').on('keyup', function(e) {
            if($('#userId').val() !== '' && $('#passWd').val() !== '') {
                $('.login-wrap .form-wrap, a.login-button').addClass('on');
            }
            else {
                $('.login-wrap .form-wrap, a.login-button').removeClass('on');
            }
        });
    }
}


// after loaded execute
window.onload = function() {
    PJT.init(); 
    PJT.loginKeyCheck();
};