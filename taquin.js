$(document).ready(function(){
    rempli_plateau();
    affiche_tableau();
});
var n = 4;

var plateau = [];
function rempli_plateau() {
    for(var i=0; i<=n; i++)
        for(var j=0; j<=n; j++)
            plateau [i][j] = i*j+i;
}




function affiche_tableau() {
    for(var i=0; i<n; i++)
        for(var j=0; j<n; j++)
            console.log("Case "+ i + "-" + j +" : "+ plateau[i][j]);
}







