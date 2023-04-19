import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AxleIcon from "../../assets/svg/Services/AxleIcon";
import BreakIcon from "../../assets/svg/Services/BreakIcon";
import WheelIcon from "../../assets/svg/Services/WheelIcon";
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({ icon, priceFrom, title, text, offers, action }) {
  let getIcon;

  switch (icon) {
    case "axle":
      getIcon = <AxleIcon />;
      break;
    case "break":
      getIcon = <BreakIcon />;
      break;
    case "wheel":
      getIcon = <WheelIcon />;
      break;
    default:
      getIcon = "";
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        {getIcon}
        <p style={{ fontVariant: "all-small-caps" }} className="font30 extraBold">{priceFrom}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 style={{ fontVariant: "all-small-caps" }} className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                    </div>
                <div style={{ marginLeft:"20px" }}>
                  <Link to="contact" smooth={true}>
                  <p className="font25">{item.name}</p>
                  </Link>
                </div>
                <div style={{ marginLeft: "60px" }}>
                  <p style={{}} className="font25">{item.price}</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
