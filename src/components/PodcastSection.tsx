'use client'

const episodes = [
  {
    series: "Race for Water",
    title: "Le Plancton et Notre Climat",
    description: "Dr. Fréderic Le Moigne, océanographe au CNRS, nous explique le rôle crucial du plancton dans la séquestration du carbone et la régulation du climat.",
    duration: "45 min",
    episode: 1,
    topics: [
      "La pompe biologique marine",
      "Impact sur le climat",
      "Menaces actuelles",
      "Solutions proposées"
    ]
  },
  {
    series: "Race for Water",
    title: "La Pompe Biologique de Carbone",
    description: "Suite de notre conversation avec Dr. Le Moigne sur les dernières découvertes concernant la capacité de stockage du carbone par l'océan.",
    duration: "42 min",
    episode: 2,
    topics: [
      "Nouvelles découvertes",
      "Prédictions du GIEC",
      "Système d'alerte précoce",
      "Enjeux de recherche"
    ]
  },
  {
    series: "Océanographe",
    title: "Notre Mission Bleue",
    description: "Dr. Marine Laurent partage sa passion pour les océans et leur rôle vital dans l'équilibre de notre planète.",
    duration: "35 min",
    episode: 1,
    topics: [
      "Rôles des océans",
      "Conservation marine",
      "Défis actuels",
      "Actions concrètes"
    ]
  },
  {
    series: "Océanographe",
    title: "Les Gardiens du Climat",
    description: "Exploration des mécanismes océaniques qui régulent notre climat et les menaces qui pèsent sur cet équilibre.",
    duration: "28 min",
    episode: 2,
    topics: [
      "Régulation climatique",
      "Écosystèmes marins",
      "Impact humain",
      "Solutions durables"
    ]
  }
]

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nos <span className="text-blue-600">Podcasts</span>
        </h2>

        {/* Race for Water Series */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-40 h-40">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Race for Water présente</h3>
              <h4 className="text-xl text-blue-600 mb-4">Le Plancton et la Pompe Biologique</h4>
              <p className="text-lg mb-6">
                Une série spéciale avec Dr. Fréderic Le Moigne, océanographe au CNRS, qui nous éclaire sur les processus complexes par lesquels le plancton séquestre le carbone et influence notre climat.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <audio
                    className="w-full"
                    controls
                    src="/podcast-rfw-ep1.mp3"
                  >
                    Votre navigateur ne supporte pas l'élément audio.
                  </audio>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Épisode 1 • 45 min</span>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                      YouTube
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                      </svg>
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Océanographe Series */}
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Océanographe</h3>
              <h4 className="text-xl text-blue-600 mb-4">Notre Mission Bleue</h4>
              <p className="text-lg mb-6">
                Dr. Marine Laurent nous guide à travers les mystères des océans, leur rôle vital dans l'équilibre de notre planète et les actions nécessaires pour les préserver.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <audio
                    className="w-full"
                    controls
                    src="/podcast-ocean-ep1.mp3"
                  >
                    Votre navigateur ne supporte pas l'élément audio.
                  </audio>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Épisode 1 • 35 min</span>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                      YouTube
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                      </svg>
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des épisodes */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-blue-600 block mb-1">{episode.series}</span>
                  <h4 className="text-lg font-semibold">{episode.title}</h4>
                </div>
                <span className="text-sm text-gray-500">Ép. {episode.episode} • {episode.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{episode.description}</p>
              {episode.topics && (
                <div className="flex flex-wrap gap-2">
                  {episode.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
