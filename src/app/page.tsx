import ScrollProvider from '@/context/ScrollProvider';
import Profile from '@/components/Profile';
import Nav from '@/components/Nav';
import { HomeContent, HomeHeader, HomeWrapper } from '@/components/Home';
import { About, Experiencs, Projects, Section } from '@/components/section';
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
