import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FacilityCount {

    @Field(() => Int, {nullable:false})
    images?: number;
}
