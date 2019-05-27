let LNB = {
    utilsAliveLinks: function() {
        // lnb > calendar click
        $('a.lnb-calendar').on('click', function() {
            $('.lnb-tools-wrap.calendar').fadeIn('fast', function() {
                $('.lnb-tools-wrap.calendar div.from-date p.date').on('click', function() {
                    $('div.calendar-popup-date').fadeIn('fast');
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
    },
}

LNB.utilsAliveLinks();