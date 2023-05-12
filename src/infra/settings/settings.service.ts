import { Injectable } from "@nestjs/common";
import { HorseCategory, HorseColor, HorseGender, Prisma } from "@prisma/client";
import { HorseCategoryCreateInput } from "../../@generated/horse-category/horse-category-create.input";
import { HorseColorCreateInput } from "../../@generated/horse-color/horse-color-create.input";
import { HorseGenderCreateInput } from "../../@generated/horse-gender/horse-gender-create.input";
import { GetHorseCategoriesArgs } from "./dto/get-horse-categories.dto";
import { GetHorseColorsArgs } from "./dto/get-horse-colors.dto";
import { GetHorseGendersArgs } from "./dto/get-horse-genders.dto";
import { SettingsRepository } from "./settings.repository";

@Injectable()
export class SettingsService {
  constructor(private readonly repository: SettingsRepository) { }

  async createColor(data: HorseColorCreateInput): Promise<HorseColor> {
    return await this.repository.createColor({
      data
    });
  }

  async createGender(data: HorseGenderCreateInput): Promise<HorseGender> {
    return await this.repository.createGender({
      data
    });
  }

  async createCategory(data: HorseCategoryCreateInput): Promise<HorseCategory> {
    return await this.repository.createCategory({
      data
    });
  }

  async getColors(params: GetHorseColorsArgs): Promise<HorseColor[]> {
    const colors = await this.repository.getColors(params);
    return colors;
  }

  async getGenders(params: GetHorseGendersArgs): Promise<HorseGender[]> {
    const genders = await this.repository.getGenders(params);
    return genders;
  }

  async getCategories(params: GetHorseCategoriesArgs): Promise<HorseCategory[]> {
    const categories = await this.repository.getCategories(params);
    return categories;
  }

  async deleteColor(params: {
    where: Prisma.HorseColorWhereUniqueInput;
  }): Promise<HorseColor> {
    const color = await this.repository.deleteColor(params);
    return color;
  }

  async deleteGender(params: {
    where: Prisma.HorseGenderWhereUniqueInput;
  }): Promise<HorseGender> {
    const gender = await this.repository.deleteGender(params);
    return gender;
  }

  async deleteCategory(params: {
    where: Prisma.HorseCategoryWhereUniqueInput;
  }): Promise<HorseCategory> {
    const category = await this.repository.deleteCategory(params);
    return category;
  }
}