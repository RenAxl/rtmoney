package com.thayren.rtmoney.repositories.release;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.filter.ReleaseFilter;
import com.thayren.rtmoney.repositories.projection.ReleaseSummary;

public interface ReleaseRepositoryQuery {
	
	public Page<Release> filter(ReleaseFilter lancamentoFilter, Pageable pageable);
	public Page<ReleaseSummary> summarize(ReleaseFilter lancamentoFilter, Pageable pageable);

}
