import React from 'react';
import { Label } from '@/components/ui/label';
import CustomInput from '@/components/custom/CustomInput';
import { HiOutlineLockOpen } from 'react-icons/hi';
import CustomButton from '@/components/custom/CustomButton';

const SettingsPasswordContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg text-[#101828]">Mot de passe</p>
        <p className="text-sm text-[#475467]">
          Veuillez renseigner vos informations personnelles.
        </p>
      </div>
      <hr />

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Label htmlFor="newPassword" className="md:w-96">
            Nouveau mot de passe
          </Label>
          <div className="col-span-2">
            <CustomInput
              id="newPassword"
              name="newPassword"
              type="password"
              className="w-full"
              defaultValue="Ihsan"
              readOnly={true}
              leftIcon={<HiOutlineLockOpen />}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Label htmlFor="confirmPassword" className="md:w-96">
            Confirmez votre mot de passe
          </Label>
          <div className="col-span-2">
            <CustomInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full"
              defaultValue="Ihsan"
              readOnly={true}
              leftIcon={<HiOutlineLockOpen />}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="flex justify-end items-center w-full gap-3">
        <CustomButton className="bg-white border border-[#D0D5DD] text-[#344054] hover:bg-gray-100">
          Annuler
        </CustomButton>
        <CustomButton>Enregistrer</CustomButton>
      </div>
    </div>
  );
};

export default SettingsPasswordContent;
