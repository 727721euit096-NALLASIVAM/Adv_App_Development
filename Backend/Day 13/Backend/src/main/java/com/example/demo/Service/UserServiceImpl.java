package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.dto.UserDTO;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User register(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmailId(userDTO.getEmailId());
        user.setPhone(userDTO.getPhone());
        user.setAge(userDTO.getAge());
        user.setGender(userDTO.getGender());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }

    @Override
    public User login(String emailId, String password) {
        return userRepository.findByEmailId(emailId);
    }
}
