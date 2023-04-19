import React from "react";
import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TimeDatePicker from "../Elements/TimeDatePicker"
import Slider from '@mui/material/Slider';

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const [value, setValue] = React.useState(getCurrentYear);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const [vmake, setVmake] = React.useState('');

  const handleChange = (event) => {
    setVmake(event.target.value);
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Book an appointment</h1>
            <p className="font13">
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Surname:</label>
                <input type="text" id="sname" name="sname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="phone" id="phone" name="phone" className="font20 extraBold" />
                <label className="font13">Phone number:</label>
                <input type="phone" id="phone" name="phone" className="font20 extraBold" />
                <label className="font13">Vehicle year:</label>
                <Slider
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}       
                  size="small"
                  defaultValue={2023}
                  aria-label="Car year"
                  valueLabelDisplay="auto"
                  marks
                  min={1950}
                  max={2023}
                  >
                </Slider>
                <input value={value}
                  disabled
                  size="small"
                  inputProps={{
                    step: 1,
                    min: 1950,
                    max: 2023,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                  />
                <label className="font13">Vehicle make:</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Vehicle make"
                  value={vmake}
                  onChange={handleChange}
                  >
                  <MenuItem>BMW</MenuItem>
                  <MenuItem>Mercedes</MenuItem>
                  <MenuItem>Audi</MenuItem>
              </Select>
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Book appointment" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <TimeDatePicker />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;





