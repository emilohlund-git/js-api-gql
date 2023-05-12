import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../app/database.config';
import { Repository } from '../../domain/repository.interface';
import { GetFacilityArgs } from './dto/get-facility.dto';
import { Facility } from './models/facility.model';

@Injectable()
export class FacilityRepository implements Repository {
  constructor(private readonly prisma: PrismaService) { }

  async create(params: { data: Prisma.FacilityCreateInput }): Promise<any> {
    const { data } = params;
    return await this.prisma.facility.create({
      data, include: {
        images: true
      }
    });
  }

  async get(params: GetFacilityArgs): Promise<any> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.facility.findMany({
      skip, take, cursor, where, orderBy, include: {
        images: true
      }
    });
  }

  async update(params: {
    where: Prisma.FacilityWhereUniqueInput;
    data: Prisma.FacilityUpdateInput;
  }): Promise<Facility> {
    const { where, data } = params;
    return this.prisma.facility.update({ where, data });
  }

  async delete(params: {
    where: Prisma.FacilityWhereUniqueInput;
  }): Promise<Facility> {
    const { where } = params;
    return this.prisma.facility.delete({ where });
  }

  async deleteAll(): Promise<number> {
    const deletedFacilitys = await this.prisma.facility.deleteMany();
    return deletedFacilitys.count;
  }
}