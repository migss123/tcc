// Garante que a lógica do cadastro rode após o carregamento da página.
document.addEventListener("DOMContentLoaded", () => {
  const formCadastro = document.getElementById("formCadastro");

  if (!formCadastro) return;

  const dadosSalvos = localStorage.getItem("usuarioCadastro");

  // Preenche os campos com os dados já salvos, quando existirem.
  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    const campos = ["nome", "email", "senha", "cpf", "telefone", "estado", "cep", "complemento", "endereco", "rua"];

    campos.forEach((campo) => {
      const elemento = document.getElementById(campo);
      if (elemento) {
        elemento.value = dados[campo] || "";
      }
    });
  }

  formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const dadosUsuario = {
      nome: document.getElementById("nome").value.trim().slice(0, 80),
      email: document.getElementById("email").value.trim().slice(0, 60),
      senha: document.getElementById("senha").value.slice(0, 32),
      cpf: document.getElementById("cpf").value.replace(/\D/g, "").slice(0, 11),
      telefone: document.getElementById("telefone").value.replace(/\D/g, "").slice(0, 11),
      estado: document.getElementById("estado").value.trim().slice(0, 30),
      cep: document.getElementById("cep").value.replace(/\D/g, "").slice(0, 8),
      complemento: document.getElementById("complemento").value.trim().slice(0, 50),
      endereco: document.getElementById("endereco").value.trim().slice(0, 100),
      rua: document.getElementById("rua").value.trim().slice(0, 100)
    };

    // Salva os dados e redireciona para a tela de login.
    localStorage.setItem("usuarioCadastro", JSON.stringify(dadosUsuario));
    alert("Cadastro realizado e dados salvos no LocalStorage!");
    window.location.href = "/login";
  });
});
