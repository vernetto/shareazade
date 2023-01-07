package org.pierre.shareazade;

import lombok.AllArgsConstructor;
import org.pierre.shareazade.constants.RideType;
import org.pierre.shareazade.entities.CityEntity;
import org.pierre.shareazade.entities.RideEntryEntity;
import org.pierre.shareazade.entities.UserEntity;
import org.pierre.shareazade.repositories.CityRepository;
import org.pierre.shareazade.repositories.RideEntryRepository;
import org.pierre.shareazade.repositories.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@AllArgsConstructor
@Component
public class DataLoader implements ApplicationRunner {
    private final RideEntryRepository rideEntryRepository;
    private final CityRepository cityRepository;
    private final UserRepository userRepository;

    public void run(ApplicationArguments args) {
        CityEntity cityEntity = new CityEntity();
        cityEntity.setCityName("Aosta");
        cityRepository.save(cityEntity);
        UserEntity user = new UserEntity();
        user.setTelephone("0762124321");
        user.setEmail("publicpierre@gmail.com");
        user.setFullName("Pierluigi Vernetto");
        userRepository.save(user);
        RideEntryEntity rideEntry = new RideEntryEntity();
        rideEntry.setRideDate(new Date());
        rideEntry.setRideTime("05");
        rideEntry.setRideType(RideType.REQUEST);

        rideEntryRepository.save(rideEntry);
    }
}
