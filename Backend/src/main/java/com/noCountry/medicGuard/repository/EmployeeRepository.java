package com.noCountry.medicGuard.repository;

import com.noCountry.medicGuard.domain.model.*;
import java.util.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    Optional<Employee> findByProfRegistration(Long profRegistration);

}
