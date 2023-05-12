import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutHorseInput } from '../image/image-unchecked-create-nested-many-without-horse.input';

@InputType()
export class HorseUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    nickname!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    owner!: string;

    @Field(() => String, {nullable:false})
    after!: string;

    @Field(() => String, {nullable:false})
    birthyear!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImageUncheckedCreateNestedManyWithoutHorseInput, {nullable:true})
    images?: ImageUncheckedCreateNestedManyWithoutHorseInput;
}
