package com.revature.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.revature.model.Allergy;
import com.revature.repository.AllergyRepo;
import com.revature.service.AllergyService;


@Service
public class ServiceImpl implements AllergyService{
	
	
	private AllergyRepo allergyRepo;

	@Override
	public List<Allergy> findAll() {
		// TODO Auto-generated method stub
		return allergyRepo.findAll();
	}

	@Override
	public Optional<Allergy> findById(Integer allergyId) {
		// TODO Auto-generated method stub
		return allergyRepo.findById(allergyId);
	}

	public ServiceImpl(AllergyRepo allergyRepo) {
		super();
		this.allergyRepo = allergyRepo;
	}

}
