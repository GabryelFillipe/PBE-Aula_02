/* ************************************************************************************************************
* Objetivo: Realizar o calculo de médias escolares, trabalhando com entrada de daods, váriaveis e condicionais
* Autor: Gabryel Fillipe
* Data: 01/08/2025
* Versão: 1.0.0
***************************************************************************************************************/
/** Formas de criar variaveis
 * Let   -> Permite criar um espaço em memoria(Variavel), deve-se obrigatoriamente utilizar apenas dentro de
 *        um bloco (IF,loop, function, etc). Essa variavel nasce e morre dentro desse bloco
 * Var   -> Permite criat um espaço em memoria (Variavel), porém é um metodo ,ais antigo de JS, quase não se utiliza 
 *        mais em projetos.
 * CONST -> Permite criar um espaço em memoria (constante), cujo conteúdo não sofre alteração durante o programa.
 *          Podemos criar uma const em qualquer parte do codigo. OBS: recomenda-se que a escrita de uma CONST seja em 
 *          Maiusculo
 * 
 * 
 * Formas de converção de dados:
 * String()     -> Permite converter um objeto ou variável em String
 * Number()     -> Permite converter um objeto ou variável em número(inteiro ou float)
 * parseInt()   -> Permite converter um objeto ou variável em inteiro
 * parseFloat() -> Permite converter um objeto ou variável em decimal 
 * Boolean()    -> Permite converter um objeto valor booleano (true/false)
 * Obeject()    -> Permite converter uma varoável em objeto (ARRAY, JSON, Classe)
 * 
 * 
 * toUpperCase() -> Converte uma String para MAIUSCULO
 * toLowerCase() -> Converte uma String para minúsculo
 * 
 * toFixed()     -> Permite limitar a quantidade de casas decimais
 * 
 * 
 * Operedores de comparação:
 * 
 * ==   -> Validação de igualdade entre conteúdos
 * <    -> Validação de menor valor
 * >    -> Validação de maior valor
 * >=   -> Validação de maior valor ou igualdade
 * <=   -> Validação de manor valor ou igualdade
 * !=   -> Validação de diferença entre conteúdos
 * ===  -> Validação de igualdade entre conteúdos, e  igualdade nos tipos de dados
 * !==  -> Validação de diferença entre conteúdos,  e  igualdade nos tipos de dados 
 *         (sempre verificar a documentação da linguagem)
 * !=!  -> Validação de diferença entre conteúdos e diferença nos tipos de dados
 * 
 * 
 * Operedores Lógicos:
 * E   AND  &&
 * OU  OR   ||
 * NÂO NOT  !
 */

//Import da biblioteca readline
var readline = require('readline')

// Criando um objeto para entrada e saída de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    //Recebe o call back e converte para MAISCULO
    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota1:', function(valor1){
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2:', function(valor2){
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota3:', function(valor3){
                let nota3 = valor3

                //Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4:', function(valor4){
                    let nota4 = valor4

                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == ''){
                        console.log('ERRO: Existem campos que não foram preenchidos.')
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: Não é possivel calcular com a entrada de letras')

                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log('ERRO: Os valores informados precisam ser entre 0 até 10')

                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno

                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        }else if(media < 7 && media >= 5){
                            statusAluno = 'EXAME'
                        }else if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }

                        console.log(`O alun(a) ${nomeAluno} teve a média: ${media.toFixed(1)} e está: ${statusAluno}`)
                    }

                })//Fechamento da nota4
            })//Fechamento da nota3
        })// Fechamento da nota2
    })// Fechamento da nota1
})//Fechamento do nome