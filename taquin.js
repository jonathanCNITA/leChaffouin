$(document).ready(function () {
    console.log("Hi there this is jQuery");

    //-- Construction du plateau

    let nbCasesX = 4;
    let nbCasesY = 4;
    let emptyCaseValueOnView = "Isa";

    let boardItems = Array.from(Array(nbCasesX*nbCasesY).keys());// permet de créer un tableau en prenant les valeurs de X et Y.
    boardItems =  boardItems.map(value =>value+1);
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
            plateauInitial[y][x] = nbCasesX*nbCasesY;
            //-- Change l'affichage du board de la view
            afficheNewBoard();
        }

        if(arrayEquality(boardItems, [].concat(...plateauInitial))){
            $('#result').html("Bravo").css("background-color","lightgreen");
        } else {
            $('#result').text("Try again").css("background-color","pink");
        }
    });

    //--Bouton Mélanger
    $("#shuffle").on('click', function () {
        let flatPlateau = [].concat(...plateauInitial);// permet de dérouler le tableau en 1 ligne.
        let shuffledBoard = shuffle(flatPlateau);
        plateauInitial = createBoardGame(shuffledBoard, nbCasesY, nbCasesX);
        afficheNewBoard();
        Winnable(shuffledBoard,getEmptyCoord(plateauInitial,nbCasesX,nbCasesY)[0],getEmptyCoord(plateauInitial,nbCasesX,nbCasesY)[1],nbCasesX,nbCasesY);
    });

    //--Bouton Reset
    $("#reset").on('click', function(){
        reset();
    });

     //-- Bouton change 1 valeur
     $('#change').on('click', function() {
        plateauInitial = changeOnePosition(plateauInitial, nbCasesY, nbCasesX, 16);

         afficheNewBoard();

    });

    //-- Bouton change 50 valeur
    $('#change50').on('click', function() {
        for(let i = 0; i < 50000; i++) {
            let flatPlateau = [].concat(...plateauInitial);// permet de dérouler le tableau en 1 ligne.

            plateauInitial = changeOnePosition(plateauInitial, nbCasesY, nbCasesX, nbCasesX*nbCasesY);
        }
        afficheNewBoard();
    });

    //--Fonction qui lie le tableau de données à la vue.
    function afficheNewBoard() {
        console.log("afficheNewBoard",plateauInitial);
        for (let y = 0; y < nbCasesY; y++) {
            for (let x = 0; x < nbCasesX; x++) {
                if (plateauInitial[y][x] === nbCasesX*nbCasesY) {
                    $("#" + y + "-" + x).text(emptyCaseValueOnView);
                }else{
                    $("#" + y + "-" + x).text(plateauInitial[y][x]);
                }
            }
        }
    }

    //--fonction qui nous sert à dessiner le plateau initial au chargement de la page.
    function drawBoard() {
        rowNum = 0;
        for (let y = 0; y < nbCasesY; y++) {
            $("#plateau").append('<div id="row' + rowNum + '" class="row"></div>');
            for (let x = 0; x < nbCasesX; x++) {
                if (plateauInitial[y][x] === nbCasesX*nbCasesY) {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case">' + emptyCaseValueOnView + '</div>');
                } else {
                    $("#row" + rowNum).append('<div id="' + y + "-" + x + '"class="col-lg-2 case">' + plateauInitial[y][x] + '</div>');
                }
            }
            rowNum++;
        }
    }

    //--Fonction qui permet de revenir à un état initial
    function reset(){
        console.log("boarditems",boardItems);
        plateauInitial = createBoardGame(boardItems, nbCasesY, nbCasesX);
        console.log("reset", plateauInitial);
        afficheNewBoard();
    }
});





