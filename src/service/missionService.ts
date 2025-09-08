import {GetMissionsResponse} from "@/types/mission/GetMissionsResponse";
import {GetMissionsPayload} from "@/types/mission/GetMissionsPayload";
import axiosInstance from "@/config/axiosInstance";
import {GetMissionsApiResponse} from "@/types/mission/GetMissionsApiResponse";
import {MissionDetails} from "@/types/mission/MissionDetails";
import {ApplyForMissionPayload} from "@/types/mission/ApplyForMissionPayload";


export const getMissions = async (payload: GetMissionsPayload): Promise<GetMissionsResponse> => {
    try {
        const response = await axiosInstance.post<GetMissionsApiResponse>("/missions/all", payload);
        return {
            page: response.data.page,
            perPage: response.data.perPage,
            count: response.data.count,
            data: response.data.data.map(mission => ({
                id: mission.props.id,
                title: mission.props.title,
                client: mission.props.client,
                tjm: mission.props.tjm,
                skills: mission.props.skills,
                industry: mission.props.industry,
                link: mission.props.link,
                whatsApp: mission.props.whatsApp,
                companyBio: mission.props.companyBio,
                status: mission.props.status,
                createdAt: mission.createdAt,
                updatedAt: mission.updatedAt,
                deletedAt: mission.props.deletedAt
            }))
        };
    } catch (error) {
        throw error;
    }
}

export const getMissionById = async (id: string): Promise<MissionDetails> => {
    try {
        const response = await axiosInstance.get<MissionDetails>(`/missions/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const applyForMission = async (payload: ApplyForMissionPayload): Promise<void> => {
    try {
        await axiosInstance.post(`/applications/apply/${payload.missionId}`, {
            note: payload.note
        })
    } catch (error) {
        throw error;
    }
}