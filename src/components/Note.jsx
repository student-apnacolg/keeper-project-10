import "../css/note.css"

const Note = ({id, title, content, onDelete}) => {
  return (
    <div className="note">
      <div className="titleBox">
      <h2>{title}</h2>
      <button className="deleteNote" onClick={() => onDelete(id)}>X</button>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default Note