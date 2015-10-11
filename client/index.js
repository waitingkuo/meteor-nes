if (Meteor.isClient) {
  Template.index.onRendered(function() {
    window.nes = new JSNES({
      'ui': $('#emulator').JSNESUI({
        /*
        "Homebrew": [
          ['Concentration Room', '/packages/jsnes/jsnes/roms/croom/croom.nes'],
          ['LJ65', '/packages/jsnes/jsnes/roms/lj65/lj65.nes'],
        ],
        */
        "Roms": [
                    ['Bubble Bobble', 'roms/Bubble Bobble (U).nes'],
                    
                    ['Contra', 'roms/Contra (U) [!].nes'],
                    ['Donkey Kong', 'roms/Donkey Kong (JU).nes'],
                    ['Dr. Mario', 'roms/Dr. Mario (JU).nes'],
                    ['Golf', 'roms/Golf (JU).nes'],
                    ['The Legend of Zelda', 'roms/Legend of Zelda, The (U) (PRG1).nes'],
                    ['Lemmings', 'roms/Lemmings (U).nes'],
                    ['Lifeforce', 'roms/Lifeforce (U).nes'],
                    
                    ['Mario Bros.', 'roms/Mario Bros. (JU) [!].nes'],
                    ['Mega Man', 'roms/Mega Man (U).nes'],
                    ['Pac-Man', 'roms/Pac-Man (U) [!].nes'],
                    ['Super Mario Bros.', 'roms/Super Mario Bros. (JU) (PRG0) [!].nes'],
                    ['Super Mario Bros. 3', 'roms/Super Mario Bros. 3 (U) (PRG1) [!].nes'],
                    ['Tennis', 'roms/Tennis (JU) [!].nes'],
                    ['Tetris', 'roms/Tetris (U) [!].nes'],
                    ['Tetris 2', 'roms/Tetris 2 (U) [!].nes'],
                    ['Zelda II - The Adventure of Link', 'roms/Zelda II - The Adventure of Link (U).nes']
          ],
      }),
    })
    let did = false;
    setInterval(function() {
      let connId = Streamy.id();
      if (did) return
      if (connId === null) {
        return
      }
      did = true;
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
        "text": Meteor.absoluteUrl('player/1/'+connId),
      });
      $('#player2-qrcode').qrcode({
        "size": 100,
        "color": "#000000",
        "text": Meteor.absoluteUrl('player/2/'+connId),
      });
      $('#player1-link').attr('href', '/player/1/'+connId);
      $('#player2-link').attr('href', '/player/2/'+connId);

    }, 1000);

  });

}
