package org.pierre.shareazade.dtos;

import lombok.Data;
import org.pierre.shareazade.constants.ShareType;

import java.util.Date;

@Data
public class ShareEntryDTO {
    private Long id;
    private Date shareDate;
    private String shareTime;
    private ShareType shareType;
    private String shareComment;
}
