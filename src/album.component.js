import AlbumService from "./album.service";
import albumListTmpl from "./templates/album-list.hbs";

class AlbumComponet{
  constructor(){
    this.albumService = new AlbumService();
    this.albumService.getAlbumList()
      .then(albumList => this.render(albumList));
  }

  render(albumList){
    const tmpl = albumListTmpl({albumList});
    document.getElementById("album-list").innerHTML = tmpl;
  }
}

export default AlbumComponet;
