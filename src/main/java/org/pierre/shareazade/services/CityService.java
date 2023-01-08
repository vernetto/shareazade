package org.pierre.shareazade.services;

import lombok.AllArgsConstructor;
import org.pierre.shareazade.entities.CityEntity;
import org.pierre.shareazade.repositories.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CityService {
    private final CityRepository cityRepository;

    public CityEntity getCity(Long id) {
        return cityRepository.findById(id).get();
    }

    public CityEntity createCity(CityEntity userEntity) {
        return cityRepository.save(userEntity);
    }

    public List<CityEntity> findAll() {
        return cityRepository.findAll();
    }

}
