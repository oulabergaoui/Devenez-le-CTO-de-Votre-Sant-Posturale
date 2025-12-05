import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { questionnaire, type UserProfile } from '@/data/questionnaire';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface QuestionnaireProps {
  onComplete: (profile: UserProfile) => void;
  onBack: () => void;
}

const Questionnaire = ({ onComplete, onBack }: QuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const currentQuestion = questionnaire[currentStep];
  const progress = ((currentStep + 1) / questionnaire.length) * 100;

  const handleSelect = (value: string) => {
    if (currentQuestion.type === 'single') {
      setAnswers({ ...answers, [currentQuestion.id]: value });
    } else {
      const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
      if (currentAnswers.includes(value)) {
        setAnswers({
          ...answers,
          [currentQuestion.id]: currentAnswers.filter((v) => v !== value)
        });
      } else {
        setAnswers({
          ...answers,
          [currentQuestion.id]: [...currentAnswers, value]
        });
      }
    }
  };

  const isSelected = (value: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentStep < questionnaire.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const profile: UserProfile = {
        fitnessLevel: answers['fitness-level'] as UserProfile['fitnessLevel'],
        sports: (answers['sports'] as string[]) || [],
        goals: (answers['goals'] as string[]) || [],
        painAreas: (answers['pain-areas'] as string[]) || [],
        availableTime: answers['time'] as string,
        frequency: answers['frequency'] as string
      };
      onComplete(profile);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-background py-12 px-4">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={handlePrevious}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <span className="text-sm text-muted-foreground">
              Question {currentStep + 1} sur {questionnaire.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          >
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentQuestion.question}
              </h2>
              <p className="text-muted-foreground">
                {currentQuestion.type === 'multiple'
                  ? 'Sélectionnez une ou plusieurs réponses'
                  : 'Sélectionnez une réponse'}
              </p>
            </div>

            <div className="grid gap-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between group ${
                    isSelected(option.value)
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border hover:border-primary/50 hover:bg-accent/50'
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected(option.value)
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground/30 group-hover:border-primary/50'
                    }`}
                  >
                    {isSelected(option.value) && (
                      <Check className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              disabled={!canProceed()}
              onClick={handleNext}
            >
              {currentStep < questionnaire.length - 1 ? (
                <>
                  Continuer
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Voir mes exercices personnalisés
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Questionnaire;
