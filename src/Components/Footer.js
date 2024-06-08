import React from 'react';
import { styled } from 'baseui';
import { ParagraphSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled('footer', {
  backgroundColor: '#f1f1f1',
  padding: '20px',
  textAlign: 'center',
  borderTop: '1px solid #e0e0e0',
});

const FooterLink = styled('a', {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#000',
  ':hover': {
    textDecoration: 'underline',
  },
});

const SocialLink = styled('a', {
  margin: '0 10px',
  color: '#000',
  fontSize: '20px',

});

const Footer = () => {
  return (
    <FooterContainer>
      <Block marginBottom="scale400">
        <ParagraphSmall>
          © 2024 Blood Connect. All rights reserved.
        </ParagraphSmall>
      </Block>
      <Block marginBottom="scale400">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </Block>
      <Block>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </Block>
    </FooterContainer>
  );
};

export default Footer;
