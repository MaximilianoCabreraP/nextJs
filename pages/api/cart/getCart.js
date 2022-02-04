import database from "../../../database"

export default async function getCart(req, res) {
    const snapshot = await database.collection("cart").get()
    if (snapshot.empty) {
        console.log("Snapshot Empty en cart ");
        return res.status(404).json({ message: "No se encontraron productos en el carrito" })
    }

    let cart;
    snapshot.forEach(doc => {
        let { items: items } = { ...doc.data() };
        cart = ({ id: doc.id, ...items })
    })

    return res.status(200).json(cart)
}
