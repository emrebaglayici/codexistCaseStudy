package com.emrebaglayici.codexistcasestudy.Business.Abstracts;

import com.emrebaglayici.codexistcasestudy.Entity.Response;
import org.springframework.web.bind.annotation.RequestParam;

public interface IGeocoder {
    Response getGeoDetails(@RequestParam double lat, @RequestParam double lng, @RequestParam int radius);
}
