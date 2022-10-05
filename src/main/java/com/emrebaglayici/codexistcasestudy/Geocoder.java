package com.emrebaglayici.codexistcasestudy;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.util.Locale;

@RestController
public class Geocoder {

    private static final Object API_KEY = "AIzaSyBZlL9_8qeZwY9aaQXTVD-1cfMOJYilvqw";

    @GetMapping("/getLocation")
    public com.emrebaglayici.codexistcasestudy.Response getGeoDetails(@RequestParam double lat, @RequestParam double lng, @RequestParam int radius) throws IOException {
//        Location location=new Location(lat,lng);
        String location=lat+","+lng;
//        OkHttpClient client = new OkHttpClient().newBuilder()
//                .build();
//        MediaType mediaType = MediaType.parse("text/plain");
//        RequestBody body=RequestBody.create("",mediaType);

        UriComponents uri=UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("maps.googleapis.com")
                .path("/maps/api/place/nearbysearch/json")
                .queryParam("location",location)
                .queryParam("radius",radius)
                .queryParam("key",API_KEY).build();

        ResponseEntity<com.emrebaglayici.codexistcasestudy.Response> response
                =new RestTemplate().getForEntity(uri.toUriString(), com.emrebaglayici.codexistcasestudy.Response.class);

//        Request request = new Request.Builder()
//                .url("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBZlL9_8qeZwY9aaQXTVD-1cfMOJYilvqw")
//                .method("GET", body)
//                .build();
//        okhttp3.Response response = client.newCall(request).execute();
        return response.getBody();
    }

//    @GetMapping("/getLocation")
//    public Response getGeoDetails(@RequestParam String address) {
//        UriComponents uri = UriComponentsBuilder.newInstance()
//                .scheme("https")
//                .host("maps.googleapis.com")
//                .path("/maps/api/geocode/json")
//                .queryParam("key", API_KEY)
//                .queryParam("address", address)
//                .build();
//        System.out.println(uri.toUriString());
//        ResponseEntity<Response> response = new RestTemplate().getForEntity(uri.toUriString(),
//                Response.class);
//        return response.getBody();
//    }
}
