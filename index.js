if (Meteor.isClient) {
  Template.index.onRendered(function() {

    console.log('wew');
    let nes = new JSNES({
      'ui': $('#emulator').JSNESUI({
        "Homebrew": [
          ['Concentration Room', '/packages/jsnes/jsnes/roms/croom/croom.nes'],
          ['LJ65', '/packages/jsnes/jsnes/roms/lj65/lj65.nes'],
        ],
      }),
    })
  })

}
