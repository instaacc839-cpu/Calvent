import { StudyKit, UserStudyStats } from './types';

// Bio-101 Study Kit
export const BIOLOGY_STUDY_KIT: StudyKit = {
  title: "Cellular Respiration & ATP Synthesis",
  notesText: `CELLULAR RESPIRATION & ENERGY STORAGE (BIO 101)
Cellular respiration is the metabolic process by which cells convert biochemical energy from nutrients (mostly glucose) into adenosine triphosphate (ATP), and then release waste products.
The overall reaction is: C6H12O6 + 6 O2 --> 6 CO2 + 6 H2O + ~36-38 ATP.

Four major stages:
1. GLYCOLYSIS: Occurs in the cytoplasm. It is anaerobic (doesn't require oxygen). One molecule of glucose (6-carbon) is broken down into two molecules of pyruvate (3-carbon). Yields 2 net ATP and 2 NADH. Key enzyme: Phosphofructokinase (PFK), which is allosterically regulated by ATP levels.
2. PYRUVATE OXIDATION: Pyruvate is transported into the mitochondrial matrix. CO2 is removed, and Pyruvate dehydrogenase pairs the remaining 2-carbon acetyl group with Coenzyme A, creating Acetyl-CoA. Yields 1 NADH per pyruvate (2 per glucose).
3. CITRIC ACID CYCLE (KREBS CYCLE): Occurs in the mitochondrial matrix. Acetyl-CoA joins Oxaloacetate (4-C) to form Citrate (6-C). Through a cycle of redox reactions, citrate is oxidized, recovering Oxaloacetate. Each cycle turns twice per glucose. Total yield per glucose: 6 NADH, 2 FADH2, and 2 ATP (via GTP intermediate). Releases CO2.
4. ELECTRON TRANSPORT CHAIN & OXIDATIVE PHOSPHORYLATION: Occurs in the inner mitochondrial membrane (cristae). High-energy electrons from NADH and FADH2 feed into Complex I and II, and travel through Coenzyme Q, Complex III, Cytochrome C, and Complex IV to the final electron acceptor: Oxygen, forming water.
The transfer of electrons causes Complex I, III, and IV to pump protons (H+) from the matrix to the intermembrane space, building a steep electrochemical gradient (Proton-Motive Force).

ATP SYNTHASE ENGINE:
Protons diffuse back into the matrix down their gradient only through ATP Synthase (a rotary molecular motor). This passive movement drives the rotor subunit to spin, forcing ADP and inorganic phosphate together (ADP + Pi -> ATP). This process, chemiosmosis, produces roughly 32-34 ATP. Carbon Monoxide and Cyanide inhibit Complex IV, completely stopping ATP synthesis.`,
  summary: {
    title: "Cellular Respiration and ATP Synthesis",
    overview: "A comprehensive guide to how eukaryotic cells harvest biochemical energy from glucose under aerobic conditions. It breaks down the system into cytoplasmic glycolysis, mitochondrial oxidation, the citric acid cycle, and the electrochemical mechanical rotary synthesis of ATP via the electron transport chain.",
    keyConcepts: [
      { term: "Glycolysis", definition: "An anaerobic cytoplasmic pathway that splits glucose into two 3-carbon pyruvates, harvesting 2 net ATP and 2 NADH." },
      { term: "Phosphofructokinase (PFK)", definition: "The key regulatory enzyme of glycolysis. High ATP acts as an allosteric inhibitor, shutting down respiration when energy is abundant." },
      { term: "Citric Acid Cycle", definition: "Matrix-based cycle oxidizing Acetyl-CoA, producing 6 NADH, 2 FADH2, and 2 ATP per glucose molecule, while releasing CO2." },
      { term: "Proton-Motive Force", definition: "A high concentration of hydrogen ions (H+) built up in the intermembrane space of mitochondria, acting as stored potential energy." },
      { term: "ATP Synthase", definition: "A physical rotary motor protein. Protons diffusing down their chemical gradient spin the rotor unit, driving the phosphorylation of ADP to ATP." },
      { term: "Cyanide Toxicity", definition: "Blocks Complex IV (Cytochrome c Oxidase) in the electron transport chain, stopping proton pumping and halting ATP synthesis, causing critical cellular hypoxia." }
    ],
    fullMarkdown: `### 1. Glycolysis (The Anaerobic Stage)
- **Catalyst & Control**: PFK (Phosphofructokinase) regulates output. If cellular ATP count is high, ATP binds PFK's allosteric site to lower activity.
- **Yield**: 2 Pyruvates, 2 Net ATP, 2 NADH molecules.

### 2. The Mitochondrial Maturation
- **Pyruvate Oxidation**: Pyruvate enters the mitochondrion via transport proteins. It loses a carbon as CO2 and connects to Coenzyme A to yield **Acetyl-CoA** and 1 NADH.
- **Krebs Cycle (Mitochondrial Matrix)**: Acetyl-CoA couples with **Oxaloacetate** to form Citrate. The following biochemical cycle releases 2 CO2, forms 3 NADH, 1 FADH2, and 1 ATP per turn.

### 3. Oxidative Phosphorylation & ATP Synthase
- **Electron Cascades**: Complexes (I, III, IV) use electron movement to pump H+ ions into the intermembrane gap.
- **The Engine**: ATP Synthase exploits the Proton-Motive Force. Protons re-entering the matrix spin the **F0** rotor, driving **F1** enzymatic synthesis of ADP + Pi into **ATP**.`
  },
  quiz: [
    {
      id: "bio-q1",
      question: "Which of the following describes the key regulatory role of Phosphofructokinase (PFK) in glycolysis?",
      options: [
        "It converts pyruvate into lactate when oxygen is absent.",
        "It is allosterically inhibited by high levels of ATP, shutting down glycolysis when energy is plentiful.",
        "It catalyzes the final step of anaerobic glycolysis to form pyruvate.",
        "It is activated by high levels of Citrate, signaling that the Citric Acid Cycle is running fast."
      ],
      correctAnswerIndex: 1,
      explanation: "Phosphofructokinase (PFK) is the key regulatory checkpoint of glycolysis. It serves to check respiratory levels: when ATP levels are already high, ATP binds allosterically to PFK, inhibiting it and halting unnecessary glucose breakdown.",
      concept: "Phosphofructokinase Regulation"
    },
    {
      id: "bio-q2",
      question: "Where in the eukaryotic cell do Glycolysis and the Citric Acid Cycle take place, respectively?",
      options: [
        "Mitochondrial Matrix and Inner Membrane",
        "Cytoplasm and Mitochondrial Intermembrane Space",
        "Cytoplasm and Mitochondrial Matrix",
        "Inner Membrane and Outer Membrane"
      ],
      correctAnswerIndex: 2,
      explanation: "Glycolysis takes place in the soluble cytoplasm of the cell, while the Citric Acid Cycle occurs within the inside of the mitochondria, known as the Mitochondrial Matrix.",
      concept: "Cellular Compartmentalization"
    },
    {
      id: "bio-q3",
      question: "How does the poison Cyanide disrupt energy production in eukaryotic cells?",
      options: [
        "It directly binds and deactivates cytoplasmic ATP Synthase.",
        "It breaks down glucose molecules randomly in the cytoplasm.",
        "It blocks Complex IV of the Electron Transport Chain, preventing oxygen from accepting electrons, halting proton-pumping.",
        "It binds Oxaloacetate, preventing Acetyl-CoA from initiating the Citric Acid Cycle."
      ],
      correctAnswerIndex: 2,
      explanation: "Cyanide binds and halts Complex IV (Cytochrome c oxidase) of the ETC. This prevents oxygen from acting as the final electron acceptor, halting electron flow, collapsing the H+ gradient, and ending ATP production.",
      concept: "Respiration Inhibitors"
    },
    {
      id: "bio-q4",
      question: "What physical mechanism allows ATP Synthase to generate ATP from ADP and inorganic phosphate?",
      options: [
        "It uses chemical heat from glycolysis.",
        "It utilizes active transport of sodium ions to bind ADP.",
        "It acts as a physical rotary molecular motor, spun by passive proton flow down an electrochemical gradient.",
        "It directly fuses electrons to the target molecules using UV radiation."
      ],
      correctAnswerIndex: 2,
      explanation: "ATP Synthase is a molecular turbine. As protons move passively along their steep chemical gradient from the intermembrane space to the matrix, they turn the rotor, bringing ADP and Pi into close physical alignment to force synthesis.",
      concept: "ATP Synthase Mechanism"
    }
  ],
  flashcards: [
    { id: "bio-f1", front: "Glycolysis location", back: "The soluble cytoplasm of the cell.", subject: "Biology", memorized: false },
    { id: "bio-f2", front: "Krebs Cycle location", back: "The inside mitochondrial matrix.", subject: "Biology", memorized: false },
    { id: "bio-f3", front: "Proton-Motive Force (PMF)", back: "An electrochemical gradient of H+ ions across the inner mitochondrial membrane, used to power ATP Synthase.", subject: "Biology", memorized: false },
    { id: "bio-f4", front: "Oxygen's role in respiration", back: "The final electron acceptor in the Electron Transport Chain, binding protons to form water.", subject: "Biology", memorized: false },
    { id: "bio-f5", front: "Net ATP from Glycolysis", back: "2 ATP molecules per one glucose molecule.", subject: "Biology", memorized: false },
    { id: "bio-f6", front: "Phosphofructokinase Checkpoint", back: "Enzyme regulated allosterically by ATP; high ATP shuts down glycolysis pathway.", subject: "Biology", memorized: false }
  ],
  studyPlan: [
    { day: "Day 1", topic: "Glycolysis & Regulatory Checkpoints", method: "Active Recall & PFK Regulation Review", durationMinutes: 30 },
    { day: "Day 2", topic: "Pyruvate Oxidation & Citric Acid Cycle Matrix Flow", method: "Feynman Technique explaining NADH/FADH2 outputs", durationMinutes: 45 },
    { day: "Day 3", topic: "The Electron Transport Chain Complexes", method: "Draw and trace proton pumping to intermembrane space", durationMinutes: 40 },
    { day: "Day 4", topic: "The ATP Synthase Rotary Motor & Poisons", method: "Practice exam scenario evaluation & blockage exercises", durationMinutes: 35 },
    { day: "Day 5", topic: "Comprehensive Respiration Self-Testing", method: "Mock Exam answering with no textbook lookups", durationMinutes: 50 }
  ],
  practiceExam: [
    {
      id: "bio-ex1",
      question: "Evaluate the consequences on cellular ATP production if a drug permeabilized the inner mitochondrial membrane to protons, making it instantly leaky. Explain the effect on electron flow versus phosphorylation.",
      type: "scenario",
      hint: "Recall Dinitrophenol (DNP) or uncoupling proteins",
      rubric: "Excellent answers will demonstrate that while oxygen consumption and electron transport continue, the proton gradient collapses, which uncouples oxidation from phosphorylation, causing ATP synthesis to crash while releasing energy as raw heat."
    },
    {
      id: "bio-ex2",
      question: "Explain why anaerobic glycolysis yields only 2 ATP per glucose, whereas aerobic respiration yields over 30 ATP. Trace the energy that is 'lost' in anaerobic conditions.",
      type: "conceptual",
      hint: "Think about remaining energy locked in fermentation waste products",
      rubric: "Students must note that in anaerobic state, pyruvate is converted to lactate, leaving the majority of raw chemical bonds intact; aerobic state uses oxygen to completely oxidize pyruvate to CO2, moving high-energy electrons through the matrix and cristae gradients."
    }
  ]
};

// CS-402 Study Kit
export const CS_STUDY_KIT: StudyKit = {
  title: "Modern Distributed Systems & API Design",
  notesText: `DISTRIBUTED SYSTEMS PROTOCOLS & MODERN APIS (CS 402)
Distributed systems consist of multiple autonomous computers that communicate through a computer network. The key challenge is coordination without a shared clock or shared memory.

1. STATELESSNESS vs STATEFULNESS:
In modern REST API design, state is either kept entirely on the client or saved in external disk-backed databases. The API server itself should be stateless. This means every request must contain all credentials and state details necessary to fulfill it.
Benefits: Scalable because any server can handle any request; easy configuration.

2. IDEMPOTENCY:
An operation is idempotent if it can be performed multiple times with the same output results as the first time.
- GET, PUT, DELETE, HEAD, OPTIONS are idempotent in standard REST specifications. Calling DELETE /users/42 five times results in user 42 being deleted, with successive calls returning 404 but the system state remaining unchanged.
- POST is NOT idempotent. Sending duplicate POST requests creates multiple records.
API engineering resolves this by requiring an Idempotency-Key in headers, which servers cache in Redis to intercept duplicates.

3. LOAD BALANCERS:
L4 (Transport) vs L7 (Application) load balancing. L4 operates at the TCP layer, routing connections basic on IP and port. L7 parses HTTP headers, cookies, and URLs to implement path-based routing (e.g., routing /api/payments to the payment cluster, /api/auth to the auth cluster).

4. SYSTEM SCALING STRATEGIES:
- VERTICAL SCALING: Adding CPU, RAM, or storage to a single server. Limitation: Hardware ceiling, single point of failure (SPOF).
- HORIZONTAL SCALING: Adding more machines to a cluster pool. Requires a stateless code-layer, a load balancer, and a distributed session solution.

5. REST API BEST PRACTICES:
- Proper HTTP Status Codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden - authenticated but lacks permission), 404 (Not Found), 429 (Too Many Requests), 500 (Internal Server Error), 503 (Service Unavailable - overloaded/under maintenance).
- Rate Limiting: Configured via token-bucket algorithms using Redis to prevent DDoS and API depletion.`,
  summary: {
    title: "Distributed Systems & REST Architecture",
    overview: "A highly clear engineering review of enterprise distributed system patterns and optimal REST API design. It analyzes stateless scale strategies, system idempotency controls, L4 vs L7 load balancing, and rate-limiting patterns.",
    keyConcepts: [
      { term: "Statelessness", definition: "A design parameter where the server stores no session data. Each request contains all context, tokens, and data required to run." },
      { term: "Idempotency", definition: "A characteristic of an API endpoint where making multiple identical requests has the same effect as making a single request." },
      { term: "L7 Load Balancing", definition: "Application-level routing that inspects HTTP protocol layers, including headers, URLs, and cookies to route to microservices." },
      { term: "Horizontal Scaling", definition: "Scaling out by adding more commodity servers to a farm, requiring stateless node behaviors and smart global distribution load balancers." },
      { term: "Token Bucket Algorithm", definition: "A rate-limiting algorithm that maintains a pool of token credits, refilling at a constant rate, utilized to throttle sudden traffic spikes." }
    ],
    fullMarkdown: `### 1. Architectural Scaling
Stateless REST servers allow horizontal scaling:
- **No sticky sessions**: Any edge server in the cloud container farm can handle a request safely.
- **Microservices Routing**: L7 Balancers redirect path-based actions securely.

### 2. Standardizing Idempotency
| HTTP Verb | Idempotent | Description |
|---|---|---|
| **GET** | Yes | Read-only; doesn't alter database states. |
| **PUT** | Yes | Replaces the entire resource state entirely. |
| **DELETE** | Yes | Removes resource; subsequent calls change nothing. |
| **POST** | No | Creates new records; can flood the DB with duplicates. |`
  },
  quiz: [
    {
      id: "cs-q1",
      question: "Which of the following REST HTTP endpoints is strictly NOT idempotent by standard specification?",
      options: [
        "PUT /users/update",
        "DELETE /items/883",
        "POST /orders/submit",
        "GET /dashboard/metrics"
      ],
      correctAnswerIndex: 2,
      explanation: "POST is not idempotent. Multiple POST requests will attempt to create multiple distinct records in the database, whereas PUT, GET, and DELETE are designed to yield consistent system states if run repeatedly.",
      concept: "API Idempotency Codes"
    },
    {
      id: "cs-q2",
      question: "What is the key functional difference between a Layer 4 (L4) and Layer 7 (L7) load balancer?",
      options: [
        "L4 runs twice as slow as L7.",
        "L4 load balances database records, while L7 balance web assets.",
        "L4 routes traffic based on network IP and port info, whereas L7 analyzes application layers like HTTP headers, cookies, and URLs.",
        "L4 uses mechanical hardware, whereas L7 is always implemented in javascript nodes."
      ],
      correctAnswerIndex: 2,
      explanation: "L4 operates at the TCP layer, looking solely at packet IPs and ports. L7 is application-aware, parsing HTTP headers, cookies, and specific URL paths to conduct sophisticated smart path routing.",
      concept: "Load Balancing Layers"
    },
    {
      id: "cs-q3",
      question: "What is the difference between a 401 Unauthorized and a 403 Forbidden HTTP status code?",
      options: [
        "401 means the resource doesn't exist, while 403 means the server is down.",
        "401 indicates missing or invalid authentication credentials, whereas 403 indicates the user is logged in but lacks authorization permissions.",
        "401 is for mobile clients, and 403 is for desktop web clients.",
        "401 represents database locked states, while 403 is for safe cached responses."
      ],
      correctAnswerIndex: 1,
      explanation: "401 means 'not authenticated' (the server does not know who you are and wants a token). 403 means 'authenticated, but unauthorized' (the server knows who you are, but you do not have permission to access that resource).",
      concept: "HTTP Status Codes"
    }
  ],
  flashcards: [
    { id: "cs-f1", front: "Idempotency", back: "An operation that produces the same system state regardless of how many times it is called consecutively.", subject: "Computer Science", memorized: false },
    { id: "cs-f2", front: "Statelessness benefit", back: "Makes horizontal scaling trivial since any backend node can process any request without memory synchronization hurdles.", subject: "Computer Science", memorized: false },
    { id: "cs-f3", front: "HTTP 429", back: "Too Many Requests (indicates the client has hit a rate limit).", subject: "Computer Science", memorized: false },
    { id: "cs-f4", front: "Idempotency-Key", back: "A unique request header value cached by servers in fast stores like Redis to make raw POST requests idempotent.", subject: "Computer Science", memorized: false },
    { id: "cs-f5", front: "L7 Load Balancing parameter", back: "Can look at path indicators (e.g. /api/users vs /api/products) to distribute routing.", subject: "Computer Science", memorized: false }
  ],
  studyPlan: [
    { day: "Day 1", topic: "Stateless REST Principles & API Contracts", method: "Mind mapping request structures and boundary files", durationMinutes: 25 },
    { day: "Day 2", topic: "HTTP Verb Specification & Idempotency", method: "Review post vs put idempotent designs with Redis keys", durationMinutes: 30 },
    { day: "Day 3", topic: "Application vs Network Load Balancers", method: "Configure path routing scenarios for typical payments/auth services", durationMinutes: 40 }
  ],
  practiceExam: [
    {
      id: "cs-ex1",
      question: "A high-frequency ticket sales API starts crashing during major concert drops because customers click 'purchase' multiple times when page responsiveness lags. Formulate a technical backend fix to guarantee duplicate purchases are not triggered.",
      type: "scenario",
      hint: "Use Idempotency-Key headers coupled with Redis locks",
      rubric: "Solutions must propose that the client client side creates a secure UUID for the ticket attempt. When the server gets the request, it checks for a locked Redis key containing the UUID. If locked or processed, it replies with the cached response, preventing duplicated DB entries."
    }
  ]
};

// History Study Kit
export const HISTORY_STUDY_KIT: StudyKit = {
  title: "The Roman Republic: Rise and Collapse",
  notesText: `THE ROMAN REPUBLIC: SYSTEM & STRUCTURAL FAULTS (HIST 240)
The Roman Republic was the pre-imperial period of ancient Roman civilization, beginning with the overthrow of the Roman Kingdom (traditionally dated to 509 BC) and ending in 27 BC with the establishment of the Roman Empire.

1. CONSTITUTIONAL STRUCTURE (Checks and Balances):
- THE SENATE: Advisory council of wealthy patrician elites. Controlled treasury and foreign policy, though did not pass laws directly.
- CONSULS: Dual executives appointed for 1 year. Commanded armies, ruled the city. Each could veto the other.
- TRIBUNES OF THE PLEBS: plebeian representatives with the power to veto any magistrate's action, designed to protect the lower classes. Their bodies were sacrosanct (physical safety protected by religious oath).

2. SOCIAL STRUGGLE: PATRICIANS vs PLEBEIANS:
The Conflict of the Orders (494-287 BC). Plebeians marched out of Rome ('secessions') refusing to fight unless given civil equality, giving rise to the Twelve Tables (first written Roman laws).

3. THE LATE REPUBLIC CRISIS & LAND INBALANCE:
After victories in Carthage (Punic Wars), Roman elites bought vast swathes of land, building massive estates worked by foreign slaves. Free Roman peasant farmers could not compete, went bankrupt, lost land, and moved to crowded slums in Rome, creating high social tinder.

4. THE GRACCHI & MILITARY REFORMS (MARIUS):
- Tiberius and Gaius Gracchus (Tribunes) tried to distribute state lands to poor citizens. Both were murdered by conservative senators, introducing political violence to Rome.
- Gaius Marius reformed the military: removed the land ownership requirement to join. Landless citizens rushed to enlist. Soldiers became loyal to their generals (who promised land upon retirement) rather than to the Roman State.

5. THE CROSSING OF THE RUBICON:
Julius Caesar, competing for political survival, returned from Gaul. Facing prosecution if he disbanded his loyal army, Caesar marched his legion across the Rubicon river in 49 BC (violating sacred law), instigating a massive civil war. He defeated Pompey, declared himself 'Dictator in Perpetuity', and was assassinated in 44 BC by senators, clearing the path for Octavian to become Caesar Augustus, the first Roman Emperor.`,
  summary: {
    title: "The Roman Republic's Constitutional Crisis",
    overview: "An analytical study review of Rome's political mechanics from 509 BC to 27 BC. It studies the checks and balances of consuls, the sacred tribunician vetoes, plebeian class secessions, the land-reforms of the Gracchi brothers, and the rise of personal commander armies that ultimately dissolved Rome's republican model.",
    keyConcepts: [
      { term: "Consuls", definition: "Co-leaders of state who commanded all military campaigns. Each served a 1-year window and held direct veto power over their partner." },
      { term: "Tribunes of the Plebs", definition: "Sacrosanct plebeian figures designed as champions of the poor. Possessed unilateral power to veto and freeze senate proceedings." },
      { term: "Marian Reforms", definition: "Military standard adjustments that abolished property requirements, shifting infantry loyalty to individual generals who promised retirement land." },
      { term: "The Rubicon", definition: "The northern border river of Caesar's province. Crossing this with active troops was a declaration of war on Rome's republic." },
      { term: "Octavian (Augustus)", definition: "Caesar's adopted heir who dismantled the failing republic, establishing the Pax Romana as the first de-facto Roman Emperor." }
    ],
    fullMarkdown: `### 1. Constitutional Elements
- **Senatorial Prerogative**: Wealthy families (Patricians) ruled via custom advisory consensus.
- **Tribunes**: Elected by the lower class Assembly (Plebeians), armed with extreme **VETO** power.

### 2. Economic Disintegration
- **Latifundia**: Wealthy elites accumulated agricultural states worked by slaves.
- **Gracchi Reaction**: Brothers Tiberius and Gaius targeted land partition to re-establish citizen-soldier counts. They were killed, creating major precedents for political violence.`
  },
  quiz: [
    {
      id: "hist-q1",
      question: "What major systemic military change by consul Gauis Marius accidentally laid the foundation for the fall of the Republic?",
      options: [
        "He banned Plebeians from serving in the senate assemblies.",
        "He dissolved the Praetorian Guard, leaving Rome unprotected.",
        "He abolished property requirements for enlistment, creating a professional army loyal to individual generals rather than the Roman state.",
        "He began hiring Carthaginian mercenaries who betrayed Roman borders."
      ],
      correctAnswerIndex: 2,
      explanation: "The Marian Reforms abolished property requirements to serve in the Roman legion. Because recruited soldiers had no land, they relied on their generals to secure land and retirement funds for them, making armies loyal to generals like Caesar, Marius, or Sulla, rather than to the republic itself.",
      concept: "Systemic Military Reform"
    },
    {
      id: "hist-q2",
      question: "Why was Julius Caesar's act of crossing the Rubicon in 49 BC legally and systemically catastrophic?",
      options: [
        "The Rubicon was the major source of fresh drinking water, and his army accidentally poisoned it.",
        "Crossing the river with armed legions breached the republic's sacred provincial boundary, signifying an illegal invasion of the Roman homeland.",
        "The Roman system banned all crossing of rivers during winter months under penalty of heavy fines.",
        "It instantly invalidated Roman trade agreements with surrounding northern barbarian kingdoms."
      ],
      correctAnswerIndex: 1,
      explanation: "Governing generals were prohibited from bringing active military forces inside the homeland border. Crossing the Rubicon river with his army was the point of no return: an automatic treasonous act that officially launched a civil war.",
      concept: "The Decisive Crisis of Caesar"
    }
  ],
  flashcards: [
    { id: "hist-f1", front: "Consul term limits", back: "One year, served alongside a co-consul with equal powers and veto rights.", subject: "History", memorized: false },
    { id: "hist-f2", front: "Sacrosanctity", back: "An official religious protection of Plebeian Tribunes; anyone who harmed them was cursed and could be executed without trial.", subject: "History", memorized: false },
    { id: "hist-f3", front: "The twelve tables", back: "Rome's first written legal code, established during the Conflict of the Orders in 450 BC as a result of Plebeian demands.", subject: "History", memorized: false },
    { id: "hist-f4", front: "Latifundia", back: "Massive farming estates owned by Roman elites, worked by foreign slaves captured in wars, replacing small peasant farms.", subject: "History", memorized: false },
    { id: "hist-f5", front: "First Roman Emperor", back: "Octavian, who took the title 'Augustus' in 27 BC, marking the formal death of the republic.", subject: "History", memorized: false }
  ],
  studyPlan: [
    { day: "Day 1", topic: "The Constitutional Framework & Veto Balance", method: "Draw out the senate, consuls, and tribunates relationship dynamic", durationMinutes: 20 },
    { day: "Day 2", topic: "The Conflict of the Orders & Secession Strikes", method: "Read and analyze the foundation of the Twelve Tables", durationMinutes: 30 },
    { day: "Day 3", topic: "The Gracchi Crises & Agrarian Unrest", method: "Feynman description of political escalation into murder", durationMinutes: 35 }
  ],
  practiceExam: [
    {
      id: "hist-ex1",
      question: "Explain how Rome's agricultural success during the Punic Wars backfired systemically, sparking land consolidation and social conflict in the Late Republic.",
      type: "conceptual",
      hint: "Explain the Latifundia system versus peasant citizen farmers",
      rubric: "Answers must outline that cheap foreign slave-labor from cartages, coupled with elite land purchases, left small citizen soldiers unable to compete. Small Roman farmers went bankrupt, flocking to urban centers, disrupting the soldier citizen base."
    }
  ]
};

// Map of standard demo keys
export const DEMO_STUDY_KITS: { [key: string]: StudyKit } = {
  "Biology": BIOLOGY_STUDY_KIT,
  "Computer Science": CS_STUDY_KIT,
  "History": HISTORY_STUDY_KIT
};

// Pre-populated default user states
export const INITIAL_USER_STATS: UserStudyStats = {
  streakDays: 4,
  lastStudyDate: "2026-06-21",
  completedQuizzesCount: 12,
  completedFlashcardsCount: 48,
  overallScorePercent: 88,
  subjectProgress: [
    { name: "Biology", completedHours: 12, totalHours: 16, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { name: "Computer Science", completedHours: 8, totalHours: 12, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
    { name: "History", completedHours: 4, totalHours: 10, color: "text-amber-600 bg-amber-50 border-amber-100" }
  ],
  weakConcepts: [
    { concept: "Complex IV Respiration Pathway", timesMissed: 3, subject: "Biology", recommendation: "Review Cyanide blockages in Complex IV of ETC. Test with scenario simulations." },
    { concept: "L7 Load Balancing Path Parsing", timesMissed: 2, subject: "Computer Science", recommendation: "Read up on URL path rewrite tables. Distinguish between Host header & HTTP path parameters." },
    { concept: "The Gracchi brothers Land reforms", timesMissed: 2, subject: "History", recommendation: "Revisit agrarian reform bills of Tiberius Gracchus. Contrast with Marius reforms." }
  ]
};
