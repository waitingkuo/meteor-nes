Package.describe({
  summary: 'jsnes',
  version: '0.0.1',
});

Package.onUse(function (api) {

  api.use('jquery');
  api.addAssets([
    'jsnes/roms/croom/croom.nes',
    'jsnes/roms/lj65/lj65.nes',
  ], 'client');
  api.addFiles([
    'jsnes/lib/dynamicaudio-min.js',
    'jsnes/source/nes.js',
    'jsnes/source/utils.js',
    'jsnes/source/cpu.js',
    'jsnes/source/keyboard.js',
    'jsnes/source/mappers.js',
    'jsnes/source/papu.js',
    'jsnes/source/ppu.js',
    'jsnes/source/rom.js',
    'jsnes/source/ui.js',
  ], 'client', {bare: true});
  api.export('JSNES');
});
