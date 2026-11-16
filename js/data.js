/* =====================================================================
   CONTENIDO DE LA PÁGINA — edita aquí los textos, enlaces e imágenes.
   (No hace falta tocar el resto del código.)
   - Las imágenes van en la carpeta img/ y se nombran con su ruta.
   - "foco" y "zoom" eligen qué parte de la imagen se ve en cada tarjeta
     de actividad: foco = "x% y%", zoom = "cover" o un tamaño como "220%".
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
      { nombre: "Teacher Name", rol: "Trainee teacher", foto: "", bio: [
        "Write a short introduction here: who you are, what you study and why you love teaching.",
        "Add a second paragraph about why stories matter for learning English."] },
      { nombre: "Teacher Name", rol: "Trainee teacher", foto: "", bio: ["Write a short introduction here."] },
      { nombre: "Teacher Name", rol: "Trainee teacher", foto: "", bio: ["Write a short introduction here."] }
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
        { id: "my-little-world-1", habilidad: "reading", titulo: "Match the routines", instrucciones: "Match each picture with the correct daily routine.",
          link: "https://wordwall.net/es/resource/123880278?wwmethod=link", boton: "Open Wordwall",
          imagen: "img/cover-find-my-self.webp", foco: "14% 22%", zoom: "260%" },
        { id: "my-little-world-2", habilidad: "writing", titulo: "Song crossword", instrucciones: "Use the song and the clues to complete the crossword. Check your spelling!",
          link: "https://canva.link/royje9celaritqi", boton: "Open Canva",
          imagen: "img/cover-find-my-self.webp", foco: "88% 38%", zoom: "260%" },
        { id: "my-little-world-3", habilidad: "grammar", titulo: "Grammar quiz", instrucciones: "Choose the correct option to complete each sentence.",
          link: "", boton: "", imagen: "img/cover-find-my-self.webp", foco: "6% 88%", zoom: "300%" },
        { id: "my-little-world-4", habilidad: "speaking", titulo: "My favorite song", instrucciones: "Create a slide about your favorite song, then record a short video talking about it.",
          link: "https://canva.link/md2tc7sr1cxfhfg", boton: "Open Canva",
          imagen: "img/cover-find-my-self.webp", foco: "48% 62%", zoom: "230%" }
      ],
      galeria: []
    },
    {
      id: "green-tunja",
      titulo: "Behind The Petals",
      formato: "Podcast",
      emoji: "🌻",
      portada: "img/cover-behind-the-petals.webp",
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
        { id: "green-tunja-1", habilidad: "writing", titulo: "Describe and draw", instrucciones: "Draw your favorite forest from the podcast and write a short description of it.",
          link: "", boton: "", imagen: "img/cover-behind-the-petals.webp", foco: "18% 52%", zoom: "260%" },
        { id: "green-tunja-2", habilidad: "vocabulary", titulo: "Adjectives", instrucciones: "Listen again and drag the correct adjective into each sentence.",
          link: "", boton: "", imagen: "img/cover-behind-the-petals.webp", foco: "50% 40%", zoom: "250%" },
        { id: "green-tunja-3", habilidad: "reading", titulo: "Video quiz", instrucciones: "Watch the video about green areas and answer the questions.",
          link: "", boton: "", imagen: "img/cover-behind-the-petals.webp", foco: "82% 50%", zoom: "260%" },
        { id: "green-tunja-4", habilidad: "speaking", titulo: "Environmental ambassador", instrucciones: "Record a 1–2 minute video about how to take care of green areas in Tunja.",
          link: "", boton: "", imagen: "img/cover-behind-the-petals.webp", foco: "50% 72%", zoom: "200%" }
      ],
      galeria: []
    },
    {
      id: "brave-enough-to-leave",
      titulo: "The Last Five Minutes",
      formato: "Short film",
      emoji: "🎬",
      portada: "img/cover-the-last-five-minutes.webp",
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
          link: "https://lastfiveminutes.github.io/reading/", boton: "Start reading", imagen: "img/tlfm-reading.jpg", foco: "50% 62%", zoom: "cover" },
        { id: "brave-enough-to-leave-2", habilidad: "writing", titulo: "Daniela's Diary", instrucciones: "Complete the writing activity based on the short film.",
          link: "https://lastfiveminutes.github.io/writing/", boton: "Start writing", imagen: "img/tlfm-writing.jpg", foco: "50% 60%", zoom: "cover" },
        { id: "brave-enough-to-leave-3", habilidad: "listening", titulo: "Detectives on the Call", instrucciones: "Listen carefully and answer the questions.",
          link: "https://lastfiveminutes.github.io/listening/", boton: "Start listening", imagen: "img/tlfm-listening.jpg", foco: "50% 60%", zoom: "cover" },
        { id: "brave-enough-to-leave-4", habilidad: "speaking", titulo: "Rewind Speaking Show", instrucciones: "It's your turn to speak! Follow the steps and record your answer.",
          link: "https://lastfiveminutes.github.io/speaking/", boton: "Start speaking", imagen: "img/tlfm-speaking.jpg", foco: "50% 60%", zoom: "cover" }
      ],
      galeria: []
    },
    {
      id: "the-whispering-wind-chime",
      titulo: "Lila: The Flower of the Night",
      formato: "Fairy tale",
      emoji: "🎐",
      portada: "img/cover-lila.webp",
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
        { id: "the-whispering-wind-chime-1", habilidad: "listening", titulo: "Watch, listen and answer", instrucciones: "The video pauses at different points. Choose the correct answer to continue.",
          link: "", boton: "", imagen: "img/cover-lila.webp", foco: "20% 72%", zoom: "300%" },
        { id: "the-whispering-wind-chime-2", habilidad: "writing", titulo: "Listen and write", instrucciones: "Listen to the audio and write the sentences. Check spelling and capital letters!",
          link: "", boton: "", imagen: "img/cover-lila.webp", foco: "52% 50%", zoom: "300%" },
        { id: "the-whispering-wind-chime-3", habilidad: "vocabulary", titulo: "Magic flashcards", instrucciones: "Read the meanings and flip the cards to discover the secret words.",
          link: "#vocabulary", boton: "Play here", imagen: "img/cover-lila.webp", foco: "72% 74%", zoom: "300%" },
        { id: "the-whispering-wind-chime-4", habilidad: "speaking", titulo: "Tell a story", instrucciones: "Record yourself telling a famous story in your own words, then share the link.",
          link: "https://vocaroo.com/", boton: "Open Vocaroo", imagen: "img/cover-lila.webp", foco: "80% 26%", zoom: "300%" }
      ],
      galeria: []
    }
  ],

  contacto: { email: "", redes: [] },
  pie: "© 2026 English Storytelling Hub",
  galeria: { titulo: "Gallery", intro: "", fotos: [] }
};
