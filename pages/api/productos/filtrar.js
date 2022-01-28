import database from "../../../database"

export default async function filtrar(req, res) {
    const { popular } = req.query
    // Consulta de información
    const collection = database.collection("productos")
    let snapshot
    if (popular) {
        snapshot = await collection.where('popular', '==', true).get()
    } else {
        snapshot = await collection.get()
    }

    if (snapshot.empty) {
        return res.status(404).json({ message: "No se encontraron documentos" })
    }

    const productos = []
    snapshot.forEach(doc => {
        productos.push(doc.data())
    })

    return res.status(200).json(productos)
}