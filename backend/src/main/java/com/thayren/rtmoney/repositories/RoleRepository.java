package com.thayren.rtmoney.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thayren.rtmoney.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
