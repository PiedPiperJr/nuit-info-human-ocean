'use client';
import ocean from "../blog/ocean image/ocean2.jpg"
import ocean1 from "../blog/ocean image/ocean.jpg"


export default function BlogPage() {
  const articles = [
    {
      title: "L'importance des courants marins",
      excerpt: "Découvrez comment les courants marins jouent un rôle similaire aux vaisseaux sanguins...",
      date: "2 Dec 2023",
      category: "Océanographie",
      imageUrl: ocean1
    },
    {
      title: "Le système immunitaire des océans",
      excerpt: "Les océans ont leur propre façon de se défendre contre les polluants...",
      date: "1 Dec 2023",
      category: "Écologie",
      imageUrl: ocean1
    },
    {
      title: "La respiration des océans",
      excerpt: "Comment les océans 'respirent' et échangent des gaz avec l'atmosphère...",
      date: "30 Nov 2023",
      category: "Environnement",
      imageUrl: ocean1
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="bg-backimg">
          <img src={ocean.src} alt="Example" className="w-full" />    
        
          {/* Featured Article */}
          <div className="mb-12 bg-white rounded-x6 shadow-lg overflow-hidden flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>          
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-10 pr-10">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl gap-10 shadow-lg flex flex-col">
              <div className="h-48 bg-gray-200 rounded-yl" >
                <img src={article.imageUrl.src} alt="Example" className="w-full" />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center text-sm text-gray-600 mb-2 justify-center">
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
