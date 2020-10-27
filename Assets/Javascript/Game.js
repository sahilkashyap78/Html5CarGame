function Game()
{
	
	this.init = initializer;
	
	function initializer()
	{
        setIntervalID = setInterval(gameLoop, 10);
        
            
	}
	
	function gameLoop()
	{
		update();
		draw();
	}
	
	function update()
	{
    
        
        road1PositionY += 4;
	    road2PositionY += 4;
        if (road1PositionY >= gameHeight)
        {
            road1PositionY = -gameHeight;
        }

        if (road2PositionY >= gameHeight)
        {
            road2PositionY = -gameHeight;
        }

	}
	
	function draw()
	{
        ctx.clearRect(0, 0, 500, 600);	
        //drawing road
	   ctx.drawImage(allImages[GAME_BG], 0, road1PositionY);
	   ctx.drawImage(allImages[GAME_BG], 0, road2PositionY);
	
		
	}
	
	
}