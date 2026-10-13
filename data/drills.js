/* Pattern drills: parallel structure, active/passive, direct/indirect, tense confusion, combined.
   Rules are bilingual (English + Burmese). Items are added to the PRACTICE bank (source "DR"), so they also appear in Grammar practice.
   Written for this site. */
(function () {
  var n = 0;
  function P(type, topic, q, opts, a, why) { n++; PRACTICE.push({ id: 'DR-' + n, src: 'DR', type: type, topic: topic, q: q, opts: opts, a: a - 1, why: why, note: null }); }
  PRACTICE_SRC.DR = 'Pattern drills (written for this site)';
  var IS = 'Incomplete sentence', EI = 'Error identification';
  var PA = 'Parallel structure', VO = 'Voice', RS = 'Reported speech', TC = 'Tense confusion', CB = 'Combined';

  /* ---------- Parallel structure ---------- */
  P(IS, PA, 'She enjoys reading, writing and ____ .', ['to paint', 'painting', 'paint', 'painted'], 2, 'enjoy + V-ing; the list must be V-ing, V-ing and V-ing.');
  P(IS, PA, 'He wants to buy a car, ____ a house, and travel abroad.', ['building', 'build', 'built', 'builds'], 2, 'after "to": buy, build, travel (all base verbs).');
  P(IS, PA, 'The manager is experienced, hardworking and ____ .', ['honestly', 'honest', 'honesty', 'honestness'], 2, 'adjective list: experienced, hardworking, honest.');
  P(IS, PA, 'Driving at night is more dangerous than ____ in the daytime.', ['to drive', 'driving', 'drive', 'drove'], 2, 'than + the same form as the first part (Driving ... than driving).');
  P(EI, PA, 'The teacher asked us (1) to open the book, (2) reading the first page, and (3) to answer (4) the questions.', ['to open the book', 'reading the first page', 'to answer', 'the questions'], 2, 'to open, to read, to answer: all to + V1.');
  P(IS, PA, 'She is not only intelligent but also ____ .', ['kindly', 'kind', 'kindness', 'kinder'], 2, 'not only + adjective, but also + adjective.');
  P(IS, PA, 'Either you finish the work now or you ____ it tomorrow.', ['will finish', 'finishing', 'to finish', 'finished'], 1, 'either + clause, or + clause: you finish ... or you will finish.');
  P(EI, PA, 'He likes (1) swimming, (2) to play tennis, and (3) cycling (4) on weekends.', ['swimming', 'to play tennis', 'cycling', 'on weekends'], 2, 'swimming, playing, cycling: keep V-ing in the list.');
  P(IS, PA, 'The new law will protect workers, reduce costs, and ____ safety.', ['improves', 'improve', 'improving', 'to improved'], 2, 'will + protect, reduce, improve (all base verbs).');
  P(IS, PA, 'She is both a good teacher and ____ .', ['writer talented', 'a talented writer', 'talent writer', 'talents writer'], 2, 'both a good teacher and a talented writer: noun phrase = noun phrase.');
  P(IS, PA, 'Many sports, such as football, swimming, and ____ , are popular.', ['to run', 'running', 'ran', 'runs'], 2, 'such as + parallel V-ing / noun items.');
  P(EI, PA, 'To succeed in the exam, you should (1) read widely, (2) practise regularly, and (3) to sleep (4) enough.', ['read widely', 'practise regularly', 'to sleep', 'enough'], 3, 'should + read, practise, sleep (no "to").');
  P(IS, PA, 'The speech was short, clear, and ____ .', ['impress', 'impressively', 'impressive', 'impression'], 3, 'adjective list: short, clear, impressive.');
  P(IS, PA, 'He not only wrote the report ____ also presented it.', ['and', 'but', 'so', 'or'], 2, 'not only ... but also ...');

  /* ---------- Active / passive ---------- */
  P(IS, VO, 'The bridge ____ by the army last year.', ['built', 'was built', 'has built', 'is building'], 2, 'The bridge receives the action + last year: was built.');
  P(IS, VO, 'English ____ all over the world.', ['speaks', 'is spoken', 'spoke', 'is speaking'], 2, 'English is spoken (by people): passive present.');
  P(IS, VO, 'The report ____ by next Friday.', ['will finish', 'will be finished', 'is finishing', 'finished'], 2, 'future passive: will be + V3.');
  P(IS, VO, 'The window ____ when I came in.', ['was broken', 'broke', 'breaks', 'has broken'], 1, 'a state resulting from the action: was broken.');
  P(IS, VO, 'The chef ____ a delicious soup.', ['cooked', 'was cooked', 'is cooked', 'has been cooked'], 1, 'An object follows ("a delicious soup"), so the verb is active.');
  P(EI, VO, 'The Eiffel Tower (1) completed (2) in 1889 (3) for the World\'s Fair (4) in Paris.', ['completed', 'in 1889', 'for the World\'s Fair', 'in Paris'], 1, 'The tower receives the action: was completed.');
  P(IS, VO, 'Many accidents ____ by careless driving.', ['cause', 'are caused', 'caused', 'is caused'], 2, 'plural subject + passive: are caused.');
  P(IS, VO, 'The problem ____ yet.', ['hasn\'t solved', 'hasn\'t been solved', 'wasn\'t solving', 'isn\'t solving'], 2, 'present perfect passive: has/have been + V3.');
  P(IS, VO, 'The documents ____ at the moment.', ['are checking', 'are being checked', 'are checked', 'have checked'], 2, 'in progress + passive: are being + V3.');
  P(IS, VO, 'The accident ____ at noon yesterday.', ['was happened', 'happened', 'was happening', 'has been happened'], 2, '"happen" has no object, so it cannot be passive.');
  P(EI, VO, 'The letters (1) should (2) send (3) before (4) Monday.', ['should', 'send', 'before', 'Monday'], 2, 'modal passive: should be sent.');
  P(IS, VO, 'By the time we arrived, all the tickets ____ .', ['sold', 'had been sold', 'were selling', 'have sold'], 2, 'earlier past + passive: had been sold.');
  P(IS, VO, 'The new rules ____ to all students next week.', ['will announce', 'will be announced', 'announce', 'are announcing'], 2, 'rules receive the action; next week: will be announced.');
  P(IS, VO, 'The thief ____ by the police last night.', ['caught', 'was caught', 'has caught', 'is caught'], 2, 'past + by the police: was caught.');

  /* ---------- Direct / indirect ---------- */
  P(IS, RS, '"I can swim," he said. -> He said that he ____ swim.', ['can', 'could', 'may', 'is able'], 2, 'can -> could.');
  P(IS, RS, '"I must go now," she said. -> She said that she ____ go then.', ['must', 'had to', 'would', 'has to'], 2, 'must -> had to; now -> then.');
  P(IS, RS, '"Are you hungry?" she asked me. -> She asked me ____ hungry.', ['if I was', 'if was I', 'that I was', 'am I'], 1, 'Yes/No question: if + S + V (statement order).');
  P(EI, RS, 'He told (1) me (2) that (3) he will (4) come the next day.', ['me', 'that', 'he will', 'come the next day'], 3, 'will -> would after a past reporting verb.');
  P(IS, RS, '"Please sit down," the nurse said to me. -> The nurse asked me ____ down.', ['sit', 'to sit', 'sitting', 'sat'], 2, 'request: asked + O + to V1.');
  P(IS, RS, 'She said, "I have lost my keys." -> She said she ____ her keys.', ['has lost', 'had lost', 'lost', 'loses'], 2, 'present perfect -> past perfect.');
  P(IS, RS, 'He said, "I was born in 1990." -> He said he ____ born in 1990.', ['is', 'was', 'had been', 'would be'], 3, 'past simple -> past perfect (the sheet\'s backshift rule).');
  P(IS, RS, '"What are you doing?" she asked him. -> She asked him what ____ .', ['was he doing', 'he was doing', 'is he doing', 'did he do'], 2, 'reported wh-question: statement order, past continuous.');
  P(IS, RS, 'She ____ me that the meeting was cancelled.', ['said', 'told', 'spoke', 'asked'], 2, 'tell + person + that-clause (say does not take a person directly).');

  /* ---------- Tense confusion ---------- */
  P(IS, TC, 'I ____ my keys. I can\'t open the door.', ['lost', 'have lost', 'had lost', 'was losing'], 2, 'past action with a result now: present perfect.');
  P(IS, TC, 'I ____ my keys yesterday.', ['have lost', 'lost', 'had lost', 'am losing'], 2, '"yesterday" = finished past: past simple.');
  P(IS, TC, 'She ____ in Chiang Mai for five years. (She still lives there.)', ['lived', 'has lived', 'had lived', 'was living'], 2, 'still true now: present perfect.');
  P(IS, TC, 'She ____ in Chiang Mai for five years before she moved to Bangkok.', ['has lived', 'had lived', 'lives', 'is living'], 2, 'earlier than another past action: past perfect.');
  P(IS, TC, 'I ____ TV when the phone rang.', ['watched', 'was watching', 'have watched', 'had watched'], 2, 'a long action interrupted by a short one (when + past simple).');
  P(IS, TC, 'When I got home, my sister ____ dinner already.', ['cooked', 'was cooking', 'had cooked', 'has cooked'], 3, 'already + earlier than "got": past perfect.');
  P(IS, TC, 'Look! It ____ .', ['rains', 'is raining', 'rained', 'has rained'], 2, '"Look!" = happening now: present continuous.');
  P(IS, TC, 'Water ____ at 100 degrees.', ['is boiling', 'boils', 'boiled', 'has boiled'], 2, 'a general fact: present simple.');
  P(IS, TC, 'He is tired because he ____ since morning.', ['works', 'has been working', 'worked', 'is working'], 2, 'duration up to now: present perfect continuous.');
  P(IS, TC, 'I ____ to Japan three times.', ['went', 'have been', 'had been', 'was going'], 2, 'number of times up to now: present perfect.');
  P(IS, TC, 'If it rains tomorrow, we ____ at home.', ['stay', 'will stay', 'stayed', 'would stay'], 2, 'if + present simple, will + V1.');
  P(IS, TC, 'She ____ to music while she was cooking.', ['listened', 'was listening', 'has listened', 'had listened'], 2, 'while: both actions in progress.');
  P(IS, TC, 'By next year, he ____ here for ten years.', ['will live', 'will have lived', 'lives', 'has lived'], 2, '"By next year" + for ten years: future perfect.');
  P(IS, TC, 'I ____ him since last week.', ['didn\'t see', 'haven\'t seen', 'hadn\'t seen', 'don\'t see'], 2, 'since + last week: present perfect.');

  /* ---------- Combined ---------- */
  P(IS, CB, 'She said that the report ____ by the manager before she arrived.', ['finished', 'was finished', 'had been finished', 'has been finished'], 3, 'reported speech + passive + earlier past: had been finished.');
  P(IS, CB, '"The project will be finished tomorrow," he said. -> He said that the project ____ the next day.', ['will be finished', 'would be finished', 'would finish', 'was finishing'], 2, 'will -> would; passive stays: would be finished.');
  P(IS, CB, 'If the bridge ____ earlier, many lives would have been saved.', ['had been built', 'was built', 'is built', 'would build'], 1, 'Type 3 + passive: had been built.');
  P(IS, CB, 'The manager asked whether the work had been completed and the clients ____ .', ['informed', 'had been informed', 'were informing', 'informing'], 2, 'parallel passive: had been completed and had been informed.');
  P(IS, CB, 'He not only ____ the exam but also was awarded a scholarship.', ['passed', 'was passed', 'has passed', 'pass'], 1, 'parallel past forms: passed ... was awarded.');
  P(IS, CB, 'By the time the police arrived, the thief ____ and the stolen goods ____ .', ['had escaped, had been hidden', 'escaped, hid', 'had escaped, hid', 'was escaping, was hidden'], 1, 'two earlier past events: active (the thief escaped) and passive (the goods were hidden).');
  P(EI, CB, 'She told me (1) that she (2) has finished (3) her work (4) the day before.', ['that she', 'has finished', 'her work', 'the day before'], 2, 'reported speech: has finished -> had finished.');
  P(IS, CB, 'Because the road ____ , the trip ____ until next week.', ['was blocked, was postponed', 'blocked, postponed', 'had blocked, postponed', 'was blocking, was postponed'], 1, 'two passive past clauses.');
  P(IS, CB, '"Did you finish the report?" he asked. -> He asked me ____ the report.', ['if I had finished', 'did I finish', 'if I finish', 'that I finished'], 1, 'Yes/No question + past simple -> if + had + V3.');
  P(EI, CB, 'While he (1) was driving (2) home, a deer (3) was running (4) across the road.', ['was driving', 'home', 'was running', 'across the road'], 3, 'interrupted action: the short event is past simple (ran).');
  P(IS, CB, 'If you ____ the instructions carefully, you would not have made so many mistakes.', ['read', 'had read', 'have read', 'reading'], 2, 'Type 3: had + V3 / would not have + V3.');
  P(IS, CB, 'The students were told ____ their phones and ____ quietly.', ['to switch off, to sit', 'switch off, sit', 'switching off, sitting', 'to switch off, sat'], 1, 'passive + parallel: told to switch off ... and (to) sit.');
  P(IS, CB, 'Since the company ____ in 2010, it ____ more than 500 jobs.', ['was founded, has created', 'founded, created', 'had been founded, has created', 'was founded, had created'], 1, 'since + V2 (passive), then present perfect.');
  P(EI, CB, 'The report (1) was written (2) by the team, (3) checked by the manager, and (4) to send to the client.', ['was written', 'by the team', 'checked by the manager', 'to send to the client'], 4, 'parallel passive: written, checked and sent.');

  /* ---------- tabs ---------- */
  window.DRILLS = [
    { id: 'parallel', title: 'Parallel structure', my: 'အပြိုင်ပုံစံ', topics: ['Parallel structure'],
      rules: [
        ['and / or / but joins items of the SAME form: noun-noun, V-ing - V-ing, to V - to V, adjective - adjective.', 'and / or / but ဖြင့် ချိတ်ထားသော စကားလုံးများသည် ပုံစံတူရမည် (နာမ်-နာမ်၊ V-ing - V-ing၊ to V - to V၊ adjective - adjective)။'],
        ['not only ... but also / either ... or / neither ... nor / both ... and: both sides must match.', 'not only ... but also / either ... or / neither ... nor / both ... and: နှစ်ဖက်စလုံး ပုံစံတူရမည်။'],
        ['After "than", copy the form of the first part (Driving ... than driving).', '"than" နောက်တွင် ရှေ့ပုံစံအတိုင်း ရေးပါ (Driving ... than driving)။'],
        ['A list of three (a, b, and c): the LAST item is the one most often wrong.', 'ပစ္စည်း ၃ ခုစာရင်းတွင် နောက်ဆုံးအရာသည် အမှားအများဆုံးဖြစ်သည်။'],
        ['Error identification: find and / or / but first, then compare the word on each side.', 'Error identification: and / or / but ကို အရင်ရှာပြီး နှစ်ဖက်စကားလုံးကို နှိုင်းယှဉ်ပါ။']
      ] },
    { id: 'voice', title: 'Active / passive', my: 'Active / Passive', topics: ['Voice'],
      rules: [
        ['Passive = be + V3. Use it when the subject RECEIVES the action.', 'Passive = be + V3 ဖြစ်သည်။ Subject သည် လုပ်ရပ်ကို ခံရသောအခါ သုံးသည်။'],
        ['"be" follows the tense: is/am/are, was/were, will be, has/have been, had been, is/are being, modal + be.', '"be" သည် tense အတိုင်းပြောင်းသည်: is/am/are၊ was/were၊ will be၊ has/have been၊ had been၊ is/are being၊ modal + be။'],
        ['A verb with no object (happen, arrive, die, occur) cannot be passive.', 'ကံ (object) မရှိသောကြိယာ (happen, arrive, die, occur) သည် passive မဖြစ်နိုင်ပါ။'],
        ['A missing "be" is the favourite error: constructed in 1961 -> was constructed.', '"be" ပျောက်နေခြင်းသည် အမှားအများဆုံးဖြစ်သည်: constructed -> was constructed။'],
        ['Check: translate the subject. Does it DO or RECEIVE? Receive = passive.', 'Subject က လုပ်သူလား ခံရသူလား ဘာသာပြန်စစ်ပါ။ ခံရလျှင် passive။']
      ] },
    { id: 'reported', title: 'Direct / indirect speech', my: 'တိုက်ရိုက် / သွယ်ဝိုက် ပြောခြင်း', topics: ['Reported speech'],
      rules: [
        ['Past reporting verb (said, told, asked): move the tense one step back.', 'ပြောသည့်ကြိယာ အတိတ်ဖြစ်လျှင် tense ကို တစ်ဆင့်နောက်ပြန်ရွှေ့ပါ။'],
        ['will -> would, can -> could, may -> might, must -> had to; present perfect and past simple -> past perfect.', 'will -> would၊ can -> could၊ may -> might၊ must -> had to၊ present perfect နှင့် past simple -> past perfect။'],
        ['now -> then, today -> that day, yesterday -> the day before, tomorrow -> the next day, here -> there.', 'now -> then၊ today -> that day၊ yesterday -> the day before၊ tomorrow -> the next day၊ here -> there။'],
        ['Questions: asked + if / wh-word + S + V (no "did", no "?").', 'မေးခွန်း: asked + if / wh-word + S + V ("did" နှင့် "?" မသုံးပါ)။'],
        ['Commands: told / asked + O + (not) to V1.  Facts that are always true: no backshift.', 'အမိန့်: told / asked + O + (not) to V1။ အမြဲမှန်သော အချက်များတွင် tense မရွှေ့ပါ။']
      ] },
    { id: 'tense', title: 'Tense confusion', my: 'Tense ရောထွေးမှု', topics: ['Tense confusion'],
      rules: [
        ['မှတ်ရလွယ်သော စည်းမျဉ်း: While + Past Continuous (ဆက်လက်ဖြစ်နေသော)', 'While + Past Continuous (ဆက်လက်ဖြစ်နေသော လုပ်ရပ်)'],
        ['မှတ်ရလွယ်သော စည်းမျဉ်း: When + Past Simple (ကြားဖြတ်ဝင်လာသော တိုတောင်းသည့်လုပ်ရပ်)', 'When + Past Simple (ကြားဖြတ်ဝင်လာသော တိုတောင်းသည့်လုပ်ရပ်)'],
        ['Past simple vs present perfect: yesterday / ago / in 2010 -> V2.  since / for / already / yet / so far -> has + V3.', 'Past simple နှင့် present perfect: yesterday / ago / in 2010 -> V2။ since / for / already / yet / so far -> has + V3။'],
        ['Past simple vs past perfect: the EARLIER of two past actions -> had + V3 (by the time, before, after).', 'Past simple နှင့် past perfect: အတိတ်လုပ်ရပ်နှစ်ခုအနက် ပိုအရင်ဖြစ်သည်ကို had + V3 သုံးပါ။'],
        ['Present perfect vs perfect continuous: result / how many times -> has + V3; how long (still going) -> has been + V-ing.', 'Present perfect နှင့် perfect continuous: ရလဒ်/အကြိမ်ရေ -> has + V3၊ ကြာချိန် (ဆက်ဖြစ်နေ) -> has been + V-ing။'],
        ['Present simple vs continuous: habit / fact -> V1/s;  now / at the moment / Look! -> is/are + V-ing.', 'Present simple နှင့် continuous: အကျင့်/အမှန်တရား -> V1/s၊ ယခု/ကြည့်ပါ -> is/are + V-ing။']
      ] },
    { id: 'combined', title: 'Combine all', my: 'ပေါင်းစပ်လေ့ကျင့်ခန်း', topics: ['Combined'],
      rules: [
        ['Work in layers: 1 verb slot, 2 agreement, 3 tense, 4 voice, 5 connector, 6 word form, 7 parallel.', 'အလွှာလိုက်ဖြေပါ: ၁ ကြိယာနေရာ၊ ၂ agreement၊ ၃ tense၊ ၄ voice၊ ၅ ချိတ်ဆက်စကား၊ ၆ word form၊ ၇ parallel။'],
        ['Reported speech + passive: backshift the tense first, then keep "be + V3" (will be done -> would be done).', 'Reported speech + passive: tense ကိုအရင်နောက်ပြန်ရွှေ့ပြီး "be + V3" ကို ဆက်ထားပါ (will be done -> would be done)။'],
        ['If + passive: Type 3 = had been + V3, would have been + V3.', 'If + passive: Type 3 = had been + V3၊ would have been + V3။'],
        ['Parallel + passive: every item in the list repeats the same passive form (written, checked and sent).', 'Parallel + passive: စာရင်းတစ်ခုလုံးတွင် passive ပုံစံတူရမည် (written, checked and sent)။'],
        ['While / When rule still applies inside long sentences (see Tense confusion).', 'While / When စည်းမျဉ်းသည် ဝါကျရှည်များတွင်လည်း သုံးရမည် (Tense confusion ကိုကြည့်ပါ)။']
      ] }
  ];
})();
