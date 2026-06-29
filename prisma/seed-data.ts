// Auto-generated from KnowledgeBase.xlsx by scripts/convert_kb.py
// DO NOT EDIT MANUALLY. Run: python scripts/convert_kb.py

export interface SeedPhase {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface SeedSymptom {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface SeedDisease {
  id: string;
  code: string;
  name: string;
  description: string;
  cause: string;
  solution: string;
  prevention: string;
}

export interface SeedRule {
  id: string;
  disease_id: string;
  symptom_id: string;
  phase_id: string;
  cf_expert: number;
}

export const seedPhases: SeedPhase[] = [
  { id: "f01", code: "F01", name: "Fase Pembibitan", description: "Sejak penyemaian hingga bibit siap tanam" },
  { id: "f02", code: "F02", name: "Fase Vegetatif", description: "Pertumbuhan daun, batang, dan akar" },
  { id: "f03", code: "F03", name: "Fase Generatif", description: "Pembungaan hingga pembentukan buah" },
];

export const seedSymptoms: SeedSymptom[] = [
  { id: "g01", code: "G01", name: "Daun bagian bawah menguning", description: "" },
  { id: "g02", code: "G02", name: "Daun layu secara bertahap dari bawah ke atas", description: "" },
  { id: "g03", code: "G03", name: "Ranting muda mulai mengering", description: "" },
  { id: "g04", code: "G04", name: "Tanaman mengalami kelayuan total", description: "" },
  { id: "g05", code: "G05", name: "Tanaman tiba-tiba layu meskipun tanah masih lembap", description: "" },
  { id: "g06", code: "G06", name: "Layu terjadi siang hari, tetapi kembali segar malam hari", description: "" },
  { id: "g07", code: "G07", name: "Pembuluh batang berubah warna menjadi kecoklatan", description: "" },
  { id: "g08", code: "G08", name: "Muncul bercak cekung berwarna hitam/coklat pada buah", description: "" },
  { id: "g09", code: "G09", name: "Buah cabai membusuk dan rontok sebelum panen", description: "" },
  { id: "g10", code: "G10", name: "Daun, ranting, dan cabang membusuk kering hitam", description: "" },
  { id: "g11", code: "G11", name: "Buah membusuk basah", description: "" },
  { id: "g12", code: "G12", name: "Muncul bercak kecil berwarna coklat atau hitam pada daun", description: "" },
  { id: "g13", code: "G13", name: "Bercak membesar, menyebabkan daun mengering & rontok", description: "" },
  { id: "g14", code: "G14", name: "Buah cabai memiliki luka kecil membesar dan membusuk", description: "" },
  { id: "g15", code: "G15", name: "Daun punya bercak bulat, warna abu-abu & pinggiran coklat", description: "" },
  { id: "g16", code: "G16", name: "Daun menjadi tua (menguning) sebelum waktunya", description: "" },
  { id: "g17", code: "G17", name: "Jika batang dipotong, keluar lendir putih dari dalamnya", description: "" },
  { id: "g18", code: "G18", name: "Tanaman layu dimulai dari pucuk daun & tetap hijau", description: "" },
  { id: "g19", code: "G19", name: "Batang bawah dan akar menjadi kecoklatan", description: "" },
  { id: "g20", code: "G20", name: "Tanaman tumbuh kerdil dan pertumbuhan terhambat", description: "" },
  { id: "g21", code: "G21", name: "Daun menggulung dan menjadi lebih tebal dari biasanya", description: "" },
  { id: "g22", code: "G22", name: "Daun kuning dari tulang daun menyebar ke seluruh daun", description: "" },
  { id: "g23", code: "G23", name: "Terdapat hama kutu kebul di sekitar tanaman (vektor)", description: "" },
  { id: "g24", code: "G24", name: "Timbul kutil-kutil pada perakaran", description: "" },
  { id: "g25", code: "G25", name: "Terdapat bercak kebasahan hijau suram pada batang/daun", description: "" },
  { id: "g26", code: "G26", name: "Buah menjadi kering dan mengeriput", description: "" },
  { id: "g27", code: "G27", name: "Tumbuh daun menumpuk dan menggumpal", description: "" },
  { id: "g28", code: "G28", name: "Daun melengkung ke bawah disertai kerutan-kerutan", description: "" },
  { id: "g29", code: "G29", name: "Daun hijau pekat mengkilat dan permukaan tidak rata", description: "" },
  { id: "g30", code: "G30", name: "Semaian cabai kerdil, gagal tumbuh, atau mati mendadak", description: "" },
  { id: "g31", code: "G31", name: "Batang bawah atau leher akar membusuk dan mengering", description: "" },
  { id: "g32", code: "G32", name: "Terdapat bercak/spot pucat kekuningan pada atas daun", description: "" },
  { id: "g33", code: "G33", name: "Terdapat kapang/serbuk putih abu-abu di bawah daun", description: "" },
  { id: "g34", code: "G34", name: "Daging buah membusuk lunak, basah, dan berlendir", description: "" },
  { id: "g35", code: "G35", name: "Isi buah meluruh keluar sisa kantung transparan", description: "" },
];

export const seedDiseases: SeedDisease[] = [
  { id: "p01", code: "P01", name: "Layu Fusarium", description: "Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem.", cause: "Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.", solution: "Cabut tanaman terserang. Gunakan fungisida sistemik. Sterilisasi tanah dengan solarisasi.", prevention: "Gunakan varietas tahan. Rotasi tanaman. Jaga drainase lahan." },
  { id: "p02", code: "P02", name: "Antraknosa / Patek", description: "Penyakit yang disebabkan oleh jamur Colletotrichum spp. menyerang buah dan daun.", cause: "Jamur Colletotrichum capsici. Berkembang pada kelembaban tinggi dan suhu hangat.", solution: "Buang buah terserang. Semprot fungisida berbahan aktif mancozeb atau propineb.", prevention: "Jarak tanam cukup. Sanitasi lahan. Gunakan benih sehat." },
  { id: "p03", code: "P03", name: "Bercak Daun Serkospora", description: "Penyakit bercak daun yang disebabkan oleh jamur Cercospora capsici.", cause: "Jamur Cercospora capsici. Menyebar melalui percikan air dan angin.", solution: "Semprot fungisida berbahan aktif difenoconazole. Pangkas daun sakit.", prevention: "Jaga kebersihan lahan. Atur jarak tanam. Hindari penyiraman dari atas." },
  { id: "p04", code: "P04", name: "Layu Bakteri", description: "Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.", cause: "Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.", solution: "Cabut tanaman terserang. Sterilisasi tanah. Gunakan bakterisida.", prevention: "Rotasi tanaman. Drainase baik. Gunakan varietas tahan." },
  { id: "p05", code: "P05", name: "Virus Kuning / Gemini", description: "Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci).", cause: "Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.", solution: "Kendalikan kutu kebul dengan insektisida. Cabut tanaman terinfeksi.", prevention: "Gunakan perangkap kuning. Tanam tanaman penghalang. Gunakan mulsa perak." },
  { id: "p06", code: "P06", name: "Bengkak Akar", description: "Penyakit yang disebabkan oleh nematoda Meloidogyne spp.", cause: "Nematoda Meloidogyne spp. Hidup di dalam tanah dan menyerang sistem perakaran.", solution: "Gunakan nematisida. Solarisasi tanah. Tambahkan bahan organik.", prevention: "Rotasi tanaman dengan tanaman non-inang. Gunakan bibit sehat." },
  { id: "p07", code: "P07", name: "Busuk Fitoftora", description: "Penyakit busuk daun yang disebabkan oleh jamur Phytophthora capsici.", cause: "Jamur Phytophthora capsici. Menyebar melalui percikan air hujan dan tanah.", solution: "Semprot fungisida sistemik. Kurangi kelembaban. Perbaiki drainase.", prevention: "Tinggikan bedengan. Mulsa plastik. Jaga jarak tanam." },
  { id: "p08", code: "P08", name: "Penyakit Kerupuk", description: "Penyakit yang menyebabkan daun menggulung dan mengeras seperti kerupuk.", cause: "Diduga disebabkan oleh virus atau fitoplasma. Ditularkan oleh serangga vektor.", solution: "Kendalikan serangga vektor. Cabut tanaman terinfeksi. Semprot insektisida.", prevention: "Gunakan benih sehat. Sanitasi lingkungan. Kendalikan vektor." },
  { id: "p09", code: "P09", name: "Rebah Kecambah", description: "Penyakit yang menyerang bibit muda menyebabkan batang rebah dan mati.", cause: "Jamur Pythium spp. dan Rhizoctonia solani. Menyerang bibit pada fase pembibitan.", solution: "Semprot fungisida benomyl. Kurangi kelembaban media semai. Buang bibit sakit.", prevention: "Sterilkan media semai. Gunakan benih sehat. Atur kelembaban." },
  { id: "p10", code: "P10", name: "Embun Tepung", description: "Penyakit yang ditandai lapisan putih seperti tepung pada permukaan daun.", cause: "Jamur Leveillula taurica. Berkembang pada kondisi kering dengan kelembaban udara tinggi.", solution: "Semprot fungisida belerang. Pangkas daun terinfeksi berat.", prevention: "Jaga sirkulasi udara. Atur jarak tanam. Hindari pemupukan nitrogen berlebih." },
  { id: "p11", code: "P11", name: "Busuk Basah Buah", description: "Penyakit busuk buah yang menyebabkan buah membusuk basah dan mengeluarkan cairan.", cause: "Bakteri Erwinia spp. dan jamur. Menyebar melalui luka pada buah dan percikan air.", solution: "Buang buah terserang. Semprot bakterisida. Kurangi kelembaban.", prevention: "Hindari pelukaan buah. Panen tepat waktu. Jaga sanitasi kebun." },
];

export const seedRules: SeedRule[] = [
  { id: "ds01", disease_id: "p09", symptom_id: "g30", phase_id: "f01", cf_expert: 0.8 },
  { id: "ds02", disease_id: "p09", symptom_id: "g31", phase_id: "f01", cf_expert: 0.9 },
  { id: "ds03", disease_id: "p06", symptom_id: "g20", phase_id: "f01", cf_expert: 0.4 },
  { id: "ds04", disease_id: "p06", symptom_id: "g20", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds05", disease_id: "p06", symptom_id: "g24", phase_id: "f01", cf_expert: 0.7 },
  { id: "ds06", disease_id: "p06", symptom_id: "g24", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds07", disease_id: "p01", symptom_id: "g01", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds08", disease_id: "p01", symptom_id: "g01", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds09", disease_id: "p01", symptom_id: "g02", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds10", disease_id: "p01", symptom_id: "g02", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds11", disease_id: "p01", symptom_id: "g03", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds12", disease_id: "p01", symptom_id: "g03", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds13", disease_id: "p01", symptom_id: "g04", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds14", disease_id: "p01", symptom_id: "g04", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds15", disease_id: "p01", symptom_id: "g05", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds16", disease_id: "p01", symptom_id: "g05", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds17", disease_id: "p01", symptom_id: "g06", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds18", disease_id: "p01", symptom_id: "g06", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds19", disease_id: "p01", symptom_id: "g07", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds20", disease_id: "p01", symptom_id: "g07", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds21", disease_id: "p04", symptom_id: "g02", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds22", disease_id: "p04", symptom_id: "g02", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds23", disease_id: "p04", symptom_id: "g04", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds24", disease_id: "p04", symptom_id: "g04", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds25", disease_id: "p04", symptom_id: "g05", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds26", disease_id: "p04", symptom_id: "g05", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds27", disease_id: "p04", symptom_id: "g07", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds28", disease_id: "p04", symptom_id: "g07", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds29", disease_id: "p04", symptom_id: "g17", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds30", disease_id: "p04", symptom_id: "g17", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds31", disease_id: "p04", symptom_id: "g18", phase_id: "f02", cf_expert: 0.75 },
  { id: "ds32", disease_id: "p04", symptom_id: "g18", phase_id: "f03", cf_expert: 0.75 },
  { id: "ds33", disease_id: "p04", symptom_id: "g19", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds34", disease_id: "p04", symptom_id: "g19", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds35", disease_id: "p03", symptom_id: "g12", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds36", disease_id: "p03", symptom_id: "g12", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds37", disease_id: "p03", symptom_id: "g13", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds38", disease_id: "p03", symptom_id: "g13", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds39", disease_id: "p03", symptom_id: "g15", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds40", disease_id: "p03", symptom_id: "g15", phase_id: "f03", cf_expert: 0.8 },
  { id: "ds41", disease_id: "p03", symptom_id: "g16", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds42", disease_id: "p03", symptom_id: "g16", phase_id: "f03", cf_expert: 0.5 },
  { id: "ds43", disease_id: "p05", symptom_id: "g01", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds44", disease_id: "p05", symptom_id: "g01", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds45", disease_id: "p05", symptom_id: "g20", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds46", disease_id: "p05", symptom_id: "g20", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds47", disease_id: "p05", symptom_id: "g21", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds48", disease_id: "p05", symptom_id: "g21", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds49", disease_id: "p05", symptom_id: "g22", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds50", disease_id: "p05", symptom_id: "g22", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds51", disease_id: "p05", symptom_id: "g23", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds52", disease_id: "p05", symptom_id: "g23", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds53", disease_id: "p08", symptom_id: "g20", phase_id: "f02", cf_expert: 0.4 },
  { id: "ds54", disease_id: "p08", symptom_id: "g20", phase_id: "f03", cf_expert: 0.4 },
  { id: "ds55", disease_id: "p08", symptom_id: "g27", phase_id: "f02", cf_expert: 0.8 },
  { id: "ds56", disease_id: "p08", symptom_id: "g27", phase_id: "f03", cf_expert: 0.8 },
  { id: "ds57", disease_id: "p08", symptom_id: "g28", phase_id: "f02", cf_expert: 0.7 },
  { id: "ds58", disease_id: "p08", symptom_id: "g28", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds59", disease_id: "p07", symptom_id: "g29", phase_id: "f02", cf_expert: 0.75 },
  { id: "ds60", disease_id: "p07", symptom_id: "g29", phase_id: "f03", cf_expert: 0.75 },
  { id: "ds61", disease_id: "p07", symptom_id: "g25", phase_id: "f02", cf_expert: 0.5 },
  { id: "ds62", disease_id: "p07", symptom_id: "g25", phase_id: "f03", cf_expert: 0.5 },
  { id: "ds63", disease_id: "p10", symptom_id: "g32", phase_id: "f02", cf_expert: 0.6 },
  { id: "ds64", disease_id: "p10", symptom_id: "g32", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds65", disease_id: "p10", symptom_id: "g33", phase_id: "f02", cf_expert: 0.9 },
  { id: "ds66", disease_id: "p10", symptom_id: "g33", phase_id: "f03", cf_expert: 0.9 },
  { id: "ds67", disease_id: "p02", symptom_id: "g08", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds68", disease_id: "p02", symptom_id: "g09", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds69", disease_id: "p02", symptom_id: "g10", phase_id: "f03", cf_expert: 0.75 },
  { id: "ds70", disease_id: "p02", symptom_id: "g11", phase_id: "f03", cf_expert: 0.75 },
  { id: "ds71", disease_id: "p03", symptom_id: "g14", phase_id: "f03", cf_expert: 0.6 },
  { id: "ds72", disease_id: "p07", symptom_id: "g26", phase_id: "f03", cf_expert: 0.7 },
  { id: "ds73", disease_id: "p11", symptom_id: "g34", phase_id: "f03", cf_expert: 0.85 },
  { id: "ds74", disease_id: "p11", symptom_id: "g35", phase_id: "f03", cf_expert: 0.95 },
];

// Generated stats: 3 phases, 11 diseases, 35 symptoms, 74 rules (from 42 original, multi-phase split)
