package org.pierre.shareazade.controllers;

import io.swagger.annotations.Api;
import org.pierre.shareazade.constants.RideType;
import org.pierre.shareazade.dtos.RideEntryDTO;
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
    public List<RideEntryDTO> getAllRides() throws Exception {
        RideEntryDTO rideEntryDTO = new RideEntryDTO();
        rideEntryDTO.setRideComment("commento");
        rideEntryDTO.setId(2L);
        rideEntryDTO.setRideDate(new Date());
        rideEntryDTO.setRideType(RideType.REQUEST);

        return Arrays.asList(rideEntryDTO);
    }

}
