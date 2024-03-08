package com.noCountry.medicGuard.security.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public Optional<User> findById(Long id) {
    return userRepository.findById(id);
  }

  public List<User> findAll() {
    return userRepository.findAll();
  }

  public Optional<User> findByLastname(String lastname) {
    return userRepository.findByLastname(lastname);
  }

  public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
  }
}
