//ACTIVIDAD INTRO JAVA SCRIPT
/*Resolviendo la primera parte de la actividad 
Dado un arreglo de números enteros, 
Imprimir solamente aquellos que son denominados números primos*/

//arreglo Dado para el ejercicio
const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

/*definiere el máximo para saber hasta 
que numero dividir para hayar los # primos*/
let numero_max = m = Math.max(...ejercicio1);
// console.log("El máximo del arreglo fue:",numero_max) //comprueba que sirvió el MAX
let arreglo = new Array(numero_max-1);

/*Creo un arreglo de numeros desde 2 hasta el valor max
omitiremos en 1 porque todos son divisibles entre él*/
for (let i=0; i < arreglo.length; i++){
    arreglo[i]=i+2;
  //console.log("valor de los arreglos:",arreglo[i]) //verifica que se haya generado bien el arreglo
}

//ciclo para recorrer los numeros a probar
for ( let i=0; i<= ejercicio1.length-1;i++){
    p=0 // este contara las veces que el numero es divisible
    //ciclo recorre arreglo para las divisiones
    for (let j=0; j<=arreglo.length; j++){
        //división entre el número y un valor del arreglo
        primo = ejercicio1[i]/arreglo[j];
        //Si el resultado da entero se agrega 1 a un contador
        if (Number.isInteger(primo)){
            p=p+1;
        }
        
    }
    //Si P = 1, quiere decir que solo se divide entre si mismo
    if (p==1){
        console.log("El número",ejercicio1[i],"es primo")
    }
}


//FIN ! 