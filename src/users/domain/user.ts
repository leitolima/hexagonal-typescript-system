export class User {
  constructor(
    readonly id: string,
    readonly email: string,
    private password: string
  ) {}
}
