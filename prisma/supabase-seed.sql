--
-- PostgreSQL database dump
--

\restrict 9395VzdKKlbFBVQ6UQYw0UKGbAGOZL7u0mwyeiCnN1lwbJATzbLogGZq9hk8fZN

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('b8219432-e20a-407a-8ba2-79d6471db88f', '97a7dec5bb8eff7d0b1c190461f4360e68f771da28a32ce50e22bc1c0adc3ee1', '2026-06-27 20:24:04.043608+07', '20260627132403_init', NULL, NULL, '2026-06-27 20:24:03.963756+07', 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES ('00000000-0000-0000-0000-000000000001', 'Admin CabaiCare', 'admin@cabaicare.com', '$2b$10$dW387amSJRHI8FfosiOCNO6IEdlQwjxBbK3valqw5G2v6LRSeXo/q', 'admin', '2026-06-27 13:25:44.001+07', '2026-06-27 13:25:44.001+07');
INSERT INTO public.users VALUES ('00000000-0000-0000-0000-000000000002', 'Budi Santoso', 'budi@example.com', '$2b$10$oQ/SJEKnw8auiBzR.V5xk.7YoF2aEBAawGrZpS8R.VEmQlhB7ZNRS', 'user', '2026-06-27 13:25:44.015+07', '2026-06-27 13:25:44.015+07');
INSERT INTO public.users VALUES ('00000000-0000-0000-0000-000000000003', 'Siti Rahayu', 'siti@example.com', '$2b$10$oQ/SJEKnw8auiBzR.V5xk.7YoF2aEBAawGrZpS8R.VEmQlhB7ZNRS', 'user', '2026-06-27 13:25:44.019+07', '2026-06-27 13:25:44.019+07');


--
-- Data for Name: audit_logs; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: consultations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.consultations VALUES ('3e88887d-dd2a-4e12-8eff-c48d848004a0', NULL, 'f02', '[{"user_cf": 1, "symptom_id": "g01"}, {"user_cf": 0.8, "symptom_id": "g04"}]', '{"disease": {"id": "p01", "code": "P01", "name": "Layu Fusarium", "cause": "Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.", "solution": "Cabut tanaman terserang. Gunakan fungisida sistemik. Sterilisasi tanah dengan solarisasi.", "prevention": "Gunakan varietas tahan. Rotasi tanaman. Jaga drainase lahan.", "description": "Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem."}, "confidence": 0.74, "matched_symptoms": [{"id": "g01", "code": "G01", "name": "Daun bagian bawah menguning", "description": ""}, {"id": "g04", "code": "G04", "name": "Tanaman mengalami kelayuan total", "description": ""}], "alternative_diagnoses": [{"disease": {"id": "p05", "code": "P05", "name": "Virus Kuning / Gemini", "cause": "Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.", "solution": "Kendalikan kutu kebul dengan insektisida. Cabut tanaman terinfeksi.", "prevention": "Gunakan perangkap kuning. Tanam tanaman penghalang. Gunakan mulsa perak.", "description": "Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci)."}, "confidence": 0.6}, {"disease": {"id": "p04", "code": "P04", "name": "Layu Bakteri", "cause": "Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.", "solution": "Cabut tanaman terserang. Sterilisasi tanah. Gunakan bakterisida.", "prevention": "Rotasi tanaman. Drainase baik. Gunakan varietas tahan.", "description": "Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum."}, "confidence": 0.48}]}', '2026-06-27 13:32:06.748+07');


--
-- Data for Name: diseases; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.diseases VALUES ('p01', 'P01', 'Layu Fusarium', 'Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem.', 'Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.', 'Cabut tanaman terserang. Gunakan fungisida sistemik. Sterilisasi tanah dengan solarisasi.', 'Gunakan varietas tahan. Rotasi tanaman. Jaga drainase lahan.', NULL, '2026-06-27 13:25:43.612+07', '2026-06-27 13:25:43.612+07');
INSERT INTO public.diseases VALUES ('p02', 'P02', 'Antraknosa / Patek', 'Penyakit yang disebabkan oleh jamur Colletotrichum spp. menyerang buah dan daun.', 'Jamur Colletotrichum capsici. Berkembang pada kelembaban tinggi dan suhu hangat.', 'Buang buah terserang. Semprot fungisida berbahan aktif mancozeb atau propineb.', 'Jarak tanam cukup. Sanitasi lahan. Gunakan benih sehat.', NULL, '2026-06-27 13:25:43.618+07', '2026-06-27 13:25:43.618+07');
INSERT INTO public.diseases VALUES ('p03', 'P03', 'Bercak Daun Serkospora', 'Penyakit bercak daun yang disebabkan oleh jamur Cercospora capsici.', 'Jamur Cercospora capsici. Menyebar melalui percikan air dan angin.', 'Semprot fungisida berbahan aktif difenoconazole. Pangkas daun sakit.', 'Jaga kebersihan lahan. Atur jarak tanam. Hindari penyiraman dari atas.', NULL, '2026-06-27 13:25:43.62+07', '2026-06-27 13:25:43.62+07');
INSERT INTO public.diseases VALUES ('p04', 'P04', 'Layu Bakteri', 'Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.', 'Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.', 'Cabut tanaman terserang. Sterilisasi tanah. Gunakan bakterisida.', 'Rotasi tanaman. Drainase baik. Gunakan varietas tahan.', NULL, '2026-06-27 13:25:43.621+07', '2026-06-27 13:25:43.621+07');
INSERT INTO public.diseases VALUES ('p05', 'P05', 'Virus Kuning / Gemini', 'Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci).', 'Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.', 'Kendalikan kutu kebul dengan insektisida. Cabut tanaman terinfeksi.', 'Gunakan perangkap kuning. Tanam tanaman penghalang. Gunakan mulsa perak.', NULL, '2026-06-27 13:25:43.623+07', '2026-06-27 13:25:43.623+07');
INSERT INTO public.diseases VALUES ('p06', 'P06', 'Bengkak Akar', 'Penyakit yang disebabkan oleh nematoda Meloidogyne spp.', 'Nematoda Meloidogyne spp. Hidup di dalam tanah dan menyerang sistem perakaran.', 'Gunakan nematisida. Solarisasi tanah. Tambahkan bahan organik.', 'Rotasi tanaman dengan tanaman non-inang. Gunakan bibit sehat.', NULL, '2026-06-27 13:25:43.624+07', '2026-06-27 13:25:43.624+07');
INSERT INTO public.diseases VALUES ('p07', 'P07', 'Busuk Fitoftora', 'Penyakit busuk daun yang disebabkan oleh jamur Phytophthora capsici.', 'Jamur Phytophthora capsici. Menyebar melalui percikan air hujan dan tanah.', 'Semprot fungisida sistemik. Kurangi kelembaban. Perbaiki drainase.', 'Tinggikan bedengan. Mulsa plastik. Jaga jarak tanam.', NULL, '2026-06-27 13:25:43.625+07', '2026-06-27 13:25:43.625+07');
INSERT INTO public.diseases VALUES ('p08', 'P08', 'Penyakit Kerupuk', 'Penyakit yang menyebabkan daun menggulung dan mengeras seperti kerupuk.', 'Diduga disebabkan oleh virus atau fitoplasma. Ditularkan oleh serangga vektor.', 'Kendalikan serangga vektor. Cabut tanaman terinfeksi. Semprot insektisida.', 'Gunakan benih sehat. Sanitasi lingkungan. Kendalikan vektor.', NULL, '2026-06-27 13:25:43.627+07', '2026-06-27 13:25:43.627+07');
INSERT INTO public.diseases VALUES ('p09', 'P09', 'Rebah Kecambah', 'Penyakit yang menyerang bibit muda menyebabkan batang rebah dan mati.', 'Jamur Pythium spp. dan Rhizoctonia solani. Menyerang bibit pada fase pembibitan.', 'Semprot fungisida benomyl. Kurangi kelembaban media semai. Buang bibit sakit.', 'Sterilkan media semai. Gunakan benih sehat. Atur kelembaban.', NULL, '2026-06-27 13:25:43.629+07', '2026-06-27 13:25:43.629+07');
INSERT INTO public.diseases VALUES ('p10', 'P10', 'Embun Tepung', 'Penyakit yang ditandai lapisan putih seperti tepung pada permukaan daun.', 'Jamur Leveillula taurica. Berkembang pada kondisi kering dengan kelembaban udara tinggi.', 'Semprot fungisida belerang. Pangkas daun terinfeksi berat.', 'Jaga sirkulasi udara. Atur jarak tanam. Hindari pemupukan nitrogen berlebih.', NULL, '2026-06-27 13:25:43.63+07', '2026-06-27 13:25:43.63+07');
INSERT INTO public.diseases VALUES ('p11', 'P11', 'Busuk Basah Buah', 'Penyakit busuk buah yang menyebabkan buah membusuk basah dan mengeluarkan cairan.', 'Bakteri Erwinia spp. dan jamur. Menyebar melalui luka pada buah dan percikan air.', 'Buang buah terserang. Semprot bakterisida. Kurangi kelembaban.', 'Hindari pelukaan buah. Panen tepat waktu. Jaga sanitasi kebun.', NULL, '2026-06-27 13:25:43.632+07', '2026-06-27 13:25:43.632+07');


--
-- Data for Name: growth_phases; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.growth_phases VALUES ('f01', 'F01', 'Fase Pembibitan', 'Sejak penyemaian hingga bibit siap tanam', '2026-06-27 13:25:43.47+07');
INSERT INTO public.growth_phases VALUES ('f02', 'F02', 'Fase Vegetatif', 'Pertumbuhan daun, batang, dan akar', '2026-06-27 13:25:43.558+07');
INSERT INTO public.growth_phases VALUES ('f03', 'F03', 'Fase Generatif', 'Pembungaan hingga pembentukan buah', '2026-06-27 13:25:43.56+07');


--
-- Data for Name: symptoms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.symptoms VALUES ('g01', 'G01', 'Daun bagian bawah menguning', '', '2026-06-27 13:25:43.562+07', '2026-06-27 13:25:43.562+07');
INSERT INTO public.symptoms VALUES ('g02', 'G02', 'Daun layu secara bertahap dari bawah ke atas', '', '2026-06-27 13:25:43.566+07', '2026-06-27 13:25:43.566+07');
INSERT INTO public.symptoms VALUES ('g03', 'G03', 'Ranting muda mulai mengering', '', '2026-06-27 13:25:43.568+07', '2026-06-27 13:25:43.568+07');
INSERT INTO public.symptoms VALUES ('g04', 'G04', 'Tanaman mengalami kelayuan total', '', '2026-06-27 13:25:43.57+07', '2026-06-27 13:25:43.57+07');
INSERT INTO public.symptoms VALUES ('g05', 'G05', 'Tanaman tiba-tiba layu meskipun tanah masih lembap', '', '2026-06-27 13:25:43.571+07', '2026-06-27 13:25:43.571+07');
INSERT INTO public.symptoms VALUES ('g06', 'G06', 'Layu terjadi siang hari, tetapi kembali segar malam hari', '', '2026-06-27 13:25:43.573+07', '2026-06-27 13:25:43.573+07');
INSERT INTO public.symptoms VALUES ('g07', 'G07', 'Pembuluh batang berubah warna menjadi kecoklatan', '', '2026-06-27 13:25:43.575+07', '2026-06-27 13:25:43.575+07');
INSERT INTO public.symptoms VALUES ('g08', 'G08', 'Muncul bercak cekung berwarna hitam/coklat pada buah', '', '2026-06-27 13:25:43.577+07', '2026-06-27 13:25:43.577+07');
INSERT INTO public.symptoms VALUES ('g09', 'G09', 'Buah cabai membusuk dan rontok sebelum panen', '', '2026-06-27 13:25:43.579+07', '2026-06-27 13:25:43.579+07');
INSERT INTO public.symptoms VALUES ('g10', 'G10', 'Daun, ranting, dan cabang membusuk kering hitam', '', '2026-06-27 13:25:43.58+07', '2026-06-27 13:25:43.58+07');
INSERT INTO public.symptoms VALUES ('g11', 'G11', 'Buah membusuk basah', '', '2026-06-27 13:25:43.582+07', '2026-06-27 13:25:43.582+07');
INSERT INTO public.symptoms VALUES ('g12', 'G12', 'Muncul bercak kecil berwarna coklat atau hitam pada daun', '', '2026-06-27 13:25:43.583+07', '2026-06-27 13:25:43.583+07');
INSERT INTO public.symptoms VALUES ('g13', 'G13', 'Bercak membesar, menyebabkan daun mengering & rontok', '', '2026-06-27 13:25:43.584+07', '2026-06-27 13:25:43.584+07');
INSERT INTO public.symptoms VALUES ('g14', 'G14', 'Buah cabai memiliki luka kecil membesar dan membusuk', '', '2026-06-27 13:25:43.585+07', '2026-06-27 13:25:43.585+07');
INSERT INTO public.symptoms VALUES ('g15', 'G15', 'Daun punya bercak bulat, warna abu-abu & pinggiran coklat', '', '2026-06-27 13:25:43.586+07', '2026-06-27 13:25:43.586+07');
INSERT INTO public.symptoms VALUES ('g16', 'G16', 'Daun menjadi tua (menguning) sebelum waktunya', '', '2026-06-27 13:25:43.587+07', '2026-06-27 13:25:43.587+07');
INSERT INTO public.symptoms VALUES ('g17', 'G17', 'Jika batang dipotong, keluar lendir putih dari dalamnya', '', '2026-06-27 13:25:43.588+07', '2026-06-27 13:25:43.588+07');
INSERT INTO public.symptoms VALUES ('g18', 'G18', 'Tanaman layu dimulai dari pucuk daun & tetap hijau', '', '2026-06-27 13:25:43.589+07', '2026-06-27 13:25:43.589+07');
INSERT INTO public.symptoms VALUES ('g19', 'G19', 'Batang bawah dan akar menjadi kecoklatan', '', '2026-06-27 13:25:43.59+07', '2026-06-27 13:25:43.59+07');
INSERT INTO public.symptoms VALUES ('g20', 'G20', 'Tanaman tumbuh kerdil dan pertumbuhan terhambat', '', '2026-06-27 13:25:43.591+07', '2026-06-27 13:25:43.591+07');
INSERT INTO public.symptoms VALUES ('g21', 'G21', 'Daun menggulung dan menjadi lebih tebal dari biasanya', '', '2026-06-27 13:25:43.592+07', '2026-06-27 13:25:43.592+07');
INSERT INTO public.symptoms VALUES ('g22', 'G22', 'Daun kuning dari tulang daun menyebar ke seluruh daun', '', '2026-06-27 13:25:43.594+07', '2026-06-27 13:25:43.594+07');
INSERT INTO public.symptoms VALUES ('g23', 'G23', 'Terdapat hama kutu kebul di sekitar tanaman (vektor)', '', '2026-06-27 13:25:43.595+07', '2026-06-27 13:25:43.595+07');
INSERT INTO public.symptoms VALUES ('g24', 'G24', 'Timbul kutil-kutil pada perakaran', '', '2026-06-27 13:25:43.596+07', '2026-06-27 13:25:43.596+07');
INSERT INTO public.symptoms VALUES ('g25', 'G25', 'Terdapat bercak kebasahan hijau suram pada batang/daun', '', '2026-06-27 13:25:43.597+07', '2026-06-27 13:25:43.597+07');
INSERT INTO public.symptoms VALUES ('g26', 'G26', 'Buah menjadi kering dan mengeriput', '', '2026-06-27 13:25:43.598+07', '2026-06-27 13:25:43.598+07');
INSERT INTO public.symptoms VALUES ('g27', 'G27', 'Tumbuh daun menumpuk dan menggumpal', '', '2026-06-27 13:25:43.599+07', '2026-06-27 13:25:43.599+07');
INSERT INTO public.symptoms VALUES ('g28', 'G28', 'Daun melengkung ke bawah disertai kerutan-kerutan', '', '2026-06-27 13:25:43.6+07', '2026-06-27 13:25:43.6+07');
INSERT INTO public.symptoms VALUES ('g29', 'G29', 'Daun hijau pekat mengkilat dan permukaan tidak rata', '', '2026-06-27 13:25:43.601+07', '2026-06-27 13:25:43.601+07');
INSERT INTO public.symptoms VALUES ('g30', 'G30', 'Semaian cabai kerdil, gagal tumbuh, atau mati mendadak', '', '2026-06-27 13:25:43.602+07', '2026-06-27 13:25:43.602+07');
INSERT INTO public.symptoms VALUES ('g31', 'G31', 'Batang bawah atau leher akar membusuk dan mengering', '', '2026-06-27 13:25:43.603+07', '2026-06-27 13:25:43.603+07');
INSERT INTO public.symptoms VALUES ('g32', 'G32', 'Terdapat bercak/spot pucat kekuningan pada atas daun', '', '2026-06-27 13:25:43.605+07', '2026-06-27 13:25:43.605+07');
INSERT INTO public.symptoms VALUES ('g33', 'G33', 'Terdapat kapang/serbuk putih abu-abu di bawah daun', '', '2026-06-27 13:25:43.606+07', '2026-06-27 13:25:43.606+07');
INSERT INTO public.symptoms VALUES ('g34', 'G34', 'Daging buah membusuk lunak, basah, dan berlendir', '', '2026-06-27 13:25:43.607+07', '2026-06-27 13:25:43.607+07');
INSERT INTO public.symptoms VALUES ('g35', 'G35', 'Isi buah meluruh keluar sisa kantung transparan', '', '2026-06-27 13:25:43.608+07', '2026-06-27 13:25:43.608+07');


--
-- Data for Name: disease_symptoms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disease_symptoms VALUES ('4d115cab-35fe-45dd-aae4-fdeed09a9394', 'p09', 'g30', 'f01', 0.80, '2026-06-27 13:25:43.643+07', '2026-06-27 13:25:43.643+07');
INSERT INTO public.disease_symptoms VALUES ('d691990c-cf5f-4613-af1c-b43303eaf3c6', 'p09', 'g31', 'f01', 0.90, '2026-06-27 13:25:43.657+07', '2026-06-27 13:25:43.657+07');
INSERT INTO public.disease_symptoms VALUES ('cd4200ad-ecc4-425d-bead-05c3250b361a', 'p06', 'g20', 'f01', 0.40, '2026-06-27 13:25:43.66+07', '2026-06-27 13:25:43.66+07');
INSERT INTO public.disease_symptoms VALUES ('f67cd0c0-850f-40c3-9a9f-6c3c5e422292', 'p06', 'g20', 'f02', 0.40, '2026-06-27 13:25:43.662+07', '2026-06-27 13:25:43.662+07');
INSERT INTO public.disease_symptoms VALUES ('025d703f-0525-44ae-aac8-3a0f9ffa781f', 'p06', 'g24', 'f01', 0.70, '2026-06-27 13:25:43.665+07', '2026-06-27 13:25:43.665+07');
INSERT INTO public.disease_symptoms VALUES ('1a53f203-cac1-43f0-b6d0-773d26296e27', 'p06', 'g24', 'f02', 0.70, '2026-06-27 13:25:43.667+07', '2026-06-27 13:25:43.667+07');
INSERT INTO public.disease_symptoms VALUES ('b7f34ffc-4217-48de-9a74-7f1136179169', 'p01', 'g01', 'f02', 0.40, '2026-06-27 13:25:43.669+07', '2026-06-27 13:25:43.669+07');
INSERT INTO public.disease_symptoms VALUES ('271f73ab-b434-454c-8fc7-01691df2dc61', 'p01', 'g01', 'f03', 0.40, '2026-06-27 13:25:43.671+07', '2026-06-27 13:25:43.671+07');
INSERT INTO public.disease_symptoms VALUES ('6a8aec25-613e-4f12-b589-7b4374d3da95', 'p01', 'g02', 'f02', 0.40, '2026-06-27 13:25:43.673+07', '2026-06-27 13:25:43.673+07');
INSERT INTO public.disease_symptoms VALUES ('e3f7f071-3224-4254-aa6f-f864ce1a3c53', 'p01', 'g02', 'f03', 0.40, '2026-06-27 13:25:43.674+07', '2026-06-27 13:25:43.674+07');
INSERT INTO public.disease_symptoms VALUES ('f1e50dd4-c040-4a21-8e80-5e713135c28e', 'p01', 'g03', 'f02', 0.40, '2026-06-27 13:25:43.676+07', '2026-06-27 13:25:43.676+07');
INSERT INTO public.disease_symptoms VALUES ('e257252f-092f-4283-a55f-ec55484078ac', 'p01', 'g03', 'f03', 0.40, '2026-06-27 13:25:43.678+07', '2026-06-27 13:25:43.678+07');
INSERT INTO public.disease_symptoms VALUES ('a038ff7a-5fc4-455c-85e8-e69cfca1bb1f', 'p01', 'g04', 'f02', 0.70, '2026-06-27 13:25:43.681+07', '2026-06-27 13:25:43.681+07');
INSERT INTO public.disease_symptoms VALUES ('7b80e350-999c-4f14-b863-2530bc62cb0c', 'p01', 'g04', 'f03', 0.70, '2026-06-27 13:25:43.682+07', '2026-06-27 13:25:43.682+07');
INSERT INTO public.disease_symptoms VALUES ('e0ad8d6f-ca54-4d11-b921-f933cc147640', 'p01', 'g05', 'f02', 0.60, '2026-06-27 13:25:43.685+07', '2026-06-27 13:25:43.685+07');
INSERT INTO public.disease_symptoms VALUES ('d4de9236-f711-4e7e-bc0a-30703a46e6c8', 'p01', 'g05', 'f03', 0.60, '2026-06-27 13:25:43.687+07', '2026-06-27 13:25:43.687+07');
INSERT INTO public.disease_symptoms VALUES ('80cbecb8-196e-47f7-a1cb-59330b977839', 'p01', 'g06', 'f02', 0.40, '2026-06-27 13:25:43.688+07', '2026-06-27 13:25:43.688+07');
INSERT INTO public.disease_symptoms VALUES ('659f2957-15a8-4f9b-94ad-3caf6152dc87', 'p01', 'g06', 'f03', 0.40, '2026-06-27 13:25:43.689+07', '2026-06-27 13:25:43.689+07');
INSERT INTO public.disease_symptoms VALUES ('da601531-edf3-4e10-a954-ab8772de5ced', 'p01', 'g07', 'f02', 0.70, '2026-06-27 13:25:43.691+07', '2026-06-27 13:25:43.691+07');
INSERT INTO public.disease_symptoms VALUES ('37de2038-0d7f-4c56-991e-b437dcc4b04b', 'p01', 'g07', 'f03', 0.70, '2026-06-27 13:25:43.692+07', '2026-06-27 13:25:43.692+07');
INSERT INTO public.disease_symptoms VALUES ('8c0c0daa-3862-44ff-bd19-e63c77c11c88', 'p04', 'g02', 'f02', 0.70, '2026-06-27 13:25:43.693+07', '2026-06-27 13:25:43.693+07');
INSERT INTO public.disease_symptoms VALUES ('33894c97-192f-427d-85bf-44760995abcc', 'p04', 'g02', 'f03', 0.70, '2026-06-27 13:25:43.694+07', '2026-06-27 13:25:43.694+07');
INSERT INTO public.disease_symptoms VALUES ('caae8b8b-2177-4467-ac89-5831c9001d45', 'p04', 'g04', 'f02', 0.60, '2026-06-27 13:25:43.697+07', '2026-06-27 13:25:43.697+07');
INSERT INTO public.disease_symptoms VALUES ('67909c94-ac91-4630-8c61-95125fee03c2', 'p04', 'g04', 'f03', 0.60, '2026-06-27 13:25:43.698+07', '2026-06-27 13:25:43.698+07');
INSERT INTO public.disease_symptoms VALUES ('0de975f2-91a0-4035-bf65-acfc1821f591', 'p04', 'g05', 'f02', 0.70, '2026-06-27 13:25:43.7+07', '2026-06-27 13:25:43.7+07');
INSERT INTO public.disease_symptoms VALUES ('b72f272c-eec7-4fd2-9ccc-3e2d155b1eeb', 'p04', 'g05', 'f03', 0.70, '2026-06-27 13:25:43.701+07', '2026-06-27 13:25:43.701+07');
INSERT INTO public.disease_symptoms VALUES ('b58180be-9f2e-4ea0-ae62-2d3f8ae248e3', 'p04', 'g07', 'f02', 0.60, '2026-06-27 13:25:43.703+07', '2026-06-27 13:25:43.703+07');
INSERT INTO public.disease_symptoms VALUES ('522c514d-8731-41ea-9f2a-bfd45f00b672', 'p04', 'g07', 'f03', 0.60, '2026-06-27 13:25:43.704+07', '2026-06-27 13:25:43.704+07');
INSERT INTO public.disease_symptoms VALUES ('96d83832-fe9e-4c35-bfee-42adb3161ab8', 'p04', 'g17', 'f02', 0.70, '2026-06-27 13:25:43.705+07', '2026-06-27 13:25:43.705+07');
INSERT INTO public.disease_symptoms VALUES ('90dbde86-52c9-45f1-adf4-570221e90e2b', 'p04', 'g17', 'f03', 0.70, '2026-06-27 13:25:43.707+07', '2026-06-27 13:25:43.707+07');
INSERT INTO public.disease_symptoms VALUES ('9a5ff271-d0a9-4a9f-aaa7-40db110a1f75', 'p04', 'g18', 'f02', 0.75, '2026-06-27 13:25:43.708+07', '2026-06-27 13:25:43.708+07');
INSERT INTO public.disease_symptoms VALUES ('7bfbfbd9-3400-48de-a111-9edc13175f45', 'p04', 'g18', 'f03', 0.75, '2026-06-27 13:25:43.709+07', '2026-06-27 13:25:43.709+07');
INSERT INTO public.disease_symptoms VALUES ('b06b4160-ffcc-4b92-a3c9-8d522a61b626', 'p04', 'g19', 'f02', 0.70, '2026-06-27 13:25:43.711+07', '2026-06-27 13:25:43.711+07');
INSERT INTO public.disease_symptoms VALUES ('27cfcd51-fdb7-4372-8faa-9a86551b1cfd', 'p04', 'g19', 'f03', 0.70, '2026-06-27 13:25:43.712+07', '2026-06-27 13:25:43.712+07');
INSERT INTO public.disease_symptoms VALUES ('2df517fd-941d-4ab3-a50b-b7a1e2913c87', 'p03', 'g12', 'f02', 0.60, '2026-06-27 13:25:43.713+07', '2026-06-27 13:25:43.713+07');
INSERT INTO public.disease_symptoms VALUES ('c5a286ef-6c80-4aa9-8581-96ca3d866a5a', 'p03', 'g12', 'f03', 0.60, '2026-06-27 13:25:43.715+07', '2026-06-27 13:25:43.715+07');
INSERT INTO public.disease_symptoms VALUES ('29fc12a7-b52f-424a-b038-44460b4a3456', 'p03', 'g13', 'f02', 0.40, '2026-06-27 13:25:43.716+07', '2026-06-27 13:25:43.716+07');
INSERT INTO public.disease_symptoms VALUES ('f2dbe098-f191-4a8e-ae58-9657f27bdc02', 'p03', 'g13', 'f03', 0.40, '2026-06-27 13:25:43.717+07', '2026-06-27 13:25:43.717+07');
INSERT INTO public.disease_symptoms VALUES ('c9391cd6-1a57-4ceb-9158-628bd97e951f', 'p03', 'g15', 'f02', 0.80, '2026-06-27 13:25:43.719+07', '2026-06-27 13:25:43.719+07');
INSERT INTO public.disease_symptoms VALUES ('16bdacc1-b4a7-49f4-ae06-afd776854a83', 'p03', 'g15', 'f03', 0.80, '2026-06-27 13:25:43.72+07', '2026-06-27 13:25:43.72+07');
INSERT INTO public.disease_symptoms VALUES ('62658238-a818-47d6-bd12-7cdf7bbe01c9', 'p03', 'g16', 'f02', 0.50, '2026-06-27 13:25:43.722+07', '2026-06-27 13:25:43.722+07');
INSERT INTO public.disease_symptoms VALUES ('4807f65b-87a6-47ea-ae96-4112a9e92fd6', 'p03', 'g16', 'f03', 0.50, '2026-06-27 13:25:43.724+07', '2026-06-27 13:25:43.724+07');
INSERT INTO public.disease_symptoms VALUES ('8dd73cfe-bba0-440d-8944-98f293b888be', 'p05', 'g01', 'f02', 0.60, '2026-06-27 13:25:43.725+07', '2026-06-27 13:25:43.725+07');
INSERT INTO public.disease_symptoms VALUES ('00699a40-8343-45c5-b72b-da6f032a55b6', 'p05', 'g01', 'f03', 0.60, '2026-06-27 13:25:43.727+07', '2026-06-27 13:25:43.727+07');
INSERT INTO public.disease_symptoms VALUES ('7a4eb6e7-05d0-49c7-ab0d-b92f13d03214', 'p05', 'g20', 'f02', 0.60, '2026-06-27 13:25:43.728+07', '2026-06-27 13:25:43.728+07');
INSERT INTO public.disease_symptoms VALUES ('44f85f0e-7a9f-4719-928a-df661d444837', 'p05', 'g20', 'f03', 0.60, '2026-06-27 13:25:43.729+07', '2026-06-27 13:25:43.729+07');
INSERT INTO public.disease_symptoms VALUES ('1700f42b-1b71-447d-bf29-ecee4bdd243e', 'p05', 'g21', 'f02', 0.60, '2026-06-27 13:25:43.731+07', '2026-06-27 13:25:43.731+07');
INSERT INTO public.disease_symptoms VALUES ('bfa74384-483b-42d4-ba46-c27e466a98fa', 'p05', 'g21', 'f03', 0.60, '2026-06-27 13:25:43.732+07', '2026-06-27 13:25:43.732+07');
INSERT INTO public.disease_symptoms VALUES ('76d9179a-8b1b-4221-a4da-52cecd4b173c', 'p05', 'g22', 'f02', 0.60, '2026-06-27 13:25:43.734+07', '2026-06-27 13:25:43.734+07');
INSERT INTO public.disease_symptoms VALUES ('c7fa8783-c8c4-446e-9fb0-8a09787292d9', 'p05', 'g22', 'f03', 0.60, '2026-06-27 13:25:43.735+07', '2026-06-27 13:25:43.735+07');
INSERT INTO public.disease_symptoms VALUES ('67380680-6176-4312-9730-54d150a97616', 'p05', 'g23', 'f02', 0.70, '2026-06-27 13:25:43.737+07', '2026-06-27 13:25:43.737+07');
INSERT INTO public.disease_symptoms VALUES ('ea02573f-5add-4a45-8f46-63f5cfa12447', 'p05', 'g23', 'f03', 0.70, '2026-06-27 13:25:43.738+07', '2026-06-27 13:25:43.738+07');
INSERT INTO public.disease_symptoms VALUES ('306add54-0eea-4cfc-af58-2036e69259df', 'p08', 'g20', 'f02', 0.40, '2026-06-27 13:25:43.739+07', '2026-06-27 13:25:43.739+07');
INSERT INTO public.disease_symptoms VALUES ('40a0134b-be78-4a13-acf8-5dabfc810513', 'p08', 'g20', 'f03', 0.40, '2026-06-27 13:25:43.741+07', '2026-06-27 13:25:43.741+07');
INSERT INTO public.disease_symptoms VALUES ('d9690d79-340a-4f9a-9a5a-86ac4578f7ba', 'p08', 'g27', 'f02', 0.80, '2026-06-27 13:25:43.742+07', '2026-06-27 13:25:43.742+07');
INSERT INTO public.disease_symptoms VALUES ('c3ebd807-23c0-45d7-89e2-ecde313ea17e', 'p08', 'g27', 'f03', 0.80, '2026-06-27 13:25:43.743+07', '2026-06-27 13:25:43.743+07');
INSERT INTO public.disease_symptoms VALUES ('719fd6fe-79e0-42de-afb1-ac9a07b58c0c', 'p08', 'g28', 'f02', 0.70, '2026-06-27 13:25:43.744+07', '2026-06-27 13:25:43.744+07');
INSERT INTO public.disease_symptoms VALUES ('b32ff073-b31d-4357-b277-61a5edcdb3d7', 'p08', 'g28', 'f03', 0.70, '2026-06-27 13:25:43.745+07', '2026-06-27 13:25:43.745+07');
INSERT INTO public.disease_symptoms VALUES ('80364167-327c-4fc6-bcc6-039c999ead99', 'p07', 'g29', 'f02', 0.75, '2026-06-27 13:25:43.747+07', '2026-06-27 13:25:43.747+07');
INSERT INTO public.disease_symptoms VALUES ('562c70e5-b3e4-4826-bbad-45f27a810dcc', 'p07', 'g29', 'f03', 0.75, '2026-06-27 13:25:43.748+07', '2026-06-27 13:25:43.748+07');
INSERT INTO public.disease_symptoms VALUES ('6598f0d4-c738-4ebb-8336-d82a6c1c6876', 'p07', 'g25', 'f02', 0.50, '2026-06-27 13:25:43.75+07', '2026-06-27 13:25:43.75+07');
INSERT INTO public.disease_symptoms VALUES ('7c244414-40ab-4548-aeda-6ad9edabdf7f', 'p07', 'g25', 'f03', 0.50, '2026-06-27 13:25:43.751+07', '2026-06-27 13:25:43.751+07');
INSERT INTO public.disease_symptoms VALUES ('d916c891-d52e-4f78-8fe8-9f77277e7c28', 'p10', 'g32', 'f02', 0.60, '2026-06-27 13:25:43.752+07', '2026-06-27 13:25:43.752+07');
INSERT INTO public.disease_symptoms VALUES ('bc2f896e-9d2f-48e7-b298-b82521f5afe0', 'p10', 'g32', 'f03', 0.60, '2026-06-27 13:25:43.753+07', '2026-06-27 13:25:43.753+07');
INSERT INTO public.disease_symptoms VALUES ('a868438f-1ef6-43d4-9734-4d98aef75d07', 'p10', 'g33', 'f02', 0.90, '2026-06-27 13:25:43.754+07', '2026-06-27 13:25:43.754+07');
INSERT INTO public.disease_symptoms VALUES ('baf2ff7a-f4de-4ec1-9a8e-00a1fe6c533c', 'p10', 'g33', 'f03', 0.90, '2026-06-27 13:25:43.755+07', '2026-06-27 13:25:43.755+07');
INSERT INTO public.disease_symptoms VALUES ('65cee8c4-e308-433e-bf6c-26a261f4ea3e', 'p02', 'g08', 'f03', 0.60, '2026-06-27 13:25:43.756+07', '2026-06-27 13:25:43.756+07');
INSERT INTO public.disease_symptoms VALUES ('b27f6f88-ef09-4904-b518-f984bd9be9f2', 'p02', 'g09', 'f03', 0.60, '2026-06-27 13:25:43.757+07', '2026-06-27 13:25:43.757+07');
INSERT INTO public.disease_symptoms VALUES ('88c6b158-cb7a-4120-958d-4a0da9c7b0a4', 'p02', 'g10', 'f03', 0.75, '2026-06-27 13:25:43.758+07', '2026-06-27 13:25:43.758+07');
INSERT INTO public.disease_symptoms VALUES ('981f05c1-d456-438a-8d7e-98c988e67718', 'p02', 'g11', 'f03', 0.75, '2026-06-27 13:25:43.759+07', '2026-06-27 13:25:43.759+07');
INSERT INTO public.disease_symptoms VALUES ('c3eeca22-33d9-4540-a85e-44e8a6cbf376', 'p03', 'g14', 'f03', 0.60, '2026-06-27 13:25:43.761+07', '2026-06-27 13:25:43.761+07');
INSERT INTO public.disease_symptoms VALUES ('51147d5f-ddc8-495c-8149-64de35884631', 'p07', 'g26', 'f03', 0.70, '2026-06-27 13:25:43.762+07', '2026-06-27 13:25:43.762+07');
INSERT INTO public.disease_symptoms VALUES ('820f35e3-3f3e-4a08-a9c3-fb32687f3018', 'p11', 'g34', 'f03', 0.85, '2026-06-27 13:25:43.766+07', '2026-06-27 13:25:43.766+07');
INSERT INTO public.disease_symptoms VALUES ('7386a904-0f32-4b30-aaa8-ef637266db3c', 'p11', 'g35', 'f03', 0.95, '2026-06-27 13:25:43.768+07', '2026-06-27 13:25:43.768+07');


--
-- PostgreSQL database dump complete
--

\unrestrict 9395VzdKKlbFBVQ6UQYw0UKGbAGOZL7u0mwyeiCnN1lwbJATzbLogGZq9hk8fZN

