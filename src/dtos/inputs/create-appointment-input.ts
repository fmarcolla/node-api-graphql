import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateAppointmentInput {
    @Field()
    @IsString()
    customerId: string;

    @Field()
    startAt: Date;

    @Field()
    endAt: Date;
}