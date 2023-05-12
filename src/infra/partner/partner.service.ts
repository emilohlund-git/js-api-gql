import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { GetPartnersArgs } from "./dto/get-partner.dto";
import { Partner } from "./models/partner.model";
import { PartnerRepository } from "./partner.repository";

@Injectable()
export class PartnerService {
  constructor(private readonly repository: PartnerRepository) { }

  async create(params: { data: Prisma.PartnerCreateInput }): Promise<Partner> {
    const partner = await this.repository.create(params);

    return partner;
  }

  async get(params: GetPartnersArgs): Promise<Partner[]> {
    const partners = await this.repository.get(params);
    return partners;
  }

  async delete(params: {
    where: Prisma.PartnerWhereUniqueInput;
  }): Promise<Partner | null> {
    const partner = await this.repository.delete(params);
    return partner;
  }

  async deleteAll(): Promise<number> {
    return await this.repository.deleteAll();
  }

  async update(params: {
    where: Prisma.PartnerWhereUniqueInput;
    data: Prisma.PartnerUpdateInput;
  }): Promise<Partner> {
    const partner = await this.repository.update(params);
    return partner;
  }
}