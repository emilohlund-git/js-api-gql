import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyFacilityInput } from './image-create-many-facility.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyFacilityInputEnvelope {

    @Field(() => [ImageCreateManyFacilityInput], {nullable:false})
    @Type(() => ImageCreateManyFacilityInput)
    data!: Array<ImageCreateManyFacilityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
