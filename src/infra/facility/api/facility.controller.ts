import { Controller, Get, Param } from "@nestjs/common";
import { Facility } from "@prisma/client";
import { FacilityService } from "../facility.service";

@Controller('facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) { }

  @Get()
  async get(): Promise<Facility[]> {
    return this.facilityService.get({});
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Facility> {
    const response = await this.facilityService.get({
      where: {
        id: {
          equals: id
        }
      }
    });

    return response[0];
  }
}