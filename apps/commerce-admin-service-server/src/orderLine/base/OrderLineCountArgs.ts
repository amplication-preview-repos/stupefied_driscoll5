/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderLineWhereInput } from "./OrderLineWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrderLineCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrderLineWhereInput,
  })
  @Field(() => OrderLineWhereInput, { nullable: true })
  @Type(() => OrderLineWhereInput)
  where?: OrderLineWhereInput;
}

export { OrderLineCountArgs as OrderLineCountArgs };
