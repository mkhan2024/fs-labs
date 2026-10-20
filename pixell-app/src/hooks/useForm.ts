import type { FormEvent } from "react";
import useFormInput from "./useFormInput";

export interface FormSaveResult {
    ok: boolean;
    firstNameMessages: string[];
    extraMessages: string[];
}

// shared form. the page picks the service
function useForm() {
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const extra = useFormInput("");

    function handleSubmit(
        event: FormEvent,
        save: (firstName: string, lastName: string, extra: string) => FormSaveResult
    ) {
        event.preventDefault();

        const result = save(firstName.value, lastName.value, extra.value);
        const firstOk = firstName.validate(() => result.firstNameMessages);
        const extraOk = extra.validate(() => result.extraMessages);
        lastName.validate(() => []);

        if (firstOk && extraOk && result.ok) {
            firstName.reset();
            lastName.reset();
            extra.reset();
            return true;
        }

        return false;
    }

    return { firstName, lastName, extra, handleSubmit };
}

export default useForm;