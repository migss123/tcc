document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        const identificador = document.getElementById("loginIdentificador").value;
        const senhaInserida = document.getElementById("loginSenha").value;

        // Pega o usuário que foi cadastrado no LocalStorage
        const dadosSalvos = localStorage.getItem("usuarioCadastro");

        if (dadosSalvos) {
            const usuario = JSON.parse(dadosSalvos);

            // Confere se o identificador bate com Email, CPF ou Telefone salvos, e se a senha está certa
            const loginValido = (identificador === usuario.email || identificador === usuario.cpf || identificador === usuario.telefone);
            const senhaValida = (senhaInserida === usuario.senha);

            if (loginValido && senhaValida) {
                alert(`Bem-vindo de volta, ${usuario.nome}!`);
            } else {
                alert("Dados incorretos! Verifique suas credenciais.");
            }
        } else {
            alert("Nenhum usuário cadastrado no sistema ainda.");
        }
    });
});