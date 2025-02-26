import React,{useState, useEffect} from 'react'
import Note from './Note'

export default function ListNote() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4040/notes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function deleteNoteFromServer(id) {
        try {
          await fetch(`http://localhost:4040/notes/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
          // Mettre à jour le tableau des notes en supprimant la note avec l'ID correspondant
          setNotes(notes.filter(note => note._id !== id));
          console.log("La note a été supprimée du serveur");
        } catch (error) {
          console.error("Erreur lors de la suppression de la note du serveur :", error);
        }
      }
  return (
    <div className='ListNote'>
         {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={() => deleteNoteFromServer(noteItem._id)}
          />
        );
      })}
    </div>
  )
}
