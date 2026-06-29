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
    name: "Fase Pembibitan",
    description: "Sejak penyemaian hingga bibit siap tanam",
  },
  {
    id: "f02",
    code: "F02",
    name: "Fase Vegetatif",
    description: "Pertumbuhan daun, batang, dan akar",
  },
  {
    id: "f03",
    code: "F03",
    name: "Fase Generatif",
    description: "Pembungaan hingga pembentukan buah",
  },
];

export const symptoms: Symptom[] = [
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

export const diseases: Disease[] = [
  {
    id: "p01",
    code: "P01",
    name: "Layu Fusarium",
    description: "Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem.",
    cause: "Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.",
    solution: "Lakukan pemupukan berimbang (Urea, ZA, TSP, KCl, dan pupuk organik). Gunakan mulsa plastik perak di dataran tinggi atau jerami di dataran rendah. Lakukan pemusnahan (roguing) tanaman sakit sesegera mungkin. Cabut dan musnahkan tanaman terserang. Semprot fungisida sistemik berbahan aktif benomyl atau karbendazim setiap 7 hari. Lakukan solarisasi tanah dengan plastik transparan selama 2-4 minggu.",
    prevention: "Gunakan varietas tahan Fusarium seperti Lembang-1 atau Tanjung-2. Rotasi tanaman minimal 2-3 tahun dengan bukan famili Solanaceae. Pastikan drainase lahan berfungsi baik, bedengan tinggi 30-40 cm. Sterilkan alat pertanian setelah digunakan. Tambahkan pupuk organik matang dan dolomit untuk meningkatkan pH tanah.",
  },
  {
    id: "p02",
    code: "P02",
    name: "Antraknosa / Patek",
    description: "Penyakit yang disebabkan oleh jamur Colletotrichum spp. menyerang buah dan daun.",
    cause: "Jamur Colletotrichum capsici. Berkembang pada kelembaban tinggi dan suhu hangat.",
    solution: "Lakukan perendaman benih dalam air panas suhu 55°C selama 30 menit atau fungisida sistemik golongan Triazole. Gunakan ekstrak nabati tanaman marigold (Titonia diversifolata) atau campuran nimba + serai + laos (efikasi setara Mancozeb 0,2%). Petik dan musnahkan semua buah bergejala bercak cekung. Semprot fungisida kontak berbahan aktif mancozeb atau propineb setiap 5-7 hari, selang-seling dengan fungisida sistemik.",
    prevention: "Gunakan benih sehat yang sudah diberi perlakuan fungisida (seed treatment). Atur jarak tanam 60x70 cm agar sirkulasi udara optimal. Bersihkan sisa tanaman sakit dari musim sebelumnya. Lakukan pemulsaan plastik hitam perak. Panen buah tepat waktu.",
  },
  {
    id: "p03",
    code: "P03",
    name: "Bercak Daun Serkospora",
    description: "Penyakit bercak daun yang disebabkan oleh jamur Cercospora capsici.",
    cause: "Jamur Cercospora capsici. Menyebar melalui percikan air dan angin.",
    solution: "Aplikasikan pestisida nabati berupa ekstrak daun mindi (Melia azederach) dengan konsentrasi 1:20 (berat/volume). Pengendalian kimiawi menggunakan fungisida Difenokonazole (Score 250 EC) dosis 0,5 ml/liter air setiap 7 hari. Pangkas dan kumpulkan daun bergejala bercak coklat. Semprot fungisida secara merata ke permukaan atas dan bawah daun.",
    prevention: "Jaga kebersihan lahan dari gulma inang alternatif. Atur jarak tanam minimal 50x60 cm. Gunakan mulsa jerami atau plastik cegah percikan tanah. Lakukan pergiliran dengan tanaman bukan inang. Pilih lokasi dengan sirkulasi udara baik.",
  },
  {
    id: "p04",
    code: "P04",
    name: "Layu Bakteri",
    description: "Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.",
    cause: "Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.",
    solution: "Gunakan sterilisasi media semai serta pencabutan tanaman yang terserang agar koloni bakteri tidak menyebar. Lakukan pembukaan naungan persemaian secara bertahap agar tanaman lebih kuat terkena sinar matahari. Segera cabut dan musnahkan tanaman layu (bakar, jangan dikomposkan). Taburkan kapur pertanian pada bekas lubang tanam tanaman sakit. Semprot bakterisida berbahan aktif streptomisin sulfat atau oksitetrasiklin pada tanaman di sekitarnya.",
    prevention: "Rotasi tanaman minimal 3 tahun dengan tanaman bukan inang (padi, jagung, bawang). Pastikan drainase sempurna, hindari genangan. Gunakan varietas tahan seperti Cabai Keriting Lembang. Sterilkan alat pertanian setelah digunakan. Jangan gunakan air irigasi dari lahan terinfeksi.",
  },
  {
    id: "p05",
    code: "P05",
    name: "Virus Kuning / Gemini",
    description: "Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci).",
    cause: "Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.",
    solution: "Gunakan mulsa plastik perak untuk menghalangi vektor kutu kebul (Bemisia tabaci). Lepaskan parasitoid Encarcia formosa (1 ekor/4 tanaman) atau predator Menochilus sexmaculatus. Jika terpaksa, semprot vektor dengan insektisida berbahan aktif Imidakloprid atau Bifentrin. Cabut dan musnahkan tanaman yang sudah terinfeksi berat. Pasang perangkap kuning (yellow sticky trap) 40-60 lembar per hektar.",
    prevention: "Gunakan benih sehat dari sumber terpercaya. Pasang perangkap kuning sejak awal tanam. Tanam tanaman penghalang (barrier crop) jagung atau sorgum di sekeliling lahan. Gunakan mulsa plastik perak yang memantulkan cahaya. Lakukan tanam serempak dalam satu kawasan.",
  },
  {
    id: "p06",
    code: "P06",
    name: "Bengkak Akar",
    description: "Penyakit yang disebabkan oleh nematoda Meloidogyne spp.",
    cause: "Nematoda Meloidogyne spp. Hidup di dalam tanah dan menyerang sistem perakaran.",
    solution: "Hindari penggunaan lahan yang sudah terkontaminasi bengkak akar. Lakukan pembalikan tanah agar terkena paparan sinar matahari; lakukan perendaman lahan selama 2-3 hari. Aplikasikan Furadan dengan dosis 30 kg/ha pada area terinfeksi. Cabut tanaman bergejala kerdil dan periksa akar untuk konfirmasi puru. Tambahkan bahan organik berupa kompos atau pupuk kandang matang 20-30 ton/ha.",
    prevention: "Rotasi tanaman dengan tanaman anti-nematoda seperti tagetes (marigold) atau sawi selama 1-2 musim. Gunakan bibit sehat dengan akar bebas puru. Bajak tanah dalam-dalam saat musim kemarau. Rendam akar bibit dalam larutan nematisida sebelum tanam. Pertahankan kandungan bahan organik tanah di atas 3%.",
  },
  {
    id: "p07",
    code: "P07",
    name: "Busuk Fitoftora",
    description: "Penyakit busuk daun yang disebabkan oleh jamur Phytophthora capsici.",
    cause: "Jamur Phytophthora capsici. Menyebar melalui percikan air hujan dan tanah.",
    solution: "Kendalikan secara kimiawi menggunakan fungisida sistemik Metalaksil-M 4% + Mancozeb 64% (Ridomil Gold) konsentrasi 3 g/liter air. Lakukan rotasi penyemprotan secara bergantian dengan fungisida kontak seperti klorotalonil (Daconil 500 F). Pangkas dan musnahkan bagian tanaman terserang busuk. Hentikan penyiraman sementara jika kelembaban tanah tinggi. Taburkan kapur pertanian di sekitar pangkal batang.",
    prevention: "Tinggikan bedengan minimal 40-50 cm, terutama di musim hujan. Gunakan mulsa plastik cegah kontak tanaman dengan tanah. Atur jarak tanam lebar (70x70 cm). Pastikan saluran drainase antar bedengan berfungsi baik. Siram tanaman pada pagi hari.",
  },
  {
    id: "p08",
    code: "P08",
    name: "Penyakit Kerupuk",
    description: "Penyakit yang menyebabkan daun menggulung dan mengeras seperti kerupuk.",
    cause: "Diduga disebabkan oleh virus atau fitoplasma. Ditularkan oleh serangga vektor.",
    solution: "Lakukan pemusnahan tanaman muda yang bergejala melengkung/keriput sebelum umur maksimal 35 hari. Kendalikan vektor kutu daun (Aphis gossypii) menggunakan aplikasi insektisida dengan nozel spuyer kipas guna menghemat volume semprot hingga 30%. Semprot insektisida sistemik berbahan aktif Imidakloprid atau Asetamiprid. Lakukan pengendalian vektor secara intensif setiap 3-5 hari.",
    prevention: "Gunakan benih sehat bersertifikat dari penangkar resmi. Lakukan sanitasi lingkungan, bersihkan gulma sekitar lahan. Kendalikan serangga vektor sejak awal tanam dengan insektisida sistemik. Pasang perangkap serangga untuk monitoring. Lakukan tanam serempak dengan petani sekitar.",
  },
  {
    id: "p09",
    code: "P09",
    name: "Rebah Kecambah",
    description: "Penyakit yang menyerang bibit muda menyebabkan batang rebah dan mati.",
    cause: "Jamur Pythium spp. dan Rhizoctonia solani. Menyerang bibit pada fase pembibitan.",
    solution: "Gunakan lapisan sub-soil (1,5-2 meter di bawah permukaan tanah) yang dipasteurisasi selama 2 jam untuk media semai. Semaian yang terinfeksi harus dicabut dan dimusnahkan. Segera buang bibit yang sudah rebah atau menunjukkan gejala busuk batang. Semprot bibit dengan fungisida berbahan aktif benomil atau propamokarb 2 kali seminggu. Kurangi frekuensi dan volume penyiraman, jaga media semai tetap lembab tidak basah.",
    prevention: "Sterilkan media semai dengan mengukus atau menjemur 3-5 hari di bawah sinar matahari langsung. Gunakan benih sehat dengan perlakuan fungisida (seed treatment). Atur kelembaban persemaian: siram pagi hari, ventilasi cukup. Gunakan tray semai dengan drainase baik, jangan gunakan tanah kebun langsung. Semprot bibit dengan fungisida preventif seminggu sekali sejak umur 7 hari.",
  },
  {
    id: "p10",
    code: "P10",
    name: "Embun Tepung",
    description: "Penyakit yang ditandai lapisan putih seperti tepung pada permukaan daun.",
    cause: "Jamur Leveillula taurica. Berkembang pada kondisi kering dengan kelembaban udara tinggi.",
    solution: "Lakukan pemupukan berimbang secara ketat dan hindari pemberian nitrogen berlebih. Semprot dengan fungisida Difenokonazole (Score 250 EC) dosis 0,5 ml/liter dengan butiran kabut nozel kipas secara merata. Aplikasikan pada sore hari untuk hindari daun terbakar. Pangkas daun yang sudah tertutup lapisan tepung secara merata. Alternatif: gunakan fungisida nabati dari larutan susu skim 10% atau baking soda 1 sdm/liter air.",
    prevention: "Jaga sirkulasi udara antar tanaman dengan jarak tanam cukup (minimal 60 cm). Atur pemangkasan daun tua dan cabang bawah secara rutin. Hindari pemupukan nitrogen berlebihan. Tambahkan pupuk kalium untuk perkuat ketahanan jaringan daun. Lakukan penyiraman pagi hari dan hindari berlebihan.",
  },
  {
    id: "p11",
    code: "P11",
    name: "Busuk Basah Buah",
    description: "Penyakit busuk buah yang menyebabkan buah membusuk basah dan mengeluarkan cairan.",
    cause: "Bakteri Erwinia spp. dan jamur. Menyebar melalui luka pada buah dan percikan air.",
    solution: "Atur jarak tanam agar tidak terlalu rapat demi menjaga sirkulasi udara kebun. Lakukan pemanenan buah hanya pada kondisi cuaca kering dan tambahkan klorin pada air pencuci buah cabai untuk mencegah memar/luka. Petik dan musnahkan semua buah bergejala busuk basah. Semprot bakterisida berbahan aktif streptomisin atau oksitetrasiklin. Kurangi kelembaban dengan memangkas cabang terlalu rimbun.",
    prevention: "Hindari pelukaan buah saat pemanenan, penyiangan, atau pengendalian hama. Panen buah tepat waktu, jangan menunda terlalu lama. Jaga sanitasi kebun, bersihkan buah busuk yang jatuh. Gunakan mulsa plastik cegah percikan tanah. Atur jarak tanam cukup lebar (60x70 cm) dan pastikan drainase lahan baik.",
  },
];

export const diseaseSymptoms: DiseaseSymptom[] = [
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

export const rules: Rule[] = [
  { id: "r01", disease_id: "p09", phase_id: "f01", symptom_ids: ["g30"] },
  { id: "r02", disease_id: "p09", phase_id: "f01", symptom_ids: ["g31"] },
  { id: "r03", disease_id: "p06", phase_id: "f01", symptom_ids: ["g20"] },
  { id: "r04", disease_id: "p01", phase_id: "f02", symptom_ids: ["g01"] },
  { id: "r05", disease_id: "p04", phase_id: "f02", symptom_ids: ["g02"] },
  { id: "r06", disease_id: "p05", phase_id: "f02", symptom_ids: ["g21"] },
  { id: "r07", disease_id: "p03", phase_id: "f02", symptom_ids: ["g12"] },
  { id: "r08", disease_id: "p07", phase_id: "f02", symptom_ids: ["g25"] },
  { id: "r09", disease_id: "p08", phase_id: "f02", symptom_ids: ["g27"] },
  { id: "r10", disease_id: "p10", phase_id: "f02", symptom_ids: ["g32"] },
  { id: "r11", disease_id: "p02", phase_id: "f03", symptom_ids: ["g08"] },
  { id: "r12", disease_id: "p11", phase_id: "f03", symptom_ids: ["g34"] },
];

export const consultations: Consultation[] = [
  {
    id: "c001",
    selected_symptoms: [
      { symptom_id: "g01", user_cf: 1.0 },
      { symptom_id: "g02", user_cf: 1.0 },
      { symptom_id: "g07", user_cf: 0.8 },
    ],
    diagnosed_disease: "p01",
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
