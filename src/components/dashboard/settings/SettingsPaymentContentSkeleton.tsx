import React from 'react';
import {Skeleton} from '@/components/ui/skeleton';

const SettingsPaymentContentSkeleton = () => {
    return (
        <div className="w-full max-w-2xl border rounded-lg p-6 bg-card">
            <div className="flex flex-col gap-3">
                <Skeleton className="h-6 w-48"/>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-20"/>
                        <Skeleton className="h-5 w-24"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-20"/>
                        <Skeleton className="h-5 w-28"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-20"/>
                        <Skeleton className="h-5 w-28"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-20"/>
                        <Skeleton className="h-5 w-28"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPaymentContentSkeleton;