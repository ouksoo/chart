let PJT = {
    state: {
        filter: false
    },
    /**
     * Intro & login
     */
    loginInit: function() {
        this.introAnimationStart();
    },
    introAnimationStart: function() {
        $('#sequenceArea').on('click', function() {
            PJT.loadImageRandom();
            $('.intro-bg').fadeOut('slow');
        });

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
                    $('#sequenceArea').on('click', function() {
                        PJT.loadImageRandom();
                        $('.intro-bg').fadeOut('slow');
                    });
                }
            }, interval);
        }
    },
    loadImageRandom: function() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function() {
            $('.login-header, .login-footer').addClass('on');
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
        // login button 
        $('a.login-button').on('click', function() {
            $('div.gate-wrapper').fadeOut('fast');
            return false;
        });

        // header > monitoring link
        $('a.header-monitor, header .product-btn').on('mouseenter', function() {
            $('header .product-btn').addClass('on');
        });
        $('a.header-monitor, header .product-btn').on('mouseleave', function() {
            $('header .product-btn').removeClass('on');
        });

        // header > profile show hide
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseenter', function() {
            $('div.personal-list-wrap').stop().fadeIn('fast');
        });
        $('a.profile-show-hide, div.personal-list-wrap').on('mouseleave', function() {
            $('div.personal-list-wrap').stop().fadeOut('fast');
        });

        // header > notice show hide
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseenter', function() {
            $('div.notice-list-wrap').stop().fadeIn(300);
        });
        $('a.notice-show-hide, div.notice-list-wrap').on('mouseleave', function() {
            $('div.notice-list-wrap').stop().fadeOut(300);
        });

        // lnb > calendar click
        $('a.lnb-calendar').on('click', function() {
            $('.lnb-tools-wrap.calendar').fadeIn('fast', function() {
                $('.lnb-tools-wrap.calendar div.from-date p.date').on('click', function() {
                    $('div.calendar-popup-date').fadeIn('fast');
                    PJT.calendarPopupDate();
                    $('div.calendar-popup-date div.inner a.close').on('click', function() {
                        $('div.calendar-popup-date').fadeOut();
                    })
                });
            });
        });

        // lnb > create a report
        $('a.lnb-createreport').on('click', function() {
            $('.lnb-tools-wrap.create-report').fadeIn('fast', function() {
                $('input.create-report-email').on('keyup', function(e) {
                    if($(this).val() !== '') {
                        $('div.lnb-tools-wrap.create-report a.b').css('display','none');
                        $('div.lnb-tools-wrap.create-report a.c').css('display','inline-block');
                    }
                    else {
                        $('div.lnb-tools-wrap.create-report a.b').css('display','inline-block');
                        $('div.lnb-tools-wrap.create-report a.c').css('display','none');
                    }
                });
            });
        });

        // lnb > snapshot
        $('a.lnb-snapshot').on('click', function() {
            $('.lnb-tools-wrap.snap-shot').fadeIn('fast');
        });

        // lnb > add charts click
        $('a.lnb-addcharts').on('click', function() {
            $('.lnb-tools-wrap.add-charts').fadeIn('fast');
        });

        // lnb > navigation tooltip
        $('ul.lnb-nav li').on('mouseenter', function() {
            var thisName = $(this).data('name');
            var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
                toolTipDiv += '<div class="tooltip-container">';
                toolTipDiv += '<div class="tooltip-text animated">';
                toolTipDiv += thisName;
                toolTipDiv += '</div>';
                toolTipDiv += '<div class="tooltip-tip animated"></div>';
                toolTipDiv += '</div>';
                toolTipDiv += '</div>';
            $(this).append(toolTipDiv).delay(500).queue(function(next){
                $('.tiny-tooltip').fadeIn('fast');
                next();
            });
        });
        $('ul.lnb-nav li').on('mouseleave', function() {
            $('div.tiny-tooltip').remove();
        });

        // device filter
        $('.device-filter a').on('click', function() {
            var deviceListHeight = $('.device-list').height();
            $('.device-wrap div.filter-options').addClass('on');
            $('.device-list').css('height', deviceListHeight - 121);
            PJT.state.filter = true;

            $('.filter-options > .option a').on('click', function() {
                if($(this).hasClass('clear-all')) {
                    $('.filter-options > .option a').removeClass('on');
                }
                else { 
                    $(this).toggleClass('on');
                } 
            });
        });

        // device list
        $('.device-wrap a.device-add').on('click', function() {
            $('#addDeviceList').fadeIn('fast');
        });
        $('.device-wrap a.device-remove').on('click', function() {
            $('.device-wrap div.device-inner').addClass('on');
        });

        // device inventory search
        $('.device-inventory-wrap a.search').on('click', function() {
            $('.device-inventory-wrap .search-input').addClass('on');
            $('.device-inventory-wrap .inventory-search').addClass('on').focus();
        });

        // device inventory filter clear all
        $('.inventory-filter li span.clear-all').on('click', function() {
            $('.inventory-filter li.add-filters').remove();
        });

        // device inventory navigation
        $('.device-inventory-wrap .navigation a').on('click', function() {
            $('.device-inventory-wrap .navigation a').each(function() {
                $(this).removeClass('on');
            })
            $(this).addClass('on');
        });

        // default full popup close
        $('.default_full-popup a.close').on('click', function() {
            $('.default_full-popup').fadeOut('fast');
        });

        // document click
        $(document).on('click', function() {
            $('.lnb-content_popup, .select-wrap div.options, .grid_select-option').fadeOut('fast');
            $('.device-list div.device-inner').removeClass('on');
        });
        $('.lnb-wrap li, .lnb-content_popup, .select-wrap, .select-wrap div.options, .device-wrap a.device-remove, .device-wrap a.remove').on('click', function(e) {
            e.stopPropagation();
        });
    },
    // calendar popup date
    calendarPopupDate: function() {
        $('.select-area a').on('click', function(e) {
            let optionValues = [];
            let thisOption = $(this).data();
            $(this).siblings().removeClass('on');
            $(this).addClass('on');

            for (var key in thisOption) {
                optionValues.push([key, thisOption[key]]);
            }
            const opt = optionValues[0][0];
            const optv = optionValues[0][1];
            if(opt === 'year') {
                $('div.selected-date p.date > span.year').text(optv);
            }
            else if(opt === 'month') {
                $('div.selected-date p.date > span.month').text(optv);
            }
            else if(opt === 'date') {
                $('div.selected-date p.date > span.date').text(optv);
            }
            else if(opt === 'hour') {
                $('div.selected-date p.time > span.hour').text(optv);
            }
            else if(opt === 'minute') {
                $('div.selected-date p.time > span.minute').text(optv);
            }
        });
    },
    // selectBox option show
    selectOptionsForm: function() {
        $('.select_data-options').on('click', function(e) {
            $(this).next().fadeIn(function() {
                const thisOptions = $(e.target).next('.options');
                let thisValue = $(thisOptions).children().children();
                thisValue.each(function() {
                    $(this).children().on('click', function(evt) {
                        let thisV = $(this).data('value');
                        $(this).parents('.options').siblings('.select_data-options').val(thisV);
                        $(this).parents('.options').fadeOut('fast');
                        evt.preventDefault();
                    });
                }); 
            });
        });

        // grid options
        $('a.grid_select-options').on('click', function(e) {
            $('.grid_select-option').fadeOut();            
            $(this).next().fadeIn();
            e.stopPropagation();
            return false;
        });
        $('.grid_select-option').on('click', function(e) {
            e.stopPropagation();
        });
    },
    // device inventory add filter
    deviceInventoryFilter: function() {
        $('div.inventory-filter').slideDown();
        let inner = '<li class="add-filters"><span class="cs-btn"><span>TYPE - Cloud Server</span> <a href="#" class="remove">remove</a></span></li>';
        $('div.inventory-filter ul').prepend(inner);
    },

    /**
     * global
     */
    siteResizeResponse: function() {
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        $('.content-wrap').css('width', winWidth-375);
        $('.device-list').css('height', winHeight-169);
        $('div.full-popup-wrap div.inner h2').css('width', winWidth-40);

        $(window).on('resize', function() {
            let winWidth = $(window).width();
            let winHeight = $(window).height();
            let realSize = winWidth - 375;
            $('.content-wrap').css('width', realSize);
            $('div.full-popup-wrap div.inner h2').css('width', winWidth-40);

            if(!PJT.state.filter) { // is filter open
                $('.device-list').css('height', winHeight-169);
            }
            else {
                $('.device-list').css('height', winHeight-290);
            }            
        });
    },

}

// bootstrap modal events
$('#modalTempSearch').on('shown.bs.modal', function(e) {
    $('#deviceSearchInput').val('').focus().css('opacity', .5);
    $('.search-header input').on('keydown', function() {
        $(this).css('opacity', 1);
    });
});

// after loaded execute
window.onload = function() {
    PJT.loginInit();
    PJT.siteResizeResponse();
    PJT.utilsAliveLinks();
    PJT.selectOptionsForm();
};