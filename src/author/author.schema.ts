import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Book } from '../book/book.schema';

export type AuthorDocument = Author & Document;

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' } })
  @Field(() => [Book])
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;
}
