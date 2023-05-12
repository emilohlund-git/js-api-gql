import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { GetImagesArgs } from "./dto/get-image.dto";
import { ImageRepository } from "./image.repository";
import { Image } from "./models/image.model";

@Injectable()
export class ImageService {
  constructor(private readonly repository: ImageRepository) { }

  async create(params: { data: Prisma.ImageCreateInput }): Promise<Image> {
    const Image = await this.repository.create(params);

    return Image;
  }

  async get(params: GetImagesArgs): Promise<Image[]> {
    const Images = await this.repository.get(params);
    return Images;
  }

  async delete(params: {
    where: Prisma.ImageWhereUniqueInput;
  }): Promise<Image | null> {
    const Image = await this.repository.delete(params);
    return Image;
  }

  async deleteAll(): Promise<number> {
    return await this.repository.deleteAll();
  }

  async update(params: {
    where: Prisma.ImageWhereUniqueInput;
    data: Prisma.ImageUpdateInput;
  }): Promise<Image> {
    const Image = await this.repository.update(params);
    return Image;
  }
}