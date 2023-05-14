import { Module } from "@nestjs/common";
import { PrismaModule } from "../../app/prisma.module";
import { PartnerController } from "./api/partner.controller";
import { PartnerRepository } from "./partner.repository";
import { PartnerService } from "./partner.service";
import { PartnerResolver } from "./resolvers/partner.resolver";

@Module({
  controllers: [PartnerController],
  imports: [PrismaModule],
  providers: [PartnerResolver, PartnerRepository, PartnerService],
  exports: [PartnerService]
})
export class PartnerModule { }