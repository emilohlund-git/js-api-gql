import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PartnerCount {

    @Field(() => Int, {nullable:false})
    image?: number;
}
