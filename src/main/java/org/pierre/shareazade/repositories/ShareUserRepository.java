package org.pierre.shareazade.repositories;

import org.pierre.shareazade.entities.ShareUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShareUserRepository extends JpaRepository<ShareUserEntity, Long> {

}
