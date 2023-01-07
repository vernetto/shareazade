package org.pierre.shareazade.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.pierre.shareazade.constants.ShareType;
import org.pierre.shareazade.dtos.ShareEntryDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Api(value = "Order Rest Controller", description = "REST API for Order")
@RequestMapping("/share/")
@RestController
@CrossOrigin
public class ShareController {
    @GetMapping("/getAll")
    public List<ShareEntryDTO> getAllShares() throws Exception {
        ShareEntryDTO shareEntryDTO = new ShareEntryDTO();
        shareEntryDTO.setShareComment("commento");
        shareEntryDTO.setId(2L);
        shareEntryDTO.setShareDate(new Date());
        shareEntryDTO.setShareType(ShareType.REQUEST);

        return Arrays.asList(shareEntryDTO);
    }

}
