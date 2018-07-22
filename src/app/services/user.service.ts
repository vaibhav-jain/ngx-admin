import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {
  private apiUrl = 'https://conduit.productionready.io/api/';

  constructor(private http: Http) {}

  // Fetch profile of user specified with username
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}`)
      .map((res: Response) => res.json())
  }

  // Update User Profile
  updateUser(user: any) {
    return this.http.put(`${this.apiUrl}`, JSON.stringify(user))
      .map((res: Response) => res.json())
  }

}
