import { Body, Controller, Get, Post } from "@nestjs/common";
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
  async get(@Body() params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HorseWhereUniqueInput;
    where?: Prisma.HorseWhereInput;
    orderBy?: Prisma.HorseOrderByWithRelationInput;
  }): Promise<Horse[]> {
    return this.horseService.get(params);
  }
}