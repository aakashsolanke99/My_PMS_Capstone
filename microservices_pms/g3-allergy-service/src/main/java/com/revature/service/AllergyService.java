package com.revature.service;

import java.util.List;
import java.util.Optional;

import com.revature.model.Allergy;

public interface AllergyService {
	
	public List<Allergy> findAll();
	
	public Optional<Allergy> findById(Integer allergyId);

}
