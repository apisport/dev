const { connectToDatabase } = require('../../../lib/mongodb');
import crypto from "crypto";
import webpush from "web-push";
const ObjectId = require('mongodb').ObjectId;

const vapidKeys = {
    privateKey: "yl03sSfv_nCxNy8SbZJXm168M7KVeUOLjHYRVyuVt3Y",
    publicKey: "BL3Sv8nFM_tvnILPoGNG6rlLPqubF_mEOpDkaaeyNM2KU3BLih-PLJAtdgfGPPnwZFTDB_KCZJp1hiYSUx9wfxs"
};

webpush.setVapidDetails("mailto:api.sport.team@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);

export default async (req, res) => {
    let { db } = await connectToDatabase();
    if (req.method == "GET") {
        const { id, idTransaksiReq } = req.query;
        // const idTransaksi = new ObjectId(idTransaksiReq)
        console.log(id);

        let getSubscribeData = await db.collection('tbl_notifikasi').find({ id: id }).toArray();
        // let getTransaksiData = await db.collection('transaksi').find({ _id: idTransaksi }).toArray();
        console.log(getSubscribeData);
        // console.log(getTransaksiData);
        const pushSubscription = JSON.parse(getSubscribeData[getSubscribeData.length-1].subscribe_req);
        webpush.sendNotification(
            pushSubscription,
            JSON.stringify({
                title: "Transaksi Baru Telah diterima! ",
                text: `Mohon untuk segera menerima atau menolak transaksi dari`,
                image: "/ico.png",
                tag: "new-product",
                url: "https://infolapangan.site/"
            })
        )
            .catch(err => {
                console.log(err);
            });

        res.status(202).json({});
    }
}