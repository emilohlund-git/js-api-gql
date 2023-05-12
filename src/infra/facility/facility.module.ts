import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma.module";
import { FacilityRepository } from "./facility.repository";
import { FacilityService } from "./facility.service";
import { FacilityResolver } from "./resolvers/facility.resolver";

@Module({
  imports: [PrismaModule],
  providers: [
    FacilityResolver,
    FacilityRepository,
    FacilityService],
  exports: [FacilityService]
})
export class FacilityModule { }