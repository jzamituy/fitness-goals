import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachCreateInput } from './coach-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCoachArgs {

    @Field(() => CoachCreateInput, {nullable:false})
    @Type(() => CoachCreateInput)
    data!: CoachCreateInput;
}
