import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Facility as PrismaFacility } from '@prisma/client';
import { randomUUID } from 'crypto';
import { FacilityCreateInput } from 'src/@generated/facility/facility-create.input';
import { FacilityUpdateInput } from 'src/@generated/facility/facility-update.input';
import { FacilityWhereUniqueInput } from 'src/@generated/facility/facility-where-unique.input';
import { GetFacilityArgs } from '../dto/get-facility.dto';
import { FacilityService } from '../facility.service';
import { Facility } from '../models/facility.model';

@Resolver(() => Facility)
export class FacilityResolver {
  constructor(
    private readonly facilityService: FacilityService
  ) { }

  @Query(() => [Facility])
  async getFacilities(
    @Args({
      name: 'GetFacilityArgs',
      type: () => GetFacilityArgs,
      nullable: true
    }) getFacilityArgs?: GetFacilityArgs
  ): Promise<PrismaFacility[]> {
    return this.facilityService.get(getFacilityArgs || {});
  }

  @Mutation(() => Facility)
  async createFacility(
    @Args({
      name: 'FacilityCreateInput',
      type: () => FacilityCreateInput,
      nullable: false
    }) createFacilityInput: FacilityCreateInput
  ): Promise<PrismaFacility> {
    return this.facilityService.create({
      data: {
        ...createFacilityInput,
        id: randomUUID()
      }
    });
  }

  @Mutation(() => Facility || null, { nullable: true })
  async deleteFacility(
    @Args({
      name: 'FacilityWhereUniqueInput',
      type: () => FacilityWhereUniqueInput,
      nullable: false
    }) facilityWhereUnique: FacilityWhereUniqueInput
  ) {
    return this.facilityService.delete({
      where: facilityWhereUnique
    });
  }

  @Mutation(() => Int, { nullable: true })
  async deleteAllFacilitys() {
    return await this.facilityService.deleteAll();
  }

  @Mutation(() => Facility)
  async updateFacility(
    @Args({
      name: 'FacilityWhereUnique',
      type: () => FacilityWhereUniqueInput,
      nullable: false
    }) facilityWhereUnique: FacilityWhereUniqueInput,
    @Args({
      name: 'FacilityUpdateInput',
      type: () => FacilityUpdateInput,
      nullable: false
    }) facilityUpdateInput: FacilityUpdateInput
  ) {
    return this.facilityService.update({
      where: facilityWhereUnique,
      data: facilityUpdateInput
    });
  }
}