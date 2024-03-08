package com.noCountry.medicGuard.domain.model;


import jakarta.persistence.*;

import java.time.*;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DAYS_OF_GUARD")
public class DayOfGuard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer idDayOfGuard;

    private LocalDate startDate;

    private LocalDate endDate;

    private Long guardDuration;

}
