const notes = require('./entries.js');
const rl = require('readline');
const fs = require('fs');


//Change fileInput to what text file its reading from
//change fileOutput in entries.js to what JSON file its writing to

fileInput = '2014FishPrizeWinner.in';



var lineReader = rl.createInterface({
  input: fs.createReadStream(fileInput)
});

lineReader.on('line', function (line) {
  words = line.split(/\s+/);

  name =`${words[1]} ${words[2]}`;
  text = '';
  for (i = 5; i < words.length; i++) {
    if(i === words.length-1) {
      text += words[i];
    } else {
      text += words[i] + ' ';
    }
  }
  notes.addNote(words[0], name, words[3], words[4], text);
});


//showing all notes in file
var allNotes = notes.getAll();
console.log(`Printing ${allNotes.length} note(s).`);
allNotes.forEach((note) => notes.logNote(note));
