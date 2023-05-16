package net.jsbase.read_sonnm_com.services;

import net.jsbase.read_sonnm_com.models.Video;
import net.jsbase.read_sonnm_com.repositories.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {
    @Autowired
    private VideoRepository videoRepository;
    public List<Video> getAllVideos(){
        return this.videoRepository.findAll();
    }
}
