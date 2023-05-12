import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutFacilityInput } from '../image/image-create-nested-many-without-facility.input';

@InputType()
export class FacilityCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImageCreateNestedManyWithoutFacilityInput, {nullable:true})
    images?: ImageCreateNestedManyWithoutFacilityInput;
}
