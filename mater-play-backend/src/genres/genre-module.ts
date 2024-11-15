import { Genre } from './genre-entity';
import { Module } from "@nestjs/common";
import { GenreController } from './genre-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreService } from './genre-service';

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    providers:[GenreService],
    controllers: [GenreController]
})
export class GenreModule{}