let DEVICE = {
    utilsAliveLinks: function() {
        // device filter
        $('.device-filter a').on('click', function() {
            var deviceListHeight = $('.device-list').height();
            $('.device-wrap div.filter-options').addClass('on');
            $('.device-list').css('height', deviceListHeight - 121);
            GLOBAL.state.filter = true;

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
    },
}

DEVICE.utilsAliveLinks();