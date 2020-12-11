//ELEGIR CASILLEROS
const casilleros = document.getElementsByClassName('casilleroTateti');

const jugador = document.getElementById("jugador")
//PARTICIPANTES
const participantes = ['X', 'O'];

//CONTROL TURNOS
let block = false
let contador = 0;
let xWin = 0
let oWin = 0
const elegirCasillero = (id) => {
  if (document.getElementById(id).innerHTML === '' && block == false){
    
    if (contador % 2 === 0) {
      document.getElementById(id).innerHTML = 'X'
      document.getElementById("jugador").innerText = "Turno de O"
      contador++
    } else {
      document.getElementById(id).innerHTML = 'O';
      document.getElementById("jugador").innerText = "Turno de X"
      contador++
    }
  }
  return document.getElementById(id).innerHTML
}

//VALIDAR GANADOR
let verticales = 0
let horizontales = 0
let diagonales = 0
const victoria = () => {
  
  let caja1 = casilleros[0].innerHTML
  let caja2 = casilleros[1].innerHTML
  let caja3 = casilleros[2].innerHTML
  let caja4 = casilleros[3].innerHTML
  let caja5 = casilleros[4].innerHTML
  let caja6 = casilleros[5].innerHTML
  let caja7 = casilleros[6].innerHTML
  let caja8 = casilleros[7].innerHTML
  let caja9 = casilleros[8].innerHTML
  
  
  // verticales
  if (block == false && ((caja1 === caja4 && caja4 === caja7 && caja7 !== "") || (caja2 === caja5 && caja5 === caja8 && caja8 !== "") || (caja3 === caja6 && caja6 === caja9 && caja9 !== ""))){
    if (contador % 2 == 0){
      document.getElementById("jugador").innerText = 'Ganó "O"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      verticales++
      oWin++
      oWin >= 1 ? document.getElementById("victoriaO").innerText = `Victorias "O": ${oWin}`: null
      block = true
      
    } else {
      document.getElementById("jugador").innerText = 'Ganó "X"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      verticales++
      xWin++
      xWin >= 1 ? document.getElementById("victoriaX").innerText = `Victorias "X": ${xWin}`: null
      block = true
      
    }
  }
  
  // horizontales
  if (block == false && ((caja1 === caja2 && caja2 === caja3 && caja3 !== "") || (caja4 === caja5 && caja5 === caja6 && caja6 !== "") || (caja7 === caja8 && caja8 === caja9 && caja9 !== ""))){
    if (contador % 2 == 0){
      document.getElementById("jugador").innerText = 'Ganó "O"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      horizontales++
      oWin++
      oWin >= 1 ? document.getElementById("victoriaO").innerText = `Victorias "O": ${oWin}`: null
      block = true
      
    } else{
      document.getElementById("jugador").innerText = 'Ganó "X"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      xWin++
      xWin >= 1 ? document.getElementById("victoriaX").innerText = `Victorias "X": ${xWin}`: null
      horizontales++
      block = true
      
    }
  }
  
  // diagonales
  if (block == false && ((caja1 === caja5 && caja5 === caja9 && caja9 !== "") || (caja3 === caja5 && caja5 === caja7 && caja7 !== ""))){
    if (contador % 2 == 0){
      document.getElementById("jugador").innerText = 'Ganó "O"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      diagonales++
      oWin++
      oWin >= 1 ? document.getElementById("victoriaO").innerText = `Victorias "O": ${oWin}`: null
      block = true
      
    } else{
      document.getElementById("jugador").innerText = 'Ganó "X"'
      let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
      diagonales++
      xWin++
      xWin >= 1 ? document.getElementById("victoriaX").innerText = `Victorias "X": ${xWin}`: null
      block = true
     
    }
  }
  //empate 
  if(contador == 9){
    if(verticales == 0 && horizontales == 0 && diagonales == 0){ document.getElementById("jugador").innerText ='Empate!'
    let winXcss = document.getElementById("jugador").style.setProperty("color"," #4f00a3")
    }
  }
  
}
//ACTUALIZAR PARTIDA
const restart = () => {
  for (let i = 0; i < casilleros.length; i++){
    casilleros[i].innerHTML = ""
  }
  document.getElementById("jugador").innerText ='Empieza "X"'
  verticales = 0
  horizontales = 0
  diagonales = 0
  contador = 0
  block = false
  let winXcss = document.getElementById("jugador").style.setProperty("color","#8a2bf0")

}

//dark mode
const darkMode = () => {
  document.body.classList.toggle('dark')
  console.log()
  
}


const start = () => {
  for (let i = 0; i < casilleros.length; i++){
    casilleros[i].addEventListener("click", () => elegirCasillero(casilleros[i].id))
    casilleros[i].addEventListener("click", () => victoria()) 
  }
  const btnRest = document.getElementById("reset").addEventListener("click", () => restart())
  const btnTheme = document.getElementById("darkMode")
  btnTheme.addEventListener("click", () => darkMode())
};




window.onload = start
