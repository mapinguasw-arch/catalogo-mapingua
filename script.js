const produtos = [
  { nome: "SNAKE | Branco (M)", preco: "SORTEADA!", tamanho: "M", img: "imagens/snake01.png" },
  { nome: "HIGH | Preto (M)", preco: "R$ 55,00", tamanho: "M", img: "imagens/high01.png" },
  { nome: "NEW BALANCE | Preto (M)", preco: "R$ 55,00", tamanho: "M", img: "imagens/newbalance01.png" },
  { nome: "DGK SAKURA | Cinza (G)", preco: "R$ 55,00", tamanho: "G", img: "imagens/sakura01.png" },
  { nome: "NIKE JORDAN AIR | Preto (G)", preco: "R$ 55,00", tamanho: "G", img: "imagens/nikejordan01.png" },
  { nome: "SUPREME | Preto (G)", preco: "R$ 55,00", tamanho: "G", img: "imagens/supreme01.png" },
  { nome: "OFF WHITE! | Bege (G)", preco: "R$ 55,00", tamanho: "G", img: "imagens/offwhite02.png" },
  { nome: "JORDAN AIR | Preto (GG)", preco: "ESGOTADA!", tamanho: "GG", img: "imagens/jordan01.png" },
  { nome: "OFF WHITE! | Marrom (GG)", preco: "R$ 55,00", tamanho: "GG", img: "imagens/offwhite01.png" },
  { nome: "ADIDAS | Azul Marinho (GG)", preco: "R$ 55,00", tamanho: "GG", img: "imagens/adidas01.png" },
  { nome: "STÜSSY | Preto (GG)", preco: "ESGOTADA!", tamanho: "GG", img: "imagens/stussy01.png" }
];

function carregarProdutos(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = lista.map(produto => `
    <div class="produto animate-fade">
      <img src="${produto.img}" alt="${produto.nome}" loading="lazy">
      <div class="info">
        <h2>${produto.nome}</h2>
        <p class="preco">${produto.preco}</p>
      </div>
    </div>
  `).join('');
}

function filtrar() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const tamanho = document.getElementById("filtroTamanho").value;

  const filtrados = produtos.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(termo);
    const tamanhoOk = tamanho ? p.tamanho === tamanho : true;
    return nomeOk && tamanhoOk;
  });

  const catalogo = document.getElementById("catalogo");

  if (filtrados.length === 0) {
    catalogo.innerHTML = `<p class="sem-produto">Vou ficar te devendo esse chefe! 😕</p>`;
  } else {
    carregarProdutos(filtrados);
  }
}

document.getElementById("busca").addEventListener("input", filtrar);
document.getElementById("filtroTamanho").addEventListener("change", filtrar);

// Carregar todos os produtos no início
carregarProdutos(produtos);







