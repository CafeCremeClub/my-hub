import {Industry} from "@/types/onboarding/Industry";

export const industryOptions: { key: Industry; value: Industry; label: string }[] = [
    {
        key: Industry.BANQUE_ASSURANCE_FINTECH,
        value: Industry.BANQUE_ASSURANCE_FINTECH,
        label: "Banque, Assurance & FinTech"
    },
    {key: Industry.SANTE_PHARMA_BIOTECH, value: Industry.SANTE_PHARMA_BIOTECH, label: "Santé, Pharma & Biotech"},
    {
        key: Industry.AGROALIMENTAIRE_AGRICULTURE,
        value: Industry.AGROALIMENTAIRE_AGRICULTURE,
        label: "Agroalimentaire & Agriculture"
    },
    {
        key: Industry.ENERGIE_ENVIRONNEMENT_GREENTECH,
        value: Industry.ENERGIE_ENVIRONNEMENT_GREENTECH,
        label: "Énergie, Environnement & Greentech"
    },
    {
        key: Industry.TRANSPORT_LOGISTIQUE_MOBILITE,
        value: Industry.TRANSPORT_LOGISTIQUE_MOBILITE,
        label: "Transport, Logistique & Mobilité"
    },
    {
        key: Industry.AUTOMOBILE_AERONAUTIQUE_SPATIAL,
        value: Industry.AUTOMOBILE_AERONAUTIQUE_SPATIAL,
        label: "Automobile, Aéronautique & Spatial"
    },
    {
        key: Industry.INDUSTRIE_MANUFACTURING,
        value: Industry.INDUSTRIE_MANUFACTURING,
        label: "Industrie & Manufacturing"
    },
    {key: Industry.BTP_CONSTRUCTION, value: Industry.BTP_CONSTRUCTION, label: "BTP & Construction"},
    {key: Industry.TELECOMS_RESEAUX, value: Industry.TELECOMS_RESEAUX, label: "Télécoms & Réseaux"},
    {key: Industry.ECOMMERCE_RETAIL_LUXE, value: Industry.ECOMMERCE_RETAIL_LUXE, label: "E-commerce, Retail & Luxe"},
    {
        key: Industry.MEDIAS_DIVERTISSEMENT_JEUX_VIDEO,
        value: Industry.MEDIAS_DIVERTISSEMENT_JEUX_VIDEO,
        label: "Médias, Divertissement & Jeux vidéo"
    },
    {key: Industry.EDUCATION_FORMATION, value: Industry.EDUCATION_FORMATION, label: "Éducation & Formation"},
    {
        key: Industry.SECTEUR_PUBLIC_ADMINISTRATION,
        value: Industry.SECTEUR_PUBLIC_ADMINISTRATION,
        label: "Secteur Public & Administration"
    },
    {key: Industry.ONG_ECONOMIE_SOCIALE, value: Industry.ONG_ECONOMIE_SOCIALE, label: "ONG & Économie sociale"},
    {
        key: Industry.TOURISME_HOTELLERIE_RESTAURATION,
        value: Industry.TOURISME_HOTELLERIE_RESTAURATION,
        label: "Tourisme, Hôtellerie & Restauration"
    },
    {key: Industry.CONSEIL_AUDIT_STARTUPS, value: Industry.CONSEIL_AUDIT_STARTUPS, label: "Conseil, Audit & Startups"},
];
