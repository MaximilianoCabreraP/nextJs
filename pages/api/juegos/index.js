import database from "../../../database"

export default async function juegos(req, res) {
    let { popular } = req.query

    const snapshot = await database.collection("juegos").get()
    if (snapshot.empty) {
        return res.status(404).json({ message: "No se encontraron juegos" })
    }

    const juegos = []
    snapshot.forEach(doc => {
        juegos.push({ id: doc.id, ...doc.data() })
    })

    return res.status(200).json(juegos)
}