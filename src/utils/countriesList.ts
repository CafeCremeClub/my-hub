import { Country } from '@/types/Country';
import countries from 'world-countries';

export const countryList: Country[] = countries
  .map((e) => {
    return {
      key: e.cca2,
      name: e.name.common,
      nationality: e.demonyms.eng?.m || e.demonyms.eng?.f || e.name.common,
      flag: e.flag,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
