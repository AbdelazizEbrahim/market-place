'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdForm from "@/components/AdForm";
import { connect } from "@/libs/helper";
import { AdModel } from "@/models/Ad";
import { getServerSession } from "next-auth";

type Props= {
    params: {
        id: string;
    };
    searchParams: {[key: string] : string};
};

export default async function EditPage(props: Props) {
    const id = props.params.id;
    await connect();
    const session = await getServerSession(authOptions);

    const adDoc = await AdModel.findById(id);
    if (!adDoc) {
        return '404 Not found';
    }

    if(session?.user?.email !== adDoc?.userEmail) {
        return 'Not Yours'
    }

  return (
    <AdForm 
        id={adDoc._id}
        defaultFiles={adDoc.files}
        defaultTexts={adDoc}
    />
  )
}

