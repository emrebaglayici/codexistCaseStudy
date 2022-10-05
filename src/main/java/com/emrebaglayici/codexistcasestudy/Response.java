package com.emrebaglayici.codexistcasestudy;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Response {
    @JsonProperty("results")
    private Result[] result;
}
