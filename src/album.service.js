import axios from "axios";

class AlbumService{
  /*constructor(){
    console.log("hello album service2~");
  }*/
  getAlbumList(){
    return axios
      .get("//jsonplaceholder.typicode.com/albums")
      .then(response => response.data);

  }
}

export default AlbumService;
