import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseColorCreateInput } from 'src/@generated/horse-color/horse-color-create.input';
import { HorseColorWhereUniqueInput } from 'src/@generated/horse-color/horse-color-where-unique.input';
import { GetHorseColorsArgs } from '../dto/get-horse-colors.dto';
import { HorseColor } from '../models/horse.color.model';
import { SettingsService } from '../settings.service';

@Resolver(() => HorseColor)
export class HorseColorResolver {
  constructor(
    private readonly settingsService: SettingsService
  ) { }

  @Query(() => [HorseColor])
  async getColors(
    @Args({
      name: 'GetHorseColorsArgs',
      type: () => GetHorseColorsArgs,
      nullable: true
    }) getHorseColorsArgs?: GetHorseColorsArgs
  ) {
    return this.settingsService.getColors(getHorseColorsArgs || {});
  }

  @Mutation(() => HorseColor)
  async createColor(
    @Args({
      name: 'HorseColorCreateInput',
      type: () => HorseColorCreateInput,
      nullable: false
    }) horseColorCreateInput: HorseColorCreateInput
  ) {
    return this.settingsService.createColor(horseColorCreateInput);
  }

  @Mutation(() => HorseColor)
  async deleteColor(
    @Args({
      name: 'HorseColorWhereUniqueInput',
      type: () => HorseColorWhereUniqueInput,
      nullable: false
    }) horseColorWhereUnique: Prisma.HorseColorWhereUniqueInput
  ) {
    return this.settingsService.deleteColor({
      where: horseColorWhereUnique
    });
  }
}