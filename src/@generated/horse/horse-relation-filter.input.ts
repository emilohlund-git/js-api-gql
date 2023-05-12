import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseWhereInput } from './horse-where.input';

@InputType()
export class HorseRelationFilter {

    @Field(() => HorseWhereInput, {nullable:true})
    is?: HorseWhereInput;

    @Field(() => HorseWhereInput, {nullable:true})
    isNot?: HorseWhereInput;
}
