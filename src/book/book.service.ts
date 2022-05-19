import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  findMany() {
    return this.bookModel.find().lean();
  }

  findById(id) {
    return this.bookModel.findById(id).lean();
  }

  findByAuthorId(authorId) {
    return this.bookModel.find({ author: authorId });
  }

  createBook(createBookInput: CreateBookInput) {
    return this.bookModel.create(createBookInput);
  }
}
