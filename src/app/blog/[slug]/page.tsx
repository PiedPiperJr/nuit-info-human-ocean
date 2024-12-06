'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  imageUrl: string;
  tags: string[];
  relatedPosts: {
    title: string;
    slug: string;
    imageUrl: string;
  }[];
  impactMetrics: {
    ecosystemAffected: string;
    threatLevel: string;
    solutionsProposed: string[];
    successStories: string[];
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulation de données de blog pour la démo
  useEffect(() => {
    const fetchPost = () => {
      // Simuler un appel API
      const demoPost: BlogPost = {
        id: '1',
        title: 'La Protection des Récifs Coralliens en Méditerranée',
        author: 'Dr. Marine Dubois',
        date: '2 décembre 2023',
        readTime: '8 min',
        category: 'Écosystèmes Marins',
        content: `
          Les récifs coralliens sont parmi les écosystèmes les plus diversifiés et les plus productifs de la planète. 
          En Méditerranée, ces récifs font face à de nombreux défis...

          <h2>L'Importance des Récifs Coralliens</h2>
          Les récifs coralliens jouent un rôle crucial dans la santé de nos océans. Ils abritent plus de 25% de 
          toutes les espèces marines connues, tout en ne couvrant que 0,1% de la surface des océans.

          <h2>Menaces Actuelles</h2>
          - Augmentation de la température des océans
          - Acidification des océans
          - Pollution plastique
          - Surpêche
          - Tourisme non durable

          <h2>Solutions et Actions</h2>
          1. Création de zones marines protégées
          2. Restauration active des récifs
          3. Éducation et sensibilisation
          4. Développement du tourisme durable
          5. Recherche scientifique

          <h2>Comment Agir ?</h2>
          - Réduire votre empreinte carbone
          - Utiliser des produits solaires respectueux des récifs
          - Soutenir les organisations de conservation
          - Participer à des programmes de science citoyenne
        `,
        imageUrl: '/public/corails.jpg',
        tags: ['Récifs Coralliens', 'Conservation Marine', 'Biodiversité', 'Méditerranée', 'Action Climatique'],
        relatedPosts: [
          {
            title: 'Les Herbiers de Posidonie : Poumons de la Méditerranée',
            slug: 'herbiers-posidonie',
            imageUrl: '/images/posidonia.jpg'
          },
          {
            title: 'Impact du Changement Climatique sur la Faune Marine',
            slug: 'impact-climatique-faune-marine',
            imageUrl: '/images/marine-life.jpg'
          }
        ],
        impactMetrics: {
          ecosystemAffected: 'Récifs Coralliens Méditerranéens',
          threatLevel: 'Critique',
          solutionsProposed: [
            'Création de zones marines protégées',
            'Programmes de restauration corallienne',
            'Régulation du tourisme'
          ],
          successStories: [
            'Restauration du récif de Port-Cros',
            'Programme de reproduction des coraux en laboratoire',
            'Création du plus grand parc marin de Méditerranée'
          ]
        }
      }

      setPost(demoPost)
      setIsLoading(false)
    }

    fetchPost()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-blue-500">
          Chargement de l'article...
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Article non trouvé
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Métriques d'Impact */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Impact Environnemental</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Écosystème Affecté</h3>
              <p className="text-gray-600">{post.impactMetrics.ecosystemAffected}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Niveau de Menace</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {post.impactMetrics.threatLevel}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Solutions Proposées</h3>
              <ul className="list-disc list-inside text-gray-600">
                {post.impactMetrics.solutionsProposed.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contenu de l'Article */}
        <article className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Success Stories */}
        <div className="bg-green-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Histoires de Réussite</h2>
          <ul className="space-y-2">
            {post.impactMetrics.successStories.map((story, index) => (
              <li key={index} className="flex items-center text-green-700">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {story}
              </li>
            ))}
          </ul>
        </div>

        {/* Articles Connexes */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Articles Connexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link 
                href={`/blog/${relatedPost.slug}`}
                key={index}
                className="group"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
