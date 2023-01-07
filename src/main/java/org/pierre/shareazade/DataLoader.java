package org.pierre.shareazade;

import lombok.AllArgsConstructor;
import org.pierre.shareazade.constants.ShareType;
import org.pierre.shareazade.entities.CityEntity;
import org.pierre.shareazade.entities.ShareEntryEntity;
import org.pierre.shareazade.entities.ShareUserEntity;
import org.pierre.shareazade.repositories.CityRepository;
import org.pierre.shareazade.repositories.ShareEntryRepository;
import org.pierre.shareazade.repositories.ShareUserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@AllArgsConstructor
@Component
public class DataLoader implements ApplicationRunner {
    private final ShareEntryRepository shareEntryRepository;
    private final CityRepository cityRepository;
    private final ShareUserRepository shareUserRepository;

    public void run(ApplicationArguments args) {
        CityEntity cityEntity = new CityEntity();
        cityEntity.setCityName("Aosta");
        cityRepository.save(cityEntity);
        ShareUserEntity shareUser = new ShareUserEntity();
        shareUser.setTelephone("0762124321");
        shareUser.setEmail("publicpierre@gmail.com");
        shareUser.setFullName("Pierluigi Vernetto");
        shareUserRepository.save(shareUser);
        ShareEntryEntity shareEntry = new ShareEntryEntity();
        shareEntry.setShareDate(new Date());
        shareEntry.setShareType(ShareType.REQUEST);

        shareEntryRepository.save(shareEntry);
    }
}
