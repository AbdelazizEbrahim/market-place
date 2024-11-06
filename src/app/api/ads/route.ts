import { connect } from "@/libs/helper";
import { AdModel } from "@/models/Ad";

export async function GET() {
    await connect();
    const adsDocs = await AdModel.find({}, null, { sort: { createdAt: -1 } });
    return Response.json(adsDocs);
}