//--Fonction shuffle
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//-- Fonction qui permet de retourner un tableau au format [[],[],[]....]
function createBoardGame(tab, nbX, nbY) {
    let board = []; // on definit un plateau vide pour le moment
    let index = 0; // on definit une variable index qui represente la valeur à assigner.
    for (let x = 0; x < nbX; x++) {
        let xCase = []; // le tableau va contenir l'index des cases.
        for (let y = 0; y < nbY; y++) { // y represente les lignes du board.

            xCase.push(tab[index]); // on pousse les données dans le tableau.
            index++;
        }
        board.push(xCase);
    }
    return board;
}

//--Fonction qui retourne les coordonnées de la case vide ici "X" au format y,x
function getEmptyCoord(tab, nbX, nbY) {
    let coordEmpty = [];
    for (let x = 0; x < nbX; x++) {
        for (let y = 0; y < nbY; y++) {
            if (tab[x][y] === nbX * nbY) {
                coordEmpty = [x, y];
            }
        }
    }
    return coordEmpty;
}

function getEmptyXY(tab) {
    let coordEmpty = [];
    for (let x = 0; x < nbX; x++) {
        for (let y = 0; y < nbY; y++) {
            if (tab[x][y] === nbX * nbY) {
                coordEmpty = [x, y];
            }
        }
    }
    return coordEmpty;
}

//--Fonction qui permet de vérifier les conditions de permutations.
function Switchable(a, b, x, y) {
    let albert = Math.abs(a - x);// transforme la valeur en absolue.
    let bertha = Math.abs(b - y);
    return (albert + bertha === 1 && albert * bertha === 0);
}

function getPossibleMoves(EmptyX, EmptyY, nbX, nbY) {
    let possibleMovesTab = [];
    if (EmptyX + 1 < nbX) {
        moveRight = [EmptyX + 1, EmptyY];
        console.log("R : ", moveRight);
        possibleMovesTab.push(moveRight);
    }
    if (EmptyX - 1 >= 0) {
        moveLeft = [EmptyX - 1, EmptyY];
        console.log("L : ", moveLeft);
        possibleMovesTab.push(moveLeft);
    }
    if (EmptyY - 1 >= 0) {
        moveUp = [EmptyX, EmptyY - 1];
        console.log("U : ", moveUp);
        possibleMovesTab.push(moveUp);
    }
    if (EmptyY + 1 < nbY) {
        moveDown = [EmptyX, EmptyY + 1];
        console.log("D : ", moveDown);
        possibleMovesTab.push(moveDown);
    }
    console.log("X : ", EmptyX);
    console.log("Y : ", EmptyY);
    console.log("posmovs : ", possibleMovesTab);
    return possibleMovesTab;
}

function getPossibleMove2(tab2D, emptyX, emptyY, nbX, nbY) {
    let choiceAvailable = [];

    for (let x = 0; x < nbX; x++) {
        for (let y = 0; y < nbY; y++) {
            if (Switchable(emptyX, emptyY, x, y)) {
                choiceAvailable.push([x, y]);
            }
        }
    }
    console.log(choiceAvailable);
    return choiceAvailable;
}

//-- Fonction qui deplace la case vide en fonction des choix possibles
function changeOnePosition(tab2d, nbX, nbY, emptyValue) {
    let positionEmpty = getEmptyCoord(tab2d, nbX, nbY);
    let emptyX = positionEmpty[0];
    let emptyY = positionEmpty[1];

    //let choiceAvailable = getPossibleMoves(emptyX, emptyY, nbX, nbY);
    let choiceAvailable = getPossibleMove2(tab2d, emptyX, emptyY, nbX, nbY);


    let selectedIndex = Math.floor(Math.random() * choiceAvailable.length);
    let selectedCase = choiceAvailable[selectedIndex];
    tab2d[emptyX][emptyY] = tab2d[selectedCase[0]][selectedCase[1]];
    tab2d[selectedCase[0]][selectedCase[1]] = emptyValue;
    return tab2d
}

let nbCasesX = 4;
let nbCasesY = 4;
let boardItems = Array.from(Array(nbCasesX * nbCasesY).keys());// permet de créer un tableau en prenant les valeurs de X et Y.
boardItems = boardItems.map(value => value + 1);

//-- Fonction qui test si le tableau actuel et egale au tableau référent
function arrayEquality(arrRef, arrActual) {

    for (let i = 0; i < arrRef.length; i++) {
        if (arrRef[i] !== arrActual[i]) {
            return false;
        }
    }
    return true;
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
                }
                j++;
                a++;
            }
        }
    }
    return compteur;
}

function NbEmptyMoves(x, y, nbX, nbY) {
    return (nbX - x) + nbY - y;
}

a = NbEmptyMoves();

function Winnable(tab, x, y, nbX, nbY) {
    var nbMoves = nbBoxesPermutation(tab);
    if (NbEmptyMoves(x, y, nbX, nbY) % 2 === nbMoves % 2) {
        console.log("Winnable" + nbMoves);
        return true;

    } else {
        console.log("Taste that DevilGame!!!!" + nbMoves);
        return false;

    }

}

function emptyCaseCoord(tab) {
    var emptyCase = tab.length ^ 2;
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab.length; j++) {
            if (tab[i][j] === emptyCase) {
                return {x: i, y: j};
            }

        }
    }
}

function swap(i, j, a, b, tab) {

    var k = tab[i][j];
    tab[i][j] = tab[a][b];
    tab [a][b] = k;
}

function copyBoard(solidTab) {
    let boardCopy = []; // on definit un plateau vide pour le moment
    for (let x = 0; x < solidTab.length; x++) {
        boardCopy[x] = [];
    }
    for (let y = 0; y < solidTab.length; y++) { // y represente les lignes du board.
        boardCopy[x][y] = solidTab[x][y];
    }
    return boardCopy;
}


function Up(solidBoard) {
    var tempBoard = copyBoard(solidBoard);
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var upperCase = {x: emptyCase.x, y: emptyCase.y - 1};
    if (emptyCase.y - 1 >= 0) {
        return swap(emptyCase[0], emptyCase[1], upperCase.x, upperCase.y, tempBoard);
    } else {
        return null;
    }
}

function down(solidBoard) {
    var tempBoard = solidBoard;
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var lowerCase = {x: emptyCase.x, y: emptyCase.y + 1};
    if (emptyCase.y + 1 < tempBoard.length) {
        return swap(emptyCase[0], emptyCase[1], lowerCase.x, lowerCase.y, tempBoard);
    } else {
        return null;
    }
}

function Right(solidBoard) {
    var tempBoard = solidBoard;
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var rightCase = {x: emptyCase.x + 1, y: emptyCase.y};
    if (emptyCase.x + 1 < tempBoard.length) {
        swap(emptyCase[0], emptyCase[1], rightCase.x, rightCase.y, tempBoard);
        return tempBoard;
    } else {
        return null;
    }
}

function Left(solidBoard) {
    var tempBoard = solidBoard;
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var leftCase = {x: emptyCase.x + 1, y: emptyCase.y};
    if (emptyCase.x - 1 <= 0) {
        return swap(emptyCase[0], emptyCase[1], leftCase.x, leftCase.y, tempBoard);
    } else {
        return null;
    }
}

function findSolution(max, currentBoard, profondeur) {

    if (arrayEquality(boardItems, [].concat(...currentBoard))) {
        console.log(currentBoard);
        return;
    }
    if (profondeur > max) {
        return false;
    }
    let emptyX = getEmptyCoord(currentBoard, nbCasesX, nbCasesY)[0];
    let emptyY = getEmptyCoord(currentBoard, nbCasesX, nbCasesY)[1];
    let posMovTab = getPossibleMove2(currentBoard, emptyX, emptyY, nbCasesX, nbCasesY);
    for (let i = 0; i <= posMovTab.length - 1; i++) {
        let selectedCase = posMovTab[i];
        var newBoard = currentBoard;
        newBoard[emptyX][emptyY] = currentBoard[selectedCase[0]][selectedCase[1]];
        newBoard[selectedCase[0]][selectedCase[1]] = nbCasesX * nbCasesY;
        if (findSolution(max, newBoard, profondeur + 1)) {
            return true;
        }
        return false;
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
//
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
