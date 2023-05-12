import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HorseCount {

    @Field(() => Int, {nullable:false})
    images?: number;
}
