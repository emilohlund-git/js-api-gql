import { Module } from "@nestjs/common";
import { ImageKitModule } from "@platohq/nestjs-imagekit";
import { PrismaModule } from "../../app/prisma.module";
import { ImageController } from "./api/image.controller";
import { ImageRepository } from "./image.repository";
import { ImageService } from "./image.service";
import { ImageResolver } from "./resolvers/image.resolver";

@Module({
  controllers: [ImageController],
  imports: [PrismaModule,
    ImageKitModule.register({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: 'https://ik.imagekit.io/kemdbrmht'
    })],
  providers: [ImageResolver, ImageRepository, ImageService],
  exports: [ImageService]
})
export class ImageModule { }