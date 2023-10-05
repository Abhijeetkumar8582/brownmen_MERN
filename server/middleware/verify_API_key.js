function checkAPIsKey(req, res, next) {
    const apiKey = req.get('X-Api-Key');
    const server_api_key = '6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96'

    console.log(server_api_key);
    if (!apiKey || apiKey !== `${process.env.API_KEY}`) {
        return res.status(401).send('Unauthorized'); // if the API key is not provided or invalid, return an error response
      }
      next();
    
}
export default checkAPIsKey;
