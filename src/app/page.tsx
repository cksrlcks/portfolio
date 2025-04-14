import ScrollProvider from '@/context/ScrollProvider';
import Profile from '@/components/Profile';
import Nav from '@/components/Nav';
import { HomeContent, HomeHeader, HomeWrapper } from '@/components/Home';
import Section from '@/components/Section';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <HomeWrapper>
      <ScrollProvider>
        <HomeHeader>
          <Profile />
          <Nav />
        </HomeHeader>
        <HomeContent>
          <Section id='about'>
            <About />
          </Section>
          <Section id='experiences'>
            <Experiences />
          </Section>
          <Section id='projects'>
            <Projects />
          </Section>
        </HomeContent>
      </ScrollProvider>
    </HomeWrapper>
  );
}
