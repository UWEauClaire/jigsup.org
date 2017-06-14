const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./entries.js');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all of the note')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove note', {
  title: titleOptions
})
.help()
.argv;
var command = argv._[0];
// console.log('command: ', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);
console.log('----------------------------------------------------\n');

if (command === 'add') {
  //Add
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('tried to add duplicate note');
  }
}else if (command === 'list') {
  //List
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
  //Read
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  }else {
    console.log('Note not found');
  }
}else if(command === 'remove') {
  //Remove
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
    console.log('Command not recognized');
}
