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
        $('#chat-box').append(
          `<tr>
              <td>${chat.username}</td>
              <td>${chat.content}</td>
          </tr>`
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
      let messageVal = $('input[name=chat]').val('')
      location.reload()
    })
    // return false
  })
}
