import { Injectable } from '@nestjs/common';
import { HorseCategory, HorseColor, HorseGender, Prisma } from '@prisma/client';
import { PrismaService } from '../../app/database.config';
import { GetHorseCategoriesArgs } from './dto/get-horse-categories.dto';
import { GetHorseColorsArgs } from './dto/get-horse-colors.dto';
import { GetHorseGendersArgs } from './dto/get-horse-genders.dto';

@Injectable()
export class SettingsRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createColor(params: { data: Prisma.HorseColorCreateInput }): Promise<HorseColor> {
    return this.prisma.horseColor.create(params)
  }

  async createGender(params: { data: Prisma.HorseGenderCreateInput }): Promise<HorseGender> {
    return this.prisma.horseGender.create(params)
  }

  async createCategory(params: { data: Prisma.HorseCategoryCreateInput }): Promise<HorseCategory> {
    return this.prisma.horseCategory.create(params);
  }

  async getColors(params: GetHorseColorsArgs): Promise<HorseColor[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.horseColor.findMany({ skip, take, cursor, where, orderBy });
  }

  async getGenders(params: GetHorseGendersArgs): Promise<HorseGender[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.horseGender.findMany({ skip, take, cursor, where, orderBy });
  }

  async getCategories(params: GetHorseCategoriesArgs): Promise<HorseCategory[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.horseCategory.findMany({ skip, take, cursor, where, orderBy });
  }

  async deleteColor(params: {
    where: Prisma.HorseColorWhereUniqueInput;
  }): Promise<HorseColor> {
    const { where } = params;
    return this.prisma.horseColor.delete({ where });
  }

  async deleteGender(params: {
    where: Prisma.HorseGenderWhereUniqueInput;
  }): Promise<HorseGender> {
    const { where } = params;
    return this.prisma.horseGender.delete({ where });
  }

  async deleteCategory(params: {
    where: Prisma.HorseCategoryWhereUniqueInput;
  }): Promise<HorseCategory> {
    const { where } = params;
    return this.prisma.horseCategory.delete({ where });
  }
}