
import React, { useState } from 'react';
import Header from '@/components/Header';
import EmotionTracker from '@/components/EmotionTracker';
import CourseEvaluation from '@/components/CourseEvaluation';
import IntelligentHelp from '@/components/IntelligentHelp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Smile, BrainCircuit } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("emotion");
  
  // Mock data for student
  const student = {
    name: "Marie Dubois",
    email: "marie.dubois@etudiant.fr",
    university: "Université de Paris",
    department: "Sciences Informatiques"
  };
  
  // Mock upcoming courses
  const upcomingCourses = [
    { id: 1, name: "Intelligence Artificielle", time: "14h00 - 16h00", location: "Salle A104" },
    { id: 2, name: "Analyse de Données", time: "10h00 - 12h00", location: "Salle B201" },
    { id: 3, name: "Projet Tutoré", time: "16h30 - 18h30", location: "Salle C305" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isLoggedIn={true} userType="student" />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-edu-purple-100 flex items-center justify-center">
                    <span className="text-edu-purple-500 font-semibold">MD</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-sm"><span className="font-medium">Université:</span> {student.university}</p>
                  <p className="text-sm"><span className="font-medium">Département:</span> {student.department}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Cours à venir aujourd'hui</h4>
                  <div className="space-y-3">
                    {upcomingCourses.map(course => (
                      <div key={course.id} className="text-sm">
                        <p className="font-medium">{course.name}</p>
                        <p className="text-gray-500">{course.time}, {course.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="emotion" className="flex items-center gap-2">
                  <Smile className="h-4 w-4" />
                  <span>Suivi Émotionnel</span>
                </TabsTrigger>
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Évaluation des Cours</span>
                </TabsTrigger>
                <TabsTrigger value="help" className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>Aide Intelligente</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="emotion">
                <EmotionTracker />
              </TabsContent>
              
              <TabsContent value="courses">
                <CourseEvaluation />
              </TabsContent>
              
              <TabsContent value="help">
                <IntelligentHelp />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
