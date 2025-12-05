import { motion } from 'framer-motion';
import { type Exercise, type Level } from '@/data/exercises';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Clock,
  Target,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ShoppingBag
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ExerciseDetailProps {
  exercise: Exercise;
  userLevel: Level;
  onBack: () => void;
}

const levelLabels: Record<Level, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé'
};

const levelColors: Record<Level, string> = {
  beginner: 'bg-level-beginner text-primary-foreground',
  intermediate: 'bg-level-intermediate text-foreground',
  advanced: 'bg-level-advanced text-primary-foreground'
};

const categoryIcons: Record<string, string> = {
  strength: '💪',
  flexibility: '🧘',
  cardio: '❤️',
  balance: '⚖️'
};

const ExerciseDetail = ({ exercise, userLevel, onBack }: ExerciseDetailProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux exercices
          </Button>

          {/* Header */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 mb-8">
            <div className="relative h-64 bg-gradient-to-br from-primary/30 via-accent to-secondary/30 flex items-center justify-center">
              <span className="text-9xl">{categoryIcons[exercise.category]}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="p-8 -mt-16 relative">
              <div className="flex flex-wrap gap-2 mb-4">
                {exercise.targetMuscles.map((muscle) => (
                  <span
                    key={muscle}
                    className="px-3 py-1 text-sm rounded-lg bg-accent text-accent-foreground"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-extrabold mb-4">{exercise.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {exercise.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {exercise.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Level tabs */}
          <Tabs defaultValue={userLevel} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-14 p-1 bg-muted rounded-2xl">
              {(['beginner', 'intermediate', 'advanced'] as Level[]).map((level) => (
                <TabsTrigger
                  key={level}
                  value={level}
                  className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-soft transition-all duration-300"
                >
                  <Badge className={`mr-2 ${levelColors[level]}`}>
                    {level === 'beginner' ? '🌱' : level === 'intermediate' ? '🌿' : '🌳'}
                  </Badge>
                  {levelLabels[level]}
                </TabsTrigger>
              ))}
            </TabsList>

            {(['beginner', 'intermediate', 'advanced'] as Level[]).map((level) => {
              const instruction = exercise.instructions[level];
              return (
                <TabsContent key={level} value={level}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Quick info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Durée</p>
                          <p className="font-bold text-lg">{instruction.duration}</p>
                        </div>
                      </div>
                      <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center">
                          <Target className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Répétitions</p>
                          <p className="font-bold text-lg">{instruction.repetitions}</p>
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        Instructions étape par étape
                      </h3>
                      <ol className="space-y-4">
                        {instruction.steps.map((step, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-4"
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground">
                              {index + 1}
                            </span>
                            <p className="text-muted-foreground pt-1">{step}</p>
                          </motion.li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div className="bg-accent/50 rounded-2xl p-8 border border-primary/20">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-primary" />
                        Conseils pour progresser
                      </h3>
                      <ul className="space-y-3">
                        {instruction.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{tip}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common mistakes */}
                    <div className="bg-destructive/10 rounded-2xl p-8 border border-destructive/20">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-destructive" />
                        Erreurs à éviter
                      </h3>
                      <ul className="space-y-3">
                        {instruction.commonMistakes.map((mistake, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{mistake}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Decathlon products */}
                    {exercise.decathlonProducts && exercise.decathlonProducts.length > 0 && (
                      <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <ShoppingBag className="w-6 h-6 text-secondary" />
                          Équipement recommandé
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {exercise.decathlonProducts.map((product, index) => (
                            <div
                              key={index}
                              className="p-4 rounded-xl bg-accent/30 border border-border/50 hover:border-secondary/50 transition-colors cursor-pointer"
                            >
                              <h4 className="font-semibold mb-1">{product.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {product.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ExerciseDetail;
