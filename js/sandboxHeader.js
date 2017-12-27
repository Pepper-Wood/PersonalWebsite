console.log(window.location.href);
$("#headerSection").html(
    '<div class="sidebar">'
    + '    <span class="sidebarTitle">Sandbox Repositories</span>'
    + '    <ul class="sidebarNav">'
    + '        <li id="sidenavIndex"><a href="index.html">Home</a></li>'
    + '        <li id="sidenavSoosh"><a href="sooshTraitVisualizer.html">Soosh Trait Visualizer</a></li>'
    + '        <li id="sidenavPersonality"><a href="personality.html">Personality Generator</a></li>'
    + '        <li id="sidenavSprite"><a href="spritegen.html">NES-Style Sprite Generator</a></li>'
    + '        <li id="sidenavData"><a href="dataminers.html">Data Miners</a></li>'
    + '        <li id="sidenavSalem"><a href="townofsalem.html">Town of Salem Tracker</a></li>'
    + '        <li><a href="rpg.html">RPG Stat Sheet Template</a></li>'
    + '    </ul>'
    + '</div>'
    + '<div class="headerOverlay"></div>'
    + '<header>'
    + '    <div><i id="sidebarTrigger" class="material-icons">dehaze</i></div>'
    + '    <div><a class="headerLink" href="index.html">'
    + '        <img class="headerIcon" src="img/favicon.png">'
    + '        Web Development Sandbox'
    + '    </a></div>'
    + '</header>'
    + '<div class="headerblankspace"></div>'
);

function addActiveTab() {
    var sidenavTabs = ["Index","Soosh","Personality","Sprite","Data","Salem"];
    var currentPage = window.location.href;
    for (i=0; i<sidenavTabs.length; i++) {
        if (currentPage.includes(sidenavTabs[i].toLowerCase())) {
            $("#sidenav" + sidenavTabs[i]).addClass("active");
            return;
        }
    }
}

addActiveTab();

$("#sidebarTrigger").click(function() {
    $(".headerOverlay").fadeIn();
    $(".sidebar").css("left","0");
});
$(".headerOverlay").click(function() {
    $(".headerOverlay").fadeOut();
    $(".sidebar").css("left","-30%");
});
