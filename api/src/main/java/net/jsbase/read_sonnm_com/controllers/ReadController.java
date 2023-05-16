package net.jsbase.read_sonnm_com.controllers;

import jakarta.annotation.security.PermitAll;
import net.jsbase.read_sonnm_com.models.Video;
import net.jsbase.read_sonnm_com.services.VideoService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reads")
public class ReadController {
    @Autowired
    private VideoService videoService;
    @GetMapping("videos")
    public ResponseEntity<List<Video>> getAllVideos(){
        return new ResponseEntity<List<Video>>(videoService.getAllVideos(), HttpStatus.OK);
    }

    @GetMapping("videos/{id}")
    public ResponseEntity<Optional<Video>> getVideo(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Video>>(videoService.getVideo(id), HttpStatus.OK);
    }

    @PostMapping("videos")
    public ResponseEntity<Video> createVideo(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Video>(videoService.createVideo(payload) ,HttpStatus.OK);
    }
}
