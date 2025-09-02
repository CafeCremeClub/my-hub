import React from 'react';

const MissionDetailsClient = () => {
    return (
        <div className="h-full bg-[#F4F9FF] py-6 px-8 flex flex-col gap-6 rounded-[2.188rem]">
            <p className="font-medium tracking-tighter text-3xl text-[#101828] bricolage-grotesque">
                Profil recherché
            </p>
            <div className="w-full h-[1px] bg-[#EAECF0]"/>

            <div className="flex flex-col gap-3">
                <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
                    Client final
                </p>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
                        Oui
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-medium text-[#101828] tracking-tighter bricolage-grotesque">
                    Secteur d’activité
                </p>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="rounded-[0.375rem] px-2 py-0.75 border border-[#D0D5DD] bg-white text-xs text-[#344054]">
                        Banque et Assurance
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionDetailsClient;