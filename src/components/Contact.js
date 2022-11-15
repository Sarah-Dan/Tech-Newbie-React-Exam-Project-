import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/styles/contact.css';
// create a contact form component

const Contact = () => {
    // create a navigate function
    // const navigate = useNavigate();
    //  create a function to handle form submission
    // const handleSignIn = () => {
        // redirect to the sign in page
        // navigate('/signin');
    // };
    
    // form validation
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };
    
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
        ...formValues,
        [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
        errors.name = 'Name is required!';
        }
        if (!values.email) {
        errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
        errors.email = 'Email address is invalid!';
        }
        if (!values.message) {
        errors.message = 'Message is required!';
        }
        return errors;
    };
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        alert('Form submitted successfully!');
        console.log(formValues);
        }
    }, [formErrors, isSubmit, formValues]);
    
    return (
        <div className="contact">
        <div className="contact__container">
            <div className="contact__form">
            <div className="contact__heading">
            <h2>Contact Us</h2>
            </div>
                <form onSubmit={handleSubmit}>
                <div className="contact__form__name">
                <label htmlFor="name">Name</label>
                <input
                    className="contact__form--input"
                    placeholder='Jane Doe'
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
                <p className="error">{formErrors.name}</p>
                </div>
                <div className="contact__form__email">
                <label>Email</label>
                <input
                    className="contact__form--input"
                    placeholder='example@email.com'
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <p className="error">{formErrors.email}</p>
                <label>Subject</label>
                <select className="contact__form--input">
                    <option value="General">General</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                </select>
                </div>
                <div className="contact__form--message">
                <label>Message</label>
                <textarea
                    className="contact__form--textarea"
                    placeholder='Hi, I would like to partner with your community.'
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                />
                    <p className="error">{formErrors.message}</p>
                </div>
                <div>
                <button
                    className="contact__form--btn" 
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Send
                    </button>
                </div>
                {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className="success-msg">Message sent successfully</div>
                )}
            </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
