import axios from 'axios';
import { toast } from 'react-toastify';
import notIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
  saleId: number;
}

function notificar(id: number) {
  axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      toast.info("SMS enviado com sucesso!")
    });
}

function NotificationBtn({saleId}: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => notificar(saleId)}>
      <img src={notIcon} alt="Notificar" />
    </div>
  )
}

export default NotificationBtn
