function gravar(){

let titulo = document.getElementById("titulo").value;

let aluno = document.getElementById("aluno").value;

let msg = document.getElementById("msg").value;

    
 let textoMensagem = titulo + "\n" + msg + "\n" + aluno;

 document.getElementById("assunto").innerHTML = titulo;
 document.getElementById("estudante").innerHTML = aluno;
 document.getElementById("texto").innerHTML = msg;

 document.getElementById('titulo').value = " ";
 document.getElementById('aluno').value = " ";
 document.getElementById('msg').value = " ";
}

function excluir(){
  
    document.getElementById("assunto").innerText = " ";
    document.getElementById("estudante").innerText = " ";
    document.getElementById("texto").innerText = " ";
    alert("dados deletados");
}