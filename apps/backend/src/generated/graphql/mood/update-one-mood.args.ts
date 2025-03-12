import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoodUpdateInput } from './mood-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';

@ArgsType()
export class UpdateOneMoodArgs {

    @Field(() => MoodUpdateInput, {nullable:false})
    @Type(() => MoodUpdateInput)
    data!: MoodUpdateInput;

    @Field(() => MoodWhereUniqueInput, {nullable:false})
    @Type(() => MoodWhereUniqueInput)
    where!: Prisma.AtLeast<MoodWhereUniqueInput, 'id'>;
}
