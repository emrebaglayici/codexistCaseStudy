package com.emrebaglayici.codexistcasestudy.Controller;


import com.emrebaglayici.codexistcasestudy.Entity.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class GeocoderController {

    private static final Object API_KEY = "";

    @GetMapping("locations")

    public Response getGeoDetails(@RequestParam double lat, @RequestParam double lng, @RequestParam int radius){
        String location=lat+","+lng;
        UriComponents uri=UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("maps.googleapis.com")
                .path("/maps/api/place/nearbysearch/json")
                .queryParam("location",location)
                .queryParam("radius",radius)
                .queryParam("key",API_KEY).build();

        ResponseEntity<Response> response
                =new RestTemplate().getForEntity(uri.toUriString(), Response.class);
        return response.getBody();
    }

}
