import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../app/database.config';
import { Repository } from '../../domain/repository.interface';
import { GetImagesArgs } from './dto/get-image.dto';
import { Image } from './models/image.model';

@Injectable()
export class ImageRepository implements Repository {
  constructor(private readonly prisma: PrismaService) { }

  async create(params: { data: Prisma.ImageCreateInput }): Promise<any> {
    const { data } = params;
    return await this.prisma.image.create({
      data, include: {
        partner: {
          select: {
            id: true,
            name: true,
            description: true,
            website: true,
            createdAt: true,
            updatedAt: true
          }
        },
        facility: {
          select: {
            id: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true
          }
        },
        horse: {
          select: {
            id: true,
            name: true,
            nickname: true,
            after: true,
            birthyear: true,
            category: true,
            gender: true,
            color: true,
            owner: true,
            createdAt: true,
            updatedAt: true,
          }
        }
      }
    });
  }

  async get(params: GetImagesArgs): Promise<any> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.image.findMany({
      skip, take, cursor, where, orderBy, include: {
        partner: {
          select: {
            id: true,
            name: true,
            description: true,
            website: true,
            createdAt: true,
            updatedAt: true
          }
        },
        facility: {
          select: {
            id: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true
          }
        },
        horse: {
          select: {
            id: true,
            name: true,
            nickname: true,
            after: true,
            birthyear: true,
            category: true,
            gender: true,
            color: true,
            owner: true,
            createdAt: true,
            updatedAt: true,
          }
        }
      }
    });
  }

  async update(params: {
    where: Prisma.ImageWhereUniqueInput;
    data: Prisma.ImageUpdateInput;
  }): Promise<Image> {
    const { where, data } = params;
    return this.prisma.image.update({ where, data });
  }

  async delete(params: {
    where: Prisma.ImageWhereUniqueInput;
  }): Promise<Image> {
    const { where } = params;
    return this.prisma.image.delete({ where });
  }

  async deleteAll(): Promise<number> {
    const deletedImages = await this.prisma.image.deleteMany();
    return deletedImages.count;
  }
}