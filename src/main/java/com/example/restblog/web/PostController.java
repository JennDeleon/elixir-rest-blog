package com.example.restblog.web;

import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public class PostController {
    @RestController
    @RequestMapping(value = "/api/posts", headers = "Accept=application/json")
    public class PostsController {

    }

    @GetMapping
    private List<Post> getAll() {
        return null;
    }

//    GET /API/POSTS/5 <--- FETCH THE BLOG POST WITH ID 5
    @GetMapping("{postId}")
    public Post getById(@PathVariable Long postId){
        return null;
    }

}
