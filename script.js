const produtos = [
  { nome: "Oversized Suedine Preta", preco: "R$ 85,00", tamanho: "M", img: "imagens/camisa1.jpg" },
  { nome: "Oversized Suedine Preta", preco: "R$ 85,00", tamanho: "M", img: "imagens/camisa1.jpg" },
  { nome: "Oversized Suedine Verde Militar", preco: "R$ 85,00", tamanho: "G", img: "imagens/camisa2.jpg" },
  { nome: "Oversized Suedine Verde Militar", preco: "R$ 85,00", tamanho: "G", img: "imagens/camisa2.jpg" },
  { nome: "Oversized Suedine Verde Militar", preco: "R$ 85,00", tamanho: "G", img: "imagens/camisa2.jpg" },
  { nome: "Oversized Suedine Verde Militar", preco: "R$ 85,00", tamanho: "G", img: "imagens/camisa2.jpg" },
  { nome: "Oversized Suedine Branca", preco: "R$ 85,00", tamanho: "GG", img: "imagens/camisa3.jpg" },
  { nome: "Oversized Suedine Branca", preco: "R$ 85,00", tamanho: "GG", img: "imagens/camisa3.jpg" },
  { nome: "Oversized Suedine Branca", preco: "R$ 85,00", tamanho: "GG", img: "imagens/camisa3.jpg" },
  { nome: "Oversized Suedine Branca", preco: "R$ 85,00", tamanho: "GG", img: "imagens/camisa3.jpg" }
];

function carregarProdutos(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = lista.map(produto => `
    <div class="produto">
      <img src="${produto.img}" alt="${produto.nome}">
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

  const filtrados = listaCompleta.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(termo);
    const tamanhoOk = tamanho ? p.tamanho === tamanho : true;
    return nomeOk && tamanhoOk;
  });

  const catalogo = document.getElementById("catalogo");

  if(filtrados.length === 0) {
    catalogo.innerHTML = `<p class="sem-produto">Nenhum produto encontrado 😕</p>`;
  } else {
    catalogo.innerHTML = filtrados.map(produto => `
      <div class="produto animate-fade">
        <img src="${produto.img}" alt="${produto.nome}">
        <div class="info">
          <h2>${produto.nome}</h2>
          <p class="preco">${produto.preco}</p>
        </div>
      </div>
    `).join('');
  }
}


document.getElementById("busca").addEventListener("input", function() {
  const termo = this.value.toLowerCase();
  const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
  carregarProdutos(filtrados);
});

document.getElementById("filtroTamanho").addEventListener("change", function() {
  const tamanho = this.value;
  const filtrados = tamanho ? produtos.filter(p => p.tamanho === tamanho) : produtos;
  carregarProdutos(filtrados);
});

carregarProdutos(produtos);
