package net.jsbase.read_sonnm_com.services;

import net.jsbase.read_sonnm_com.models.Video;
import net.jsbase.read_sonnm_com.repositories.VideoRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    private VideoRepository videoRepository;
    public List<Video> getAllVideos(){
        return videoRepository.findAll();
    }

    public Optional<Video> getVideo(ObjectId id){
        return videoRepository.findById(id);
    }

    public Video createVideo(Map<String, String> payload) {
        Video video = new Video(payload.get("name"),
                payload.get("url"), payload.get("category"),
                Arrays.stream(payload.get("tags").split(",")).toList());
        videoRepository.insert(video);
        return video;
    }
}
