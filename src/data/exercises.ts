export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface ExerciseInstruction {
  level: Level;
  duration: string;
  repetitions: string;
  steps: string[];
  tips: string[];
  commonMistakes: string[];
}

export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'flexibility' | 'cardio' | 'balance';
  targetMuscles: string[];
  description: string;
  benefits: string[];
  instructions: Record<Level, ExerciseInstruction>;
  imagePrompt: string;
  equipment?: string[];
  decathlonProducts?: { name: string; description: string }[];
}

export const exercises: Exercise[] = [
  {
    id: 'squat',
    name: 'Squat',
    category: 'strength',
    targetMuscles: ['Quadriceps', 'Fessiers', 'Ischio-jambiers', 'Core'],
    description: 'Le squat est un exercice fondamental qui renforce le bas du corps et améliore la mobilité des hanches.',
    benefits: [
      'Renforce les jambes et les fessiers',
      'Améliore la posture quotidienne',
      'Augmente la mobilité des hanches',
      'Brûle efficacement les calories'
    ],
    imagePrompt: 'Person performing perfect squat form, athletic pose, fitness illustration',
    instructions: {
      beginner: {
        level: 'beginner',
        duration: '10 minutes',
        repetitions: '3 séries de 10 répétitions',
        steps: [
          'Tenez-vous debout, pieds écartés à la largeur des épaules',
          'Gardez le dos droit et le regard devant vous',
          'Descendez lentement comme si vous vous asseyiez sur une chaise',
          'Arrêtez-vous quand vos cuisses sont parallèles au sol',
          'Poussez sur vos talons pour remonter à la position initiale'
        ],
        tips: [
          'Utilisez une chaise derrière vous pour vous guider',
          'Gardez vos genoux alignés avec vos orteils',
          'Respirez profondément : inspirez en descendant, expirez en remontant'
        ],
        commonMistakes: [
          'Genoux qui dépassent les orteils',
          'Dos courbé vers l\'avant',
          'Talons qui se soulèvent du sol'
        ]
      },
      intermediate: {
        level: 'intermediate',
        duration: '15 minutes',
        repetitions: '4 séries de 15 répétitions',
        steps: [
          'Position de départ : pieds légèrement plus écartés que les épaules',
          'Engagez votre core avant de commencer le mouvement',
          'Descendez en contrôlant le mouvement sur 3 secondes',
          'Descendez plus bas que le parallèle si votre mobilité le permet',
          'Explosez vers le haut en gardant le contrôle'
        ],
        tips: [
          'Ajoutez un temps de pause de 2 secondes en position basse',
          'Variez l\'écartement des pieds pour cibler différents muscles',
          'Travaillez pieds nus pour améliorer la proprioception'
        ],
        commonMistakes: [
          'Perdre la tension dans le core',
          'Rebondir en bas du mouvement',
          'Ne pas descendre assez bas'
        ]
      },
      advanced: {
        level: 'advanced',
        duration: '20 minutes',
        repetitions: '5 séries de 20 répétitions ou avec charge',
        steps: [
          'Échauffez-vous avec des squats à vide',
          'Placez la barre sur vos trapèzes (si avec charge)',
          'Engagez tout le corps avant de commencer',
          'Descendez en full squat (fessiers touchent presque les mollets)',
          'Remontez de manière explosive tout en gardant le contrôle'
        ],
        tips: [
          'Variez avec des squats sur une jambe (pistol squat)',
          'Intégrez des jump squats pour la puissance',
          'Travaillez avec des tempo variés (4-2-1)'
        ],
        commonMistakes: [
          'Charger trop lourd au détriment de la forme',
          'Négliger l\'échauffement',
          'Ne pas varier les angles et les styles'
        ]
      }
    },
    equipment: ['Optionnel: Barre, haltères, kettlebell'],
    decathlonProducts: [
      { name: 'Tapis de fitness', description: 'Pour un meilleur confort et stabilité' },
      { name: 'Kettlebell', description: 'Pour ajouter de la résistance progressivement' }
    ]
  },
  {
    id: 'push-up',
    name: 'Pompes',
    category: 'strength',
    targetMuscles: ['Pectoraux', 'Triceps', 'Épaules', 'Core'],
    description: 'Les pompes sont un exercice polyvalent qui renforce le haut du corps et améliore la stabilité du tronc.',
    benefits: [
      'Renforce les pectoraux et les bras',
      'Améliore la stabilité du core',
      'Ne nécessite aucun équipement',
      'Peut être adapté à tous les niveaux'
    ],
    imagePrompt: 'Person in perfect push-up position, athletic form, fitness illustration',
    instructions: {
      beginner: {
        level: 'beginner',
        duration: '8 minutes',
        repetitions: '3 séries de 8 répétitions',
        steps: [
          'Commencez en position de planche sur les genoux',
          'Placez vos mains légèrement plus larges que les épaules',
          'Gardez votre corps aligné de la tête aux genoux',
          'Descendez en pliant les coudes jusqu\'à ce que votre poitrine frôle le sol',
          'Poussez pour revenir à la position de départ'
        ],
        tips: [
          'Commencez contre un mur si les pompes sur genoux sont trop difficiles',
          'Serrez les fessiers pour maintenir l\'alignement',
          'Regardez légèrement devant vous, pas vers le bas'
        ],
        commonMistakes: [
          'Hanches qui tombent ou se lèvent',
          'Coudes qui s\'écartent trop du corps',
          'Amplitude de mouvement incomplète'
        ]
      },
      intermediate: {
        level: 'intermediate',
        duration: '12 minutes',
        repetitions: '4 séries de 12 répétitions',
        steps: [
          'Adoptez une position de planche complète',
          'Mains sous les épaules, corps parfaitement aligné',
          'Descendez en contrôlant le mouvement sur 2-3 secondes',
          'Poitrine à 5cm du sol',
          'Remontez de manière explosive'
        ],
        tips: [
          'Variez la largeur des mains pour cibler différents muscles',
          'Intégrez des pompes diamant pour les triceps',
          'Ajoutez un clap pour la puissance'
        ],
        commonMistakes: [
          'Respiration bloquée',
          'Vitesse trop rapide sans contrôle',
          'Tête qui tombe vers le sol'
        ]
      },
      advanced: {
        level: 'advanced',
        duration: '15 minutes',
        repetitions: '5 séries de 20+ répétitions',
        steps: [
          'Position de planche stricte avec engagement total du core',
          'Descendez lentement sur 4 secondes',
          'Pause d\'1 seconde en bas',
          'Remontée explosive',
          'Variez avec des pompes archer, pike ou plyo'
        ],
        tips: [
          'Essayez les pompes sur un bras',
          'Intégrez des pompes hindu pour la mobilité',
          'Combinez avec des burpees pour le cardio'
        ],
        commonMistakes: [
          'Sacrifier la forme pour les répétitions',
          'Négliger les variations',
          'Ne pas progresser vers des versions plus difficiles'
        ]
      }
    },
    equipment: ['Optionnel: Poignées de pompes, lest'],
    decathlonProducts: [
      { name: 'Poignées de pompes', description: 'Réduisent la pression sur les poignets' },
      { name: 'Gilet lesté', description: 'Pour augmenter l\'intensité' }
    ]
  },
  {
    id: 'yoga-warrior',
    name: 'Posture du Guerrier (Virabhadrasana)',
    category: 'flexibility',
    targetMuscles: ['Quadriceps', 'Hanches', 'Épaules', 'Core'],
    description: 'Une posture de yoga puissante qui améliore l\'équilibre, la force et la concentration.',
    benefits: [
      'Étire les hanches et les cuisses',
      'Renforce les jambes',
      'Améliore l\'équilibre et la concentration',
      'Ouvre la poitrine et les épaules'
    ],
    imagePrompt: 'Person in warrior yoga pose, peaceful setting, yoga illustration',
    instructions: {
      beginner: {
        level: 'beginner',
        duration: '5 minutes',
        repetitions: '30 secondes par côté, 2 répétitions',
        steps: [
          'Debout, faites un grand pas en arrière avec une jambe',
          'Pliez le genou avant à 90 degrés',
          'Gardez la jambe arrière tendue, pied à 45 degrés',
          'Levez les bras au-dessus de la tête',
          'Regardez droit devant vous et respirez profondément'
        ],
        tips: [
          'Utilisez un mur pour l\'équilibre si nécessaire',
          'Ne forcez pas sur le genou avant',
          'Concentrez-vous sur votre respiration'
        ],
        commonMistakes: [
          'Genou avant qui dépasse la cheville',
          'Hanches non alignées vers l\'avant',
          'Épaules crispées vers les oreilles'
        ]
      },
      intermediate: {
        level: 'intermediate',
        duration: '10 minutes',
        repetitions: '1 minute par côté, 3 répétitions',
        steps: [
          'Entrez dans la posture avec fluidité depuis la posture de la montagne',
          'Approfondissez la flexion du genou avant',
          'Tirez le nombril vers la colonne vertébrale',
          'Allongez à travers les doigts vers le ciel',
          'Maintenez en respirant profondément'
        ],
        tips: [
          'Enchaînez avec Guerrier II et III',
          'Travaillez les yeux fermés pour l\'équilibre',
          'Intégrez des mouvements de bras fluides'
        ],
        commonMistakes: [
          'Perdre l\'ancrage du pied arrière',
          'Tension dans le cou',
          'Respiration superficielle'
        ]
      },
      advanced: {
        level: 'advanced',
        duration: '15 minutes',
        repetitions: '2 minutes par côté, 3 répétitions avec variations',
        steps: [
          'Transition fluide depuis Guerrier I vers II et III',
          'En Guerrier III, maintenez l\'équilibre sur une jambe',
          'Bras tendus devant vous, corps parallèle au sol',
          'Enchaînez avec des variations dynamiques',
          'Terminez par une relaxation consciente'
        ],
        tips: [
          'Ajoutez des poids légers aux poignets',
          'Pratiquez sur une surface instable',
          'Intégrez dans un flow vinyasa complet'
        ],
        commonMistakes: [
          'Précipiter les transitions',
          'Négliger l\'alignement pour la profondeur',
          'Oublier l\'intention méditative'
        ]
      }
    },
    equipment: ['Tapis de yoga', 'Optionnel: Blocs de yoga'],
    decathlonProducts: [
      { name: 'Tapis de yoga antidérapant', description: 'Pour une pratique stable et confortable' },
      { name: 'Blocs de yoga', description: 'Pour adapter les postures à votre niveau' }
    ]
  },
  {
    id: 'plank',
    name: 'Planche (Gainage)',
    category: 'strength',
    targetMuscles: ['Core', 'Épaules', 'Dos', 'Fessiers'],
    description: 'Le gainage renforce la ceinture abdominale et améliore la stabilité globale du corps.',
    benefits: [
      'Renforce profondément le core',
      'Améliore la posture au quotidien',
      'Prévient les douleurs lombaires',
      'Augmente l\'endurance musculaire'
    ],
    imagePrompt: 'Person holding perfect plank position, strong core engagement, fitness illustration',
    instructions: {
      beginner: {
        level: 'beginner',
        duration: '5 minutes',
        repetitions: '3 séries de 20-30 secondes',
        steps: [
          'Placez-vous sur les avant-bras et les genoux',
          'Alignez les coudes sous les épaules',
          'Engagez les abdominaux en tirant le nombril vers la colonne',
          'Maintenez le dos plat comme une planche',
          'Respirez normalement tout au long de l\'exercice'
        ],
        tips: [
          'Regardez un point au sol devant vous',
          'Serrez les fessiers pour plus de stabilité',
          'Commencez avec des temps courts et augmentez progressivement'
        ],
        commonMistakes: [
          'Hanches trop hautes ou trop basses',
          'Retenir sa respiration',
          'Épaules crispées'
        ]
      },
      intermediate: {
        level: 'intermediate',
        duration: '10 minutes',
        repetitions: '4 séries de 45-60 secondes',
        steps: [
          'Position de planche complète sur les orteils',
          'Corps parfaitement aligné de la tête aux talons',
          'Poussez le sol loin de vous avec vos avant-bras',
          'Contractez chaque muscle du corps',
          'Maintenez une respiration régulière et profonde'
        ],
        tips: [
          'Alternez avec des planches latérales',
          'Ajoutez des mouvements de hanche (hip dips)',
          'Essayez la planche sur mains tendues'
        ],
        commonMistakes: [
          'Laisser le bas du dos s\'affaisser',
          'Tête qui tombe vers le sol',
          'Manque d\'engagement du core'
        ]
      },
      advanced: {
        level: 'advanced',
        duration: '15 minutes',
        repetitions: '5 séries de 90+ secondes avec variations',
        steps: [
          'Commencez par 2 minutes de planche standard',
          'Enchaînez avec des planches dynamiques (marche, rotation)',
          'Intégrez des exercices de type mountain climbers',
          'Terminez avec une planche RKC (contraction maximale)',
          'Récupérez activement entre les séries'
        ],
        tips: [
          'Ajoutez un lest sur le dos',
          'Essayez la planche sur un bras ou une jambe',
          'Combinez avec des pompes pour un challenge complet'
        ],
        commonMistakes: [
          'Privilégier la durée à la qualité',
          'Ne pas varier les angles',
          'Ignorer les signaux de fatigue du bas du dos'
        ]
      }
    },
    equipment: ['Tapis de fitness'],
    decathlonProducts: [
      { name: 'Tapis de fitness épais', description: 'Pour protéger vos coudes et avant-bras' },
      { name: 'Disque de lest', description: 'Pour intensifier l\'exercice' }
    ]
  },
  {
    id: 'lunges',
    name: 'Fentes',
    category: 'strength',
    targetMuscles: ['Quadriceps', 'Fessiers', 'Ischio-jambiers', 'Mollets'],
    description: 'Les fentes sont excellentes pour travailler les jambes unilatéralement et améliorer l\'équilibre.',
    benefits: [
      'Corrige les déséquilibres musculaires',
      'Améliore la stabilité et l\'équilibre',
      'Renforce les jambes de manière fonctionnelle',
      'Étire les fléchisseurs de hanche'
    ],
    imagePrompt: 'Person performing forward lunge with perfect form, athletic pose, fitness illustration',
    instructions: {
      beginner: {
        level: 'beginner',
        duration: '10 minutes',
        repetitions: '3 séries de 8 répétitions par jambe',
        steps: [
          'Debout, pieds joints, mains sur les hanches',
          'Faites un pas en avant avec une jambe',
          'Descendez jusqu\'à ce que les deux genoux soient à 90 degrés',
          'Le genou arrière frôle le sol sans le toucher',
          'Revenez à la position de départ en poussant sur le talon avant'
        ],
        tips: [
          'Tenez-vous près d\'un mur pour l\'équilibre',
          'Faites des pas plus courts si nécessaire',
          'Concentrez-vous sur la descente verticale, pas vers l\'avant'
        ],
        commonMistakes: [
          'Genou avant qui dépasse les orteils',
          'Perte d\'équilibre latéral',
          'Buste penché en avant'
        ]
      },
      intermediate: {
        level: 'intermediate',
        duration: '15 minutes',
        repetitions: '4 séries de 12 répétitions par jambe',
        steps: [
          'Commencez debout, core engagé',
          'Fente avant avec contrôle sur 2 secondes',
          'Descendez profondément, genou arrière à 2cm du sol',
          'Explosez vers le haut pour revenir',
          'Alternez avec des fentes arrière et latérales'
        ],
        tips: [
          'Ajoutez des haltères pour la résistance',
          'Essayez les fentes marchées',
          'Variez les angles pour cibler tous les muscles'
        ],
        commonMistakes: [
          'Pas assez de profondeur',
          'Vitesse trop rapide',
          'Manque de stabilité du tronc'
        ]
      },
      advanced: {
        level: 'advanced',
        duration: '20 minutes',
        repetitions: '5 séries de 15+ répétitions par jambe avec charge',
        steps: [
          'Échauffez-vous avec des fentes à vide',
          'Chargez avec une barre ou des haltères lourds',
          'Effectuez des fentes sautées pour la puissance',
          'Intégrez des fentes bulgares (pied arrière surélevé)',
          'Terminez avec des fentes isométriques'
        ],
        tips: [
          'Combinez avec des step-ups',
          'Travaillez sur surface instable',
          'Intégrez dans un circuit HIIT'
        ],
        commonMistakes: [
          'Charger trop lourd trop vite',
          'Négliger l\'échauffement des hanches',
          'Oublier de travailler les deux côtés équitablement'
        ]
      }
    },
    equipment: ['Optionnel: Haltères, barre, step'],
    decathlonProducts: [
      { name: 'Haltères ajustables', description: 'Pour progresser en résistance' },
      { name: 'Step de fitness', description: 'Pour les fentes bulgares' }
    ]
  }
];

export const categories = [
  { id: 'strength', name: 'Renforcement', icon: '💪' },
  { id: 'flexibility', name: 'Souplesse', icon: '🧘' },
  { id: 'cardio', name: 'Cardio', icon: '❤️' },
  { id: 'balance', name: 'Équilibre', icon: '⚖️' }
];
