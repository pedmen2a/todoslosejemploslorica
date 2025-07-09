var objEst={
    cedula:null,
    nombre:null,
    apellidos:null,
    nota1:null,
    nota2:null,
    nota3:null
}
var myArrayEst=[];
function guardarDatos(){
    objEst.cedula=document.getElementById("cedula").value;
    objEst.nombre=document.getElementById("nombre").value;
    objEst.apellidos=document.getElementById("apellido").value;
    objEst.nota1=parseFloat(document.getElementById("nota1").value);
    objEst.nota2=parseFloat(document.getElementById("nota2").value);
    objEst.nota3=parseFloat(document.getElementById("nota3").value);
    let resultado=JSON.parse(JSON.stringify(objEst));
    myArrayEst.push(resultado);


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
        salida+= '</tr>';
    }
    document.getElementById("estudiantesList").innerHTML=salida;
}