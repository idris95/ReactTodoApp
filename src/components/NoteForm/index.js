import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: '',
    };
  }

  handleUserInput = event => {
    this.setState({ newNoteContent: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: '',
    });
  };

  render() {
    return (
      <div className="note-controls">
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="note-controls__input"
            placeholder="Write your new note here..."
            value={this.state.newNoteContent}
            onChange={this.handleUserInput}
          />
          <button className="note-controls__submit-btn">Add New</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
