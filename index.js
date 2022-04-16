const nomeEmpresa = 'Sistema Omma';
console.log(nomeEmpresa);

const fs = require("fs")
const rawData = fs.readFileSync("data.json");
const listaDeReceitas = JSON.parse(rawData);
const indiceUltimaReceita = listaDeReceitas.length - 1;

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
    fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));
    console.log(`cadastro da receita ${titulo} feita com sucesso!\n`)
};



const exibirReceitas = listaDeReceitas.forEach((receita) => {

     const rawData = fs.readFileSync("data.json");
     const listaDeReceitas = JSON.parse(rawData);

    const { titulo, ingredientes, vegano } = receita
    console.log('-----------------------------');
    console.log(`Titulo: ${titulo}`);
    console.log('-----------------------------');

    console.log("Ingredientes: ");

    ingredientes.forEach((ingrediente) => {
        console.log(`${ingrediente}`);
        console.log('-----------------------------');
    })

    console.log(`Vegano: ${vegano}`);
    console.log('-----------------------------------');

})


const deletarReceita = (id) => {

    const rawData = fs.readFileSync("data.json");
     const listaDeReceitas = JSON.parse(rawData);

    const indiceReceita = listaDeReceitas.findIndex((receita) => {
        return receita.id === id;
    });

    if (indiceReceita === -1) {
        return console.log("Receita não encontrada");
    }

    listaDeReceitas.splice(indiceReceita, 1);
    fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));

}


const buscarReceita = (termo) => {
    return listaDeReceitas.filter((receita) => {
        return receita.titulo.toLowerCase().indexOf(termo.toLowerCase()) != -1;
    });
};

const atualizarReceita = (id, receitaAtualizada = {}) => {
    
  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);

    const indice = listaDeReceitas.findIndex((receita) => receita.id === id)

    // com spread
    listaDeReceitas[indice] = {
        ...listaDeReceitas[indice],
        ...receitaAtualizada,
    }


    console.log(`Receita ${receitaAtualizada.titulo} atualizada com sucesso!\n`);
    fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));
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

console.log(atualizarReceita(0, {
    id: 1,
    titulo: 'pudim',
    dificuldade: 'facil',
    ingredientes: ['ovos', 'leite', 'açucar'],
    preparo: 'coloca na geladeira apos acabar',
    link: 'googole.com',
    vegano: false,
}));
