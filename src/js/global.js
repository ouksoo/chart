let GLOBAL = {
    state: {
        filter: false
    },
    utilsAliveLinks: function() {

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
    
    /**
     * global
     */
    // 브라우져 리사이즈 시 영역확보 및 조정
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

            if(!GLOBAL.state.filter) { // is filter open
                $('.device-list').css('height', winHeight-169);
            }
            else {
                $('.device-list').css('height', winHeight-290);
            }            
        });
    },
}


