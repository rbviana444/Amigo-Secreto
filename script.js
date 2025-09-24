let nomes = [];

function adicionarNome() {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome && !nomes.includes(nome)) {
    nomes.push(nome);
    atualizarLista();
  }
  nomeInput.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaNomes");
  lista.innerHTML = "";
  nomes.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
  });
}

function sortear() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos 2 nomes!");
    return;
  }

  let sorteados = [...nomes];
  let resultado = {};

  for (let i = 0; i < nomes.length; i++) {
    let amigo;
    do {
      amigo = sorteados[Math.floor(Math.random() * sorteados.length)];
    } while (amigo === nomes[i]);
    
    resultado[nomes[i]] = amigo;
    sorteados = sorteados.filter(n => n !== amigo);
  }

  exibirResultado(resultado);
}

function exibirResultado(resultado) {
  const div = document.getElementById("resultado");
  div.innerHTML = "<h2>Resultado do Sorteio:</h2>";
  for (let [pessoa, amigo] of Object.entries(resultado)) {
    div.innerHTML += `<p><strong>${pessoa}</strong> ➝ ${amigo}</p>`;
  }
}