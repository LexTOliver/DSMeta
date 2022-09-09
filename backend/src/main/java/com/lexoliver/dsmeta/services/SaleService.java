package com.lexoliver.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lexoliver.dsmeta.entities.Sale;
import com.lexoliver.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
  
  @Autowired
  private SaleRepository rep;

  public List<Sale> findSales() {
    List<Sale> result = rep.findAll();
    return result;
  }
}
