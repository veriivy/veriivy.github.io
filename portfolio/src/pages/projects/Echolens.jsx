import ProjectLayout from '../ProjectLayout'
import {
  TextBlock,
  SectionLabel,
  ExternalLink,
  LinkRow,
  VideoEmbed,
  SideBySide,
  MediaGrid,
  Callout,
} from '../../components/blocks'

export default function Echolens() {
  return (
    <ProjectLayout slug="echolens">
        <Callout label="Recognition">
            <p>Conrad Innovator Distinction 2025</p>

        </Callout>
      <SideBySide>
        <TextBlock>
        Over 300 million individuals worldwide suffer from moderate to severe visual impairment and among them, 1 in 12 people experience either motor vehicle or cyclist collisions. Important cues such as traffic lights and hand signals fail to provide sufficient context for visually impaired individuals navigating through busy streets.
<br />
<br />
Many assistive services and technologies exist, but each come with their own complication. White canes can be unreliable and misleading in some scenarios, while service dogs and other interactive assistive technologies are both costly, high maintenance, and have steep learning curves. EchoLens addresses both issues with a cost-friendly alternative to current assistive technologies on the market that is both convenient and efficient for the user.
      </TextBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ExternalLink
          href="https://echoolens.wixstudio.com/echolens"
          label="Visit Website"
          type="website"
          cover="/echolensCover.png"
        />
                <VideoEmbed
          src="https://www.youtube.com/embed/sYHPovq0Lr4?si=oQxXuNB7OZ9PeAgt"
          title="Echolens demo"
        />
      </div>
      </SideBySide>
      <SectionLabel>Technical Documentation</SectionLabel>
      <MediaGrid
        columns={1}
        images={[
          { src: '/echolens-doc1.png', alt: 'Documentation figure 1' },
          { src: '/echolens-doc2.png', alt: 'Documentation figure 2' },
          { src: '/echolens-doc3.png', alt: 'Documentation figure 3' },
          { src: '/echolens-doc4.png', alt: 'Documentation figure 4' },
        ]}
      />
          <LinkRow>
        <ExternalLink
          href="https://github.com/EchooLens/echolens"
          label="View on GitHub"
          type="github"
        />
      </LinkRow>
    </ProjectLayout>
  )
}
