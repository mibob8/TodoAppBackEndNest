import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(title: string, status: string): Promise<Todo> {
    const todo = await this.todoRepository.create({ title, status });
    return await this.todoRepository.save(todo);
  }

  async update(todo: Todo): Promise<UpdateResult> {
    return await this.todoRepository.update(todo.id, todo);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
