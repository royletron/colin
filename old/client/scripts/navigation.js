Template.navigation.helpers({
  displayName: function(){
    var user = Meteor.user();
    return (user.profile && user.profile.name) || user.username || (user.emails && user.emails[0] && user.emails[0].address);
  },

  loading : function() {
    return Session.get('loading');
  }
});

Template.navigation.events({

  'click .brand' : function() {
    Router.navigate('');
    return false;
  },

  'click .logout' : function() {
    Meteor.logout();
    Router.navigate('');
    return false;
  },

  'click .view-collection' : function() {
    Session.set('currentView', 'collection');
    Router.navigate('collection');
    return false;
  },

  'click .view-help' : function() {
    Session.set('currentView', 'help');
    Router.navigate('help');
    return false;
  },

  'click .login' : function(){
    Session.set('overlay', 'loginForm');
    Router.navigate('login');
    return false;
  }
});


function addClass() {
  $('#overlay').addClass('active');
}

// When rendered, add the 'active' class. This allows
// us to animate the fade/scale. Defer forces a redraw
// to ensure the animation happens.
Template.overlay.rendered = function(){
  if (Session.get('overlay')) {
    _.defer(addClass);
  }
};