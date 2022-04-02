import React from 'react';

import { useEffect, useRef } from "react";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi There, I'm<br />
          Samuel Kung'u
        </SectionTitle>
        <SectionText>
        FULL STACK WEB DEVELOPER


        </SectionText>
        <Button onClick={props.handleClick}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;