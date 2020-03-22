var secondArrow = document.querySelector(".second");
var minuteArrow = document.querySelector(".minute");
var hourArrow = document.querySelector(".hour");

//how many times have the arrows circled the clock
var xTimesS = 0;
var xTimesM = 0;

var secondLabel = document.querySelector('#second-label');
var minuteLabel = document.querySelector('#minute-label');
var hourLabel = document.querySelector('#hour-label');

var words = [
	"ნული", "ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი", "შვიდი", "რვა",
	"ცხრა", "ათი", "თერთმეტი", "თორმეტი", "ცამეტი", "თოთხმეტი", "თხუთმეტი",
	"თექვსმეტი", "ჩვიდმეტი", "თვრამეტი", "ცხრამეტი", "ოცი", "ოდაერთი", "ოცდაორი", "ოცდასამი", "ოცდაოთხი",
	"ოცდახუთი", "ოცდაექვსი", "ოცდაშვიდი", "ოცდარვა", "ოცდაცხრა", "ოცდაათი", "ოცდათერთმეტი", "ოცდათორმეტი",
	"ოცდაცამეტი", "ოცდათოთხმეტი", "ოცდათხუთმეტი", "ოცდათექვსმეტი", "ოცდაჩვიდმეტი", "ოცდათვრამეტი", "ოცდაცხრამეტი", "ორმოცი",
	"ორმოცდაერთი", "ორმოცდაორი", "ორმოცდასამი", "ორმოცდაოთხი", "ორმოცდახუთი", "აღარშემიძლია", "ომროცდაშვიდი", "ორმოცდარვა", "ორმოცდაცხრა",
	"ორმოცდაათი", "ორმოცდათერთმეტი", "ორმოცდათორმეტი", "ორმოცდაცამეტი", "ომროცდათოთხმეტი", "ომროცდათხუთმეტი", "ორმოცდათექვსმეტი", "ორმოცდაჩვიდმეტი",
	"ორმოცდათვრამეტი", "ორმოცდაცხრამეტი"
];

setInterval(function(){

	var jetzt = new Date();
	var seconds = jetzt.getSeconds();
	if(seconds == 0){
		xTimesS++;
	}
	var degreeSecond = 360 * xTimesS + seconds * 6 + 90;
	var transformStringS = 'rotate(' + degreeSecond + 'deg)' ;
	secondArrow.style.transform =  transformStringS;
	secondLabel.innerText = words[seconds%60];

	var minutes = jetzt.getMinutes();
	var degreeMinute =360 * xTimesM + minutes*6 + 90;
	if(minutes == 0){
		xTimesM++;
	}
	var transformStringM = 'rotate(' + degreeMinute + 'deg)';
	minuteArrow.style.transform = transformStringM;
	minuteLabel.innerText = words[minutes%60];

	var hours = jetzt.getHours();
	var degreeHour = hours*6+90;
	var transformStringH ='rotate(' + degreeHour + 'deg)';
	hourArrow.style.transform = transformStringH;
	hourLabel.innerText = words[hours%12];

}, 1000);