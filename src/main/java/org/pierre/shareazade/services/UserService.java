package org.pierre.shareazade.services;

import lombok.AllArgsConstructor;
import org.pierre.shareazade.entities.UserEntity;
import org.pierre.shareazade.repositories.UserRepository;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserEntity getUser(Long id) {
        return userRepository.findById(id).get();
    }

}
