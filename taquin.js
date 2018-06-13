$(document).ready(function () {
    console.log("Hi there this is jQuery");

    //-- Construction du plateau

    let nbCasesX = 4;
    let nbCasesY = 4;
    let rowNum = 0;
    let boardItems = Array.from(Array(nbCasesX*nbCasesY).keys());// permet de créer un tableau en prenant les valeurs de X et Y.
    boardItems =  boardItems.map(value =>value+1);
    boardItems[boardItems.length -1] = "X";
     // boardItems = shuffle(boardItems);
    let plateauInitial = createBoardGame(boardItems, nbCasesY, nbCasesX)
    drawBoard();
    console.log("Position Empty", getEmptyCoord(plateauInitial, nbCasesX, nbCasesY));
    console.log(plateauInitial);

    //-- Click sur la case qui récupere les coordonnées
    $(".case").click(function () {
        console.log($(this).attr('id'));
        console.log("Position X", getEmptyCoord(plateauInitial, nbCasesX, nbCasesY));
        //-- on récupere les coordonnées de la case vide et la cliquée($this)
        let a = getEmptyCoord(plateauInitial, nbCasesX, nbCasesY)[1];
        let b = getEmptyCoord(plateauInitial, nbCasesX, nbCasesY)[0];
        let x = $(this).attr('id').split('-')[1];
        let y = $(this).attr('id').split('-')[0];
        //-- on utilise la fonction switchable pour vérifier la permutation.
        if (Switchable(a, b, x, y)) {
            //-- Change valeur dans le tableau
            plateauInitial[b][a] = plateauInitial[y][x];
            plateauInitial[y][x] = "X";
            //-- Change l'affichage du board de la view
          afficheNewBoard();
        }
    });

    //--Bouton Mélanger
    $("#shuffle").on('click', function () {
        let flatPlateau = [].concat(...plateauInitial); // permet de dérouler le tableau en 1 ligne.
        let shuffledBoard = shuffle(flatPlateau);
        plateauInitial = createBoardGame(shuffledBoard, nbCasesY, nbCasesX);
        afficheNewBoard();
    });
    
    //--Bouton Reset
    $("#reset").on('click', function(){
        reset(); 
        
    });

    //--Fonction qui lie le tableau de données à la vue.
    function afficheNewBoard() {
        console.log("afficheNewBoard",plateauInitial);
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
    //--Fonction qui retourne les coordonnées de la case vide ici "X" au format y,x
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

    //--fonction qui nous sert à dessiner le plateau initial au chargement de la page.
    function drawBoard() {
        for (let y = 0; y < nbCasesY; y++) {
            $("#plateau").append('<div id="row' + rowNum + '" class="row"></div>');
            for (let x = 0; x < nbCasesX; x++) {
                if (plateauInitial[y][x] === "X") {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case">' + plateauInitial[y][x] + '</div>');
                } else {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case">' + plateauInitial[y][x] + '</div>');
                }
            }
            rowNum++;
        }
    }

    //--Fonction qui permet de vérifier les conditions de permutations.
    function Switchable(a, b, x, y) {
        console.log("a: ", a, " b: ", b);
        console.log("x: ", x, " y: ", y);
        let albert = Math.abs(a - x);// transforme la valeur en absolue.
        let bertha = Math.abs(b - y);
        if (albert + bertha == 1 && albert * bertha == 0) {
            return true;
        } else
            return false;
    }

    //--Fonction qui permet de revenir à un état initial
    function reset(){
        console.log("boarditems",boardItems);
        plateauInitial = createBoardGame(boardItems, nbCasesY, nbCasesX);
        console.log("reset", plateauInitial)
        afficheNewBoard();
        
    }
});





