/*### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂
Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario 
cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para 
cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, 
informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que 
tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).
## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números 
(el puntaje total del pastel).
determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones
 de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.
*Si lo consideran necesario, pueden implementar funciones extra.*/

import * as rs from "readline-sync";

function calcularPuntaje(sabor:number,presentacion:number,dificultad:number) : number {
    return sabor + presentacion + dificultad
}

function preguntarPuntaje(mensaje:string): number{
    let puntaje: number = rs.questionInt(mensaje)
    while(puntaje < 1 || puntaje > 5){
     console.log(`El puntaje valido debe ser entre 1-5 puntos`)
     puntaje = rs.questionInt(mensaje)

    }return puntaje
}
  
function determinarGanador() : void {
    
    let cantidadParticipantes: number = rs.questionInt("Ingrese la cantidad de participantes: ")
    let puntajeMaximo: number=0;
    let ganador: string="";
    let hayEmpate: boolean= false;


    for (let i:number =1; i<=cantidadParticipantes; i++){
        console.log(`Ingrese puntuacion del participante ${i}`)

        let sabor = preguntarPuntaje("Puntaje por sabor: ");
        let presentacion = preguntarPuntaje("Puntaje por presentación: ");
        let dificultad = preguntarPuntaje("Puntaje por dificultad: ");

        let calcularP: number = calcularPuntaje(sabor,presentacion,dificultad)
    if (calcularP > puntajeMaximo){

       puntajeMaximo = calcularP;
       ganador = `El ganador es ${i} con ${puntajeMaximo} puntos`
       hayEmpate = false
       
    } else if(calcularP == puntajeMaximo){ 
       hayEmpate = true
    }
    }

    if(hayEmpate){
       console.log(`Hubo un empate en el 1er puesto`) 
    }else{
        console.log(ganador)
    }
    
}

determinarGanador()

