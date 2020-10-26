var allImages;
var allImagePaths;
var totalImages;
var loadedImageCount;

var GAME_BG;
var PLAYER_CAR;
var AUDI_IMG;
var BLACK_VIPER_IMG;
var AMBULANCE_IMG;
var MINITRUCK_IMG;
var MINIVAN_IMG;
var POLICE_IMG;
var TAXI_IMG;
var TRUCK_IMG;



function loadImages()
{
	allImagePaths = new Array();
	var i = 0;
	allImagePaths[i] = IMAGES_PATH + "road.jpg";
	GAME_BG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Car.png";
	PLAYER_CAR = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Audi.png";
	AUDI_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Black_viper.png";
	BLACK_VIPER_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Ambulance.png";
	AMBULANCE_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Mini_truck.png";
	MINITRUCK_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "Mini_van.png";
	MINIVAN_IMG = i;
	i++;
    
    allImagePaths[i] = IMAGES_PATH + "Police.png";
	POLICE_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "taxi.png";
	TAXI_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "truck.png";
	TRUCK_IMG = i;
	i++;
	
	totalImages = i;
	
	loadedImageCount = 0;
	allImages = new Array();
	for(i = 0; i < totalImages; i++)
	{
		allImages[i] = new Image();
		allImages[i].onload = imageLoaded;
		allImages[i].src = allImagePaths[i];
	}
}

function imageLoaded()
{
	loadedImageCount++;
	if(loadedImageCount != totalImages)
		return;
	
}