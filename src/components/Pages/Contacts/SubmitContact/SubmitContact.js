import React from 'react';
import './SubmitContact.css';

const SubmitContact = () => {
    return (
        <form action="/" className='submit-form' method='post'>
            <div className="form-group">
                <input type="text" name="NameSurname" className="form-control" placeholder="Name Surname" required/>
                <span className="submit-icon"></span>
            </div>
            <div className="form-group">
                <input type="email" name="Email" className="form-control" placeholder="Email Address" required/>
                <span className="submit-icon"></span>
            </div>
            <div className="form-group">
                <textarea name="Message" cols="30" rows="5" className="form-control area-control" placeholder="Your Message to Me" required></textarea>
                <span className="submit-icon"></span>
            </div>
            <div className="button-area">
                <button className="btn-submit" type="submit">
                    Send Message →
                </button>
            </div>
        </form>
    )
}

export default SubmitContact;