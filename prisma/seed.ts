import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { seedPhases, seedSymptoms, seedDiseases, seedRules } from "./seed-data";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Growth Phases
  console.log("\n[1/5] Seeding growth phases...");
  for (const phase of seedPhases) {
    await prisma.growthPhase.upsert({
      where: { code: phase.code },
      update: { name: phase.name, description: phase.description },
      create: phase,
    });
  }
  console.log(`  Inserted ${seedPhases.length} growth phases`);

  // Symptoms
  console.log("\n[2/5] Seeding symptoms...");
  for (const symptom of seedSymptoms) {
    await prisma.symptom.upsert({
      where: { code: symptom.code },
      update: { name: symptom.name },
      create: symptom,
    });
  }
  console.log(`  Inserted ${seedSymptoms.length} symptoms`);

  // Diseases
  console.log("\n[3/5] Seeding diseases...");
  for (const disease of seedDiseases) {
    await prisma.disease.upsert({
      where: { code: disease.code },
      update: {
        name: disease.name,
        description: disease.description,
        cause: disease.cause,
        solution: disease.solution,
        prevention: disease.prevention,
      },
      create: disease,
    });
  }
  console.log(`  Inserted ${seedDiseases.length} diseases`);

  // Rules (disease_symptoms)
  console.log("\n[4/5] Seeding disease-symptom rules...");
  let ruleCount = 0;
  for (const rule of seedRules) {
    await prisma.diseaseSymptom.upsert({
      where: {
        diseaseId_symptomId_phaseId: {
          diseaseId: rule.disease_id,
          symptomId: rule.symptom_id,
          phaseId: rule.phase_id,
        },
      },
      update: { cfExpert: rule.cf_expert },
      create: {
        diseaseId: rule.disease_id,
        symptomId: rule.symptom_id,
        phaseId: rule.phase_id,
        cfExpert: rule.cf_expert,
      },
    });
    ruleCount++;
  }
  console.log(`  Inserted ${ruleCount} rules`);

  // Users
  console.log("\n[5/5] Seeding users...");
  const adminPassword = await bcrypt.hash("admin123", 10);
  const userPassword = await bcrypt.hash("password123", 10);

  await prisma.user.upsert({
    where: { email: "admin@cabaicare.com" },
    update: { role: "admin" },
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Admin CabaiCare",
      email: "admin@cabaicare.com",
      passwordHash: adminPassword,
      role: "admin",
    },
  });

  await prisma.user.upsert({
    where: { email: "budi@example.com" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000002",
      name: "Budi Santoso",
      email: "budi@example.com",
      passwordHash: userPassword,
      role: "user",
    },
  });

  await prisma.user.upsert({
    where: { email: "siti@example.com" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000003",
      name: "Siti Rahayu",
      email: "siti@example.com",
      passwordHash: userPassword,
      role: "user",
    },
  });
  console.log("  Inserted 3 users");

  console.log("\nSeed complete!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
