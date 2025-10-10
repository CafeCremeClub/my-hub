import { OnboardingContext } from '@/context/OnboardingContext';
import { useContext } from 'react';

const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      'useOnboardingContext must be used within an OnboardingContextProvider'
    );
  }

  return context;
};

export default useOnboardingContext;
