Template.collection.events({
    'click .create-collection': function() {
        Session.set('overlay', 'createCollection');
        //Router.navigate('createCollection');
        return false;
    }
})