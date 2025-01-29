function initializeBoardSizeMod() {

    let boardSizeMultiplier = 1;


    const modRow = document.querySelector('.mod-settings-row');
    const boardSizeButton = document.createElement('button');
    boardSizeButton.textContent = 'Board Size: 1';
    boardSizeButton.style.marginLeft = '10px';
    modRow.appendChild(boardSizeButton);


    function updateBoardSize(multiplier) {
        const canvas = document.getElementById('gameCanvas');
        const defaultWidth = 800;
        const defaultHeight = 600;


        const newWidth = defaultWidth * multiplier;
        const newHeight = defaultHeight * multiplier;

      
        canvas.width = newWidth;
        canvas.height = newHeight;

        initializeGame(newWidth, newHeight);
    }

    boardSizeButton.addEventListener('click', () => {
        boardSizeMultiplier = (boardSizeMultiplier % 10) + 1;
        boardSizeButton.textContent = `Board Size: ${boardSizeMultiplier}`;
        updateBoardSize(boardSizeMultiplier);
    });

  
    updateBoardSize(boardSizeMultiplier);
}


window.addEventListener('load', initializeBoardSizeMod);
