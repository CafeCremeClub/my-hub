import React from 'react';
import Image from 'next/image';
import { logo } from '../../../../public';
import CustomInput from '@/components/custom/CustomInput';
import CustomButton from '@/components/custom/CustomButton';
import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'sonner';
import { handleSendOTPError } from '@/utils/helpers/handleSendOTPError';
import useSendOtp from '@/hooks/auth/useSendOtp';
import CustomErrorIndicator from '@/components/custom/CustomErrorIndicator';

interface SignUpFormProps {
  onNext: (email: string) => void;
}

const SignUpForm = ({ onNext }: SignUpFormProps) => {
  const { isPending, mutateAsync } = useSendOtp();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Adresse email invalide')
      .required("L'email est requis"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          email: values.email,
        });

        toast.success('Code OTP envoyé', {
          description: 'Un code OTP a été envoyé à votre adresse e-mail.',
          position: 'bottom-right',
          className: '!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]',
          descriptionClassName: '!text-[#176448] !text-xs',
        });

        onNext(values.email);
      } catch (error) {
        const errorMessage = handleSendOTPError(error);
        toast.error("Échec de l'envoi du code OTP", {
          description: errorMessage,
          position: 'bottom-right',
          className: '!bg-[#DF1C41] !text-white',
          descriptionClassName: '!text-white !text-xs',
        });
      }
    },
  });

  return (
    <div className="z-10 flex flex-col gap-8 w-full md:w-[27.5rem]">
      <div className="flex items-center flex-col gap-6">
        <Image
          src={logo}
          alt="logo"
          className="object-center object-cover w-64"
        />
        <div className="flex flex-col gap-3">
          <p className="text-center font-semibold text-[#101828] text-3xl bricolage-grotesque tracking-tighter">
            Inscris-toi à MyHub
          </p>
          <p className="text-[#475467] text-center">
            Commencez votre essai gratuit de 30 jours.
          </p>
        </div>
      </div>

      <form
        className="flex flex-col gap-6 rounded-[0.75rem] px-10 py-8 bg-white shadow-lg shadow-[#1018280F]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-[#344054]">
            Entre ton adresse email*
          </label>
          <CustomInput
            id="email"
            name="email"
            type="email"
            placeholder="mail@exemple.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.touched.email && formik.errors.email !== undefined}
          />
          {formik.touched.email && formik.errors.email && (
            <CustomErrorIndicator message={formik.errors.email} />
          )}
        </div>

        <CustomButton
          type="submit"
          className="bricolage-grotesque font-semibold"
          disabled={isPending}
          isLoading={isPending}
        >
          Créer mon compte
        </CustomButton>
      </form>

      <div className="flex justify-center items-center gap-1 text-sm text-[#475467]">
        <p>As-tu déjà un compte ?</p>{' '}
        <Link
          href="/auth/signin"
          className="font-bold text-[#2970FF] cursor-pointer hover:underline"
        >
          Connecte toi
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
