let PJT = {
    /**
     * Intro & login
     */
    loginInit: function() {
        this.introAnimationStart();
    },
    introAnimationStart: function() {
        const el = document.getElementById('sequenceArea');
        if(el != null) {
            el.addEventListener('click', function() {
                PJT.loadImageRandom();
                document.getElementsByClassName('intro-bg')[0].classList.add('on');
            }, false);

            let sequenceStart;
            let position = 250;
            const interval = 25;
            const diff = 250;
            const sequencesize = 2500;
            if(sequenceStart == 1) {
                sequenceStart = setInterval(() => {
                    document.getElementById('sequenceArea').style.backgroundPosition = `-${position}px 0px`;
                    if(position < sequencesize) {
                        position = position + diff;
                    }
                    else {
                        position = 250;
                        clearInterval(sequenceStart);
                        document.getElementById('sequenceArea').addEventListener('click', function() {
                            PJT.loadImageRandom();
                            document.getElementsByClassName('intro-bg')[0].classList.add('on');
                        }, false);

                    }
                }, interval);
            }
        }
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
    },
    scrollPlugIn: function() {
        
    },
    utilsAliveLinks: function() {
        // header > monitoring link
        const header = document.querySelector('header');
        const headerSelect = header.querySelectorAll('a.header-monitor, header .product-btn');

        headerSelect.forEach(function(obj) {
            obj.addEventListener('mouseover', function() {
                document.querySelector('header .product-btn').classList.add('on');
            }, false);
            obj.addEventListener('mouseout', function() {
                document.querySelector('header .product-btn').classList.remove('on');
            }, false);
        });

        // header > profile show hide
        const personalSelect = header.querySelectorAll('a.profile-show-hide, div.personal-list-wrap');

        personalSelect.forEach(function(obj) {
            obj.addEventListener('mouseover', function() {
                // document.querySelector('div.personal-list-wrap').classList.add('on');
                document.querySelector('div.personal-list-wrap').style.display = 'block';
            }, false);
            obj.addEventListener('mouseout', function() {
                // document.querySelector('div.personal-list-wrap').classList.remove('on');
                document.querySelector('div.personal-list-wrap').style.display = 'none';
            }, false);
        });

        // // header > notice show hide
        // $('a.notice-show-hide, div.notice-list-wrap').on('mouseenter', function() {
        //     $('div.notice-list-wrap').stop().fadeIn(300);
        // });
        // $('a.notice-show-hide, div.notice-list-wrap').on('mouseleave', function() {
        //     $('div.notice-list-wrap').stop().fadeOut(300);
        // });

        // // lnb > calendar click
        // $('a.lnb-calendar').on('click', function() {
        //     $('.lnb-tools-wrap.calendar').fadeIn('fast');
        // });

        // // lnb > create a report
        // $('a.lnb-createreport').on('click', function() {
        //     $('.lnb-tools-wrap.create-report').fadeIn('fast', function() {
        //         $('input.create-report-email').on('keyup', function(e) {
        //             if($(this).val() !== '') {
        //                 $('div.lnb-tools-wrap.create-report a.b').css('display','none');
        //                 $('div.lnb-tools-wrap.create-report a.c').css('display','inline-block');
        //             }
        //             else {
        //                 $('div.lnb-tools-wrap.create-report a.b').css('display','inline-block');
        //                 $('div.lnb-tools-wrap.create-report a.c').css('display','none');
        //             }
        //         });
        //     });
        // });

        // // lnb > add charts click
        // $('a.lnb-addcharts').on('click', function() {
        //     $('.lnb-tools-wrap.add-charts').fadeIn('fast');
        // });

        // // lnb > navigation tooltip
        // $('ul.lnb-nav li').on('mouseenter', function() {
        //     var thisName = $(this).data('name');
        //     var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
        //         toolTipDiv += '<div class="tooltip-container">';
        //         toolTipDiv += '<div class="tooltip-text animated">';
        //         toolTipDiv += thisName;
        //         toolTipDiv += '</div>';
        //         toolTipDiv += '<div class="tooltip-tip animated"></div>';
        //         toolTipDiv += '</div>';
        //         toolTipDiv += '</div>';
        //     $(this).append(toolTipDiv).delay(500).queue(function(next){
        //         $('.tiny-tooltip').fadeIn('fast');
        //         next();
        //     });
        // });
        // $('ul.lnb-nav li').on('mouseleave', function() {
        //     $('div.tiny-tooltip').remove();
        // });

        // // document click
        // $(document).on('click', function() {
        //     $('.lnb-content_popup').fadeOut('fast');
        // });
        // $('.lnb-wrap li, .lnb-content_popup').on('click', function(e) {
        //     e.stopPropagation();
        // });
    },

    /**
     * global
     */
    siteResizeResponse: function() {
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        document.getElementsByClassName('content-wrap')[0].style.width = (winWidth-375) + 'px';
        document.getElementsByClassName('device-list')[0].style.height = (winHeight-169) + 'px';
        window.addEventListener('resize', function() {
            console.log('test');
            let winWidth = window.innerWidth;
            let winHeight = window.innerHeight;
            let realSize = winWidth - 375;
            document.getElementsByClassName('content-wrap')[0].style.width = realSize + 'px';
            document.getElementsByClassName('device-list')[0].style.height = (winHeight-169) + 'px';
        }, false);
    },

}

// bootstrap modal events
// $('#modalTempSearch').on('shown.bs.modal', function(e) {
//     $('#deviceSearchInput').val('').focus().css('opacity', .5);
//     $('.search-header input').on('keydown', function() {
//         $(this).css('opacity', 1);
//     });
// });

// after loaded execute
window.onload = function() {
    PJT.loginInit();
    PJT.siteResizeResponse();
    PJT.utilsAliveLinks();
};