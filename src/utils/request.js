const basepath = "https://api.sampleapis.com/movies/";

const request = async(url)=>{
    const response = await fetch(`${basepath}${url}`);
    const result =await response.json();
    return result;
}

export default request; 