import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Pricing</h1>
            <p className="font13">
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="break"
                price="from $49.95"
                title="BREAK"
                text="Description"
                offers={[
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="axle"
                price="$149.95 Each"
                title="AXEL"
                text="Description"
                offers={[
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="wheel"
                price="from $29.95"
                title="TIRE AND WHEEL"
                text="Description"
                offers={[
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                  { name: "Something", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




