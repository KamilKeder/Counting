var input_date = document.querySelector("#input_date");
var input_time = document.querySelector("#input_time");
var button_odliczaj = document.querySelector("#button_odliczaj");
var display = document.querySelector("#display");
var data;

button_odliczaj.addEventListener("click",odliczaj);

function odliczaj(){
	data = new Date();
	if(new Date(input_date.value).getTime() <= data.getTime() || input_date.value == ""){
		alert("Nie można odliczać do tyłu")
	}else{
	var interwal = setInterval(function(){
	data = new Date();

	var data_rok = data.getFullYear();
	var data_miesiac = Number(data.getMonth())+1
	var data_dzien = data.getDate();
	var data_godzina = data.getHours();
	var data_minuta = data.getMinutes();
	var data_sekunda = data.getSeconds();
	var input_date1 = input_date.value;
	var input_dzien = input_date1.substring(
		input_date1.lastIndexOf("-")+1
		);
	var input_miesiac = input_date1.substring(
			input_date1.indexOf("-")+1,
		input_date1.lastIndexOf("-")
		);
	var input_rok = input_date1.substring(0,4);
	var input_time1 = input_time.value;
	var input_godzina = input_time1.substring(0,2);
	var input_minuta = input_time1.substring(3,5);
	
	var oblicz_rok = Number(input_rok) - Number(data_rok)
	var oblicz_miesiac = Number(input_miesiac) - Number(data_miesiac)
	var oblicz_dzien = Number(input_dzien) - Number(data_dzien)
	var oblicz_godzina = Number(input_godzina) - Number(data_godzina)
	var oblicz_minuta = Number(input_minuta) - Number(data_minuta)
	var oblicz_sekunda = 60 - Number(data_sekunda)

	if(oblicz_minuta<0){
		oblicz_minuta = oblicz_minuta + 60;
		oblicz_godzina = oblicz_godzina - 1;
	};
	if(oblicz_godzina<0){
		oblicz_godzina = oblicz_godzina + 24;
		oblicz_dzien = oblicz_dzien - 1;
	};
	if(oblicz_dzien<0){
		oblicz_dzien = oblicz_dzien + 30;
		oblicz_miesiac = oblicz_miesiac - 1;
	};
	if(oblicz_miesiac<0){
		oblicz_miesiac = oblicz_miesiac + 12;
		oblicz_rok = oblicz_rok - 1;
	};


	display.innerHTML = "<p class='mt-2 mb-2 ' style='font-weight: bold;'>Wybrana Data to:</p class='mt-0 mb-2 ' style='font-weight: bold;'><p id='selected'></p><p id='selected1'></p><p class='mt-0 mb-2 ' style='font-weight: bold;'>Pozostalo</p class='mt-0 mb-2 ' style='font-weight: bold;'><p id='selected2'></p><p id='selected3'></p>"
	document.querySelector("#selected").innerHTML = input_dzien+"-"+input_miesiac+"-"+input_rok;
	document.querySelector("#selected1").innerHTML = input_godzina+"-"+input_minuta;
	document.querySelector("#selected2").innerHTML = oblicz_rok+" lat "+oblicz_miesiac+" miesięcy "+oblicz_dzien+" dni";
	document.querySelector("#selected3").innerHTML = oblicz_godzina+" godzin "+oblicz_minuta+" minut "+oblicz_sekunda+" sekund";
},1000);
}}