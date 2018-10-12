import React from 'react';
import PropTypes from 'prop-types';

const NoteContent = props => {
  return (
    <div className="note-content">
      <p id={props.noteId}>{props.noteContent}</p>
      <div>
        <button onClick={props.deleteNoteItem}>delete</button>
      </div>
    </div>
  );
};

NoteContent.propTypes = {
  noteContent: PropTypes.string,
};

export default NoteContent;
