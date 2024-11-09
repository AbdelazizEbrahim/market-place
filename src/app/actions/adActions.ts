'use server';

import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AdModel } from "@/models/Ad";
import { revalidatePath } from "next/cache";

async function connect() {
    return mongoose.connect(process.env.MONGO_URL as string);
}

export async function createAd(formData: FormData){
    const {files, ...data} = Object.fromEntries(formData);
    await connect();
    const session = await getServerSession(authOptions);
    const newAdData = {
        ...data,
        files: JSON.parse(files as string),
        userEmail: session?.user?.email,
    };
    const newAdDoc = await AdModel.create(newAdData);
    return JSON.parse(JSON.stringify(newAdDoc));   
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