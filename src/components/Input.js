// create an input component

const InputField = {
    Input: ({ label, name, type, value, onChange, error }) => {
        return (
            <div className="input__field">
                <label htmlFor={name}>{label}</label>
                <input
                    className="input__field--input"
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                />
                <p className="error">{error}</p>
            </div>
        );
    },
    Select: ({ label, name, value, onChange, error, options }) => {
        return (
            <div className="input__field">
                <label htmlFor={name}>{label}</label>
                <select
                    className="input__field--input"
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <p className="error">{error}</p>
            </div>
        );
    }
};

// create a form component



