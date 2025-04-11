
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { BookOpen, BrainCircuit, BarChart2, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-edu-purple-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-edu-purple-600">
                  Plateforme de suivi pédagogique et bien-être étudiant
                </h1>
                <p className="text-lg text-gray-600">
                  Une solution innovante qui place l'expérience étudiante et la pédagogie 
                  au cœur de l'enseignement universitaire, avec une approche humaine et intuitive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-edu-purple-400 hover:bg-edu-purple-500 text-white text-lg px-6 py-6"
                    onClick={() => navigate('/signup')}
                  >
                    Commencer maintenant
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-edu-purple-400 text-edu-purple-500 text-lg px-6 py-6"
                    onClick={() => navigate('/about')}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-edu-purple-100 rounded-full flex items-center justify-center animate-float">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-edu-purple-400" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-edu-blue-100 rounded-full animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-edu-green-100 rounded-full animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-edu-purple-600 mb-12">
              Une plateforme complète pour améliorer l'expérience universitaire
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Évaluation du bien-être</h3>
                <p className="text-gray-600">
                  Suivez votre état émotionnel chaque semaine et partagez vos ressentis pour un meilleur accompagnement.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Évaluation des cours</h3>
                <p className="text-gray-600">
                  Donnez votre avis sur les cours et les méthodes pédagogiques pour aider à améliorer l'enseignement.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Aide intelligente</h3>
                <p className="text-gray-600">
                  Obtenez des explications personnalisées sur les notions non comprises grâce à notre assistant intelligent.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Tableau de bord</h3>
                <p className="text-gray-600">
                  Visualisez vos progrès et votre bien-être au fil du temps avec des statistiques claires et intuitives.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Anonymat préservé</h3>
                <p className="text-gray-600">
                  Vos évaluations sont anonymes pour garantir une transparence totale dans vos retours.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-14 h-14 bg-edu-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit className="w-7 h-7 text-edu-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-purple-500">Interface intuitive</h3>
                <p className="text-gray-600">
                  Une expérience utilisateur simple et agréable sur tous les appareils, conçue pour les étudiants.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-edu-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-edu-purple-600 mb-4">
              Prêt à améliorer votre expérience universitaire ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Rejoignez la communauté StudySpark et contribuez à l'amélioration continue de votre formation.
            </p>
            <Button 
              className="bg-edu-purple-400 hover:bg-edu-purple-500 text-white text-lg px-8 py-6"
              onClick={() => navigate('/signup')}
            >
              S'inscrire gratuitement
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-edu-purple-400 mr-2" />
                <span className="font-semibold text-edu-purple-600">StudySpark</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">© 2023 - Tous droits réservés</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-edu-purple-500">À propos</a>
              <a href="#" className="text-gray-500 hover:text-edu-purple-500">Confidentialité</a>
              <a href="#" className="text-gray-500 hover:text-edu-purple-500">Conditions</a>
              <a href="#" className="text-gray-500 hover:text-edu-purple-500">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
