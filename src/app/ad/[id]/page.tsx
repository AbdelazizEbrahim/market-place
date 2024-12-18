'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DeleteAdButton from "@/components/DeleteButton";
import Gallery from "@/components/Gallery";
import { connect, formatDate, formatMoney } from "@/libs/helper";
import { AdModel } from "@/models/Ad";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";

type Props= {
    params: {
        id: string;
    };
    searchParams: {[key: string] : string};
};

export default async function SingleAdPage(args: Props) {
    await connect();
    const adDoc = await AdModel.findById(args.params.id);
    const session = await getServerSession(authOptions);

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
                {session && session?.user?.email === adDoc.userEmail && (
                <div className="mt-2 flex gap-2">
                    <Link href={`/edit/${adDoc._id}`} className="border border-blue-600 text-blue-600 rounded-md py-1 px-4 inline-flex gap-1 items-center cursor-pointer">
                        <FontAwesomeIcon icon={faPencil}/>
                        <span>Edit</span>
                    </Link>
                    <DeleteAdButton id={adDoc._id} />
                </div>
                )}
                <label>Price</label>
                <p>{formatMoney(adDoc.price)}</p>
                <label className="">Category: </label>
                <p className="capitalize">{adDoc.category}</p>
                <label>Description: </label>
                <p className="text-sm capitalize">{adDoc.description}</p>
                <label>Contact: </label>
                <p className="text-sm capitalize">{adDoc.contact}</p>
                <p className="mt-4 text-xs text-gray-400">
                    Posted: {formatDate(adDoc.createdAt)}<br />
                    Last update: {formatDate(adDoc.updatedAt)}
                </p>
            </div>
        </div>
    )
}