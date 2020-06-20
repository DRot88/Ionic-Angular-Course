import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Mansion in Manhattan',
      'In the heart of NYC',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      1500
    ),
    new Place(
      'p2',
      'Mansion in Dallas',
      'In the heart of Dallas',
      'http://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_1200/v1544551926/photos/287168_original.jpg',
      2000
    ),
    new Place(
      'p3',
      'Cottage',
      'Cute cottage located in Connecticut',
      'https://cdn.vox-cdn.com/thumbor/zu3nPNM8yT8gJJi_HCBvMa9Bjo0=/0x0:1601x1200/1820x1213/filters:focal(673x472:929x728):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65574835/165_Rockwell_St_3.0.jpg',
      850
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
