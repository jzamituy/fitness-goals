import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Type } from 'class-transformer';
import { CoachCreateInput } from './coach-create.input';
import { CoachUpdateInput } from './coach-update.input';

@ArgsType()
export class UpsertOneCoachArgs {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    @Type(() => CoachWhereUniqueInput)
    where!: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => CoachCreateInput, {nullable:false})
    @Type(() => CoachCreateInput)
    create!: CoachCreateInput;

    @Field(() => CoachUpdateInput, {nullable:false})
    @Type(() => CoachUpdateInput)
    update!: CoachUpdateInput;
}
