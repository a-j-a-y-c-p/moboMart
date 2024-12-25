package com.moboMart.moboMart.Repository;

import com.moboMart.moboMart.Model.OldProduct;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OldProductRepository extends MongoRepository<OldProduct, ObjectId> {
    Optional<OldProduct> findById(String id);


    Page<OldProduct> findByModelContainingIgnoreCase(String title, PageRequest pageRequest);

}
