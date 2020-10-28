function Player()
{
	var x,y,w,h;
    var MOVEMENT = 5;
	var imageIndex;	
	this.init = initializer;

	this.getX = xGetter;
	this.getY = yGetter;
	this.getW = wGetter;
	this.getH = hGetter;
    this.getImageIndex = imageIndexGetter;
    
    this.moveLeft = left;
	this.moveRight = right;

	
	function initializer(_x, _y, _w, _h,  _imageIndex)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		imageIndex = _imageIndex;
	}
    
    function left()
	{
		x = x - MOVEMENT;
		//HARDIK: RESTRICTING PADDLE INSIDE GAME-PLAY FROM LEFT-EDGE
		if(x < leftEdgeOfRoad)
			x = leftEdgeOfRoad;
	}

	function right()
	{
		x = parseFloat(x) + parseFloat(MOVEMENT);
		//HARDIK: RESTRICTING PADDLE INSIDE GAME-PLAY FROM RIGHT-EDGE
		//IF X + WIDTH-OF-PADDLE GET GREATER THAN SCREEN-WIDTH THEN, WE SET X = SCREEN-WIDTH - WIDTH-OF-PADDLE
		if(x + w > rightEdgeOfRoad)
			x = rightEdgeOfRoad - w;
	}
	
	function xGetter()
	{
		return x;
	}
	
	function yGetter()
	{
		return y;
	}
	
	function wGetter()
	{
		return w;
	}
	
	function hGetter()
	{
		return h;
	}
    
    function imageIndexGetter()
	{
		return imageIndex;
	}
}