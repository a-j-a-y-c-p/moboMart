package com.moboMart.moboMart.Services;

import com.moboMart.moboMart.Models.Product;
import com.moboMart.moboMart.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Page<Product> allProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
    public Optional<Product> SingleProduct(String id){
        return productRepository.findById(id);
    }
}
