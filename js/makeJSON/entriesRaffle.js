const fs = require('fs');

var fileOutput = '2015RaffleWinner.json';

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync(fileOutput);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync(fileOutput, JSON.stringify(notes));
};

var addNote = (pos,name,prize) => {
  var notes = fetchNotes();
  var note = {
    pos,
    name,
    prize
  };
  var duplicateNotes = notes.filter((note) => note.name === name);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (name) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.name === name);
  return filteredNotes[0];
};

var removeNote = (name) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.name !== name);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`pos: ${note.pos}`);
  console.log(`prize: ${note.prize}`);
  console.log(`name: ${note.name}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
