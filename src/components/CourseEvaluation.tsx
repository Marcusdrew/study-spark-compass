
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

interface Course {
  id: string;
  name: string;
  professor: string;
}

// Mock data for demonstration
const mockCourses: Course[] = [
  { id: "math101", name: "Mathématiques Avancées", professor: "Dr. Dubois" },
  { id: "phys202", name: "Physique Quantique", professor: "Dr. Martin" },
  { id: "cs304", name: "Intelligence Artificielle", professor: "Dr. Lefèvre" },
  { id: "bio101", name: "Biologie Cellulaire", professor: "Dr. Bernard" }
];

const CourseEvaluation: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [courseQuality, setCourseQuality] = useState<number>(50);
  const [understanding, setUnderstanding] = useState<number>(50);
  const [teachingMethod, setTeachingMethod] = useState<number>(50);
  const [comment, setComment] = useState<string>("");
  const [highlight, setHighlight] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCourse) {
      toast.error("Veuillez sélectionner un cours");
      return;
    }

    // Here you would typically send this data to your backend
    console.log({
      courseId: selectedCourse,
      evaluation: {
        courseQuality,
        understanding,
        teachingMethod,
        comment,
        highlight
      }
    });
    
    toast.success("Votre évaluation a été enregistrée");
    resetForm();
  };

  const resetForm = () => {
    setSelectedCourse("");
    setCourseQuality(50);
    setUnderstanding(50);
    setTeachingMethod(50);
    setComment("");
    setHighlight("");
  };

  const getSliderLabel = (value: number): string => {
    if (value <= 20) return "Très faible";
    if (value <= 40) return "Faible";
    if (value <= 60) return "Moyen";
    if (value <= 80) return "Bon";
    return "Excellent";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-edu-purple-600">Évaluer un cours</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Sélectionner un cours
            </label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger id="course">
                <SelectValue placeholder="Sélectionner un cours" />
              </SelectTrigger>
              <SelectContent>
                {mockCourses.map(course => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name} - {course.professor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Qualité globale du cours: <span className="text-edu-purple-500">{getSliderLabel(courseQuality)}</span>
            </label>
            <Slider
              value={[courseQuality]}
              onValueChange={(values) => setCourseQuality(values[0])}
              min={0}
              max={100}
              step={1}
              className="py-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Compréhension de la matière: <span className="text-edu-purple-500">{getSliderLabel(understanding)}</span>
            </label>
            <Slider
              value={[understanding]}
              onValueChange={(values) => setUnderstanding(values[0])}
              min={0}
              max={100}
              step={1}
              className="py-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Méthode pédagogique: <span className="text-edu-purple-500">{getSliderLabel(teachingMethod)}</span>
            </label>
            <Slider
              value={[teachingMethod]}
              onValueChange={(values) => setTeachingMethod(values[0])}
              min={0}
              max={100}
              step={1}
              className="py-4"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Commentaires constructifs
            </label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Partagez vos impressions sur le cours..."
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label htmlFor="highlight" className="block text-sm font-medium text-gray-700 mb-1">
              Points marquants (positifs ou à améliorer)
            </label>
            <Textarea
              id="highlight"
              value={highlight}
              onChange={(e) => setHighlight(e.target.value)}
              placeholder="Ex: Le TP était très instructif / La notion X reste confuse..."
              className="min-h-[80px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-edu-purple-400 hover:bg-edu-purple-500 text-white"
          >
            Soumettre l'évaluation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CourseEvaluation;
