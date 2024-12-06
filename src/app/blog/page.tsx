'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
  impactLevel: 'high' | 'medium' | 'low';
  likes: number;
  isLiked: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImpact, setSelectedImpact] = useState<string>('all')

  // Simulation de données pour la démo
  useEffect(() => {
    const demoPosts: BlogPost[] = [
      {
        id: '1',
        slug: 'protection-recifs-coralliens',
        title: 'La Protection des Récifs Coralliens en Méditerranée',
        excerpt: 'Découvrez comment les récifs coralliens méditerranéens font face aux défis du changement climatique et quelles actions sont mises en place pour les protéger.',
        author: 'Dr. Marine Dubois',
        date: '2 décembre 2024',
        readTime: '8 min',
        category: 'Écosystèmes Marins',
        imageUrl: '/public/corails.jpg',
        tags: ['Récifs Coralliens', 'Conservation'],
        impactLevel: 'high',
        likes: 124,
        isLiked: false
      },
      {
        id: '2',
        slug: 'pollution-plastique-mediterranee',
        title: 'Impact de la Pollution Plastique en Méditerranée',
        excerpt: 'Une analyse approfondie de la crise du plastique en Méditerranée et des solutions innovantes pour y faire face.',
        author: 'Prof. Pierre Martin',
        date: '1 décembre 2023',
        readTime: '6 min',
        category: 'Pollution Marine',
        imageUrl: '/images/plastic-pollution.jpg',
        tags: ['Pollution', 'Solutions'],
        impactLevel: 'high',
        likes: 89,
        isLiked: false
      },
      {
        id: '3',
        slug: 'biodiversite-marine-locale',
        title: 'La Biodiversité Marine de nos Côtes',
        excerpt: 'Exploration de la richesse de la vie marine locale et des moyens de la préserver pour les générations futures.',
        author: 'Dr. Sophie Laurent',
        date: '30 novembre 2023',
        readTime: '10 min',
        category: 'Biodiversité',
        imageUrl: '/images/marine-biodiversity.jpg',
        tags: ['Biodiversité', 'Conservation'],
        impactLevel: 'medium',
        likes: 156,
        isLiked: true
      }
    ]

    setPosts(demoPosts)
  }, [])

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        }
      }
      return post
    }))
  }

  const categories = ['all', 'Écosystèmes Marins', 'Pollution Marine', 'Biodiversité']
  const impactLevels = ['all', 'high', 'medium', 'low']

  const filteredPosts = posts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory
    const impactMatch = selectedImpact === 'all' || post.impactLevel === selectedImpact
    return categoryMatch && impactMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Océanique
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez les dernières actualités et analyses sur la protection des océans
          </p>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar avec filtres */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Filtrer les articles</h2>
              <div className="space-y-6">
                {/* Catégories */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Catégories
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                          w-full text-left px-4 py-2 rounded-lg transition-colors
                          ${selectedCategory === category
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'hover:bg-gray-100 text-gray-700'
                          }
                        `}
                      >
                        {category === 'all' ? 'Toutes les catégories' : category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Niveaux d'Impact */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Niveau d'Impact
                  </h3>
                  <div className="flex flex-col space-y-2">
                    {impactLevels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedImpact(level)}
                        className={`
                          w-full text-left px-4 py-2 rounded-lg transition-colors
                          flex items-center justify-between
                          ${selectedImpact === level
                            ? level === 'high' ? 'bg-red-100 text-red-800 font-medium'
                              : level === 'medium' ? 'bg-yellow-100 text-yellow-800 font-medium'
                              : level === 'low' ? 'bg-green-100 text-green-800 font-medium'
                              : 'bg-blue-100 text-blue-800 font-medium'
                            : 'hover:bg-gray-100 text-gray-700'
                          }
                        `}
                      >
                        <span>
                          {level === 'all' ? 'Tous les niveaux' 
                           : level === 'high' ? 'Impact Élevé'
                           : level === 'medium' ? 'Impact Moyen'
                           : 'Impact Faible'}
                        </span>
                        {level !== 'all' && (
                          <span>
                            {level === 'high' ? '🔴'
                             : level === 'medium' ? '🟡'
                             : '🟢'}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Résumé des filtres actifs */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium block mb-2">Filtres actifs:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'all' && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {selectedCategory}
                        </span>
                      )}
                      {selectedImpact !== 'all' && (
                        <span className={`
                          px-3 py-1 rounded-full
                          ${selectedImpact === 'high' ? 'bg-red-100 text-red-800'
                            : selectedImpact === 'medium' ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'}
                        `}>
                          {selectedImpact === 'high' ? 'Impact Élevé'
                           : selectedImpact === 'medium' ? 'Impact Moyen'
                           : 'Impact Faible'}
                        </span>
                      )}
                      {(selectedCategory === 'all' && selectedImpact === 'all') && (
                        <span className="text-gray-500">Aucun filtre actif</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal - Liste des Articles */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="group">
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="absolute top-4 right-4">
                        <span className={`
                          px-3 py-1 rounded-full text-sm font-medium
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
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-2">
                        <span className="text-sm text-blue-600">{post.category}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                      </Link>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <p className="text-gray-900 font-medium">{post.author}</p>
                              <p className="text-gray-500">{post.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex space-x-2">
                              {post.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                handleLike(post.id);
                              }}
                              className={`
                                flex items-center space-x-1 px-3 py-1 rounded-full
                                ${post.isLiked 
                                  ? 'bg-red-100 text-red-600' 
                                  : 'bg-gray-100 text-gray-600'
                                }
                                hover:bg-red-50 transition-colors
                              `}
                            >
                              <span className="text-lg">
                                {post.isLiked ? '❤️' : '🤍'}
                              </span>
                              <span className="text-sm font-medium">
                                {post.likes}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
