package net.jsbase.read_sonnm_com.repositories;

import net.jsbase.read_sonnm_com.models.Video;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoRepository extends MongoRepository<Video, ObjectId> {
}
