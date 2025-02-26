import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
import ListNote from "./ListNote";
import CreateArea from "./CreateArea";

function App() {


function addNoteToServer(note) {
    // Envoyer la requête POST pour ajouter la note au serveur
    fetch("http://localhost:4040/add-note", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(response => response.json())
        .then(data => {
        console.log("La note a été ajoutée au serveur :", data);
        // Faire quelque chose avec la réponse du serveur, si nécessaire
        })
        .catch(error => {
        console.error("Erreur lors de l'ajout de la note au serveur :", error);
        // Gérer l'erreur, si nécessaire
        });
    }



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNoteToServer} />
      <ListNote />   
      <Footer />
      
    </div>
  );
}

export default App;