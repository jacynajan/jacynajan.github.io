var ogloszenie = {
    tytul: 'Poszukiwany programista',
    opis: 'Lorem ipsum',
    data: '2018-06-17',
    wyswitlone: false,
    wyswietl: function() {
        if( this.wyswitlone == true) {
            console.log(this.tytul + '\n' + this.opis + '\n' + this.data);
        } else {
            console.log('brak ogłoszenia');
        }
    }
}

ogloszenie.wyswietl();

ogloszenie.wyswitlone = true;
ogloszenie.tytul = 'sprzedam opla';
ogloszenie.opis = 'new';
ogloszenie.wyswietl();
