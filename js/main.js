$(function() {

    $tabContentDivs = $(".content-tabs-inner");
    $sideTabs = $("#side-tabs li");

    var setActiveTab = function(tabName) {
        $sideTabs.removeClass("active");
        $tabContentDivs.removeClass("active");

        $(tabName + "-tab").addClass("active");
        $(tabName + "-tab-link").addClass("active");
    };

    var hash = location.hash.trim();
    hash.length && setActiveTab(location.hash);

    $sideTabs.click(function() {
        var tabName = $(this).find("a")
                           .attr("href");

        setActiveTab(tabName);
    }); 
});
