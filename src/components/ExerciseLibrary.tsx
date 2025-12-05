import { useState } from 'react';
import { motion } from 'framer-motion';
import { exercises, categories, type Exercise, type Level } from '@/data/exercises';
import ExerciseCard from '@/components/ExerciseCard';
import ExerciseDetail from '@/components/ExerciseDetail';
import { Button } from '@/components/ui/button';
import { type UserProfile } from '@/data/questionnaire';
import { ArrowLeft, Filter, User } from 'lucide-react';

interface ExerciseLibraryProps {
  userProfile: UserProfile;
  onBack: () => void;
}

const ExerciseLibrary = ({ userProfile, onBack }: ExerciseLibraryProps) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredExercises = selectedCategory
    ? exercises.filter((e) => e.category === selectedCategory)
    : exercises;

  const levelLabels: Record<Level, string> = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé'
  };

  if (selectedExercise) {
    return (
      <ExerciseDetail
        exercise={selectedExercise}
        userLevel={userProfile.fitnessLevel}
        onBack={() => setSelectedExercise(null)}
      />
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Modifier mon profil
              </Button>
              <h1 className="text-4xl font-extrabold">Vos exercices personnalisés</h1>
              <p className="text-muted-foreground mt-2">
                Programme adapté à votre niveau et vos objectifs
              </p>
            </div>

            {/* User profile summary */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Votre niveau</p>
                <p className="font-bold">{levelLabels[userProfile.fitnessLevel]}</p>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filtrer par catégorie
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                Tous
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Exercise grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                level={userProfile.fitnessLevel}
                onClick={() => setSelectedExercise(exercise)}
                index={index}
              />
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun exercice trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExerciseLibrary;
