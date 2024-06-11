import React from 'react';
import './HomepageStyles.css';
import { styled } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import { HeadingXXLarge, HeadingXLarge, HeadingMedium, ParagraphLarge } from 'baseui/typography';
import { Card, StyledBody } from 'baseui/card';
import { Grid, Cell } from 'baseui/layout-grid';

const HeroSection = styled('div', {
  backgroundColor: '#f8f9fa',
  padding: '100px 20px',
  textAlign: 'center',
  color: '#fff',
});

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
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeadingXXLarge className='main-heading'>Connecting Lives, One Drop at a time</HeadingXXLarge>
        <ParagraphLarge>Join our community to find and give life-saving blood donations</ParagraphLarge>
        <Button overrides={{ BaseButton: { style: { backgroundColor: 'black', color: '#fff' } } }} shape={SHAPE.pill}>
          Get Started
        </Button>
      </HeroSection>

      {/* About Section */}
      <Section>
        <HeadingXLarge>About Blood Donor Connect</HeadingXLarge>
        <ParagraphLarge>
          Blood Donor Connect is a platform that bridges the gap between blood donors and patients in need. Our mission is to save lives by making it easier for people to donate and receive blood.
        </ParagraphLarge>
      </Section>

      {/* Statistics Section */}
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

      {/* How It Works Section */}
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

      {/* Call to Action Section */}
      <Section>
        <HeadingXLarge>Join Us</HeadingXLarge>
        <ParagraphLarge>Together, we can make a difference. Sign up today and help save lives.</ParagraphLarge>
        <Button overrides={{ BaseButton: { style: { backgroundColor: '#1a73e8', color: '#fff' } } }} shape={SHAPE.pill}>
          Sign Up Now
        </Button>
      </Section>
    </div>
  );
};

export default HomePage;
