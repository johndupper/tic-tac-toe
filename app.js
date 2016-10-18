var numberOfTiles = 9;
var gameContainer = document.getElementById('board');

var createBoard = function(number) {
    for (var index = 0; index < number; index++) {
        var square = document.createElement('div');
        square.className = 'tile';
        square.addEventListener('click', function() {
            // click event
        });
        gameContainer.appendChild(square);
    }
};

createBoard(numberOfTiles);