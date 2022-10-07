package com.emrebaglayici.codexistcasestudy.Repository;

import com.emrebaglayici.codexistcasestudy.Entity.Cache;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface CacheRepository extends PagingAndSortingRepository<Cache,Long> {
    @Query("from Cache where latitude =:lat and longitude =:lng and radius =:radius")
    Optional<Cache> customFind(double lat, double lng, double radius);
}
