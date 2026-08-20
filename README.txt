# Arabic Pathways — International v0.2.2 Individual Sound Tiles

This build keeps the v0.1.1 academic prototype and adds the first AI voice architecture.

## Academic decisions preserved
- Target learner may know zero Arabic.
- Course language: Modern Standard Arabic (MSA / الفصحى).
- No dialect/slang teaching.
- Regional Context changes examples, cities, currencies and situations; it does not change the core language into dialect.
- Student panel/interface languages: English and Arabic only.
- Learning aid: English ON/OFF only.
- Transliteration is temporary scaffolding, not the final reading method.
- No Qur'anic passages or deep classical heritage in the International pathway.

## New in v0.2.0
- Every lesson-audio control now has Normal and Slow playback.
- When the Apps Script gateway is connected, lesson audio is generated through Gemini TTS.
- If the gateway is not connected or TTS fails, the app falls back to the device's Arabic speech voice.
- A Speaking Lab is added to every lesson's Use step.
- Student can record, replay and later send the recording for AI pronunciation feedback.
- AI feedback is designed around intelligibility, target text, pacing and clearly audible sound problems; it does not claim laboratory phoneme scoring.
- No API key is stored in the browser.

## Local test mode
The app can be tested locally before GitHub or Apps Script deployment. Leave gatewayUrl empty in config.js. Normal/slow audio will use the device Arabic voice. Microphone recording works when served from localhost; browsers generally block microphone access on plain file:// pages.

## Live AI mode (later)
After the matching Pathways Gateway v5.1 update is deployed, put the existing Apps Script /exec URL into config.js. Do not put the Gemini key in config.js.

## Content status
- A0 Unit 1: 5 complete lessons.
- 30 objective practice questions.
- Full A0-to-C2 roadmap visible; later units remain intentionally marked Planned.


v0.2.1 local pronunciation patch:
- Letter drills are spoken as separate letter names instead of being blended together.
- Vowelled syllable drills are played one item at a time with a teaching pause.
- The local browser voice remains a temporary fallback; Gemini TTS is intended for natural production audio.

v0.2.2 individual-letter audio model:
- A0 letter-family lessons now show one large audio tile per letter instead of one audio control for a whole letter string.
- Each isolated letter tile plays only that letter name (for example ب -> باء).
- Vowelled syllables such as بَ / بِ / بُ also receive separate audio tiles.
- Normal/Slow controls remain for real words, phrases and sentences where speed comparison is useful.
- Single-letter examples use one compact listen button; slow mode is intentionally removed for isolated letters.
- This removes the multi-letter string/blending problem at the UI level. Browser voice quality is still a temporary local limitation until Gemini TTS is connected.
