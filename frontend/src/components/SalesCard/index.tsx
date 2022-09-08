import NotificationBtn from '../NotificationBtn'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import { useState } from 'react';

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate]  = useState(max);

  return (
    <div className="dsmeta-card">
          <h2 className="dsmeta-card-title">Vendas</h2>
          <div>
            <div className="dsmeta-form-input-container">
              <DatePicker
                selected={minDate}
                onChange={(date: Date) =>  setMinDate(date)}
                className="dsmeta-form-input"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="dsmeta-form-input-container">
              <DatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                className="dsmeta-form-input"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div>
            <table className="dsmeta-table">
              <thead>
                <tr>
                  <th className="dsmeta-largedisplay-content">ID</th>
                  <th className="dsmeta-mediumdisplay-content">Data</th>
                  <th>Vendedor</th>
                  <th className="dsmeta-largedisplay-content">Visitas</th>
                  <th className="dsmeta-largedisplay-content">Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dsmeta-largedisplay-content">#001</td>
                  <td className="dsmeta-mediumdisplay-content">28/06/2022</td>
                  <td>Anakin</td>
                  <td className="dsmeta-largedisplay-content">15</td>
                  <td className="dsmeta-largedisplay-content">35</td>
                  <td>R$123456,00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <NotificationBtn />
                    </div>
                  </td>
                </tr>
                <tr id="exemplo2">
                  <td className="dsmeta-largedisplay-content">#002</td>
                  <td className="dsmeta-mediumdisplay-content">28/08/2022</td>
                  <td>Vader</td>
                  <td className="dsmeta-largedisplay-content">35</td>
                  <td className="dsmeta-largedisplay-content">48</td>
                  <td>R$654321,00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <div className="dsmeta-red-btn">
                        <NotificationBtn />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr id="exemplo3">
                  <td className="dsmeta-largedisplay-content">#003</td>
                  <td className="dsmeta-mediumdisplay-content">25/08/2022</td>
                  <td>Raimundo</td>
                  <td className="dsmeta-largedisplay-content">1000</td>
                  <td className="dsmeta-largedisplay-content">1000</td>
                  <td>R$456123,00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <div className="dsmeta-red-btn">
                        <NotificationBtn />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default SalesCard