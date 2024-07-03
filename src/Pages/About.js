import React from 'react';
import { styled } from 'baseui';
import { HeadingXXLarge, HeadingLarge, ParagraphMedium } from 'baseui/typography';
import { Grid, Cell } from 'baseui/layout-grid';
import { FaHeart, FaUsers, FaLock, FaMapMarkerAlt, FaRegSmile, FaRegThumbsUp } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Container = styled('div', {
  background: 'linear-gradient(to bottom, #f5f7fa, white)',
  padding: '40px 20px',
  color: 'black',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
});

const Section = styled('div', {
  marginBottom: '40px',
  padding: '30px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const Card = styled('div', {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
});

const CardIcon = styled('div', {
  fontSize: '36px',
  marginBottom: '10px',
  color: '#007bff',
});

const About = () => {
  return (
    <>
    <Navbar/>
        <Container>
      <Section>
        <HeadingXXLarge>About Us</HeadingXXLarge>
        <Card>
          <CardIcon><FaHeart /></CardIcon>
          <ParagraphMedium>
            Welcome to Blood Connect, a unique and innovative platform dedicated to connecting blood donors with those in need. Our mission is simple yet profound: to build a community that actively participates in saving lives through the act of blood donation.
          </ParagraphMedium>
        </Card>
      </Section>

      <Section>
        <HeadingXXLarge>Our Mission</HeadingXXLarge>
        <Card>
          <CardIcon><FaRegSmile /></CardIcon>
          <ParagraphMedium>
            At the heart of Blood Connect lies the commitment to give back to society. We believe in the power of community and the impact that collective effort can have on saving lives. Our platform is designed to make the process of finding and connecting with the nearest blood donors as seamless and efficient as possible.
          </ParagraphMedium>
        </Card>
      </Section>

      <Section>
        <HeadingXXLarge>Why We Exist</HeadingXXLarge>
        <Grid>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaUsers /></CardIcon>
              <HeadingLarge>Connecting Donors and Recipients</HeadingLarge>
              <ParagraphMedium>
                Our website serves as a bridge between blood donors and recipients, ensuring that those in need can find help quickly and easily. By providing a reliable and user-friendly platform, we aim to streamline the donation process and reduce the time it takes to get critical blood supplies to those who need them.
              </ParagraphMedium>
            </Card>
          </Cell>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaRegThumbsUp /></CardIcon>
              <HeadingLarge>Building a Life-Saving Community</HeadingLarge>
              <ParagraphMedium>
                We are more than just a website; we are a community of compassionate individuals committed to making a difference. Through our platform, we encourage people to come together, share their experiences, and support each other in the noble cause of blood donation.
              </ParagraphMedium>
            </Card>
          </Cell>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaHeart /></CardIcon>
              <HeadingLarge>Giving Back to Society</HeadingLarge>
              <ParagraphMedium>
                Blood donation is a selfless act that has the power to save lives. Our main purpose is to facilitate this life-saving act and encourage more people to donate blood. By doing so, we aim to create a ripple effect of generosity and kindness that benefits society as a whole.
              </ParagraphMedium>
            </Card>
          </Cell>
        </Grid>
      </Section>

      <Section>
        <HeadingXXLarge>What We Offer</HeadingXXLarge>
        <Grid>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaMapMarkerAlt /></CardIcon>
              <ParagraphMedium><strong>Easy Registration:</strong> Signing up as a donor or recipient on our platform is quick and straightforward, allowing users to start connecting with each other without delay.</ParagraphMedium>
            </Card>
          </Cell>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaMapMarkerAlt /></CardIcon>
              <ParagraphMedium><strong>Location-Based Matching:</strong> Our advanced search feature helps users find the nearest donors or recipients, making the process of blood donation more convenient and efficient.</ParagraphMedium>
            </Card>
          </Cell>
          <Cell span={[4, 8, 12]}>
            <Card>
              <CardIcon><FaLock /></CardIcon>
              <ParagraphMedium><strong>Secure and Confidential:</strong> We prioritize the privacy and security of our users, ensuring that all personal information is protected and handled with care.</ParagraphMedium>
            </Card>
          </Cell>
        </Grid>
      </Section>

      <Section>
        <HeadingXXLarge>Join Us</HeadingXXLarge>
        <Card>
          <CardIcon><FaUsers /></CardIcon>
          <ParagraphMedium>
            Whether you are a potential donor or someone in need of blood, we invite you to join our community. Together, we can make a significant impact and save countless lives. Your participation and support are crucial in helping us achieve our mission of creating a more connected and compassionate world.
          </ParagraphMedium>
          <ParagraphMedium>
            Thank you for being a part of Blood Connect. Let's work together to make a difference, one donation at a time.
          </ParagraphMedium>
        </Card>
      </Section>
    </Container>
    <Footer/>
    </>
  );
};

export default About;
