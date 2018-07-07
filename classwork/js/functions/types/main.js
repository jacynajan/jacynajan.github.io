//typ liczbowy

var wyplata = 5000;
var premia = 1200;

var wynagrodzenie = wyplata + premia;

console.log(wynagrodzenie);
console.log(typeof wynagrodzenie);

// typ string

var wyplataStr = '5000';
var premiaStr = '1200';

console.log(+ (wyplataStr) + +(premiaStr));

// typ logiczny 

var czyDzialaKlima = true;

if(czyDzialaKlima == false) {
    console.log('tak sobie');
} else {
    console.log('nie dziala');
}


//typy specjalne


var data;
console.log(data);

console.log(null <= 0);

var zakupy = 'zakupy robię \n w \'Biedrze\' i ok';
console.log(zakupy);
