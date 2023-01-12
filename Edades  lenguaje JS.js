    
    var fechaactual = new Date();

    var fechaNacimiento = new Date("april 20, 2000");

    var edad = fechaactual.getFullYear() - fechaNacimiento.getFullYear();
    var meses = fechaactual.getMonth() - fechaNacimiento.getMonth();

console.log("La edad es: " + edad);         