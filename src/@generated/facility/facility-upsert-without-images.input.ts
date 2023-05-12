import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacilityUpdateWithoutImagesInput } from './facility-update-without-images.input';
import { Type } from 'class-transformer';
import { FacilityCreateWithoutImagesInput } from './facility-create-without-images.input';

@InputType()
export class FacilityUpsertWithoutImagesInput {

    @Field(() => FacilityUpdateWithoutImagesInput, {nullable:false})
    @Type(() => FacilityUpdateWithoutImagesInput)
    update!: FacilityUpdateWithoutImagesInput;

    @Field(() => FacilityCreateWithoutImagesInput, {nullable:false})
    @Type(() => FacilityCreateWithoutImagesInput)
    create!: FacilityCreateWithoutImagesInput;
}
