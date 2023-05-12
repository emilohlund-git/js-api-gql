import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PartnerCreateInput } from '../../../@generated/partner/partner-create.input';
import { PartnerUpdateInput } from '../../../@generated/partner/partner-update.input';
import { PartnerWhereUniqueInput } from '../../../@generated/partner/partner-where-unique.input';
import { GetPartnersArgs } from '../dto/get-partner.dto';
import { Partner } from '../models/partner.model';
import { PartnerService } from '../partner.service';

@Resolver(() => Partner)
export class PartnerResolver {
  constructor(
    private readonly partnerService: PartnerService
  ) { }

  @Query(() => [Partner])
  async getPartners(
    @Args({
      name: 'GetPartnerArgs',
      type: () => GetPartnersArgs,
      nullable: true
    }) getPartnerArgs?: GetPartnersArgs
  ): Promise<Partner[]> {
    return this.partnerService.get(getPartnerArgs || {});
  }

  @Mutation(() => Partner)
  async createPartner(
    @Args({
      name: 'PartnerCreateInput',
      type: () => PartnerCreateInput,
      nullable: false
    }) createPartnerInput: PartnerCreateInput
  ): Promise<Partner> {
    return this.partnerService.create({
      data: {
        ...createPartnerInput,
        id: randomUUID()
      }
    });
  }

  @Mutation(() => Partner || null, { nullable: true })
  async deletePartner(
    @Args({
      name: 'PartnerWhereUniqueInput',
      type: () => PartnerWhereUniqueInput,
      nullable: false
    }) partnerWhereUnique: PartnerWhereUniqueInput
  ) {
    return this.partnerService.delete({
      where: partnerWhereUnique
    });
  }

  @Mutation(() => Int, { nullable: true })
  async deleteAllPartners() {
    return await this.partnerService.deleteAll();
  }

  @Mutation(() => Partner)
  async updatePartner(
    @Args({
      name: 'PartnerWhereUnique',
      type: () => PartnerWhereUniqueInput,
      nullable: false
    }) partnerWhereUnique: PartnerWhereUniqueInput,
    @Args({
      name: 'PartnerUpdateInput',
      type: () => PartnerUpdateInput,
      nullable: false
    }) partnerUpdateInput: PartnerUpdateInput
  ) {
    return this.partnerService.update({
      where: partnerWhereUnique,
      data: partnerUpdateInput
    });
  }
}