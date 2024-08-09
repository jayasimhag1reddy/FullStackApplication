package com.FullStackApp.Backend.Controllers;


import com.FullStackApp.Backend.Model.User;
import com.FullStackApp.Backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/User")
public class UserController {

    @Autowired
    private UserRepo userRepo;


    @GetMapping("/getUsers")
    public List<User> getUser(){
        return userRepo.findAll();
    }

    @PostMapping("/addUser")
    public User AddNewUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }
}
