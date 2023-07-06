import { ServiceCard } from "../components/ServiceCard";
import { servicesInfo } from "../infos/cardsInfos";

export const ServicesPage = () => {
  return (
    <section id="services-page" className="page-container">
      <div className="service-title__container">
        <h2 className="title service-title" id="">
          Conoce nuestros servicios
        </h2>
      </div>
      <div className="service-card__container">
        {servicesInfo.map(({ title, descriptions, image }) => (
          <ServiceCard
            title={title}
            descriptions={descriptions}
            image={image}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};
