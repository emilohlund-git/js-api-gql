import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseCategoryCreateInput } from '../../../@generated/horse-category/horse-category-create.input';
import { HorseCategoryWhereUniqueInput } from '../../../@generated/horse-category/horse-category-where-unique.input';
import { GetHorseCategoriesArgs } from '../dto/get-horse-categories.dto';
import { HorseCategory } from '../models/horse.category.model';
import { SettingsService } from '../settings.service';

@Resolver(() => HorseCategory)
export class HorseCategoryResolver {
  constructor(
    private readonly settingsService: SettingsService
  ) { }

  @Query(() => [HorseCategory])
  async getCategories(
    @Args({
      name: 'GetHorseCategorysArgs',
      type: () => GetHorseCategoriesArgs,
      nullable: true
    }) getHorseCategorysArgs?: GetHorseCategoriesArgs
  ) {
    return this.settingsService.getCategories(getHorseCategorysArgs || {});
  }

  @Mutation(() => HorseCategory)
  async createCategory(
    @Args({
      name: 'HorseCategoryCreateInput',
      type: () => HorseCategoryCreateInput,
      nullable: false
    }) horseCategoryCreateInput: HorseCategoryCreateInput
  ) {
    return this.settingsService.createCategory(horseCategoryCreateInput);
  }

  @Mutation(() => HorseCategory)
  async deleteCategory(
    @Args({
      name: 'HorseCategoryWhereUniqueInput',
      type: () => HorseCategoryWhereUniqueInput,
      nullable: false
    }) horseCategoryWhereUnique: Prisma.HorseCategoryWhereUniqueInput
  ) {
    return this.settingsService.deleteCategory({
      where: horseCategoryWhereUnique
    });
  }
}