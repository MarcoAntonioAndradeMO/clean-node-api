import { HttpResponse } from '../protocols/http-helper'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
