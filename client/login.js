// Inicializa a lógica de login após o carregamento da página.
document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");

  if (!formLogin) return;

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const identificador = document.getElementById("loginIdentificador").value.trim();
    const senhaInserida = document.getElementById("loginSenha").value;
    const dadosSalvos = localStorage.getItem("usuarioCadastro");

    if (!dadosSalvos) {
      alert("Nenhum usuário cadastrado ainda.");
      return;
    }

    const usuario = JSON.parse(dadosSalvos);
    const loginValido = identificador === usuario.email || identificador === usuario.cpf || identificador === usuario.telefone;
    const senhaValida = senhaInserida === usuario.senha;

    if (loginValido && senhaValida) {
      alert(`Bem-vindo de volta, ${usuario.nome || "usuário"}!`);
      window.location.href = "/";
    } else {
      alert("Dados incorretos. Verifique suas credenciais.");
    }
  });
});