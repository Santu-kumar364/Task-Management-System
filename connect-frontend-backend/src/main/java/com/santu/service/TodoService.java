package com.santu.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.santu.model.Todo;

@Service
public interface TodoService {

    List<Todo> getAllTodos();

    Todo createTodo(Todo todo);

    void deleteTodo(Long id) throws Exception;
}