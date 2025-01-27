package com.thayren.rtmoney.repositories.release;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.thayren.rtmoney.dto.ReleaseStatisticsCategoryDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsDayDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsPersonDTO;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.filter.ReleaseFilter;
import com.thayren.rtmoney.repositories.projection.ReleaseSummary;

public interface ReleaseRepositoryQuery {
	
	public List<ReleaseStatisticsPersonDTO> perPerson(LocalDate start, LocalDate end);
	
	public List<ReleaseStatisticsCategoryDTO> byCategory(LocalDate referenceMonth);
	public List<ReleaseStatisticsDayDTO> byDay(LocalDate referenceMonth);

	public Page<Release> filter(ReleaseFilter lancamentoFilter, Pageable pageable);
	public Page<ReleaseSummary> summarize(ReleaseFilter lancamentoFilter, Pageable pageable);

}
