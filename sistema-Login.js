//Cadastro do Cliente
var nameUsuario = prompt("Cadastre-se ! começando pelo nome de usuário:");
var senhaUsuario = prompt("Crie sua senha:");
var nomeCliente = prompt("Digite seu nome:");
var localizacao = prompt("Informe sua localização para começar a fazer seus pedidos:");

//Recebendo os dados do cliente
console.log(`Cadastro do cliente: ${nomeCliente} confirmado, localização: ${localizacao}`);

//Aviso que tudo ocorreu bem ao cliente
alert(`Esta tudo certo com seu cadastro! ${nomeCliente}`);
alert(`Faça login para fazer um pedido! ^^`);
//
var loginName = prompt("Digite seu nome de usuário");
var loginSenha = prompt("Digite sua senha para o login:");

//Login ao sistema
if( loginSenha == senhaUsuario){
    console.log("Senha correta, acesso ao sistema");
    alert(`Seja bem vindo ${nomeCliente} ! Comece a fazer seus pedidos!`);
    var pedidoComida = prompt("Olá faça o pedido de sua refeição:");
    var pedidoRefrigerante = prompt("Peça o seu refrigerante para acompanhar a comida:");
    alert(`Tudo certo ${nomeCliente}, seu pedido ${pedidoComida} acompanhado com ${pedidoRefrigerante}
    está a caminho de sua casa!`);
    console.log(`${nomeCliente} fez um pedido: ${pedidoComida} e ${pedidoRefrigerante}, entregar
    no endereço: ${localizacao}`);
}
else{console.log("Nome de usuário e senha incorretos, acesso ao sistema negado!");
     alert("Nome de usuário ou senha incorretos, acesso ao sistema negado!");
}
//fim