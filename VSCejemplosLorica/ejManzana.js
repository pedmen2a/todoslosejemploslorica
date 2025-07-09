var salida='';
function calcular() {
            const items = document.getElementById("items").value;
            const cantm = document.getElementById("cantm").value;
            const valorCaja = document.getElementById("valorCaja").value;

            if(items===''|| cantm === "" || valorCaja === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }
            const total = (1*parseFloat(valorCaja))/parseInt(cantm);
            salida+='<tr><td>'+items+'</td>'+
            '<td>'+cantm+'</td>'+'<td>'+valorCaja+'</td>'+
            '<td>'+total.toFixed(2)+'</td></tr>';
            document.getElementById("resultado").innerHTML = salida; limpiar();
        }
function limpiar() {
            document.getElementById("items").value = "";
            document.getElementById("cantm").value = "";
            document.getElementById("valorCaja").value = "";
            document.getElementById("items").focus();
        }