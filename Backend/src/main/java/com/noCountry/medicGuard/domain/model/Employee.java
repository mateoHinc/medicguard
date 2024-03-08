package com.noCountry.medicGuard.domain.model;

import com.noCountry.medicGuard.enumeration.*;
import com.noCountry.medicGuard.security.user.Role;
import com.noCountry.medicGuard.security.user.User;
import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "EMPLOYEE")
public class Employee extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @OneToOne
    private GuardCalendar guardCalendar;

    @Column(nullable = false)
    private Long profRegistration;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Profession profession;

    @Column(nullable = false)
    private Boolean isActive = false;

    private Integer weekDayCounter;
    private Integer weekendDayCounter;
    private Integer holidayCounter;

    public Employee(long id, String firstname, String lastname, String email,
                    Long profRegistration, Profession profession, Boolean isActive) {
        super(firstname, lastname, email);
        this.id = id;
        this.profRegistration = profRegistration;
        this.profession = profession;
        this.isActive = isActive;
    }
}
