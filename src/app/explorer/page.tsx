export default function ExplorerPage() {
  return (
    <div className="min-h-screen ">
      <h1 className="text-3xl font-bold text-center mb-8">Explorer les Parallèles</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Système Humain</h2>
          <div className="aspect-square bg-gray-100 rounded-lg mb-4">
            {/* Espace pour le modèle 3D du corps humain */}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Points clés :</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Système circulatoire</li>
              <li>Régulation de la température</li>
              <li>Échanges gazeux</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Système Océanique</h2>
          <div className="aspect-square bg-gray-100 rounded-lg mb-4">
            {/* Espace pour le modèle 3D de l'océan */}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Points clés :</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Courants marins</li>
              <li>Régulation climatique</li>
              <li>Échanges de CO2</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Comprendre les Connexions</h2>
        <p className="text-gray-700">
          Découvrez comment le corps humain et l'océan partagent des mécanismes similaires pour maintenir l'équilibre et la vie.
          Explorez les parallèles fascinants entre ces deux systèmes complexes.
        </p>
      </div>
    </div>
  );
}
