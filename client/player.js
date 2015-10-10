Meteor.startup(function() {


  Template.player.onRendered(function() {
    window.nes = new JSNES({});
    window.keyMap = {
      up: nes.keyboard.keys.KEY_UP,
      down: nes.keyboard.keys.KEY_DOWN,
      left: nes.keyboard.keys.KEY_LEFT,
      right: nes.keyboard.keys.KEY_RIGHT,
      a: nes.keyboard.keys.KEY_A,
      b: nes.keyboard.keys.KEY_B,
      select: nes.keyboard.keys.KEY_SELECT,
      start: nes.keyboard.keys.KEY_START,
    };
    dpad();

  });
  Template.player.events({
    'mousedown .button': function(e) {
      let key = keyMap[$(e.currentTarget).attr('id')];
      let connId = FlowRouter.current().params.connId;
      Streamy.sessions(connId).emit('keyDown', {key: key});
    },
    'mouseup .button': function(e) {
      let key = keyMap[$(e.currentTarget).attr('id')];
      let connId = FlowRouter.current().params.connId;
      //FIXME fix keyup too soon problem
      Streamy.sessions(connId).emit('keyUp', {key: key});
    },
  });
  


});
