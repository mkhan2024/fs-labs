import Directory from "../directory/Directory";
import Form from "../form/Form";
import type { Department } from "../../types";

function Employees({
    departments,
    onEmployeeAdded
}: {
    departments: Department[];
    onEmployeeAdded: () => void;
}) {
    return (
        <>
            <Directory departments={departments} />
            <Form departments={departments} onEmployeeAdded={onEmployeeAdded} />
        </>
    );
}

export default Employees;