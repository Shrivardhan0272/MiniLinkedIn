const express=require("express");
const app=express();

const mongoose=require("mongoose");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/postdata').then(
    console.log("Connected to Database")
  );

}

