const listaSelecaoSao = document.querySelectorAll(".SAO");
console.log (listaSelecaoSao);

listaSelecaoSao.forEach(sao => {
	sao.addEventListener("click", () => {
		esconderCartaoSao();

		const idSaoSelecionado = mostrarCartaoSaoSelecionado(sao);

		desativarSaoNaListagem();
		ativarSaoSelecionadoNaListagem(idSaoSelecionado);
 
	})
})


function ativarSaoSelecionadoNaListagem(idSaoSelecionado) {
	const saoSelecionadoNaListagem = document.getElementById(idSaoSelecionado);
	saoSelecionadoNaListagem.classList.add("ativo");
}

function desativarSaoNaListagem() {
	const saoAtivoNaListagem = document.querySelector(".ativo");
	saoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoSaoSelecionado(sao) {
	const idSaoSelecionado = sao.attributes.id.value;
	const idDoCartaoSaoParaAbrir = "cartao-" + idSaoSelecionado;
	const cartaoSaoParaAbrir = document.getElementById(idDoCartaoSaoParaAbrir);
	cartaoSaoParaAbrir.classList.add("aberto");
	return idSaoSelecionado;
}

function esconderCartaoSao() {
	const cartaoSaoAberto = document.querySelector(".aberto");
	cartaoSaoAberto.classList.remove("aberto");
}

