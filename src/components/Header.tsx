
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { BookOpen, BrainCircuit, User, LogOut, BarChart2 } from 'lucide-react';

interface HeaderProps {
  isLoggedIn?: boolean;
  userType?: 'student' | 'teacher' | 'admin';
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false, userType = 'student' }) => {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-edu-purple-400" />
          <h1 className="text-lg font-bold text-edu-purple-600">StudySpark</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={() => navigate('/dashboard')}
              >
                <BarChart2 className="h-4 w-4" />
                <span>Tableau de bord</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={() => navigate('/courses')}
              >
                <BookOpen className="h-4 w-4" />
                <span>Mes cours</span>
              </Button>

              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={() => navigate('/assistant')}
              >
                <BrainCircuit className="h-4 w-4" />
                <span>Assistant</span>
              </Button>
              
              {(userType === 'teacher' || userType === 'admin') && (
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2"
                  onClick={() => navigate('/analytics')}
                >
                  <BarChart2 className="h-4 w-4" />
                  <span>Analytique</span>
                </Button>
              )}
            </>
          ) : (
            <>
              <Button 
                variant="ghost"
                onClick={() => navigate('/')}
              >
                Accueil
              </Button>
              <Button 
                variant="ghost"
                onClick={() => navigate('/about')}
              >
                À propos
              </Button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1"
                onClick={() => navigate('/profile')}
              >
                <User className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Déconnexion</span>
              </Button>
            </>
          ) : (
            <>
              <Button 
                onClick={() => navigate('/login')}
                variant="outline"
                className="border-edu-purple-400 text-edu-purple-500"
              >
                Connexion
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-edu-purple-400 text-white hover:bg-edu-purple-500"
              >
                Inscription
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
