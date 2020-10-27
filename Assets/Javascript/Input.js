function Input()
{

	var leftKeyPressed;
	var rightKeyPressed;
	var upKeyPressed;
    var downKeyPressed;
    
	this.isLeftPressed = checkLeft;
	this.isRightPressed = checkRight;
    this.isUpPressed = checkUp;
	this.isDownPressed = checkDown;
	this.setLeftKey = leftSetter;
	this.setRightKey = rightSetter;
    this.setUpKey = UpSetter;
	this.setDownKey = DownSetter;
	
	function checkLeft()
	{
		return leftKeyPressed;
	}
	
	function checkRight()
	{
		return rightKeyPressed;
	}
    
    function checkUp()
	{
		return upKeyPressed;
	}
	
	function checkDown()
	{
		return downKeyPressed;
	}
	
	function leftSetter(val)
	{
		leftKeyPressed = val;
	}
	
	function rightSetter(val)
	{
		rightKeyPressed = val;
	}
    
    function UpSetter(val)
	{
		upKeyPressed = val;
	}
	
	function DownSetter(val)
	{
		downKeyPressed = val;
	}
}