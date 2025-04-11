
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrainCircuit, Search } from 'lucide-react';
import { toast } from "sonner";

interface Topic {
  id: string;
  name: string;
  courseId: string;
}

// Mock data for demonstration
const mockCourses = [
  { id: "math101", name: "Mathématiques Avancées" },
  { id: "phys202", name: "Physique Quantique" },
  { id: "cs304", name: "Intelligence Artificielle" },
  { id: "bio101", name: "Biologie Cellulaire" }
];

const mockTopics: Record<string, Topic[]> = {
  "math101": [
    { id: "math101_integrals", name: "Intégrales Multiples", courseId: "math101" },
    { id: "math101_vectors", name: "Espaces Vectoriels", courseId: "math101" },
  ],
  "phys202": [
    { id: "phys202_quantum", name: "Principes Quantiques", courseId: "phys202" },
    { id: "phys202_waves", name: "Fonctions d'Onde", courseId: "phys202" },
  ],
  "cs304": [
    { id: "cs304_ml", name: "Machine Learning", courseId: "cs304" },
    { id: "cs304_neural", name: "Réseaux de Neurones", courseId: "cs304" },
  ],
  "bio101": [
    { id: "bio101_cell", name: "Structure Cellulaire", courseId: "bio101" },
    { id: "bio101_dna", name: "ADN et Transcription", courseId: "bio101" },
  ],
};

const IntelligentHelp: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedTopic("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCourse || !selectedTopic || !question.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      // Here you would typically call your AI API
      const mockResponses: Record<string, string> = {
        "math101_integrals": "Les intégrales multiples sont une extension des intégrales simples à des fonctions de plusieurs variables. Pour calculer une intégrale double sur une région R, on utilise la formule ∫∫R f(x,y) dA. On peut évaluer cette intégrale en la transformant en intégrales itérées.",
        "math101_vectors": "Un espace vectoriel est une structure algébrique constituée d'un ensemble de vecteurs pouvant être additionnés entre eux et multipliés par des scalaires. Les propriétés fondamentales incluent: associativité, commutativité, existence d'un élément neutre, et distributivité.",
        "phys202_quantum": "Les principes quantiques fondamentaux incluent la dualité onde-particule, le principe d'incertitude de Heisenberg, et la quantification des niveaux d'énergie. Ces principes expliquent pourquoi les particules subatomiques se comportent différemment des objets macroscopiques.",
        "cs304_ml": "Le Machine Learning est un sous-domaine de l'intelligence artificielle qui permet aux ordinateurs d'apprendre à partir des données sans être explicitement programmés. Il existe trois types principaux d'apprentissage: supervisé, non supervisé et par renforcement."
      };
      
      const response = mockResponses[selectedTopic] || "Je n'ai pas encore d'information spécifique sur ce sujet. Veuillez consulter votre enseignant pour plus de détails.";
      
      setAnswer(response);
      setIsLoading(false);
    }, 1500);
  };

  const availableTopics = selectedCourse ? mockTopics[selectedCourse] || [] : [];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-edu-purple-600 flex items-center gap-2">
          <BrainCircuit className="h-5 w-5" />
          Assistant d'apprentissage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sélectionner un cours
            </label>
            <Select value={selectedCourse} onValueChange={handleCourseChange}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un cours" />
              </SelectTrigger>
              <SelectContent>
                {mockCourses.map(course => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sélectionner un sujet
            </label>
            <Select 
              value={selectedTopic} 
              onValueChange={setSelectedTopic}
              disabled={!selectedCourse}
            >
              <SelectTrigger>
                <SelectValue placeholder={selectedCourse ? "Sélectionner un sujet" : "Sélectionnez d'abord un cours"} />
              </SelectTrigger>
              <SelectContent>
                {availableTopics.map(topic => (
                  <SelectItem key={topic.id} value={topic.id}>
                    {topic.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
              Votre question
            </label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Qu'est-ce que vous n'avez pas compris ?"
              className="min-h-[100px]"
              disabled={!selectedTopic}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-edu-purple-400 hover:bg-edu-purple-500 text-white flex items-center justify-center gap-2"
            disabled={isLoading || !selectedTopic || !question.trim()}
          >
            {isLoading ? (
              <>Recherche en cours...</>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Obtenir une explication
              </>
            )}
          </Button>
        </form>

        {answer && (
          <div className="mt-6 p-4 bg-edu-blue-50 border border-edu-blue-100 rounded-lg">
            <h3 className="font-medium text-edu-purple-600 mb-2">Explication:</h3>
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IntelligentHelp;
