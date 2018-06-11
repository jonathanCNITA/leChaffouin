$(document).ready( function(){
    console.log("Hi there this is jQuery");
    
    //-- Construction du plateau
    let nbCasesX = 4;
    let nbCasesY = 4;
    let rowNum = 0;
    let caseIndex = 0;
    let userValue = 1;

    for(let y = 0; y < nbCasesY; y++) {
        $("#plateau").append('<div id="row'+ rowNum +'" class="row"></div>');
        for(let x = 0; x < nbCasesX; x ++) {
            $("#row" + rowNum).append('<div id="'+ caseIndex + '"class="col-lg-2 case">'+ userValue + '</div>');
            caseIndex++;
            userValue++;
        }
        rowNum++;
        rempli_plateau();
        affiche_tableau();
    }
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


    //-- Click
    $(".case").click(function() {
        console.log($(this).attr('id'));
    });

});


