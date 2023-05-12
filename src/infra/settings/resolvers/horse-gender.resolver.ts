import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseGenderCreateInput } from 'src/@generated/horse-gender/horse-gender-create.input';
import { HorseGenderWhereUniqueInput } from 'src/@generated/horse-gender/horse-gender-where-unique.input';
import { GetHorseGendersArgs } from '../dto/get-horse-genders.dto';
import { HorseGender } from '../models/horse.gender.model';
import { SettingsService } from '../settings.service';

@Resolver(() => HorseGender)
export class HorseGenderResolver {
  constructor(
    private readonly settingsService: SettingsService
  ) { }

  @Query(() => [HorseGender])
  async getGenders(
    @Args({
      name: 'GetHorseGendersArgs',
      type: () => GetHorseGendersArgs,
      nullable: true
    }) getHorseGendersArgs?: GetHorseGendersArgs
  ) {
    return this.settingsService.getGenders(getHorseGendersArgs || {});
  }

  @Mutation(() => HorseGender)
  async createGender(
    @Args({
      name: 'HorseGenderCreateInput',
      type: () => HorseGenderCreateInput,
      nullable: false
    }) horseGenderCreateInput: HorseGenderCreateInput
  ) {
    return this.settingsService.createGender(horseGenderCreateInput);
  }

  @Mutation(() => HorseGender)
  async deleteGender(
    @Args({
      name: 'HorseGenderWhereUniqueInput',
      type: () => HorseGenderWhereUniqueInput,
      nullable: false
    }) horseGenderWhereUnique: Prisma.HorseGenderWhereUniqueInput
  ) {
    return this.settingsService.deleteGender({
      where: horseGenderWhereUnique
    });
  }
}