function logar() {
  const cpf = document.getElementById("cpf").value;
  const senha = document.getElementById("senha").value;
  if (cpf && senha) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("registro").classList.remove("hidden");

    // Pré-preenche com data e nome fictício
    document.getElementById("data").valueAsDate = new Date();
    document.getElementById("motorista").value = "João Motorista";
  }
}

function confirmarEntrega() {
  document.getElementById("registro").classList.add("hidden");
  document.getElementById("confirmacao").classList.remove("hidden");
}

function voltarLogin() {
  document.getElementById("confirmacao").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}