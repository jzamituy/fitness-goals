import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';
import { Type } from 'class-transformer';
import { MoodCreateInput } from './mood-create.input';
import { MoodUpdateInput } from './mood-update.input';

@ArgsType()
export class UpsertOneMoodArgs {

    @Field(() => MoodWhereUniqueInput, {nullable:false})
    @Type(() => MoodWhereUniqueInput)
    where!: Prisma.AtLeast<MoodWhereUniqueInput, 'id'>;

    @Field(() => MoodCreateInput, {nullable:false})
    @Type(() => MoodCreateInput)
    create!: MoodCreateInput;

    @Field(() => MoodUpdateInput, {nullable:false})
    @Type(() => MoodUpdateInput)
    update!: MoodUpdateInput;
}
