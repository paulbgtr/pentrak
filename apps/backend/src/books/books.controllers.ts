import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
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
    try {
      const book = await this.booksService.create(createBookDto);
      return book;
    } catch (err) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
