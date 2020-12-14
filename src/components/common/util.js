export const _myColor = (value, type) => {
  // Eligir color de numeros segun sean de calificacion o dificultad
  if(type === "rating"){
    // rojo
    if (value < 3)
      return "#9C1E1E"
    // verde
    if (value >= 4)
      return "#339E21"
    // amarillo
    return "#FBC400"
  }

  if(type === "difficulty"){
    // rojo
    if (value >= 75)
      return "#9C1E1E"
    // verde
    if (value <= 40 )
      return "#339E21" 
    // amarillo
    return "#FBC400" 
  }
}