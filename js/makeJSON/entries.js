const fs = require('fs');

var fileOutput = '2014FishPrizeWinner.json';

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

var addNote = (pos, name, weight, species, prize) => {
  var notes = fetchNotes();
  var note = {
    pos,
    name,
    weight,
    species,
    prize
  };
  var duplicateNotes = notes.filter((note) => note.pos === pos);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (pos) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.pos === pos);
  return filteredNotes[0];
};

var removeNote = (pos) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.pos !== pos);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`pos: ${note.pos}`);
  console.log(`name: ${note.name}`);
  console.log(`weight: ${note.weight}`);
  console.log(`species: ${note.species}`);
  console.log(`prize: ${note.prize}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
