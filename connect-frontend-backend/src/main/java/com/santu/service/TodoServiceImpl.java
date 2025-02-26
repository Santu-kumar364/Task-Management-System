package com.santu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.santu.model.Todo;
import com.santu.reposotory.TodoRepository;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
         
    }

    @Override
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
         
    }

    @Override
    public void deleteTodo(Long id) throws Exception {
        Todo todo = todoRepository.findById(id).orElseThrow(()->new Exception("todo not exists"));

        todoRepository.delete(todo);
        
    }
    
}
