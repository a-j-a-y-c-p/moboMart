package com.moboMart.moboMart.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "old-products")
public class OldProduct {

    @Id
    private ObjectId id;
    private String model;
    private Integer ram;
    private Integer rom;
    private Double expectedPrice;
    private String phoneAge;
    private Boolean hasBill;
    private Boolean hasWarranty;
    private Binary image;

    public OldProduct(String model, Integer ram, Integer rom, Double expectedPrice, String phoneAge, Boolean hasBill, Boolean hasWarranty, Binary image) {
        this.model = model;
        this.ram = ram;
        this.rom = rom;
        this.expectedPrice = expectedPrice;
        this.phoneAge = phoneAge;
        this.hasBill = hasBill;
        this.hasWarranty = hasWarranty;
        this.image = image;
    }
}
