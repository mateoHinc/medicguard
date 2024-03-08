package com.noCountry.medicGuard.service;

import com.noCountry.medicGuard.domain.model.Employee;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {

  public Optional<Employee> findByProfRegistration(Long profRegistration);

  public void save(Employee employee);

  public List<Employee> findAll();
}
