let produtos = [
    {
        "nome": "Produto 1",
        "descricao": "Descrição do produto 1",
        "valor": 50,
        "opcionais": [
            "Opcional 1",
            "Opcional 2",
            "Opcional 3"
        ]
    },
    {
        "nome": "Produto 2",
        "descricao": "Descrição do produto 2",
        "valor": 75,
        "opcionais": [
            "Opcional 1",
            "Opcional 2",
            "Opcional 3",
            "Opcional 4"
        ]
    },
    {
        "nome": "Produto 3",
        "descricao": "Descrição do produto 3",
        "valor": 100,
        "opcionais": [
            "Opcional 1",
            "Opcional 2",
        ]
    }
]

let tabela = '';
let espaco1 = '           ';
let espaco2 = '                      ';


console.log("TABELA DE PRODUTOS CADASTRADOS EM ORDEM PROGRESSIVA.")

function imprimirTabela() {

    for (let i = 0; i < produtos.length; i++) {
        tabela += "+-----------------+-----------------------------------+-----------+-------------------------------------------------------+" + "\n"

        if (i === 0) {
            tabela += "| Nome: " + produtos[i].nome + " | Descrição: " + produtos[i].descricao +
                " | Valor:" + produtos[i].valor + "  | Opcionais: " + produtos[i].opcionais + espaco1 + "|"
        } else if (i === 1) {
            tabela += "| Nome: " + produtos[i].nome + " | Descrição: " + produtos[i].descricao +
                " | Valor:" + produtos[i].valor + "  | Opcionais: " + produtos[i].opcionais + "|"
        } else if (i === 2) {
            tabela += "| Nome: " + produtos[i].nome + " | Descrição: " + produtos[i].descricao +
                " | Valor:" + produtos[i].valor + " | Opcionais: " + produtos[i].opcionais + espaco2 + "|"
        }

    }
    tabela += "+-----------------+-----------------------------------+-----------+-------------------------------------------------------+"

    return tabela
}
console.log(imprimirTabela())
console.log('\n\n***************************************************** ´´ ******************************************************************\n\n')
tabela = '';

console.log("TABELA DE PRODUTOS CADASTRADOS EM ORDEM REGRESSIVA.")
espaco1 = '                     ';
espaco2 = '            ';

produtos.reverse();

console.log(imprimirTabela())

