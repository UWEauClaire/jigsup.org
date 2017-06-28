const notes = require('./entriesRaffle.js');
const rl = require('readline');
const fs = require('fs');


//Change fileInput to what text file its reading from
//change fileOutput in entries.js to what JSON file its writing to

fileInput = '2015RaffleWinner.in';



var lineReader = rl.createInterface({
  input: fs.createReadStream(fileInput)
});

lineReader.on('line', function (line) {
  words = line.split(/\s+/);

  text = '';
  for (i = 3; i < words.length; i++) {
    if(i === words.length-1) {
      text += words[i];
    } else {
      text += words[i] + ' ';
    }
  }

  name =`${words[1]} ${words[2]}`;

  notes.addNote(words[0], name, text);
});


//showing all notes in file
var allNotes = notes.getAll();
console.log(`Printing ${allNotes.length} note(s).`);
allNotes.forEach((note) => notes.logNote(note));
