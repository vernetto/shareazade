package org.pierre.shareazade.entities;
import jakarta.persistence.*;
import org.pierre.shareazade.constants.ShareType;

import java.util.Date;


@Entity
public class ShareEntry {
    @Id
    @GeneratedValue(generator="shareentry_seq")
    @SequenceGenerator(name="shareentry_seq",sequenceName="SHAREENTRY_SEQ", allocationSize=1, initialValue = 1)
    private Long id;

    @Column(nullable = false)
    private Date shareDate;

    @Column(length = 5, nullable = false)
    private String fromTime;
    @Column(length = 5, nullable = false)
    private String toTime;

    @Enumerated(EnumType.STRING)
    private ShareType shareType;

}
