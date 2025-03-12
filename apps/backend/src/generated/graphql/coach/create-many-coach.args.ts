import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoachCreateManyInput } from './coach-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCoachArgs {

    @Field(() => [CoachCreateManyInput], {nullable:false})
    @Type(() => CoachCreateManyInput)
    data!: Array<CoachCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
