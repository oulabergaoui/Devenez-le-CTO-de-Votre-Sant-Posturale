import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Shield, Target } from 'lucide-react';

interface HeroProps {
  onStartQuestionnaire: () => void;
}

const Hero = ({ onStartQuestionnaire }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
              <Activity className="w-4 h-4" />
              Votre santé posturale, notre priorité
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Transformez votre{' '}
            <span className="text-gradient">posture</span>,{' '}
            <br className="hidden md:block" />
            prévenez les{' '}
            <span className="text-secondary">blessures</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Des exercices personnalisés selon votre niveau pour améliorer votre bien-être au quotidien
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" onClick={onStartQuestionnaire}>
              Créer mon profil
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Découvrir les exercices
            </Button>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Target, title: 'Personnalisé', desc: 'Adapté à votre niveau' },
              { icon: Shield, title: 'Préventif', desc: 'Réduisez les risques' },
              { icon: Activity, title: 'Progressif', desc: 'Évoluez à votre rythme' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
