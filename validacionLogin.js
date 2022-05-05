function validarLogin() {
  let v1 = document.getElementById("usuarioLoguin").value;
  let v2 = document.getElementById("contraseñaLoguin").value;
  if (v1 == "usuario@gmail.com") {
    if (v2 == "12345") {
      window.alert("inicio de usuario");
    }
  }

  if (v1 == "empleado@gmail.com") {
    if (v2 == "123456") {
      window.alert("inicio de Empleado");
    }
  }

  if (v1 == "admin@gmail.com") {
    if (v2 == "1234567") {
      window.alert("inicio de Administrador");
    }
  }
}
