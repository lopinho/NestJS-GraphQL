import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/book/book.schema';
import { BookService } from '../book/book.service';
import { AuthorResolver } from './author.resolver';
import { Author, AuthorSchema } from './author.schema';
import { AuthorService } from './author.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  providers: [AuthorResolver, AuthorService, BookService],
})
export class AuthorModule {}
