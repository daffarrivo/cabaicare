import {
  Symptom,
  Disease,
  GrowthPhase,
  DiseaseSymptom,
  Rule,
  Consultation,
  User,
} from "@/types";

export const growthPhases: GrowthPhase[] = [
  {
    id: "f01",
    code: "F01",
    name: "Pembibitan",
    description: "Sejak penyemaian hingga bibit siap tanam",
  },
  {
    id: "f02",
    code: "F02",
    name: "Vegetatif",
    description: "Pertumbuhan daun, batang, dan akar",
  },
  {
    id: "f03",
    code: "F03",
    name: "Generatif",
    description: "Pembungaan hingga pembentukan buah",
  },
];

export const symptoms: Symptom[] = [
  { id: "g01", code: "G01", name: "Daun bagian bawah menguning", description: "" },
  { id: "g02", code: "G02", name: "Daun keriting", description: "" },
  { id: "g03", code: "G03", name: "Bercak coklat pada daun", description: "" },
  { id: "g04", code: "G04", name: "Daun layu", description: "" },
  { id: "g05", code: "G05", name: "Batang busuk", description: "" },
  { id: "g06", code: "G06", name: "Akar membusuk", description: "" },
  { id: "g07", code: "G07", name: "Tanaman kerdil", description: "" },
  { id: "g08", code: "G08", name: "Bercak cekung hitam pada buah", description: "" },
  { id: "g09", code: "G09", name: "Buah keriput", description: "" },
  { id: "g10", code: "G10", name: "Daun berlubang", description: "" },
  { id: "g11", code: "G11", name: "Buah membusuk basah", description: "" },
  { id: "g12", code: "G12", name: "Bercak putih pada daun", description: "" },
  { id: "g13", code: "G13", name: "Batang retak", description: "" },
  { id: "g14", code: "G14", name: "Bunga rontok", description: "" },
  { id: "g15", code: "G15", name: "Daun berguguran", description: "" },
  { id: "g16", code: "G16", name: "Pangkal batang menghitam", description: "" },
  { id: "g17", code: "G17", name: "Bercak kuning pada daun", description: "" },
  { id: "g18", code: "G18", name: "Buah busuk kering", description: "" },
  { id: "g19", code: "G19", name: "Daun mengecil", description: "" },
  { id: "g20", code: "G20", name: "Batang mengeluarkan lendir", description: "" },
  { id: "g21", code: "G21", name: "Daun menggulung ke atas", description: "" },
  { id: "g22", code: "G22", name: "Daun menguning dari tulang daun", description: "" },
  { id: "g23", code: "G23", name: "Bercak ungu pada buah", description: "" },
  { id: "g24", code: "G24", name: "Batang berlendir", description: "" },
  { id: "g25", code: "G25", name: "Buah mengeras", description: "" },
  { id: "g26", code: "G26", name: "Akar bengkak", description: "" },
  { id: "g27", code: "G27", name: "Daun menguning seluruhnya", description: "" },
  { id: "g28", code: "G28", name: "Buah rontok muda", description: "" },
  { id: "g29", code: "G29", name: "Bercak coklat pada batang", description: "" },
  { id: "g30", code: "G30", name: "Bibit rebah", description: "" },
  { id: "g31", code: "G31", name: "Leher akar membusuk dan mengering", description: "" },
  { id: "g32", code: "G32", name: "Bercak tepung putih pada daun", description: "" },
  { id: "g33", code: "G33", name: "Daun seperti kerupuk", description: "" },
  { id: "g34", code: "G34", name: "Tanaman mati mendadak", description: "" },
  { id: "g35", code: "G35", name: "Isi buah meluruh keluar", description: "" },
];

export const diseases: Disease[] = [
  {
    id: "p01",
    code: "P01",
    name: "Layu Fusarium",
    description: "Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem.",
    cause: "Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.",
    solution: "Cabut tanaman terserang. Gunakan fungisida sistemik. Sterilisasi tanah dengan solarisasi.",
    prevention: "Gunakan varietas tahan. Rotasi tanaman. Jaga drainase lahan.",
  },
  {
    id: "p02",
    code: "P02",
    name: "Antraknosa / Patek",
    description: "Penyakit yang disebabkan oleh jamur Colletotrichum spp. menyerang buah dan daun.",
    cause: "Jamur Colletotrichum capsici. Berkembang pada kelembaban tinggi dan suhu hangat.",
    solution: "Buang buah terserang. Semprot fungisida berbahan aktif mancozeb atau propineb.",
    prevention: "Jarak tanam cukup. Sanitasi lahan. Gunakan benih sehat.",
  },
  {
    id: "p03",
    code: "P03",
    name: "Bercak Daun Serkospora",
    description: "Penyakit bercak daun yang disebabkan oleh jamur Cercospora capsici.",
    cause: "Jamur Cercospora capsici. Menyebar melalui percikan air dan angin.",
    solution: "Semprot fungisida berbahan aktif difenoconazole. Pangkas daun sakit.",
    prevention: "Jaga kebersihan lahan. Atur jarak tanam. Hindari penyiraman dari atas.",
  },
  {
    id: "p04",
    code: "P04",
    name: "Layu Bakteri",
    description: "Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.",
    cause: "Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.",
    solution: "Cabut tanaman terserang. Sterilisasi tanah. Gunakan bakterisida.",
    prevention: "Rotasi tanaman. Drainase baik. Gunakan varietas tahan.",
  },
  {
    id: "p05",
    code: "P05",
    name: "Virus Kuning / Gemini",
    description: "Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci).",
    cause: "Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.",
    solution: "Kendalikan kutu kebul dengan insektisida. Cabut tanaman terinfeksi.",
    prevention: "Gunakan perangkap kuning. Tanam tanaman penghalang. Gunakan mulsa perak.",
  },
  {
    id: "p06",
    code: "P06",
    name: "Bengkak Akar",
    description: "Penyakit yang disebabkan oleh nematoda Meloidogyne spp.",
    cause: "Nematoda Meloidogyne spp. Hidup di dalam tanah dan menyerang sistem perakaran.",
    solution: "Gunakan nematisida. Solarisasi tanah. Tambahkan bahan organik.",
    prevention: "Rotasi tanaman dengan tanaman non-inang. Gunakan bibit sehat.",
  },
  {
    id: "p07",
    code: "P07",
    name: "Busuk Daun Fitoftora",
    description: "Penyakit busuk daun yang disebabkan oleh jamur Phytophthora capsici.",
    cause: "Jamur Phytophthora capsici. Menyebar melalui percikan air hujan dan tanah.",
    solution: "Semprot fungisida sistemik. Kurangi kelembaban. Perbaiki drainase.",
    prevention: "Tinggikan bedengan. Mulsa plastik. Jaga jarak tanam.",
  },
  {
    id: "p08",
    code: "P08",
    name: "Penyakit Kerupuk",
    description: "Penyakit yang menyebabkan daun menggulung dan mengeras seperti kerupuk.",
    cause: "Diduga disebabkan oleh virus atau fitoplasma. Ditularkan oleh serangga vektor.",
    solution: "Kendalikan serangga vektor. Cabut tanaman terinfeksi. Semprot insektisida.",
    prevention: "Gunakan benih sehat. Sanitasi lingkungan. Kendalikan vektor.",
  },
  {
    id: "p09",
    code: "P09",
    name: "Rebah Kecambah",
    description: "Penyakit yang menyerang bibit muda menyebabkan batang rebah dan mati.",
    cause: "Jamur Pythium spp. dan Rhizoctonia solani. Menyerang bibit pada fase pembibitan.",
    solution: "Semprot fungisida benomyl. Kurangi kelembaban media semai. Buang bibit sakit.",
    prevention: "Sterilkan media semai. Gunakan benih sehat. Atur kelembaban.",
  },
  {
    id: "p10",
    code: "P10",
    name: "Embun Tepung",
    description: "Penyakit yang ditandai lapisan putih seperti tepung pada permukaan daun.",
    cause: "Jamur Leveillula taurica. Berkembang pada kondisi kering dengan kelembaban udara tinggi.",
    solution: "Semprot fungisida belerang. Pangkas daun terinfeksi berat.",
    prevention: "Jaga sirkulasi udara. Atur jarak tanam. Hindari pemupukan nitrogen berlebih.",
  },
  {
    id: "p11",
    code: "P11",
    name: "Busuk Basah Buah",
    description: "Penyakit busuk buah yang menyebabkan buah membusuk basah dan mengeluarkan cairan.",
    cause: "Bakteri Erwinia spp. dan jamur. Menyebar melalui luka pada buah dan percikan air.",
    solution: "Buang buah terserang. Semprot bakterisida. Kurangi kelembaban.",
    prevention: "Hindari pelukaan buah. Panen tepat waktu. Jaga sanitasi kebun.",
  },
];

export const diseaseSymptoms: DiseaseSymptom[] = [
  // P01 Layu Fusarium
  { id: "ds01", disease_id: "p01", symptom_id: "g01", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds02", disease_id: "p01", symptom_id: "g04", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds03", disease_id: "p01", symptom_id: "g15", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds04", disease_id: "p01", symptom_id: "g34", phase_id: "f02", cf_expert: 0.5 },
  // P02 Antraknosa
  { id: "ds05", disease_id: "p02", symptom_id: "g08", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds06", disease_id: "p02", symptom_id: "g11", phase_id: "f03", cf_expert: 0.75 },
  { id: "ds07", disease_id: "p02", symptom_id: "g25", phase_id: "f03", cf_expert: 0.5 },
  { id: "ds08", disease_id: "p02", symptom_id: "g35", phase_id: "f03", cf_expert: 0.4 },
  // P03 Bercak Daun Serkospora
  { id: "ds09", disease_id: "p03", symptom_id: "g03", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds10", disease_id: "p03", symptom_id: "g17", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds11", disease_id: "p03", symptom_id: "g15", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds12", disease_id: "p03", symptom_id: "g10", phase_id: "f02", cf_expert: 0.7 },
  // P04 Layu Bakteri
  { id: "ds13", disease_id: "p04", symptom_id: "g04", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds14", disease_id: "p04", symptom_id: "g05", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds15", disease_id: "p04", symptom_id: "g20", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds16", disease_id: "p04", symptom_id: "g34", phase_id: "f02", cf_expert: 0.5 },
  // P05 Virus Kuning
  { id: "ds17", disease_id: "p05", symptom_id: "g01", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds18", disease_id: "p05", symptom_id: "g22", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds19", disease_id: "p05", symptom_id: "g21", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds20", disease_id: "p05", symptom_id: "g07", phase_id: "f02", cf_expert: 0.7 },
  // P06 Bengkak Akar
  { id: "ds21", disease_id: "p06", symptom_id: "g26", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds22", disease_id: "p06", symptom_id: "g07", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds23", disease_id: "p06", symptom_id: "g04", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds24", disease_id: "p06", symptom_id: "g27", phase_id: "f02", cf_expert: 0.5 },
  // P07 Busuk Daun Fitoftora
  { id: "ds25", disease_id: "p07", symptom_id: "g03", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds26", disease_id: "p07", symptom_id: "g05", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds27", disease_id: "p07", symptom_id: "g16", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds28", disease_id: "p07", symptom_id: "g29", phase_id: "f02", cf_expert: 0.5 },
  // P08 Penyakit Kerupuk
  { id: "ds29", disease_id: "p08", symptom_id: "g33", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds30", disease_id: "p08", symptom_id: "g02", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds31", disease_id: "p08", symptom_id: "g19", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds32", disease_id: "p08", symptom_id: "g07", phase_id: "f02", cf_expert: 0.5 },
  // P09 Rebah Kecambah
  { id: "ds33", disease_id: "p09", symptom_id: "g30", phase_id: "f01", cf_expert: 0.8 },
  { id: "ds34", disease_id: "p09", symptom_id: "g31", phase_id: "f01", cf_expert: 0.9 },
  { id: "ds35", disease_id: "p09", symptom_id: "g05", phase_id: "f01", cf_expert: 0.6 },
  { id: "ds36", disease_id: "p09", symptom_id: "g34", phase_id: "f01", cf_expert: 0.5 },
  // P10 Embun Tepung
  { id: "ds37", disease_id: "p10", symptom_id: "g12", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds38", disease_id: "p10", symptom_id: "g32", phase_id: "f02", cf_expert: 0.9 },
  { id: "ds39", disease_id: "p10", symptom_id: "g21", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds40", disease_id: "p10", symptom_id: "g15", phase_id: "f02", cf_expert: 0.4 },
  // P11 Busuk Basah Buah
  { id: "ds41", disease_id: "p11", symptom_id: "g11", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds42", disease_id: "p11", symptom_id: "g35", phase_id: "f03", cf_expert: 0.8 },
  { id: "ds43", disease_id: "p11", symptom_id: "g28", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds44", disease_id: "p11", symptom_id: "g23", phase_id: "f03", cf_expert: 0.5 },
];

export const rules: Rule[] = [
  { id: "r01", disease_id: "p05", phase_id: "f02", symptom_ids: ["g01"] },
  { id: "r02", disease_id: "p05", phase_id: "f02", symptom_ids: ["g22"] },
  { id: "r03", disease_id: "p02", phase_id: "f03", symptom_ids: ["g08"] },
  { id: "r04", disease_id: "p02", phase_id: "f03", symptom_ids: ["g11"] },
  { id: "r05", disease_id: "p09", phase_id: "f01", symptom_ids: ["g30"] },
  { id: "r06", disease_id: "p09", phase_id: "f01", symptom_ids: ["g31"] },
];

export const consultations: Consultation[] = [
  {
    id: "c001",
    selected_symptoms: [
      { symptom_id: "g01", user_cf: 1.0 },
      { symptom_id: "g22", user_cf: 1.0 },
    ],
    diagnosed_disease: "p05",
    cf_result: 0.84,
    consultation_date: "2026-06-15T10:30:00Z",
  },
  {
    id: "c002",
    selected_symptoms: [
      { symptom_id: "g08", user_cf: 0.8 },
      { symptom_id: "g11", user_cf: 0.6 },
    ],
    diagnosed_disease: "p02",
    cf_result: 0.87,
    consultation_date: "2026-06-15T11:00:00Z",
  },
  {
    id: "c003",
    selected_symptoms: [
      { symptom_id: "g30", user_cf: 0.8 },
      { symptom_id: "g31", user_cf: 1.0 },
    ],
    diagnosed_disease: "p09",
    cf_result: 0.94,
    consultation_date: "2026-06-16T08:15:00Z",
  },
];

export const users: User[] = [
  { id: "u001", name: "Admin CabaiCare", email: "admin@cabaicare.com", role: "admin" },
  { id: "u002", name: "Budi Santoso", email: "budi@example.com", role: "user" },
  { id: "u003", name: "Siti Rahayu", email: "siti@example.com", role: "user" },
];

export function getSymptomById(id: string): Symptom | undefined {
  return symptoms.find((s) => s.id === id);
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseases.find((d) => d.id === id);
}

export function getPhaseById(id: string): GrowthPhase | undefined {
  return growthPhases.find((p) => p.id === id);
}

export function getDiseaseSymptoms(diseaseId: string): DiseaseSymptom[] {
  return diseaseSymptoms.filter((ds) => ds.disease_id === diseaseId);
}

export function getSymptomsByPhase(phaseId: string): Symptom[] {
  const symptomIds = new Set<string>();
  diseaseSymptoms
    .filter((ds) => ds.phase_id === phaseId)
    .forEach((ds) => symptomIds.add(ds.symptom_id));
  return symptoms.filter((s) => symptomIds.has(s.id));
}

export function getCfExpert(diseaseId: string, symptomId: string): number {
  const ds = diseaseSymptoms.find(
    (d) => d.disease_id === diseaseId && d.symptom_id === symptomId
  );
  return ds?.cf_expert ?? 0;
}
