if (Meteor.isClient) {
  Template.index.onRendered(function() {
    window.nes = new JSNES({
      'ui': $('#emulator').JSNESUI({
        "Homebrew": [
          ['Concentration Room', '/packages/jsnes/jsnes/roms/croom/croom.nes'],
          ['LJ65', '/packages/jsnes/jsnes/roms/lj65/lj65.nes'],
        ],
      }),
    })
    let connId = Streamy.id();
    Session.set('connectionId', connId);
    let ButtonDown = 0x41;
    let ButtonUp = 0x40;
    Streamy.on('keyDown', function(data) {
      if (data.player == 1) {
        nes.keyboard.state1[data.key] = ButtonDown;
      } else if (data.player == 2) {
        nes.keyboard.state2[data.key] = ButtonDown;
      }
    });
    Streamy.on('keyUp', function(data) {
      if (data.player == 1) {
        nes.keyboard.state1[data.key] = ButtonUp;
      } else if (data.player == 2) {
        nes.keyboard.state2[data.key] = ButtonUp;
      }
    });


    $('#player1-qrcode').qrcode({
      "size": 100,
      "color": "#000000",
      "text": Meteor.absoluteUrl('/player/1/'+connId),
    });
    $('#player2-qrcode').qrcode({
      "size": 100,
      "color": "#000000",
      "text": Meteor.absoluteUrl('/player/2/'+connId),
    });

  })

  Template.index.helpers({
    player1() {
      return '/player/1/' + Session.get('connectionId');
    },
    player2() {
      return '/player/2/' + Session.get('connectionId');
    },
  });
}
