import { HttpRequest, HttpResponse } from './http-helper'

export interface Controller {
  handle (httpRequest: HttpRequest): HttpResponse
}
