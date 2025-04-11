
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { BookOpen } from 'lucide-react';
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup success
    toast.success("Inscription réussie ! Un e-mail de confirmation vous a été envoyé.");
    // Redirect to login
    navigate('/login');
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
              <CardTitle className="text-2xl">Créer un compte</CardTitle>
              <CardDescription>
                Inscrivez-vous pour accéder à la plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail universitaire</Label>
                  <Input id="email" type="email" placeholder="votre@universite.fr" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="university">Université</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre université" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Université de Paris</SelectItem>
                      <SelectItem value="lyon">Université de Lyon</SelectItem>
                      <SelectItem value="marseille">Université de Marseille</SelectItem>
                      <SelectItem value="toulouse">Université de Toulouse</SelectItem>
                      <SelectItem value="bordeaux">Université de Bordeaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Département / Filière</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre département" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="info">Informatique</SelectItem>
                      <SelectItem value="math">Mathématiques</SelectItem>
                      <SelectItem value="physics">Physique</SelectItem>
                      <SelectItem value="bio">Biologie</SelectItem>
                      <SelectItem value="chem">Chimie</SelectItem>
                      <SelectItem value="eco">Économie</SelectItem>
                      <SelectItem value="law">Droit</SelectItem>
                      <SelectItem value="med">Médecine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" required />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    J'accepte les{" "}
                    <a href="#" className="text-edu-purple-500 hover:text-edu-purple-600">
                      conditions d'utilisation
                    </a>{" "}
                    et la{" "}
                    <a href="#" className="text-edu-purple-500 hover:text-edu-purple-600">
                      politique de confidentialité
                    </a>
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-edu-purple-400 hover:bg-edu-purple-500 text-white"
                >
                  S'inscrire
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mt-2 text-center">
                <span className="text-sm text-gray-500">Vous avez déjà un compte ?</span>{' '}
                <a 
                  className="text-sm font-medium text-edu-purple-500 hover:text-edu-purple-600"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/login');
                  }}
                >
                  Connectez-vous
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signup;
