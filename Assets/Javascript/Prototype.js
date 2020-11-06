var canvasRef;
var ctx;
var gameObj;
var inputManager;


function init()
{
	inputManager = new Input();
	inputManager.setLeftKey(false);
	inputManager.setRightKey(false);
	
	window.addEventListener('keydown', userInputDown, true);
	window.addEventListener('keyup', userInputUp, true);
	
	//Get a reference to the canvas
	canvasRef = document.getElementById('game-canvas');
	
	//Get a handle to the 2d context of the canvas
    ctx = canvasRef.getContext('2d');
	
	loadImages();
	
}

function startGameLoop()
{
	gameObj = new Game();
	gameObj.init();
}



function userInputDown(e)
{
	console.log(e.keyCode);
	switch(e.keyCode)
	{
		case 37:
			inputManager.setLeftKey(true);
			break;
		case 39:
			inputManager.setRightKey(true);
			break;
        
        case 38:
			inputManager.setUpKey(true);
			break;
		case 40:
			inputManager.setDownKey(true);
			break;    
	}
}

function userInputUp(e)
{
	console.log(e.keyCode);
	switch(e.keyCode)
	{
		case 37:
			inputManager.setLeftKey(false);
			break;
		case 39:
			inputManager.setRightKey(false);
			break;
        
        case 38:
			inputManager.setUpKey(false);
            speed = INITIAL_VELOCITY;
			break;
		case 40:
			inputManager.setDownKey(false);
            speed = INITIAL_VELOCITY;
			break;    
	}
}
