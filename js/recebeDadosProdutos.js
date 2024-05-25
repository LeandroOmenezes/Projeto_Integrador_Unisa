export const recebeProdutos = async () => {
	try {
		const dadosProdutos = await fetch("http://localhost:3000/produtos");
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	} catch {
		const dadosProdutos = await fetch(
			"https://github.com/LeandroOmenezes/Projeto_Integrador_Unisa/blob/main/db.json"

		);
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	}
};
