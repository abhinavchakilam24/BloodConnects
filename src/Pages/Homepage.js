import React from 'react';
import './HomepageStyles.css';
import { styled } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import { Heading, HeadingLevel} from 'baseui/heading';
import { HeadingXLarge, HeadingMedium, ParagraphLarge } from 'baseui/typography';
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import { Grid, Cell } from 'baseui/layout-grid';
import { useNavigate} from "react-router-dom";
import logo from '../Assets/logo.png';
import LandingPageImage from '../Assets/doctor-landing-page.png';


const Section = styled('div', {
  padding: '60px 20px',
  textAlign: 'center',
  backgroundColor: '#f5f7fa',
});

const WhySection = styled('div', {
  padding: '30px 20px',
  textAlign: 'center',
  backgroundColor: '#f5f7fa',
});

const TipsSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '18px',
  padding: '0 80px 80px 80px'
})

const StyledCard = styled(Card, {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  },
  textAlign: 'center',
});

const HomePage = () => {
  const navigate = useNavigate();
  const gotToRegisterPage=()=>{
  navigate("/register");
};
  return (
    <div>
        <div className='landing-page-main'>
          <HeadingLevel>
            <Heading className='main-heading' overrides={{ Block: { style: { fontSize: '3.5em' } } }}>Connecting Lives, one drop at a time</Heading>
            <ParagraphLarge className='following-line' overrides={{ Block: { style: { fontSize: '1.5em', paddingBottom: '0px' } } }}>Join our community to find and give life-saving blood donations</ParagraphLarge>
          </HeadingLevel>
          <Button onClick={() => gotToRegisterPage()} overrides={{ BaseButton: { style: { backgroundColor: 'black', color: '#fff', size: '100px' } } }} shape={SHAPE.pill}>
            Get Started
          </Button>
        </div>
      <WhySection>
        <HeadingXLarge overrides={{ Block: { style: { marginTop: '5px', marginBottom: '8px' } } }}>Why Blood Connect?</HeadingXLarge>
          <div className='why-blood-connect'>
            <div className='why-bc-image'>
              <img src={LandingPageImage} height={450} width={450} alt="An logo of a doctor"/>
            </div>
            <div className='why-bc-cards'>
              <Card title="Unique Platform" overrides={{ Root: { style: { width: "450px" } } }}>
                <StyledBody>
                  Connects donors and recipients, fostering a community dedicated to saving lives through efficient blood donations.
                </StyledBody>
              </Card>
              <Card title="User-Friendly and Secure" overrides={{ Root: { style: { width: "450px" } } }}>
                <StyledBody>
                  Our application offers geo-searching and real-time updates, ensuring a seamless experience for users.
                </StyledBody>
              </Card>
              <Card title="Mission-Driven Impact" overrides={{ Root: { style: { width: "450px" } } }}>
                <StyledBody>
                  Committed to giving back to society, we aim to make the donation process effortless and accessible for all.
                </StyledBody>
              </Card>
            </div>
          </div>
      </WhySection>

      <div>
      <HeadingXLarge >Tips</HeadingXLarge>
      <TipsSection>
      <StyledCard
      overrides={{ Root: { style: { width: "370px", padding: '10px' } } }}
      title="Before Donating"
    >
      <StyledThumbnail
        src={logo}
      />
      <StyledBody>
      Ensure you're well-hydrated by drinking plenty of water, eat a healthy meal rich in iron, and avoid fatty foods.
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "40%" } } }} shape={SHAPE.pill}>
          Read More
        </Button>
      </StyledAction>
    </StyledCard>

    <StyledCard
      overrides={{ Root: { style: { width: "370px", padding: '10px' } } }}
      title="During Donation"
    >
      <StyledThumbnail
        src={logo}
      />
      <StyledBody>
      Stay calm and relaxed, and let the staff know if you feel unwell at any point during the process.
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "40%" } } }} shape={SHAPE.pill}>
          Read More
        </Button>
      </StyledAction>
    </StyledCard>
    <StyledCard
      overrides={{ Root: { style: { width: "370px", padding: '10px' } } }}
      title="After Donating">
      <StyledThumbnail
        src={logo}
      />
      <StyledBody>
      Rest for a few minutes, drink extra fluids, and avoid strenuous activities for the rest of the day.
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "40%" } } } } shape={SHAPE.pill}>
          Read More
        </Button>
      </StyledAction>
    </StyledCard>
      </TipsSection>
      </div>
      

      <Section>
        <HeadingXLarge>How It Works</HeadingXLarge>
        <Grid>
          <Cell span={[4, 8, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>Sign Up</HeadingMedium>
                <ParagraphLarge>Create an account to start donating or receiving blood.</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
          <Cell span={[4, 8, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>Find a Donor</HeadingMedium>
                <ParagraphLarge>Search our database to find a matching blood donor near you.</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
          <Cell span={[4, 8, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>Donate Blood</HeadingMedium>
                <ParagraphLarge>Schedule an appointment and save lives by donating blood.</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
        </Grid>
      </Section>

      <Section>
        <HeadingXLarge>Join Us</HeadingXLarge>
        <ParagraphLarge>Together, we can make a difference. Sign up today and help save lives.</ParagraphLarge>
        <Button overrides={{ BaseButton: { style: { backgroundColor: 'black', color: '#fff' } } }} shape={SHAPE.pill}>
          Sign Up Now
        </Button>
      </Section>
    </div>
  );
};

export default HomePage;
