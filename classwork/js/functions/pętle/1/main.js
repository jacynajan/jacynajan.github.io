//for(var i = 1; i < 20; i++) {
//    console.log(i);
//}
//

//var samochody = ['opel', 'audi', 'honda', 'fiat'];
//
//for(var i = 0; i < samochody.length; i++) {
//	
//	console.log(samochody[i]);
//}
//
//
//samochody.forEach(function(elementTablicy) {
//				  console.log( elementTablicy );
//});

//var iterator = 15;
////while(iterator < 12) {
////	console.log('iteracja - ' + iterator);
////	iterator++;
////}
//
//do {
//	console.log('Do While');
//	iterator++;
//} while(iterator < 12);

//for(var i = 1; i < 40; i++) {
//	if( i > 15) {
//		break;
//	} 
//	console.log('iteracja - ' + i);
//}

for(var i = 1; i < 26; i++) {
	if(i % 2 == 0) {
		continue;
	}
	console.log('iteracja - ' + i);
}