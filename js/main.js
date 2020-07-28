/* Un alert espone 5 numeri casuali.
Dopo la chiusura(manuale, cioè facendo click su ok) dell'alert, 
parte un timer di 30 secondi.
Dopo i 30 secondi l'utente deve inserire un prompt alla volta 
i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 
numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati. */

var list = [];
while (list.length < 5) {
    var numero = getRndInteger(1, 10);
    if (!trovaElemento(list, numero)) {
        list.push(numero);
    }
}
alert(list);
setTimeout(game, 3000); 


function game() { 
    var list1 = [];
    var numeriUtente = [];
    var cont = 0;
    while (numeriUtente.length < 5) {
        var numeri = parseInt(prompt('Inserisci i numeri visti precedentemente'));
        if (trovaElemento(numeriUtente, numeri)) {
            alert('Numero già inserito!! Inserisci un numero diverso !');
        }else {
            numeriUtente.push(numeri);
        }
    }
    
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < numeriUtente.length; j++) {
            if (list[i] == numeriUtente[j]) {
                list1.push(list[i]);
                cont++;
            }
        }
    }
   
    $('h2').text('Lista numeri generati:'+ ' ' + list);
    if (list1.length > 0) {   
        $('h3').text('Lista Numeri Trovati: ' + list1);
        $('p').text('Hai azzeccato ' + cont + ' numeri su ' + list.length);
    } else {
        $('h3').text('Hai perso!');
        $('p').text('Non hai azzeccato nessun numero');
    }
   /*  console.log(list);
    console.log(numeriUtente);
    console.log(list1); */
 }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trovaElemento(lista, elemento) {
    var i = 0;
    while (i < lista.length) {
        if (elemento == lista[i]) {
            return true;
        }
        i++;
    }
    return false;
}
