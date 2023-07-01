/* Toggle between adding and removing the "responsive-nav" class to topnav when the user clicks on the icon */
function responsiveNav() {
var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive-nav";
    } else {
        x.className = "topnav";
    }
}
