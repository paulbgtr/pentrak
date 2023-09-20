import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

type Link = {
  name: string;
  link: string;
};

type Book = {
  links: Link[];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
};

@Injectable()
export class DbService {
  constructor(private readonly configService: ConfigService) {}

  private readonly dbURI = this.configService.get<string>('DB_URI');
  readonly client = mongoose.connect(this.dbURI);

  private readonly bookSchema = new mongoose.Schema({
    links: [Object],
    author: String,
    title: String,
    description: String,
    imageUrl: String,
  });

  readonly Books = mongoose.model('Book', this.bookSchema);

  async addBook(book: Book) {
    try {
      const newBook = await this.Books.create(book);
      return newBook;
    } catch (error) {
      throw error;
    }
  }
}
