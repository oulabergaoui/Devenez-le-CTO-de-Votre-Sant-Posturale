export interface QuestionOption {
  id: string;
  label: string;
  value: string;
}

export interface Question {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: QuestionOption[];
}

export const questionnaire: Question[] = [
  {
    id: 'fitness-level',
    question: 'Quel est votre niveau de forme physique actuel ?',
    type: 'single',
    options: [
      { id: 'beginner', label: 'Débutant', value: 'beginner' },
      { id: 'intermediate', label: 'Intermédiaire', value: 'intermediate' },
      { id: 'advanced', label: 'Avancé', value: 'advanced' }
    ]
  },
  {
    id: 'sports',
    question: 'Quels sports ou activités pratiquez-vous régulièrement ?',
    type: 'multiple',
    options: [
      { id: 'running', label: 'Course à pied', value: 'running' },
      { id: 'cycling', label: 'Vélo', value: 'cycling' },
      { id: 'swimming', label: 'Natation', value: 'swimming' },
      { id: 'yoga', label: 'Yoga / Pilates', value: 'yoga' },
      { id: 'gym', label: 'Musculation', value: 'gym' },
      { id: 'team-sports', label: 'Sports collectifs', value: 'team-sports' },
      { id: 'none', label: 'Aucun actuellement', value: 'none' }
    ]
  },
  {
    id: 'goals',
    question: 'Quels sont vos objectifs principaux ?',
    type: 'multiple',
    options: [
      { id: 'posture', label: 'Améliorer ma posture', value: 'posture' },
      { id: 'strength', label: 'Gagner en force', value: 'strength' },
      { id: 'flexibility', label: 'Améliorer ma souplesse', value: 'flexibility' },
      { id: 'pain', label: 'Réduire les douleurs', value: 'pain' },
      { id: 'performance', label: 'Améliorer mes performances', value: 'performance' },
      { id: 'weight', label: 'Perdre du poids', value: 'weight' }
    ]
  },
  {
    id: 'pain-areas',
    question: 'Avez-vous des zones de douleur ou de tension ?',
    type: 'multiple',
    options: [
      { id: 'neck', label: 'Cou / Nuque', value: 'neck' },
      { id: 'shoulders', label: 'Épaules', value: 'shoulders' },
      { id: 'back', label: 'Dos', value: 'back' },
      { id: 'lower-back', label: 'Bas du dos', value: 'lower-back' },
      { id: 'hips', label: 'Hanches', value: 'hips' },
      { id: 'knees', label: 'Genoux', value: 'knees' },
      { id: 'none', label: 'Aucune douleur', value: 'none' }
    ]
  },
  {
    id: 'time',
    question: 'Combien de temps pouvez-vous consacrer à vos exercices ?',
    type: 'single',
    options: [
      { id: '10min', label: '10-15 minutes', value: '10' },
      { id: '20min', label: '20-30 minutes', value: '20' },
      { id: '45min', label: '45 minutes ou plus', value: '45' }
    ]
  },
  {
    id: 'frequency',
    question: 'À quelle fréquence souhaitez-vous vous entraîner ?',
    type: 'single',
    options: [
      { id: '2x', label: '2 fois par semaine', value: '2' },
      { id: '3x', label: '3-4 fois par semaine', value: '3' },
      { id: '5x', label: '5+ fois par semaine', value: '5' }
    ]
  }
];

export interface UserProfile {
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  sports: string[];
  goals: string[];
  painAreas: string[];
  availableTime: string;
  frequency: string;
}
