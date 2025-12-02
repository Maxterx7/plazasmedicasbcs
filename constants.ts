import { LocationInfo, Vacancy } from './types';

export const LOCATIONS: LocationInfo[] = [
  {
    name: "La Paz",
    description: "Capital del estado, famosa por su malecón, atardeceres y la icónica playa Balandra.",
    // Photo: Balandra / La Paz - High Quality
    imageUrl: "https://images.unsplash.com/photo-1574714652495-972179832205?q=80&w=1200&auto=format&fit=crop",
    tourismUrl: "https://www.google.com/search?q=La+Paz+BCS+Turismo+Balandra&tbm=isch"
  },
  {
    name: "Ciudad Constitución",
    description: "Corazón agrícola del Valle de Santo Domingo, puerta de entrada a la Bahía Magdalena.",
    // Photo: Baja Desert / Agriculture - High Quality
    imageUrl: "https://images.unsplash.com/photo-1505535162959-9bbcb4fe3bbc?q=80&w=1200&auto=format&fit=crop", 
    tourismUrl: "https://www.google.com/search?q=Ciudad+Constitucion+BCS+paisajes&tbm=isch"
  },
  {
    name: "Cabo San Lucas",
    description: "Destino de clase mundial, famoso por El Arco, vida nocturna y pesca deportiva.",
    // Photo: The Arch - High Quality
    imageUrl: "https://images.unsplash.com/photo-1512101362874-9f8994324f9f?q=80&w=1200&auto=format&fit=crop",
    tourismUrl: "https://www.google.com/search?q=Cabo+San+Lucas+El+Arco+Turismo&tbm=isch"
  },
  {
    name: "San José del Cabo",
    description: "Ambiente bohemio y artístico, con un centro histórico encantador y el Estero.",
    // Photo: Colonial/Mission Style - High Quality
    imageUrl: "https://images.unsplash.com/photo-1584475459344-933333337a7a?q=80&w=1200&auto=format&fit=crop",
    tourismUrl: "https://www.google.com/search?q=San+Jose+del+Cabo+Centro+Historico+Fotos&tbm=isch"
  },
  {
    name: "Guerrero Negro",
    description: "Hogar de la salinera más grande del mundo y santuario de la ballena gris.",
    // Photo: Whale - High Quality
    imageUrl: "https://images.unsplash.com/photo-1623864098935-71648a804300?q=80&w=1200&auto=format&fit=crop",
    tourismUrl: "https://www.google.com/search?q=Guerrero+Negro+BCS+Ballenas&tbm=isch"
  },
  {
    name: "Isla de Cedros",
    description: "Isla pesquera única con paisajes impresionantes de costa virgen.",
    // Photo: Island/Coast - High Quality
    imageUrl: "https://images.unsplash.com/photo-1629243767554-8c88741e4288?q=80&w=1200&auto=format&fit=crop",
    tourismUrl: "https://www.google.com/search?q=Isla+de+Cedros+Baja+California+Paisajes&tbm=isch"
  }
];

// Helper to create vacancies easily
const createVacancy = (
  id: string, 
  unit: string, 
  spec: string, 
  shift: string, 
  loc: string, 
  type: "Definitiva" | "No Definitiva" = "Definitiva", 
  detail: string = ""
): Vacancy => ({
  location: loc,
  medicalUnit: unit,
  id,
  specialty: spec,
  shift,
  contractType: type,
  contractDetail: detail
});

export const VACANCIES: Vacancy[] = [
  // LA PAZ
  createVacancy("638", "Hosp. Gral. Zona MF 1", "Radiodiagnóstico", "Jornada Acumulada", "La Paz"),
  createVacancy("680", "Hosp. Gral. Zona MF 1", "Oncología Quirúrgica", "Matutino", "La Paz"),
  createVacancy("901", "Hosp. Gral. Zona MF 1", "Otorrinolaringología", "Vespertino", "La Paz"),
  createVacancy("903", "Hosp. Gral. Zona MF 1", "Oftalmología", "Matutino", "La Paz", "No Definitiva", "INDEFINIDO"),
  createVacancy("3141", "Hosp. Gral. Zona MF 1", "Gastroenterología", "Vespertino", "La Paz"),
  createVacancy("5129", "Hosp. Gral. Zona MF 1", "Infectología", "Matutino", "La Paz"),
  createVacancy("9499", "Hosp. Gral. Zona MF 1", "Urología", "Vespertino", "La Paz"),
  createVacancy("9505", "Hosp. Gral. Zona MF 1", "Dermatología", "Vespertino", "La Paz"),
  createVacancy("9508", "Hosp. Gral. Zona MF 1", "Nefrología", "Jornada Acumulada", "La Paz"),
  createVacancy("9512", "Hosp. Gral. Zona MF 1", "Neurología Pediátrica", "Matutino", "La Paz"),
  createVacancy("17664", "Hosp. Gral. Zona MF 1", "Hemodinamia", "Vespertino", "La Paz"),
  createVacancy("17821", "Hosp. Gral. Zona MF 1", "Radiodiagnóstico", "Matutino", "La Paz"),
  createVacancy("17825", "Hosp. Gral. Zona MF 1", "Radiodiagnóstico", "Jornada Acumulada", "La Paz"),
  createVacancy("18395", "Hosp. Gral. Zona MF 1", "Alergia e Inmunología (Laboratorio)", "Vespertino", "La Paz"),
  createVacancy("18427", "Hosp. Gral. Zona MF 1", "Proctología", "Vespertino", "La Paz"),
  createVacancy("4613", "UMF 34", "Endoscopía", "Vespertino", "La Paz"),
  createVacancy("4617", "UMF 34", "Oncología Médica", "Matutino", "La Paz"),

  // CIUDAD CONSTITUCIÓN
  createVacancy("1157", "Hosp. Gral. Subzona MF 2", "Urgencias", "Matutino", "Ciudad Constitución"),
  createVacancy("1159", "Hosp. Gral. Subzona MF 2", "Urgencias", "Vespertino", "Ciudad Constitución", "No Definitiva", "INDEFINIDO"),
  createVacancy("1173", "Hosp. Gral. Subzona MF 2", "Otorrinolaringología", "Matutino", "Ciudad Constitución"),
  createVacancy("3405", "Hosp. Gral. Subzona MF 2", "Radiodiagnóstico", "Matutino", "Ciudad Constitución"),
  createVacancy("4166", "Hosp. Gral. Subzona MF 2", "Ginecología y Obstetricia", "Vespertino", "Ciudad Constitución", "No Definitiva", "INDEFINIDO"),
  createVacancy("4168", "Hosp. Gral. Subzona MF 2", "Radiodiagnóstico", "Vespertino", "Ciudad Constitución"),
  createVacancy("6271", "Hosp. Gral. Subzona MF 2", "Medicina Interna", "Jornada Acumulada", "Ciudad Constitución"),

  // GUERRERO NEGRO
  createVacancy("1376", "Hosp. Gral. Subzona MF 5", "Pediatría Médica", "Vespertino", "Guerrero Negro"),
  createVacancy("1377", "Hosp. Gral. Subzona MF 5", "Pediatría Médica", "Matutino", "Guerrero Negro"),
  createVacancy("1378", "Hosp. Gral. Subzona MF 5", "Traumatología y Ortopedia", "Vespertino", "Guerrero Negro", "No Definitiva", "INDEFINIDO"),
  createVacancy("1380", "Hosp. Gral. Subzona MF 5", "Cirugía General", "Nocturno", "Guerrero Negro", "No Definitiva", "28/02/2027"),
  createVacancy("1388", "Hosp. Gral. Subzona MF 5", "Otorrinolaringología", "Vespertino", "Guerrero Negro"),
  createVacancy("1392", "Hosp. Gral. Subzona MF 5", "Medicina Interna", "Vespertino", "Guerrero Negro"),
  createVacancy("1396", "Hosp. Gral. Subzona MF 5", "Oftalmología", "Matutino", "Guerrero Negro"),
  createVacancy("1402", "Hosp. Gral. Subzona MF 5", "Pediatría Médica", "Jornada Acumulada", "Guerrero Negro"),
  createVacancy("3406", "Hosp. Gral. Subzona MF 5", "Radiodiagnóstico", "Vespertino", "Guerrero Negro", "No Definitiva", "28/02/2029"),
  createVacancy("5191", "Hosp. Gral. Subzona MF 5", "Medicina Interna", "Jornada Acumulada", "Guerrero Negro"),
  createVacancy("6596", "Hosp. Gral. Subzona MF 5", "Pediatría Médica", "Nocturno", "Guerrero Negro"),
  createVacancy("6597", "Hosp. Gral. Subzona MF 5", "Pediatría Médica", "Nocturno", "Guerrero Negro"),
  createVacancy("6598", "Hosp. Gral. Subzona MF 5", "Ginecología y Obstetricia", "Nocturno", "Guerrero Negro"),
  createVacancy("6599", "Hosp. Gral. Subzona MF 5", "Ginecología y Obstetricia", "Nocturno", "Guerrero Negro"),
  createVacancy("8600", "Hosp. Gral. Subzona MF 5", "Radiodiagnóstico", "Vespertino", "Guerrero Negro"),

  // ISLA DE CEDROS
  createVacancy("1672", "Hosp. Gral. Subzona MF 13", "Cirugía General", "Matutino", "Isla de Cedros", "No Definitiva", "28/02/2027"),
  createVacancy("4206", "Hosp. Gral. Subzona MF 13", "Ginecología y Obstetricia", "Vespertino", "Isla de Cedros"),
  createVacancy("4207", "Hosp. Gral. Subzona MF 13", "Pediatría Médica", "Matutino", "Isla de Cedros"),

  // CABO SAN LUCAS
  createVacancy("1809", "Hosp. Gral. Subzona MF 26", "Medicina Interna", "Vespertino", "Cabo San Lucas"),
  createVacancy("2294", "Hosp. Gral. Subzona MF 26", "Ginecología y Obstetricia", "Vespertino", "Cabo San Lucas", "No Definitiva", "INDEFINIDO"),
  createVacancy("6305", "Hosp. Gral. Subzona MF 26", "Medicina Interna", "Vespertino", "Cabo San Lucas"),
  createVacancy("8542", "Hosp. Gral. Subzona MF 26", "Pediatría en Urgencias", "Nocturno", "Cabo San Lucas"),
  createVacancy("8543", "Hosp. Gral. Subzona MF 26", "Pediatría en Urgencias", "Nocturno", "Cabo San Lucas"),

  // SAN JOSÉ DEL CABO
  createVacancy("5674", "Hosp. Gral. Subzona 38", "Radiodiagnóstico", "Vespertino", "San José del Cabo"),
  createVacancy("18460", "Hosp. Gral. Subzona 38", "Pediatría Médica", "Nocturno", "San José del Cabo"),
  createVacancy("18463", "Hosp. Gral. Subzona 38", "Pediatría Médica", "Nocturno", "San José del Cabo"),
];