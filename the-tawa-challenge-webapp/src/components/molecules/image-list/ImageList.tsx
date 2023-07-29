import { MouseEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { ProfileModalPicListImg } from "../../atoms/image/Image";
import { Buffer } from "buffer";
import UserImage from "@rihenhouli/ttcsm_user-image/lib/models/UserImage";
import { ProfileBasicInfoChoosePhotoModal } from "../../organisms/modal/basic-info-modal/Modal";
import {userImageActions} from "@rihenhouli/ttcsm_user-image/lib/state";
import { useDispatch } from "react-redux";
import login_page from "../../../assets/online_article.png";

require("./ImageList.css");
export const AddProfilePhotoPrevImagesDiv = (props: {
  userPhotosList: UserImage[] | null | undefined;
}) => {
  const dispatch =useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [imageName, setPhotoName] = useState("");
  const [imageId, setPhotoId] = useState("");
  const generateSrc=(path:string):string =>{
   const converted = path.replace(/^public\\/, "") 
   const url = 'http://localhost:3030/'
    return url+converted
  }
  let existingPictures = true;
  if (
    props.userPhotosList == null ||
    props.userPhotosList == undefined ||
    props.userPhotosList.length == 0
  ) {
    existingPictures = false;
  }
  const onClick = () => {
    console.log("userPhotosList web app", props.userPhotosList);
  };
  return (
    <div className="add_profile_picture_image_list_div">
      {!existingPictures && <h1> no images available</h1>}
      {existingPictures &&
        props.userPhotosList?.map((image, i) => (
          <ProfileModalPicListImg
            key={i}
            onClick={() => {
              console.log("imageId", image._id);
              setPhotoName(image.userImageName)
              setPhotoId(image._id)
              setShowModal(true)
            }}
            src={generateSrc(image.userImagePath) || login_page}
            alt={image.userImageAlt? image.userImageAlt : "img"}
          ></ProfileModalPicListImg>
        ))}
      <ProfileBasicInfoChoosePhotoModal
        show={showModal}
        onClick={()=>setShowModal(!showModal)}
        save={undefined}
        download={()=>{dispatch(userImageActions.downloadData(imageId))}}
        imgSrc={""}
      ></ProfileBasicInfoChoosePhotoModal>
    </div>
  );
};
