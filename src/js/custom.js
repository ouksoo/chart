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
        var imageClass = ['type-1', 'type-2', 'type-3'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn('slow', function() {
            $('header, footer').addClass('on');
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function() {
        $('.login-wrap input').on('keydown', function(e) {
            if($('#userid').val() !== '' && $('#passwd').val() !== '') {
                $('.login-wrap a.login-button').fadeIn('slow');
            }
        });
    }
}


// after loaded execute
window.onload = function() {
    PJT.init(); 
    PJT.loginKeyCheck();
};