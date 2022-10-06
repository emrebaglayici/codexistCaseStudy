package com.emrebaglayici.codexistcasestudy.Entity.Dtos;

import com.emrebaglayici.codexistcasestudy.Entity.Cache;
import lombok.Getter;
import lombok.Setter;

@Setter
public class CacheSaveDto {
    private double latitude;
    private double longitude;
    private double radius;

    public Cache toCache(){
        return Cache.builder()
                .latitude(this.latitude)
                .longitude(this.longitude)
                .radius(this.radius)
                .build();
    }
}
