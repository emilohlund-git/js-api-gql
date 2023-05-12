import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma.module";
import { ImageRepository } from "./image.repository";
import { ImageService } from "./image.service";
import { ImageResolver } from "./resolvers/image.resolver";

@Module({
  imports: [PrismaModule],
  providers: [ImageResolver, ImageRepository, ImageService],
  exports: [ImageService]
})
export class ImageModule { }