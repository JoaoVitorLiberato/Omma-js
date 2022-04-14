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


listaDeReceitas.forEach((receita) => {

    console.log('-----------------------------');
    console.log(`Titulo: ${receita.titulo}`);
    console.log("Ingredientes: ");

    receita.ingredientes.forEach((ingrediente) => {
        console.log(`${ingrediente}`);
    })

})


const deletarReceita = (id) => {
    const indiceReceita = listaDeReceitas.findIndex((receita) => {
        return receita.id === id;
    });

    if (indiceReceita === -1) {
        return console.log("Receita não encontrada");
    }

    listaDeReceitas.splice(indiceReceita, 1);

}


const buscarReceita = (termo) => {
    return listaDeReceitas.filter((receita) => {
        return receita.titulo.toLowerCase().indexOf(termo) != -1;
    });
};

const atualizarReceita = (id, receitaAtualizada = {}) => {
    const indice = listaDeReceitas.findIndex((receita) => receita.id === id)

  /*
    if (indiceReceita === -1) {
        console.log('Receita não encontrada.');
    }

    if (receitaAtualizada.titulo !== null) {
        listaDeReceitas[indiceReceita].titulo = receitaAtualizada.titulo;
    }

    if (receitaAtualizada.dificuldade !== null) {
        listaDeReceitas[indiceReceita].dificuldade = receitaAtualizada.dificuldade;
    }

    if (receitaAtualizada.ingredientes !== null) {
        listaDeReceitas[indiceReceita].ingredientes = receitaAtualizada.ingredientes;
    }

    if (receitaAtualizada.preparo !== null) {
        listaDeReceitas[indiceReceita].preparo = receitaAtualizada.preparo;
    }

    if (receitaAtualizada.link !== null) {
        listaDeReceitas[indiceReceita].link = receitaAtualizada.link;
    }

    if (receitaAtualizada.vegano !== null) {
        listaDeReceitas[indiceReceita].vegano = receitaAtualizada.vegano;
    }*/

    // com spread
    listaDeReceitas[indiceReceita] = {
        ...listaDeReceitas[indiceReceita],
        ...receitaAtualizada,
    }


    console.log(`Receita ${receitaAtualizada.titulo} atualizada com sucesso!`);
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

