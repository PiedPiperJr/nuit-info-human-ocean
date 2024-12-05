'use client';

export default function BlogPage() {
  const articles = [
    {
      title: "L'importance des courants marins",
      excerpt: "Découvrez comment les courants marins jouent un rôle similaire aux vaisseaux sanguins...",
      date: "2 Dec 2023",
      category: "Océanographie",
      imageUrl: "/images/ocean-current.jpg"
    },
    {
      title: "Le système immunitaire des océans",
      excerpt: "Les océans ont leur propre façon de se défendre contre les polluants...",
      date: "1 Dec 2023",
      category: "Écologie",
      imageUrl: "/images/ocean-health.jpg"
    },
    {
      title: "La respiration des océans",
      excerpt: "Comment les océans 'respirent' et échangent des gaz avec l'atmosphère...",
      date: "30 Nov 2023",
      category: "Environnement",
      imageUrl: "/images/ocean-breath.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        {/* Featured Article */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="h-48 w-full md:w-64 bg-gray-200"></div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                À la une
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                Les parallèles fascinants entre l'océan et le corps humain
              </h2>
              <p className="mt-3 text-gray-600">
                Une exploration approfondie des similitudes entre les systèmes océaniques et le corps humain...
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-800">
                Lire la suite →
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-800">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Restez informé</h3>
          <p className="text-gray-600 mb-6">
            Recevez nos derniers articles et conseils pour protéger les océans.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
