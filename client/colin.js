Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
        var stringArray = message.split('&amp;');
        ui.notify(stringArray[0], stringArray[1]).effect('slide').closable();

        Session.set('displayMessage', null);
    }
});

Meteor.pages({

    // Page values can be an object of options, a function or a template name string

    '/': { to: 'home'},
    '/login': { to: 'loginForm'},
    '/signup': { to: 'register'},
    '/logout': { to: 'logout'},
    '*': 'notFound'
  }, {

    // optional options to pass to the PageRouter

    defaults: {
      layout: 'layout'
    }
  });