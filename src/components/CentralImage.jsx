import { Image } from "react-bootstrap"

export default function CentralImage({id, image, alternativeText}){
    return(
      <Image id={id} src={image} className="my-4 img-fluid rounded shadow-lg" alt={alternativeText}></Image>
    )
}