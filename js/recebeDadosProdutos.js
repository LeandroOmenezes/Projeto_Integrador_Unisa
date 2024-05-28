export const recebeProdutos = async () => {
	try {
		const dadosProdutos = await fetch("http://localhost:3000/produtos");
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	} catch {
		const dadosProdutos = await fetch(
			"https://raw.githubusercontent.com/LeandroOmenezes/Projeto_Integrador_Unisa/main/db.json"

		);
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	}
};
