package org.pierre.shareazade.controllers;

import io.swagger.annotations.Api;
import lombok.AllArgsConstructor;
import org.pierre.shareazade.constants.RideType;
import org.pierre.shareazade.converters.EntityDTOConverter;
import org.pierre.shareazade.dtos.RideEntryDTO;
import org.pierre.shareazade.services.RideEntryService;
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
@AllArgsConstructor
public class ShareController {

    private final RideEntryService rideEntryService;
    private final EntityDTOConverter entityDTOConverter;

    @GetMapping("/getAll")
    public List<RideEntryDTO> getAllRides() {
        return entityDTOConverter.convertRideEntryEntityToDTOList(rideEntryService.findALl());
    }

}
