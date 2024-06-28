import React from 'react';
import './HomepageStyles.css';
import { styled } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import { Heading, HeadingLevel} from 'baseui/heading';
import { HeadingXLarge, HeadingMedium, ParagraphLarge } from 'baseui/typography';
import { Card, StyledBody } from 'baseui/card';
import { Grid, Cell } from 'baseui/layout-grid';
import { useNavigate} from "react-router-dom";


const Section = styled('div', {
  padding: '60px 20px',
  textAlign: 'center',
  backgroundColor: '#f5f7fa',
});

const StatisticsSection = styled('div', {
  backgroundColor: '#ffffff',
  padding: '60px 20px',
  textAlign: 'center',
});

const StyledCard = styled(Card, {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  },
  padding: '20px',
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
      <Section>
        <HeadingXLarge>Why Blood Connect?</HeadingXLarge>
        <ParagraphLarge overrides={{ Block: { style: { textAlign: 'center', padding: '50px', paddingTop: '0px'} } }}>
          Welcome to Blood Connect, a unique platform dedicated to connecting blood donors with recipients in need. Our mission is to build a compassionate community that saves lives through seamless and efficient blood donations. By providing an easy-to-use, secure system with geo-searching and real-time updates about donors, we strive to make the process of giving and receiving blood as effortless and hassle-free as possible. Join us in our mission to give back to society and make a significant impact, one donation at a time.
        </ParagraphLarge>
      </Section>

      <StatisticsSection>
        <Grid>
          <Cell span={[4, 8, 12]}>
            <HeadingXLarge>Our Impact</HeadingXLarge>
          </Cell>
          <Cell span={[4, 4, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>1000+</HeadingMedium>
                <ParagraphLarge>Donors Registered</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
          <Cell span={[4, 4, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>500+</HeadingMedium>
                <ParagraphLarge>Lives Saved</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
          <Cell span={[4, 4, 4]}>
            <StyledCard>
              <StyledBody>
                <HeadingMedium>300+</HeadingMedium>
                <ParagraphLarge>Blood Drives Organized</ParagraphLarge>
              </StyledBody>
            </StyledCard>
          </Cell>
        </Grid>
      </StatisticsSection>

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
