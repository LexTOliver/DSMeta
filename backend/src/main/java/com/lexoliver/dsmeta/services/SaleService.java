package com.lexoliver.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.lexoliver.dsmeta.entities.Sale;
import com.lexoliver.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
  
  @Autowired
  private SaleRepository rep;

  public Page<Sale> findSales(String minDate, String maxDate, String page, String size) {
    
    LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
    LocalDate min = minDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
    LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
    
    Pageable paging = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

    Page<Sale> result = rep.findSales(min, max, paging);
    return result;
  }
}
