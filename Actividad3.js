/*Con ayuda de ciclos imprime los primeros 50 números de la suceción de fibonacci, (1,1,2,3,5,8,13,21).
Comienza con 0 y 1 , y el siguiente numero es la suma de los 2 anteriores */

//Tamaño del arreglo que dictara cuantos número de la serie queremos
let T = 50;
let Fibo = new Array(T);

//Valores para comenzar con la serie 
Fibo[0] = 0;
console.log("Valor para la posición",1,"es:",Fibo[0]) //verifica que se haya generado bien el arreglo
Fibo[1] = 1;
console.log("Valor para la posición",2,"es:",Fibo[1]) //verifica que se haya generado bien el arreglo

for (let i=2; i < T ; i++){
    Fibo[i] = Fibo[i-1] + Fibo[i-2];
    //console.log(Fibo[i])
    console.log("Valor para la posición",i+1,"es:",Fibo[i]) //verifica que se haya generado bien el arreglo
}