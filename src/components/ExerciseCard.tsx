import { motion } from 'framer-motion';
import { type Exercise, type Level } from '@/data/exercises';
import { Clock, Target, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExerciseCardProps {
  exercise: Exercise;
  level: Level;
  onClick: () => void;
  index: number;
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

const ExerciseCard = ({ exercise, level, onClick, index }: ExerciseCardProps) => {
  const instruction = exercise.instructions[level];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-soft hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image placeholder with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent to-secondary/20 flex items-center justify-center overflow-hidden">
        <span className="text-7xl">{categoryIcons[exercise.category]}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <Badge className={`absolute top-4 right-4 ${levelColors[level]}`}>
          {levelLabels[level]}
        </Badge>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {exercise.name}
          </h3>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {exercise.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {exercise.targetMuscles.slice(0, 3).map((muscle) => (
            <span
              key={muscle}
              className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{instruction.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            <span>{instruction.repetitions.split(',')[0]}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ExerciseCard;
