package com.moboMart.moboMart.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
public class OldProductDto {

    @Id
    private String id;
    private String model;
    private String image;
    private Double expectedPrice;
    private Integer ram;
    private Integer rom;
    private String phoneAge;
    private Boolean hasBill;
    private Boolean hasWarranty;

    public OldProductDto(ObjectId id, String model, String image, Double expectedPrice, Integer ram, Integer rom, String phoneAge, Boolean hasBill, Boolean hasWarranty) {
        this.id = id != null ? id.toHexString() : null;
        this.model = model;
        this.image = image;
        this.expectedPrice = expectedPrice;
        this.ram = ram;
        this.rom = rom;
        this.phoneAge = phoneAge;
        this.hasBill = hasBill;
        this.hasWarranty = hasWarranty;
    }

    public OldProductDto(String model, String image, Double expectedPrice, Integer ram, Integer rom, String phoneAge, Boolean hasBill, Boolean hasWarranty) {
        this.model = model;
        this.image = image;
        this.expectedPrice = expectedPrice;
        this.ram = ram;
        this.rom = rom;
        this.phoneAge = phoneAge;
        this.hasBill = hasBill;
        this.hasWarranty = hasWarranty;
    }
}
