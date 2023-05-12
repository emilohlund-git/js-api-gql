import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacilityCreateWithoutImagesInput } from './facility-create-without-images.input';
import { Type } from 'class-transformer';
import { FacilityCreateOrConnectWithoutImagesInput } from './facility-create-or-connect-without-images.input';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';

@InputType()
export class FacilityCreateNestedOneWithoutImagesInput {

    @Field(() => FacilityCreateWithoutImagesInput, {nullable:true})
    @Type(() => FacilityCreateWithoutImagesInput)
    create?: FacilityCreateWithoutImagesInput;

    @Field(() => FacilityCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => FacilityCreateOrConnectWithoutImagesInput)
    connectOrCreate?: FacilityCreateOrConnectWithoutImagesInput;

    @Field(() => FacilityWhereUniqueInput, {nullable:true})
    @Type(() => FacilityWhereUniqueInput)
    connect?: FacilityWhereUniqueInput;
}
