import { FaTelegramPlane, FaWhatsapp, FaVk, FaInstagram } from 'react-icons/fa';
import MatrixBackground from './MatrixBackground';
import styles from './Contacts.module.css';

const contacts = [
  { 
    network: 'telegram', 
    icon: <FaTelegramPlane />, 
    name: 'Эдгар Штромаер', 
    handle: '@zamzamich', 
    link: 'https://t.me/zamzamich',
    actionText: 'Написать сообщение' 
  },
  { 
    network: 'whatsapp', 
    icon: <FaWhatsapp />, 
    name: '+7 (XXX) XXX-XX-XX', 
    handle: 'Business Account', 
    link: 'https://wa.me/7XXXXXXXXXX',
    actionText: 'Начать чат' 
  },
  { 
    network: 'vk', 
    icon: <FaVk />, 
    name: 'Эдгар Штромаер', 
    handle: 'vk.com/zamzamich', 
    link: 'https://vk.com/zamzamich',
    actionText: 'Перейти в профиль' 
  },
  { 
    network: 'instagram', 
    icon: <FaInstagram />, 
    name: 'Edgar Shtromaer', 
    handle: '@zamzamich.dev', 
    link: 'https://instagram.com/zamzamich.dev',
    actionText: 'Подписаться' 
  },
];

function Contacts() {
  return (
    <section id="contacts" className={styles.contactsSection}>
      <MatrixBackground />
      
      <div className={styles.grid}>
        {contacts.map((contact) => (
          <a key={contact.network} href={contact.link} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles[contact.network]}`}>
            <div className={styles.networkIcon}>
              {contact.icon}
            </div>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                <img src="/avatar.png" alt="Аватар" />
              </div>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{contact.name}</p>
                <p className={styles.userHandle}>{contact.handle}</p>
              </div>
            </div>
            <div className={styles.actionButton}>
              {contact.icon}
              <span>{contact.actionText}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contacts;