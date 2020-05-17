import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ReservationsGateway {
  @WebSocketServer()
  server: Server;

  // handleReservationCreation() {
  //   this.server.to().emit();
  // }
}
