package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.VisitDetails;

public interface VisitDetailsRepo extends JpaRepository<VisitDetails, Integer> {

}
