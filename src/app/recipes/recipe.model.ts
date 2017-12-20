export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string; /*this will be a url eventually*/

  constructor (
    name: string,
    desc: string,
    imagePath: string
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath
  }
}
