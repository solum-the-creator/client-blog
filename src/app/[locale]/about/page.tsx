import { JoinOurTeamSection } from '@/components/join-our-team-section/join-our-team-section';

import { AboutHeader } from './_components/about-header/about-header';
import { AboutTeamSection } from './_components/about-team-section/about-team-section';
import { ListAuthors } from './_components/list-authors/list-authors';
import { MissionSection } from './_components/mission-section/mission-section';
import { OverviewSection } from './_components/overview-section/overview-section';
import { WhyStartSection } from './_components/why-start-section/why-start-section';

import styles from './about-page.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.content}>
        <AboutHeader />
        <OverviewSection />
        <MissionSection />
        <AboutTeamSection />
        <WhyStartSection />
        <ListAuthors />
        <JoinOurTeamSection />
      </div>
    </div>
  );
}
