import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Genre } from "./genre-entity";
import { GenreService } from "./genre-service";

@Controller('genre')
export class GenreController {
    constructor(private service: GenreService) {}

 @Get()
 findAll(): Promise<Genre[]> {
    return this.service.findAll();
 }

 @Get(':id')
 async findById(@Param('id', ParseIntPipe) id: string): Promise<Genre> { 
   const found = await this.service.findById(id);

   if (!found) {
      throw new HttpException('genre not found', HttpStatus.NOT_FOUND);
   }

    return found;
 }

 @Post()
 create(@Body() genre: Genre): Promise<Genre> {
   return this.service.save(genre);
 }


 @Put()
 async update(
    @Param('id', ParseIntPipe) id: string,
    @Body()genre: Genre
): Promise<Genre> { 
   const found = await this.service.findById(id);

 if (!found) {
   throw new HttpException('genre not found', HttpStatus.NOT_FOUND);
}

 genre.id = found.id;

 return this.service.save(genre);
}
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
  const found = await this.service.findById(id);

  if (!found) {
   throw new HttpException('category not found', HttpStatus.NOT_FOUND);
  }

  return this.service.remove(id);
  }

}
