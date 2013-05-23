Deps.autorun(function() {
  var message = Session.get('displayMessage');
  if (message) {
    var stringArray = message.split('&');
    Toast.info(stringArray[1], stringArray[0]);

    Session.set('displayMessage', null);
  }
});