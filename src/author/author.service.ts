import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument, CreateAuthorInput } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  findById(id) {
    return this.authorModel.findById(id).lean();
  }

  findMany() {
    return this.authorModel.find().lean();
  }

  createAuthor(input: CreateAuthorInput) {
    return this.authorModel.create(input);
  }
}
