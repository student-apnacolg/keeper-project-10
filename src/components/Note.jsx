const Note = ({id, title, content, onDelete}) => {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="deleteNote" onClick={() => onDelete(id)}>&#10060;</button>
    </div>
  )
}

export default Note