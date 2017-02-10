$(document).ready(function () {
  showChatBox()
})

<<<<<<< ca1674afd42a35c7ccfafa0d97b0cd991dc0bb60
<<<<<<< 0d1b34eca1aac614d23376bc786dc468a5d9b63e
function dummyGana () {
  localStorage.setItem('Username', 'Gana')
}

function dummySyanmil () {
  localStorage.setItem('Username', 'Syanmil')
}

function dummyFadly () {
  localStorage.setItem('Username', 'Fadly')
}

=======
>>>>>>> Add chat table
=======
function dummyUserName () {
  localStorage.setItem('Username', 'Syanmil')
}

>>>>>>> Done chat-box
function showChatBox () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/chatroom',
    success: function (resp) {
      for (let i = 0; i < resp.length; i++) {
        let chat = resp[i]
        $('#cont1').append(
          `<div class="bubble">
<<<<<<< ca1674afd42a35c7ccfafa0d97b0cd991dc0bb60
<<<<<<< 0d1b34eca1aac614d23376bc786dc468a5d9b63e
            <p><span style="font-style:bold">${chat.username}:</span></br>${chat.content}</p>
=======
            <p><span style="font-style:bold">${chat.username}:  </span>${chat.content}</p>
>>>>>>> Add chat table
=======
            <p><span style="font-style:bold">${chat.username}:</span></br>${chat.content}</p>
>>>>>>> Done chat-box
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
<<<<<<< ca1674afd42a35c7ccfafa0d97b0cd991dc0bb60
<<<<<<< 0d1b34eca1aac614d23376bc786dc468a5d9b63e
    let usernameVal = localStorage.getItem('Username')
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/chatroom/send',
      data: {message: messageVal, username: usernameVal},
=======
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/chatroom/send',
      data: {message: messageVal},
>>>>>>> Add chat table
=======
    let usernameVal = localStorage.getItem('Username')
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/chatroom/send',
      data: {message: messageVal, username: usernameVal},
>>>>>>> Done chat-box
      dataType: 'json'
    })
    .done(function (resp) {
      $('input[name=chat]').val('')
      location.reload()
    })
<<<<<<< ca1674afd42a35c7ccfafa0d97b0cd991dc0bb60
<<<<<<< 0d1b34eca1aac614d23376bc786dc468a5d9b63e
=======
    // return false
>>>>>>> Add chat table
=======
>>>>>>> Done chat-box
  })
}
