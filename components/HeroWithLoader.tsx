// components/HeroWithLoader.js
'use client';

import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Loader from './ui/Loader';

const HeroWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simuliert eine 3-Sekunden-Ladezeit für das Video

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader /> : <Hero />}</>;
};

export default HeroWithLoader;
