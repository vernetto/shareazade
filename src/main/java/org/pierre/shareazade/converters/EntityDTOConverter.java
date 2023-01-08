package org.pierre.shareazade.converters;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.pierre.shareazade.dtos.RideEntryDTO;
import org.pierre.shareazade.entities.RideEntryEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@AllArgsConstructor
@Component
public class EntityDTOConverter {
    private final ModelMapper modelMapper;

    public RideEntryDTO convertRideEntryEntityToDTO(RideEntryEntity rideEntryEntity) {
        return modelMapper.map(rideEntryEntity, RideEntryDTO.class);
    }

    public List<RideEntryDTO> convertRideEntryEntityToDTOList(List<RideEntryEntity> rideEntryEntityList) {
        List<RideEntryDTO> rideEntryEntityDTOList = modelMapper.map(rideEntryEntityList, new TypeToken<List<RideEntryDTO>>() {}.getType());
        return rideEntryEntityDTOList;
    }

}
