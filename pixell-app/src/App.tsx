import { useState } from "react";
import Header from "./components/header/Header";
import Directory from "./components/directory/Directory";
import Footer from "./components/footer/Footer";
import departmentsJson from "./data/departments.json";
import type { Department } from "./types";

// start with the json list
const startingDepartments = departmentsJson as Department[];

function App() {
    const [departments, setDepartments] = useState(startingDepartments);

    return (
        <>
            <Header />
            <Directory departments={departments} />
            <Footer />
        </>
    );
}

export default App;