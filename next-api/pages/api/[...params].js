export default function handler(req, res, next) {
    const params = req.query.params
    console.log(params)
    res.status(200).json(params)
}