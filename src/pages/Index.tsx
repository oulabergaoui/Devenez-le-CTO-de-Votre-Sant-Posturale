import { useState } from 'react';
import Hero from '@/components/Hero';
import Questionnaire from '@/components/Questionnaire';
import ExerciseLibrary from '@/components/ExerciseLibrary';
import { type UserProfile } from '@/data/questionnaire';
import { Helmet } from 'react-helmet-async';

type AppView = 'home' | 'questionnaire' | 'exercises';

const Index = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStartQuestionnaire = () => {
    setCurrentView('questionnaire');
  };

  const handleQuestionnaireComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentView('exercises');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleBackToQuestionnaire = () => {
    setCurrentView('questionnaire');
  };

  return (
    <>
      <Helmet>
        <title>PostureFit - Améliorez votre posture et prévenez les blessures</title>
        <meta
          name="description"
          content="Découvrez des exercices personnalisés pour améliorer votre santé posturale. Programme adapté à votre niveau : débutant, intermédiaire ou avancé."
        />
      </Helmet>

      <main>
        {currentView === 'home' && (
          <Hero onStartQuestionnaire={handleStartQuestionnaire} />
        )}
        {currentView === 'questionnaire' && (
          <Questionnaire
            onComplete={handleQuestionnaireComplete}
            onBack={handleBackToHome}
          />
        )}
        {currentView === 'exercises' && userProfile && (
          <ExerciseLibrary
            userProfile={userProfile}
            onBack={handleBackToQuestionnaire}
          />
        )}
      </main>
    </>
  );
};

export default Index;
