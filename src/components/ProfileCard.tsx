type Props = {
  title: string;
  description: string;
  image: string;
};

export const ProfileCard = ({ description, title, image }: Props) => {
  return (
    <div className="profile-card">
      <div className="profile-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="profile-card__content">
        <h2 className="profile-card__title">{title}</h2>
        <p className="profile-card__description">{description}</p>
      </div>
    </div>
  );
};
