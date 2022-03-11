//ACTIVIDAD 2 INTRO JAVA SCRIPT
/*Ramón quiere hacer una fiesta privada en donde solo entre un número
exclusivo de personas, ayudale al portero a solo dejar pasar a
aquellas personas mayores de edad que sean familiares de Ramón. (con
imprimir los usuarios que se admitirán basta, usar el arreglo
denominado como "ejercicio2").*/

//arreglo Dado para el ejercicio
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

//Declarando función para determinar si es mayor de edad
const admitirPaso = (persona) => {
    if (persona.edad >= 18) {
        if (persona.esFamiliar == true){
            console.log(persona.nombre)
        }
    }
}

//Función alternativa más corta
const AdmitirPaso = (persona){
  if (persona.edad>17 && persona.esFamiliar== true){
    console.log(persona.nombre)
  }
}

//Ciclo para recorrer el arreglo de personas
for (let i=0; i<=ejercicio2.length; i++){
    admitirPaso(ejercicio2[i]);
}