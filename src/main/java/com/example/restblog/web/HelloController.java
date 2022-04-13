package com.example.restblog.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/hello")
    @ResponseBody
    public String hello() {
        return "Hello from Spring!";  /*The body of the response */
    }

    @GetMapping("/hello/{name}")
    @ResponseBody
    public String sayHello(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    @GetMapping("/increment/{number}")
    public String addOne(@PathVariable int number) {
        return number + " plus one is" + (number + 1) + "!";
    }

}
