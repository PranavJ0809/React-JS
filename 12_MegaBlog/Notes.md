npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

Then we will create environment variables
They will be created only in the route of the file
So creating a file ".env"
After that add this file to gitignore

Also created a conf folder and created a file "conf.js" -> in this all the appwrite imported all there

Then go to appwrite -> setup the project -> auth -> database -> collction -> permissions in collection -> provide details of all the attributes required -> creation of index -> creation of buckets -> premissions in bucket

creating a new folder -> in src -> appwrite -> here we will do all the appwrite realted tasks
then creating auth.js in it

Then creating a new file "config.js" in appwrite -> this file is the major configuration of appwrite 

creating a new folder "store" for configuring redux tookit
forming a new file "store.js" and by the help of this file 
we form a new store that tracks our authentication "authSlice.js"

making a components folder and then creating folder of Header and Footer and creating Header and Footer files in it

Also, giving a provider in "main.jsx"