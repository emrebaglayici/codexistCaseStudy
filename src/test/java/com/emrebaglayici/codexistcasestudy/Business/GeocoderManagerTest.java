package com.emrebaglayici.codexistcasestudy.Business;

import com.emrebaglayici.codexistcasestudy.Business.Concretes.GeocoderManager;
import com.emrebaglayici.codexistcasestudy.Repository.CacheRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class GeocoderManagerTest {
    @Mock
    private CacheRepository cacheRepository;

    @InjectMocks
    private GeocoderManager underTest;

    @Test
    void verifyingGetGeoDetailsAlwaysRunCustomFindQuery() {
        double lat, lng;
        lat = 38.49156648842372;
        lng = 26.94799187287517;
        int radius = 1500;
        underTest.getGeoDetails(lat, lng, radius);
        verify(cacheRepository, times(1)).customFind(lat, lng, radius);
    }

}
