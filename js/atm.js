var nonchar = '';
var left1 = document.getElementById('left1');
var content = document.getElementById('content');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var pincode = document.getElementById('pincode');

left1.onclick = function english(){

    header.innerText = 'Please Insert Your Card !';
    choice1.innerText = 'Enter pincode';
    choice2.innerText = '';
    choice3.innerText = '';
}

left2.onclick = function espanol(){
    header.innerText = 'Por favor inserte su tarjeta!';
    choice1.innerText = '';
    choice2.innerText = 'Introduzca Pincode';
    choice3.innerText = '';
}

left3.onclick = function francias(){
    header.innerText = 'sil vous plaît insérez votre carte!';
    choice1.innerText = '';
    choice2.innerText = '';
    choice3.innerText = 'Entrez le code PIN';
}


function clearMode(){
    document.getElementById('pincode').value = '';
}


    function clickedButton(key){
        var pin= document.getElementById("pincode");
        pin.value = key;
        console.log(key)
    }
    function showClickedButton(pin){
        clickedButton(nonchar+=pin)
        console.log(pin);
    }

    



