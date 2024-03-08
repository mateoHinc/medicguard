package com.noCountry.medicGuard.service.impl;

import com.noCountry.medicGuard.domain.model.Employee;
import com.noCountry.medicGuard.repository.EmployeeRepository;
import com.noCountry.medicGuard.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository userRepository) {
        this.employeeRepository = userRepository;
    }

    public Optional<Employee> findByProfRegistration(Long profRegistration) {
        return employeeRepository.findByProfRegistration(profRegistration);
    }

    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    public List<Employee> findAll() {
        return (List<Employee>) employeeRepository.findAll();
    }

}
