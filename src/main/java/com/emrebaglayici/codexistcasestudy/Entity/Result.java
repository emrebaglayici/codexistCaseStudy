package com.emrebaglayici.codexistcasestudy.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Result {
    @JsonProperty("geometry")
    private Geometry geometry;

}
