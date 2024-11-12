export default async function Logout(req, res) {
    if (req.method === 'GET') {
        try {
            res.setHeader('Set-Cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict');
            res.status(200).json({ message: 'Logout successful' })
        } catch (error) {
            console.error('Logout failed', error)
            res.status(500).json({ error: 'Logout failed' })
        }
    }
}