import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyPartnerInput } from './image-create-many-partner.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyPartnerInputEnvelope {

    @Field(() => [ImageCreateManyPartnerInput], {nullable:false})
    @Type(() => ImageCreateManyPartnerInput)
    data!: Array<ImageCreateManyPartnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
