import ReactMarkdown from "react-markdown";
function Main( {activeNote , onUpdateNote} ) {
    const onEditField = (field, value) => {
        onUpdateNote({
          ...activeNote,
          [field]: value,
          lastModified: Date.now(),
        });
      };
    if(!activeNote) return <div className="no-active-note">No Active Note</div>
return <div className="app-main">
    <div className="app-main-note-edit">
        <input 
        type="text" 
        id="title"
        value={activeNote.title}
        onChange ={(e) => onEditField("title",e.target.value)}
         autoFocus></input>
        <textarea 
        id="body" 
        value={activeNote.body}
        placeholder="Write you note here..."
        onChange={(e) => onEditField("body",e.target.value)}/>
    </div>
    <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
    </div>
</div>
}
export default Main;
