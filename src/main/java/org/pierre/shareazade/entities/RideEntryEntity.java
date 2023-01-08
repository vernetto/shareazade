package org.pierre.shareazade.entities;
import jakarta.persistence.*;
import lombok.Data;
import org.pierre.shareazade.constants.RideType;

import java.util.Date;


@Entity
@Data
public class RideEntryEntity {
    @Id
    @GeneratedValue(generator="rideentry_seq")
    @SequenceGenerator(name="rideentry_seq",sequenceName="RIDEENTRY_SEQ", allocationSize=1, initialValue = 1)
    private Long id;

    @Column(nullable = false)
    private Date rideDate;

    @Column(length = 5, nullable = false)
    private String rideTime;

    @Enumerated(EnumType.STRING)
    private RideType rideType;

    @Column(length = 100, nullable = true)
    private String shareComment;

    @ManyToOne
    private UserEntity userEntity;

    @ManyToOne
    private CityEntity fromCity;

    @ManyToOne
    private CityEntity toCity;

}
