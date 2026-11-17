/* =====================================================================
   CONTENIDO DE LA PÁGINA — edita aquí los textos, enlaces e imágenes.
   (No hace falta tocar el resto del código.)
   - Las imágenes van en la carpeta img/ y se nombran con su ruta.
   - La "imagen" de cada actividad se ve COMPLETA (sin recortes) sobre el
     fondo de su historia; una captura de la actividad queda muy bien.
   - "tema" son los colores del mundo de cada historia.
   ===================================================================== */
window.SITE = {
  nombre: "English Storytelling",
  hero: {
    etiqueta: "Start your adventure!",
    titulo: "English Through Short Stories",
    texto: "Four short stories, four skills. Read, write, listen and speak your way through songs, podcasts, films and fairy tales.",
    boton: "Explore the stories"
  },
  bienvenida: {
    titulo: "Welcome to Your Next Language Adventure!",
    parrafos: [
      "Learning English is more than memorizing rules. It is about connecting through stories. Here you will find short stories designed to help you practice reading, writing, listening and speaking.",
      "Choose a story, enjoy it, and then try the activities. Every story is a new chance to discover words, ideas and feelings in English."
    ]
  },
  citas: [
    { texto: "Write an inspiring quote here.", autor: "Author" },
    { texto: "Add a second quote, or delete this one.", autor: "Author" }
  ],
  equipo: {
    titulo: "Meet the Teachers",
    personas: [
      { nombre: "Laura Monroy", rol: "Spanish and Foreign Languages student · Universidad Santo Tomás", foto: "img/team-laura-monroy.webp", bio: [
        "My name is Laura Monroy, and I am a student of Spanish and Foreign Languages (English and French) at Universidad Santo Tomás. I am passionate about languages, education, and cultural exchange. I enjoy learning new languages, discovering different cultures, and exploring how communication can bring people together.",
        "I am particularly interested in teaching, creativity, and designing meaningful educational experiences that help children develop their language skills in an engaging and dynamic way. Through my academic journey and personal experiences, I hope to become a dedicated language teacher who inspires students, encourages their learning, and makes a positive contribution to education and society."] },
      { nombre: "Laura Camila Pita", rol: "Spanish and Foreign Languages student", foto: "img/team-laura-camila-pita.webp", bio: [
        "Hello! My name is Laura Camila Pita, and I am a Spanish and Foreign Languages student. I have always been curious about languages and different cultures. I consider myself an open-minded and creative person who enjoys meeting people, discovering new places, and stepping outside my comfort zone. My experiences abroad have strengthened my interest in intercultural communication and taught me to appreciate different perspectives and build connections beyond language.",
        "These experiences have strengthened my passion for teaching and my belief that learning a language should also open doors to understanding the world. I enjoy exploring creative ways to bring real-life experiences and cultural diversity into the classroom, especially when working with children. I believe that teachers can inspire students to become curious, confident, and open to new perspectives.",
        "I see storytelling as a meaningful part of this process because stories allow children to explore different worlds, connect with characters, and understand realities beyond their own. They stimulate imagination, encourage empathy, and make language learning more engaging. For me, stories are not just a way to learn a language, but also a way to help children discover the world and their place in it."] },
      { nombre: "Nicoll Piratova Soler", rol: "Languages student (English and French) · Universidad Santo Tomás", foto: "img/team-nicoll-piratova.webp", bio: [
        "My name is Nicoll Piratova Soler. I am a Languages student at Universidad Santo Tomás, and I am studying English and French. I have always been curious about languages and different cultures. My interest in languages started because I realized that a language is not only words and grammar. It is a way to understand how other people think, feel, and see the world.",
        "These experiences have strengthened my passion for teaching and my belief that learning a language should also open doors to understanding the world. I enjoy exploring creative ways to bring real-life experiences and cultural diversity into the classroom, especially when working with children. I believe that teachers can inspire students to become curious, confident, and open to new perspectives.",
        "I see storytelling as a meaningful part of this process because stories allow children to explore different worlds; they stimulate imagination, encourage empathy, and make language learning more engaging."] }
    ]
  },
  objetivos: {
    titulo: "Learning Objectives",
    intro: "Through the stories and media on this site, students develop core A2 English skills.",
    areas: [
      { area: "Grammar", items: ["Use present simple and past simple", "Ask and answer questions", "Talk about daily routines"] },
      { area: "Reading", items: ["Understand the plot of a story", "Identify the main characters", "Predict what happens next"] },
      { area: "Listening", items: ["Follow simple instructions", "Catch key information", "Recognize sounds and words"] },
      { area: "Speaking", items: ["Express opinions and feelings", "Take part in simple conversations", "Use common everyday phrases"] },
      { area: "Writing", items: ["Write short paragraphs", "Describe a person or a place", "Use correct punctuation"] },
      { area: "Vocabulary", items: ["Use descriptive adjectives", "Learn new words in context", "Talk about emotions"] }
    ]
  },

  historias: [
    {
      id: "my-little-world",
      titulo: "Find My Self",
      formato: "Song",
      emoji: "🎵",
      portada: "img/cover-find-my-self.webp",
      miniatura: "img/thumb-find-my-self.webp", fondo: "img/blur-find-my-self.webp",
      portadaFoco: "50% 45%",
      tema: { bg: "#21152f", bg2: "#5b2f4a", ink: "#fff3e8", accent: "#ffb27a", accent2: "#c9a7ff", oscuro: true },
      resumen: "A cheerful song about everyday routines, friends and the little things that make a day special.",
      media: { url: "https://www.youtube.com/watch?v=G5urVbTEc5w", boton: "" },
      transcripcion: "Paste the lyrics or transcript here.\nEach line break you write is kept on the page.",
      enfoque: {
        gramatica: ["Present simple vs. present continuous", "Modal verbs: can, could, will", "Comparative adjectives"],
        vocabulario: ["Daily routines", "Emotions", "Free time"]
      },
      vocabulario: [
        { palabra: "Morning", significado: "The first part of the day, before noon." },
        { palabra: "Laugh", significado: "To make happy sounds because something is funny." },
        { palabra: "Lonely", significado: "Sad because you are alone." }
      ],
      actividades: [
        { id: "fms-listening", habilidad: "listening", titulo: "Song word search", instrucciones: "Listen to the song Finding Myself, spot the verbs in the past simple and find them in the word search.",
          link: "https://canva.link/md2tc7sr1cxfhfg", boton: "Open Canva", imagen: "img/act-fms-listening.webp" },
        { id: "fms-writing", habilidad: "writing", titulo: "Complete the lyrics", instrucciones: "Read each line of the song and drag the missing word into the gap.",
          link: "https://wordwall.net/es/resource/123880278?wwmethod=link", boton: "Open Wordwall", imagen: "img/act-fms-writing.webp" },
        { id: "fms-reading", habilidad: "reading", titulo: "Reading and comprehension maze", instrucciones: "Read the clues about the song, make inferences and find your way out of the maze.",
          link: "https://view.genially.com/6af9f1666050153a5ea3c900", boton: "Open Genially", imagen: "img/act-fms-reading.webp" },
        { id: "fms-speaking", habilidad: "speaking", titulo: "Jump game", instrucciones: "Jump through the levels of the game and answer each question out loud in English.",
          link: "https://canva.link/royje9celaritqi", boton: "Open Canva", imagen: "img/act-fms-speaking.webp" }
      ],
      galeria: []
    },
    {
      id: "green-tunja",
      titulo: "Behind The Petals",
      formato: "Podcast",
      emoji: "🌻",
      portada: "img/cover-behind-the-petals.webp",
      miniatura: "img/thumb-behind-the-petals.webp", fondo: "img/blur-behind-the-petals.webp",
      portadaFoco: "50% 50%",
      tema: { bg: "#f7f0e2", bg2: "#efe2f7", ink: "#2f2640", accent: "#8a5cc9", accent2: "#e9a521", oscuro: false },
      resumen: "A podcast about the parks and green areas of Tunja and why it matters to take care of them.",
      media: { url: "", boton: "" },
      transcripcion: "Paste the podcast transcript here.",
      enfoque: {
        gramatica: ["Comparatives and superlatives", "There is / there are"],
        vocabulario: ["Nature", "The city", "Adjectives"]
      },
      vocabulario: [
        { palabra: "Forest", significado: "A large area full of trees." },
        { palabra: "Clean", significado: "Without dirt or rubbish." },
        { palabra: "Protect", significado: "To keep something safe from harm." }
      ],
      actividades: [
        { id: "green-tunja-who", habilidad: "reading", titulo: "Who is who?", instrucciones: "Open the boxes one by one and say who each character from the episode is.",
          link: "https://wordwall.net/resource/123491145/who-is-who", boton: "Open Wordwall", imagen: "img/act-petals-who.webp" },
        { id: "green-tunja-order", habilidad: "listening", titulo: "Put the story in order", instrucciones: "Listen to the episode again and choose what happened first, next and last.",
          link: "https://wordwall.net/resource/123491582/put-the-story-in-order", boton: "Open Wordwall", imagen: "img/act-petals-order.webp" },
        { id: "green-tunja-true-false", habilidad: "listening", titulo: "True or false", instrucciones: "The sentences fly by fast! Decide if each one is true or false before time runs out.",
          link: "https://wordwall.net/resource/123491787/true-or-false", boton: "Open Wordwall", imagen: "img/act-petals-truefalse.webp" },
        { id: "green-tunja-crossword", habilidad: "vocabulary", titulo: "Charlie Charlie crossword", instrucciones: "Read the clues and complete the crossword with words from the episode.",
          link: "https://share.gridgenius.app/p/behind-the-petals-episode-charlie-charlie-medium-Vxoy2Y", boton: "Open crossword", imagen: "img/act-petals-crossword.webp" }
      ],
      galeria: []
    },
    {
      id: "brave-enough-to-leave",
      titulo: "The Last Five Minutes",
      formato: "Short film",
      emoji: "🎬",
      portada: "img/cover-the-last-five-minutes.webp",
      miniatura: "img/thumb-the-last-five-minutes.webp", fondo: "img/blur-the-last-five-minutes.webp",
      portadaFoco: "50% 40%",
      tema: { bg: "#0b0f1c", bg2: "#1b2338", ink: "#f3ead8", accent: "#e7c88e", accent2: "#9fb4d9", oscuro: true },
      resumen: "Daniela finds a pocket watch that takes her back five minutes in time. Can she discover what Dr. Vargas is hiding and save her mother before time runs out?",
      media: { url: "https://youtu.be/6cYUwizHGec", boton: "" },
      transcripcion: "Paste the film transcript here.",
      enfoque: {
        gramatica: ["Future with will and going to", "Past simple"],
        vocabulario: ["Travel", "Feelings", "Life plans"]
      },
      vocabulario: [
        { palabra: "Abroad", significado: "In or to another country." },
        { palabra: "Dream", significado: "Something you really want to do in the future." },
        { palabra: "Brave", significado: "Ready to do something difficult or scary." }
      ],
      actividades: [
        { id: "brave-enough-to-leave-1", habilidad: "reading", titulo: "Escape the House", instrucciones: "Read carefully and complete the reading challenge.",
          link: "https://lastfiveminutes.github.io/reading/", boton: "Start reading", imagen: "img/tlfm-reading.jpg" },
        { id: "brave-enough-to-leave-2", habilidad: "writing", titulo: "Daniela's Diary", instrucciones: "Complete the writing activity based on the short film.",
          link: "https://lastfiveminutes.github.io/writing/", boton: "Start writing", imagen: "img/tlfm-writing.jpg" },
        { id: "brave-enough-to-leave-3", habilidad: "listening", titulo: "Detectives on the Call", instrucciones: "Listen carefully and answer the questions.",
          link: "https://lastfiveminutes.github.io/listening/", boton: "Start listening", imagen: "img/tlfm-listening.jpg" },
        { id: "brave-enough-to-leave-4", habilidad: "speaking", titulo: "Rewind Speaking Show", instrucciones: "It's your turn to speak! Follow the steps and record your answer.",
          link: "https://lastfiveminutes.github.io/speaking/", boton: "Start speaking", imagen: "img/tlfm-speaking.jpg" }
      ],
      galeria: []
    },
    {
      id: "the-whispering-wind-chime",
      titulo: "Lila: The Flower of the Night",
      formato: "Fairy tale",
      emoji: "🎐",
      portada: "img/cover-lila.webp",
      miniatura: "img/thumb-lila.webp", fondo: "img/blur-lila.webp",
      portadaFoco: "50% 60%",
      tarjetaFoco: "18% 100%", tarjetaZoom: 1.3,
      tema: { bg: "#11173d", bg2: "#2a1d5a", ink: "#f4efff", accent: "#ffd36b", accent2: "#b394ff", oscuro: true },
      resumen: "",
      media: { url: "https://youtu.be/QnJggAAxj_4", boton: "" },
      transcripcion: "Paste the story text here.",
      enfoque: {
        gramatica: ["Past simple", "Adverbs of manner"],
        vocabulario: ["Nature sounds", "Magic and fantasy"]
      },
      vocabulario: [
        { palabra: "Whisper", significado: "To speak very quietly." },
        { palabra: "Breeze", significado: "A soft, gentle wind." },
        { palabra: "Silence", significado: "When there is no sound at all." }
      ],
      actividades: [
        { id: "lila-reading", habilidad: "reading", titulo: "Reading quiz", instrucciones: "Read each question about Lila's story and choose the correct answer. Type your name to start.",
          link: "https://wayground.com/join?gc=65595347&source=liveDashboard", boton: "Open Wayground", imagen: "img/cover-lila.webp" },
        { id: "lila-listening", habilidad: "listening", titulo: "What happened in the meadow?", instrucciones: "Watch the illustrated video of Lila and complete the listening activities.",
          link: "https://canva.link/fd7fe9z641rosgv", boton: "Open Canva", imagen: "img/act-lila-listening.webp" },
        { id: "lila-writing", habilidad: "writing", titulo: "The story behind the flowers", instrucciones: "Practice the past simple, adjectives and connectors with the events and characters of the story.",
          link: "https://canva.link/qpbhzuqghe436xt", boton: "Open Canva", imagen: "img/act-lila-writing.webp" },
        { id: "lila-speaking", habilidad: "speaking", titulo: "Speaking challenge", instrucciones: "Play the board game in groups of four: roll, move and answer each question in English.",
          link: "https://view.genially.com/6af7ea0649f94c0169784faa", boton: "Open Genially", imagen: "img/act-lila-speaking.webp" },
      ],
      galeria: []
    }
  ],

  contacto: { email: "", redes: [] },
  pie: "© 2026 English Storytelling Hub",
  galeria: { titulo: "Gallery", intro: "", fotos: [] }
};
