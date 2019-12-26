$(document).ready(function () {
  const formLogin = $("#formLogin");
  const formSignup = $("#formSignup");

  formLogin.submit(function () {
    body = $(this).serializeArray();
    $.post('/user/login', body)
      .done(function (data) {
        window.location.href = "/";
      })
      .fail(function (data) {
        json = data.responseJSON;
        alert(json.message);
      });
    return false;
  })


  formSignup.submit(function () {
    body = $(this).serializeArray();
    $.post('/user/signup', body)
      .done(function (data) {
        window.location.href = "/";
      })
      .fail(function (data) {
        json = data.responseJSON;
        alert(json.message);
      });
    return false;
  })
})