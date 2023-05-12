import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { ImageCreateInput } from 'src/@generated/image/image-create.input';
import { ImageUpdateInput } from 'src/@generated/image/image-update.input';
import { ImageWhereUniqueInput } from 'src/@generated/image/image-where-unique.input';
import { GetImagesArgs } from '../dto/get-image.dto';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Resolver(() => Image)
export class ImageResolver {
  constructor(
    private readonly imageService: ImageService
  ) { }

  @Query(() => [Image])
  async getImages(
    @Args({
      name: 'GetImageArgs',
      type: () => GetImagesArgs,
      nullable: true
    }) getImageArgs?: GetImagesArgs
  ): Promise<Image[]> {
    return this.imageService.get(getImageArgs || {});
  }

  @Mutation(() => Image)
  async createImage(
    @Args({
      name: 'ImageCreateInput',
      type: () => ImageCreateInput,
      nullable: false
    }) createImageInput: ImageCreateInput
  ): Promise<Image> {
    return this.imageService.create({
      data: {
        ...createImageInput,
        id: randomUUID()
      }
    });
  }

  @Mutation(() => Image || null, { nullable: true })
  async deleteImage(
    @Args({
      name: 'ImageWhereUniqueInput',
      type: () => ImageWhereUniqueInput,
      nullable: false
    }) imageWhereUnique: ImageWhereUniqueInput
  ) {
    return this.imageService.delete({
      where: imageWhereUnique
    });
  }

  @Mutation(() => Int, { nullable: true })
  async deleteAllImages() {
    return await this.imageService.deleteAll();
  }

  @Mutation(() => Image)
  async updateImage(
    @Args({
      name: 'ImageWhereUnique',
      type: () => ImageWhereUniqueInput,
      nullable: false
    }) imageWhereUnique: ImageWhereUniqueInput,
    @Args({
      name: 'ImageUpdateInput',
      type: () => ImageUpdateInput,
      nullable: false
    }) imageUpdateInput: ImageUpdateInput
  ) {
    return this.imageService.update({
      where: imageWhereUnique,
      data: imageUpdateInput
    });
  }
}