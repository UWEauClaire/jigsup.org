const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('2017FishPrizeWinner.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  return fetchNotes();
};

var logNote = (note) => {
  console.log('--');
  console.log(`pos: ${note.pos}`);
  console.log(`name: ${note.name}`);
};
