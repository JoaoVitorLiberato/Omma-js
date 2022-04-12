const cadastroDePessoas = [{
    CPF: 71044554458,
    NOME: 'JOÃO VITOR LIBERATO DE OLIVEIRA',
    FILIAÇÃO: 'SAFYRA S. DE OLIVEIRA',
    CEP: 23062230,
    ENDERECO: 'RUA CANDIDO VIEIRA',
    COMPLEMENTO: 'Nº65, CASA 9',
    BAIRRO: 'CAMPO GRANDE',
    CIDADE: 'RIO DE JANEIRO',
},

{

    CPF: 55746932500,
    NOME: 'ALDENIZE SALUSTINO DA SILVA',
    FILIAÇÃO: 'EDVÂNIA SALUSTINO SILVERA',
    CEP: 55656555,
    ENDERECO: 'RUA CORONEL DON AGUIAR',
    COMPLEMENTO: 'Nº 998, APT N125',
    BAIRRO: 'FLAMENGO',
    CIDADE: 'RIO DE JANEIRO',

}

];

const cadastrarNovaPessoa = (CPF, NOME, FILIAÇÃO, CEP, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE) => {
    const novaPessoa = {
        CPF,
        NOME,
        FILIAÇÃO,
        CEP,
        ENDERECO,
        COMPLEMENTO,
        BAIRRO,
        CIDADE,
    }
    cadastroDePessoas.push(novaPessoa);
    console.log(`${NOME} Cadastrado com sucesso!`);
}



const nameEndereco = cadastroDePessoas.forEach((person) => {
    console.log('************************************************************************************');
    console.log(`NOME: ${person.NOME} - RUA: ${person.ENDERECO} - COMPLEMENTO: ${person.COMPLEMENTO}`);
    console.log('************************************************************************************');

});



console.log(nameEndereco);