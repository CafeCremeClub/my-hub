import React from 'react';
import { IconType } from 'react-icons';

interface StepProps {
  title: string;
  description: string;
  icon: IconType;
  isActive: boolean;
  showLine: boolean;
}

const Step = ({
  showLine,
  title,
  description,
  icon: Icon,
  isActive,
}: StepProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-1">
        <div
          className={`flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0]${
            isActive ? '' : 'opacity-50'
          }`}
        >
          <Icon
            className={`size-6 text-[#344054] ${isActive ? '' : 'opacity-50'}`}
          />
        </div>
        {showLine ? (
          <div
            className={`w-0.5 bg-[#EAECF0] rounded-full h-[3.125rem] ${
              isActive ? '' : 'opacity-50'
            }`}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5">
        <p
          className={`font-semibold bricolage-grotesque tracking-tighter text-[#344054] ${
            isActive ? '' : 'opacity-50'
          }`}
        >
          {title}
        </p>
        <p className={`text-[#475467] ${isActive ? '' : 'opacity-50'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Step;
