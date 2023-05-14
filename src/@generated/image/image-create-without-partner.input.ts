import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseCreateNestedOneWithoutImagesInput } from '../horse/horse-create-nested-one-without-images.input';
import { FacilityCreateNestedOneWithoutImagesInput } from '../facility/facility-create-nested-one-without-images.input';

@InputType()
export class ImageCreateWithoutPartnerInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HorseCreateNestedOneWithoutImagesInput, {nullable:true})
    horse?: HorseCreateNestedOneWithoutImagesInput;

    @Field(() => FacilityCreateNestedOneWithoutImagesInput, {nullable:true})
    facility?: FacilityCreateNestedOneWithoutImagesInput;
}
