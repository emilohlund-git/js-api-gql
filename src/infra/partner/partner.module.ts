import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma.module";
import { PartnerRepository } from "./partner.repository";
import { PartnerService } from "./partner.service";
import { PartnerResolver } from "./resolvers/partner.resolver";

@Module({
  imports: [PrismaModule],
  providers: [PartnerResolver, PartnerRepository, PartnerService],
  exports: [PartnerService]
})
export class PartnerModule { }