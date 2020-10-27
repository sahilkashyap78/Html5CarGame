function Player()
{
	var x,y,w,h;
	var imageIndex;	
	this.init = initializer;

	this.getX = xGetter;
	this.getY = yGetter;
	this.getW = wGetter;
	this.getH = hGetter;
   
	
	function initializer(_x, _y, _w, _h,  _imageIndex)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		imageIndex = _imageIndex;
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
    
}