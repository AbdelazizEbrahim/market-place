import { connect } from "@/libs/helper";
import { Ad, AdModel } from "@/models/Ad";
import { FilterQuery } from "mongoose";

export async function GET(req: Request) {
    await connect();
    const {searchParams} = new URL(req.url);

    const phrase = searchParams.get('phrase') || null;
    const category = searchParams.get('category') || null;

    const filter:FilterQuery<Ad> = {};

    if(phrase) {
        filter.title = {$regex: '.*'+phrase+'.*', $options:'i'}
    } 

    if (category) {
        filter.category = category;
    }

    const adsDocs = await AdModel.find(filter, null, { sort: { createdAt: -1 } });
    return Response.json(adsDocs);
}