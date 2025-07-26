let dadosJSON = '{"produto":"Notebook","preco":3500,"disponivel":true}';
let produto = JSON.parse(dadosJSON);

console.log(`Produto: ${produto.produto}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Disponível: ${produto.disponivel ? "Sim" : "Não"}`);