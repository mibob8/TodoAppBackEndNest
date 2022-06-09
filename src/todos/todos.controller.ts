import { TodoDTO } from './todo.dto';
import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';


@Controller('todos')
export class TodosController {
  @Get()
  getTodos(): TodoDTO[] {
    return null;
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): TodoDTO {
    // const newTodo: TodoDTO = {
    //   id: (todosData.length + 1).toString(),
    //   ...createTodo,
    // };

    // todosData = [...todosData, newTodo];

    return createTodo;
  }

  @Put(':id')
  updateTodo(@Body() updateTodo: TodoDTO, @Param('id') id): TodoDTO {
    // todosData = todosData.map((todo) => (todo.id === id ? updateTodo : todo));

    return updateTodo;
  }
}
