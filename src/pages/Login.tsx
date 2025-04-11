
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { BookOpen } from 'lucide-react';
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    toast.success("Connexion réussie");
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-edu-purple-400" />
              <h1 className="text-2xl font-bold text-edu-purple-600">StudySpark</h1>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Connexion</CardTitle>
              <CardDescription>
                Accédez à votre compte pour continuer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <a 
                      href="#" 
                      className="text-sm text-edu-purple-500 hover:text-edu-purple-600"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-edu-purple-400 hover:bg-edu-purple-500 text-white"
                >
                  Se connecter
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mt-2 text-center">
                <span className="text-sm text-gray-500">Vous n'avez pas de compte ?</span>{' '}
                <a 
                  className="text-sm font-medium text-edu-purple-500 hover:text-edu-purple-600"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/signup');
                  }}
                >
                  Inscrivez-vous
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Login;
