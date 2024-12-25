package com.moboMart.moboMart.Service;

import com.moboMart.moboMart.Model.Product;
import com.moboMart.moboMart.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Page<Product> allProducts(PageRequest pageRequest, String search) {
        if (search != null && !search.trim().isEmpty()) {
            return productRepository.findByTitleContainingIgnoreCase(search, pageRequest);
        } else {
            return productRepository.findAll(pageRequest);
        }
    }

    public Optional<Product> SingleProduct(String id){
        return productRepository.findById(id);
    }
}
