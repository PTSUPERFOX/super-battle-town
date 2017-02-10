$('form#logMeIn').submit(function(e){
  e.preventDefault();
  let username = $("input#icon_user.validate.valid").val());
  let password = $('input#icon_password.validate.valid').val());
  let userData = {username: username, password: password}
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/login',
    data: {user: userData},
    dataType: 'json',
    success: function(user) {
      if()
    },
    fail: function(err){
      console.log(err);
    }
  })
})

$('form#registerMe').submit(function(e){
  e.preventDefault();
  let username = $('input#username.validate.valid').val()
  let password = $('input#password.validate.valid').val()
  let avatar = $('input.select-dropdown').val()
  let userData = {username: username, password: password, avatar: avatar}
  console.log(userData);
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users',
    data: {user: userData},
    dataType: 'json',
    success: function(data) {
      console.log(data);
    },
    fail: function(err){
      console.log(err);
    }
  })
}
