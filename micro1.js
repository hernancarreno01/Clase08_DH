// Paso a
var cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JAVASCRIPT", 10000],
    ["REACT", 7000],
    ["NODEJS", 15000]
  ];
  
  // Paso c
  function calcularMontoTotal(cursos, cursosSeleccionados) {
    var montoTotal = 0;
    cursosSeleccionados.forEach(function(cursoSeleccionado) {
      var cursoEncontrado = cursos.find(function(curso) {
        return curso[0] === cursoSeleccionado;
      });
  
      if (cursoEncontrado) {
        montoTotal += cursoEncontrado[1];
      }
    });
  
    return montoTotal;
  }
  
  // Paso d
  function obtenerMontoTotalYNombreCompleto(nombre, apellido, cursos, cursosSeleccionados) {
    var nombreCompleto = nombre + ' ' + apellido;
    var montoTotal = calcularMontoTotal(cursos, cursosSeleccionados);
  
    var mensaje =
      'Estimado ' + nombreCompleto + ', en función de los cursos seleccionados:\n';
    cursosSeleccionados.forEach(function(curso, index) {
      mensaje += (index + 1) + '.- ' + curso + '\n';
    });
  
    mensaje += 'El monto total a pagar es de: $' + montoTotal + '.\n';
    mensaje += 'Bienvenido a la gran aventura Digital House.';
  
    return mensaje;
  }
  
  // Paso e
  var nombreAlumno = 'Luis';
  var apellidoAlumno = 'Fuentes';
  var cursosSeleccionados = ['HTML5', 'CSS3', 'JAVASCRIPT', 'NODEJS'];
  
  var resultado = obtenerMontoTotalYNombreCompleto(nombreAlumno, apellidoAlumno, cursos, cursosSeleccionados);
  console.log(resultado);
/*
En este código, el paso a crea un array multidimensional llamado cursos que contiene los nombres de los cursos y sus respectivos precios.

La función calcularMontoTotal (paso c) recibe el array de cursos y el array de cursos seleccionados por el alumno. Utiliza el método forEach para iterar sobre los cursos seleccionados y busca el curso correspondiente en el array cursos. Si lo encuentra, suma el precio al montoTotal.

La función obtenerMontoTotalYNombreCompleto (paso d) recibe el nombre y apellido del alumno, el array de cursos y precios, y el array de cursos seleccionados. Calcula el monto total utilizando la función calcularMontoTotal y luego construye un mensaje que incluye el nombre completo del alumno, la lista de cursos seleccionados y el monto total.

En el paso e, se asignan los valores de ejemplo para el nombre, apellido y los cursos seleccionados. Luego se llama a la función obtenerMontoTotalYNombreCompleto con estos valores y se muestra el resultado en la consola.
*/  