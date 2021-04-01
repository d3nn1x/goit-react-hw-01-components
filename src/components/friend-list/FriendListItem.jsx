import styles from './FriendList.module.css';


const FriendListItem = ({ isOnline, avatar, name }) => {
const activeStatus = isOnline ? styles.statusOnline : styles.statusOffline;
  return (
    <li className={styles.item}>
      <span className={activeStatus}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
