//--Fonction shuffle
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//-- Fonction qui permet de retourner un tableau au format [[],[],[]....]
function createBoardGame(tab, nbY, nbX) {
    let board = []; // on definit un plateau vide pour le moment
    let index = 0; // on definit une variable index qui represente la valeur à assigner.
    for (let y = 0; y < nbY; y++) { // y represente les lignes du board.
        let xCase = []; // le tableau va contenir l'index des cases.
        for (let x = 0; x < nbX; x++) {
            xCase.push(tab[index]); // on pousse les données dans le tableau.
            index++;
        }
        board.push(xCase);
    }
    return board;
}

//--Fonction qui retourne les coordonnées de la case vide ici "X" au format y,x
function getEmptyCoord(tab, nbY, nbX) {
    let coordEmpty = [];
    for (let y = 0; y < nbY; y++) {
        for (let x = 0; x < nbX; x++) {
            if (tab[y][x] === nbX*nbY) {
                coordEmpty = [y, x];
            }
        }
    }
    return coordEmpty;
}

//--Fonction qui permet de vérifier les conditions de permutations.
function Switchable(a, b, x, y) {
    let albert = Math.abs(a - x);// transforme la valeur en absolue.
    let bertha = Math.abs(b - y);
    if (albert + bertha === 1 && albert * bertha === 0) {
        return true;
    } else
        return false;
}

function nbBoxesPermutation(tab) {
    console.log(tab);
    let j = 0;
    let c = 0;
    let a = 1;
    let compteur = 0;
    while (a < tab.length) {
        for (let i = compteur; i < tab.length; i++) {
            if (tab[i] === a) {
                if (i !== j) {
                    c = tab[i];
                    tab[i] = tab[j];
                    tab[j] = c;
                    compteur++;
                    console.log(("tabi  :  "+tab))
                }
                j++;
                a++;
            }
        }
    }
    return compteur;
}

function NbEmptyMoves(x,y,nbX,nbY) {
    return (nbX-x)+nbY-y;
}

a = NbEmptyMoves();

function Winnable(tab,x,y,nbX,nbY) {
    nbMoves = nbBoxesPermutation(tab);
    if (NbEmptyMoves(x,y,nbX,nbY)%2 === nbMoves%2){

        console.log("Winnable"+nbMoves);

    }else{

        console.log("Taste that DevilGame!!!!"+nbMoves)
    }

}




// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }
/* @return {boolean}
// }
//     }
//         return EmptyBoxMoves = [Up(), Down(), Right(), Left()]
//     else {
//     }
//         }
//             return EmptyBoxMoves = [Down(), Right(), Left()];
//         else if (y == n - 1) {
//         }
//             return EmptyBoxMoves = [Up(), Right(), Left()];
//         if (y == 0) {
//     else if (0 < x < 3) {
//     }
//         }
//
//             return EmptyBoxMoves = [Down(), Up(), Right()];
//         else {
//         }
//             return EmptyBoxMoves = [Down(), Right()];
//         else if (y == n - 1) {
//         }
//             return EmptyBoxMoves = [Up(), Right()];
//         if (y == 0) {
//     else if (x == 0) {
//     }
//         }
//             return EmptyBoxMoves = [Down(), Up(), Left()];
//         else {
//         }
//             return EmptyBoxMoves = [Up(), Left()];
//         else if (y == 0) {
//         }
//             return EmptyBoxMoves = [Down(), Left()];
//         if (y == n - 1) {
//     if (x == n - 1) {
//     EmptyBoxMoves = EmptyMoves;
//
// function IsEmptyBoxMovable(x, y) {
//
// EmptyMoves = [];
//
// }
//     return "R";
// function Right() {
//
// }
//     return "L";
// function Left() {
//
// }
//     return "D";
// function Down() {
//
// }
//     return "U";
// function Up() {
// });
//
//
//     });
//         console.log($(this).attr('id'));
//     $(".case").click(function () {
//     //-- Click
//
//
//     }
//         rowNum++;
//         }
//             userValue++;
//             caseIndex++;
//             $("#row" + rowNum).append('<div id="' + caseIndex + '"class="col-lg-2 case">' + userValue + '</div>');
//         for (let x = 0; x < nbCasesX; x++) {
//         $("#plateau").append('<div id="row' + rowNum + '" class="row"></div>');
//     for (let y = 0; y < nbCasesY; y++) {
//
//     let userValue = 1;
//     let caseIndex = 0;
//     let rowNum = 0;
//     let nbCasesY = 4;
//     let nbCasesX = 4;
//     //-- Construction du plateau
//
//
//     let tab = fillBoardAndShuffle();
//     console.log("cocou :" + Switch(1, 2, 0, 3));
//     //console.log("tableau des faux: " + verifie_deplacement(0, 3));
//     //console.log("la case vide peut bouger à :" + IsEmptyBoxMovable(2, 1));
//     affiche_plateau(plateau);
//     init_plateau();
//     console.log("Hi there this is jQuery");
// $(document).ready(function () {
//--Fonction qui retourne les coordonnées de la case vide ici "X" au format y,x
// var n;
// n = 4;
// var plateau = [];
// //--Fonction qui permet de vérifier les conditions de permutations.
// function Switchable(a, b, x, y) {
//     console.log("a: ", a, " b: ", b);
//     console.log("x: ", x, " y: ", y);
//     let albert = Math.abs(a - x);// transforme la valeur en absolue.
//     let bertha = Math.abs(b - y);
//     if (albert + bertha == 1 && albert * bertha == 0) {
//         return true;
//     } else
//         return false;
// }
//
// function init_plateau() {
//     for (var i = 0; i < n; i++) {
//         plateau[i] = new Array(4);
//
//         for (var j = 0; j < n; j++) {
//             (plateau[i])[j] = i * n + j;
//         }
//     }
//     return plateau;
// }
//
// function affiche_plateau(desir) {
//     for (var i = 0; i < n; i++)
//         for (var j = 0; j < n; j++)
//             console.log("Case " + i + "-" + j + " : " + desir[i][j]);
// }
    * @return {boolean}
    */
