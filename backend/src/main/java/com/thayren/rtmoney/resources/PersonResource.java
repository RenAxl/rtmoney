package com.thayren.rtmoney.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.thayren.rtmoney.dto.PersonDTO;
import com.thayren.rtmoney.services.PersonService;

@RestController
@RequestMapping(value = "/persons")
public class PersonResource {
	
	@Autowired
	private PersonService service;
	
	@GetMapping
	public ResponseEntity<Page<PersonDTO>> findAllPaged(
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy
			){
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		Page<PersonDTO> list = service.findAllPaged(name.trim(), pageRequest);
		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> findById(@PathVariable Long id){
		PersonDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<PersonDTO> insert(@Valid @RequestBody PersonDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> update(@PathVariable Long id, @Valid @RequestBody PersonDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@PutMapping(value = "/{id}/active")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void updateActiveProperty(@PathVariable Long id, @RequestBody Boolean active){
		service.updateActiveProperty(id, active);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<PersonDTO> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
