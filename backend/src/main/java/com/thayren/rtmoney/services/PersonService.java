package com.thayren.rtmoney.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.rtmoney.dto.PersonDTO;
import com.thayren.rtmoney.entities.Person;
import com.thayren.rtmoney.repositories.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository repository;

	@Transactional(readOnly = true)
	public Page<PersonDTO> findAllPaged(String name, PageRequest pageRequest) {
		Page<Person> list = repository.findByNameContaining(name, pageRequest);
		Page<PersonDTO> listDto = list.map(x -> new PersonDTO(x));

		return listDto;
	}

	@Transactional(readOnly = true)
	public PersonDTO findById(Long id) {
		Optional<Person> obj = repository.findById(id);
		Person entity = obj.get();
		return new PersonDTO(entity);
	}

	@Transactional
	public PersonDTO insert(PersonDTO dto) {
		Person entity = new Person();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PersonDTO(entity);
	}

	@Transactional
	public PersonDTO update(Long id, PersonDTO dto) {
		Person entity = repository.getOne(id);
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PersonDTO(entity);

	}
	
	@Transactional
	public void updateActiveProperty(Long id, Boolean active) {
		Person entity = repository.getOne(id);
		entity.setActive(active);
		repository.save(entity);
	}
	
	public void delete(Long id) {
			repository.deleteById(id);
	}
	
	private void copyDtoToEntity(PersonDTO dto, Person entity) {
		entity.setName(dto.getName());
		entity.setAddress(dto.getAddress());
		entity.setActive(dto.getActive());
	}

}
