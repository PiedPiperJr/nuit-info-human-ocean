'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogDetail, Blog } from '@/services/api'
import { useEffect, useState } from 'react'

interface ExtendedBlog extends Blog {
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
  impactLevel: 'high' | 'medium' | 'low';
  likes: number;
  isLiked: boolean;
}

// Fonction pour enrichir les données de l'API
const enrichBlogData = (blog: Blog): ExtendedBlog => {
  return {
    ...blog,
    readTime: '8 min',
    category: 'Écosystèmes Marins',
    imageUrl: '/corails.jpg',
    tags: ['Conservation', 'Océans'],
    impactLevel: 'high' as const,
    likes: 0,
    isLiked: false
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<ExtendedBlog | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Note: L'API actuelle utilise des IDs numériques, nous devrons adapter cela pour les slugs
        const apiPost = await getBlogDetail(parseInt(params.slug))
        const enrichedPost = enrichBlogData(apiPost)
        setPost(enrichedPost)
      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-blue-500">Chargement de l'article...</div>
      </div>
    )
  }

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
            <span className="text-gray-600">{new Date(post.created_at).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-medium text-gray-900">Auteur</p>
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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
