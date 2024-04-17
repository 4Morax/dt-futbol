/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

class jugador {
  constructor({nombre, apodo, apellido, fechaNacimiento}){
    this.nombre = nombre;
    this.apodo = apodo;
    this.apellido = apellido;
    this.fechaNacimiento = new Date(fechaNacimiento);
  }

  getEdad() {
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = this.fechaNacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < this.fechaNacimiento.getDate())) {
      return edad - 1;
    }

    return edad;
  }
}

const Lucho = new jugador({nombre:'Luciano', apodo:'Lucho', apellido:'Rodriguez', fechaNacimiento:'2003-07-16'});
const Nahitan = new jugador({nombre:'Nahitan', apodo:'', apellido:'Nandez', fechaNacimiento:'1995-12-28'});
const Fede = new jugador({nombre:'Federico', apodo:'Halcon', apellido:'Valverde', fechaNacimiento:'1998-07-22'}); 

let jugadores = [Lucho, Nahitan, Fede];

jugadores.forEach(jugador => {
  console.log('Nombre:', jugador.nombre);
  console.log('Apodo:', jugador.apodo);
  console.log('Apellido:', jugador.apellido);
  console.log('Edad:', jugador.getEdad());
});
