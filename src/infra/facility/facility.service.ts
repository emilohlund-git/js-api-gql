import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { GetFacilityArgs } from "./dto/get-facility.dto";
import { FacilityRepository } from "./facility.repository";
import { Facility } from "./models/facility.model";

@Injectable()
export class FacilityService {
  constructor(private readonly repository: FacilityRepository) { }

  async create(params: { data: Prisma.FacilityCreateInput }): Promise<Facility> {
    const Facility = await this.repository.create(params);

    return Facility;
  }

  async get(params: GetFacilityArgs): Promise<Facility[]> {
    const Facilitys = await this.repository.get(params);
    return Facilitys;
  }

  async delete(params: {
    where: Prisma.FacilityWhereUniqueInput;
  }): Promise<Facility | null> {
    const facility = await this.repository.delete(params);
    return facility;
  }

  async deleteAll(): Promise<number> {
    return await this.repository.deleteAll();
  }

  async update(params: {
    where: Prisma.FacilityWhereUniqueInput;
    data: Prisma.FacilityUpdateInput;
  }): Promise<Facility> {
    const facility = await this.repository.update(params);
    return facility;
  }
}