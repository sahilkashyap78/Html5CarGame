function Game()
{
    var lasttime;
	var playerObj;
	this.init = initializer;
    
	
	function initializer()
	{
        
        playerObj = new Player();
		playerObj.init(carPositionX, carPositionY, allImages[PLAYER_CAR].width, allImages[PLAYER_CAR].height, PLAYER_CAR);
        
        lastTime = new Date().getTime();
        setIntervalID = setInterval(gameLoop, GAMELOOP_CONSTANT);        
	}
	
	function gameLoop()
	{
		update();
		draw();
	}
	
	function update()
	{
        var currTime = new Date().getTime(); // Let's say the current time is 9:30:35:180
		var timeElapsed = currTime - lastTime; // So, timeElapsed will be (180 - 156) 24 ms
		lastTime = currTime;
        var acceleration = (timeElapsed / MILISECOND_TO_SECONDS) * speed; // acceleration calculated as per the velocity
        road1PositionY  += acceleration;
	    road2PositionY += acceleration;
        if (road1PositionY >= gameHeight)
        {
            road1PositionY = -gameHeight;
        }

        if (road2PositionY >= gameHeight)
        {
            road2PositionY = -gameHeight;
        }
        
        //process events
		if(inputManager.isLeftPressed())
			playerObj.moveLeft();
		
		if(inputManager.isRightPressed())
			playerObj.moveRight();
                
        if(inputManager.isUpPressed())
        {
            if(isGameStart==false)
            {
                isGameStart=true;
                speed = INITIAL_VELOCITY;                    
            }
            if(speed <= UPPER_VELOCITY && isGameStart)
            {
                speed += VELOCITY_CHANGE;        
            }
        }
            
        if(inputManager.isDownPressed())
        {
            if(speed >= LOWER_VELOCITY && isGameStart)
            {
                speed -= VELOCITY_CHANGE;
            }            
        }
        
	}
	
	function draw()
	{
        ctx.clearRect(0, 0, 500, 600);	
        //drawing road
	   ctx.drawImage(allImages[GAME_BG], 0, road1PositionY);
	   ctx.drawImage(allImages[GAME_BG], 0, road2PositionY);
	   ctx.drawImage(allImages[playerObj.getImageIndex()], playerObj.getX(), playerObj.getY());
		
	}
	
	
}