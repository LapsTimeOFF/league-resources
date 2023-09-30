export interface JWTPayload {
  username: string;
  display_name: string;
  type: UserTypes;
  exp: number;
  iat: number;
}

enum UserTypes {
  STEWARD = "steward",
  DRIVER = "driver",
}
