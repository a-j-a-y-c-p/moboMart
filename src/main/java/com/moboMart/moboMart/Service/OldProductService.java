package com.moboMart.moboMart.Service;

import com.moboMart.moboMart.DTO.OldProductDto;
import com.moboMart.moboMart.Model.OldProduct;
import com.moboMart.moboMart.Repository.OldProductRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class OldProductService {

    @Autowired
    private OldProductRepository oldProductRepository;

    public String savePhone(String model, Integer ram, Integer rom, Double expectedPrice, String phoneAge, Boolean hasBill, Boolean hasWarranty, MultipartFile image){
        try{
            byte[] imageBytes = image.getBytes();

            OldProduct phone = new OldProduct(model,ram, rom, expectedPrice,phoneAge,hasBill,hasWarranty,new Binary(imageBytes));
            oldProductRepository.save(phone);
        }catch (Exception ex){
            return "Save Failed";
        }
        return "Save Successful";
    }

    public Page<OldProductDto> allOldProducts(PageRequest pageRequest, String search) {
        Page<OldProduct> oldProductsPage;
        if (search != null && !search.trim().isEmpty()) {
            oldProductsPage = oldProductRepository.findByModelContainingIgnoreCase(search, pageRequest);
        } else {
            oldProductsPage = oldProductRepository.findAll(pageRequest);
        }

        // Convert each product to a ProductImageResponse with Base64 image
        Page<OldProductDto> products = oldProductsPage.map(product -> {
            String base64Image = null;

            // Convert binary image data to Base64
            if (product.getImage() != null && product.getImage().getData() != null) {
                base64Image = Base64.encodeBase64String(product.getImage().getData());
            }            // Return a new response DTO containing product details and Base64 image
            return new OldProductDto(
                    product.getId(),
                    product.getModel(),
                    base64Image,
                    product.getExpectedPrice(),
                    product.getRam(),
                    product.getRom(),
                    product.getPhoneAge(),
                    product.getHasBill(),
                    product.getHasWarranty()
            );
        });

        return products;
    }

    public Optional<OldProduct> SingleOldProduct(String id){
        return oldProductRepository.findById(id);
    }
}
