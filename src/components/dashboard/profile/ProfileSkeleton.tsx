import {Skeleton} from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
    return (
        <div className="grid grid-cols-8 gap-8">
            {/* Top Profile Header */}
            <div className="col-span-8 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Skeleton className="w-[10rem] h-[10rem] rounded-full border-4 border-white flex-none"/>
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-8 w-48"/>
                        <Skeleton className="h-5 w-32"/>
                    </div>
                </div>
                <Skeleton className="h-10 w-36 rounded-lg"/>
            </div>

            {/* Sidebar with TJM, Location, LinkedIn, Whatsapp, Email */}
            <div className="col-span-2 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-6">
                {/* TJM */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-20"/>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-6 w-12"/>
                    </div>
                </div>

                {/* Localisation */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-24"/>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-28"/>
                    </div>
                </div>

                {/* Linkedin */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-20"/>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-32"/>
                        <Skeleton className="h-4 w-4"/>
                    </div>
                </div>

                {/* Whatsapp */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-20"/>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-32"/>
                        <Skeleton className="h-4 w-4"/>
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-20"/>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-32"/>
                        <Skeleton className="h-4 w-4"/>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-6 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-8">
                {/* About Me */}
                <div className="flex flex-col gap-5">
                    <Skeleton className="h-6 w-36"/>
                    <Skeleton className="h-20 w-full"/>
                </div>

                {/* CV */}
                <div className="flex flex-col gap-5">
                    <Skeleton className="h-6 w-16"/>
                    <div
                        className="max-w-md flex items-start justify-between p-3.5 bg-white border border-[#EAECF0] rounded-[0.75rem]">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-6 w-6"/>
                            <div className="text-sm flex flex-col gap-1">
                                <Skeleton className="h-4 w-32"/>
                                <Skeleton className="h-3 w-24"/>
                            </div>
                        </div>
                        <Skeleton className="h-6 w-6 rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSkeleton;
