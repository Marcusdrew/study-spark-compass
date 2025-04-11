
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-edu-purple-100 rounded-full flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-edu-purple-400" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-edu-purple-500 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oups ! Page introuvable</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          La page que vous recherchez semble introuvable ou a été déplacée.
        </p>
        
        <Button 
          className="bg-edu-purple-400 hover:bg-edu-purple-500 text-white"
          onClick={() => navigate('/')}
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
