
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const emojis = [
  { value: 'great', emoji: '😄', label: 'Génial' },
  { value: 'good', emoji: '🙂', label: 'Bien' },
  { value: 'okay', emoji: '😐', label: 'Moyen' },
  { value: 'bad', emoji: '😔', label: 'Difficile' },
  { value: 'awful', emoji: '😩', label: 'Terrible' }
];

const EmotionTracker: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedEmotion) {
      toast.error("Veuillez sélectionner une émotion");
      return;
    }

    // Here you would typically send this data to your backend
    console.log({ emotion: selectedEmotion, comment });
    
    toast.success("Votre ressenti a été enregistré");
    setSelectedEmotion(null);
    setComment('');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-edu-purple-600">Comment vous sentez-vous cette semaine ?</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {emojis.map((item) => (
              <div key={item.value} className="flex flex-col items-center gap-1">
                <button
                  type="button"
                  className={`emoji-btn p-2 rounded-full ${selectedEmotion === item.value ? 'bg-edu-purple-100 ring-2 ring-edu-purple-400' : ''}`}
                  onClick={() => setSelectedEmotion(item.value)}
                >
                  <span className="text-4xl">{item.emoji}</span>
                </button>
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-700">
              Qu'est-ce qui explique votre ressenti actuel ? (Optionnel)
            </label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Partagez vos pensées..."
              className="min-h-[100px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-edu-purple-400 hover:bg-edu-purple-500 text-white"
          >
            Enregistrer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmotionTracker;
