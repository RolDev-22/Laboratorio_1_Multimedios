let par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere venenatis mi, quis euismod magna malesuada et. Ut iaculis arcu.";

let letter = "a";
function contadorLetra(letterVerification, frase){
    let arrayFrase = frase.split('');
    let contador = 0;

    for(let i=0; i < arrayFrase.length; i++)
    {
        if(arrayFrase[i] == letterVerification){
            contador ++;
        }
    }

    console.log(contador);


}

contadorLetra(letter,par);