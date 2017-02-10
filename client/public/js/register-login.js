$('form#registerMe').submit(function(){
  let username = $('input#username.validate.valid').val()
  let password = $('input#password.validate.valid').val()
  let avatar = $('input.select-dropdown').val()
  console.log(username+password+avatar);
})
$('form#logMeIn').submit(function(){
  console.log($("input#icon_user.validate.valid").val());
  console.log($('input#icon_password.validate.valid').val());
})
