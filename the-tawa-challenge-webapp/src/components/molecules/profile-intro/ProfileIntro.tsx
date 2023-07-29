import User from "@rihenhouli/ttcsm_user/lib/models/User";
import { ProfileIntroImage } from "../../atoms/image/Image";
import "./ProfileIntro.css";

interface IProps {
  user: User | null | undefined;
}
export const ProfileIntro = () => {
  return (
    <div className="profile_intro">
      <div className="profile_intro_text">
        <h1> Your profile info in the app</h1>
        <h2>
          Personal info and options to manage it. You can make some of this
          info, like your contact details, visible to others so that they can
          reach you easily. You can also see a summary of your profiles.
        </h2>
      </div>
      <ProfileIntroImage
        src={
          "https://www.gstatic.com/identity/boq/accountsettingsmobile/profile_scene_visible_360x128_18500c161aac04e9279fbb234b7de818.png"
        }
      ></ProfileIntroImage>
    </div>
  );
};
