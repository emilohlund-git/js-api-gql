import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { FacilityWhereUniqueInput } from 'src/@generated/facility/facility-where-unique.input';
import { HorseWhereUniqueInput } from 'src/@generated/horse/horse-where-unique.input';
import { PartnerWhereUniqueInput } from 'src/@generated/partner/partner-where-unique.input';
import { ImageCreateInput } from '../../../@generated/image/image-create.input';
import { ImageUpdateInput } from '../../../@generated/image/image-update.input';
import { ImageWhereUniqueInput } from '../../../@generated/image/image-where-unique.input';
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

  @Mutation(() => Image)
  async setProfile(
    @Args({
      name: 'ImageWhereUniqueInput',
      type: () => ImageWhereUniqueInput,
      nullable: false
    }) imageWhereUnique: ImageWhereUniqueInput,
    @Args({
      name: 'HorseWhereUniqueInput',
      type: () => HorseWhereUniqueInput,
      nullable: true
    }) horseWhereUnique: HorseWhereUniqueInput,
    @Args({
      name: 'FacilityWhereUniqueInput',
      type: () => FacilityWhereUniqueInput,
      nullable: true
    }) facilityWhereUnique: FacilityWhereUniqueInput,
    @Args({
      name: 'PartnerWhereUniqueInput',
      type: () => PartnerWhereUniqueInput,
      nullable: true
    }) partnerWhereUnique: PartnerWhereUniqueInput
  ) {
    let images: Image[] = [];

    if (facilityWhereUnique.id) {
      images = await this.imageService.get({
        where: {
          profile: {
            equals: true
          },
          facility: {
            id: {
              equals: facilityWhereUnique.id
            }
          }
        }
      });
    }

    if (horseWhereUnique.id) {
      images = await this.imageService.get({
        where: {
          profile: {
            equals: true
          },
          horse: {
            id: {
              equals: horseWhereUnique.id
            }
          }
        }
      });
    }

    console.log(images);

    if (images.length > 0) {
      await this.imageService.update({
        data: {
          profile: false
        },
        where: {
          id: images[0]?.id
        }
      });
    }

    return await this.imageService.update({
      data: {
        profile: true
      },
      where: {
        id: imageWhereUnique.id
      }
    })
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