import { Injectable } from "@nestjs/common";
import { Horse, Prisma } from "@prisma/client";
import { GetHorseArgs } from "./dto/get-horse.dto";
import { HorseRepository } from "./horse.repository";

@Injectable()
export class HorseService {
  constructor(private readonly repository: HorseRepository) { }

  async create(params: { data: Prisma.HorseCreateInput }): Promise<Horse> {
    const horse = await this.repository.create(params);

    return horse;
  }

  async get(params: GetHorseArgs): Promise<Horse[]> {
    const horses = await this.repository.get(params);
    return horses;
  }

  async delete(params: {
    where: Prisma.HorseWhereUniqueInput;
  }): Promise<Horse> {
    const horse = await this.repository.delete(params);
    return horse;
  }

  async update(params: {
    where: Prisma.HorseWhereUniqueInput;
    data: Prisma.HorseUpdateInput;
  }): Promise<Horse> {
    const horse = await this.repository.update(params);
    return horse;
  }
}