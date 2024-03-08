package com.noCountry.medicGuard.domain.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "UNAVAILABLE_DAY_OF_GUARD")
public class UnavailableDayOfGuard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long idUnavailableDayOfGuard;

    private LocalDate startDate;

    private LocalDate endDate;

    private Long unavailableGuardDuration;
}
