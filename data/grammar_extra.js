/* Extra patterns: reported speech, mixed if-clauses, has/have + V3 together with V2.
   Written for this site (not in the PDFs). Each topic has a mini quiz built from PRACTICE items with the topic name in .quiz */
(function () {
  var T = [
  {
    id: 'reported', title: 'Direct and indirect speech (reported speech)', th: '', quiz: 'Reported speech',
    my: 'တိုက်ရိုက်ပြောခြင်းနှင့် သွယ်ဝိုက်ပြောခြင်း', src: 'Extra pattern (written for this site)',
    bi: [
      ['When the reporting verb is past (said, told, asked), move the tense one step back.', 'ပြောသည့်ကြိယာ (said, told, asked) သည် အတိတ်ဖြစ်လျှင် tense ကို တစ်ဆင့်နောက်ပြန်ရွှေ့ပါ။'],
      ['Change pronouns and time/place words: now -> then, today -> that day, yesterday -> the day before, here -> there.', 'နာမ်စားနှင့် အချိန်/နေရာစကားများကိုလည်း ပြောင်းပါ: now -> then၊ yesterday -> the day before၊ here -> there။'],
      ['Questions become statements: asked + if/whether/wh-word + S + V (no "did", no "?").', 'မေးခွန်းသည် ဝါကျပုံစံ (S + V) ဖြစ်လာပြီး "did" နှင့် "?" မသုံးပါ။'],
      ['Commands: told + object + (not) to V1.', 'အမိန့်: told + object + (not) to V1။']
    ],
    blocks: [
      { t: 'h', text: 'Tense backshift' },
      { t: 'table', head: ['Direct speech', 'Indirect speech'], rows: [
        ['present simple: "I like tea"', 'past simple: he said he liked tea'],
        ['present continuous: "I am working"', 'past continuous: she said she was working'],
        ['present perfect: "I have finished"', 'past perfect: he said he had finished'],
        ['past simple: "I met him"', 'past perfect: she said she had met him'],
        ['will / can / may / must', 'would / could / might / had to'],
        ['past perfect: "I had left"', 'stays past perfect']
      ] },
      { t: 'h', text: 'Other changes' },
      { t: 'table', head: ['Direct', 'Indirect'], rows: [
        ['I, my, we', 'he / she, his / her, they'],
        ['now, today', 'then, that day'],
        ['yesterday, tomorrow', 'the day before, the next day'],
        ['last week, ago', 'the week before, before'],
        ['here, this', 'there, that']
      ] },
      { t: 'h', text: 'Sentence types' },
      { t: 'table', head: ['Type', 'Direct', 'Indirect'], rows: [
        ['Yes/No question', '"Do you like it?"', 'He asked if / whether I liked it.'],
        ['Wh-question', '"Where do you live?"', 'She asked me where I lived. (statement order)'],
        ['Command', '"Close the door."', 'He told me to close the door.'],
        ['Negative command', '"Don\'t be late."', 'He told me not to be late.'],
        ['Suggestion', '"Let\'s go."', 'He suggested going. / He suggested that we go.']
      ] },
      { t: 'warn', text: 'No backshift when the reporting verb is present (He says ...) or the fact is still true (He said that water boils at 100 degrees). Common error: "She asked me where did I live" -> "where I lived".' },
      { t: 'ex', items: [
        { s: 'He said, "I am tired." -> He said that he was tired.' },
        { s: '"I will call you tomorrow," he said. -> He said that he would call me the next day.' },
        { s: '"Will you come tomorrow?" he asked. -> He asked if I would come the next day.' }
      ] }
    ]
  },
  {
    id: 'ifmixed', title: 'If-clause: has/have + V3, had + V3 and mixed patterns', th: '', quiz: 'Mixed if-clause',
    my: 'If ဝါကျ: has/have + V3၊ had + V3 နှင့် ရောနှောပုံစံများ', src: 'Extra pattern (written for this site)',
    bi: [
      ['If + has/have + V3 (present perfect) is a real condition: the action must be finished first. Main clause: will / can / imperative.', 'If + has/have + V3 သည် မှန်ကန်နိုင်သော အခြေအနေဖြစ်ပြီး အရင်ပြီးဆုံးပြီးမှ ရလဒ်ရမည်။ အဓိကဝါကျတွင် will / can / အမိန့်ပုံစံ။'],
      ['Mixed A: If + had + V3 (past cause), would + V1 (result now).', 'Mixed A: If + had + V3 (အတိတ်အကြောင်းရင်း)၊ would + V1 (ယခုရလဒ်)။'],
      ['Mixed B: If + V2 (general condition), would have + V3 (past result).', 'Mixed B: If + V2 (ယေဘုယျအခြေအနေ)၊ would have + V3 (အတိတ်ရလဒ်)။'],
      ['Never use will / would inside the if-clause. "If I would have known" is wrong.', 'If အပိုင်းတွင် will / would မသုံးပါ။ "If I would have known" မှားသည်။']
    ],
    blocks: [
      { t: 'table', head: ['Pattern', 'If-clause', 'Main clause', 'Example'], rows: [
        ['Zero (facts)', 'present', 'present', 'If you heat ice, it melts.'],
        ['Type 1 (real)', 'present simple or has / have + V3', 'will / can / imperative', 'If you have finished, you can leave.'],
        ['Type 2 (unreal now)', 'V2 (were)', 'would + V1', 'If I had money, I would travel.'],
        ['Type 3 (unreal past)', 'had + V3', 'would have + V3', 'If he had studied, he would have passed.'],
        ['Mixed A (past cause, now result)', 'had + V3', 'would + V1', 'If I had studied harder, I would have a better job now.'],
        ['Mixed B (general, past result)', 'V2 (were)', 'would have + V3', 'If he were more careful, he wouldn\'t have made that mistake.']
      ] },
      { t: 'h', text: 'Wish and as if' },
      { t: 'table', head: ['Pattern', 'Meaning', 'Example'], rows: [
        ['wish + V2', 'present wish (not true now)', 'I wish I had more time.'],
        ['wish + had + V3', 'regret about the past', 'I wish I had gone to the party.'],
        ['wish + would + V1', 'complaint / wish for change', 'I wish it would stop raining.']
      ] },
      { t: 'tip', text: 'Look at the time word first: now / these days -> the result uses would + V1. Last year / yesterday -> the result uses would have + V3. Then match the if-clause to the pattern in the table.' }
    ]
  },
  {
    id: 'perfectpast', title: 'has/have + V3 with V2 (since, by the time, first time)', th: '', quiz: 'Present perfect + past simple',
    my: 'has/have + V3 နှင့် V2 ပေါင်းသုံးပုံ', src: 'Extra pattern (written for this site)',
    bi: [
      ['Since + S + V2, S + has/have + V3: from a past point up to now.', 'Since + S + V2၊ S + has/have + V3: အတိတ်အချိန်တစ်ခုမှ ယခုထိ။'],
      ['By the time + S + V2, S + had + V3: the earlier action uses had + V3.', 'By the time + S + V2၊ S + had + V3: ပိုအရင်ဖြစ်သော လုပ်ရပ်သည် had + V3။'],
      ['yesterday / ago / last year / in 2010 -> V2 only, never has + V3.', 'yesterday / ago / last year / in 2010 ဆိုလျှင် V2 သာသုံးပါ၊ has + V3 မသုံးပါ။']
    ],
    blocks: [
      { t: 'table', head: ['Pattern', 'Meaning', 'Example'], rows: [
        ['Since + S + V2, S + has/have + V3', 'from a past point up to now', 'She has lived here since she moved in 2015.'],
        ['It has been + period + since + S + V2', 'time since the event', 'It has been two years since he left.'],
        ['By the time + S + V2, S + had + V3', 'earlier past', 'By the time we arrived, the film had started.'],
        ['It is the first time + S + has/have + V3', 'first experience (now)', 'It is the first time I have seen it.'],
        ['It was the first time + S + had + V3', 'first experience (past)', 'It was the first time I had seen it.'],
        ['After + had + V3, V2', 'order of two past events', 'After he had eaten, he went out.']
      ] },
      { t: 'h', text: 'Time-word rule' },
      { t: 'table', head: ['Time words', 'Tense'], rows: [
        ['yesterday, ago, last year, in 2010, when I was young', 'V2 (past simple)'],
        ['since, for, so far, recently, already, yet, ever, never', 'has / have + V3 (present perfect)'],
        ['by the time, before, after (with two past actions)', 'had + V3 for the earlier action, V2 for the later']
      ] },
      { t: 'warn', text: 'Wrong: "She has gone to the market yesterday." Right: "She went to the market yesterday." Wrong: "It has been two years since he has left." Right: "... since he left."' }
    ]
  }
  ];
  var at = GRAMMAR.map(function (g) { return g.id; }).indexOf('if') + 1;
  T.forEach(function (t, i) { GRAMMAR.splice(at + i, 0, t); });
})();
