import { useMutation } from '@tanstack/react-query';
import { SearchCityParams } from '@/types/search/SearchCityParams';
import { searchCity } from '@/service/searchService';

const useSearchCity = () => {
  return useMutation({
    mutationKey: ['search-city'],
    mutationFn: async (params: SearchCityParams) => await searchCity(params),
    retry: 0,
  });
};

export default useSearchCity;
