// Espera o carregamento completo do HTML antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    // Captura o formulário de cadastro pelo id
    const form = document.getElementById("formCadastro");

    // 1. CARREGAR DADOS DO LOCALSTORAGE (Se existirem)
    // Busca os dados salvos no navegador sob a chave usuarioCadastro
    const dadosSalvos = localStorage.getItem("usuarioCadastro");

    // Verifica se existem dados salvos para preencher o formulário
    if (dadosSalvos) {
        // Converte a string JSON salva em um objeto JavaScript
        const dados = JSON.parse(dadosSalvos);

        // Preenche cada campo com o valor recuperado do armazenamento
        document.getElementById("nome").value = dados.nome || "";
        document.getElementById("email").value = dados.email || "";
        document.getElementById("senha").value = dados.senha || "";
        document.getElementById("cpf").value = dados.cpf || "";
        document.getElementById("telefone").value = dados.telefone || "";
        document.getElementById("estado").value = dados.estado || "";
        document.getElementById("cep").value = dados.cep || "";
        document.getElementById("complemento").value = dados.complemento || "";
        document.getElementById("endereco").value = dados.endereco || "";
        document.getElementById("rua").value = dados.rua || "";

        // Exibe uma mensagem no console para confirmar a recuperação dos dados
        console.log("Dados recuperados do LocalStorage e preenchidos no formulário.");
    }

    // 2. SALVAR DADOS NO LOCALSTORAGE AO ENVIAR
    // Adiciona um ouvinte para o evento de envio do formulário
    form.addEventListener("submit", (event) => {
        // Impede o recarregamento da página ao enviar o formulário
        event.preventDefault();

        // Captura o valor atual de todos os campos do formulário
        const objetoUsuario = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            cpf: document.getElementById("cpf").value,
            telefone: document.getElementById("telefone").value,
            estado: document.getElementById("estado").value,
            cep: document.getElementById("cep").value,
            complemento: document.getElementById("complemento").value,
            endereco: document.getElementById("endereco").value,
            rua: document.getElementById("rua").value
        };

        // Transforma o objeto em string e salva no LocalStorage
        localStorage.setItem("usuarioCadastro", JSON.stringify(objetoUsuario));

        // Exibe um alerta informando que o cadastro foi salvo
        alert("Cadastro realizado e dados salvos no LocalStorage!");
        // Exibe o objeto salvo no console para depuração
        console.log("Salvo com sucesso:", objetoUsuario);
    });
});
