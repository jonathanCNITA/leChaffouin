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

function ToFlat(tab) {
    return [].concat(...tab);

}

function emptyCaseCoord(tab) {
    var emptyCase = tab.length * tab.length;
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab.length; j++) {
            if (tab[i][j] === emptyCase) {
                return {x: j, y: i};
            }

        }
    }
}

function swap(col1, row1, col2, row2, tab) {

    var k = tab[row1][col1];
    tab[row1][col1] = tab[row2][col2];
    tab [row2][col2] = k;
}

function copyBoard(solidBoard) {
    let boardCopy = []; // on definit un plateau vide pour le moment
    for (let x = 0; x < solidBoard.length; x++) {
        boardCopy[x] = [];
        for (let y = 0; y < solidBoard.length; y++) { // y represente les lignes du board.
            boardCopy[x][y] = solidBoard[x][y];
        }
    }
    return boardCopy;
}


function Up(solidBoard) {
    var tempBoard = copyBoard(solidBoard);
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var upperCase = {x: emptyCase.x, y: emptyCase.y - 1};
    if (emptyCase.y - 1 >= 0) {
        swap(emptyCase.x, emptyCase.y, upperCase.x, upperCase.y, tempBoard);
        return tempBoard;
    } else {
        return null;
    }
}

function Down(solidBoard) {
    var tempBoard = copyBoard(solidBoard);
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var lowerCase = {x: emptyCase.x, y: emptyCase.y + 1};
    if (emptyCase.y + 1 < tempBoard.length) {
        swap(emptyCase.x, emptyCase.y, lowerCase.x, lowerCase.y, tempBoard);
        return tempBoard;
    } else {
        return null;
    }
}

function Right(solidBoard) {
    var tempBoard = copyBoard(solidBoard);
    var emptyCase = emptyCaseCoord(tempBoard);
    //var emptyCaseValue = tempBoard[emptyCase[0]][emptyCase[1]];
    var rightCase = {x: emptyCase.x + 1, y: emptyCase.y};
    if (emptyCase.x + 1 < tempBoard.length) {
        swap(emptyCase.x, emptyCase.y, rightCase.x, rightCase.y, tempBoard);
        return tempBoard;
    } else {
        return null;
    }
}

function Left(solidBoard) {
    var tempBoard = copyBoard(solidBoard);
    var emptyCase = emptyCaseCoord(tempBoard);
    var leftCase = {x: emptyCase.x - 1, y: emptyCase.y};
    if (emptyCase.x - 1 >= 0) {
        swap(emptyCase.x, emptyCase.y, leftCase.x, leftCase.y, tempBoard);
        return tempBoard;
    } else {
        return null;
    }
}


let solution = [];
let bestDepth = 100;

function DFSearch(max, currentBoard, depth) {
let bestMoves = [];

findSolution(max, currentBoard, depth, bestMoves);

return bestMoves;

}
function findSolution(max, currentBoard, depth, bestMoves) {
    if (depth > Math.min(bestDepth, max)) {
        return false;
    }
    let tempBoard = copyBoard(currentBoard);
    if (arrayEquality(boardItems, [].concat(...tempBoard))) {
        // console.log("lastBoard : " + ToFlat(tempBoard));
        bestMoves.push([]);
        for (let i = 0; i < solution.length; i++){
            bestMoves[bestMoves.length - 1][i] = solution[i];
        }
        bestDepth = depth;

    }
    let nextState = [];
    if (Up(tempBoard) != null && solution[solution.length-1] !== 'D') {
        solution.push("U");
        nextState = Up(tempBoard);
        if(findSolution(max, nextState, depth + 1, bestMoves)){
            return true;
        }solution.pop();
    }
    if (Down(tempBoard) != null && solution[solution.length-1] !== 'U') {
        solution.push("D");
        nextState = Down(tempBoard);
        if (findSolution(max, nextState, depth + 1,  bestMoves)){
            return true;
        }solution.pop();
    }
    if (Left(tempBoard) != null && solution[solution.length-1] !== 'R') {
        solution.push("L");
        nextState = Left(tempBoard);
        if(findSolution(max, nextState, depth + 1,  bestMoves)){
            return true;
        }solution.pop();
    }
    if (Right(tempBoard) != null && solution[solution.length-1] !== 'L') {
        solution.push("R");
        nextState = Right(tempBoard);
        if (findSolution(max, nextState, depth + 1,  bestMoves)){
            return true;
        }solution.pop();
    }

    return false;


}


