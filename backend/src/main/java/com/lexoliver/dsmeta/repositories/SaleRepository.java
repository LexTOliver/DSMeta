package com.lexoliver.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lexoliver.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
  
}
