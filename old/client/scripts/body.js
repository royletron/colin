Template.body.helpers({

  appView: function(){
    return Session.get('currentView');
  },

  app : function(){
    return Session.equals('currentView', 'app');
  },

  help: function(){
    return Session.equals('currentView', 'help');
  },

  collection: function(){
    return Session.equals('currentView', 'collection');
  }

});

