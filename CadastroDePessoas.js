const cadastroDePessoas = [{
    CPF: 71044554458,
    NOME: 'JOÃO VITOR LIBERATO DE OLIVEIRA',
    FILIAÇÃO: 'SAFYRA S. DE OLIVEIRA',
    CEP: 23062230,
    ENDERECO: 'RUA CANDIDO VIEIRA',
    COMPLEMENTO: 'Nº65, CASA 9',
    BAIRRO: 'CAMPO GRANDE',
    CIDADE: 'RIO DE JANEIRO',
    ATIVO: false,
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
    ATIVO: true,

}

];

const cadastrarNovaPessoa = (CPF, NOME, FILIAÇÃO, CEP, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, ATIVO) => {
    const novaPessoa = {
        CPF,
        NOME,
        FILIAÇÃO,
        CEP,
        ENDERECO,
        COMPLEMENTO,
        BAIRRO,
        CIDADE,
        ATIVO,
    }
    cadastroDePessoas.push(novaPessoa);
    console.log(`${NOME} Cadastrado com sucesso!`);
}

const todasPessoas = cadastroDePessoas.forEach((todos) => {
    console.log(todos);
    
})



const nameEndereco = cadastroDePessoas.map((pessoa) => (
    {
        Nome: pessoa.NOME,
        Endereco: pessoa.ENDERECO,
        Complemento: pessoa.COMPLEMENTO,
    }
)
);

console.log(nameEndereco);


const pessoasAtivas = cadastroDePessoas.filter((pessoa) => {
    return pessoa.ATIVO === true;
})

console.log(pessoasAtivas);
