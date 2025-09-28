export type CrimeProps = {
  category: string;
  location_type: string;
  location: {
    latitude: string;
    street: {
      id: string;
      name: string;
    };
    longitude: string;
  };
  context: string;
  outcome_status?: {
    code: string;
    name: string;
  } | null; // updated to store both
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
};

export type AllCrimesProp = {
  crimes: CrimeProps[];
};

export type SearchProps = {
  age_range: string;
  outcome: string;
  gender: string;
  legislation: string;
  location: { latitude: string; longitude: string };
  officer_defined_ethnicity: string;
  type: string;
  object_of_search: string;
};

export type SearchListProps = {
  searches: SearchProps[];
};

export type OutcomeProps = {
  category: { code: string; name: string };
  date: string;
  person_id: string | null;
  crime: {
    id: number;
    persistent_id: string;
    category: string;
    location_type: string;
    location: { latitude: string; longitude: string; street: { id: number; name: string } };
    context: string;
    location_subtype: string;
    month: string;
  };
};

export type CrimeReportProps = {
  id: string;
  slug: string;
  incidentDate: string;
  incidentTime: string;
  briefDescription: string;
  image: string;
  crimeNumber: string | null;
  crimeCategoryId: string;
  published: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  eventDescription: string;
  category: {
    category: string;
  };
};

export type CrimeReportsProps = {
  reports: CrimeReportProps[];
};
