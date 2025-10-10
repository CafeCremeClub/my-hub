import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SettingsProfileContentSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header section */}
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-5 w-80" />
      </div>
      <hr />

      <div className="flex flex-col gap-5">
        {/* First Name field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-16" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        {/* Last Name field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-12" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>
        <hr />

        {/* Email field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-28" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        {/* Phone field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-32" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        {/* LinkedIn field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-16" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        <hr />

        {/* Post field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-24" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        {/* Skills field */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <Skeleton className="h-5 w-32" />
          <div className="col-span-2">
            <Skeleton className="h-11 w-full" />
          </div>
        </div>

        {/* Bio section */}
        <div className="grid grid-cols-4 gap-1.5 md:gap-8">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="flex flex-col gap-3 w-full col-span-2">
            {/* Formatting tools */}
            <div className="flex items-center gap-3 w-full">
              <Skeleton className="h-11 w-40" />
              <div className="flex gap-1">
                <Skeleton className="size-8 rounded" />
                <Skeleton className="size-8 rounded" />
                <Skeleton className="size-8 rounded" />
                <Skeleton className="size-8 rounded" />
                <Skeleton className="size-8 rounded" />
              </div>
            </div>
            {/* Textarea and character count */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-28 w-full rounded-[0.5rem]" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Action buttons */}
      <div className="flex justify-end items-center w-full gap-3">
        <Skeleton className="h-11 w-20" />
        <Skeleton className="h-11 w-24" />
      </div>
    </div>
  );
};

export default SettingsProfileContentSkeleton;
