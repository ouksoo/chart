'use strict';

var INVENTORY = {

    utilsAliveLinks: function utilsAliveLinks() {

        // device inventory search
        $('.device-inventory-wrap a.search').on('click', function () {
            $('.device-inventory-wrap .search-input').addClass('on');
            $('.device-inventory-wrap .inventory-search').addClass('on').focus();
        });

        // device inventory filter clear all
        $('.inventory-filter li span.clear-all').on('click', function () {
            $('.inventory-filter li.add-filters').remove();
        });

        // device inventory navigation
        $('.device-inventory-wrap .navigation a').on('click', function () {
            $('.device-inventory-wrap .navigation a').each(function () {
                $(this).removeClass('on');
            });
            $(this).addClass('on');
        });
    },

    // device inventory add filter
    deviceInventoryFilter: function deviceInventoryFilter() {
        $('div.inventory-filter').slideDown();
        var inner = '<li class="add-filters"><span class="cs-btn"><span>TYPE - Cloud Server</span> <a href="#" class="remove">remove</a></span></li>';
        $('div.inventory-filter ul').prepend(inner);
    }
};

INVENTORY.utilsAliveLinks();