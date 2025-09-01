import {SearchGeoFeature} from "@/types/search/SearchGeoFeature";


export interface SearchCityResponse {
    type: string;
    features: SearchGeoFeature[];
    query: string;
}