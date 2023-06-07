function Saludo() {
    alert("Bienvenido usuario");
    alert("A continuacion encontraras unos botones que ejecutan algoritmos con js puro");
}

function suma() {
    let A = 0;
    let B = 0;
    let SUMA = 0;
    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A SUMAR"));

    SUMA = A + B;
    alert("EL RESULTADO DE LA SUMA ES: " + SUMA);

}

function OPERACIONES () {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let F = 0;
    let G = 0;
    let H = 0;


    let OPERACIONES  = 0;
    let RESTA = 0;
    let MULTIPLICACION = 0;
    let DIVISION = 0;


    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A SUMAR"));

    OPERACIONES = A + B;
    alert("EL RESULTADO DE LA SUMA ES: " + OPERACIONES );

    C = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A RESTAR"));
    D = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A RESTAR"));

    RESTA = C - D;
    alert("EL RESULTADO DE LA RESTA ES: " + RESTA );

    E = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A MULTIPLICAR"));
    F = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A MULTIPLICAR"));

    MULTIPLICACION = E * F;
    alert("EL RESULTADO DE LA MULTIPLICACION ES: " + MULTIPLICACION );

    G = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR DE DIVISION"));
    H = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR DE DIVISION"));

    DIVISION = E / F;
    alert("EL RESULTADO DE LA DIVISION ES: " + DIVISION );  

}

function CUADRONUMERO () {
    let I = 0;
    let NUMEROCUADRADO = 0;
    I = parseInt(prompt("POR FAVOR INGRESE EL VALOR DEL NUMEROCUADRADO"));

    NUMEROCUADRADO = I * I;
    alert("EL RESULTADO DE NUMEROCUADRADO ES: " + NUMEROCUADRADO );

}

function AREATRIANGULO () {
    let BASE = 0;
    let ALTURA = 0;
    let AREATRIANGULO = 0;
    BASE = parseInt(prompt("POR FAVOR INGRESE LA BASE DE AREATRIANGULO"));
    ALTURA = parseInt(prompt("POR FAVOR INGRESE LA ALTURA DE AREATRIANGULO"));

    AREATRIANGULO = BASE * ALTURA /2;
    alert("EL RESULTADO DE AREATRIANGULO ES: " + AREATRIANGULO );


}
function ICAPITAL () {
    let CAPITAL = 0;
    let TASAI = 0.017;
    let NAÑOS = 0;
    let MONTOFINAL=0;
    let MESES= 0;
    let INTERESES2 =0;

    CAPITAL = parseInt(prompt("POR FAVOR INGRESE EL CAPITAL INVERTIDO"));
    NAÑOS = parseInt(prompt("POR FAVOR INGRESE LA CANTIDAD DE AÑOS"));
    MESES=NAÑOS*12;
    INTERESES2=CAPITAL*TASAI;
    MONTOFINAL=INTERESES2*MESES;
    alert("la ganancia de la inversion en:"+NAÑOS+" NAÑOS "+" ES DE "+MONTOFINAL+CAPITAL );

    
}

function PROMEDION () {
    let NOTA1 = 0;
    let NOTA2 = 0;
    let NOTA3 = 0;
    let NOTA4 = 0;
    let NOTA5 = 0;
    let NOTA6 = 0;
    let NOTA7 = 0;
    let PROMEDION =0;

    NOTA1 = parseInt(prompt("POR FAVOR INGRESE NOTA1"));
    NOTA2 = parseInt(prompt("POR FAVOR INGRESE NOTA2"));
    NOTA3 = parseInt(prompt("POR FAVOR INGRESE NOTA3"));
    NOTA4 = parseInt(prompt("POR FAVOR INGRESE NOTA4"));
    NOTA5 = parseInt(prompt("POR FAVOR INGRESE NOTA5"));
    NOTA6 = parseInt(prompt("POR FAVOR INGRESE NOTA6"));
    NOTA7 = parseInt(prompt("POR FAVOR INGRESE NOTA7"));

    PROMEDION = NOTA1 + NOTA2 + NOTA3 + NOTA4 + NOTA5 + NOTA6 + NOTA7 /7;
    alert("EL PROMEDIO OBTENIDO ES: " + PROMEDION );

    if (PROMEDION>6.1) {
        alert ("APROBO CON:" + PROMEDION );
    } else {
        alert ("REPROBO CON:" + PROMEDION );
    }

}

function MAYORDEDOSNUMEROS () {
    let NUMERO1 = 0;
    let NUMERO2 = 0;

    NUMERO1 = parseInt(prompt("POR FAVOR INGRESE NUMERO1"));
    NUMERO2 = parseInt(prompt("POR FAVOR INGRESE NUMERO2"));

    if (NUMERO1==NUMERO2) {
        alert ("LOS VALORES SON IGUALES");
    } 
    else if(NUMERO1>NUMERO2){
        alert ("EL NUMERO MAYOR ES:" + NUMERO1);
    }
    else {
        alert ("EL NUMERO MAYOR ES:" + NUMERO2);
    }
    
}

function MENORDETRESNUMEROS () {
    let NUMERO1 = 0;
    let NUMERO2 = 0;
    let NUMERO3 = 0;


    NUMERO1 = parseInt(prompt("POR FAVOR INGRESE NUMERO1"));
    NUMERO2 = parseInt(prompt("POR FAVOR INGRESE NUMERO2"));
    NUMERO3 = parseInt(prompt("POR FAVOR INGRESE NUMERO3"));


    if ((NUMERO1==NUMERO2)&&(NUMERO1==NUMERO3)) {
        alert ("LOS VALORES SON IGUALES");
    } 
    else if((NUMERO1<NUMERO2)&&(NUMERO1<NUMERO3)) {
        alert ("EL NUMERO MENOR ES:" + NUMERO1);
    }   
    else if((NUMERO2<NUMERO1)&&(NUMERO2<NUMERO3)) {
        alert ("EL NUMERO MENOR ES:" + NUMERO2);
    }   
    else {
        alert ("EL NUMERO MENOR ES:" + NUMERO3);
    }
}


function KILOSDESCUENTO () {
    let KILOS = 0;
    const PRECIO = 4500;
    let TOTAL =0;
    let DESCUENTO=0;

   
    KILOS = parseInt(prompt("POR FAVOR INGRESE los kilos"));
    if (KILOS<=2) {
        TOTAL=KILOS*PRECIO;
        alert ("EL CLIENTE DEBE PAGAR"+ TOTAL);
    }
    else if (KILOS<=5){
        TOTAL=KILOS*PRECIO;
        DESCUENTO=TOTAL*0.1;

        TOTAL=TOTAL-DESCUENTO;
        alert ("EL CLIENTE DEBE PAGAR"+ TOTAL);
    }
    else if (KILOS<=8){
        TOTAL=KILOS*PRECIO;
        DESCUENTO=TOTAL*0.16;

        TOTAL=TOTAL-DESCUENTO;
        alert ("EL CLIENTE DEBE PAGAR"+ TOTAL);
    }
    else (KILOS>=9)
    {
        TOTAL=KILOS*PRECIO;
        DESCUENTO=TOTAL*0.2;

        TOTAL=TOTAL-DESCUENTO;
        alert ("EL CLIENTE DEBE PAGAR"+ TOTAL);
     }
    }


