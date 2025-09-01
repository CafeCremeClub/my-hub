export interface SearchGeoFeature {
    type: "Feature";
    geometry: {
        type: "Point";
        coordinates: [number, number];
    };
    properties: {
        label: string;
        score: number;
        type: string;
        importance: number;
        id: string;
        banId: string;
        name: string;
        postcode: string;
        citycode: string;
        x: number;
        y: number;
        city: string;
        context: string;
        locality: string;
        street: string;
        _type: string;
    };
}