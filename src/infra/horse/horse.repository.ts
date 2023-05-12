import { Injectable } from '@nestjs/common';
import { Horse, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/database.config';
import { Repository } from '../../domain/repository.interface';
import { GetHorseArgs } from './dto/get-horse.dto';

@Injectable()
export class HorseRepository implements Repository {
  constructor(private readonly prisma: PrismaService) { }

  async create(params: { data: Prisma.HorseCreateInput }): Promise<Horse> {
    const { data } = params;
    return this.prisma.horse.create({
      data, include: {
        images: true
      }
    });
  }

  async get(params: GetHorseArgs): Promise<Horse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.horse.findMany({
      skip, take, cursor, where, orderBy, include: {
        images: true
      }
    });
  }

  async update(params: {
    where: Prisma.HorseWhereUniqueInput;
    data: Prisma.HorseUpdateInput;
  }): Promise<Horse> {
    const { where, data } = params;
    return this.prisma.horse.update({ where, data });
  }

  async delete(params: {
    where: Prisma.HorseWhereUniqueInput;
  }): Promise<Horse> {
    const { where } = params;
    return this.prisma.horse.delete({ where });
  }
}