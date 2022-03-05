import './Contact.scss'

const Contact = () => {


    return (

        <section id="contact" className="contact">

            <h1 className="heading"><span>Contact</span> Me</h1>

            <div className="row">

                <div className="contact-info">
                    <h3 className="title">contact info</h3>
                    <div className="info">
                        <h3><i className="fas fa-envelope"></i>taiseen.cse@gmail.com</h3>
                        <h3><i className="fas fa-phone"></i>+880 1717 - 416 412</h3>
                        <h3><i className="fas fa-map-marker-alt"></i>Dhaka, Bangladesh</h3>
                    </div>
                </div>

                <form action="">
                    <input type="text" placeholder="name" className="box" id="name" />
                    <input type="email" placeholder="email" className="box" id="email" />
                    <input type="text" placeholder="subject" className="box" id="subject" />
                    <textarea id="message" className="box message" placeholder="message"></textarea>

                    <button type="submit" className="btn">
                        send <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;