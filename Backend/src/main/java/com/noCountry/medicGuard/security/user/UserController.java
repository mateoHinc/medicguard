package com.noCountry.medicGuard.security.user;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/admin/users")
public class UserController {

  private final UserService userService;
  private final Logger log = LoggerFactory.getLogger(UserController.class);

  @GetMapping()
  public ResponseEntity<List<User>> findAll() {
    List<User> allUsers = userService.findAll();

    if (!allUsers.isEmpty()) {
      return ResponseEntity.ok().body(allUsers);
    } else {
      log.warn("There are not user in the database");
      return ResponseEntity.notFound().build();
    }
  }

  @GetMapping("findbylastname/{lastname}")
  public ResponseEntity<User> findByLastName(@PathVariable("lastname") String lastname) {
    Optional<User> oneUser = userService.findByLastname(lastname);

    if (oneUser.isPresent()) {
      return ResponseEntity.ok().body(oneUser.get());
    } else {
      log.warn("Lastname was not entered");
      return ResponseEntity.notFound().build();
    }
  }
}
