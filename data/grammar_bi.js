/* Bilingual (English + Burmese) key points for every grammar topic, plus the "combined sentences" method.
   Loaded after grammar.js. Each topic gets .bi = [[English, Burmese], ...]. */
(function () {
  var BI = {
    format: [
      ['The exam has about 100 items in 3 hours. You need 60 items (60%) to pass.', 'စာမေးပွဲတွင် မေးခွန်း ၁၀၀ ခန့်ရှိပြီး ၃ နာရီကြာသည်။ အောင်မှတ်မှာ ၆၀ ခု (၆၀%) ဖြစ်သည်။'],
      ['Part 2 (Grammar) is the biggest part, about 50 items, so grammar gives the most points.', 'အပိုင်း ၂ (Grammar) သည် အကြီးဆုံးဖြစ်ပြီး ၅၀ ခန့်ရှိသဖြင့် အမှတ်အများဆုံးရနိုင်သည်။'],
      ['Look at the choices first: same word in different forms = word form; different tenses = tense; connectors = meaning.', 'ရွေးချယ်စရာများကို အရင်ကြည့်ပါ။ စကားလုံးတစ်လုံးတည်း ပုံစံအမျိုးမျိုး = word form၊ tense မတူ = tense၊ ချိတ်ဆက်စကားများ = အဓိပ္ပာယ်ကြည့်ပါ။']
    ],
    combine: [],
    pos: [
      ['Decide the word class first: noun, verb, adjective or adverb. Use both the suffix and the meaning.', 'စကားလုံးအမျိုးအစား (နာမ်၊ ကြိယာ၊ နာမဝိသေသန၊ ကြိယာဝိသေသန) ကို အရင်ဆုံးဆုံးဖြတ်ပါ။ နောက်ဆက်တွဲ (suffix) နှင့် အဓိပ္ပာယ်နှစ်ခုလုံးကို သုံးပါ။'],
      ['After a / an / the + ____ + noun, the blank is an ADJECTIVE.', 'a / an / the + ____ + နာမ် ဖြစ်လျှင် ကွက်လပ်တွင် နာမဝိသေသန (adjective) ထည့်ပါ။'],
      ['After the / an / of (the ____ of), the blank is a NOUN.', 'the / an / of (the ____ of) ၏ နောက်တွင် နာမ် (noun) ထည့်ပါ။'],
      ['Adjective + ly = adverb; good becomes well.', 'Adjective + ly = adverb ဖြစ်သည်။ good ၏ adverb မှာ well ဖြစ်သည်။']
    ],
    svo: [
      ['Every sentence needs Subject + Verb. An object may follow the verb.', 'ဝါကျတိုင်းတွင် ကတ္တား (Subject) + ကြိယာ (Verb) လိုအပ်သည်။ ကြိယာနောက်တွင် ကံ (Object) လိုက်နိုင်သည်။'],
      ['Subject = who or what does it; Predicate = what the subject does; Object = receives the action.', 'Subject = လုပ်ဆောင်သူ၊ Predicate = Subject လုပ်ဆောင်ချက်၊ Object = လုပ်ဆောင်ချက်ကို ခံယူသောအရာ။'],
      ['If the sentence already has a main verb, the blank is not another main verb.', 'ဝါကျတွင် အဓိကကြိယာ ရှိပြီးသားဆိုလျှင် ကွက်လပ်သည် အဓိကကြိယာ မဟုတ်ပါ။']
    ],
    phrase: [
      ['A noun phrase has no main verb, so it is not a sentence.', 'နာမ်စု (noun phrase) တွင် အဓိကကြိယာမပါသဖြင့် ဝါကျမဟုတ်ပါ။'],
      ['Four modifiers of a noun: Adj. before it, preposition + noun, who/which/that + verb, V-ing/V3.', 'နာမ်ကို ပြင်ဆင်ပေးသော ပုံစံ ၄ မျိုး: adjective၊ preposition + noun၊ who/which/that + verb၊ V-ing/V3။'],
      ['To find the real subject, cross out all modifiers.', 'အမှန်တကယ် Subject ကို ရှာရန် ပြင်ဆင်ပေးသော စကားစုများအားလုံးကို ကွင်းထုတ်ပါ။']
    ],
    connectors: [
      ['First translate: cause, contrast, addition, result, purpose or condition?', 'ပထမဦးစွာ ဘာကြောင့်၊ ဆန့်ကျင်ဖက်၊ ထပ်ပေါင်း၊ ရလဒ်၊ ရည်ရွယ်ချက်၊ အခြေအနေ ဟူ၍ ဘာလဲ ဖော်ထုတ်ပါ။'],
      ['Then look after the blank: noun / noun phrase -> despite, because of, due to, such as. A clause (S + V) -> although, because, since, so that.', 'ထို့နောက် ကွက်လပ်နောက်ကို ကြည့်ပါ။ နာမ်ဖြစ်လျှင် despite / because of / due to / such as၊ ဝါကျငယ် (S + V) ဖြစ်လျှင် although / because / since / so that။'],
      ['One connector joins two clauses. "Although ... but" and "Because ... so" are wrong.', 'ဝါကျနှစ်ခုကို ချိတ်ရန် ချိတ်ဆက်စကား တစ်လုံးသာ သုံးပါ။ "Although ... but" နှင့် "Because ... so" မှာ မှားသည်။'],
      ['Write "despite the fact that" (no "of") or "in spite of the fact that".', '"Despite of" ဟု မသုံးပါ။ "Despite the fact that" သို့မဟုတ် "In spite of" ဟု သုံးပါ။']
    ],
    sv: [
      ['Singular subject + verb with s/es. Plural subject + verb without s/es.', 'ကတ္တားတစ်ခုတည်း (singular) ဖြစ်လျှင် ကြိယာတွင် s/es ပါမည်။ ကတ္တားအများ (plural) ဖြစ်လျှင် s/es မပါပါ။'],
      ['Modifiers between the subject and verb do not change the verb. Find the real subject.', 'Subject နှင့် ကြိယာကြားရှိ ပြင်ဆင်စကားများသည် ကြိယာကို မပြောင်းလဲစေပါ။ အမှန်တကယ်ကတ္တားကို ရှာပါ။'],
      ['A gerund subject (Playing games ...) is singular. "The number of" is singular; "A number of" is plural.', 'Gerund ကတ္တား (Playing games ...) သည် singular ဖြစ်သည်။ "The number of" = singular၊ "A number of" = plural။']
    ],
    tense: [
      ['Check time words first: yesterday / ago = past; since / for = present perfect; tomorrow / next = will.', 'အချိန်ဖော်ပြစကားများကို အရင်ကြည့်ပါ။ yesterday / ago = အတိတ်၊ since / for = present perfect၊ tomorrow / next = will။'],
      ['Past Perfect (had + V3) is the earlier past; Past Simple is the later past.', 'Past Perfect (had + V3) သည် ပို၍ အရင်ဖြစ်သော အတိတ်၊ Past Simple သည် နောက်မှဖြစ်သော အတိတ်ဖြစ်သည်။'],
      ['While + Past Continuous (in progress), When + Past Simple (interrupts).', 'While + Past Continuous (ဆက်လက်ဖြစ်နေသော)၊ When + Past Simple (ကြားဖြတ်ဝင်လာသော)။']
    ],
    modal: [
      ['Modal + V1 (base verb). Never add s, ed, ing or to after a modal.', 'Modal + V1 (ကြိယာမူလပုံစံ) သာသုံးပါ။ modal နောက်တွင် s၊ ed၊ ing သို့မဟုတ် to မထည့်ပါနှင့်။'],
      ['must = strong duty; should / ought to = advice; may / might = possibility; had better = strong advice.', 'must = မဖြစ်မနေ၊ should / ought to = အကြံပေး၊ may / might = ဖြစ်နိုင်ချေ၊ had better = ပိုပြင်းထန်သော အကြံပေး။']
    ],
    passive: [
      ['Passive = be + V3. Use it when the subject receives the action.', 'Passive = be + V3 ဖြစ်သည်။ Subject သည် လုပ်ဆောင်ချက်ကို ခံရသောအခါ သုံးသည်။'],
      ['Find "be + V3" first, then translate to check if the subject should do or receive the action.', 'ပထမဦးစွာ "be + V3" ကို ရှာပြီး Subject သည် လုပ်သူလား ခံရသူလား ဘာသာပြန်စစ်ပါ။'],
      ['A missing "be" is a favourite error: constructed in 1961 -> was constructed.', 'be ပျောက်နေခြင်းသည် အမှားအများဆုံးပုံစံဖြစ်သည်။ ဥပမာ constructed in 1961 -> was constructed။']
    ],
    shortcut: [
      ['Step 1 verb slot, step 2 agreement, step 3 tense, step 4 voice.', 'အဆင့် ၁ ကြိယာနေရာ၊ အဆင့် ၂ agreement၊ အဆင့် ၃ tense၊ အဆင့် ၄ voice။']
    ],
    adjadv: [
      ['Adjective modifies a noun; adverb modifies a verb, adjective, adverb or sentence.', 'Adjective သည် နာမ်ကို၊ adverb သည် ကြိယာ၊ adjective၊ adverb သို့မဟုတ် ဝါကျတစ်ခုလုံးကို ပြင်ဆင်သည်။'],
      ['After to be / linking verbs (look, sound, seem, feel, taste, smell, become) use an ADJECTIVE.', 'to be / linking verb (look, sound, seem, feel, taste, smell, become) ၏ နောက်တွင် ADJECTIVE သုံးပါ။'],
      ['After a normal verb use an ADVERB (sang beautifully).', 'ပုံမှန်ကြိယာနောက်တွင် ADVERB သုံးပါ (sang beautifully)။'],
      ['Verb + object + adjective: make / keep / consider / find + O + adj.', 'ကြိယာ + ကံ + adjective: make / keep / consider / find + O + adj. ပုံစံ။']
    ],
    nonfinite: [
      ['let / make / have / help + O + V1 (no to).', 'let / make / have / help + O + V1 (to မပါ)။'],
      ['want / ask / remind / tell + O + to V1.', 'want / ask / remind / tell + O + to V1။'],
      ['enjoy / avoid / consider / keep / spend time + V-ing.', 'enjoy / avoid / consider / keep / spend time + V-ing။'],
      ['"to" can be a preposition: looking forward to + V-ing.', '"to" သည် preposition ဖြစ်နိုင်သည်။ looking forward to + V-ing။']
    ],
    quant: [
      ['many + plural countable; much + uncountable; a few + plural; a little + uncountable.', 'many + အရေအတွက်ရေ၍ရသော plural; much + ရေမရသောနာမ်; a few + plural; a little + uncountable။'],
      ['each other = 2 people; one another = more than 2.', 'each other = ၂ ဦး၊ one another = ၂ ဦးထက်ပို။'],
      ['each / every / everybody + singular verb.', 'each / every / everybody + singular ကြိယာ။']
    ],
    if: [
      ['Type 1: If + V1, will + V. Type 2: If + V2, would + V. Type 3: If + had + V3, would have + V3.', 'Type 1: If + V1, will + V။ Type 2: If + V2, would + V။ Type 3: If + had + V3, would have + V3။'],
      ['Unless = if not. Do not add another negative after unless.', 'Unless = if not ဖြစ်သည်။ unless နောက်တွင် အနုတ်ပုံစံ ထပ်မသုံးပါနှင့်။'],
      ['"I wish I had ..." means a present wish that is not true.', '"I wish I had ..." သည် လက်ရှိတွင် မဖြစ်နိုင်သော ဆန္ဒကို ဆိုလိုသည်။']
    ],
    parallel: [
      ['Words joined by and / or / but must have the same form.', 'and / or / but ဖြင့် ချိတ်ထားသော စကားလုံးများသည် ပုံစံတူရမည်။'],
      ['such as + noun / V-ing (not a bare verb).', 'such as + နာမ် / V-ing (ကြိယာမူလပုံစံမသုံးပါ)။']
    ],
    errorid: [
      ['Four underlined parts: choose the one that breaks a grammar RULE.', 'မျဉ်းသားထားသော အပိုင်း ၄ ခုမှ သဒ္ဒါစည်းမျဉ်းကို ချိုးဖောက်သော အပိုင်းကို ရွေးပါ။'],
      ['Check, in order: verb form, agreement, tense/voice, word form, connector, preposition.', 'အစီအစဉ်အတိုင်းစစ်ပါ: ကြိယာပုံစံ၊ agreement၊ tense/voice၊ word form၊ ချိတ်ဆက်စကား၊ preposition။']
    ],
    textcomp: [
      ['Read the whole paragraph, not only one sentence. Time, number and meaning come from the context.', 'ဝါကျတစ်ကြောင်းတည်းမဟုတ်ဘဲ အပိုဒ်တစ်ခုလုံးဖတ်ပါ။ အချိန်၊ အရေအတွက်၊ အဓိပ္ပာယ်တို့ကို ဆက်စပ်စာသားမှ ရှာပါ။']
    ],
    convo: [
      ['Choose the reply that fits the question and is polite.', 'မေးခွန်းနှင့်ကိုက်ညီပြီး ယဉ်ကျေးသော အဖြေကို ရွေးပါ။'],
      ['Would you mind + V-ing? -> No, not at all (= I agree).', 'Would you mind + V-ing? -> No, not at all (သဘောတူသည်)။']
    ]
  };

  /* ---- combined-sentence method ---- */
  var METHOD = [
    ['Read the whole sentence once and cross out modifiers: prepositional phrases, who/which/that clauses, V-ing / V3 phrases, and phrases between commas. What remains is S + V + O.',
     'ဝါကျတစ်ခုလုံးကို တစ်ခါဖတ်ပြီး ပြင်ဆင်ပေးသော စကားစုများ (preposition စု၊ who/which/that၊ V-ing / V3၊ ကော်မာကြားစုများ) ကို ကွင်းထုတ်ပါ။ ကျန်သည်မှာ S + V + O ဖြစ်သည်။'],
    ['Find the blank / underlined part and name the TYPE of question: verb slot, agreement, tense, voice, modal, connector, word form, parallel.',
     'ကွက်လပ် သို့မဟုတ် မျဉ်းသားထားသော အပိုင်းကို ရှာပြီး မေးခွန်းအမျိုးအစား (ကြိယာနေရာ၊ agreement၊ tense၊ voice၊ modal၊ ချိတ်ဆက်စကား၊ word form၊ parallel) ကို အမည်ပေးပါ။'],
    ['Is there already a main verb? If yes, the blank is not a main verb (it is a modifier). If no, the blank must supply one.',
     'အဓိကကြိယာ ရှိပြီးလား စစ်ပါ။ ရှိလျှင် ကွက်လပ်သည် ပြင်ဆင်ပေးသောစကားဖြစ်သည်။ မရှိလျှင် ကွက်လပ်တွင် အဓိကကြိယာ ထည့်ရမည်။'],
    ['Agreement: is the REAL subject singular or plural? (ignore the words in the middle).',
     'Agreement: အမှန်တကယ် Subject သည် singular လား plural လား (အလယ်ရှိစကားများကို လျစ်လျူရှုပါ)။'],
    ['Tense and voice: time words, other verbs in the sentence, then does the subject DO or RECEIVE the action (be + V3)?',
     'Tense နှင့် voice: အချိန်ဖော်ပြစကားများ၊ ဝါကျထဲရှိ အခြားကြိယာများ၊ ထို့နောက် Subject က လုပ်သူလား ခံရသူလား (be + V3)။'],
    ['Connector: translate the meaning, then check what follows (noun or S + V), and use only one connector for two clauses.',
     'ချိတ်ဆက်စကား: အဓိပ္ပာယ်ကို ဘာသာပြန်ပါ၊ နောက်မှာ နာမ်လား S + V လား ကြည့်ပါ၊ ဝါကျနှစ်ခုအတွက် ချိတ်ဆက်စကား တစ်လုံးသာ သုံးပါ။'],
    ['Word form / parallel: noun, adjective or adverb by position; both sides of and / or must match.',
     'Word form / parallel: နေရာအလိုက် နာမ်၊ adjective၊ adverb ရွေးပါ။ and / or နှစ်ဖက်သည် ပုံစံတူရမည်။'],
    ['Last: translate the full sentence with your answer and check that it sounds right and does not break another rule.',
     'နောက်ဆုံး: ရွေးထားသော အဖြေဖြင့် ဝါကျတစ်ခုလုံးကို ဘာသာပြန်၍ အခြားစည်းမျဉ်းမချိုးဖောက်ကြောင်း စစ်ပါ။']
  ];
  var EX = [
    { s: 'The book recommended by the librarian ____ (gain) popularity after the new library opened.', ans: 'gained (or gains)',
      steps: [
        ['Cross out: "recommended by the librarian" (V3 phrase). Subject = The book.', 'ကွင်းထုတ်: "recommended by the librarian"။ Subject = The book။'],
        ['Verb slot is empty and the sentence has no other main verb.', 'ကြိယာနေရာ ဗလာဖြစ်ပြီး အခြား အဓိကကြိယာ မရှိ။'],
        ['Agreement: The book = singular -> verb takes s / past form.', 'Agreement: The book = singular -> ကြိယာတွင် s / past ပုံစံ။'],
        ['Tense: "after ... opened" shows past -> gained.', 'Tense: "after ... opened" က အတိတ်ကို ပြသည် -> gained။']
      ] },
    { s: 'Experts on air pollution and environmental campaigners ____ that these measures do not go far enough.', ans: 'complain',
      steps: [
        ['Cross out: "on air pollution". Subject = Experts and campaigners.', 'ကွင်းထုတ်: "on air pollution"။ Subject = Experts နှင့် campaigners။'],
        ['Compound subject with "and" = plural.', '"and" ဖြင့်ချိတ်သော Subject = plural။'],
        ['No past marker; present facts -> complain.', 'အတိတ်ဖော်ပြစကားမရှိ၊ ပစ္စုပ္ပန် -> complain။']
      ] },
    { s: '(1) Despite of the fact that exercise is among the healthiest things you can do, (2) some older adults are reluctant to exercise.', ans: '(1) Despite of -> Despite',
      steps: [
        ['Main clause = "some older adults are reluctant to exercise". The first part is a connector clause.', 'အဓိကဝါကျ = "some older adults are reluctant ..."။ ပထမအပိုင်းသည် ချိတ်ဆက်စကားအပိုင်း။'],
        ['Connector type: contrast. "the fact that + S + V" follows.', 'ချိတ်ဆက်စကားအမျိုးအစား: ဆန့်ကျင်ဖက်။ "the fact that + S + V" လိုက်သည်။'],
        ['"Despite the fact that" has no "of". "In spite of the fact that" has "of".', '"Despite the fact that" တွင် "of" မပါ။ "In spite of the fact that" တွင်သာ of ပါသည်။']
      ] },
    { s: 'The Berlin Wall, which became the most potent symbol of the Cold War, (4) constructed in 1961.', ans: '(4) constructed -> was constructed',
      steps: [
        ['Cross out the relative clause "which became ... Cold War". Subject = The Berlin Wall.', 'Relative clause "which became ... Cold War" ကို ကွင်းထုတ်ပါ။ Subject = The Berlin Wall။'],
        ['Is there a main verb? Only "constructed" remains, with no "be".', 'အဓိကကြိယာ ရှိလား? "constructed" သာကျန်ပြီး "be" မပါ။'],
        ['The wall is built by people -> passive -> was constructed.', 'နံရံသည် လူများက ဆောက်ခံရသည် -> passive -> was constructed။']
      ] },
    { s: 'Sudden temperature changes in winter (3) is often associated with a cold or the flu.', ans: '(3) is -> are',
      steps: [
        ['Cross out "in winter". Subject = changes.', '"in winter" ကို ကွင်းထုတ်ပါ။ Subject = changes။'],
        ['"changes" is plural -> are.', '"changes" သည် plural -> are။'],
        ['Check voice: associated = V3 with be -> are associated.', 'Voice စစ်: associated = V3 နှင့် be -> are associated။']
      ] },
    { s: '(1) Although the average IQ of this patient is only 75, (3) but he possesses normal intelligence.', ans: '(3) but he possesses -> he possesses',
      steps: [
        ['Two clauses: Although-clause and the main clause.', 'ဝါကျနှစ်ခု: Although ဝါကျနှင့် အဓိကဝါကျ။'],
        ['"Although" already shows contrast; "but" repeats it.', '"Although" က ဆန့်ကျင်ဖက်ကို ပြပြီးသား၊ "but" သည် ထပ်နေသည်။'],
        ['Rule: one connector per pair of clauses -> delete "but".', 'စည်းမျဉ်း: ဝါကျနှစ်ခုကို ချိတ်ဆက်စကားတစ်လုံးသာ -> "but" ဖယ်ပါ။']
      ] },
    { s: 'If he ____ a taxi, he ____ the plane.', ans: 'had taken, wouldn\'t have missed',
      steps: [
        ['Spot "If": check the tense pair.', '"If" ကိုတွေ့လျှင် tense အတွဲကို စစ်ပါ။'],
        ['Choices show had + V3 / would have + V3 -> Type 3 (unreal past).', 'ရွေးချယ်စရာတွင် had + V3 / would have + V3 -> Type 3 (မဖြစ်နိုင်သော အတိတ်)။'],
        ['The only complete pair is "had taken, wouldn\'t have missed".', 'အပြည့်စုံသော အတွဲမှာ "had taken, wouldn\'t have missed" တစ်ခုတည်း။']
      ] },
    { s: 'Scholars, ____ that maths is of vital importance to the economy, insist it must be a top government priority.', ans: 'agreeing',
      steps: [
        ['Main clause: "Scholars ... insist ...". The blank sits between commas = a modifier.', 'အဓိကဝါကျ: "Scholars ... insist ..."။ ကော်မာကြားကွက်လပ်သည် ပြင်ဆင်ပေးသောစကား။'],
        ['A modifier cannot be a finite verb (agreed / agree).', 'ပြင်ဆင်စကားသည် finite verb (agreed / agree) မဖြစ်နိုင်။'],
        ['Scholars DO the agreeing -> active V-ing -> agreeing.', 'Scholars က သဘောတူသူ -> active V-ing -> agreeing။']
      ] }
  ];

  GRAMMAR.forEach(function (g) { g.bi = BI[g.id] || []; });
  GRAMMAR.splice(1, 0, {
    id: 'combine', title: 'Combined sentences: step-by-step method', th: '', my: 'ရောနှောပါဝင်သော ဝါကျများကို အဆင့်ဆင့်ဖြေရှင်းနည်း', src: 'Method built from all the sheets',
    bi: [],
    blocks: [
      { t: 'p', text: 'When single rules are clear but a real exam sentence mixes several rules, do not try to solve everything at once. Solve one layer at a time, always in the same order. The method below works for incomplete sentences, error identification and text completion.' },
      { t: 'method' },
      { t: 'h', text: 'Which rule to check first (priority)' },
      { t: 'table', head: ['Order', 'Check', 'Why first'], rows: [
        ['1', 'Is there a main verb? (verb slot)', 'A sentence with no main verb is a fragment; this removes many choices at once.'],
        ['2', 'Subject-verb agreement', 'Quick: look at the real subject only.'],
        ['3', 'Tense and time words', 'Time words are clues placed in the sentence.'],
        ['4', 'Voice (be + V3)', 'Decide if the subject does or receives the action.'],
        ['5', 'Connector (noun or clause)', 'Needs the meaning of the whole sentence.'],
        ['6', 'Word form (noun, adjective, adverb)', 'Only the position of the blank matters.'],
        ['7', 'Parallel structure / small errors', 'Check the pairs joined by and / or / but.']
      ] },
      { t: 'h', text: 'Worked examples: each sentence is solved layer by layer' },
      { t: 'combo', items: EX },
      { t: 'tip', text: 'If two choices both look right, do the next step in the list for each one. The wrong choice will break at the first step you have not checked yet.' }
    ]
  });
  window.GRAMMAR_METHOD = METHOD;
})();

