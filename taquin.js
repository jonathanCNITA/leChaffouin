$(document).ready(function () {
    console.log("Hi there this is jQuery");

    //-- Construction du plateau

    let nbCasesX = 4;
    let nbCasesY = 4;
    let rowNum = 0;
    let boardItems = ["X", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // let boardItems = Array.from(Array(nbCasesX*nbCasesY).keys());// permet de créer un tableau en prenant les valeurs de X et Y.
    boardItems = shuffle(boardItems);
    let plateauInitial = createBoardGame(boardItems, nbCasesY, nbCasesX)
    drawBoard();
    console.log("Position Empty", getEmptyCoord(plateauInitial, nbCasesX, nbCasesY));
    console.log(plateauInitial);

    //-- Click
    $(".case").click(function () {
        console.log($(this).attr('id'));
        console.log("Position X", getEmptyCoord(plateauInitial, nbCasesX, nbCasesY));

        let a = getEmptyCoord(plateauInitial, nbCasesX, nbCasesY)[1];
        let b = getEmptyCoord(plateauInitial, nbCasesX, nbCasesY)[0];
        let x = $(this).attr('id').split('-')[1];
        let y = $(this).attr('id').split('-')[0];

        if (Switchable(a, b, x, y)) {
            //-- Change valeur dans le tableau
            let coordClick = $(this).attr('id').split('-');
            let coordEmpty = getEmptyCoord(plateauInitial, nbCasesX, nbCasesY);
            plateauInitial[coordEmpty[0]][coordEmpty[1]] = plateauInitial[coordClick[0]][coordClick[1]];
            plateauInitial[coordClick[0]][coordClick[1]] = "X";

            //-- Change l'affichage du board view
            $('#' + coordEmpty[0] + '-' + coordEmpty[1]).text(plateauInitial[coordEmpty[0]][coordEmpty[1]]);
            $('#' + $(this).attr('id')).text("X");
            $('#' + coordEmpty[0] + '-' + coordEmpty[1]).removeClass('emptyCase');
            $('#' + $(this).attr('id')).addClass('emptyCase');
            console.log(plateauInitial);
        }
    });

    $("button").on('click', function () {
        let flatPlateau = [].concat(...plateauInitial);
        console.log(flatPlateau);
        plateauInitial = createBoardGame(shuffle(flatPlateau), nbCasesY, nbCasesX);
        afficheNewBoard();
    });

    function afficheNewBoard() {
        console.log("ta race!!");
        console.log("PlateauInitial", plateauInitial);

        for (let y = 0; y < nbCasesY; y++) {
            for (let x = 0; x < nbCasesX; x++) {
                $("#" + y + "-" + x).text(plateauInitial[y][x]);
            }

        }
    }
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

    function getEmptyCoord(tab, nbY, nbX) {
        let coordEmpty = [];
        for (let y = 0; y < nbY; y++) {
            for (let x = 0; x < nbX; x++) {
                if (tab[y][x] === "X") {
                    coordEmpty = [y, x];
                }
            }
        }
        return coordEmpty;
    }

    function drawBoard() {
        for (let y = 0; y < nbCasesY; y++) {
            $("#plateau").append('<div id="row' + rowNum + '" class="row"></div>');
            for (let x = 0; x < nbCasesX; x++) {
                if (plateauInitial[y][x] === "X") {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case emptyCase">' + plateauInitial[y][x] + '</div>');
                } else {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case">' + plateauInitial[y][x] + '</div>');
                }
            }
            rowNum++;
        }
    }


    function Switchable(a, b, x, y) {
        console.log("a: ", a, " b: ", b);
        console.log("x: ", x, " y: ", y);
        let albert = Math.abs(a - x);
        let bertha = Math.abs(b - y);
        if (albert + bertha == 1 && albert * bertha == 0) {
            return true;
        } else
            return false;
    }
});





