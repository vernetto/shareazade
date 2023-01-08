package org.pierre.shareazade.dtos;

import jakarta.persistence.*;
import lombok.Data;


@Data
public class CityDTO {
    private Long id;
    private String cityName;
}
