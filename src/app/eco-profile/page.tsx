export default function EcoProfilePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Votre Profil Éco-Responsable</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Astuce de la Semaine */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Astuce de la Semaine</h2>
          <div className="bg-teal-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2">Réduisez votre empreinte plastique</h3>
            <p className="text-gray-700">
              Utilisez une gourde réutilisable au lieu des bouteilles en plastique.
              Cela permet d'éviter en moyenne 156 bouteilles en plastique par an !
            </p>
          </div>
          <button className="w-full bg-teal-600 text-white rounded-lg py-2 hover:bg-teal-700 transition-colors">
            Nouvelle astuce
          </button>
        </div>

        {/* Section Profil */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Vos Actions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Score éco-responsable</span>
              <span className="font-semibold">75/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Utilisation de transports écologiques</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Réduction des déchets plastiques</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>Consommation d'énergie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Objectifs */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Vos Objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Hebdomadaire</h3>
              <p className="text-sm text-gray-600">Utiliser 0 sac plastique</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Mensuel</h3>
              <p className="text-sm text-gray-600">Réduire consommation d'eau</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Annuel</h3>
              <p className="text-sm text-gray-600">Bilan carbone -20%</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
