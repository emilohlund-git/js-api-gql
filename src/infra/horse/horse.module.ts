import { Module } from "@nestjs/common";
import { PrismaModule } from "../../app/prisma.module";
import { HorseController } from "./api/horse.controller";
import { HorseRepository } from "./horse.repository";
import { HorseService } from "./horse.service";
import { HorseResolver } from "./resolvers/horse.resolver";

@Module({
  imports: [PrismaModule],
  controllers: [HorseController],
  providers: [
    HorseResolver,
    HorseRepository,
    HorseService],
  exports: [HorseService]
})
export class HorseModule { }