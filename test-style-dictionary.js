const StyleDictionary = require('style-dictionary');

StyleDictionary.extend('./style-dictionary.config.json').buildAllPlatforms();

console.log('Build completed successfully!');