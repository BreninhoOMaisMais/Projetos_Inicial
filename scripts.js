var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);  
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var num = document.getElementById("num");

function alertar(){

    // buscar o endereço pelo cep
    const url = `https://viacep.com.br/ws/${cep.value}/json`;

    fetch(url) 
      .then(resposta=>resposta.json())
      .then(data => {
            logradouro.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.cidade;
            estado.value = data.uf;

            alert(nome.value + " " + "clicou no botão!!!");
            saida.innerText = 
            "Nome: " + " " + nome.value +
            "\n E-mail: " + " " + email.value + 
            "\n Telefone: " + " "+ telefone.value +
            "\n CEP: " + " " + cep.value +
            "\n Logradouro: " + " " + log.value+
            "\n Número: " + " " + num.value ;

    })
    .catch(error=>alert(error))


}