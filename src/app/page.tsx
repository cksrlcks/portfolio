import ScrollProvider from '@/context/ScrollProvider';
import Profile from '@/components/Profile';
import Nav from '@/components/Nav';
import { HomeContent, HomeHeader, HomeWrapper } from '@/components/Home';
import Section from '@/components/Section';
import About from '@/components/About';
import Experiencs from '@/components/Experiencs';
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
          <Section id='experiencs'>
            <Experiencs />
          </Section>
          <Section id='projects'>
            <Projects />
          </Section>
        </HomeContent>
      </ScrollProvider>
    </HomeWrapper>
  );
}
