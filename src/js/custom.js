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
        let sequenceStart = 1;
        let position = 0;
        const interval = 25;
        const diff = 176;
        const sequencesize = 24640;
        if(sequenceStart == 1) {
            sequenceStart = setInterval(() => {
                document.getElementById('sequenceArea').style.backgroundPosition = `0px -${position}px`;
                if(position < sequencesize) {
                    position = position + diff;
                }
                else {
                    position = 0;
                    clearInterval(sequenceStart);
                }
            }, interval);
        }
    },
    skipIntroAnimation: function() {
        PJT.loadImageRandom();
        $('.intro-bg').fadeOut('slow');
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
        if($('#userId').val() !== '' && $('#passWd').val() !== '') {
            $('.login-wrap .form-wrap, a.login-button').addClass('on');
        }
        else {
            $('.login-wrap .form-wrap, a.login-button').removeClass('on');
        }
    },
    scrollPlugIn: function() {
        
    },
    loginButtonSubmit: function() {
        $('div.gate-wrapper').fadeOut('fast');
        return false;
    },
    headerMonitoryShow: function() {
        $('header .product-btn').addClass('on');
    },
    headerMonitoryHide: function() {
        $('header .product-btn').removeClass('on');
    },
    headerProfileShow: function() {
        $('div.personal-list-wrap').stop().fadeIn('fast');
    },
    headerProfileHide: function() {
        $('div.personal-list-wrap').stop().fadeOut('fast');
    },
    headerNoticeShow: function() {
        $('div.notice-list-wrap').stop().fadeIn(300);
    },
    headerNoticeHide: function() {
        $('div.notice-list-wrap').stop().fadeOut(300);
    },
    lnbCalendarShow: function() {
        $('.lnb-tools-wrap.calendar').fadeIn('fast');
        openPopCloseEvent();
    },
    lnbCreateReportShow: function() {
        $('.lnb-tools-wrap.create-report').fadeIn('fast');
        openPopCloseEvent();
    },
    lnbCreateReportEmail: function() {
        if($('#reportEmail').val() !== '') {
            $('div.lnb-tools-wrap.create-report a.b').css('display','none');
            $('div.lnb-tools-wrap.create-report a.c').css('display','inline-block');
        }
        else {
            $('div.lnb-tools-wrap.create-report a.b').css('display','inline-block');
            $('div.lnb-tools-wrap.create-report a.c').css('display','none');
        }
        openPopCloseEvent();
    },
    lnbSnapShot: function() {
        $('.lnb-tools-wrap.snap-shot').fadeIn('fast');
        openPopCloseEvent();
    },
    lnbAddChart: function() {
        $('.lnb-tools-wrap.add-charts').fadeIn('fast');
        openPopCloseEvent();
    },
    lnbMouseEnter: function(obj) {
        var thisName = $(obj).data('name');
        var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
            toolTipDiv += '<div class="tooltip-container">';
            toolTipDiv += '<div class="tooltip-text animated">';
            toolTipDiv += thisName;
            toolTipDiv += '</div>';
            toolTipDiv += '<div class="tooltip-tip animated"></div>';
            toolTipDiv += '</div>';
            toolTipDiv += '</div>';
        $(obj).append(toolTipDiv).delay(500).queue(function(next){
            $('.tiny-tooltip').fadeIn('fast');
            next();
        });
    },
    lnbMouseLeave: function() {
        $('div.tiny-tooltip').remove();
    },
    deviceFilterShow: function() {
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
    },
    deviceAddList: function() {
        $('#addDeviceList').fadeIn('fast');
    },
    deviceRemoveList: function() {
        $('.device-wrap div.device-inner').addClass('on');
    },
    inventorySearch: function() {
        $('.device-inventory-wrap .search-input').addClass('on');
        $('.device-inventory-wrap .inventory-search').addClass('on').focus();
    },
    inventoryFilterClear: function() {
        $('.inventory-filter li.add-filters').remove();
    },
    eventDataDetail: function() {
        $('#eventMonitoringForce').fadeIn();
    },
    eventDataToolTip: function(e) {
        
    },
    // selectBox option show (협의후 변경되면 삭제)
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
    // event content fix title
    eventFixTitle: function() {
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
    siteResizeResponse: function() {
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        let headerEventHeader = 150; // header 와 event 헤더의 높이

        // $('.event-date-list').scroll(PJT.eventFixTitle());
        $('.event-date-list').on('scroll', function() {
            PJT.eventFixTitle();
        });

        $('.content-wrap').css('width', winWidth-375);
        $('.device-list').css('height', winHeight-169);
        $('.report-list').css('height', winHeight-140);
        $('.report-detail').css({
            'width': winWidth - 720
        });
        $('.report-detail .detail-wrap').css({
            'width': winWidth - 720,
            'height': winHeight-140
        });
        $('.event-date-list').css('height', winHeight - headerEventHeader);
        $('div.full-popup-wrap div.inner h2').css('width', winWidth-40);

        $(window).on('resize', function() {
            let winWidth = $(window).width();
            let winHeight = $(window).height();
            let realSize = winWidth - 375;
            let headerEventHeader = 159; // header 와 event 헤더의 높이

            $('.content-wrap').css('width', realSize);
            $('div.full-popup-wrap div.inner h2').css('width', winWidth-40);
            $('.event-date-list').css('height', winHeight - headerEventHeader);

            if(!PJT.state.filter) { // is filter open
                $('.device-list').css('height', winHeight-169);
            }
            else {
                $('.device-list').css('height', winHeight-290);
            }            
            $('.report-list').css('height', winHeight-140);
            $('.report-detail').css({
                'width': winWidth - 720
            });
            $('.report-detail .detail-wrap').css({
                'width': winWidth - 720,
                'height': winHeight-140
            });
        });
    },
}


// 바탕화면 클릭 시, 열려있는 팝업등에 대한 닫기 처리 (팝업을 열때마다 호출)
function openPopCloseEvent() {
    $(document).on('click', function() {
        $('.lnb-content_popup, .select-wrap div.options, .grid_select-option').fadeOut('fast');
        $('.device-list div.device-inner').removeClass('on');
    });
    $('.lnb-wrap li, .lnb-content_popup, .select-wrap, .select-wrap div.options, .device-wrap a.device-remove, .device-wrap a.remove').on('click', function(e) {
        e.stopPropagation();
    });
}

// after loaded execute
window.onload = function() {
    // PJT.loginInit();
    PJT.siteResizeResponse();
    // PJT.utilsAliveLinks();
    PJT.selectOptionsForm();
};
