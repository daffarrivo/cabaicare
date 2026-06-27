"""
Convert KnowledgeBase.xlsx to TypeScript seed data for Prisma.
Usage: python scripts/convert_kb.py [path_to_xlsx]
Output: prisma/seed-data.ts (auto-generated, do not edit manually)
"""
import sys
import os
import pandas as pd

# Path to Excel
xlsx_path = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\advan\Downloads\KnowledgeBase.xlsx"
df1 = pd.read_excel(xlsx_path, sheet_name="Sheet1", header=None)

# ============================================================
# Extract rules (rows 3-44, columns 1-6)
# ============================================================
rules_raw = []
for r in range(3, 45):
    row = df1.iloc[r]
    fase_raw = str(row[1]).strip() if pd.notna(row[1]) else ""
    kode_penyakit = str(row[2]).strip() if pd.notna(row[2]) else ""
    nama_penyakit = str(row[3]).strip() if pd.notna(row[3]) else ""
    kode_gejala = str(row[4]).strip() if pd.notna(row[4]) else ""
    indikator = str(row[5]).strip() if pd.notna(row[5]) else ""
    cf = float(row[6]) if pd.notna(row[6]) else 0.0
    if kode_penyakit and kode_gejala:
        rules_raw.append({
            "fase": fase_raw,
            "disease_code": kode_penyakit,
            "disease_name": nama_penyakit,
            "symptom_code": kode_gejala,
            "symptom_description": indikator,
            "cf_expert": cf,
        })

# ============================================================
# Build unique lists
# ============================================================
phases_map = {}
diseases_map = {}
symptoms_map = {}

for rule in rules_raw:
    if rule["disease_code"] not in diseases_map:
        diseases_map[rule["disease_code"]] = rule["disease_name"]
    if rule["symptom_code"] not in symptoms_map:
        symptoms_map[rule["symptom_code"]] = rule["symptom_description"]

# Phases are referenced in rules but defined separately
phases_map = {
    "F01": "Pembibitan",
    "F02": "Vegetatif",
    "F03": "Generatif",
}

# Phase descriptions
phase_descriptions = {
    "F01": "Sejak penyemaian hingga bibit siap tanam",
    "F02": "Pertumbuhan daun, batang, dan akar",
    "F03": "Pembungaan hingga pembentukan buah",
}

# Disease details from mock-data.ts (Excel only has names)
disease_details = {
    "P01": {
        "name": "Layu Fusarium",
        "description": "Penyakit yang disebabkan oleh jamur Fusarium oxysporum yang menyerang pembuluh xilem.",
        "cause": "Jamur Fusarium oxysporum. Menyebar melalui tanah, air, dan alat pertanian.",
        "solution": "Cabut tanaman terserang. Gunakan fungisida sistemik. Sterilisasi tanah dengan solarisasi.",
        "prevention": "Gunakan varietas tahan. Rotasi tanaman. Jaga drainase lahan.",
    },
    "P02": {
        "name": "Antraknosa / Patek",
        "description": "Penyakit yang disebabkan oleh jamur Colletotrichum spp. menyerang buah dan daun.",
        "cause": "Jamur Colletotrichum capsici. Berkembang pada kelembaban tinggi dan suhu hangat.",
        "solution": "Buang buah terserang. Semprot fungisida berbahan aktif mancozeb atau propineb.",
        "prevention": "Jarak tanam cukup. Sanitasi lahan. Gunakan benih sehat.",
    },
    "P03": {
        "name": "Bercak Daun Serkospora",
        "description": "Penyakit bercak daun yang disebabkan oleh jamur Cercospora capsici.",
        "cause": "Jamur Cercospora capsici. Menyebar melalui percikan air dan angin.",
        "solution": "Semprot fungisida berbahan aktif difenoconazole. Pangkas daun sakit.",
        "prevention": "Jaga kebersihan lahan. Atur jarak tanam. Hindari penyiraman dari atas.",
    },
    "P04": {
        "name": "Layu Bakteri",
        "description": "Penyakit yang disebabkan oleh bakteri Ralstonia solanacearum.",
        "cause": "Bakteri Ralstonia solanacearum. Menyebar melalui tanah, air irigasi, dan alat pertanian.",
        "solution": "Cabut tanaman terserang. Sterilisasi tanah. Gunakan bakterisida.",
        "prevention": "Rotasi tanaman. Drainase baik. Gunakan varietas tahan.",
    },
    "P05": {
        "name": "Virus Kuning / Gemini",
        "description": "Penyakit virus yang ditularkan oleh kutu kebul (Bemisia tabaci).",
        "cause": "Virus Gemini. Ditularkan oleh vektor kutu kebul dari tanaman sakit ke tanaman sehat.",
        "solution": "Kendalikan kutu kebul dengan insektisida. Cabut tanaman terinfeksi.",
        "prevention": "Gunakan perangkap kuning. Tanam tanaman penghalang. Gunakan mulsa perak.",
    },
    "P06": {
        "name": "Bengkak Akar",
        "description": "Penyakit yang disebabkan oleh nematoda Meloidogyne spp.",
        "cause": "Nematoda Meloidogyne spp. Hidup di dalam tanah dan menyerang sistem perakaran.",
        "solution": "Gunakan nematisida. Solarisasi tanah. Tambahkan bahan organik.",
        "prevention": "Rotasi tanaman dengan tanaman non-inang. Gunakan bibit sehat.",
    },
    "P07": {
        "name": "Busuk Fitoftora",
        "description": "Penyakit busuk daun yang disebabkan oleh jamur Phytophthora capsici.",
        "cause": "Jamur Phytophthora capsici. Menyebar melalui percikan air hujan dan tanah.",
        "solution": "Semprot fungisida sistemik. Kurangi kelembaban. Perbaiki drainase.",
        "prevention": "Tinggikan bedengan. Mulsa plastik. Jaga jarak tanam.",
    },
    "P08": {
        "name": "Penyakit Kerupuk",
        "description": "Penyakit yang menyebabkan daun menggulung dan mengeras seperti kerupuk.",
        "cause": "Diduga disebabkan oleh virus atau fitoplasma. Ditularkan oleh serangga vektor.",
        "solution": "Kendalikan serangga vektor. Cabut tanaman terinfeksi. Semprot insektisida.",
        "prevention": "Gunakan benih sehat. Sanitasi lingkungan. Kendalikan vektor.",
    },
    "P09": {
        "name": "Rebah Kecambah",
        "description": "Penyakit yang menyerang bibit muda menyebabkan batang rebah dan mati.",
        "cause": "Jamur Pythium spp. dan Rhizoctonia solani. Menyerang bibit pada fase pembibitan.",
        "solution": "Semprot fungisida benomyl. Kurangi kelembaban media semai. Buang bibit sakit.",
        "prevention": "Sterilkan media semai. Gunakan benih sehat. Atur kelembaban.",
    },
    "P10": {
        "name": "Embun Tepung",
        "description": "Penyakit yang ditandai lapisan putih seperti tepung pada permukaan daun.",
        "cause": "Jamur Leveillula taurica. Berkembang pada kondisi kering dengan kelembaban udara tinggi.",
        "solution": "Semprot fungisida belerang. Pangkas daun terinfeksi berat.",
        "prevention": "Jaga sirkulasi udara. Atur jarak tanam. Hindari pemupukan nitrogen berlebih.",
    },
    "P11": {
        "name": "Busuk Basah Buah",
        "description": "Penyakit busuk buah yang menyebabkan buah membusuk basah dan mengeluarkan cairan.",
        "cause": "Bakteri Erwinia spp. dan jamur. Menyebar melalui luka pada buah dan percikan air.",
        "solution": "Buang buah terserang. Semprot bakterisida. Kurangi kelembaban.",
        "prevention": "Hindari pelukaan buah. Panen tepat waktu. Jaga sanitasi kebun.",
    },
}

# ============================================================
# Split multi-phase rules
# ============================================================
rules_split = []
rule_id = 1
for rule in rules_raw:
    phases = [p.strip() for p in rule["fase"].split(",") if p.strip()]
    for phase in phases:
        rules_split.append({
            "id": f"ds{rule_id:02d}",
            "disease_code": rule["disease_code"],
            "symptom_code": rule["symptom_code"],
            "phase_code": phase,
            "cf_expert": rule["cf_expert"],
        })
        rule_id += 1

# ============================================================
# Generate TypeScript output
# ============================================================
output_lines = []
output_lines.append("// Auto-generated from KnowledgeBase.xlsx by scripts/convert_kb.py")
output_lines.append("// DO NOT EDIT MANUALLY. Run: python scripts/convert_kb.py")
output_lines.append("")
output_lines.append("export interface SeedPhase {")
output_lines.append("  id: string;")
output_lines.append("  code: string;")
output_lines.append("  name: string;")
output_lines.append("  description: string;")
output_lines.append("}")
output_lines.append("")
output_lines.append("export interface SeedSymptom {")
output_lines.append("  id: string;")
output_lines.append("  code: string;")
output_lines.append("  name: string;")
output_lines.append("  description: string;")
output_lines.append("}")
output_lines.append("")
output_lines.append("export interface SeedDisease {")
output_lines.append("  id: string;")
output_lines.append("  code: string;")
output_lines.append("  name: string;")
output_lines.append("  description: string;")
output_lines.append("  cause: string;")
output_lines.append("  solution: string;")
output_lines.append("  prevention: string;")
output_lines.append("}")
output_lines.append("")
output_lines.append("export interface SeedRule {")
output_lines.append("  id: string;")
output_lines.append("  disease_id: string;")
output_lines.append("  symptom_id: string;")
output_lines.append("  phase_id: string;")
output_lines.append("  cf_expert: number;")
output_lines.append("}")
output_lines.append("")

# Phases
output_lines.append("export const seedPhases: SeedPhase[] = [")
for code in ["F01", "F02", "F03"]:
    name = phases_map[code]
    desc = phase_descriptions[code]
    phase_id = code.lower()
    output_lines.append(f'  {{ id: "{phase_id}", code: "{code}", name: "{name}", description: "{desc}" }},')
output_lines.append("];")
output_lines.append("")

# Symptoms
output_lines.append("export const seedSymptoms: SeedSymptom[] = [")
for code in sorted(symptoms_map.keys()):
    desc = symptoms_map[code]
    symptom_id = code.lower()
    output_lines.append(f'  {{ id: "{symptom_id}", code: "{code}", name: "{desc}", description: "" }},')
output_lines.append("];")
output_lines.append("")

# Diseases
output_lines.append("export const seedDiseases: SeedDisease[] = [")
for code in sorted(diseases_map.keys()):
    d = disease_details[code]
    disease_id = code.lower()
    output_lines.append(f'  {{ id: "{disease_id}", code: "{code}", name: "{d["name"]}", description: "{d["description"]}", cause: "{d["cause"]}", solution: "{d["solution"]}", prevention: "{d["prevention"]}" }},')
output_lines.append("];")
output_lines.append("")

# Rules (split)
output_lines.append("export const seedRules: SeedRule[] = [")
for rule in rules_split:
    disease_id = rule["disease_code"].lower()
    symptom_id = rule["symptom_code"].lower()
    phase_id = rule["phase_code"].lower()
    output_lines.append(f'  {{ id: "{rule["id"]}", disease_id: "{disease_id}", symptom_id: "{symptom_id}", phase_id: "{phase_id}", cf_expert: {rule["cf_expert"]} }},')
output_lines.append("];")
output_lines.append("")

# Stats
output_lines.append(f"// Generated stats: {len(phases_map)} phases, {len(diseases_map)} diseases, {len(symptoms_map)} symptoms, {len(rules_split)} rules (from {len(rules_raw)} original, multi-phase split)")

# ============================================================
# Write output
# ============================================================
output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "prisma", "seed-data.ts")
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines) + "\n")

print(f"Output written to: {output_path}")
print(f"Stats: {len(phases_map)} phases, {len(diseases_map)} diseases, {len(symptoms_map)} symptoms, {len(rules_split)} rules (from {len(rules_raw)} original)")
print("Done!")
