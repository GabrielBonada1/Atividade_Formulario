const botao = document.getElementById("meubotao");

botao.addEventListener("click", function(e) {
  e.preventDefault(); 

  const email = document.querySelector('[name="email"]').value.trim();
  const senha = document.querySelector('[name="senha"]').value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos!");
  } else if (!email.includes("@")) {
    alert("Digite um email válido.");
  } else {
    alert("Login realizado com sucesso!");
  }
});
if (!email.includes("@")) {
  alert("Digite um email válido.");
}

