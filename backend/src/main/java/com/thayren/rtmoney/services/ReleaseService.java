package com.thayren.rtmoney.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.rtmoney.dto.ReleaseDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsCategoryDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsDayDTO;
import com.thayren.rtmoney.entities.Person;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.PersonRepository;
import com.thayren.rtmoney.repositories.ReleaseRepository;
import com.thayren.rtmoney.repositories.filter.ReleaseFilter;
import com.thayren.rtmoney.repositories.projection.ReleaseSummary;
import com.thayren.rtmoney.services.exceptions.NonexistentOrInactivePersonException;
import com.thayren.rtmoney.services.exceptions.ResourceNotFoundException;

@Service
public class ReleaseService {

	@Autowired
	private ReleaseRepository repository;

	@Autowired
	private PersonRepository personRepository;
	
	public List<ReleaseStatisticsDayDTO> byDay(LocalDate date) {
		return this.repository.byDay(date);
	}	
	
	public List<ReleaseStatisticsCategoryDTO> byCategory(LocalDate date) {
		return this.repository.byCategory(date);
	}	

	public Page<Release> filter(ReleaseFilter releaseFilter, Pageable pageable) {
		return repository.filter(releaseFilter, pageable);
	}

	public Page<ReleaseSummary> summarize(ReleaseFilter releaseFilter, Pageable pageable) {
		return repository.summarize(releaseFilter, pageable);
	}

	@Transactional(readOnly = true)
	public ReleaseDTO findById(Long id) {
		Optional<Release> obj = repository.findById(id);
		Release entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new ReleaseDTO(entity);
	}

	@Transactional
	public ReleaseDTO insert(ReleaseDTO dto) {
		Release entity = new Release();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReleaseDTO(entity);
	}

	@Transactional
	public ReleaseDTO update(Long id, ReleaseDTO dto) {
		try {
			Release entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ReleaseDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	private void copyDtoToEntity(ReleaseDTO dto, Release entity) {
		entity.setDescription(dto.getDescription());
		entity.setDueDate(dto.getDueDate());
		entity.setDatePayment(dto.getDatePayment());
		entity.setValue(dto.getValue());
		entity.setObservation(dto.getObservation());
		entity.setType(dto.getType());
		entity.setCategory(dto.getCategory());
		entity.setPerson(dto.getPerson());

		Optional<Person> person = personRepository.findById(entity.getPerson().getId());
		if (person.isEmpty() || person.get().isInactive()) {
			throw new NonexistentOrInactivePersonException("Non-existent or inactive person");
		}
	}

}
