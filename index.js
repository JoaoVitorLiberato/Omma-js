const nomeEmpresa = 'Sistema Omma';
console.log(nomeEmpresa);

const listaDeReceitas = [{

    id: 1,
    titulo: 'Cachorro Quente',
    dificuldade: 'Simples',
    ingredientes: ['1 pão de leite', '1 salsicha', '1 colher de batata palha'],
    preparo: 'coloca no fogo e está tudo certo!',
    link: 'http://youtube.com',
    vegano: false,

},
];

const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {

    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };
    listaDeReceitas.push(novaReceita);
    console.log(`cadastro da receita ${titulo} feita com sucesso!`)
};



console.log(listaDeReceitas);

function exibirReceitas() {
    
    for (let i = 0; i < listaDeReceitas.length; i++) {
        const receita = listaDeReceitas[i];
        console.log('-----------------------------');
        console.log(`Titulo: ${receita.titulo}`);
        console.log("Ingredientes: ");

        for (let j = 0; j < receita.ingredientes.length; j++) {
            console.log(`- ${receita.ingredientes[j]}`);
    
        }
    
        console.log("vegano? ", receita.vegano);
    }   


}


function deletarReceita(id) {
    let novaListaDeReceitas = [];

    for (let i = 0; i < listaDeReceitas.length; i++) {
        const receita = listaDeReceitas[i];

        if (receita.id !== id) {
            novaListaDeReceitas.push(receita);
        }

    }

    if (novaListaDeReceitas.length === listaDeReceitas.length) {
        return console.log("Receita não encontrada");
    }

    listaDeReceitas = novaListaDeReceitas;
    console.log("Receita deletada com sucesso!");
}


cadastrarReceita(
    2,
    "ovo Frito",
    'simples',
    ['1 ovo', 'manteiga', 'sal a gosto'],
    'coloca no fogo e frita ele.',
    'https://wikipidia.org',
    false,
);
    
exibirReceitas();
deletarReceita(1)
