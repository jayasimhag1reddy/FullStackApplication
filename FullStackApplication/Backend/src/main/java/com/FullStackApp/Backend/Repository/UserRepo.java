package com.FullStackApp.Backend.Repository;

import com.FullStackApp.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {

}
