import { SearchCityResponse } from '@/types/search/SearchCityResponse';
import { SearchCityParams } from '@/types/search/SearchCityParams';
import axiosInstance from '@/config/axiosInstance';

export const searchCity = async (
  params: SearchCityParams
): Promise<SearchCityResponse> => {
  try {
    const { q, limit, autocomplete } = params;
    const queryWithoutSpaces = q.replace(/\s/g, '');
    const urlParams = new URLSearchParams();

    if (
      queryWithoutSpaces.length >= 3 &&
      queryWithoutSpaces.length <= 200 &&
      /^[a-zA-Z0-9]/.test(queryWithoutSpaces)
    ) {
      urlParams.append('q', q);
      urlParams.append('limit', limit.toString());
      urlParams.append('autocomplete', autocomplete.toString());
    } else {
      throw new Error(
        'q must contain between 3 and 200 chars and start with a number or a letter'
      );
    }

    const queryString = urlParams.toString();

    const response = await axiosInstance.get<SearchCityResponse>(
      `https://api-adresse.data.gouv.fr/search?${queryString}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
