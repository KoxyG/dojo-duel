class Resources {
     toload: { [key: string]: string };
     images: { [key: string]: { image: HTMLImageElement; isLoaded: boolean } };
   
     constructor() {
       // paths to the images you want to preload
       this.toload = {
         skyscraper: '/src/assets/skyscraper.jpeg',
       };
   
       // Initialize an empty object to store loaded images
       this.images = {};
   
       // Load the images
       Object.keys(this.toload).forEach((key) => {
         const img = new Image();
         img.src = this.toload[key];
         this.images[key] = {
           image: img,
           isLoaded: false,
         };
   
         img.onload = () => {
           // Set the image as loaded when it's finished loading
           this.images[key].isLoaded = true;
         };
       });
     }
   }
   
   export const resources = new Resources();
   