import React from 'react';
import SignUpPageContent from '@/components/auth/signup/SignUpPageContent';
import Image from 'next/image';
import { bgPatternDecorative } from '../../../../public';

const SignUpPage = () => {
  return (
    <div className="relative h-screen bg-white flex justify-center px-2.5 md:px-5 pb-7 pt-24">
      <Image
        src={bgPatternDecorative}
        alt="bg pattern decorative"
        className="z-0 object-cover object-center size-[32rem] md:size-[48rem] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      />
      <SignUpPageContent />
    </div>
  );
};

export default SignUpPage;
