package com.noCountry.medicGuard.security.services;

import com.noCountry.medicGuard.security.auth.AuthRequest;
import com.noCountry.medicGuard.security.auth.AuthResponse;
import com.noCountry.medicGuard.security.auth.RegisterRequest;
import com.noCountry.medicGuard.security.jwt.JwtService;
import com.noCountry.medicGuard.security.user.Role;
import com.noCountry.medicGuard.security.user.User;
import com.noCountry.medicGuard.security.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService JwtService;
  private final AuthenticationManager authenticationManager;

  public AuthResponse register(RegisterRequest request) {
    User user = new User();
    user.setFirstname(request.getFirstname());

    user.setLastname(request.getLastname());
    user.setEmail(request.getEmail());
    user.setPassword(passwordEncoder.encode(request.getPassword()));

    if (request.getRole() == null) {
      request.setRole(Role.USER);
    }

    user.setRole(request.getRole());

    repository.save(user);

    var jwtToken = JwtService.generateToken(user);

    return AuthResponse.builder().token(jwtToken).build();
  }

  public AuthResponse authenticate(AuthRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

    var user = repository.findByEmail(request.getEmail()).orElseThrow();
    var jwtToken = JwtService.generateToken(user);

    return AuthResponse.builder().token(jwtToken).build();
  }
}
