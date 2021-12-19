import PropTypes from 'prop-types';
import UserDefaultImage from '../../images/defaultImage.png';
import s from './Profile.module.css';
import numberWithCommas from '../../adds/numberWithCommas';

function Profile({ user }) {
  const {
    avatar = UserDefaultImage,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} width="150" />
        <p className={s.name}>{username}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{numberWithCommas(followers)}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{numberWithCommas(views)}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{numberWithCommas(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
