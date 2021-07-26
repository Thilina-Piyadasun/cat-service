# Cat Card Application
This application will do the following.

#### 1. It will fetch any number of cat images from Cat as a Service (https://cataas.com) according to the given number of custom texts.

eg : see the `.env` file `TEXTS` property

 - When `TEXTS = Hello,You` 
      
      Application will fetch 2 cat images and add `Hello` as first image custom text and add `You` as second image custom text 
      
      ![alt text](https://github.com/Thilina-Piyadasun/cat-service/blob/master/output/cat-card-2.jpg)

 - When `TEXTS = Hello,You,Cat` 
  
      Application will fetch 3 cat images and add `Hello` as first image custom text, `You` as second image custom text and `Cat` as third image custom text.
      
      
      ![alt text](https://github.com/Thilina-Piyadasun/cat-service/blob/master/output/cat-card.jpg)

Likewise this application is capable of merging any number of images

#### 2. Bind all the retrieved images together into one image.
#### 3. Save the resulting image as a file (output image format/directory can be configured via environment variables).

For more configurations see the .env file.


# Instructions to run the application

Checkout the codebase and run `npm start`
