import { ProfileCard } from "../components/ProfileCard";
import { profileInfo } from "../infos/cardsInfos";
export const AboutPage = () => {
  return (
    <section id="about-page" className="page-container">
      <h2 className="title">Somos Coinsertel</h2>
      <div className="profile-card__container">
        {profileInfo.map((profile) => (
          <ProfileCard {...profile} key={profile.title} />
        ))}
      </div>
    </section>
  );
};
