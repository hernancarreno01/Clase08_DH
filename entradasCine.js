function asientosDisponibles(asientos, asientoSolicitado) {
    if (asientos.includes(asientoSolicitado)) {
      return "Felicitaciones, el asiento número " + asientoSolicitado + " está disponible";
    } else {
      var asientosDisponibles = asientos.length;
      return "Lo sentimos, el asiento número " + asientoSolicitado + " está ocupado, pero aún quedan " + asientosDisponibles + " asientos disponibles";
    }
  }
  asientosDisponibles([15, 28, 44, 45, 70], 15);