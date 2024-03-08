package com.noCountry.medicGuard.security.auth;

import com.noCountry.medicGuard.security.services.AuthService;
import com.noCountry.medicGuard.security.user.User;
import com.noCountry.medicGuard.security.user.UserRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthService authService;
  private final UserRepository userRepository;

  @PostMapping( "/register")
  public ResponseEntity<AuthResponse> register( @RequestBody RegisterRequest request ) throws Exception {
    Optional<User> requestOp = userRepository.findByEmail( request.getEmail() );

    if ( requestOp.isPresent() ) {
      log.warn( "Error: Email is already registered!" );
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.ok( authService.register( request ) );
  }

  @PostMapping( "/login")
  public ResponseEntity<AuthResponse> authenticate(
          @RequestBody AuthRequest request
  ) {

    Optional<User> requestOp = userRepository.findByEmail( request.getEmail() );
    if ( requestOp.isEmpty() ) {
      log.warn( "Error: Email does not exists!" );
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.ok( authService.authenticate( request ) );
  }
}