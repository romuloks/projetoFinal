import axios from 'axios';
	export const api = axios.create({
		baseURL: 'https://generatedu-0fmt.onrender.com/swagger'
	})

	export const login = async({url, dados, setDados}: any) => {
		const resposta = await api.post(url, dados)
			setDados(resposta.data)
	}