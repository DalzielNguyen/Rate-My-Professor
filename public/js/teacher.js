$(document).ready(function() {
  $(".replyButton").click(function() {
    $(this).parent().parent().find('.reply-form').show();
    return false;
  });

  $("#rate").submit(function() {
    body = $(this).serializeArray();
    $.post(`/teacher/${body[0].value}`, body)
      .done(function (data) {
        window.location.href = `/teacher/${body[0].value}`;
      })
      .fail(function (data) {
        json = data.responseJSON;
        alert(json.message);
      });
    return false;
  });

  $(".reply-form").submit(function() {
    body = $(this).serializeArray();
    $.ajax({
      url: `/rate/${body[0].value}`,
      data: body,
      method: "POST",
      })
      .done(function (data) {
        location.reload(true);
      })
      .fail(function (data) {
        json = data.responseJSON;
        alert(json.message);
      });
    return false;
  });

  $(".comment .btn-react").click(function() {
    const _this = $(this);
    const id = $(this).attr('data-id');
    const react = $(this).attr('data-react');
    let Like = $(this).parent().find('.like span');
    let Dislike = $(this).parent().find('.dislike span');
    $.ajax({
      url: `/rate/${id}`,
      data: {
        react: react,
      },
      method: "PUT",
      dataType: 'json',
      })
      .done(function (data) {
        if (react == 1){
          Like.html(parseInt(Like.html())+1);
        } else {
          Dislike.html(parseInt(Dislike.html())+1);
        }
      });
    return false;
  })
});