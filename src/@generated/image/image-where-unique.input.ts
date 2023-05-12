import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
