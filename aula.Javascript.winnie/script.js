console.log("Hello World!");
// log funciona como print do Python (saída dos dados)
// ESLint ajuda a corrigir os códigos (formatador de código) -Pesquisar sobre
// o ";" define o final de uma linha
// Pra executar o arquivo no terminal: "node script.js"
// alert: Não consegue rodar no terminal, ele é um pop up que utiliza apenas no navegador
// prompt = input (do Python). P/ inserir os dados (entrada). Também não roda no terminal. O prompt captura o valor como STRING. Na minha soma, ao invés de somar, concatenou as Strings.
// confirm. Janela de diálogo que aparece no navegador. "Confirmar" "Deletar"
// Variáveis: 1.var - (NÃO USAR!). Serve pra iniciar uma variável
// 2.let - vai inicializar uma variável, como se fosse uma variável. NÃO USAR "VAR"
// 3.const - constante. é indicado iniciar uma variável com const, pra não mudar ela, mas se quiser mudar, põe o let.
// snake case: numero_inteiro
// camel case: numeroInteiro
// parseFloat: indica que a "String" é um Float.
// parseInt: indica que a "String" é um número Inteiro. Ou pode usar "Number".

// // Entrada
// const numero1 = parseFloat(prompt("Digite o primeiro número"))
// const numero2 = parseFloat(prompt("Digite o segundo número"))

// // Processo
// let soma = numero1+numero2

// // Saída
// console.log(soma)

let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

let soma = numero1 + numero2
let sub = numero1 - numero2
let multi = numero1 * numero2
let div = numero1 / numero2

alert(`A soma é: ${soma}`)
alert("A subtração é: "+ sub)
alert("A multiplicação é: "+ multi)
alert("A divisão é: "+ div)
// O alert não tem como separar string da variável com ",", então tem que usar "+".
// console.log("A divisão é:", divisao)
// Template Literals, ao invés de usar aspas, usar crase ``