import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TimeDatePicker from "../Elements/TimeDatePicker"
import Slider from '@mui/material/Slider';
import PricingTable from "../Elements/PricingTable";

import axios from "axios"

import { API_URL } from "../../constant/apiConstant";
import { FilledInput, FormControl, Input, InputLabel, TextField } from "@mui/material";



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

  class NewClient extends React.Component {
    state = {
      pk: 0,
      fname: "",
      sname: "",
      email: "",
      phone: "",
      vehicleYear: "",
      vehicleMake: "",
    }

    componentDidMount() {
      if (this.props.client) {
        const { pk, fname, sname, email, phone, vehicleYear, vehicleMake } = this.props.student;
        this.setState({ pk, fname, sname, email, phone, vehicleYear, vehicleMake });
      }
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    createClient = e => {
      e.preventDefault();
      axios.post(API_URL, this.state).then(() => {
        this.props.resetState();
        this.props.toggle();
      });
    };
  
    editClient = e => {
      e.preventDefault();
      axios.put(API_URL + this.state.pk, this.state).then(() => {
        this.props.resetState();
        this.props.toggle();
      });
    };
  
    defaultIfEmpty = value => {
      return value === "" ? "" : value;
    };
  }

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
              <FormControl fullWidth>
                <TextField id="fname" label="First name" variant="standard" />
                <TextField id="sname" label="Sure name" variant="standard" />
                <TextField id="email" type={"email"}  label="Email" variant="standard" />
                <TextField id="phone" type={"phone"} label="Phone" variant="standard" />
                <TextField id="service" label="Service" variant="standard" />
                <Input 
                  id="vehicleYear" 
                  value={value}
                  label="Vehicle year"
                  disabled
                  size="small"
                  variant="filled"
                  inputProps={{
                    step: 1,
                    min: 1950,
                    max: 2023,
                    }
                  }
                />
                <Slider
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}       
                  size="small"
                  defaultValue={2023}
                  valueLabelDisplay="auto"
                  marks
                  min={1950}
                  max={2023}
                  >
              </Slider>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Vehicle make</InputLabel>
                <Select
                  id="vehicleMake"
                  label="Vehicle make"
                  value={vmake}
                  onChange={handleChange}
                  size="10px"
                  >
                </Select>
              </FormControl>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Book appointment" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <CalendarBox>
                <TimeDatePicker />
              </CalendarBox>
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
const CalendarBox = styled.div`
    align-self: right;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;





