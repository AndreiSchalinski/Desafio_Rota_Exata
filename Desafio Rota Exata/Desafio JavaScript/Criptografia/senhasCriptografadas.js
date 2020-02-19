var preSenhaRecebida = 'Andrei Schalinski'

var senhasArmazenadas = []

var criptografia = require('crypto');

console.log("SENHAS GERADAS COM CRIPTOGRAFIA PARA COMPARAÇÃO\n")

for (let index = 0; index < 20; index++) {

    var bytes = criptografia.randomBytes(16);
    var padrao = criptografia.createDecipheriv('aes-256-ctr', "abcdabcdabcdabcdabcdabcdabcdabcd", bytes);
    var senhaGerada = padrao.update(preSenhaRecebida, "utf8", "hex") + padrao.final('hex');
    var senhaCriptogradaGerada = bytes.toString('hex') + ':' + senhaGerada;

    senhasArmazenadas[index] = senhaCriptogradaGerada
    console.log(senhasArmazenadas[index])
}








