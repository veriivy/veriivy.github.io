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

export default function LiveMatch() {
  return (
    <ProjectLayout slug="livematch">
        <SectionLabel>Overview</SectionLabel>
        <TextBlock>
          <p>LiveMatch connects students with verified landlords near campus. Browse properties, express interest, and sign leases — all in one structured workflow.</p>
        </TextBlock>
        <SideBySide>
                    <ExternalLink
          href="https://live-match-phi.vercel.app/"
          label="Visit Our Website"
          cover="/livematchCover.png"
        />
        <div>
            <SectionLabel>Pitch Video</SectionLabel>
            <VideoEmbed src="https://www.youtube.com/embed/OMJmLQyT49Y?si=q6FxI0hOpd4cnyUj" title="LiveMatch Pitch Video" />
        </div>
        </SideBySide>
    </ProjectLayout>
  )
}
