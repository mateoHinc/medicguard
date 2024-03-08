package com.noCountry.medicGuard.controller;

import com.noCountry.medicGuard.domain.model.Employee;
import com.noCountry.medicGuard.security.user.User;
import com.noCountry.medicGuard.security.user.UserController;
import com.noCountry.medicGuard.security.user.UserService;
import com.noCountry.medicGuard.service.EmployeeService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/admin/employees")
@RestController
public class EmployeeController {

  private final EmployeeService employeeService;
  private final UserService userService;
  private final Logger log = LoggerFactory.getLogger(UserController.class);

  @Autowired
  public EmployeeController(EmployeeService employeeService, UserService userService) {
    this.employeeService = employeeService;
    this.userService = userService;
  }

  @PostMapping(value = "create")
  public ResponseEntity<Employee> create(@RequestBody Employee employee) {
    Optional<User> userOptional = userService.findById(employee.getId());

    if (userOptional.isPresent()) {

      User user = userOptional.get();

      Employee newEmployee = new Employee();
      newEmployee.setFirstname(user.getFirstname());
      newEmployee.setLastname(user.getLastname());
      newEmployee.setEmail(user.getEmail());
      newEmployee.setId(employee.getId());
      newEmployee.setProfRegistration(employee.getProfRegistration());
      newEmployee.setProfession(employee.getProfession());
      newEmployee.setIsActive(employee.getIsActive());

      employeeService.save(newEmployee);

      return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
    } else {
      log.warn("Cannot create a character with an existing id");
      return ResponseEntity.notFound().build();
    }
  }

  @GetMapping("/findbyprofRegistration/{profRegistration}")
  public ResponseEntity<Employee> findByProfRegistration(
      @PathVariable(name = "profRegistration") Long profRegistration) {
    Optional<Employee> employee = employeeService.findByProfRegistration(profRegistration);

    return employee
        .map(value -> ResponseEntity.ok().body(value))
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping()
  public ResponseEntity<List<Employee>> findAll() {
    List<Employee> employees = employeeService.findAll();

    if (employees.isEmpty()) {
      log.warn("There are no characters in the database");
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok().body(employees);
    }
  }
}
