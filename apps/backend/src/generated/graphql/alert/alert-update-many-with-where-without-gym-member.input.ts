import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertScalarWhereInput } from './alert-scalar-where.input';
import { Type } from 'class-transformer';
import { AlertUpdateManyMutationInput } from './alert-update-many-mutation.input';

@InputType()
export class AlertUpdateManyWithWhereWithoutGymMemberInput {

    @Field(() => AlertScalarWhereInput, {nullable:false})
    @Type(() => AlertScalarWhereInput)
    where!: AlertScalarWhereInput;

    @Field(() => AlertUpdateManyMutationInput, {nullable:false})
    @Type(() => AlertUpdateManyMutationInput)
    data!: AlertUpdateManyMutationInput;
}
