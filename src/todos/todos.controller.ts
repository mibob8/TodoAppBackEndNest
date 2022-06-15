import { TodoDTO } from './todo.dto';
import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): Promise<any> {
    return this.todoService.create(createTodo.title, createTodo.status);
  }

  @Put(':id')
  updateTodo(@Body() updateTodo: Todo, @Param('id') id): Todo { 
    this.todoService.update(updateTodo);
    return updateTodo;
  }
}
