package com.thayren.rtmoney.resources;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.thayren.rtmoney.dto.ReleaseDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsCategoryDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsDayDTO;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.filter.ReleaseFilter;
import com.thayren.rtmoney.repositories.projection.ReleaseSummary;
import com.thayren.rtmoney.services.ReleaseService;

@RestController
@RequestMapping(value = "/releases")
public class ReleaseResource {

	@Autowired
	private ReleaseService service;
	
	@GetMapping("/reports/per-person")
	public ResponseEntity<byte[]> reportPerPerson(
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate start,
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end) throws Exception {
		byte[] report = service.reportPerPerson(start, end);

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE)
				.body(report);
	}
	
	@GetMapping("/statistics/by-day")
	public List<ReleaseStatisticsDayDTO> byDay() {
		return this.service.byDay(LocalDate.now());
	}	
	
	@GetMapping("/statistics/by-category")
	public List<ReleaseStatisticsCategoryDTO> byCategory() {
		return this.service.byCategory(LocalDate.now());
	}	

	@GetMapping
	public ResponseEntity<Page<Release>> filter(ReleaseFilter releaseFilter, Pageable pageable) {
		Page<Release> list = service.filter(releaseFilter, pageable);

		return ResponseEntity.ok().body(list);
	}

	@GetMapping(params = "summary")
	public ResponseEntity<Page<ReleaseSummary>> summarize(ReleaseFilter releaseFilter, Pageable pageable) {
		Page<ReleaseSummary> list = service.summarize(releaseFilter, pageable);

		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ReleaseDTO> findById(@PathVariable Long id) {
		ReleaseDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<ReleaseDTO> insert(@Valid @RequestBody ReleaseDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ReleaseDTO> update(@PathVariable Long id, @Valid @RequestBody ReleaseDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<ReleaseDTO> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
