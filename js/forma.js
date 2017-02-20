function dugme(){
	var ime = document.getElementById('a');
	var prezime = document.getElementById('b');
	var posta = document.getElementById('c');
	var adresa = document.getElementById('d');
	
	
	var radios = document.getElementsByName('side');
	var vrednost;
	
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].type === 'radio' && radios[i].checked) {
			
			vrednost = radios[i].value;       
		}
	}
	if(ime.value == "" || prezime.value == "" || posta.value == "" || adresa.value == "" ){
		alert("Popuni sva polja!");
	}else if(posta.value.indexOf('@') == -1){
		alert("E-mail adresa treba da sadrzi @ simbol.");
	}
	else{
		alert("Osoba "+ a.value +" "+ b.value + " je narucila kartu za "+vrednost+".");
	}
}

