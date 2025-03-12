import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCoachOrThrowArgs {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    @Type(() => CoachWhereUniqueInput)
    where!: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;
}
