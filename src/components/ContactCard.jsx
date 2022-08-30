import "../assets/css/contact-card.css"

const ContactCard = () => {
  return (
    <div className="contact-info-wrapper text-center mb-30">
        <div className="contact-info-icon">
            <i className="ti-location-pin"></i>
        </div>
        <div className="contact-info-content">
            <h4>Our Location</h4>
            <p>012 345 678 / 123 456 789</p>
            <p><a href="#">info@example.com</a></p>
        </div>
    </div>
  )
}

export default ContactCard