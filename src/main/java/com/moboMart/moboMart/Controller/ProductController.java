package com.moboMart.moboMart.Controller;

import com.moboMart.moboMart.Model.Product;
import com.moboMart.moboMart.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        return new ResponseEntity<>(productService.allProducts(PageRequest.of(page, size)), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable String id){
        return new ResponseEntity<Optional<Product>>(productService.SingleProduct(id),HttpStatus.OK);
    }
}
