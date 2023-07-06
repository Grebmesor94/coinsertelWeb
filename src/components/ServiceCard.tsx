type Props = {
  title: string;
  descriptions: string[];
  image: string;
};

export const ServiceCard = ({ title, descriptions, image }: Props) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <img className="service-card__image" src={image} alt={image} />
      </div>
      <div className="service-card__content">
        <h2 className="service-card__title">{title}</h2>
        {descriptions.map((desc) => (
          <p className="service-card__description">{desc}</p>
        ))}
      </div>
    </div>
  );
};
