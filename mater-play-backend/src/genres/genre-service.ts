import { Injectable } from "@nestjs/common";
import { Genre } from "./genre-entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GenreService {

    constructor(
        @InjectRepository(Genre)
        private repository: Repository<Genre>,
    ) {}

    findAll(): Promise<Genre[]> {
        return this.repository.find({
        });
       

    }

    findById(id: string): Promise<Genre> {
        return this.repository.findOneBy({id: id });
    }

    save(category: Genre): Promise<Genre> {
        return this.repository.save(category);
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}