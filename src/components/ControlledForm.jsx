import { useState } from 'react';

function ControlledForm() {
    const [formData, setFormData] = useState({
        names: '',
        email: '',
        role: '',
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState('');

    function handleChange(e) {
        // const { name, value } = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.names || !formData.email || !formData.role) {
            setError('Please fill in all field');
            return;
        }

        setError('');
        setSubmittedData(formData);

        setFormData({
            names: '',
            email: '',
            role: '',
        });

    }


    return (
        <>
            <h2>Controlled Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name='names'
                        value={formData.names}
                        onChange={handleChange}
                        placeholder='Enter Your Name '
                    />
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter Your Email'
                    />
                </div>

                <div>
                    <label>Role</label>
                    <br />
                    <select 
                    name="role" 
                    value={formData.role}
                    onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="student">Student</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                    </select>
                </div>

                <button type='submit'>
                    Submit
                </button>
            </form>

            {error && <p>{error}</p>}

            {
                submittedData && (
                    <div>
                        <h3>Submitted Data</h3>
                        <p>Name: {submittedData.names}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Role: {submittedData.role}</p>
                    </div>
                )
            }
            <FormLibrary />
        </>
    )
}

function FormLibrary() {
    return (
        <>
        <h2>react-hook-form</h2>
        </>
    )
}

export default ControlledForm;