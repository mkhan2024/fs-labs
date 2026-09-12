// staff from the case study
const departments = [
    {
        name: "Creative",
        employees: [
            { firstName: "Maria", lastName: "Santos" },
            { firstName: "Joshua", lastName: "Grant" }
        ]
    },
    {
        name: "Marketing",
        employees: [
            { firstName: "Hannah", lastName: "Welch" },
            { firstName: "Priya", lastName: "Patel" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Peter", lastName: "Moore" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "Shane", lastName: "Lee" },
            { firstName: "Marshall", lastName: "Wilson" },
            { firstName: "Aisha", lastName: "Khan" }
        ]
    },
    {
        name: "Finance",
        employees: [
            { firstName: "Diane", lastName: "Okonkwo" }
        ]
    }
];

const getEmployeeName = (employee) => {
    if (employee.lastName) {
        return employee.firstName + " " + employee.lastName;
    }
    return employee.firstName;
}

const populateEmployeeList = (listNode, employees) => {
    employees.forEach(employee => {
        const newLiNode = document.createElement("li");
        newLiNode.innerHTML = getEmployeeName(employee);
        listNode.appendChild(newLiNode);
    });
}

const populateDepartments = (mainNode, departments) => {
    departments.forEach(department => {
        const sectionNode = document.createElement("section");
        sectionNode.className = "department";

        const headingNode = document.createElement("h2");
        headingNode.innerHTML = department.name;
        sectionNode.appendChild(headingNode);

        const listNode = document.createElement("ul");
        populateEmployeeList(listNode, department.employees);
        sectionNode.appendChild(listNode);

        mainNode.appendChild(sectionNode);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const mainNode = document.querySelector("main");
    populateDepartments(mainNode, departments);

    const yearNode = document.querySelector(".footer-year");
    yearNode.innerHTML = new Date().getFullYear();
});