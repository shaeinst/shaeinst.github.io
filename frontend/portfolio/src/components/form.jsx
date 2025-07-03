export default function ContactForm() {

    return (
        <>
            <form>
                <div className="form">
                    <label htmlFor="user_name">Name</label>
                    <input type="text" name="user_name" placeholder="Your name" required />
                </div>

                <div className="form">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" placeholder="your_email@.com" required />
                </div>

                <div className="form">
                    <label htmlFor="user-message">Message</label>
                    <textarea name="user_message" placeholder="Your message here..." required />
                    <button className='submit-btn' type="submit">Send</button>
                </div>
            </form>
        </>
    )
}