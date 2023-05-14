import { Controller, Get, Param } from "@nestjs/common";
import { Partner } from "../models/partner.model";
import { PartnerService } from "../partner.service";

@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) { }

  @Get()
  async get(): Promise<Partner[]> {
    const response = await this.partnerService.get({});
    console.log(response);
    return response;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Partner> {
    const response = await this.partnerService.get({
      where: {
        id: {
          equals: id
        }
      },
    });

    return response[0];
  }
}