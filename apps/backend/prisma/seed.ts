import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const creative = await prisma.department.create({
    data: { name: "Creative" }
  });
  const marketing = await prisma.department.create({
    data: { name: "Marketing" }
  });
  const hr = await prisma.department.create({
    data: { name: "Human Resources" }
  });
  const it = await prisma.department.create({
    data: { name: "Information Technology" }
  });
  const finance = await prisma.department.create({
    data: { name: "Finance" }
  });

  await prisma.employee.createMany({
    data: [
      { firstName: "Maria", lastName: "Santos", departmentId: creative.id },
      { firstName: "Joshua", lastName: "Grant", departmentId: creative.id },
      { firstName: "Hannah", lastName: "Welch", departmentId: marketing.id },
      { firstName: "Priya", lastName: "Patel", departmentId: marketing.id },
      { firstName: "Peter", lastName: "Moore", departmentId: hr.id },
      { firstName: "Shane", lastName: "Lee", departmentId: it.id },
      { firstName: "Marshall", lastName: "Wilson", departmentId: it.id },
      { firstName: "Aisha", lastName: "Khan", departmentId: it.id },
      { firstName: "Diane", lastName: "Okonkwo", departmentId: finance.id }
    ]
  });

  await prisma.role.createMany({
    data: [
      { firstName: "Jo-Anne", lastName: "Sinclair", role: "CEO/Chair of Board" },
      { firstName: "Jackson", lastName: "Smith", role: "COO/VP Operations" },
      { firstName: "Susan", lastName: "Thomas", role: "CFO/VP Administration" },
      { firstName: "Richa", lastName: "Kaur", role: "VP Client Services" },
      { firstName: "Josee", lastName: "Benjamin", role: "CIO" },
      { firstName: "Vincent", lastName: "Grey", role: "VP Sales & Marketing" },
      { firstName: "Rupa", lastName: "Kharki", role: "Director Financial and Audit Svcs" },
      { firstName: "Xun", lastName: "Kuang", role: "Director Human Resources" },
      { firstName: "Stien", lastName: "Pedersen", role: "Director Legal Services/General Counsel" },
      { firstName: "Sandra", lastName: "Bear", role: "Director Information Technology" },
      { firstName: "Gus", lastName: "Blue", role: "Director Information Security and CISSO" },
      { firstName: "Sam", lastName: "Kong", role: "Director Accounting" },
      { firstName: "Valentine", lastName: "Smith", role: "Director Physical Security" },
      { firstName: "Mariya", lastName: "Kaperski", role: "Director Facilities" },
      { firstName: "Abd al-Hamid", lastName: "Alami", role: "Manager, Business Continuity and Disaster Recovery" },
      { firstName: "Victoria", lastName: "Gray", role: "Manager, Internal Audit" },
      { firstName: "Cheryl", lastName: "Guru", role: "Chief Architect" },
      { firstName: "Jean", lastName: "Ngoy", role: "Manager, Security Architecture" },
      { firstName: "Kris", lastName: "Gold", role: "Solution Architect, Online Banking" },
      { firstName: "Isaac", lastName: "Smith", role: "Manager, Application Solutions" },
      { firstName: "Payton", lastName: "Frost", role: "Lead Developer, Online Banking" },
      { firstName: "Samantha", lastName: "Nettle", role: "Manager, Operational Risk" },
      { firstName: "Yolanda", lastName: "Ferreira", role: "Manager, Vendor Relations" },
      { firstName: "Samir", lastName: "Hassan", role: "Manager, Purchasing" },
      { firstName: "Yuna", lastName: "Aikawa", role: "Manager, Communications" },
      { firstName: "Jonathan", lastName: "Carberry", role: "Manager Customer Experience and Community Eng." },
      { firstName: "Roland", lastName: "Wei", role: "Manager of Sales" },
      { firstName: "Pran", lastName: "Singh", role: "Manager, Marketing" },
      { firstName: "Linda", lastName: "Analyst", role: "Business Analyst, Online Banking" },
      { firstName: "Esra", lastName: "Sedge", role: "Manager, Contract Management" },
      { firstName: "Pranee", lastName: "Tan", role: "Manager, Compliance Management" },
      { firstName: "Karmen", lastName: "Spruce", role: "Manager IT End User Service Desk" },
      { firstName: "Haydar", lastName: "Katirci", role: "Manager IT End User Computing" },
      { firstName: "Jill", lastName: "Harkness", role: "Manager IT Telecom and Infrastructure" },
      { firstName: "Tim", lastName: "Morrison", role: "Manager, Data Center and Hosting Services" },
      { firstName: "Aleksandr", lastName: "Milosevic", role: "Manager of IT Risk Management" },
      { firstName: "Jim", lastName: "Wingnut", role: "Manager IT, project management office" }
    ]
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });