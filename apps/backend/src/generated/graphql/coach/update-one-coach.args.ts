import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachUpdateInput } from './coach-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@ArgsType()
export class UpdateOneCoachArgs {

    @Field(() => CoachUpdateInput, {nullable:false})
    @Type(() => CoachUpdateInput)
    data!: CoachUpdateInput;

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    @Type(() => CoachWhereUniqueInput)
    where!: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;
}
