$(document).ready(function () {
  showChatBox()
})

function showChatBox () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/chatroom',
    success: function (resp) {
      for (let i = 0; i < resp.length; i++) {
        let chat = resp[i]
        $('#cont1').append(
          `<div class="bubble">
            <p><span style="font-style:bold">${chat.username}:  </span>${chat.content}</p>
          </div>
          </br>`
        )
      }
    },
    error: function () {
      console.log('Back End Response Error')
    }
  })

  $('#input-chat').submit(function (e) {
    e.preventDefault()
    let messageVal = $('input[name=chat]').val()
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/chatroom/send',
      data: {message: messageVal},
      dataType: 'json'
    })
    .done(function (resp) {
      $('input[name=chat]').val('')
      location.reload()
    })
    // return false
  })
}
