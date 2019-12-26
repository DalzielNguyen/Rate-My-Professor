$(document).ready(function() {
  const form = $("#formLogin");
  form.submit(function() {
    body = $(this).serializeArray();
    $.post('/user/login', body)
      .done(function(data) {
        window.location.href = "/";
      })
      .fail(function(data) {
        json = data.responseJSON;
        alert(json.message);
      });
    return false;
  })
})