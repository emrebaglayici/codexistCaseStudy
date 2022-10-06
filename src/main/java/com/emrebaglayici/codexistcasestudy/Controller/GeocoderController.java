package com.emrebaglayici.codexistcasestudy.Controller;


import com.emrebaglayici.codexistcasestudy.Business.Abstracts.IGeocoder;
import com.emrebaglayici.codexistcasestudy.Entity.Response;
import com.emrebaglayici.codexistcasestudy.Security.API;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class GeocoderController {

    private final IGeocoder iGeocoder;

    public GeocoderController(IGeocoder iGeocoder) {
        this.iGeocoder = iGeocoder;
    }

    @GetMapping("locations")
    public Response getGeoDetails(@RequestParam double lat, @RequestParam double lng, @RequestParam int radius){
       return iGeocoder.getGeoDetails(lat,lng,radius);
    }

}
