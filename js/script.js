// Creazione array di oggetti contenenti persone facenti parte del teem di lavoro

const team = [
    {
      foto: "img/foto_1.jpg",
      nome: "Marco Rossi",
      ruolo: "Front-End Developer",
      competenze: ["HTML", " CSS", " JavaScript", " React"],
      esperienza: 3 // anni di esperienza
    },
    {
      foto: "img/foto_2.jpg",
      nome: "Sara Bianchi",
      ruolo: "Back-End Developer",
      competenze: ["Node.js", " Express", " MongoDB", "SQL"],
      esperienza: 5
    },
    {
      foto: "img/foto_3.png",
      nome: "Luca Verdi",
      ruolo: "Full Stack Developer",
      competenze: ["React", " Node.js", " GraphQL", " PostgreSQL"],
      esperienza: 4
    },
    {
      foto: "img/foto_4.jpeg",
      nome: "Elena Neri",
      ruolo: "UI/UX Designer",
      competenze: ["Figma", " Adobe XD", " Sketch", " CSS"],
      esperienza: 6
    },
    {
      foto: "img/foto_5.jpeg",
      nome: "Davide Rossi",
      ruolo: "DevOps Engineer",
      competenze: ["AWS", " Docker", " Kubernetes", " CI/CD"],
      esperienza: 7
    },
    {
      foto: "img/foto_6.jpeg",
      nome: "Giulia Fontana",
      ruolo: "Project Manager",
      competenze: ["Agile", " Scrum", " Kanban", " JIRA"],
      esperienza: 8
    }
  ];
  
  const cardElem  = document.getElementById("card");
 
  for(let i = 0; i < team.length; i++) {
    const currElem = team[i];
    cardElem.innerHTML += `
      <div>
      <img src="${currElem.foto}" alt ="${currElem.nome}">
      <h2> Nome: ${currElem.nome}</h2>
      <h3> Ruolo: ${currElem.ruolo}</h3>
      <h3> Competenze: ${currElem.competenze}</h3>
      <h3> Esperienza: ${currElem.esperienza} anni</h3>
      </div>
    `
  }

