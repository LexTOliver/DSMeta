import notIcon from '../../assets/img/notification-icon.svg'

import './styles.css'

function NotificationBtn() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notIcon} alt="Notificar" />
    </div>
  )
}

export default NotificationBtn
