import { useNavigate } from "react-router-dom";
import { SidebarButton } from "../../atoms/button/Button";
import { SidebarButtonImage } from "../../atoms/image/Image";
import { MouseEvent } from "react";
import {
  SidebarButtonDiv,
  SidebarHeaderDiv,
} from "../../molecules/button-div/ButtonDiv";
import profile_img from "../../../assets/profile_img.png";
import { RoutesList } from "../../../routes/Routes";
require("./Sidebar.css");
export const Sidebar = () => {
  const navigate = useNavigate();
  const sidebarRoutes = RoutesList.filter(
    (route) => route.parent === "dashboard"
  );
  return (
    <div className="sidebar">
      <SidebarHeaderDiv
        onClick={() => navigate("/dashboard")}
        text={"DASHBOARD"}
      ></SidebarHeaderDiv>
      {sidebarRoutes.map((route,i) => (
        <SidebarButtonDiv
          key={i}
          onClick={() => navigate(route.absolutePath)}
          src={route.src}
          alt={route.alt}
          text={route.text}
        ></SidebarButtonDiv>
      ))}
    </div>
  );
};
