'use server';

import Gallery from "@/components/Gallery";
import { connect } from "@/libs/helper";
import { AdModel } from "@/models/Ad";

type Props= {
    params: {
        id: string;
    };
    searchParams: {[key: string] : string};
};

export default async function SingleAdPage(args: Props) {
    await connect();
    const adDoc = await AdModel.findById(args.params.id);

    if(!adDoc) {
        return 'Not found';
    }

    return (
        <div className="flex absolute inset-0 top-16">
            <div className="w-3/5 grow bg-black text-white flex flex-col relative">
                <Gallery files={adDoc.files} />
            </div>
            <div className="w-2/5 p-8 grow shrink-0 ">
            <h1 className="text-lg font-bold">{adDoc.title}</h1>
                <label className="">Category: </label>
                <p className="capitalize">{adDoc.category}</p>
                <label>Description: </label>
                <p className="text-sm capitalize">{adDoc.description}</p>
                <label>Contact: </label>
                <p className="text-sm capitalize">{adDoc.contact}</p>
            </div>
        </div>
    )
}