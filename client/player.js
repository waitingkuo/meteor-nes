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
    let connId = FlowRouter.current().params.connId;
    let player = parseInt(FlowRouter.current().params.playerId);
    let buttons = ['up', 'down', 'left', 'right', 'select', 'start', 'a', 'b'];
    for (var i in buttons) {
      let button = buttons[i];
      let  h = new Hammer(document.getElementById(button));
      h.get('press').set({time: 0})
      h.get('tap').set({enable: false})
      h.on("press", function(ev) {
        let key = keyMap[button];
        Streamy.sessions(connId).emit('keyDown', {key: key, player:player});
      });
      h.on("pressup", function(ev) {
        let key = keyMap[button];
        Streamy.sessions(connId).emit('keyUp', {key: key, player:player});
      });
    }
  });
  


});
