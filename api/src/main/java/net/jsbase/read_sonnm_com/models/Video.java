package net.jsbase.read_sonnm_com.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "videos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Video {
    @Id
    private ObjectId id;
    private String name;
    private String url;
    private String category;
    private ArrayList<String> tags;

}
