import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "./movie-entity";
import { MovieService } from "./movie-service";
import { MovieController } from "./movie-controller";
import {SupabaseModule} from "@nestjs/platform-express"

@Module({
    imports: [TypeOrmModule.forFeature([Movie])
    SupabaseModule,
],
    providers:[MovieService],
    controllers: [MovieController]
})
export class MovieModule{}