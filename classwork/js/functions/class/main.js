class Ogloszenie {
    constructor(tytul, opis, miasto, telefon, stan) {
        this.tytul = tytul;
        this.opis = opis;
        this.miasto = miasto;
        this.telefon = telefon;
        this.stan = stan;
    }
    pobierz() {
        var ogl = this.tytul + '\n' + this.opis + '\n' + this.miasto + '\n' + this.telefon + '\n' + this.stan;
        return ogl;
    }
}

var kolekcja = [];

var ogloszenieItem = new Ogloszenie('Sprzedam kota', 'kilka dzw', 'Szecin', '221312', 'używany');

kolekcja.push(ogloszenieItem.pobierz());

ogloszenieItem = new Ogloszenie('Wynajme rower', 'Rometa', 'Płock', '2112112', 'używany');
kolekcja.push(ogloszenieItem.pobierz());

console.log(kolekcja);