
/* Professor Cristiano Gonçalves 
 Calculando a média do aluno utilizando if e else. 
 Para exercicitar basta trocar as notas e você irá percerber que o resultado será diferente
*/
const nota1 = 9  
const nota2 = 8

 const  resultado = function(media) {
   media = (nota1 + nota2)/2 
    if(media >= 7) {
        console.log(`O aluno foi aprovado com média ${media}`) 
    }else {
        console.log(`O aluno foi reprovado com  ${media}`) 
    }
}
 
resultado()

