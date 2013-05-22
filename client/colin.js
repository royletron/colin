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

    '/': { to: 'home', before: [home]},
      '/reset-password' : { to: 'resetPassword', before: [resetPassword]},
      '/login' : { to: 'login', before: [login]},
    '*': 'notFound'
  }, {

    // optional options to pass to the PageRouter

    defaults: {
      layout: 'layout'
    }
  });
  
  
  Session.setDefault('looping', true);
  Session.setDefault('loopDuration', 5);
  Session.setDefault('playbackRate', 1);
  Session.setDefault('videoPlaying', false);
  Session.setDefault('currentTime', null);
  Session.setDefault('startTime', 0);
  Session.setDefault('endTime', null);
  Session.setDefault('currentVideo', null);
  Session.setDefault('currentSub', null);
  Session.setDefault('isLooping', null);
  Session.setDefault('saving', null);
  Session.setDefault('currentView', null);
  Session.setDefault('overlay', null);
  Session.setDefault('loading', null);
  Session.setDefault('createProjectFlow', null);
  
  if (Accounts._resetPasswordToken) {
    Session.set('overlay', 'loginView');
    Session.set('resetPassword', Accounts._resetPasswordToken);
  }
  
  function home() {
      Session.set('currentView', null);
      Session.set('overlay', null);
    }
    function login() {
      Session.set('overlay', 'loginForm');
    }

    function resetPassword () {
      Session.set('passwordView', 'password');
    }

    
