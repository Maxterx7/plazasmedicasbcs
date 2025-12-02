export interface Vacancy {
  location: string;
  id: string;
  specialty: string;
  shift: string;
  contractType: "Definitiva" | "No Definitiva";
  contractDetail?: string;
  medicalUnit: string;
}

export interface LocationInfo {
  name: string;
  description: string;
  imageUrl: string;
  tourismUrl: string;
}