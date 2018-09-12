import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {

  title = 'Listagem de Fotos';
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
      private activatedRoute: ActivatedRoute,
      private photoService: PhotoService
  ) {}

  ngOnInit(): void {
      this.photos = this.activatedRoute.snapshot.data.photos;
      this.userName = this.activatedRoute.snapshot.params.userName;
  }
  load() {
      this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
          .subscribe(photos => {
              this.filter = '';
              this.photos = this.photos.concat(photos);
              if (!photos.length) this.hasMore = false;
          }
      );
  }
}