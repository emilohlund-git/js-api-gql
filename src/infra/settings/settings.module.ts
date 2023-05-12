import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma.module";
import { HorseCategoryResolver } from "../settings/resolvers/horse-category.resolve";
import { HorseColorResolver } from "./resolvers/horse-color.resolver";
import { HorseGenderResolver } from "./resolvers/horse-gender.resolver";
import { SettingsRepository } from "./settings.repository";
import { SettingsService } from "./settings.service";

@Module({
  imports: [PrismaModule],
  providers: [
    HorseColorResolver,
    HorseGenderResolver,
    HorseCategoryResolver,
    SettingsRepository,
    SettingsService
  ],
  exports: [SettingsService]
})
export class SettingsModule { }