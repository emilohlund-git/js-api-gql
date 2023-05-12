import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { Type } from 'class-transformer';
import { FacilityCreateWithoutImagesInput } from './facility-create-without-images.input';

@InputType()
export class FacilityCreateOrConnectWithoutImagesInput {

    @Field(() => FacilityWhereUniqueInput, {nullable:false})
    @Type(() => FacilityWhereUniqueInput)
    where!: FacilityWhereUniqueInput;

    @Field(() => FacilityCreateWithoutImagesInput, {nullable:false})
    @Type(() => FacilityCreateWithoutImagesInput)
    create!: FacilityCreateWithoutImagesInput;
}
