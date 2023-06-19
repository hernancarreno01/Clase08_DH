function calcularPromedioGraduados(html5, css3, javascript, nodejs, curso) {
    // Convertir las cadenas de texto a arrays separados por comas
    html5 = html5.split(" ");
    css3 = css3.split(" ");
    javascript = javascript.split(" ");
    nodejs = nodejs.split(" ");
  
    // Verificar el curso solicitado y calcular el promedio correspondiente
    let graduados;
    switch (curso) {
      case 1:
        graduados = html5;
        break;
      case 2:
        graduados = css3;
        break;
      case 3:
        graduados = javascript;
        break;
      case 4:
        graduados = nodejs;
        break;
      default:
        return "El número de curso debe estar entre 1 y 4.";
    }
  
    // Calcular el promedio de graduados
    let suma = 0;
    for (let i = 0; i < graduados.length; i++) {
      suma += parseInt(graduados[i]);
    }
    const promedio = suma / graduados.length;
  
    return `El promedio de graduados del curso ${curso} es: ${promedio}`;
  }
  
  // Datos de graduados por curso
  const graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
  const graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
  const graduadosJavascript = "70 65 58 45 23 57 34 17 72";
  const graduadosNodeJS = "45 56 73 34 65 72 70 32";
  
  // Ejemplo de uso: calcular el promedio de graduados en CSS3 (curso 2)
  const promedioCSS3 = calcularPromedioGraduados(graduadosHTML5, graduadosCSS3, graduadosJavascript, graduadosNodeJS, 2);
  console.log(promedioCSS3);
  