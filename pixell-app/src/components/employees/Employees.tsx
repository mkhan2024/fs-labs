import Directory from "../directory/Directory";
import Form from "../form/Form";
import type { Department } from "../../types";

function Employees({
    departments,
    onAddEmployee
}: {
    departments: Department[];
    onAddEmployee: (firstName: string, lastName: string, departmentName: string) => void;
}) {
    return (
        <>
            <Directory departments={departments} />
            <Form departments={departments} onAddEmployee={onAddEmployee} />
        </>
    );
}

export default Employees;