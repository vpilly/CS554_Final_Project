export interface ReservationCreateInput {
  readonly restaurantId: string;
  readonly reservationTime: Date;
  readonly userId: string;
}
