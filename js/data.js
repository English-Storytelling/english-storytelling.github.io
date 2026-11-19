/* =====================================================================
   CONTENIDO DE LA PÁGINA — edita aquí los textos, enlaces e imágenes.
   (No hace falta tocar el resto del código.)
   - Las imágenes van en la carpeta img/ y se nombran con su ruta.
   - La "imagen" de cada actividad se ve COMPLETA (sin recortes) sobre el
     fondo de su historia; una captura de la actividad queda muy bien.
   - "tema" son los colores del mundo de cada historia.
   - "transcripcion" va entre comillas invertidas (`) y admite:
       ## Titulo        -> una seccion (Verse 1, Chorus, Climax, Scene 2...)
       NOMBRE: texto    -> lo dice un personaje (podcast)
       [SOUND: ...]     -> efecto de sonido / [VISUAL: ...] -> lo que se ve
       > texto          -> frase destacada (moraleja, reflexion)
     Cada linea es un parrafo (o un verso en las canciones).
   - "vocabulario": palabra, tipo, significado, ejemplo (una frase de la historia)
     y "formas" (otras formas que tambien se subrayan en el texto: hid, bloomed...).
   - "reflexion" son las preguntas o ideas para despues de ver la historia.
   - "cita" de cada profe es la frase que se destaca junto a su foto.
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
    titulo: "Welcome to Our English Learning World! 🌎",
    parrafos: [
      "Welcome to our English learning website! This is a creative and interactive space designed to make learning English an enjoyable, meaningful, and engaging experience.",
      "Here, you will discover different resources that combine entertainment and education, such as a short film, a fairy tale, a podcast, and a song. Each resource offers a unique opportunity to explore the English language through storytelling, listening, music, and audiovisual experiences.",
      "Throughout the website, you will find a variety of interactive activities and challenges designed to help you develop your listening, reading, vocabulary, and comprehension skills while encouraging creativity and critical thinking.",
      "Our goal is to show you that learning English goes beyond grammar and vocabulary. It is also about discovering stories, expressing ideas, exploring different perspectives, and having fun along the way.",
      "Are you ready to learn, explore, and enjoy English? Let’s get started!"
    ]
  },
  citas: [
    { texto: "Stories offer a central road for language development.", autor: "Andrew Wright (2019)" },
    { texto: "A good story encourages us to turn the next page and read more.", autor: "Karen Saxby" }
  ],
  equipo: {
    titulo: "Meet the Teachers",
    personas: [
      { nombre: "Laura Monroy", rol: "Spanish and Foreign Languages student · Universidad Santo Tomás", foto: "img/team-laura-monroy.webp",
        cita: "I hope to become a dedicated language teacher who inspires students.", bio: [
        "My name is Laura Monroy, and I am a student of Spanish and Foreign Languages (English and French) at Universidad Santo Tomás. I am passionate about languages, education, and cultural exchange. I enjoy learning new languages, discovering different cultures, and exploring how communication can bring people together.",
        "I am particularly interested in teaching, creativity, and designing meaningful educational experiences that help children develop their language skills in an engaging and dynamic way. Through my academic journey and personal experiences, I hope to become a dedicated language teacher who inspires students, encourages their learning, and makes a positive contribution to education and society."] },
      { nombre: "Laura Camila Pita", rol: "Spanish and Foreign Languages student", foto: "img/team-laura-camila-pita.webp",
        cita: "Stories are not just a way to learn a language, but also a way to help children discover the world and their place in it.", bio: [
        "Hello! My name is Laura Camila Pita, and I am a Spanish and Foreign Languages student. I have always been curious about languages and different cultures. I consider myself an open-minded and creative person who enjoys meeting people, discovering new places, and stepping outside my comfort zone. My experiences abroad have strengthened my interest in intercultural communication and taught me to appreciate different perspectives and build connections beyond language.",
        "These experiences have strengthened my passion for teaching and my belief that learning a language should also open doors to understanding the world. I enjoy exploring creative ways to bring real-life experiences and cultural diversity into the classroom, especially when working with children. I believe that teachers can inspire students to become curious, confident, and open to new perspectives.",
        "I see storytelling as a meaningful part of this process because stories allow children to explore different worlds, connect with characters, and understand realities beyond their own. They stimulate imagination, encourage empathy, and make language learning more engaging. For me, stories are not just a way to learn a language, but also a way to help children discover the world and their place in it."] },
      { nombre: "Nicoll Piratova Soler", rol: "Languages student (English and French) · Universidad Santo Tomás", foto: "img/team-nicoll-piratova.webp",
        cita: "A language is not only words and grammar. It is a way to understand how other people think, feel, and see the world.", bio: [
        "My name is Nicoll Piratova Soler. I am a Languages student at Universidad Santo Tomás, and I am studying English and French. I have always been curious about languages and different cultures. My interest in languages started because I realized that a language is not only words and grammar. It is a way to understand how other people think, feel, and see the world.",
        "These experiences have strengthened my passion for teaching and my belief that learning a language should also open doors to understanding the world. I enjoy exploring creative ways to bring real-life experiences and cultural diversity into the classroom, especially when working with children. I believe that teachers can inspire students to become curious, confident, and open to new perspectives.",
        "I see storytelling as a meaningful part of this process because stories allow children to explore different worlds; they stimulate imagination, encourage empathy, and make language learning more engaging."] }
    ]
  },
  objetivos: {
    titulo: "Learning Objectives",
    intro: "Through the stories and media on this site, students develop core B1 English skills.",
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
      resumen: "A song about a girl who changed herself to fit in, and about learning to accept and love yourself just as you are.",
      media: { url: "https://www.youtube.com/watch?v=G5urVbTEc5w", boton: "" },
      transcripcion: `## Verse 1
[0:00] Every morning, I looked in the mirror and hated my face
[0:05] While my old friends waited on the bench, I walked away
[0:09.1] I laughed at jokes that were not funny when Lucas walked by
[0:13.3] I wanted him to notice me, so I hid who I was inside

## Pre-Chorus
[0:17.6] I was pretending all day, and I lost my own voice
[0:23.1] I changed to fit in, but it was never my choice

## Chorus
[0:29.6] Even when life is difficult, I can learn to accept myself
[0:34.3] I can love myself, I don't need their approval
[0:38.7] I am enough just as I am, I don't need a perfect face
[0:43] Even when life is difficult, I can find my place

## Verse 2
[0:56.7] When Lucas cried behind the gym, he told me he was gay
[1:01.1] I dreamed of being with him, but my dream faded away
[1:05.4] Dad had someone else, and Mom found my diary on the floor
[1:09.9] She read the pain I kept inside and waited by the door

## Pre-Chorus
[1:14.5] I was pretending all day, and I lost my own voice
[1:19.2] I changed to fit in, but it was never my choice

## Chorus
[1:27.8] Even when life is difficult, I can learn to accept myself
[1:32.2] I can love myself, I don't need their approval
[1:37] I am enough just as I am, I don't need a perfect face
[1:41.2] Even when life is difficult, I can find my place

## Final Chorus
[2:03.5] Even when life is difficult, I can learn to accept myself
[2:07.9] I can love myself, I don't need their approval
[2:12.9] I am enough just as I am, I don't need a perfect face
[2:17.4] Even when life is difficult, I can find my place`,
      reflexion: [],
      enfoque: {
        gramatica: ["Present simple vs. present continuous", "Modal verbs: can, could, will", "Comparative adjectives"],
        vocabulario: ["Daily routines", "Emotions", "Free time"]
      },
      vocabulario: [
        { palabra: "mirror", tipo: "noun", significado: "A glass where you can see yourself.",
          ejemplo: "Every morning, I looked in the mirror and hated my face" },
        { palabra: "hide", tipo: "verb", significado: "To put something where nobody can see it.", formas: ["hid", "hiding"],
          ejemplo: "I wanted him to notice me, so I hid who I was inside" },
        { palabra: "pretend", tipo: "verb", significado: "To act like something is true when it is not.", formas: ["pretending", "pretended"],
          ejemplo: "I was pretending all day, and I lost my own voice" },
        { palabra: "fit in", tipo: "phrasal verb", significado: "To be accepted by a group because you are like them.",
          ejemplo: "I changed to fit in, but it was never my choice" },
        { palabra: "accept", tipo: "verb", significado: "To be happy with something (or someone) as it is.", formas: ["accepted"],
          ejemplo: "Even when life is difficult, I can learn to accept myself" },
        { palabra: "approval", tipo: "noun", significado: "When people say or show that you are good or right.",
          ejemplo: "I can love myself, I don't need their approval" },
        { palabra: "enough", tipo: "adjective", significado: "As much as you need. Not too little.",
          ejemplo: "I am enough just as I am, I don't need a perfect face" },
        { palabra: "diary", tipo: "noun", significado: "A book where you write about your days and feelings.",
          ejemplo: "Dad had someone else, and Mom found my diary on the floor" }
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
      resumen: "Three flowers host a podcast where every flower hides a real story. In this episode: a game of Charlie Charlie in the oldest bathroom of a Colombian school.",
      media: { url: "https://youtu.be/_pHUU1dGhuM", boton: "" },
      transcripcion: `## Characters
STORMY: Purple gerbera – curious and optimistic.
ROSALY: Sunflower – sensitive and adventurous.
SKYLER: Daisy – brave and shy.

## Scene 1 · Introduction
[VISUAL: The three animated flowers appear. Friendly, mysterious intro music.]
[0:09.1] STORMY: Hello, everyone! Welcome to Behind the Petals, the podcast where every flower hides a real, anonymous story. I'm Stormy, the purple gerbera, and today I'm your host. With me are Rosaly and Skyler.
[0:25.7] ROSALY: Hi, everybody!
[0:28.1] SKYLER: Hello! Hahaha, sorry, I'm a little nervous.
[0:31.8] STORMY: Don't worry, Skyler! Each of us represents a real person, and every person has a story to share. Today, we're talking about scary stories at school. Every school has one, like a ghost in the library or an old building. In Colombia, we all know at least one!
[0:54.1] STORMY: Today's story happened at a real school, I.E. Manganito Martínez de la Patagonia. It's about a famous game: Charlie Charlie. I'm going to stay quiet and listen. I'm already scared! Rosaly and Skyler, please begin!

## Scene 2 · The Beginning
[VISUAL: An old school corridor and a dark bathroom. Sound: cold wind, a blinking light and distant school noises. Suspense music begins softly.]
[1:21.5] ROSALY: It was a normal day at I.E. Manganito Martínez de la Patagonia. We were in tenth grade, and during recess, a friend said, "Let's play Charlie Charlie!" At first, nobody wanted to, but then everybody agreed. We didn't want to play in the classroom because a teacher was there, so we went to the oldest bathroom at the back of the school.
[1:46.7] ROSALY: The corridor was dark, and the air was very cold. The sinks were dirty, the light was blinking, and the mirror was broken. We put two pencils on a piece of paper and asked, "Charlie, Charlie, are you here?" We laughed, but it was a nervous laugh.
[SOUND: Pencils moving softly.]
[2:09.5] ROSALY: And the pencils moved a little. Skyler, do you remember what happened next?

## Scene 3 · The Strange Reflections
[2:16.0] SKYLER: Yes, I remember. Suddenly, we heard a sound: knock, knock, knock.
[SOUND: Three slow knocks.]
[2:23.1] SKYLER: It came from inside one of the stalls. We looked at each other, and nobody said anything. Someone said, "Maybe it was the wind." But there was no window!
[2:38.5] SKYLER: Then, we looked at the mirror. It had dark stains, and our faces looked very strange. One girl looked at her reflection and said, "That's not my face!" We looked again, and our reflections were behaving differently. One reflection smiled, but the girl wasn't smiling. Another one moved her hand, but my friend didn't move hers. One reflection turned her head toward the door, as if she was waiting for something.
[3:07.0] SKYLER: I wanted to leave, but my legs wouldn't move. Rosaly, your friend had a flashlight, right?

## Scene 4 · The Climax
[3:14.2] ROSALY: Yes, she did. She turned on her flashlight to see better. Then, she turned it off, but the mirror stayed lit. There was no light source at all.
[SOUND: Low electric hum.]
[3:28.3] ROSALY: Then, one reflection came closer to the glass and whispered something. I didn't understand the words, but I felt it on my skin.
[3:40.8] ROSALY: Skyler, tell them how we tried to escape!

## Scene 5 · The Escape
[VISUAL: The students rush to the bathroom door.]
[3:45.5] SKYLER: We ran to the door, but we couldn't open it. It was stuck! We pulled and pulled, but it wouldn't move. Nobody spoke. We only heard our breathing.
[SOUND: Door handle rattling and heavy breathing.]
[3:58.9] SKYLER: The light blinked more and more, and then I heard another whisper, right behind my ear. I still don't know if it was a person or something else. Finally, the door opened, and we ran out screaming!
[SOUND: Door opens, screams and running footsteps.]
[4:15.0] SKYLER: We ran down the corridor to a teacher, crying and shaking, and told her everything.

## Scene 6 · The End
[4:24.4] ROSALY: The teacher went to the bathroom, but nothing strange was there. Everything looked normal, and the mirror was broken as always.
[4:34.0] ROSALY: Then, the teachers took us to the principal's office because of all the noise. The principal said it was probably academic stress or maybe a joke. We said it was real, but nobody believed us. We never knew what had happened, and we promised never to play again.

## Scene 7 · Final Discussion
[VISUAL: The three flowers appear together. Soft background music.]
[4:59.0] STORMY: Wow! That was... wow! I don't know what to say! Hahaha. Okay, I have two questions. Why that bathroom, Rosaly?
[5:12.4] ROSALY: Because it was the scariest one! We wanted the real experience. Bad idea, hahaha!
[5:20.1] STORMY: And Skyler, was it really real, or was it just stress, like the principal said?
[5:27.4] SKYLER: Hmm, I don't know. For me, it was real because we all saw the mirror at the same time. And now, when I walk past that bathroom, I don't look at the mirror.
[5:37.8] STORMY: Maybe the teacher didn't see anything because the ghost was shy, just like you, Skyler!
[5:43.3] SKYLER: Stormy, not funny!
[5:46.8] STORMY: Hahaha, sorry! But seriously, I think these stories are not just silly. In Colombian schools, students always tell stories like this: a ghost in the bathroom, strange noises at night, or games that are not allowed. Some are invented, some are real, and nobody knows which ones are true.
[6:13.6] ROSALY: That's true. We share them at recess, change a few details, and the story grows and grows.
[6:21.1] SKYLER: And that connects us. When we tell these stories, we remember our friends, our school, and the fear we felt together. They are part of our student culture and keep our school legends alive.

## Scene 8 · Closing
[VISUAL: The three flowers face the camera. Friendly closing music.]
[6:39.0] STORMY: Now we want to ask you, flower friends: Have you ever experienced something like this at your school? A game, a strange noise, or a legend? Tell us in the comments, because every person has a story, and here we are listening!
[6:59.3] ROSALY: Thank you for listening to Behind the Petals.
[7:03.6] STORMY: Every flower hides a story...
[7:06.5] ROSALY: ...and every story...
[7:08.2] SKYLER: ...holds a secret.
[7:09.5] ALL THREE: Shhhhh!
[SOUND: Music fades out. The screen transitions to the podcast logo.]`,
      reflexion: ["Have you ever experienced something like this at your school? A game, a strange noise, or a legend? Every person has a story, and here we are listening!"],
      enfoque: {
        gramatica: ["Comparatives and superlatives", "There is / there are"],
        vocabulario: ["Nature", "The city", "Adjectives"]
      },
      vocabulario: [
        { palabra: "recess", tipo: "noun", significado: "The free time between classes at school.",
          ejemplo: "We were in tenth grade, and during recess, a friend said, \"Let's play Charlie Charlie!\"" },
        { palabra: "corridor", tipo: "noun", significado: "A long, narrow space inside a building with doors on each side.",
          ejemplo: "The corridor was dark, and the air was very cold." },
        { palabra: "blink", tipo: "verb", significado: "To go on and off very fast (a light), or to close and open your eyes.", formas: ["blinking", "blinked"],
          ejemplo: "The sinks were dirty, the light was blinking, and the mirror was broken." },
        { palabra: "flashlight", tipo: "noun", significado: "A small light that you carry in your hand.",
          ejemplo: "Rosaly, your friend had a flashlight, right?" },
        { palabra: "reflection", tipo: "noun", significado: "The image you see in a mirror or in water.", formas: ["reflections"],
          ejemplo: "One girl looked at her reflection and said, \"That's not my face!\"" },
        { palabra: "whisper", tipo: "verb", significado: "To speak very quietly, with your breath.", formas: ["whispered", "whispering"],
          ejemplo: "Then, one reflection came closer to the glass and whispered something." },
        { palabra: "stuck", tipo: "adjective", significado: "Not able to move or open.",
          ejemplo: "We ran to the door, but we couldn't open it. It was stuck!" },
        { palabra: "legend", tipo: "noun", significado: "An old story that many people tell, but nobody knows if it is true.", formas: ["legends"],
          ejemplo: "They are part of our student culture and keep our school legends alive." }
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
      transcripcion: `## Opening scene (two years earlier)
[0:08] The room is white and quiet. Marta lies on a bed with her eyes closed. She is nervous, but she smiles a little. She trusts the doctor.
[0:18] Dr. Vargas stands next to a small table. On the table there is a paper with the words test product. She takes two small bottles. One has a green label. The other has no label. She looks at the green bottle for a long time. Then she puts it in a drawer. She fills the syringe with the other bottle. The liquid shines under the white light. Nobody will ever know, she says.
[0:55] Dr. Vargas looks at Marta and smiles. It is a cold smile. Marta opens her eyes and smiles back. The needle comes close to her face.
[1:19] The screen goes black.

## Exposition
[1:20] Daniela is in a room. She is twenty-one and she studies architecture. At university nobody knows her name. She always sits alone in the last row. Her mother, Marta, is the only person who makes her feel special. Daniela closes her eyes and remembers her mother’s hug. It was warm and soft, and it feels very far away. Now Marta is in the hospital. She is weak, and the machine next to her makes a slow sound.
[1:38] On the bed table there is a hospital report. Daniela reads it with shaking hands. It says the doctor used a cheap and dangerous product on purpose to save money. Marta looks at her daughter and cries, because the treatment is too expensive for them.
[1:54] A few days later, Daniela goes to her grandfather’s old house. In an old trunk she finds a silver watch and a yellow note that says: Five minutes can save a life. Use them carefully.
[2:33] She puts the watch on. In the street, a car horn sounds. Daniela presses the crown. A white flash fills the room. Now she is in the same place, five minutes earlier, and the same car horn sounds again. Her eyes open wide. It really works. She learns the rules. The watch goes back five minutes. Only she remembers. Only she sees the flash. She can use it once a day. That night she looks at her sleeping mother and has a terrible idea: Dr. Vargas has a lot of money, and I have time.

## Rising action
[3:10] First night. Daniela climbs the wall of Dr. Vargas’s big house. She feels confident, and she goes in and walks slowly. Suddenly a camera turns and a red light points at her. Daniela presses the watch. Flash. She is at the garage door again, five minutes earlier. Only she remembers what happened, so now she knows where the camera is. This time she walks a different way and hides from the red light. She does not find money, but in the kitchen she finds a paper that says: Test product, twenty units, cheapest price. It is her first clue.
[4:17] Second night. Dr. Vargas is not at home, so Daniela goes to the office. She opens the desk and reads some papers. There is a list of patients, and next to Marta’s name there are two words: test product. On the wall there is a big mirror. Daniela sees a pale girl in a dark jacket. She looks like a stranger. Then she hears steps. Dr. Vargas comes back early. She sees Daniela, takes a knife from the desk, and stabs her. Daniela screams. She presses the watch. Flash. She is at the garage door, five minutes earlier. She touches her side and breathes fast. There is no wound. Now she knows that Dr. Vargas comes back early. She goes to the office again, takes a photo of the papers, and runs away before the doctor arrives. Now she has another clue, but she is afraid.
[5:59] Third night. Dr. Vargas is at a party, so Daniela looks in the drawers of the bedroom, one by one. In the last drawer she finds a small box. Inside there are bottles with no labels. On the box there is a sticker: Test product. This is the proof. Then her phone makes a sound. It is a message from the hospital: her mother is very bad, please come now. Daniela falls on her knees and cries. What am I doing? What am I becoming? She takes the box and leaves.

## Climax
[7:34] Fourth night. Daniela comes back, but not for money. She comes for the truth. In the office, the computer is on. She finds a video called Test 14. On the screen she sees a white room, Marta on the bed, and Dr. Vargas with a syringe. It is the video of the operation. Dr. Vargas recorded everything, like an experiment. Daniela’s hands shake. She decides to upload the video to the internet from that same computer. The bar goes up to one hundred percent.
[8:28] Then she hears steps. The door opens. Dr. Vargas sees the computer on and walks closer. Then she sees Daniela in the mirror. She is very angry. She takes her phone, calls the emergency number, and throws the phone on the sofa with the call still open. Then she jumps on Daniela.
[8:55] They fight. The watch flies and hits the floor, and the glass breaks. Daniela finds the watch and presses the crown again and again, but it does not work. She cannot go back in time anymore.
[9:38] On the sofa, the phone is still on the call. Far away, police officers listen in silence to the hits and the shouts. They drive fast. Soon red and blue lights move on the walls of the house. The front door opens and police officers run in. They separate the two women and put handcuffs on both of them. Dr. Vargas pulls and shouts. Daniela does not move. She just looks at her broken watch on the floor.

## Resolution
[10:05] Outside, an officer lets Daniela read her phone. A message from the hospital says her mother is dead. Daniela feels two things at the same time: deep sadness, because she could not save her mother, and peace, because everybody can now see the truth. But she knows she also did wrong things to get it.
[10:20] In the window of the police car, she sees her face. It is the same face from the mirror, but now it does not look like a stranger.

## Reflection
[10:28] > Daniela could go back five minutes, but she could never go back on her choices. She wanted justice, and she almost became the person she hated.

## The final message
[10:40] > If you could go back five minutes, what would you change? You cannot control every situation, but you can choose how to face it.`,
      reflexion: ["Daniela could go back five minutes, but she could never go back on her choices. She wanted justice, and she almost became the person she hated.", "If you could go back five minutes, what would you change? You cannot control every situation, but you can choose how to face it."],
      enfoque: {
        gramatica: ["Future with will and going to", "Past simple"],
        vocabulario: ["Travel", "Feelings", "Life plans"]
      },
      vocabulario: [
        { palabra: "drawer", tipo: "noun", significado: "A box in a table or desk that you pull out to keep things.", formas: ["drawers"],
          ejemplo: "Then she puts it in a drawer." },
        { palabra: "trunk", tipo: "noun", significado: "A big, strong box for keeping old things.",
          ejemplo: "In an old trunk she finds a silver watch and a yellow note." },
        { palabra: "clue", tipo: "noun", significado: "Something that helps you find the answer to a mystery.", formas: ["clues"],
          ejemplo: "Now she has another clue, but she is afraid." },
        { palabra: "stranger", tipo: "noun", significado: "A person you do not know.",
          ejemplo: "She looks like a stranger." },
        { palabra: "proof", tipo: "noun", significado: "Something that shows that a thing is true.",
          ejemplo: "This is the proof." },
        { palabra: "upload", tipo: "verb", significado: "To send a file from your computer to the internet.", formas: ["uploaded"],
          ejemplo: "She decides to upload the video to the internet from that same computer." },
        { palabra: "handcuffs", tipo: "noun", significado: "Two metal rings that the police put on a person's hands.",
          ejemplo: "They separate the two women and put handcuffs on both of them." },
        { palabra: "justice", tipo: "noun", significado: "When people are treated in a fair and right way.",
          ejemplo: "She wanted justice, and she almost became the person she hated." }
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
      resumen: "Lila is a shy little bud who cannot bloom in the sun. With the help of Chispa the firefly and the Moon, she discovers that everyone has their own time to bloom.",
      media: { url: "https://youtu.be/QnJggAAxj_4", boton: "" },
      transcripcion: `## Exposition
[0:06.7] Lila was a small purple bud with green leaves and closed petals. She lived in a quiet corner of a meadow, and she was very shy. Whenever someone looked at her, she tried to hide behind her leaves. Sometimes, she was not even sure that she was a real flower.
[0:22.9] One beautiful morning, the meadow smelled of wet grass and sweet honey. Bees buzzed among the flowers, and a soft wind moved through the tall grass. Sol, the happy sunflower, was already waving his yellow face toward the sky. Next to him, Rosalía, a red rose, was shining in the sunlight. Florentina, a vain orange butterfly, was flying from flower to flower, choosing only the flowers that were already open.
[0:49.3] All the flowers had bloomed, but Lila was still a little bud. Tall trees surrounded her, so only a little sunlight reached her. She looked at the colorful petals around her and then lowered her eyes to her own green leaves. She remained silent, feeling different from everyone else.

## Rising Action
[1:07.1] “Good morning, Lila!” Sol said with a big smile.
[1:10.6] Lila moved a little but did not answer. She was too shy to speak.
[1:15.3] Then Rosalía turned toward her. “Still closed?” she asked proudly. “Poor Lila! Maybe you are not a flower that can bloom.”
[1:22.8] Florentina laughed and flew closer. “Why should I land on you? You don't even have any color!”
[1:32.3] Lila felt as if her heart were a tiny stone. Their words hurt her, and she wished she could disappear beneath the grass.
[1:40.5] Every day, the same thing happened. Lila tried to open her petals in the morning, but nothing changed. While the other flowers enjoyed the warm sunlight, she cried quietly. With each passing day, she felt smaller and less important. She began to believe that she would never be beautiful like the others.
[1:58.8] One night, while Lila was feeling especially sad, a little light appeared beside her. It was Chispa, a kind firefly who was awake when most of the meadow was sleeping.
[2:09.0] “Why are you crying?” Chispa asked gently.
[2:12.5] “I'm different,” Lila replied. “I don't have enough sunlight to bloom.”
[2:17.9] Chispa looked at her kindly. “Maybe you don't need the sun all the time. Look up!”

## Climax
[2:23.5] Lila slowly raised her head and looked at the sky. There, the Moon was shining peacefully above the meadow. Its silver light fell softly on the grass, making the whole place look like a dream.
[2:35.0] As Lila watched the Moon, she felt a warm light inside her. For the first time, she stopped comparing herself with the other flowers. She began to believe that perhaps being different was not something to be ashamed of.
[2:46.9] Slowly, one of her petals opened. Then another followed. Little by little, all her petals unfolded toward the silver light.
[2:55.3] Lila was finally blooming, but not in the way anyone had expected.

## Falling Action
[2:59.3] When morning arrived, the whole meadow seemed quiet. Lila had become a beautiful, deep purple flower with delicate silver lines on her petals. Under the first rays of sunlight, the silver lines sparkled like tiny stars.
[3:13.3] A gardener was walking through the meadow when he noticed her. He stopped in surprise and looked at her carefully.
[3:18.6] “This is the most beautiful flower I have ever seen!” he said. “People would pay a lot of money for a flower like this.”
[3:28.8] Soon, people came from far away to see Lila. Everyone admired her unusual beauty, and she became the most expensive flower in the meadow.
[3:37.5] Rosalía and Florentina watched from a distance. They felt jealous because people were no longer paying attention to them. However, they also began to understand that they had treated Lila unfairly.
[3:47.9] That night, they approached her.
[3:49.5] “We are sorry,” Rosalía said. “We were wrong about you.”
[3:54.2] “You were not late,” Florentina added quietly. “You were just different.”
[3:59.2] Lila looked at them and smiled. She was happy that they had apologized, but she also understood something important: she did not need everyone to admire her to know that she had value.
[4:09.6] “I know,” she replied. “I just needed my own time.”

## Resolution
[4:13.3] From that day on, the meadow had flowers that bloomed during the day and one special flower that opened at night. Lila no longer felt ashamed of being different. She understood that every flower had its own way of growing and its own time to bloom.
[4:29.3] Every evening, when the Moon appeared in the sky, Lila opened her petals and shone beside her friends, Chispa and the Moon.

[4:37.2] > And so, the meadow learned an important lesson: being different does not mean being less, because everyone has their own time to grow and flourish.`,
      reflexion: ["Being different does not mean being less, because everyone has their own time to grow and flourish."],
      enfoque: {
        gramatica: ["Past simple", "Adverbs of manner"],
        vocabulario: ["Nature sounds", "Magic and fantasy"]
      },
      vocabulario: [
        { palabra: "bud", tipo: "noun", significado: "A flower before it opens.",
          ejemplo: "Lila was a small purple bud with green leaves and closed petals." },
        { palabra: "shy", tipo: "adjective", significado: "Nervous and quiet when you are with other people.",
          ejemplo: "She lived in a quiet corner of a meadow, and she was very shy." },
        { palabra: "meadow", tipo: "noun", significado: "A field with grass and wild flowers.",
          ejemplo: "One beautiful morning, the meadow smelled of wet grass and sweet honey." },
        { palabra: "bloom", tipo: "verb", significado: "To open (a flower).", formas: ["bloomed", "blooming"],
          ejemplo: "All the flowers had bloomed, but Lila was still a little bud." },
        { palabra: "petal", tipo: "noun", significado: "One of the soft, colorful parts of a flower.", formas: ["petals"],
          ejemplo: "Slowly, one of her petals opened." },
        { palabra: "firefly", tipo: "noun", significado: "A small insect that shines with light at night.",
          ejemplo: "It was Chispa, a kind firefly who was awake when most of the meadow was sleeping." },
        { palabra: "jealous", tipo: "adjective", significado: "Unhappy because someone has something that you want.",
          ejemplo: "They felt jealous because people were no longer paying attention to them." },
        { palabra: "apologize", tipo: "verb", significado: "To say that you are sorry.", formas: ["apologized"],
          ejemplo: "She was happy that they had apologized." }
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
