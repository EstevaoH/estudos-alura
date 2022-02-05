import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Estevão", 10000, 12345678900);
diretor.cadastraSenha("123456789");
const gerente = new Gerente("Nay", 15000, 9876543211);
gerente.cadastraSenha("123456");

const cliente = new Cliente("Henrique", 12345, "123")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);