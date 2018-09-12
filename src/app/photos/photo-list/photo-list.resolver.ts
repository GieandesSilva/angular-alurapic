import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, RouteStateSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;

    return this.service.listFromUserPaginated(userName, 1);
  }
}
