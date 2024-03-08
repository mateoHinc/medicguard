package com.noCountry.medicGuard.security.user;

import static com.noCountry.medicGuard.security.user.Permission.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Getter
@RequiredArgsConstructor
public enum Role {
  USER(Set.of(USER_READ)),

  ADMIN(Set.of(ADMIN_CREATE, ADMIN_UPDATE, ADMIN_READ, ADMIN_DELETE));

  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities =
        getPermissions().stream()
            .map(permissions -> new SimpleGrantedAuthority(permissions.getPermission()))
            .collect(Collectors.toList());

    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));

    return authorities;
  }
}
