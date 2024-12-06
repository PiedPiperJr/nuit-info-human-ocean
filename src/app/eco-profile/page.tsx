'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Types pour la cohérence des données
interface UserProgress {
  level: string;
  currentPoints: number;
  nextLevelPoints: number;
  totalActions: number;
  rank: string;
  impactScore: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  date: string;
  points: number;
  unlocked: boolean;
}

// Icônes pour différentes catégories d'impact
const EcoIcons = {
  water: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  carbon: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  energy: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  waste: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  biodiversity: (className: string) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

export default function EcoProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: "Dauphin",
    currentPoints: 850,
    nextLevelPoints: 1000,
    totalActions: 145,
    rank: "Top 10%",
    impactScore: 85
  })

  // Simulation de progression
  const addPoints = (points: number) => {
    setUserProgress(prev => ({
      ...prev,
      currentPoints: Math.min(prev.currentPoints + points, prev.nextLevelPoints),
      totalActions: prev.totalActions + 1
    }))
  }

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "1",
      name: "Premier Pas",
      description: "Première action écologique",
      icon: "🌱",
      date: "Il y a 2 mois",
      points: 50,
      unlocked: true
    },
    {
      id: "2",
      name: "Influence Positive",
      description: "10 amis inspirés",
      icon: "✨",
      date: "La semaine dernière",
      points: 100,
      unlocked: true
    },
    {
      id: "3",
      name: "Super Nettoyeur",
      description: "100kg de déchets collectés",
      icon: "🧹",
      date: "Hier",
      points: 150,
      unlocked: true
    },
    {
      id: "4",
      name: "Protecteur Marin",
      description: "Protection de la vie marine",
      icon: "🐋",
      date: "Aujourd'hui",
      points: 200,
      unlocked: true
    }
  ])

  // Système de notification
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null)

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  // Gestion des actions quotidiennes
  const handleActionComplete = (action: { points: number, action: string }) => {
    addPoints(action.points)
    showNotification(`+${action.points} points : ${action.action}`, 'success')
    
    // Vérification des succès
    if (userProgress.totalActions + 1 === 50) {
      const newAchievement = {
        id: "5",
        name: "Cinquantenaire",
        description: "50 actions complétées",
        icon: "🎯",
        date: "À l'instant",
        points: 100,
        unlocked: true
      }
      setAchievements(prev => [...prev, newAchievement])
      showNotification("Nouveau succès débloqué : Cinquantenaire!", 'achievement')
    }
  }

  // Gestion des défis
  const handleChallengeProgress = (challenge: { title: string, reward: string }) => {
    const points = parseInt(challenge.reward)
    addPoints(points)
    showNotification(`Défi complété : ${challenge.title} (+${points} pts)`, 'challenge')
  }

  // Composant de notification
  const Notification = () => {
    if (!notification) return null

    return (
      <div 
        className={`
          fixed bottom-4 right-4 p-4 rounded-lg shadow-lg 
          ${notification.type === 'success' ? 'bg-green-500' 
          : notification.type === 'achievement' ? 'bg-purple-500' 
          : 'bg-blue-500'} 
          text-white transform transition-all duration-500
        `}
      >
        <p className="flex items-center">
          <span className="text-xl mr-2">
            {notification.type === 'success' ? '✅' 
             : notification.type === 'achievement' ? '🏆' 
             : '🌊'}
          </span>
          {notification.message}
        </p>
      </div>
    )
  }

  // Barre de progression globale
  const ProgressBar = () => (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Niveau {userProgress.level}</h3>
          <p className="text-sm text-gray-600">{userProgress.currentPoints} / {userProgress.nextLevelPoints} points</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {userProgress.rank}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(userProgress.currentPoints / userProgress.nextLevelPoints) * 100}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 text-right">
        {userProgress.nextLevelPoints - userProgress.currentPoints} points jusqu'au prochain niveau
      </p>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble' },
    { id: 'impact', label: 'Mon Impact' },
    { id: 'actions', label: 'Mes Actions' },
    { id: 'community', label: 'Communauté' }
  ]

  const ecoMetrics = [
    {
      icon: EcoIcons.water,
      title: 'Score Global',
      value: '850 pts',
      description: 'Top 10% des utilisateurs',
      color: 'text-blue-600',
      details: [
        { label: 'Actions complétées', value: '24' },
        { label: 'Défis réussis', value: '8' },
        { label: 'Jours consécutifs', value: '15' }
      ]
    },
    {
      icon: EcoIcons.carbon,
      title: 'Impact Direct',
      value: '120 kg',
      description: 'Déchets évités ce mois',
      color: 'text-green-600',
      details: [
        { label: 'Plastique évité', value: '45 kg' },
        { label: 'CO2 économisé', value: '75 kg' },
        { label: 'Eau préservée', value: '450 L' }
      ]
    },
    {
      icon: EcoIcons.energy,
      title: 'Influence',
      value: '45 pers.',
      description: 'Personnes inspirées',
      color: 'text-teal-600',
      details: [
        { label: 'Défis partagés', value: '12' },
        { label: 'Likes reçus', value: '89' },
        { label: 'Amis actifs', value: '15' }
      ]
    }
  ]

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Statistiques principales */}
            <div className="grid md:grid-cols-3 gap-8">
              {ecoMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {metric.icon(`w-12 h-12 ${metric.color}`)}
                    <h3 className={`ml-4 text-xl font-semibold ${metric.color}`}>
                      {metric.title}
                    </h3>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {metric.details.map((detail, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                          <p className="text-lg font-semibold text-gray-900">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prochains objectifs */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prochains Objectifs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Niveau Dauphin</span>
                    <span className="text-blue-600">85/100 pts</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4">
                  <div>
                    <p className="font-medium text-blue-900">Prochain palier</p>
                    <p className="text-sm text-blue-700">Débloquez de nouvelles missions</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">15 pts</span>
                </div>
              </div>
            </div>

            {/* Activité récente */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Activité Récente</h3>
              <div className="space-y-4">
                {[
                  { action: 'Défi complété', description: 'Une semaine sans plastique', date: 'Aujourd\'hui', icon: '🏆' },
                  { action: 'Badge obtenu', description: 'Protecteur des Océans', date: 'Hier', icon: '🌊' },
                  { action: 'Mission réussie', description: 'Nettoyage de plage', date: 'Il y a 2 jours', icon: '🏖️' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'impact':
        return (
          <div className="space-y-6">
            {/* Impact Principal */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-blue-600">Impact sur l'Océan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🌊</span>
                    <h3 className="font-semibold text-blue-800 mb-2">Eau Préservée</h3>
                    <p className="text-3xl font-bold text-blue-900 mb-1">2,450 L</p>
                    <p className="text-sm text-blue-600">+15% ce mois</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🐋</span>
                    <h3 className="font-semibold text-teal-800 mb-2">Vie Marine Protégée</h3>
                    <p className="text-3xl font-bold text-teal-900 mb-1">85 km²</p>
                    <p className="text-sm text-teal-600">Zone d'impact direct</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">♻️</span>
                    <h3 className="font-semibold text-green-800 mb-2">Déchets Évités</h3>
                    <p className="text-3xl font-bold text-green-900 mb-1">156 kg</p>
                    <p className="text-sm text-green-600">Cette année</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Directes */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Actions Directes</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Nettoyages de plage', value: 12, icon: '🏖️' },
                    { label: 'Ateliers sensibilisation', value: 8, icon: '👥' },
                    { label: 'Projets communautaires', value: 5, icon: '🤝' },
                    { label: 'Initiatives locales', value: 3, icon: '🌱' }
                  ].map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{action.icon}</span>
                        <span className="font-medium">{action.label}</span>
                      </div>
                      <span className="text-lg font-semibold text-blue-600">{action.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Impact Cumulé</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Plastique à usage unique évité</span>
                      <span className="text-green-600">780 unités</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Émissions CO2 réduites</span>
                      <span className="text-blue-600">1.2 tonnes</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Biodiversité préservée</span>
                      <span className="text-purple-600">45 espèces</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Évolution Mensuelle */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Évolution de l'Impact</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { month: 'Sept', score: 65, status: 'up' },
                  { month: 'Oct', score: 78, status: 'up' },
                  { month: 'Nov', score: 85, status: 'up' },
                  { month: 'Déc', score: 92, status: 'current' }
                ].map((month, index) => (
                  <div key={index} className="text-center">
                    <div className="relative">
                      <div className="h-24 bg-blue-100 rounded-t-lg">
                        <div 
                          className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-500"
                          style={{ height: `${month.score}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="mt-2 font-medium">{month.month}</p>
                    <p className="text-sm text-blue-600">{month.score}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges et Récompenses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Badges d'Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Gardien des Océans", icon: "🌊", level: "Or" },
                  { name: "Protecteur Marin", icon: "🐋", level: "Argent" },
                  { name: "Éco-Warrior", icon: "🛡️", level: "Bronze" },
                  { name: "Guide Écologique", icon: "🎯", level: "Or" }
                ].map((badge, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                    <span className="text-3xl mb-2 block">{badge.icon}</span>
                    <h4 className="font-medium text-purple-900">{badge.name}</h4>
                    <p className="text-sm text-purple-700 mt-1">{badge.description}</p>
                    <p className="text-xs text-purple-600 mt-2">{badge.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'actions':
        return (
          <div className="space-y-6">
            {/* Défis en cours */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-blue-600">Défis en Cours</h2>
                <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                  + Nouveau Défi
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Zéro Déchet Plastique",
                    progress: 75,
                    daysLeft: 5,
                    reward: "150 pts",
                    icon: "🌊",
                    category: "Océan"
                  },
                  {
                    title: "Sensibilisation Locale",
                    progress: 60,
                    daysLeft: 12,
                    reward: "200 pts",
                    icon: "👥",
                    category: "Communauté"
                  }
                ].map((challenge, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-3xl mb-2 block">{challenge.icon}</span>
                        <h3 className="font-semibold text-lg text-gray-900">{challenge.title}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm mt-2">
                          {challenge.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Récompense</span>
                        <p className="font-bold text-blue-600">{challenge.reward}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progression</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {challenge.daysLeft} jours restants
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Quotidiennes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-teal-600">Actions Quotidiennes</h2>
              <div className="grid gap-4">
                {[
                  {
                    action: "Utiliser une gourde réutilisable",
                    points: 10,
                    status: "todo",
                    impact: "3L d'eau économisés",
                    icon: "💧"
                  },
                  {
                    action: "Transport écologique",
                    points: 15,
                    status: "todo",
                    impact: "2.5kg CO2 évités",
                    icon: "🚲"
                  },
                  {
                    action: "Achats en vrac",
                    points: 20,
                    status: "todo",
                    impact: "500g plastique évités",
                    icon: "🛍️"
                  },
                  {
                    action: "Ramassage de déchets",
                    points: 25,
                    status: "todo",
                    impact: "Propreté +10%",
                    icon: "🧤"
                  }
                ].map((task, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer
                      ${task.status === 'completed' ? 'bg-green-50' 
                      : task.status === 'in-progress' ? 'bg-yellow-50'
                      : 'bg-gray-50 hover:bg-gray-100'}`}
                    onClick={() => handleActionComplete(task)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{task.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-900">{task.action}</h3>
                        <p className="text-sm text-gray-600">{task.impact}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-blue-600">+{task.points} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Succès Débloqués */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-purple-600">Succès Débloqués</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Premier Pas", description: "Première action écologique", icon: "🌱", date: "Il y a 2 mois" },
                  { name: "Influence Positive", description: "10 amis inspirés", icon: "✨", date: "La semaine dernière" },
                  { name: "Super Nettoyeur", description: "100kg de déchets collectés", icon: "🧹", date: "Hier" },
                  { name: "Protecteur Marin", description: "Protection de la vie marine", icon: "🐋", date: "Aujourd'hui" }
                ].map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                    <span className="text-3xl mb-2 block">{achievement.icon}</span>
                    <h4 className="font-medium text-purple-900">{achievement.name}</h4>
                    <p className="text-sm text-purple-700 mt-1">{achievement.description}</p>
                    <p className="text-xs text-purple-600 mt-2">{achievement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques d'Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Vue d'Ensemble</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Actions Complétées", value: "145", icon: "✅" },
                  { label: "Défis Réussis", value: "12", icon: "🏆" },
                  { label: "Points Gagnés", value: "2,450", icon: "⭐" },
                  { label: "Jours Actifs", value: "60", icon: "📅" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <span className="text-3xl mb-2 block">{stat.icon}</span>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 'community':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">Réseau Éco-Citoyen</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Amis Engagés</h3>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((_, index) => (
                      <Image 
                        key={index}
                        src={`/avatar-${index + 1}.png`} 
                        alt={`Ami ${index + 1}`} 
                        width={50} 
                        height={50} 
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      +5
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Classement</h3>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-purple-700">12ème</p>
                    <p className="text-gray-600">Dans votre région</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête du profil */}
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <Image 
              src="/profile-avatar.png" 
              alt="Profile Avatar" 
              width={150} 
              height={150} 
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Marine Dupont</h1>
            <p className="text-xl text-gray-600">Éco-Aventurière</p>
            <div className="mt-4 flex space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Niveau {userProgress.level}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                🌍 {userProgress.rank}
              </span>
            </div>
          </div>
        </div>

        {/* Barre de progression globale */}
        <ProgressBar />

        {/* Navigation des onglets */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-lg transition-colors
                  ${activeTab === tab.id 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contenu dynamique des onglets */}
        {renderTabContent()}

        {/* Notification de progression */}
        <Notification />
      </div>
    </div>
  )
}
