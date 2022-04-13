package com.example.restblog.web;

import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")

public class PostController {


    @GetMapping
    private List<Post> getAll() {
        ArrayList<Post> posts = new ArrayList<>();
        posts.add(new Post (1L, "Post 1 ", "Blah"));
        posts.add(new Post (2L, "Post 1 ", "Blah Blah"));
        posts.add(new Post (3L, "Post 1 ", "Blah Blah Blah"));

        return posts;
    }

//    GET /API/POSTS/5 <--- EXAMPLE FETCH THE BLOG POST WITH ID 5
    @GetMapping("{postId}")
    public Post getById(@PathVariable Long postId){
        return new Post(postId, "Post " + postId, "Blah blah new blah");
    }

}
