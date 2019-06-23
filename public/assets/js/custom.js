'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PJT = {
    state: {
        filter: false
    },
    /**
     * Intro & login
     */
    loginInit: function loginInit() {
        this.introAnimationStart();
    },
    introAnimationStart: function introAnimationStart() {
        var sequenceStart = 1;
        var position = 0;
        var interval = 25;
        var diff = 176;
        var sequencesize = 24640;
        if (sequenceStart == 1) {
            sequenceStart = setInterval(function () {
                document.getElementById('sequenceArea').style.backgroundPosition = '0px -' + position + 'px';
                if (position < sequencesize) {
                    position = position + diff;
                } else {
                    position = 0;
                    clearInterval(sequenceStart);
                }
            }, interval);
        }
    },
    skipIntroAnimation: function skipIntroAnimation() {
        PJT.loadImageRandom();
        $('.intro-bg').fadeOut('slow');
    },
    loadImageRandom: function loadImageRandom() {
        var imageClass = ['type-1'];
        $('.image-bg').addClass(imageClass[Math.floor(Math.random() * imageClass.length)]).addClass('on');
        $('.login-wrap').fadeIn(1500, function () {
            $('.login-header, .login-footer').addClass('on');
            $('.login-wrap input#userId').focus();
            PJT.loginKeyCheck();
        });
    },
    loginKeyCheck: function loginKeyCheck() {
        if ($('#userId').val() !== '' && $('#passWd').val() !== '') {
            $('.login-wrap .form-wrap, a.login-button').addClass('on');
        } else {
            $('.login-wrap .form-wrap, a.login-button').removeClass('on');
        }
    },
    scrollPlugIn: function scrollPlugIn() {},
    loginButtonSubmit: function loginButtonSubmit() {
        $('div.gate-wrapper').fadeOut('fast');
        return false;
    },
    headerMonitoryShow: function headerMonitoryShow() {
        $('header .product-btn').addClass('on');
    },
    headerMonitoryHide: function headerMonitoryHide() {
        $('header .product-btn').removeClass('on');
    },
    headerProfileShow: function headerProfileShow() {
        $('div.personal-list-wrap').stop().fadeIn('fast');
    },
    headerProfileHide: function headerProfileHide() {
        $('div.personal-list-wrap').stop().fadeOut('fast');
    },
    headerNoticeShow: function headerNoticeShow() {
        $('div.notice-list-wrap').stop().fadeIn(300);
    },
    headerNoticeHide: function headerNoticeHide() {
        $('div.notice-list-wrap').stop().fadeOut(300);
    },
    lnbMonitoringShow: function lnbMonitoringShow() {
        openPopCloseEvent();
        $('div.event-list-wrap, div.report-list-wrap').fadeOut('fast');
        $('div.device-inventory-wrap').fadeIn('fast');
        $('div.content-wrap').addClass('wide-wrapper');
        $('div.lnb-wrap, div.device-wrap').css('display', 'none');
    },
    lnbEventShow: function lnbEventShow() {
        openPopCloseEvent();
        $('div.device-inventory-wrap, div.report-list-wrap').fadeOut('fast');
        $('div.event-list-wrap').fadeIn('fast');
        $('div.lnb-wrap, div.device-wrap').css('display', 'block');
    },
    lnbReportShow: function lnbReportShow() {
        openPopCloseEvent();
        $('div.device-inventory-wrap, div.event-list-wrap').fadeOut('fast');
        $('div.report-list-wrap').fadeIn('fast');
        $('div.lnb-wrap, div.device-wrap').css('display', 'block');
    },
    lnbCalendarShow: function lnbCalendarShow() {
        openPopCloseEvent();
        $('.lnb-tools-wrap.calendar').fadeIn('fast');
    },
    lnbCreateReportShow: function lnbCreateReportShow() {
        openPopCloseEvent();
        $('.lnb-tools-wrap.create-report').fadeIn('fast');
    },
    lnbCreateReportEmail: function lnbCreateReportEmail() {
        openPopCloseEvent();
        if ($('#reportEmail').val() !== '') {
            $('div.lnb-tools-wrap.create-report a.b').css('display', 'none');
            $('div.lnb-tools-wrap.create-report a.c').css('display', 'inline-block');
        } else {
            $('div.lnb-tools-wrap.create-report a.b').css('display', 'inline-block');
            $('div.lnb-tools-wrap.create-report a.c').css('display', 'none');
        }
    },
    lnbSnapShot: function lnbSnapShot() {
        openPopCloseEvent();
        $('.lnb-tools-wrap.snap-shot').fadeIn('fast');
    },
    lnbAddChart: function lnbAddChart() {
        openPopCloseEvent();
        $('.lnb-tools-wrap.add-charts').fadeIn('fast');
    },
    lnbMouseEnter: function lnbMouseEnter(obj) {
        var thisName = $(obj).data('name');
        var toolTipDiv = '<div class="tiny-tooltip" style="display: none;">';
        toolTipDiv += '<div class="tooltip-container">';
        toolTipDiv += '<div class="tooltip-text animated">';
        toolTipDiv += thisName;
        toolTipDiv += '</div>';
        toolTipDiv += '<div class="tooltip-tip animated"></div>';
        toolTipDiv += '</div>';
        toolTipDiv += '</div>';
        $(obj).append(toolTipDiv).delay(500).queue(function (next) {
            $('.tiny-tooltip').fadeIn('fast');
            next();
        });
    },
    lnbMouseLeave: function lnbMouseLeave() {
        $('div.tiny-tooltip').remove();
    },
    deviceFilterShow: function deviceFilterShow() {
        var deviceListHeight = $('.device-list').height();
        $('.device-wrap div.filter-options').addClass('on');
        $('.device-list').css('height', deviceListHeight - 121);
        PJT.state.filter = true;
        $('.filter-options > .option a').on('click', function () {
            if ($(this).hasClass('clear-all')) {
                $('.filter-options > .option a').removeClass('on');
            } else {
                $(this).toggleClass('on');
            }
        });
    },
    deviceAddList: function deviceAddList() {
        $('#addDeviceList').fadeIn('fast');
    },
    deviceRemoveList: function deviceRemoveList() {
        $('.device-wrap div.device-inner').addClass('on');
    },
    inventorySearch: function inventorySearch() {
        $('.device-inventory-wrap .search-input').addClass('on');
        $('.device-inventory-wrap .inventory-search').addClass('on').focus();
    },
    inventoryFilterClear: function inventoryFilterClear() {
        $('.inventory-filter li.add-filters').remove();
    },
    eventDataDetail: function eventDataDetail() {
        $('#eventMonitoringForce').fadeIn();
    },
    eventDataToolTip: function eventDataToolTip(e) {},
    // selectBox option show (협의후 변경되면 삭제)
    selectOptionsForm: function selectOptionsForm() {
        $('.select_data-options').on('click', function (e) {
            $(this).next().fadeIn(function () {
                var thisOptions = $(e.target).next('.options');
                var thisValue = $(thisOptions).children().children();
                thisValue.each(function () {
                    $(this).children().on('click', function (evt) {
                        var thisV = $(this).data('value');
                        $(this).parents('.options').siblings('.select_data-options').val(thisV);
                        $(this).parents('.options').fadeOut('fast');
                        evt.preventDefault();
                    });
                });
            });
        });

        // grid options
        $('a.grid_select-options').on('click', function (e) {
            $('.grid_select-option').fadeOut();
            $(this).next().fadeIn();
            e.stopPropagation();
            return false;
        });
        $('.grid_select-option').on('click', function (e) {
            e.stopPropagation();
        });
    },
    // device inventory add filter
    deviceInventoryFilter: function deviceInventoryFilter() {
        $('div.inventory-filter').slideDown();
        var inner = '<li class="add-filters"><span class="cs-btn"><span>TYPE - Cloud Server</span> <a href="#" class="remove">remove</a></span></li>';
        $('div.inventory-filter ul').prepend(inner);
    },
    // event content fix title
    eventFixTitle: function eventFixTitle() {
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
    siteResizeResponse: function siteResizeResponse() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var headerEventHeader = 150; // header 와 event 헤더의 높이

        // $('.event-date-list').scroll(PJT.eventFixTitle());
        $('.event-date-list').on('scroll', function () {
            PJT.eventFixTitle();
        });

        $('.content-wrap').css('width', winWidth - 375);
        $('.device-list').css('height', winHeight - 169);
        $('.report-list').css('height', winHeight - 140);
        $('.data-board-wrap').css('height', winHeight - 70);
        $('.report-detail').css({
            'width': winWidth - 720
        });
        $('.report-detail .detail-wrap').css({
            'width': winWidth - 720,
            'height': winHeight - 140
        });
        $('.event-date-list').css('height', winHeight - headerEventHeader);
        $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);

        $(window).on('resize', function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var realSize = winWidth - 375;
            var headerEventHeader = 159; // header 와 event 헤더의 높이

            $('.content-wrap').css('width', realSize);
            $('div.full-popup-wrap div.inner h2').css('width', winWidth - 40);
            $('.event-date-list').css('height', winHeight - headerEventHeader);

            if (!PJT.state.filter) {
                // is filter open
                $('.device-list').css('height', winHeight - 169);
            } else {
                $('.device-list').css('height', winHeight - 290);
            }
            $('.report-list').css('height', winHeight - 140);
            $('.report-detail').css({
                'width': winWidth - 720
            });
            $('.report-detail .detail-wrap').css({
                'width': winWidth - 720,
                'height': winHeight - 140
            });
            $('.data-board-wrap').css('height', winHeight - 70);
        });
    }

    // 바탕화면 클릭 시, 열려있는 팝업등에 대한 닫기 처리 (팝업을 열때마다 호출)
};function openPopCloseEvent() {
    $(document).on('click', function () {
        $('.lnb-content_popup, .select-wrap div.options, .grid_select-option').fadeOut('fast');
        $('.device-list div.device-inner').removeClass('on');
    });
    $('.lnb-wrap li, .lnb-content_popup, .select-wrap, .select-wrap div.options, .device-wrap a.device-remove, .device-wrap a.remove').on('click', function (e) {
        e.stopPropagation();
    });
}

// selectbox initial
function selectBoxInit() {
    $('select').each(function () {
        $(this).wrap('<div class="select_wrapper"></div>');
        $(this).parent().prepend('<span>' + $(this).find(':selected').text() + '</span>');
        $(this).parent().children('span').width($(this).width());
        $(this).css('display', 'none');
        $(this).parent().append('<ul class="select_inner"></ul>');
        $(this).children().each(function () {
            var opttext = $(this).text();
            var optval = $(this).val();
            $(this).parent().siblings('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
        });

        $(this).parent().find('li').on('click', function () {
            var cur = $(this).attr('id');
            $(this).parent().siblings('span').text($(this).text());
            $(this).parent().siblings('select').children().removeAttr('selected');
            $(this).parent().siblings('select').children('[value="' + cur + '"]').attr('selected', 'selected');
        });
        $(this).parent().on('click', function () {
            $(this).find('ul').slideToggle('fast');
        });
    });
}

selectBoxInit();

// after loaded execute
window.onload = function () {
    // PJT.loginInit();
    PJT.siteResizeResponse();
    // PJT.utilsAliveLinks();
    PJT.selectOptionsForm();
};

// report Chart
function issuesStackChart() {
    var barChartDataStack1 = {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            backgroundColor: '#ff957c',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#ea5858',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#9678ff',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#41cee2',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#63dbc1',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }]

    };

    var ctxstacked = document.getElementById('issueStackChart').getContext('2d');
    var myBarStacked1 = new Chart(ctxstacked, {
        type: 'bar',
        data: barChartDataStack1,
        options: {
            maintainAspectRatio: false,
            legend: false,
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.9,
                    barThickness: 10,
                    maxBarThickness: 20,
                    minBarLength: 20,
                    gridLines: {
                        display: false,
                        zeroLineWidth: 0

                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: true,
                        tickMarkLength: 0
                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1',
                        padding: 10
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom: function custom(tooltipModel) {
                    var tooltipEl = document.getElementById('chartjs-tooltip-custom');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip-custom';
                        tooltipEl.innerHTML = '<div class="tooltip-wrap"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span class="dp-b tit">' + title + '</span>';
                        });

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];
                            innerHtml += '<span class="dp-b body"><span class="round"></span>Server-01 : ' + body + '</span>';
                        });

                        var tableRoot = tooltipEl.querySelector('div.tooltip-wrap');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var position = this._chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        }
    });
}

function severityLevelChart() {
    var barChartDataStack2 = {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            backgroundColor: '#ff957c',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#ea5858',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#9678ff',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#41cee2',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            backgroundColor: '#63dbc1',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }]

    };

    var ctxstacked2 = document.getElementById('severityLevelChart').getContext('2d');
    var myBarStacked2 = new Chart(ctxstacked2, {
        type: 'bar',
        data: barChartDataStack2,
        options: {
            maintainAspectRatio: false,
            legend: false,
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.9,
                    barThickness: 10,
                    maxBarThickness: 20,
                    minBarLength: 20,
                    gridLines: {
                        display: false,
                        zeroLineWidth: 0

                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: true,
                        tickMarkLength: 0
                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1',
                        padding: 10
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom: function custom(tooltipModel) {
                    var tooltipEl = document.getElementById('chartjs-tooltip-custom');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip-custom';
                        tooltipEl.innerHTML = '<div class="tooltip-wrap"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span class="dp-b tit">' + title + '</span>';
                        });

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];
                            innerHtml += '<span class="dp-b body"><span class="round"></span>Server-01 : ' + body + '</span>';
                        });

                        var tableRoot = tooltipEl.querySelector('div.tooltip-wrap');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var position = this._chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        }
    });
}

function quantityTime() {
    var barChartData = {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            backgroundColor: '#63dbc1',
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }]
    };

    var ctxquantity = document.getElementById('quantityTimeChart').getContext('2d');
    var quantityTime = new Chart(ctxquantity, {
        type: 'bar',
        data: barChartData,
        options: {
            maintainAspectRatio: false,
            legend: false,
            scales: {
                xAxes: [{
                    barPercentage: 0.9,
                    barThickness: 10,
                    maxBarThickness: 20,
                    minBarLength: 20,
                    gridLines: {
                        display: false,
                        zeroLineWidth: 0

                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        tickMarkLength: 0
                    },
                    ticks: {
                        fontFamily: 'inter-re',
                        fontColor: '#97a4b1',
                        padding: 10
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom: function custom(tooltipModel) {
                    var tooltipEl = document.getElementById('chartjs-tooltip-custom');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip-custom';
                        tooltipEl.innerHTML = '<div class="tooltip-wrap"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '';

                        titleLines.forEach(function (title) {
                            innerHtml += '<span class="dp-b tit">' + title + '</span>';
                        });

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];
                            innerHtml += '<span class="dp-b body"><span class="round"></span>Server-01 : ' + body + '</span>';
                        });

                        var tableRoot = tooltipEl.querySelector('div.tooltip-wrap');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var position = this._chart.canvas.getBoundingClientRect();
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        }
    });
}

function cpuUsageServerChart() {
    var cpuUsageServerData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        datasets: [_defineProperty({
            borderColor: '#63dbc1',
            lineTension: 0,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, 'fill', false), {
            borderColor: '#41cee2',
            lineTension: 0,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }, {
            borderColor: '#ea5858',
            lineTension: 0,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            data: [randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger(), randomScalingFactorInteger()]
        }]
    };

    var ctxmultiLine = document.getElementById('cpuUsageServerChart').getContext('2d');
    var cpuUsageLine = Chart.Line(ctxmultiLine, {
        data: cpuUsageServerData,
        options: {
            maintainAspectRatio: false,
            legend: false,
            stacked: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                        zeroLineWidth: 0
                    },
                    ticks: {
                        fontFamily: 'dotum',
                        fontColor: '#97a4b1'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                        display: true,
                        tickMarkLength: 0
                    },
                    ticks: {
                        fontFamily: 'dotum',
                        fontColor: '#97a4b1',
                        padding: 10
                    }
                }]
            },
            tooltips: false
        }
    });
}