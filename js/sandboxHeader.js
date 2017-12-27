$("#sidebarTrigger").click(function() {
    $(".headerOverlay").fadeIn();
    $(".sidebar").css("left","0");
});
$(".headerOverlay").click(function() {
    $(".headerOverlay").fadeOut();
    $(".sidebar").css("left","-30%");
});
