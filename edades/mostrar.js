function mostrar() {
     let edad1 = document.getElementById('edad1').value;
     let edad2 = document.getElementById('edad2').value;
     let edad3 = document.getElementById('edad3').value;
     edad1 = parseInt(edad1);
     edad2 = parseInt(edad2);
     edad3 = parseInt(edad3);
     if (edad1 == edad2 || edad2 == edad3 || edad1 == edad3) {
          document.getElementById('error').innerHTML = "ingresaste dos edades iguales!";
     } else {
          document.getElementById('error').innerHTML = "";

          if (edad1 > edad2 && edad1 > edad3) {
               if (edad2 > edad3) {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad1;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad2;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad3;
               } else {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad1;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad3;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad2;
               }
          } else if (edad2 > edad1 && edad2 > edad3) {
               if (edad1 > edad3) {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad2;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad1;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad3;
               } else {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad2;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad3;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad1;
               }
          } else if (edad3 > edad1 && edad3 > edad2) {
               if (edad1 > edad2) {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad3;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad1;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad2;
               } else {
                    document.getElementById('edadMayor').innerHTML = "EDAD MAYOR: " + edad3;
                    document.getElementById('edadMedio').innerHTML = "EDAD MEDIO: " + edad2;
                    document.getElementById('edadMenor').innerHTML = "EDAD MENOR: " + edad1;
               }
          }
     }
}
function vaciar() {
     document.getElementById('error').innerHTML = "";
     document.getElementById('edad1').value = "";
     document.getElementById('edad2').value = "";
     document.getElementById('edad3').value = "";
     document.getElementById('edadMayor').innerHTML = "";
     document.getElementById('edadMedio').innerHTML = "";
     document.getElementById('edadMenor').innerHTML = "";
}