function TacnoVreme(){
	var trenutno = new Date();
	var diem = "AM";
	var h = trenutno.getHours();
	var m = trenutno.getMinutes();
	var s = trenutno.getSeconds();
	
	if (h == 0){
		h = 12;
	} else if (h > 12){
		h = h - 12;
		diem = "PM";
	}
	if (h < 10){
		h = "0" + h;
	}
	if (m < 10){
		m = "0" + m;
	}
	if (s < 10){
		s = "0" + s;
	}
	var myClock = document.getElementById('sat');
	myClock.textContent = h-1 + " : " + m + " : " + s +  "  " + diem;
	setTimeout('TacnoVreme()', 1000);

}
TacnoVreme();

function Datum(){
	var danas = new Date();
	var d = danas.getDate();
	var m = danas.getMonth() + 1;
	var y = danas.getFullYear();
	
	var myDate = document.getElementById('datum');
	myDate.textContent = d + " / " + m + " / " + y ;
	setDate('Datum()');
	
}
Datum();
