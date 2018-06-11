$(document).ready( function(){
    console.log("Hi there this is jQuery");
    
    //-- Construction du plateau

    let nbCasesX = 6;
    let nbCasesY = 6;
    let rowNum = 0;
    let caseIndex = 0;
    let boardItems = Array.from(Array(nbCasesX*nbCasesY).keys());// permet de créer un tableau en prenant les valeurs de X et Y.
    let plateauInitial = createBoardGame(boardItems, nbCasesY, nbCasesX)

    for(let y = 0; y < nbCasesY; y++) {
        $("#plateau").append('<div id="row'+ rowNum +'" class="row"></div>');
        for(let x = 0; x < nbCasesX; x ++) {
            $("#row" + rowNum).append('<div id="'+ caseIndex + '"class="col-lg-2 case">'+ plateauInitial[y][x] + '</div>');
            caseIndex++;
            
        }
        rowNum++;
    }


    //-- Click
    $(".case").click(function() {
        console.log($(this).attr('id'));
    });


    //--Fonction shuffle
    function shuffle(a){
        for (let i=a.length -1;i>0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    //-- Fonction qui permet de retourner un tableau au format [[],[],[]....]
    function createBoardGame(tab,nbY, nbX){
        let board = []; // on definit un plateau vide pour le moment
        let index = 0; // on definit une variable index qui represente la valeur à assigner.
        for(let y = 0; y < nbY; y++){ // y represente les lignes du board.
            let xCase = []; // le tableau va contenir l'index des cases.
            for (let x = 0; x < nbX; x++){
                xCase.push(tab[index]); // on pousse les données dans le tableau.
                index ++;
            }
            board.push(xCase);
        }
        return board;
    }

})

console.log("") ;
