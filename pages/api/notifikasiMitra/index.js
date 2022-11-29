const { connectToDatabase } = require('../../../lib/mongodb');
import crypto from "crypto";


function createHash(input) {
    const md5sum = crypto.createHash("md5");
    md5sum.update(Buffer.from(input));
    return md5sum.digest("hex");
}

export default async (req, res) => {
    let { db } = await connectToDatabase();
    if (req.method == "POST") {
        console.log(req.body);
        const subscriptionRequest = req.body;
        const subscriptionReqString = JSON.stringify(subscriptionRequest);
        const susbscriptionId = createHash(subscriptionReqString);
        await db.collection('tbl_notifikasi').insertOne({ id: susbscriptionId, subscribe_req: subscriptionReqString });
        res.json({
            id: susbscriptionId
        });
    }
}