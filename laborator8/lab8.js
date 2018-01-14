//exercitiul 8.1

var persoana = {
    nume: "Gabriela Boboc",
    varsta: 40,
    calitati: ["empatica", "sincera", "iubitoare de animale"]
};

console.log(persoana.nume);
console.log(persoana.varsta);

for(let i = 0; i<persoana.calitati.length;i++)
{
    console.log(persoana.calitati[i]);
}


// exercitiul 8.2

var film = {
    titlu: 'La moara cu noroc',
    durata: 130,
    actori: ['Constantin Codrescu', 'Olga Tudorache', 'Geo Barton']
}

function printMovie(film)
{
    var string = film.titlu + ' a durat ' + film.durata + ' minute. Actori: '
    
    for(let i = 0; i < film.actori.length; i++)
        string += film.actori[i]+' ';
    console.log(string);
}


printMovie(film);

// exercitiu 8.3

var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
}

function getCartValue(cart)
{
    var suma = parseFloat(cart.telefon) + 
               parseFloat(cart.consola)+
               parseFloat(cart.televizor)+
               parseFloat(cart.iepurasPlus)+
               parseFloat(cart.cercei)+
               parseFloat(cart.geanta);
               
    console.log(suma.toFixed(1));
}

getCartValue(blackFridayCart);


//exercitiul 8.4

function multiplicator(element)
{
    return 2*element;
}

var a = [1, 2, 3];

// pass a function to map
const map1 = a.map(multiplicator);

console.log(map1);