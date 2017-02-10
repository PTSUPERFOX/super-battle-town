$(document).ready(function () {
  showChatBox()
})

function dummyGana () {
  localStorage.setItem('Username', 'Gana')
}

function dummySyanmil () {
  localStorage.setItem('Username', 'Syanmil')
}

function dummyFadly () {
  localStorage.setItem('Username', 'Fadly')
}

function showChatBox () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/chatroom',
    success: function (resp) {
      for (let i = 0; i < resp.length; i++) {
        let chat = resp[i]
        $('#cont1').append(
          `
          <div style="margin-bottom:10px;">
            <b style="margin-right:10px;">${chat.username}: </b><p style="display:inline"> ${chat.content}</p>
            <!-- <p class="date-text">12/January/2017</p> -->
          </div>
          `
        )
      }
    },
    error: function () {
      console.log('Back End Response Error')
    }
  })

  $('#icon_prefix2').keypress(function (e) {
    // e.preventDefault()
    let messageVal = $('textarea[name=chat]').val()
    let usernameVal = localStorage.getItem('Username')
    if (e.which === 13) {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/chatroom/send',
        data: {message: messageVal, username: usernameVal},
        dataType: 'json'
      })
      .done(function (resp) {
        $('textarea[name=chat]').val('')
        $('#cont1').append(
          `
          <div style="margin-bottom:10px;">
            <b style="margin-right:10px;">${resp.username}: </b><p style="display:inline"> ${resp.content}</p>
            <!-- <p class="date-text">12/January/2017</p> -->
          </div>
          `
        )
        $('#cont1').scrollTop($('#cont1').prop('scrollHeight'))
      })
    }
  })
}
