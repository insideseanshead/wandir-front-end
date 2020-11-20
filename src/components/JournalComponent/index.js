import React, { useState, useContext } from "react";
import "./style.css";
import ReactMarkdown from 'react-markdown'
import GeoStateContext from "../../contexts/GeoStateContext";
import API from "../../utils/API"


const handleLink = () => {
  console.log("Hey")
}
export default function JournalComponent({ id, title, date, body, editClick, ...rest }) {
  const { deleteReset } = useContext(GeoStateContext)

  const [isOpen, setIsOpen] = useState(false);

  const deleteClick = id => {
    API.deleteEntry(id).then(res => {
        deleteReset();
        setIsOpen(!isOpen)
    });
  };

  return (
    <article className="media" {...rest}>
      <div className="media-content">
        <button className="collapsible" onClick={() => setIsOpen(!isOpen)}>
          <strong>{title}</strong> <small>{date}</small>
        </button>

        {isOpen && (
          <div className="content">
            <p>
              <ReactMarkdown children={body} transformLinkUri={handleLink} />
              <div className="entryMenu">
                <button className="entryEdit" onClick={e => editClick(id)}>Edit</button>
                <button className="entryDelete" onClick={e => deleteClick(id)}>Delete</button>
              </div>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
