document.getElementById("act").style.display ="none";
var objEst={
    cedula:null,
    nombre:null,
    apellidos:null,
    nota1:null,
    nota2:null,
    nota3:null
}
var myArrayEst=[];
var posAct;
comprobarLocalStorage();
function guardarDatos(){
    objEst.cedula=document.getElementById("cedula").value;
    objEst.nombre=document.getElementById("nombre").value;
    objEst.apellidos=document.getElementById("apellido").value;
    objEst.nota1=parseFloat(document.getElementById("nota1").value);
    objEst.nota2=parseFloat(document.getElementById("nota2").value);
    objEst.nota3=parseFloat(document.getElementById("nota3").value);
    let resultado=JSON.parse(JSON.stringify(objEst));
    myArrayEst.push(resultado);
    guardarLocalStorage();
    console.log(myArrayEst);
    limpiarCajas();
    mostrarDatos();
    
}
function limpiarCajas(){
    document.getElementById("cedula").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("nota1").value="";
    document.getElementById("nota2").value="";
    document.getElementById("nota3").value="";
    document.getElementById("cedula").focus();
}
function mostrarDatos(){
    var salida='';
    for(var i=0;i< myArrayEst.length;i++){
        salida+= '<tr>';
        salida+= '<td>'+myArrayEst[i].cedula+'</td>';
        salida+= '<td>'+myArrayEst[i].nombre+'</td>';
        salida+= '<td>'+myArrayEst[i].apellidos+'</td>';
        salida+= '<td>'+myArrayEst[i].nota1+'</td>';
        salida+= '<td>'+myArrayEst[i].nota2+'</td>';
        salida+= '<td>'+myArrayEst[i].nota3+'</td>';
        salida+= '<td>'+notafinal(myArrayEst[i].nota1,myArrayEst[i].nota2,myArrayEst[i].nota3)+'</td>';
        salida+= '<td>'+ estado(notafinal(myArrayEst[i].nota1,myArrayEst[i].nota2,myArrayEst[i].nota3))+'</td>';
        salida+= '<td>'+ ecualitativa(notafinal(myArrayEst[i].nota1,myArrayEst[i].nota2,myArrayEst[i].nota3))+'</td>';
        salida+= '<td>'+'<button onclick="editarEstudiante('+i+')">Editar</button>';
        salida+= '<button onclick="eliminarEstudiante('+i+')">Elininar</button>'+'</td>';
        salida+= '</tr>';
    }
    document.getElementById("estudiantesList").innerHTML=salida;
}
function notafinal(n1,n2,n3){
    return ((n1+n2+n3)/3).toFixed(2);
}

function estado(nota){
    if(nota>=3.0){
        return "Aprobado";
    }else{
        return "Reprobado";
    }
}
function ecualitativa(nota){ 
        let calificacion; 
        if(nota>=0 && nota<2.0){
            calificacion="Insuficiete"
        }
        else{
            if(nota>=2.0 && nota<3.0){
                calificacion="Deficiente";
            }
            else{
                if(nota>=3.0 && nota < 3.5){
                    calificacion="Buena";
                }
                else{
                    if(nota>=3.5 && nota < 4.0){
                        calificacion="Aceptable";
                    }
                    else{
                        if(nota >= 4.0 && nota < 4.5){
                            calificacion="Sobresaliente";
                        }
                        else{
                            if(nota >= 4.5 && nota <= 5.0){
                                calificacion="Excelente";
                            }
                            else{
                                calificacion="Nota no valida";
                            }
                        }
                    }
                }
            }
        }
         return calificacion;
}

function editarEstudiante(pos){
    posAct=pos;
    document.getElementById("cedula").value=myArrayEst[pos].cedula;
    document.getElementById("nombre").value=myArrayEst[pos].nombre;
    document.getElementById("apellido").value=myArrayEst[pos].apellidos;
    document.getElementById("nota1").value=myArrayEst[pos].nota1;
    document.getElementById("nota2").value=myArrayEst[pos].nota2;
    document.getElementById("nota3").value=myArrayEst[pos].nota3;
    document.getElementById("grd").style.display="none";
    document.getElementById("act").style.display="block";

}

function eliminarEstudiante(pos){
    myArrayEst.splice(pos,1);
    guardarLocalStorage();
    mostrarDatos();
}   
function actualizarDatos(){
    myArrayEst[posAct].cedula=document.getElementById("cedula").value;
    myArrayEst[posAct].nombre=document.getElementById("nombre").value;
    myArrayEst[posAct].apellidos=document.getElementById("apellido").value;
    myArrayEst[posAct].nota1=parseFloat(document.getElementById("nota1").value);
    myArrayEst[posAct].nota2=parseFloat(document.getElementById("nota2").value);
    myArrayEst[posAct].nota3=parseFloat(document.getElementById("nota3").value);
    document.getElementById("grd").style.display="block";
    document.getElementById("act").style.display="none";
    guardarLocalStorage();
    limpiarCajas();
    mostrarDatos();
}





function comprobarLocalStorage(){
    if(localStorage.getItem("alumno")!=null){
        myArrayEst=JSON.parse(localStorage.getItem("alumno"));
        mostrarDatos();
    }
}


function guardarLocalStorage(){
    localStorage.setItem("alumno",JSON.stringify(myArrayEst));
}

