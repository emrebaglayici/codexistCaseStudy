package com.emrebaglayici.codexistcasestudy.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
public class Result {
    @JsonProperty("geometry")
    private Geometry geometry;
}
