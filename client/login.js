document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        const identificador = document.getElementById("loginIdentificador").value;
        const senhaInserida = document.getElementById("loginSenha").value;

        const dadosSalvos = localStorage.getItem("usuarioCadastro");

        if (dadosSalvos) {
            const usuario = JSON.parse(dadosSalvos);
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
