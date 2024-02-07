let número = 10;

let Erro = prompt("Digite um número de 1 a 10");


if (Erro == número) {
    alert("Parabéns, você descobriu o número secreto")
}else{
    alert("Você Errou!")
   if (Erro < número){
    alert("O número secreto é maior que "+ Erro)
   }else{
    alert("O número secreto é menor que "+ Erro)
   }
}