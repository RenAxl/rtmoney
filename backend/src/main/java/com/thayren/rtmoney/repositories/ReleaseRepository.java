package com.thayren.rtmoney.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.release.ReleaseRepositoryQuery;

@Repository
public interface ReleaseRepository extends JpaRepository<Release, Long>, ReleaseRepositoryQuery {
	
}
