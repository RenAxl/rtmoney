package com.thayren.rtmoney.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.rtmoney.dto.ReleaseDTO;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.ReleaseRepository;

@Service
public class ReleaseService {
	
	@Autowired
	private ReleaseRepository repository;
	
	@Transactional(readOnly = true)
	public ReleaseDTO findById(Long id) {
		Optional<Release> obj = repository.findById(id);
		Release entity = obj.get();
		return new ReleaseDTO(entity);
	}
	
	

}
