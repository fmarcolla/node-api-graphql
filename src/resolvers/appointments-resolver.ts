import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(() => Appointment) 
export class AppointmentsResolver {

    @Query(() => [Appointment])
    async appointments(){
        return [{
            startAt: new Date(),
            endAt: new Date()
        }];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput){
        const appointment = {
            startAt: data.startAt,
            endAt: data.endAt,
        };

        return appointment;
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment){
        console.log(appointment);
        return {
            name: "Felipe"
        }
    }
}