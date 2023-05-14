import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Horse, Prisma } from "@prisma/client";
import { HorseService } from "../horse.service";

@Controller('horse')
export class HorseController {
  constructor(private readonly horseService: HorseService) { }

  @Post()
  async create(@Body() params: { data: Prisma.HorseCreateInput }): Promise<Horse> {
    return this.horseService.create(params);
  }

  @Get()
  async get(): Promise<Horse[]> {
    return this.horseService.get({});
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Horse> {
    const response = await this.horseService.get({
      where: {
        id: {
          equals: id
        }
      }
    });

    return response[0];
  }

  @Get('/category/:category')
  async getByCategory(@Param('category') category: string): Promise<Horse[]> {
    console.log(category);
    const response = await this.horseService.get({
      where: {
        category: {
          equals: category
        }
      }
    });

    return response;
  }
}