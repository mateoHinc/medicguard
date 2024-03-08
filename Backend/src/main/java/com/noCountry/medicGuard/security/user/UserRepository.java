package com.noCountry.medicGuard.security.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.lang.NonNullApi;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  @NonNull
  Optional<User> findById(Long id);

  Optional<User> findByEmail(String email);

  Optional<User> findByLastname(String lastname);
}
