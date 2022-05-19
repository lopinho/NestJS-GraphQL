import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    MongooseModule.forRoot(
      `mongodb://${url}?serverSelectionTimeoutMS=2000&authSource=admin`,
      { useNewUrlParser: true },
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      playground: true,
      debug: true,
      introspection: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
