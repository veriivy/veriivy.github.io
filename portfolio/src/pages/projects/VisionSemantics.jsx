import ProjectLayout from '../ProjectLayout'
import {
  SectionLabel,
  Abstract,
  TextBlock,
  MediaImage,
  MediaGrid,
  VideoEmbed,
  ExternalLink,
  LinkRow,
} from '../../components/blocks'

export default function VisionSemantics() {
  return (
    <ProjectLayout slug="vision-semantics">
      <LinkRow>
        <ExternalLink href="https://github.com/veriivy/rise-vision-semantics" label="View Code" type="github" />
      </LinkRow>

      <SectionLabel>Poster</SectionLabel>
      <MediaImage src="/RISEPoster.png" alt="Research poster" />

      <SectionLabel>Abstract</SectionLabel>
      <Abstract>
        Audrey Zheng<sup>1, 2</sup>, Xavier Thomas<sup>2</sup>, Deepti Ghadiyaram<sup>2</sup>
        <br />
        Canyon Crest Academy, 5951 Village Center Loop Rd, San Diego, CA 921301, Boston University, 25 Bay State Road, Boston, MA 022152
        <br />
        <br />
        Contrastive language-image pretraining (CLIP) [1] and DINOv2 [2] models are two powerful,
        widely-used vision encoders. CLIP is believed to capture global semantics well and struggles
        with detecting object-level differences [3], while DINOv2 has been generally known to more
        consistently capture object-level semantics. In this work, we challenge this widely-held belief:
        given image pairs with identical global contexts and impactful, object-level differences, we show
        that both CLIP and DINOv2 fail in differentiating between the image pairs in a significant
        number of cases. As a result, CLIP dependent multimodal large language models (MLLMs) such
        as LLaVA [4] struggle detecting crucial object-level changes in such pairs. To address this, we
        explore the performance of Stable Diffusion [5] feature embeddings in differentiating between
        image pairs that are identical on a global level but with meaningful, object-level edits in
        comparison to that of CLIP and DINOv2. We find that, for almost all image pairs where CLIP
        and DINOv2 embeddings incorrectly show a high similarity, similarity between Stable Diffusion
        embeddings are significantly lower. We further evaluate the performance of Stable Diffusion
        through the attention intersection over union (IoU) scores of such pairs and find that there is a
        more significant difference in attention scores of Stable Diffusion within those image pairs than
        the attention values of CLIP and DINOv2. These results suggest Stable Diffusion embeddings as
        a more semantically meaningful alternative for tasks requiring the detection of object-level
        differences within identical global contexts.
        <br />
        <br />
        [1] Radford et al. Learning Transferable Visual Models From Natural Language Supervision.
arXiv preprint arXiv:2103.00020 (2021)
<br />
        [2] Li et al. Scaling Language-Image Pre-training via Masking. arXiv preprint arXiv:2304.07193
(2023)
<br />
        [3] Tang et al. What Do Vision-Language Models Know About Objects? arXiv preprint
arXiv:2401.06209 (2024)
<br />
        [4] Liu et al. Visual Instruction Tuning. arXiv preprint arXiv:2304.08485 (2023)
<br />
        [5] Rombach et al. High‑Resolution Image Synthesis with Latent Diffusion Models. arXiv
preprint arXiv:2112.10752 (2021)
      </Abstract>

      {/* Example: image grid for figures/screenshots
      <SectionLabel>Figures</SectionLabel>
      <MediaGrid
        columns={2}
        images={[
          { src: '/fig1.png', alt: 'Figure 1', caption: 'CLIP feature comparison' },
          { src: '/fig2.png', alt: 'Figure 2', caption: 'DINOv2 attention maps' },
        ]}
      /> */}

      {/* Example: embedded video
      <SectionLabel>Presentation</SectionLabel>
      <VideoEmbed
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Project presentation"
      /> */}

    </ProjectLayout>
  )
}
