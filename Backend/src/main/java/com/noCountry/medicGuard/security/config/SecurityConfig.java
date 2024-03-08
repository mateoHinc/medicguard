package com.noCountry.medicGuard.security.config;

import com.noCountry.medicGuard.security.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {
  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;
  private AuthenticationEntryPoint authenticationEntryPoint;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
            .authorizeHttpRequests(
                    (requests) ->
                            requests
                                    .requestMatchers("/")
                                    .permitAll()
            )

            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .sessionManagement(
                    sessionConfig -> sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS)).cors(AbstractHttpConfigurer::disable)
            .exceptionHandling(
                    httpSecurityExceptionHandlingConfigurer ->
                            httpSecurityExceptionHandlingConfigurer.authenticationEntryPoint(
                                    authenticationEntryPoint))
            .csrf(AbstractHttpConfigurer::disable);

    return http.build();
  }
}