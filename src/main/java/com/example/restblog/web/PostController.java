package com.example.restblog.web;

import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
@CrossOrigin

public class PostController {


    @GetMapping
    private List<Post> getAll() {
        ArrayList<Post> posts = new ArrayList<>();
        posts.add(new Post (1L, "Post 11 ", "Blah"));
        posts.add(new Post (2L, "Post 12 ", "Blah Blah"));
        posts.add(new Post (3L, "Post 13 ", "Blah Blah Blah"));

        return posts;
    }

//    GET /API/POSTS/5 <--- EXAMPLE FETCH THE BLOG POST WITH ID 5
    @GetMapping("{postId}")
    public Post getById(@PathVariable Long postId){
        return new Post(postId, "Post " + postId, "Blah blah new blah");
    }

    @PostMapping
    private void createPost(@RequestBody Post newPost){
        System.out.println("Ready to add post: " + newPost);
    }

    @PutMapping("{postid}")
    private void updatePost(@PathVariable Long postId, @RequestBody Post newPost){
        System.out.printf("Backend wants to update post id %\n", postId);
    }

    @DeleteMapping({"postId"})
    private void deletePost(@PathVariable Long postId){
        System.out.printf("Backend wants to delete post id %d\n", postId);
    }
}
