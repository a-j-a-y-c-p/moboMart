package com.moboMart.moboMart.Controller;

import com.moboMart.moboMart.DTO.OldProductDto;
import com.moboMart.moboMart.Model.OldProduct;
import com.moboMart.moboMart.Service.OldProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/old-products")
public class OldProductController {

    @Autowired
    private OldProductService oldProductService;

    @PostMapping
    public ResponseEntity<String> sellPhone(@RequestParam("model") String model,
                                            @RequestParam("ram") Integer ram,
                                            @RequestParam("rom") Integer rom,
                                            @RequestParam("expectedPrice") Double expectedPrice,
                                            @RequestParam("phoneAge") String phoneAge,
                                            @RequestParam("hasBill") Boolean hasBill,
                                            @RequestParam("hasWarranty") Boolean hasWarranty,
                                            @RequestParam("image") MultipartFile image) throws IOException {

        return new ResponseEntity<String>(oldProductService.savePhone( model,  ram,  rom,  expectedPrice,  phoneAge,  hasBill,  hasWarranty, image), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<OldProductDto>> getAllOldProducts(@RequestParam(defaultValue = "0") int page,
                                                                 @RequestParam(defaultValue = "10") int size,
                                                                 @RequestParam(required = false) String search) {
        return new ResponseEntity<>(oldProductService.allOldProducts(PageRequest.of(page, size), search), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<OldProduct>> getOldProductById(@PathVariable String id){
        return new ResponseEntity<Optional<OldProduct>>(oldProductService.SingleOldProduct(id),HttpStatus.OK);
    }
}
