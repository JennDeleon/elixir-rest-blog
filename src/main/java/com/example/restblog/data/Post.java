package com.example.restblog.data;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Post {
    private Long id;
    private String title;
    private String content;
    private LocalDate createPost;

}
