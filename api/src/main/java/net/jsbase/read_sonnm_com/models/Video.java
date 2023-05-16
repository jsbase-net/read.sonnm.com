package net.jsbase.read_sonnm_com.models;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "videos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Video {
    @JsonSerialize(using= ToStringSerializer.class)
    @Id
    private ObjectId id;
    private String name;
    private String url;
    private String category;
    private List<String> tags;

    public Video(String name, String url, String category, List<String> tags) {
        this.name = name;
        this.url = url;
        this.category = category;
        this.tags = tags;
    }
}
