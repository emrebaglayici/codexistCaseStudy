package com.emrebaglayici.codexistcasestudy.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity @Getter @Setter @AllArgsConstructor @NoArgsConstructor @Builder
public class Cache {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double latitude;
    private double longitude;
    private double radius;
}
