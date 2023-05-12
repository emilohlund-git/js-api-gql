import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseCreateInput } from '../../../@generated/horse/horse-create.input';
import { HorseUpdateInput } from '../../../@generated/horse/horse-update.input';
import { HorseWhereUniqueInput } from '../../../@generated/horse/horse-where-unique.input';
import { GetHorseArgs } from '../dto/get-horse.dto';
import { HorseService } from '../horse.service';
import { Horse } from '../models/horse.model';

@Resolver(() => Horse)
export class HorseResolver {
  constructor(
    private readonly horseService: HorseService
  ) { }

  @Query(() => [Horse])
  async getHorses(
    @Args({
      name: 'GetHorseArgs',
      type: () => GetHorseArgs,
      nullable: true
    }) getHorseArgs?: GetHorseArgs
  ) {
    return this.horseService.get(getHorseArgs || {});
  }

  @Mutation(() => Horse)
  async createHorse(
    @Args({
      name: 'HorseCreateInput',
      type: () => HorseCreateInput,
      nullable: false
    }) createHorseInput: HorseCreateInput
  ) {
    return this.horseService.create({
      data: createHorseInput
    });
  }

  @Mutation(() => Horse)
  async deleteHorse(
    @Args({
      name: 'HorseWhereUniqueInput',
      type: () => HorseWhereUniqueInput,
      nullable: false
    }) horseWhereUnique: Prisma.HorseWhereUniqueInput
  ) {
    return this.horseService.delete({
      where: horseWhereUnique
    });
  }

  @Mutation(() => Horse)
  async updateHorse(
    @Args({
      name: 'HorseWhereUnique',
      type: () => HorseWhereUniqueInput,
      nullable: false
    }) horseWhereUnique: Prisma.HorseWhereUniqueInput,
    @Args({
      name: 'HorseUpdateInput',
      type: () => HorseUpdateInput,
      nullable: false
    }) horseUpdateInput: Prisma.HorseUpdateInput
  ) {
    return this.horseService.update({
      where: horseWhereUnique,
      data: horseUpdateInput
    });
  }
}