function func(a, b) {
    
  if (a + b > 0) {
   console.log("Wynik dodawania wynosi " + (a + b));
  } else {
    console.log('Wynik jest ujemny');
  } 
    
   if (a - b > 0) {
   console.log("Wynik odejmowania wynosi " + (a - b));
  } else {
    console.log('Wynik jest ujemny');
  } 
    
   if (a * b > 0) {
    console.log("Wynik mnożenia wynosi " + (a * b));
  } else {
    console.log('Wynik jest ujemny');
  } 
    
}
func(-1, 2);