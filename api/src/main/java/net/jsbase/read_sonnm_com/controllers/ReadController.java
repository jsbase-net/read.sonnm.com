package net.jsbase.read_sonnm_com.controllers;

import net.jsbase.read_sonnm_com.models.Video;
import net.jsbase.read_sonnm_com.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reads")
public class ReadController {
    @Autowired
    private VideoService videoService;
    @GetMapping("videos")
    public ResponseEntity<List<Video>> getAllVideos(){
        return new ResponseEntity<List<Video>>(videoService.getAllVideos(), HttpStatus.OK);
    }
}
