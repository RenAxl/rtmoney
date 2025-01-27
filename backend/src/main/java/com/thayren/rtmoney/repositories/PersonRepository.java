package com.thayren.rtmoney.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thayren.rtmoney.entities.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
	
	public Page<Person> findByNameContaining(String name, Pageable pageable);

}
