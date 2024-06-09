import React from 'react';
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { HeadingXXLarge, HeadingMedium, ParagraphLarge } from 'baseui/typography';
import { Card } from 'baseui/card';
import { Grid, Cell } from 'baseui/layout-grid';

const HeroSection = styled('div', {
  backgroundColor: '#f8f9fa',
  padding: '50px 20px',
  textAlign: 'center',
});

const Section = styled('div', {
  padding: '40px 20px',
  textAlign: 'center',
});

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <HeadingXXLarge>Welcome to Blood Donor Connect</HeadingXXLarge>
        <ParagraphLarge>Connecting blood donors with patients in need.</ParagraphLarge>
        <Button>Get Started</Button>
      </HeroSection>

      <Section>
        <Grid>
          <Cell span={[4, 8, 12]}>
            <HeadingMedium>How It Works</HeadingMedium>
          </Cell>
          <Cell span={[4, 8, 4]}>
            <Card>
              <HeadingMedium>Sign Up</HeadingMedium>
              <ParagraphLarge>Create an account to start donating or receiving blood.</ParagraphLarge>
            </Card>
          </Cell>
          <Cell span={[4, 8, 4]}>
            <Card>
              <HeadingMedium>Find a Donor</HeadingMedium>
              <ParagraphLarge>Search our database to find a matching blood donor near you.</ParagraphLarge>
            </Card>
          </Cell>
          <Cell span={[4, 8, 4]}>
            <Card>
              <HeadingMedium>Donate Blood</HeadingMedium>
              <ParagraphLarge>Schedule an appointment and save lives by donating blood.</ParagraphLarge>
            </Card>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};

export default HomePage;
