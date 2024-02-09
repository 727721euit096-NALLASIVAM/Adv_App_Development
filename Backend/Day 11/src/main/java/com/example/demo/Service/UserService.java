package com.example.demo.Service;

import com.example.demo.Entity.User;
import com.example.demo.dto.UserDTO;

public interface UserService {
    User register(UserDTO userDTO);
    User login(String emailId, String password);
}
