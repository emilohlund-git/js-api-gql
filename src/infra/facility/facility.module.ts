import { Module } from "@nestjs/common";
import { PrismaModule } from "../../app/prisma.module";
import { FacilityController } from "./api/facility.controller";
import { FacilityRepository } from "./facility.repository";
import { FacilityService } from "./facility.service";
import { FacilityResolver } from "./resolvers/facility.resolver";

@Module({
  controllers: [FacilityController],
  imports: [PrismaModule],
  providers: [
    FacilityResolver,
    FacilityRepository,
    FacilityService],
  exports: [FacilityService]
})
export class FacilityModule { }