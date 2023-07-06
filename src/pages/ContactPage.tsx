import { FormComponent } from "../components/FormComponent";

export const ContactPage = () => {
  return (
    <section className="contact-page" id="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <h2>Contactanos</h2>
            <ul className="info">
              <li>
                <span className="info-item">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="info-item--description">
                  Urb. El Bosque, Caracas - Venezuela
                </span>
              </li>
              <li>
                <span className="info-item">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="info-item--description">
                  yrome1@coinsertel.com.ve
                </span>
              </li>
              <li>
                <span className="info-item">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="info-item--description">+58(416)6059373</span>
              </li>
            </ul>
          </div>
          <ul className="social">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <FormComponent />
      </div>
    </section>
  );
};
