package com.santu.reposotory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santu.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>  {

    
}  
