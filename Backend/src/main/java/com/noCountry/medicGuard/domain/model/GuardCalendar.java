package com.noCountry.medicGuard.domain.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "GUARD_CALENDAR")
public class GuardCalendar {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Long idGuardCalendar;

  @OneToOne
  private Employee employee;

  @ManyToOne
  private Admin admin;

  @OneToMany
  private List<DayOfGuard> dayOfGuards = new ArrayList<>();

  @OneToMany
  private List<UnavailableDayOfGuard> unavailableDayOfGuards = new ArrayList<>();
}
