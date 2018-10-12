import React, { Component } from 'react';
import NoteContent from '../../components/NoteContent';
import NoteForm from '../../components/NoteForm';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          noteContent: 'This is my first note',
        },
        {
          id: 2,
          noteContent: 'This is my second note',
        },
      ],
    };
  }

  // add new note
  addNote = note => {
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    this.setState({
      notes: previousNotes,
    });
    console.log('notes:', this.state.notes);
  };

  // delete note item
  deleteNoteItem = index => {
    const notes = Object.assign([], this.state.notes);
    notes.splice(index, 1);
    this.setState({
      notes: notes,
    });
  };

  render() {
    const notes = this.state.notes;
    return (
      <div className="container">
        <h2 className="note-heading">Your note list</h2>

        {/* notes content */}
        {notes.map((note, index) => (
          <NoteContent
            noteContent={note.noteContent}
            deleteNoteItem={this.deleteNoteItem.bind(this, index)}
            noteId={note.id}
            key={index}
          />
        ))}

        {/* input form for add new note */}
        <NoteForm addNote={this.addNote} />
      </div>
    );
  }
}

export default Note;
