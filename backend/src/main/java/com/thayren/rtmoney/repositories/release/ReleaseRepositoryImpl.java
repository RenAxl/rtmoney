package com.thayren.rtmoney.repositories.release;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;

import com.thayren.rtmoney.dto.ReleaseStatisticsCategoryDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsDayDTO;
import com.thayren.rtmoney.dto.ReleaseStatisticsPersonDTO;
import com.thayren.rtmoney.entities.Release;
import com.thayren.rtmoney.repositories.filter.ReleaseFilter;
import com.thayren.rtmoney.repositories.projection.ReleaseSummary;

public class ReleaseRepositoryImpl implements ReleaseRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<ReleaseStatisticsPersonDTO> perPerson(LocalDate start, LocalDate end) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		
		CriteriaQuery<ReleaseStatisticsPersonDTO> criteriaQuery = criteriaBuilder.
				createQuery(ReleaseStatisticsPersonDTO.class);
		
		Root<Release> root = criteriaQuery.from(Release.class);
		
		// Aqui é os parametros do construtor da classe ReleaseStatisticsPersonDTO. Pelo que entendi, esta é a projeção do SQL.
		criteriaQuery.select(criteriaBuilder.construct(ReleaseStatisticsPersonDTO.class, 
				root.get("type"),
				root.get("person"),
				criteriaBuilder.sum(root.get("value")))); // Aqui é o parametro total que é o resultado da soma dos valores
			
		criteriaQuery.where(
				criteriaBuilder.greaterThanOrEqualTo(root.get("dueDate"), 
						start),
				criteriaBuilder.lessThanOrEqualTo(root.get("dueDate"), 
						end));
		
		criteriaQuery.groupBy(root.get("type"), root.get("person"));
		
		TypedQuery<ReleaseStatisticsPersonDTO> typedQuery = manager
				.createQuery(criteriaQuery);
		
		return typedQuery.getResultList();
	}
	
	@Override
	public List<ReleaseStatisticsDayDTO> byDay(LocalDate referenceMonth) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		
		CriteriaQuery<ReleaseStatisticsDayDTO> criteriaQuery = criteriaBuilder.
				createQuery(ReleaseStatisticsDayDTO.class);
		
		Root<Release> root = criteriaQuery.from(Release.class);
		
		criteriaQuery.select(criteriaBuilder.construct(ReleaseStatisticsDayDTO.class, 
				root.get("type"),
				root.get("dueDate"),
				criteriaBuilder.sum(root.get("value"))));
		
		LocalDate firstDay = referenceMonth.withDayOfMonth(1);
		LocalDate lastDay = referenceMonth.withDayOfMonth(referenceMonth.lengthOfMonth());
		
		criteriaQuery.where(
				criteriaBuilder.greaterThanOrEqualTo(root.get("dueDate"), 
						firstDay),
				criteriaBuilder.lessThanOrEqualTo(root.get("dueDate"), 
						lastDay));
		
		criteriaQuery.groupBy(root.get("type"), root.get("dueDate"));
		
		TypedQuery<ReleaseStatisticsDayDTO> typedQuery = manager
				.createQuery(criteriaQuery);
		
		return typedQuery.getResultList();
	}	
	
	@Override
	public List<ReleaseStatisticsCategoryDTO> byCategory(LocalDate referenceMonth) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		
		CriteriaQuery<ReleaseStatisticsCategoryDTO> criteriaQuery = criteriaBuilder.
				createQuery(ReleaseStatisticsCategoryDTO.class);
		
		Root<Release> root = criteriaQuery.from(Release.class);
		
		criteriaQuery.select(criteriaBuilder.construct(ReleaseStatisticsCategoryDTO.class, 
				root.get("category"),
				criteriaBuilder.sum(root.get("value"))));
		
		LocalDate firstDay = referenceMonth.withDayOfMonth(1);
		LocalDate lastDay = referenceMonth.withDayOfMonth(referenceMonth.lengthOfMonth());
		
		criteriaQuery.where(
				criteriaBuilder.greaterThanOrEqualTo(root.get("dueDate"), 
						firstDay),
				criteriaBuilder.lessThanOrEqualTo(root.get("dueDate"), 
						lastDay));
		
		criteriaQuery.groupBy(root.get("category"));
		
		TypedQuery<ReleaseStatisticsCategoryDTO> typedQuery = manager
				.createQuery(criteriaQuery);
		
		return typedQuery.getResultList();
	}	

	public Page<Release> filter(ReleaseFilter releaseFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Release> criteria = builder.createQuery(Release.class);
		Root<Release> root = criteria.from(Release.class);

		Predicate[] predicates = createRestrictions(releaseFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<Release> query = manager.createQuery(criteria);
		addPagingRestrictions(query, pageable);

		return new PageImpl<>(query.getResultList(), pageable, total(releaseFilter));
	}

	private Predicate[] createRestrictions(ReleaseFilter releaseFilter, CriteriaBuilder builder, Root<Release> root) {
		List<Predicate> predicates = new ArrayList<>();

		if (!ObjectUtils.isEmpty(releaseFilter.getDescription())) {
			predicates.add(builder.like(builder.lower(root.get("description")),
					"%" + releaseFilter.getDescription().toLowerCase() + "%"));
		}

		if (releaseFilter.getDueDateOf() != null) {
			predicates.add(builder.greaterThanOrEqualTo(root.get("dueDate"), releaseFilter.getDueDateOf()));
		}

		if (releaseFilter.getDueDateUntil() != null) {
			predicates.add(builder.lessThanOrEqualTo(root.get("dueDate"), releaseFilter.getDueDateUntil()));
		}

		return predicates.toArray(new Predicate[predicates.size()]);
	}

	@Override
	public Page<ReleaseSummary> summarize(ReleaseFilter releaseFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<ReleaseSummary> criteria = builder.createQuery(ReleaseSummary.class);
		Root<Release> root = criteria.from(Release.class);

		criteria.select(builder.construct(ReleaseSummary.class, root.get("id"), root.get("description"),
				root.get("dueDate"), root.get("datePayment"), root.get("value"), root.get("type"), 
				root.get("category").get("name"),
				root.get("person").get("name")));

		Predicate[] predicates = createRestrictions(releaseFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<ReleaseSummary> query = manager.createQuery(criteria);
		addPagingRestrictions(query, pageable);

		return new PageImpl<>(query.getResultList(), pageable, total(releaseFilter));
	}

	private void addPagingRestrictions(TypedQuery<?> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);
	}

	private Long total(ReleaseFilter releaseFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Release> root = criteria.from(Release.class);

		Predicate[] predicates = createRestrictions(releaseFilter, builder, root);
		criteria.where(predicates);

		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}
}
