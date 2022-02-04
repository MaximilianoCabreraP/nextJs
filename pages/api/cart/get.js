import database from "../../../database"

export default async function getCart({ body }, res) {
    const snapshot = await database.collection("cart")
        .doc(body.username)
        .get()

    res.json(snapshot.data());
}