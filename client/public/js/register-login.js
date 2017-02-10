<<<<<<< 4c874f30c950e30561aa8bcb491356a587d0a0e3
<<<<<<< 3ead52db586c1a7f79200613e5cd4596b34afe08
=======
>>>>>>> temp integration
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
<<<<<<< 4c874f30c950e30561aa8bcb491356a587d0a0e3
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
=======
$('form#registerMe').submit(function(){
  let username = $('input#username.validate.valid').val()
  let password = $('input#password.validate.valid').val()
  let avatar = $('input.select-dropdown').val()
  console.log(username+password+avatar);
})
$('form#logMeIn').submit(function(){
  console.log($("input#icon_user.validate.valid").val());
  console.log($('input#icon_password.validate.valid').val());
>>>>>>> resolving conflict
=======
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
>>>>>>> temp integration
})
