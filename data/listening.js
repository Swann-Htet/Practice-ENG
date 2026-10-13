/* Listening & Speaking practice. Scripts are read aloud with the browser's speech synthesis (no audio files).
   "src" says where the script came from. Where the PDF only printed questions, the script was written for practice. */
window.LISTENING = [
{
  id: 'c1', kind: 'Conversation', title: 'Conversation 1: the bike shop',
  src: 'Guide p.3 (example script + questions 1-2)', scriptNote: 'Script from the sheet.',
  lines: [
    {sp:'Man', t:'Can you remind me, what\'s the make of the bike?'},
    {sp:'Woman', t:'It\'s a City Zip. It\'s blue.'},
    {sp:'Man', t:'Oh yes. We had to order some parts, but they still haven\'t arrived yet, I\'m afraid.'},
    {sp:'Woman', t:'Do you know when the bike will be ready to pick up?'},
    {sp:'Man', t:'Sorry, I don\'t know. But I\'ll call our suppliers and find out if they\'ve sent out the spare parts yet. Once the parts are here, we can fix the bike in two or three days.'},
    {sp:'Woman', t:'Okay, I\'ll give you a call at the end of the week, then.'},
    {sp:'Man', t:'Sure.'}
  ],
  questions: [
    { q: 'Where is the woman calling?', opts: ['a garage', 'a factory', 'an office', 'a doctor\'s surgery'], a: 0, why: 'The man repairs a bike and orders spare parts: a garage (sample question of the sheet).' },
    { q: 'What information does that man ask for?', opts: ['the woman\'s name', 'the registration number of the bike', 'the make of the bike', 'the woman\'s phone number'], a: 2, why: 'He begins: "what\'s the make of the bike?"' },
    { q: 'What is the man going to do?', opts: ['telephone the suppliers', 'call the woman back', 'order a new part', 'pick up the motorbike'], a: 0, why: '"I\'ll call our suppliers and find out ..." The woman is the one who will call him at the end of the week.' }
  ]
},
{
  id: 'c2', kind: 'Conversation', title: 'Conversation 3: the painting',
  src: 'Guide p.3 question 3 (script not printed in the PDF)', scriptNote: 'The PDF printed only the answer choices, so this short script was written to match them.',
  lines: [
    {sp:'Woman', t:'What do you think of this painting? I\'m not sure it is really my style.'},
    {sp:'Man', t:'To be honest, I don\'t like it either. The colours are too dark for me.'},
    {sp:'Woman', t:'Shall we look at the next one, then?'},
    {sp:'Man', t:'Good idea.'}
  ],
  questions: [
    { q: 'What does the man say?', opts: ['He does not like the painting either.', 'He does not know how to paint.', 'He does not have any paintings.', 'He does not know what to do.'], a: 0, why: '"I don\'t like it either" = he also dislikes it, like the woman.' }
  ]
},
{
  id: 't1', kind: 'Talk', title: 'Talk 1: advice about record-keeping',
  src: 'Guide p.4 (example script + questions 4-5)', scriptNote: 'Script from the sheet.',
  lines: [
    {sp:'Speaker', t:'Today, I\'m going to give you some advice about record-keeping. Keeping accurate records is very important, because if a patient is unhappy about his treatment, he may want to make a complaint to the surgeon. These records will help us to make a case. Always write your name, the date and the time on all the records. Don\'t use pencils, or colored pens. Use black ink. If you make a mistake, just cross it out with a single line. Don\'t use correction fluid. Don\'t try to file the records away yourself, or they may get lost. Put them in this box here. The administration manager will make sure they are filed away correctly.'}
  ],
  questions: [
    { q: 'What should someone do if they make a mistake on the records?', opts: ['use correction fluid', 'correct the mistake using pencil', 'draw one line through the mistake', 'use a colored pen to highlight the mistake'], a: 2, why: '"just cross it out with a single line" (sample question of the sheet).' },
    { q: 'Where does the woman work?', opts: ['in a shop', 'in a doctor\'s surgery', 'in a train station', 'in a factory'], a: 1, why: 'Patients, treatment, complaint to the surgeon: a doctor\'s surgery.' },
    { q: 'What does the woman tell her colleagues to do with the records?', opts: ['file them away', 'give them to the administration manager', 'put them in a box', 'give them to the patient'], a: 2, why: '"Don\'t try to file the records away yourself ... Put them in this box here." The manager files them later.' }
  ]
},
{
  id: 't2', kind: 'Talk (note completion)', title: 'Talk 2: blue-footed boobies',
  src: 'Guide p.4 (nine blanks printed; script not printed)', scriptNote: 'The PDF printed only the nine blanks, so this talk was written for practice so that every blank has an answer.',
  lines: [
    {sp:'Speaker', t:'Blue-footed boobies are seabirds that live along the Pacific coasts of Central and South America and on the Galapagos Islands. They are famous for their bright blue feet. During the mating ritual, the male struts around and lifts his feet to show them off to the female. The bluer his feet are, the more attractive he is considered, because bright blue feet show that he is healthy.'},
    {sp:'Speaker', t:'The name comes from the Spanish word bobo, which means clown. On land, blue-footed boobies move in a clumsy manner, waddling from side to side. In the sea, however, they are superb hunters. They fish in groups, plunging from the air into the water to catch small fish, for example sardines. Their bodies are streamlined, which is advantageous when diving.'},
    {sp:'Speaker', t:'Adult boobies warm their eggs and chicks with their feet. They usually have a maximum of three young.'}
  ],
  fill: [
    { q: 'Strutting and showing off feet is part of the mating ____ .', a: ['ritual'] },
    { q: 'When a male booby has very blue feet, he is considered ____ .', a: ['attractive', 'more attractive'] },
    { q: 'Their name comes from the Spanish word for ____ .', a: ['clown'] },
    { q: 'On land, blue-footed boobies move in a ____ manner.', a: ['clumsy'] },
    { q: 'Blue-footed boobies fish in ____ .', a: ['groups'] },
    { q: 'They eat small fish, for example ____ .', a: ['sardines', 'sardine'] },
    { q: 'Their bodies are ____ which is advantageous when diving.', a: ['streamlined'] },
    { q: 'Adult boobies warm their chicks with their ____ .', a: ['feet'] },
    { q: 'They usually have a maximum of ____ young.', a: ['three', '3'] }
  ]
},
{
  id: 's1', kind: 'Speaking', title: 'Speaking: complete the dialogue (sample + items 6-9)',
  src: 'Guide p.5', scriptNote: 'Dialogues are from the sheet. The blank is spoken as a pause.',
  dialogues: [
    { id: 's0', title: 'Sample: telephone',
      lines: [{sp:'A',t:'Hello. May I talk to Lee?'},{sp:'B',t:'Yes, this is Lee speaking.'},{sp:'A',t:'Hey, Lee. How are you doing?'},{sp:'B',t:'(blank). What\'s up?'}],
      q: 'B: ____ . What\'s up?', opts: ['I\'ll put you through.', 'I\'m talking slowly.', 'I\'m good.', 'I\'m on the phone.'], a: 2, why: 'The reply to "How are you doing?" is a short answer about yourself: "I\'m good."' },
    { id: 's6', title: 'Item 6: asking for help',
      lines: [{sp:'Deborah',t:'I\'m in an awful mess here. (blank)'},{sp:'Alex',t:'Certainly. What needs to be done?'}],
      q: 'Deborah: I\'m in an awful mess here. ____', opts: ['What would you mind helping me out here?', 'Can you help moving this stuff out there first?', 'Could you give me a hand?', 'I guess I need some help.'], a: 2, why: '"Could you give me a hand?" is a polite request, and "Certainly" is the natural answer. Option 1 mixes "would" and "mind"; option 2 is not a correct pattern.' },
    { id: 's7', title: 'Item 7: borrowing a car',
      lines: [{sp:'Niwat',t:'Would you mind lending me a car?'},{sp:'Sak',t:'(blank)'}],
      q: 'Sak: ____', opts: ['Yes, I would be pleased to.', 'Yes, for tomorrow.', 'No, not at all.', 'No, I have to use it.'], a: 2, why: 'After "Would you mind ...?" the polite agreement is "No, not at all" (I do not mind).' },
    { id: 's8', title: 'Item 8: a colleague\'s problem',
      lines: [{sp:'Andrew',t:'Mason looks really annoyed. (blank)?'},{sp:'Tom',t:'I\'m not sure. Maybe his girlfriend is late again.'},{sp:'Andrew',t:'Yes, that could be the problem. She\'s late a lot.'},{sp:'Tom',t:'True. Last week they missed the train home.'}],
      q: 'Andrew: Mason looks really annoyed. ____ ?', opts: ['Why is he late', 'When is he going to be home', 'What could be bothering him', 'Where did he first meet his girlfriend', 'Do you know his girlfriend'], a: 2, why: 'Tom answers with a guess about a cause, so the question is "What could be bothering him?"' },
    { id: 's9', title: 'Item 9: a phone message',
      lines: [{sp:'A',t:'Can I speak to Bob please?'},{sp:'B',t:'Sorry. He\'s not in just now.'},{sp:'A',t:'(blank)'}],
      q: 'A: ____', opts: ['May I take a message?', 'I\'ll put you through.', 'What is your name please?', 'Would you give him a message please?'], a: 3, why: 'A is the caller, so A asks B to take a message. "May I take a message?" is something B would say.' },
    { id: 'o1', title: 'Old exam 1: greeting',
      lines: [{sp:'A',t:'How do you do?'},{sp:'B',t:'(blank)'}],
      q: 'B: ____', opts: ['I do it by myself', 'How do you do?', 'I am very fine', 'I am working'], a: 1, why: '"How do you do?" is a formal greeting, answered with the same words.' },
    { id: 'o2', title: 'Old exam 2: holiday shopping',
      lines: [{sp:'A',t:'I really don\'t like shopping around the holidays.'},{sp:'B',t:'(blank). It\'s always so busy.'}],
      q: 'B: ____ . It\'s always so busy.', opts: ['I couldn\'t agree with you more', 'I couldn\'t agree with you less', 'I totally disagree with you', 'I\'m afraid I can\'t'], a: 0, why: 'B gives a reason that supports A, so B agrees strongly: "I couldn\'t agree with you more."' }
  ]
}
];
