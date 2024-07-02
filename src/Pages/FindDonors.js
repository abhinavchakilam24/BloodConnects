import './FindDonorsStyles.css';
import * as React from "react";
import { Heading, HeadingLevel} from 'baseui/heading';
import { Select } from "baseui/select";
import { Button, SHAPE } from "baseui/button";
import mainLogo from '../Assets/logo.png';
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

const FindDonors = () => {
    const [patientFirstName, setPatientFirstName] = React.useState("");
    const [patientLastName, setPatientLastName] = React.useState("");
    const [attendeeFirstName, setAttendeeFirstName] = React.useState("");
    const [attendeeLastName, setAttendeeLastName] = React.useState("");
    const [country, setCountry] = React.useState(COUNTRIES.IN);
    const [phonenumber, setPhoneNumber] = React.useState("");
    const [bloodgroup, setBloodGroup] = React.useState([]);
    const [type, setType] = React.useState([]);
    const [date, setDate] = React.useState([new Date()]);
    const [location, setLocation] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    return(
        <>
            <Navbar/>
            <div className="find-container">
                <div className='findform-heading'>
                    <HeadingLevel>
                        <Heading className='main-heading' overrides={{ Block: { style: { fontSize: '2em' } } }}>Blood Request</Heading>
                    </HeadingLevel>
                    <img src={mainLogo} height={36} alt="Blood Connect Logo" className="find-logo"/>
                </div>
                <form className='find-form'>
                    <div className='find-firstline' style={{marginTop: '18px'}}>
                        <div className="firtsname">
                        <p className="find-heading">Patient First Name</p>
                    <Input
      value={patientFirstName}
      onChange={e => setPatientFirstName(e.target.value)}
    />
                        </div>
                        <div className="lastname" >
                            <p className="find-heading">Patient Last Name</p>
                            <Input
      value={patientLastName}
      onChange={e => setPatientLastName(e.target.value)}
    />
                        </div>
                    </div>
                    <div className='find-secondline'>
                    <div className="firtsname">
                        <p className="find-heading">Attendee First Name</p>
                    <Input
      value={attendeeFirstName}
      onChange={e => setAttendeeFirstName(e.target.value)}
    />
                        </div>
                        <div className="lastname">
                            <p className="find-heading">Attendee Last Name</p>
                            <Input
      value={attendeeLastName}
      onChange={e => setAttendeeLastName(e.target.value)}
    />
                        </div>
                    </div>
                    <div className='find-thirdline'>
                        <div className='phonenumber'>
                            <p className="find-heading">Attendee Phone Number</p>
                            <PhoneInput
      country={country}
      onCountryChange={({ option }) => setCountry(option)}
      text={phonenumber}
      onTextChange={e => setPhoneNumber(e.currentTarget.value)}
      size={SIZE.default}
      maxDropdownWidth="5"
    />
                        </div>
                        <div className='find-bloodgroup'>
                        <p className="find-heading">Required Blood Group</p>
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
                    </div>
                    <div className="find-fourthline">
                        <div className='type'>
                        <p className="find-heading">Type</p>
                        <Select
      options={[
        {
          label: "Blood",
          id: "BLOOD"
        },
        {
          label: "Platelets",
          id: "PLATELETS"
        }
      ]}
      value={type}
      required
      placeholder="Type"
      onChange={params => setType(params.value)}
    />
                        </div>
                        <div className='requireddate'>
                            <p className="find-heading">Required Date</p>
                            <DatePicker
      value={date}
      onChange={({ date }) =>
        setDate(Array.isArray(date) ? date : [date])
      }
      clearable
      minDate={new Date("2024-07-01")}
      formatString="dd/MM/yyyy"
      placeholder="DD/MM/YYYY"
    />
                        </div>
                    </div>
                    <div className="find-fifthline">
                    <p className="find-heading">Hospital Name</p>
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
      Recieve request update via SMS
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
export default FindDonors