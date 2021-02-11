export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName} name?`)
    this.name = 'MissingParamError'
  }
}
