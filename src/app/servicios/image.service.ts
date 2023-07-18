import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage(file: any, name: string): Promise<string> {
    const imgRef = ref(this.storage, `imagen/` + name);

    return new Promise((resolve, reject) => {
      uploadBytes(imgRef, file)
        .then(() => {
          getDownloadURL(imgRef).then(url => {
            console.log("URL de descarga:", url);
            resolve(url);
          }).catch(error => {
            console.log(error);
            reject(error);
          });
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url);
        }
      })
      .catch(error => console.log(error));
  }
}
