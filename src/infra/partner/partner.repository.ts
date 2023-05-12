import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../app/database.config';
import { Repository } from '../../domain/repository.interface';
import { GetPartnersArgs } from './dto/get-partner.dto';
import { Partner } from './models/partner.model';

@Injectable()
export class PartnerRepository implements Repository {
  constructor(private readonly prisma: PrismaService) { }

  async create(params: { data: Prisma.PartnerCreateInput }): Promise<any> {
    const { data } = params;
    return await this.prisma.partner.create({
      data, include: {
        image: true
      }
    });
  }

  async get(params: GetPartnersArgs): Promise<any> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.partner.findMany({
      skip, take, cursor, where, orderBy, include: {
        image: true
      }
    });
  }

  async update(params: {
    where: Prisma.PartnerWhereUniqueInput;
    data: Prisma.PartnerUpdateInput;
  }): Promise<Partner> {
    const { where, data } = params;
    return this.prisma.partner.update({ where, data });
  }

  async delete(params: {
    where: Prisma.PartnerWhereUniqueInput;
  }): Promise<Partner> {
    const { where } = params;
    return this.prisma.partner.delete({ where });
  }

  async deleteAll(): Promise<number> {
    const deletedPartners = await this.prisma.partner.deleteMany();
    return deletedPartners.count;
  }
}