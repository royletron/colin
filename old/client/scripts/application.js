// Subtitles
//
// MIT. By Ben Mcmahen.
//
// Enjoy.


(function(){

  var root = this

  // Our Backbone Router. It'd be nice to use something
  // that didn't require backbone since I don't use Backbone
  // anywhere els.e
  var Router = Backbone.Router.extend({

    routes : {
      '': 'home',
      'collection': 'collection',
      'reset-password' : 'resetPassword',
      'help' : 'help',
      'login' : 'login',
      'createCollection' : 'createCollection'
    },

    home : function() {
      Session.set('currentView', null);
      Session.set('overlay', null);
    },

    login: function(){
      Session.set('overlay', 'loginForm');
    },

    resetPassword : function() {
      Session.set('passwordView', 'password');
    },

    help : function(){
      Session.set('currentView', 'help');
    },
    
    collection : function() {
        Session.set('currentView', 'collection');
    },
    
    createCollection : function() {
        Session.set('overlay', 'createCollection');
    }
    
  });

  // Create our Router. Another global....
  root.Router = new Router();

  Meteor.startup(function () {
    Backbone.history.start({ pushState : true });
  });

  // The HUGE LIST of Session Variables. There should be a better
  // way to do this. Consider making a local, reactive model?
  Session.setDefault('currentView', null);
  Session.setDefault('overlay', null);
  Session.setDefault('loading', null);

  // Handle the presence of a resetToken separately, since
  // this doesn't work well with Backbone's router.
  if (Accounts._resetPasswordToken) {
    Session.set('overlay', 'loginView');
    Session.set('resetPassword', Accounts._resetPasswordToken);
  }

}).call(this);



