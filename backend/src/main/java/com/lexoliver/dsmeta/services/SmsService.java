/*package com.lexoliver.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.lexoliver.dsmeta.entities.Sale;
import com.lexoliver.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

  @Autowired
  private SaleRepository rep;

	public void sendSms(Long saleId) {

    Sale sale = rep.findById(saleId).get();

    String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear(); 
    String msg = "Parabens, " + sale.getSellerName() 
      + "! Você foi destaque de vendas em " + date
      + " com um total de R$" + String.format("%.2f", sale.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}*/
