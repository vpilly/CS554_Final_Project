import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserModel } from '../../models';
import { UserService } from '../../../../libs/user/services';
import { UserInput } from '../../dto';

@Resolver(of => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [UserModel])
  users(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Mutation(returns => UserModel)
  createUser(@Args('data') userInput: UserInput): Promise<UserModel> {
    return this.userService.create(userInput);
  }
}
