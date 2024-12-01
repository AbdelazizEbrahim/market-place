'use server';

import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AdModel } from "@/models/Ad";
import { revalidatePath } from "next/cache";

async function connect() {
  console.log("MONGO_URL:", process.env.MONGO_URL);
    return mongoose.connect(process.env.MONGO_URL as string);
}

export async function createAd(formData: FormData) {
  console.log("Form data received:", formData);
  
  const { files, ...data } = Object.fromEntries(formData);
  console.log("Parsed form data:", { files, data });

  await connect();
  console.log("Database connection established.");

  const session = await getServerSession(authOptions);
  console.log("User session:", session);

  const newAdData = {
      ...data,
      files: JSON.parse(files as string),
      userEmail: session?.user?.email,
  };
  console.log("New document to be created:", newAdData);

  const newAdDoc = await AdModel.create(newAdData);
  console.log("Document created in database:", newAdDoc);

  const response = JSON.parse(JSON.stringify(newAdDoc));
  console.log("Response to return:", response);

  return response;
}


export async function updateAd(formData: FormData) {
    const {_id, files, ...data} = Object.fromEntries(formData);
    await connect();
    const session = await getServerSession(authOptions);
    const adDoc = await AdModel.findById(_id);
    if (!adDoc || adDoc.userEmail !== session?.user?.email) {
      return;
    }
    const adData = {
      ...data,
      files: JSON.parse(files as string),
    };

    const newAdDoc = await AdModel.findByIdAndUpdate(_id, adData);
    revalidatePath(`/ad/`+_id);
    return JSON.parse(JSON.stringify(newAdDoc));
  }