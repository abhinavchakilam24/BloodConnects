import './registerStyles.css';
import * as React from "react";
import { Select } from "baseui/select";
import { Button, SHAPE } from "baseui/button";
import { Heading, HeadingLevel} from 'baseui/heading';
import { DatePicker } from "baseui/datepicker";
import { Input } from "baseui/input";
import {
    PhoneInput,
    COUNTRIES,
    SIZE
  } from "baseui/phone-input";
  import {
    Checkbox,
    LABEL_PLACEMENT
  } from "baseui/checkbox";
import Navbar from '../Components/Navbar';
import mainLogo from '../Assets/logo.png';

function Register(){
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [country, setCountry] = React.useState(COUNTRIES.IN);
    const [phonenumber, setPhoneNumber] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [bloodgroup, setBloodGroup] = React.useState([]);
    const [date, setDate] = React.useState([new Date()]);
    const [location, setLocation] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    return(
        <>
            <Navbar/>
            <div className="register-container">
            <div className='registerform-heading'>
                    <HeadingLevel>
                        <Heading className='main-heading' overrides={{ Block: { style: { fontSize: '2em' } } }}>Register User</Heading>
                    </HeadingLevel>
                    <img src={mainLogo} height={36} alt="Blood Connect Logo" className="find-logo"/>
                </div>
                <form className='register-form'>
                    <div className='register-firstline'  style={{marginTop: '18px'}}>
                        <div className="firtsname">
                        <p className="register-heading">First Name</p>
                    <Input
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
    />
                        </div>
                        <div className="lastname">
                            <p className="register-heading">Last Name</p>
                            <Input
      value={lastName}
      onChange={e => setLastName(e.target.value)}
    />
                        </div>
                    </div>
                    <div className='register-secondline'>
                        <div className='phonenumber'>
                            <p className="register-heading">Phone Number</p>
                            <PhoneInput
      country={country}
      onCountryChange={({ option }) => setCountry(option)}
      text={phonenumber}
      onTextChange={e => setPhoneNumber(e.currentTarget.value)}
      size={SIZE.default}
      maxDropdownWidth="5"
    />
                        </div>
                        <div className='email'> 
                            <p className="register-heading">Email</p>
                            <Input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="name@example.com"
      type="email"
    />
                        </div>
                    </div>
                    <div className="register-thirdline">
                        <div className='bloodgroup'>
                        <p className="register-heading">Blood Group</p>
                    <Select
      backspaceRemoves={false}
      options={[
        {
          label: "A+ve",
          id: "A+ve"
        },
        {
            label: "A-ve",
            id: "A-ve"
        },
        {
            label: "B+ve",
            id: "B+ve"
        },
        {
              label: "B-ve",
              id: "B-ve"
        },
        {
            label: "AB+ve",
            id: "AB+ve"
        },
        {
              label: "AB-ve",
              id: "AB-ve"
        },
        {
              label: "O+ve",
              id: "O+ve"
        },
        {
                label: "O-ve",
                id: "O-ve"
        }
      ]}
      value={bloodgroup}
      required
      placeholder="Select Blood Group"
      onChange={params => setBloodGroup(params.value)}
    />
                        </div>
                        <div className='dob'>
                            <p className="register-heading">Date of Birth</p>
                            <DatePicker
      value={date}
      onChange={({ date }) =>
        setDate(Array.isArray(date) ? date : [date])
      }
      clearable
      maxDate={new Date("2005-01-01")}
      minDate={new Date("1960-01-01")}
      formatString="dd/MM/yyyy"
      placeholder="DD/MM/YYYY"
    />
                        </div>
                    </div>
                    <div className="register-fourthline">
                    <p className="register-heading">Location</p>
                    <Input
      value={location}
      onChange={e => setLocation(e.target.value)}
      clearable
    />
                    </div>
                    <div className='bottom-section'>
                    <Checkbox
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      Recieve blood requests via SMS
    </Checkbox>
    <div className='submit-button'>
    <Button
      onClick={() => alert("click")}
      shape={SHAPE.pill}
    >
      Submit
    </Button>
    </div>
    
                    </div>
                </form>
            </div>
        </>
    );
}
export default Register;