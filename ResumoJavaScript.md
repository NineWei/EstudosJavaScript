# Java Script, dicas e funções

## Entrada, processamento e saída de dados

### Prompt
- prompt = input (do Python).
- É utilizado para inserir os dados (entrada).
- Não roda no terminal, apenas no navegador.
- O prompt captura o valor como STRING. Na soma, ao invés de somar, pode concatenar as Strings. em "## Dicas" mostra a sugestão de como corrigir, utilizando o parseFloat, por exemplo.

### Execução de arquivo no terminal
- Pra executar o arquivo no terminal, escreve node + o nome do arquivo, exemplo: "node script.js".

### Log 
- Funciona como print do Python (saída dos dados).
- Exemplo:
```python
const numero1 = parseFloat(prompt("Digite o primeiro número"))
const numero2 = parseFloat(prompt("Digite o segundo número"))

const soma = numero1+numero2

console.log(soma)
```

---

## Variáveis

1. var - NÃO USAR! Serve pra iniciar uma variável.
2. let - Vai inicializar uma variável. NÃO USAR "VAR", ao invés disso, recomenda-se utilizar o let.
3. const - É indicado iniciar uma variável com const, pra **não mudar ela**, mas caso queira mudar, usar o let.
   
---

## Dicas

- Primeiro cria o arquivo básico do HTML, e no body escreve:
  ```html
  <body>
    <script src="script.js"></script>
  </body>
  ```
  Isso é feito para vincular o arquivo JavaScript externo ao HTML, permitindo que o código JavaScript seja executado quando a página for carregada.
- O ";" define o final de uma linha. No JavaScript não é obrigatório inserir, mas é considerado boas práticas.
- ESLint ajuda a corrigir os códigos (formatador de código). Pesquisar sobre.
- parseFloat: indica que a "String" é um Float.
- parseInt: indica que a "String" é um número Inteiro. Ou pode usar "Number".
- alert: não roda no terminal, ele é um pop up que utiliza apenas no navegador.
- confirm: Janela de diálogo que aparece no navegador. "Confirmar" ou "Deletar".
- snake case: numero_inteiro
- camel case: numeroInteiro
