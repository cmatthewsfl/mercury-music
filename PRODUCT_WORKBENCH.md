# Mercury Music — Adaptive DJ | Product Workbench

Status: discovery / prototype. Home: this repository. Not a separate app yet.

## Core proposition
Help a listener use music to accompany life, change their participation state when they choose, and discover unexpected music. Sequence matters: listener × moment × musical context, not a permanent thumbs-up/down rating.

## Three doors
1. **Day's Passage**: an optional day-length musical arc; not a rigid schedule.
2. **Change My State**: listener names current state and desired direction; bridge rather than abrupt forced mood matching.
3. **The Undefined**: unforeseen events, emergent playlists, DJ judgment, discovery.

## Preserve distinctions
- Liking a song ≠ wanting it now.
- Skip ≠ dislike; replay ≠ permanent preference.
- Saturation ≠ low affinity.
- Musical timing ≠ clock time; include sequence, lyrics, energy, transitions and silence.
- Observation ≠ inference; avoid automatically promoting every interaction to a rule.
- User chooses desired direction; DJ offers and can be corrected.

## Data model to explore
- Track reference: provider ID, title, artist, musical properties, not copied audio.
- Journey: purpose, stages, optional playlists, provenance.
- Session: user-selected intention, sequence context, what played/skipped/replayed, optional explanation.
- Observation: event with context, without forced interpretation.
- Hypothesis: reversible, confidence-limited inference from observations.
- Consent and controls: opt-in memory, inspection, correction, deletion and private-by-default design.

## Prototype steps
1. Keep current website and playlist library functional.
2. Add journey editing and playlist mapping without duplicate song ownership.
3. Test voluntary, lightweight session feedback (e.g. 'wrong moment', 'heard too often', 'next chapter') rather than thumbs-down.
4. Explore sequencing and transitions with explicit user choice and easy override.
5. Validate value and provider API/streaming terms before pricing or app-store commitments.

## Commercial hypothesis (unproven)
A personal adaptive DJ layer may justify a subscription or licensing model. Costs, streaming provider restrictions, rights, competition, privacy, safety, retention and willingness to pay remain open research questions. Do not claim clinical mood treatment or guaranteed emotional outcomes.

## Relation to other work
Separate product/workbench track; shares the broader architecture's translation-before-evaluation, observation/correction, and learner/user agency principles. Do not silently merge its rules into the AI Tutor seed or other projects.
