import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Horse } from '../horse/horse.model';
import { Facility } from '../facility/facility.model';
import { Partner } from '../partner/partner.model';
import { ImageCount } from './image-count.output';

@ObjectType()
export class Image {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    horseId!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    profile!: boolean;

    @Field(() => String, {nullable:true})
    facilityId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Horse, {nullable:true})
    horse?: Horse | null;

    @Field(() => Facility, {nullable:true})
    facility?: Facility | null;

    @Field(() => [Partner], {nullable:true})
    partner?: Array<Partner>;

    @Field(() => ImageCount, {nullable:false})
    _count?: ImageCount;
}
