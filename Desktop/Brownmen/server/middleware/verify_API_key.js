function checkAPIsKey(req, res, next) {
    const apiKey = req.get('X-Api-Key');
    const server_api_key = process.env.Server_API_KEY
    if (!apiKey || apiKey !== "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96") {
        return res.status(401).send('Unauthorized'); // if the API key is not provided or invalid, return an error response
      }
      next();
    
}
export default checkAPIsKey;
