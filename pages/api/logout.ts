export default async (req, res) => {
    res.setHeader('Set-Cookie', 'x-beta-test-check=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
    res.send({});
}