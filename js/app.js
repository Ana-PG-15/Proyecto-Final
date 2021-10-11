//Declaración de variables
var lblNumero = document.getElementById("lbl-numero")
var txtNumero = document.getElementById("txt-numero")
var lblSigno = document.getElementById("lbl-signo")
var btn0 = document.getElementById("num0")
var btn1 = document.getElementById("num1")
var btn2 = document.getElementById("num2")
var btn3 = document.getElementById("num3")
var btn4 = document.getElementById("num4")
var btn5 = document.getElementById("num5")
var btn6 = document.getElementById("num6")
var btn7 = document.getElementById("num7")
var btn8 = document.getElementById("num8")
var btn9 = document.getElementById("num9")
var btnRaiz = document.getElementById("btn-Raiz")
var btnLn = document.getElementById("btn-ln")
var btnLog = document.getElementById("btn-log")
var btnExpo = document.getElementById("btn-expo")
var btnC = document.getElementById("btn-clear")
var btnCE = document.getElementById("btn-backspace")
var btnMulti = document.getElementById("btn-multi")
var btnDiv = document.getElementById("btn-div")
var btnSuma= document.getElementById("btn-suma")
var btnMenos = document.getElementById("btn-menos")
var btnPunto = document.getElementById("btn-punto")
var btnPor = document.getElementById("btn-poten")
var btnAns = document.getElementById("btn-guarda")
var btnIgual = document.getElementById("btn-igual")


//Variables Internas
var n1 = 0
var n2 = 0
var Ans = 0
var simbolo = " "

//****ESCUCHA DE FUNCIONES*****
btn0.addEventListener('click',interaccionesNumeros)
btn1.addEventListener('click',interaccionesNumeros)
btn2.addEventListener('click',interaccionesNumeros)
btn3.addEventListener('click',interaccionesNumeros)
btn4.addEventListener('click',interaccionesNumeros)
btn5.addEventListener('click',interaccionesNumeros)
btn6.addEventListener('click',interaccionesNumeros)
btn7.addEventListener('click',interaccionesNumeros)
btn8.addEventListener('click',interaccionesNumeros)
btn9.addEventListener('click',interaccionesNumeros)
btnPunto.addEventListener('click',interaccionesNumeros)
btnRaiz.addEventListener('click',simboloOperacion)
btnLn.addEventListener('click',simboloOperacion)
btnLog.addEventListener('click',simboloOperacion)
btnExpo.addEventListener('click',simboloOperacion)
btnMulti.addEventListener('click',simboloOperacion)
btnDiv.addEventListener('click',simboloOperacion)
btnSuma.addEventListener('click',simboloOperacion)
btnMenos.addEventListener('click',simboloOperacion)                           
btnPor.addEventListener('click',simboloOperacion) 
btnIgual.addEventListener('click',realizarOperacion)
btnCE.addEventListener('click', borrar)
btnC.addEventListener('click', borrarUno)                                                        
btnAns.addEventListener('click', guardarRespuesta)
                         
                               
// *FUNCIONES *
function interaccionesNumeros (){
  txtNumero.value = txtNumero.value + this.value
                            }
function simboloOperacion(){simbolo = this.value 
                             lblSigno.innerHTML = simbolo
                             n1 = parseFloat(txtNumero.value)
                             txtNumero.value = "" }

function realizarOperacion(){
  n2 = parseFloat(txtNumero.value)
  switch (simbolo) {
    case "+":
      {
      Ans = (n1+n2) 
      txtNumero.value = Ans
      break
      } 
      
    case "-":
      {
      Ans = (n1-n2) 
      txtNumero.value = Ans
      break
      }
      
    case "&times;":
      {
      Ans = (n1*n2) 
      txtNumero.value = Ans
      break
      }
    case "&#247":
      {
       Ans = (n1/n2) 
      txtNumero.value = Ans
      break
      }
      case "%":
      {
       Ans = (n1*n2/100) 
      txtNumero.value = Ans
      break
      }
      case "√":
      {
       Ans = (Math.sqrt(n1)) 
      txtNumero.value = Ans
      break
      }
      case "Ln":
      {
       Ans = (Math.log(n1)) 
      txtNumero.value = Ans
      break
      }
      case "Log":
      {
       Ans = ( Math.log10(n1)) 
      txtNumero.value = Ans
      break
      }
      case "x2":
      {
       Ans = (Math.pow(n1,n2)) 
      txtNumero.value = Ans
      break
      }
      
}
}

function borrar(){txtNumero.value = " "}
function borrarUno(){Ans = txtNumero.value
                          simbolo = Ans.substring(0,Ans.length-1)
                          txtNumero.value = simbolo
                         }
function guardarRespuesta(){txtNumero.value = Ans}
// Guia de funciones Scarleth 10