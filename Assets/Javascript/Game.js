function Game()
{
    var lasttime;
	
	this.init = initializer;
    var speed = 100; //in pixel per second
	
	function initializer()
	{
        lastTime = new Date().getTime();
        setIntervalID = setInterval(gameLoop, 10);
        
            
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
        var distance = (timeElapsed / 1000) * speed;
        road1PositionY  += distance;
	    road2PositionY += distance;
        if (road1PositionY >= gameHeight)
        {
            road1PositionY = -gameHeight;
        }

        if (road2PositionY >= gameHeight)
        {
            road2PositionY = -gameHeight;
        }
        if(inputManager.isUpPressed())
            if(speed<=145)
                speed+=5;
        if(inputManager.isDownPressed())
            if(speed>=80)
                speed-=5;
	}
	
	function draw()
	{
        ctx.clearRect(0, 0, 500, 600);	
        //drawing road
	   ctx.drawImage(allImages[GAME_BG], 0, road1PositionY);
	   ctx.drawImage(allImages[GAME_BG], 0, road2PositionY);
	
		
	}
	
	
}