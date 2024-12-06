'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: string
  slug: string
  title: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  imageUrl: string
  tags: string[]
  impactLevel: 'high' | 'medium' | 'low'
  likes: number
  isLiked: boolean
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  
  // Simulation d'un appel API
  const demoPost: BlogPost = {
    id: '1',
    slug: 'protection-recifs-coralliens',
    title: 'La Protection des Récifs Coralliens en Méditerranée',
    content: `
      Les récifs coralliens de la Méditerranée sont parmi les écosystèmes les plus précieux et les plus menacés de notre planète. 
      Face aux défis du changement climatique, de la pollution et de la surpêche, ces habitats uniques nécessitent une protection urgente.

      ## L'importance des récifs coralliens

      Les récifs coralliens méditerranéens jouent un rôle crucial dans :
      - La préservation de la biodiversité marine
      - La protection des côtes contre l'érosion
      - Le soutien des économies locales à travers le tourisme
      - Le maintien des stocks de poissons

      ## Les menaces actuelles

      Plusieurs facteurs menacent la survie de ces écosystèmes :
      1. L'augmentation de la température des océans
      2. L'acidification des eaux
      3. La pollution plastique
      4. La surpêche
      5. Le développement côtier non durable

      ## Actions de conservation

      Des initiatives locales et internationales sont mises en place pour protéger ces écosystèmes vitaux :
      - Création d'aires marines protégées
      - Programmes de restauration des coraux
      - Sensibilisation des communautés locales
      - Développement de pratiques touristiques durables

      ## Comment vous pouvez aider

      Chacun peut contribuer à la protection des récifs coralliens :
      1. Utiliser des produits solaires respectueux des océans
      2. Réduire sa consommation de plastique
      3. Soutenir les organisations de conservation marine
      4. Pratiquer un tourisme responsable
      
      ## Conclusion

      La protection des récifs coralliens méditerranéens est un défi qui nécessite une action collective. 
      Chaque geste compte dans la préservation de ces trésors naturels pour les générations futures.
    `,
    author: 'Dr. Marine Dubois',
    date: '2 décembre 2024',
    readTime: '8 min',
    category: 'Écosystèmes Marins',
    imageUrl: '/corails.jpg',
    tags: ['Récifs Coralliens', 'Conservation', 'Méditerranée', 'Biodiversité'],
    impactLevel: 'high',
    likes: 124,
    isLiked: false
  }

  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Retourner l'article si le slug correspond
  if (slug === demoPost.slug) {
    return demoPost
  }

  return null
}

export default async function BlogPostPage(props : { params : Promise<{ slug: string }> }) {
  
  const { slug } = await props.params;
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de l'article */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-blue-600">{post.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600">{post.readTime}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Image principale */}
        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className={`
              px-4 py-2 rounded-full text-sm font-medium
              ${post.impactLevel === 'high' ? 'bg-red-100 text-red-800'
                : post.impactLevel === 'medium' ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'}
            `}>
              {post.impactLevel === 'high' ? 'Impact Élevé'
               : post.impactLevel === 'medium' ? 'Impact Moyen'
               : 'Impact Faible'}
            </span>
          </div>
        </div>

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 1
              const text = paragraph.replace(/^#+\s*/, '')
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
              return <HeadingTag key={index} className="text-gray-900 font-bold mb-4">{text}</HeadingTag>
            }
            if (paragraph.trim().startsWith('-')) {
              return (
                <ul key={index} className="list-disc pl-6 mb-4">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item.replace(/^-\s*/, '')}
                    </li>
                  ))}
                </ul>
              )
            }
            if (paragraph.trim().match(/^\d+\./)) {
              return (
                <ol key={index} className="list-decimal pl-6 mb-4">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item.replace(/^\d+\.\s*/, '')}
                    </li>
                  ))}
                </ol>
              )
            }
            return paragraph.trim() && (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Footer de l'article */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className={`
                flex items-center space-x-2 px-4 py-2 rounded-full
                ${post.isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}
                hover:bg-red-50 transition-colors
              `}>
                <span className="text-xl">
                  {post.isLiked ? '❤️' : '🤍'}
                </span>
                <span className="font-medium">
                  {post.likes} likes
                </span>
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Partager
              </button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
