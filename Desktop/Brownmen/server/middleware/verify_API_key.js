function checkAPIsKey(req, res, next) {
    const apiKey = req.get('X-Api-Key');
    const server_api_key = process.env.REACT_APP_Server_API_KEY

    console.log(server_api_key);
    if (!apiKey || apiKey !== `${process.env.API_KEY}`) {
        return res.status(401).send('Unauthorized'); // if the API key is not provided or invalid, return an error response
      }
      next();
    
}
export default checkAPIsKey;
