
$(function() {

    // cache selectors
    $tabContentDivs = $(".content-tabs-inner");
    $sideTabs = $("#side-tabs li");

    var tabNames = ["who", "what", "where", "when", "why"];
    var tabs = {};

    for (var i = 0; i < tabNames.length; i++) {
        tabs["#" + tabNames[i]] = true; 
    }

    // expects #who, #what, #where, etc...
    var setActiveTab = function(tabName) {

        if (!(tabName in tabs)) return;

        $sideTabs.removeClass("active");
        $tabContentDivs.removeClass("active");

        $(tabName + "-tab").addClass("active");
        $(tabName + "-tab-link").addClass("active");
    };

    // set the appropriate tab based on the hash
    if (location.hash) {
        var hash = location.hash.trim();
        hash.length && setActiveTab(location.hash);
    }

    $sideTabs.click(function() {
        // grab the href from the child link
        var tabName = $(this).find("a").attr("href");

        setActiveTab(tabName);
    }); 

});
