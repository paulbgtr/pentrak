import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './create-book.dto';
import { Book } from './book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll() {
    try {
      const books = await this.booksService.findAll();

      if (books.length === 0)
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

      return books;
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) throw error;

      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      const book = await this.booksService.create(createBookDto);
      return book;
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
