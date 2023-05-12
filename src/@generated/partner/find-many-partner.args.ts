import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';
import { Type } from 'class-transformer';
import { PartnerOrderByWithRelationInput } from './partner-order-by-with-relation.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PartnerScalarFieldEnum } from './partner-scalar-field.enum';

@ArgsType()
export class FindManyPartnerArgs {

    @Field(() => PartnerWhereInput, {nullable:true})
    @Type(() => PartnerWhereInput)
    where?: PartnerWhereInput;

    @Field(() => [PartnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PartnerOrderByWithRelationInput>;

    @Field(() => PartnerWhereUniqueInput, {nullable:true})
    cursor?: PartnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PartnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PartnerScalarFieldEnum>;
}
