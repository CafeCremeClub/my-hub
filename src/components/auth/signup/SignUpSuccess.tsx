'use client';

import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import CustomButton from '@/components/custom/CustomButton';
import { useRouter } from 'next/navigation';
import { SignUpResponse } from '@/types/auth/SignUpResponse';
import { saveCookies } from '@/app/actions/saveCookies';

interface SignUpSuccessProps {
  signupResponse: SignUpResponse;
}

const SignUpSuccess = ({ signupResponse }: SignUpSuccessProps) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleContinue = async () => {
    setLoading(true);
    await saveCookies({
      token: signupResponse.accessToken,
      shouldCompleteOnboarding: true,
      shouldCompleteUserInfo: true,
    });
    setLoading(false);
    router.push('/auth/onboarding?step=1');
  };

  return (
    <div className="z-10 flex flex-col gap-8 w-full md:w-[27.5rem]">
      <div className="flex items-center flex-col gap-6">
        <div className="flex justify-center items-center size-14 shadow-sm shadow-[#1018280D] border border-[#EAECF0] rounded-[0.75rem] bg-white">
          <FaRegCircleCheck className="text-[#344054] size-6" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-center font-semibold text-[#101828] text-3xl bricolage-grotesque tracking-tighter">
            Email vérifié avec succès !
          </p>
          <p className="text-[#475467] text-center">
            Ton adresse email a été confirmée.
            <br />
            Tu es maintenant prêt à finaliser ton
            <br />
            inscription.
          </p>
        </div>
      </div>

      <CustomButton
        type="button"
        className="bricolage-grotesque font-semibold"
        onClick={handleContinue}
        disabled={loading}
        isLoading={loading}
      >
        Continuer
      </CustomButton>
    </div>
  );
};

export default SignUpSuccess;
