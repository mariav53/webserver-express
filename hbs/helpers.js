const hbs = require('hbs');

//helpers
hbs.registerHelper('getYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (string) =>{
  let text = string.split(' ');
  text.forEach( (word, idx) => {
    text[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return text.join(' ');
});
