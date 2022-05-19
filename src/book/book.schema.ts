import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Author } from '../author/author.schema';

export type BookDocument = Book & Document;

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Author.name })
  @Field(() => Author)
  author: Author | number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({ author: 1 });

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}

@InputType()
export class FindBookInput {
  @Field()
  _id: string;
}
