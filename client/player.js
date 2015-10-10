Meteor.startup(function() {

  Template.player.onRendered(function() {
    window.nes = new JSNES({});
  });
  Template.player.events({
    'click .top': function(e) {
      let connId = FlowRouter.current().params.connId;
      Streamy.sessions(connId).emit('keyDown', {
        key: nes.keyboard.keys.KEY_TOP,
      });
    },
    'click .down': function(e) {
      let connId = FlowRouter.current().params.connId;
      Streamy.sessions(connId).emit('keyDown', {
        key: nes.keyboard.keys.KEY_DOWN,
      });
    },
  });
  


});
