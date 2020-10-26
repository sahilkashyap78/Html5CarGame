function Enemy()
{
	var x,y,w,h;
	var enemyType;
	this.init = initializer;

	this.getX = xGetter;
	this.getY = yGetter;
	this.getEnemyType = enemyTypeGetter;
	this.getW = wGetter;
	this.getH = hGetter;
	
	function initializer(_x, _y, _w, _h, _enemyType)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		enemyType = _enemyType;
	}
	
	function xGetter()
	{
		return x;
	}
	
	function yGetter()
	{
		return y;
	}
	
	function enemyTypeGetter()
	{
		return enemyType;
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