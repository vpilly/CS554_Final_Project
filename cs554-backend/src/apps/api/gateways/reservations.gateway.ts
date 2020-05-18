import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Reservation, Restaurant } from 'src/libs/mongoose/schemas';
import { UserModel } from '../models';

@WebSocketGateway()
export class ReservationsGateway {
  @WebSocketServer()
  server: Server;

  handleReservationCreation(
    reservation: Reservation,
    restaurant: Restaurant,
    user: UserModel,
  ) {
    this.server.emit('reservation', { reservation, restaurant, user });
  }
}
