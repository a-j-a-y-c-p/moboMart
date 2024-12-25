package com.moboMart.moboMart.Repository;

import com.moboMart.moboMart.Model.Product;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Optional<Product> findById(String id);

    Page<Product> findByTitleContainingIgnoreCase(String title, PageRequest pageRequest);
}
