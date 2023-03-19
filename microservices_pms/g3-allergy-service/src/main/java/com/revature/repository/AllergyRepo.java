package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Allergy;

public interface AllergyRepo extends JpaRepository<Allergy, Integer> {

}
