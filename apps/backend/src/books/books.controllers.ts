import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }
}
