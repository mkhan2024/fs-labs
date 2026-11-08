import { useState } from "react";

// one input: its text and its messages
function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const [messages, setMessages] = useState<string[]>([]);

    // caller passes the check. hook saves the messages and returns the result
    function validate(check: (inputValue: string) => string[]) {
        const nextMessages = check(value);
        setMessages(nextMessages);
        return nextMessages.length === 0;
    }

    function reset() {
        setValue("");
        setMessages([]);
    }

    return {
        value,
        setValue,
        messages,
        validate,
        reset
    };
}

export default useFormInput;