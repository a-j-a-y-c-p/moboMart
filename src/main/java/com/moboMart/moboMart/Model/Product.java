package com.moboMart.moboMart.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document (collection = "products")
public class Product {

    @Id
    private String id;

    @Field(value = "Brand")
    private String brand;

    @Field(value = "Title")
    private String title;

    @Field(value = "Price")
    private Integer price;

    @Field(value = "Color")
    private String color;

    @Field(value = "SIM Type")
    private String simType;

    @Field(value = "Hybrid Sim Slot")
    private Boolean hybridSimSlot;

    @Field(value = "Quick Charging")
    private Boolean quickCharging;

    @Field(value = "Sound Enhancements")
    private String soundEnhancements;

    @Field(value = "Display_size_inches")
    private Double displaySizeInches;

    @Field(value = "Resolution")
    private String resolution;

    @Field(value = "Resolution Type")
    private String resolutionType;

    @Field(value = "Operating System")
    private String operatingSystem;

    @Field(value = "Processor Type")
    private String processorType;

    @Field(value = "Processor Core")
    private String processorCore;

    @Field(value = "Internal Storage")
    private String internalStorage;

    @Field(value = "Primary Camera")
    private String primaryCamera;

    @Field(value = "Secondary Camera")
    private String secondaryCamera;

    @Field(value = "Video Recording Resolution")
    private String videoRecordingResolution;

    @Field(value = "Frame Rate")
    private String frameRate;

    @Field(value = "Supported Networks")
    private String supportedNetworks;

    @Field(value = "Bluetooth Version")
    private String bluetoothVersion;

    @Field(value = "Wi-Fi Version")
    private String wifiVersion;

    @Field(value = "Sensors")
    private String sensors;

    @Field(value = "Other Features")
    private String otherFeatures;

    @Field(value = "Battery Capacity")
    private String batteryCapacity;

    @Field(value = "Width")
    private String width;

    @Field(value = "Height")
    private String height;

    @Field(value = "Depth")
    private String depth;

    @Field(value = "Weight")
    private String weight;

    @Field(value= "ImgUrl")
    private String imgUrl;

}
