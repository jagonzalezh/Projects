export const modules = [
  {
    id: 'readiness',
    title: 'Telehealth Readiness',
    description: 'Assess fit, consent, and case conceptualization for virtual EMDR sessions.',
    scenario: {
      client: 'A new client reports panic symptoms and asks to start EMDR online immediately.',
      steps: [
        {
          prompt: 'How do you begin the first telehealth session?',
          choices: [
            {
              text: 'Start bilateral stimulation right away to build momentum.',
              score: 0,
              feedback: 'Skipping readiness can destabilize treatment and misses telehealth informed consent elements.',
              reaction: 'Client appears overwhelmed and uncertain about what is happening.',
            },
            {
              text: 'Review telehealth consent, treatment goals, and readiness factors before reprocessing.',
              score: 2,
              feedback: 'Excellent. Readiness screening and expectations create safety and improve engagement.',
              reaction: 'Client reports feeling informed and more grounded.',
            },
          ],
        },
        {
          prompt: 'Client discloses limited privacy at home. Your next step?',
          choices: [
            {
              text: 'Proceed anyway and ask client to whisper sensitive content.',
              score: 0,
              feedback: 'This increases risk and can inhibit processing due to fear of being overheard.',
              reaction: 'Client becomes guarded and gives short responses.',
            },
            {
              text: 'Pause trauma processing and co-create alternatives (timing, location, or adjunctive stabilization).',
              score: 2,
              feedback: 'Best practice. Privacy limitations should be addressed before intensive reprocessing work.',
              reaction: 'Client feels respected and collaborates on a safer plan.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'safety',
    title: 'Safety and Environment',
    description: 'Establish emergency plans and optimize physical/emotional safety remotely.',
    scenario: {
      client: 'During processing, client becomes highly dysregulated and starts pacing off-screen.',
      steps: [
        {
          prompt: 'What is your immediate intervention?',
          choices: [
            {
              text: 'Continue protocol and wait for distress to pass.',
              score: 0,
              feedback: 'Waiting can escalate risk when visual monitoring is limited in telehealth.',
              reaction: 'Client distress rises and connection weakens.',
            },
            {
              text: 'Orient client to present, stop reprocessing, and activate pre-agreed grounding and safety plan.',
              score: 2,
              feedback: 'Correct. Stabilization and orientation are priorities when arousal exceeds tolerance.',
              reaction: 'Client slows breathing and re-engages on screen.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'technology',
    title: 'Technology and Tools',
    description: 'Use secure platforms and adapt bilateral stimulation tools for telehealth.',
    scenario: {
      client: 'Audio lags repeatedly while using visual bilateral stimulation.',
      steps: [
        {
          prompt: 'How do you respond to preserve treatment quality?',
          choices: [
            {
              text: 'Push through to avoid interrupting session flow.',
              score: 0,
              feedback: 'Tech friction can reduce attunement and protocol fidelity if unaddressed.',
              reaction: 'Client reports confusion and misses instructions.',
            },
            {
              text: 'Shift to backup bilateral method (self-tapping/audio tones) and verify client comfort.',
              score: 2,
              feedback: 'Strong adaptation. Backup plans maintain continuity and client regulation.',
              reaction: 'Client feels steadier and follows pacing successfully.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'presence',
    title: 'Therapist Presence and Engagement',
    description: 'Maintain attunement, pacing, and therapeutic alliance through video.',
    scenario: {
      client: 'Client looks away frequently and becomes emotionally flat after a difficult memory target.',
      steps: [
        {
          prompt: 'Which response best supports engagement?',
          choices: [
            {
              text: 'Increase speed and ask for shorter answers to keep momentum.',
              score: 0,
              feedback: 'Speeding up may miss dissociation cues and reduce felt safety.',
              reaction: 'Client withdraws further and says they feel disconnected.',
            },
            {
              text: 'Name the shift gently, slow pacing, and check window of tolerance before proceeding.',
              score: 2,
              feedback: 'Excellent telehealth presence: tracking micro-signals and adjusting pacing.',
              reaction: 'Client nods, reconnects emotionally, and resumes processing.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting Challenges',
    description: 'Manage interruptions, disconnections, and clinical ruptures effectively.',
    scenario: {
      client: 'Video disconnects at peak activation and reconnects after 90 seconds.',
      steps: [
        {
          prompt: 'What do you do first after reconnection?',
          choices: [
            {
              text: 'Return immediately to target memory to avoid losing processing state.',
              score: 0,
              feedback: 'Re-entry without stabilization can heighten dysregulation after abrupt interruption.',
              reaction: 'Client appears startled and struggles to orient.',
            },
            {
              text: 'Re-orient, reassess current state, and revisit contingency plan before deciding next step.',
              score: 2,
              feedback: 'Best practice for telehealth ruptures: regulate first, then resume if safe.',
              reaction: 'Client regains orientation and confidence in the process.',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'ethics',
    title: 'Ethics and Privacy',
    description: 'Apply confidentiality, jurisdiction, documentation, and professional boundaries online.',
    scenario: {
      client: 'A client asks to record the session on their phone for personal review.',
      steps: [
        {
          prompt: 'How do you respond ethically?',
          choices: [
            {
              text: 'Allow recording if client promises to keep it private.',
              score: 0,
              feedback: 'Informal recording agreements can create confidentiality and legal risks.',
              reaction: 'Client records without clear informed limits.',
            },
            {
              text: 'Discuss policy, risks, and alternatives; document decision and maintain legal/ethical standards.',
              score: 2,
              feedback: 'Correct. Transparency and documentation protect both client welfare and practice standards.',
              reaction: 'Client understands rationale and agrees to a safer alternative.',
            },
          ],
        },
      ],
    },
  },
]
