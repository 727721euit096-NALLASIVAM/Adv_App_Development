package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import com.example.demo.dto.UserDTO;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
public class UserController {
    

    @Autowired
    private UserService userService;

    @Tag(name = "NALLASIVAM",description = "Top Up")

    @PostMapping("/register")
    public User registerUser(@RequestBody UserDTO userDTO) {
        return userService.register(userDTO);
    }

    @PostMapping("/login")
    public User loginUser(@RequestParam String emailId, @RequestParam String password) {
        return userService.login(emailId, password);
    }
}
