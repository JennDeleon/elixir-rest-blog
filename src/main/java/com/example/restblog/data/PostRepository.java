package com.example.restblog.data;

import com.example.restblog.dataOriginal.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
