/* Reading practice. Passages come from the EE ENG guide and SIMULATION 001 (answers from the key PDFs;
   Passage 4 had no highlighted key, so those answers are worked out and explained here).
   a = index (0-based) of the correct option. */
window.READING = [
{
  id: 'warmup', title: 'Warm-up: the railroad and time', level: 'Main idea', src: 'Guide p.9 (sample question)',
  minutes: 2,
  paras: [
    'The railroad was not the first institution to impose regularity on society, or to draw attention to the importance of precise timekeeping. For as long as merchants have set out their wares at daybreak and communal festivities have been celebrated, people have been in rough agreement with their neighbors as to the time of day. The value of this tradition is today more apparent than ever. Were it not for public acceptance of a single yardstick of time, social life would be unbearably chaotic: the massive daily transfers of goods, services, and information would proceed in fits and starts; the very fabric of modern society would begin to unravel.'
  ],
  gist_my: 'ရထားလမ်းမတိုင်မီကပင် လူအများအတွက် အချိန်ကို သဘောတူလက်ခံထားသော စံနှုန်းတစ်ခုရှိခဲ့သည်။ ထိုသဘောတူညီချက်မရှိလျှင် လူ့အဖွဲ့အစည်းသည် ရှုပ်ထွေးမောင်းမဲ့ဖြစ်နေပါလိမ့်မည်။',
  glossary: [
    ['impose regularity','make something happen in a regular, orderly way','ပုံမှန်အစီအစဉ်တကျဖြစ်စေသည်'],
    ['yardstick','a standard for comparing things','စံနှုန်း၊ တိုင်းတာမှုစံ'],
    ['chaotic','completely disorganised','ရှုပ်ထွေးမောင်းမဲ့သော'],
    ['unravel','come apart; fall into disorder','ပြိုကွဲသွားသည်']
  ],
  questions: [
    { q: 'What is the main idea of the passage?', opts: ['In modern society we must make more time for our neighbors.', 'The traditions of society are timeless.', 'An accepted way of measuring time is essential for the smooth functioning of society.', 'Society judges people by the times at which they conduct certain activities.'], a: 2,
      why: 'The last sentence says that without public acceptance of a single standard of time, social life would be chaotic. So the main idea is that an accepted way of measuring time is essential.' }
  ]
},
{
  id: 'vaccine', title: 'Edible vaccines', level: 'Science article', src: 'Guide p.9-12 (key available)',
  minutes: 8,
  paras: [
    'Getting a vaccination could soon be as simple as eating a potato. Researchers at the University of Maryland, led by Dr. Carol Tacket, are developing edible vaccines that could grant immunity against some diseases.',
    'To be inoculated against a virus, bacterium or toxin, the antibodies of our immune systems must be exposed to the illness-bearing agent, or pathogen. Vaccines work by exposing the body to pathogens that have been killed or disarmed. Once sensitized, antibodies can mobilize rapidly against familiar enemies by binding to them and preventing their growth and activity.',
    'Most vaccines are delivered in shots or pills but the new one will be incorporated in raw potatoes. The potatoes have been genetically engineered to produce the key piece of an E. coli toxin that causes acute diarrhea. As the spuds move through the intestinal system and are digested, the toxin fragment is released and exposed to the immune system, which then generates antibodies against the toxin.',
    'Dr. Tacket\'s group is waiting for approval from the FDA to test the potato vaccine on humans: it has already been tested successfully in mice. The next step would be to genetically modify bananas to carry vaccines, because raw bananas taste better than raw potatoes.',
    'The potential for edible vaccines is tremendous especially in developing countries whereas current vaccines are expensive to produce, store, transport, administer and edible vaccine could be grown where it is needed in the quantity desired and requires considerably less medical expertise to use.'
  ],
  note: 'Small typos of the sheet (e.g. "are developing", "to produce") were corrected for readability.',
  gist_my: 'အစားအသောက်ဖြစ်သော အာလူးထဲတွင် ရောဂါကာကွယ်ဆေးကို ထည့်သွင်းထုတ်လုပ်ရန် သုတေသီများ လေ့လာနေကြသည်။ အာလူးကို စားလိုက်သောအခါ ဆေးပါဝင်မှုကြောင့် ကိုယ်ခံအားစနစ်က ပိုးမွှားကို တုံ့ပြန်ရန် သင်ယူသည်။ ဤနည်းသည် ဈေးသက်သာပြီး လေ့ကျင့်ထားသောဆရာဝန်မလိုအပ်သဖြင့် ဖွံ့ဖြိုးဆဲနိုင်ငံများအတွက် အထူးအကျိုးရှိသည်။',
  glossary: [
    ['grant immunity','give protection against a disease','ရောဂါခုခံအားပေးသည်'],
    ['inoculate','protect by giving a vaccine','ကာကွယ်ဆေးထိုးသည်'],
    ['pathogen','a germ that causes disease','ရောဂါပိုးမွှား'],
    ['disarmed','made harmless; weakened','အားနည်းအောင်ပြုလုပ်ထားသော'],
    ['mobilize','get ready to act','စုစည်းလှုပ်ရှားသည်'],
    ['antibody','a protein made by the body to fight germs','ပဋိပစ္စည်း'],
    ['incorporate','include as part of something','ထည့်သွင်းပေါင်းစပ်သည်'],
    ['spud','(informal) potato','အာလူး'],
    ['intestinal','of the intestines','အူလမ်းကြောင်းဆိုင်ရာ'],
    ['tremendous','very great','အလွန်ကြီးမားသော'],
    ['administer','give (a medicine)','ပေးသည်၊ ထိုးသည်'],
    ['expertise','special skill or knowledge','ကျွမ်းကျင်မှု']
  ],
  questions: [
    { q: 'The most suitable title for this article is ____ .', opts: ['Vaccines and Diseases', 'Antibodies and Pathogens', 'Immune Systems', 'Edible Vaccines'], a: 3, why: 'The whole passage describes vaccines that are eaten (potato, banana). The other titles are only topics mentioned inside.' },
    { q: 'The word "grant" (line 3) means ____ .', opts: ['block', 'extend', 'provide', 'retard'], a: 2, why: '"grant immunity" = give / provide immunity. Block and retard are opposites in direction.' },
    { q: 'The word "disarmed" (line 6) is closest in meaning to ____ .', opts: ['weakened', 'divided', 'identified', 'removed'], a: 0, why: 'Pathogens that have been "killed or disarmed" are made unable to cause illness: weakened.' },
    { q: 'The word "which" (line 12) refers to the ____ .', opts: ['intestinal system', 'toxin fragment', 'immune system', 'potato vaccine'], a: 2, why: '"... exposed to the immune system, which then generates antibodies" - the immune system generates antibodies.' },
    { q: 'The difference between the new vaccine and traditional ones is that the new one ____ .', opts: ['is administered as pills', 'is in the form of food', 'must be injected', 'is exposed to immune system'], a: 1, why: 'Most vaccines are given in shots or pills, but the new one is incorporated in raw potatoes (food).' },
    { q: 'Which is correct concerning the new vaccine according to the article?', opts: ['It has not been tested on human yet.', 'It has been genetically engineered into bananas.', 'The FDA has not approved animal testing.', 'The FDA has agreed to have it tested on humans.'], a: 0, why: 'The group is still waiting for FDA approval to test on humans; it has only been tested in mice. Bananas are only a next step.' },
    { q: 'The paragraph that explains how the new vaccine works is ____ .', opts: ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], a: 1, why: 'Paragraph 3 describes the potato, the toxin fragment being released and the immune system producing antibodies.' },
    { q: 'The paragraph that emphasizes the benefits of the new vaccine is ____ .', opts: ['Paragraph 1', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], a: 3, why: 'Paragraph 5 says the potential is tremendous: cheaper, local, needs less expertise.' },
    { q: 'All these pairs of words share similar meaning EXCEPT ____ .', opts: ['vaccinate - inoculate', 'potatoes - spuds', 'administered - delivered', 'mobilize - expose'], a: 3, why: 'Mobilize (prepare to act) and expose (make open to) are not similar. The other pairs are synonyms.' },
    { q: 'The purpose of genetically modifying bananas to carry vaccines is ____ .', opts: ['to disguise the unpleasant taste of the vaccine', 'to make it easier to digest', 'because bananas are cheaper and easier to grow than potatoes', 'because people are more likely to eat raw bananas than raw potatoes'], a: 3, why: 'The text gives the reason: "because raw bananas taste better than raw potatoes", so people are more likely to eat them raw.' },
    { q: 'The author suggests that this new vaccine is especially beneficial to developing countries because it ____ .', opts: ['can be produced locally', 'does not cause allergies', 'is very effective', 'has no side effects'], a: 0, why: '"could be grown where it is needed in the quantity desired" = produced locally.' },
    { q: 'The vaccine mentioned in this passage specifically prevents ____ .', opts: ['indigestion', 'skin diseases', 'diarrhea', 'food allergies'], a: 2, why: 'The potato carries a piece of an E. coli toxin that causes acute diarrhea.' },
    { q: 'If the new vaccine requires considerably less medical expertise to use, it can save money on ____ .', opts: ['production', 'storage', 'transportation', 'administration'], a: 3, why: '"administer" = give the vaccine. Less expertise is needed to give it, so administration costs fall.' }
  ]
},
{
  id: 'exam', title: 'Examination instructions', level: 'Notice / rules', src: 'Simulation 001 Passage 1 (key available)',
  minutes: 5,
  paras: [
    '1. You must bring your college membership card to each and every session of the examination and place it on your desk or you are not allowed to take the exam.',
    '2. You are not allowed to have any books or papers with you in the examination room except your timetable, membership card, and the appropriate question paper and answer paper as supplied by the supervisor. Rough paper will be provided, but must not be taken away.',
    '3. You are not allowed to keep coats or bags near you during the examination. You will be told to put these in a corner of the room, after you have found your desk.',
    '4. If you are late, you will be given a question paper at the supervisor\'s discretion; if you are more than thirty minutes late, you will not be given a question paper.',
    '5. If you want extra paper, do not move from your desk or stand up; put your hand up and wait for an invigilator to come to you.',
    '6. If you want to leave the room, you may only do so and return under supervision and at the discretion of the supervisor.',
    '7. When you have finished, leave your papers on the desk and ask an invigilator for permission to leave. Walk out quietly. Do not stand and wait outside the room. Leave the area immediately.'
  ],
  gist_my: 'စာမေးပွဲခန်းမထဲတွင် ကောလိပ်အဖွဲ့ဝင်ကတ်ကို မဖြစ်မနေ ယူလာရမည်။ စာအုပ်၊ အိတ်၊ ကုတ်အင်္ကျီများကို မယူလာရ။ မိနစ်၃၀ကျော် နောက်ကျလျှင် မေးခွန်းလွှာမရ။ ထပ်တောင်းလိုပါက လက်မြှောက်ပြီး စောင့်ရမည်။ ပြီးလျှင် စာရွက်များကို စားပွဲပေါ်ထားခဲ့၍ ခွင့်တောင်းပြီး တိတ်ဆိတ်စွာ ထွက်ခွာရမည်။',
  glossary: [
    ['membership card','a card that shows you belong to the college','အဖွဲ့ဝင်ကတ်'],
    ['timetable','a schedule','အချိန်ဇယား'],
    ['supervisor','the person in charge of the exam room','ကြီးကြပ်သူ'],
    ['invigilator','a person who watches students during an exam','စာမေးပွဲကြီးကြပ်သူ'],
    ['rough paper','paper for notes and drafts','မှတ်စုစာရွက်'],
    ['at the discretion of','depending on the decision of','...၏ ဆုံးဖြတ်ချက်အပေါ် မူတည်၍'],
    ['examinee / examiner','one who takes the exam / one who gives or marks it','စာမေးပွဲဖြေသူ / စာမေးပွဲမေးသူ']
  ],
  questions: [
    { q: 'When are you NOT allowed to take the examination?', opts: ['If you leave the room without supervision.', 'If you bring your bag or coat with you.', 'If you forget your membership card.', 'If you are ten minutes late.'], a: 2, why: 'Rule 1: without the membership card on your desk you are not allowed to take the exam. Ten minutes late is acceptable (up to thirty minutes).' },
    { q: 'Which of the following are examinees permitted to bring in the exam room?', opts: ['Exam schedule', 'Rough paper', 'Question sheet', 'Identification card'], a: 0, why: 'Rule 2 lists "your timetable" (exam schedule) and the membership card. Rough paper, question paper and answer paper are supplied by the supervisor. (The key marks option 1.)' },
    { q: 'When is the decision made by the supervisor?', opts: ['When you want to leave during the last ten minutes.', 'When you want to go out for a short time.', 'When you are more than thirty minutes late.', 'When you want to leave during the first forty-five minutes.'], a: 1, why: 'Rule 6: leaving the room and returning is "at the discretion of the supervisor", i.e. when you want to go out for a short time.' },
    { q: 'Which of the following is NOT against the rules?', opts: ['Going to the supervisor for extra paper.', 'Keeping your bag with you while taking the exam.', 'Giving your ANSWER paper to an invigilator.', 'Leaving your rough paper on the desk at the end.'], a: 3, why: 'Rough paper "must not be taken away", so leaving it on the desk follows the rules. Going to the supervisor breaks rule 5 (do not move); bags break rule 3.' },
    { q: 'If you finish during the last ten minutes, you must ____ .', opts: ['wait until the end and leave', 'quietly leave the room', 'wait until the end and ask if you can leave', 'leave your papers on the desk and ask if you can leave'], a: 3, why: 'Rule 7: leave your papers on the desk and ask an invigilator for permission to leave.' },
    { q: 'If you want extra paper, you must ____ .', opts: ['stand up and wait for an invigilator', 'wait until the end and leave', 'move yourself from your desk', 'raise your hand and wait for an invigilator'], a: 3, why: 'Rule 5: do not move or stand up; put your hand up and wait.' },
    { q: 'Which of the following is a necessary thing that the examinees must bring in the room?', opts: ['coats or bags', 'dictionary', 'calculator', 'college membership card'], a: 3, why: 'Rule 1: you must bring the college membership card.' }
  ]
},
{
  id: 'kangaroo', title: 'Desert animals and the kangaroo rat', level: 'Science', src: 'Simulation 001 Passage 2 (key available)',
  minutes: 6,
  paras: [
    'While most desert animals will drink water if confronted with it, for many of them the opportunity never comes. Yet all living things must have water, or they will expire. The herbivores find it in desert plants. The carnivores slake their thirst with the flesh and blood of living prey. One of the most remarkable adjustments, however, has been made by the tiny kangaroo rat, who not only lives without drinking but subsists on a diet of dry seeds containing about 5% free water. Like other animals, he has the ability to manufacture water in his body by a metabolic conversion of carbohydrates. But he is notable for the parsimony with which he conserves his small supply by every possible means, expending only minuscule amounts in his excreta and through evaporation from his respiratory tract.'
  ],
  gist_my: 'သဲကန္တာရတိရစ္ဆာန်များသည် ရေသောက်ခွင့်မရလေ့ရှိသော်လည်း အပင်များ၊ သားကောင်၏ သွေးသား စသည်တို့မှ ရေဓာတ်ရကြသည်။ ကင်ဂါရူကြွက်ကလေးမှာမူ ရေလုံးဝမသောက်ဘဲ အစေ့ခြောက်ကို စားကာ ကိုယ်ထဲတွင် ရေကိုထုတ်လုပ်ပြီး ရေကို အလွန်ချွေတာသုံးစွဲသောကြောင့် ထူးခြားသည်။',
  glossary: [
    ['expire','die; come to an end','သေဆုံးသည်'],
    ['herbivore','an animal that eats plants','အပင်စားသတ္တဝါ'],
    ['carnivore','an animal that eats meat','သားစားသတ္တဝါ'],
    ['omnivore','an animal that eats both plants and meat','အသားအရွက်စုံစားသတ္တဝါ'],
    ['slake (thirst)','satisfy; quench','ရေငတ်ပြေစေသည်'],
    ['prey','an animal hunted for food','အမဲလိုက်ခံရသောသတ္တဝါ'],
    ['subsist on','stay alive by eating or drinking','...ဖြင့် အသက်ရှင်သန်သည်'],
    ['parsimony','extreme care in using something; thrift','အလွန်ချွေတာမှု'],
    ['excreta','waste from the body','စွန့်ပစ်ပစ္စည်း'],
    ['minuscule','extremely small','အလွန်သေးငယ်သော'],
    ['respiratory tract','the passage used for breathing','အသက်ရှူလမ်းကြောင်း']
  ],
  questions: [
    { q: 'What is the main idea of this passage?', opts: ['Herbivores and carnivores live together in the desert.', 'Animals who do not drink water can exist in desert.', 'Animals\' metabolic systems are complex.', 'The kangaroo rat is unique.'], a: 3, why: 'The passage moves from desert animals in general to "one of the most remarkable adjustments": the kangaroo rat. The key marks option 4.' },
    { q: 'The word "expire" is closest in meaning to ____ .', opts: ['become ill', 'grow', 'survive', 'die'], a: 3, why: '"all living things must have water, or they will expire" = die.' },
    { q: 'Which of the following is NOT a source of water for the desert animals?', opts: ['Desert plants', 'Streams', 'Metabolic conversion of carbohydrates in the body', 'The blood of other animals'], a: 1, why: 'Plants (herbivores), blood and flesh of prey (carnivores) and metabolic conversion are mentioned; streams are not.' },
    { q: 'The word "it" (in "The herbivores find it in desert plants") refers to ____ .', opts: ['Water', 'A living thing', 'The opportunity', 'The desert'], a: 0, why: 'The sentence before says all living things must have water; herbivores find water in desert plants.' },
    { q: 'The author states that the kangaroo rat is known for all of the following EXCEPT ____ .', opts: ['Breathing slowly and infrequently', 'Living without drinking water', 'The economy with which it uses available water', 'Manufacturing water internally'], a: 0, why: 'Breathing is mentioned only as a place where tiny amounts of water are lost (evaporation); slow breathing is not stated.' },
    { q: 'The word "slake" could best be replaced by which of the following?', opts: ['understand', 'enjoy', 'satisfy', 'ignore'], a: 2, why: 'To slake thirst = to satisfy / quench thirst.' },
    { q: 'It is implied by the author that desert animals can exist with little or no water because of ____ .', opts: ['Less need for water than other animals', 'Many opportunities for them to find water', 'Their ability to eat plants', 'Their ability to adjust to desert environment'], a: 3, why: 'The text calls the kangaroo rat\'s way of life "one of the most remarkable adjustments": animals adapt to the environment.' },
    { q: 'According to the author, which of the following is NOT mentioned as a characteristic of the kangaroo rat?', opts: ['Nocturnal', 'Herbivorous', 'Doesn\'t drink water', 'Small'], a: 0, why: 'The text says tiny (small), lives without drinking, and eats dry seeds (a plant diet). Nocturnal (active at night) is never mentioned. The opposite is diurnal.' }
  ]
},
{
  id: 'winterthur', title: 'The Winterthur museum', level: 'Culture / arts', src: 'Simulation 001 Passage 3 (no key printed; answers worked out)',
  minutes: 9,
  paras: [
    'The Winterthur museum is a collection and a house. There are many museums devoted to the decorative arts and many house museums, but rarely in the United States is a great collection displayed in a great country house. Passing through successive generations of a single family, Winterthur has been a private estate for more than a century. Even after the extensive renovations made to it between 1929 and 1931, the house remained a family residence. This fact is of importance to the atmosphere and effect of the museum.',
    'The impression of a lived-in house is apparent to the visitors: the rooms look as if they were vacated only a short while ago, whether by the original owners of the furniture or the most recent residents of the house can be a matter of personal interpretation. Winterthur remains, then, a house in which a collection of furniture and architectural elements has been assembled. Like an English country house, it is an organic structure; the house, as well as the collection and manner of displaying it to the visitors, has changed over the years. The changes have coincided with developing concepts of the American arts, increased knowledge on the part of collectors and students, and a progression toward the achievement of a historical effect in a period-room display. The rooms at Winterthur have followed this current, yet still retain the character of a private house.',
    'The concept of a period room as a display technique has developed gradually over the years in an effort to present works of art in a context that would show them to greater effect and would give them more meaning for the viewer. Comparable to the habitat group in a natural history museum, the period room represents the decorative arts in a lively and interesting manner and provides an opportunity to assemble objects related by style, date or place of manufacture.'
  ],
  note: 'Typos in the sheet (e.g. "have following", "and opportunity") were corrected for readability.',
  gist_my: 'Winterthur သည် စုဆောင်းထားသော ပစ္စည်းများနှင့် အိမ်တစ်လုံးပါ ဖြစ်သည်။ မိသားစုနေအိမ်အဖြစ် ဆက်လက်ရှိနေသဖြင့် ပြတိုက်ထက် လူနေအိမ်ဟု ခံစားရသည်။ အချိန်ကာလအလိုက် ပြပွဲပုံစံ ပြောင်းလဲလာပြီး "period room" ဟူသော နည်းဖြင့် ပစ္စည်းများကို ပုံစံ၊ ခေတ်၊ ထုတ်လုပ်ရာနေရာ တူညီစွာ စုပြထားသည်။',
  glossary: [
    ['be devoted to','be given completely to; specialise in','...အတွက်သီးသန့်ဖြစ်သော'],
    ['decorative arts','arts of design such as furniture and ceramics','အလှဆင်ပန်းချီနှင့် အိမ်သုံးပစ္စည်းအနုပညာ'],
    ['successive','following one after another','ဆက်တိုက်ဖြစ်ပေါ်သော'],
    ['renovation','repair and improvement of a building','ပြုပြင်မွမ်းမံမှု'],
    ['vacate','leave empty','ပြောင်းရွှေ့ထွက်ခွာသည်'],
    ['assemble','bring together','စုစည်းသည်'],
    ['organic structure','something that grows and changes naturally','သဘာဝအတိုင်း ပြောင်းလဲကြီးထွားသောဖွဲ့စည်းပုံ'],
    ['coincide with','happen at the same time as','...နှင့် တစ်ပြိုင်နက်ဖြစ်သည်'],
    ['period room','a room arranged to show a historical time','ခေတ်ပြခန်း'],
    ['habitat group','a display of an animal in its natural setting','သဘာဝပတ်ဝန်းကျင်တွင် ပြသထားသော တိရစ္ဆာန်ပြခန်း']
  ],
  questions: [
    { q: 'What does the passage mainly discuss?', opts: ['Historical furniture contained in Winterthur', 'How Winterthur compares to an English country house', 'Elements that make Winterthur an unusual museum', 'The reason that Winterthur was redesigned'], a: 2, why: 'The passage says Winterthur is both a collection and a lived-in house, its rooms change, and it uses period rooms: what makes it unusual as a museum.' },
    { q: 'The phrase "devoted to" is closest in meaning to ____ .', opts: ['Surrounded by', 'Successful with', 'Sentimental about', 'Specializing in'], a: 3, why: '"museums devoted to the decorative arts" = museums that specialise in the decorative arts.' },
    { q: 'What happened at Winterthur between 1929 and 1931?', opts: ['The owners moved out.', 'The estate became a museum.', 'The old furniture was replaced.', 'The house was repaired.'], a: 3, why: '"the extensive renovations made to it between 1929 and 1931" = repair and improvement; it stayed a family residence.' },
    { q: 'What does the author mean by "The impression of the lived-in house is apparent to the visitors"?', opts: ['Winterthur does not look like a typical museum.', 'Winterthur is very old.', 'Few people visit Winterthur.', 'The furniture at Winterthur looks comfortable.'], a: 0, why: 'Visitors feel the rooms were left only a short while ago, i.e. it feels like a home, unlike an ordinary museum.' },
    { q: 'The word "assembled" is closest in meaning to ____ .', opts: ['fundamentally changed', 'appreciated', 'brought together', 'summoned'], a: 2, why: 'A collection that "has been assembled" has been brought together.' },
    { q: 'The word "it" (in "the manner of displaying it to the visitors") refers to ____ .', opts: ['collection', 'English country house', 'Winterthur visitor', 'visitor'], a: 0, why: '"the collection and manner of displaying it" - what is displayed to visitors is the collection.' },
    { q: 'The word "developing" (concepts) is closest in meaning to ____ .', opts: ['exhibiting', 'traditional', 'informative', 'evolving'], a: 3, why: '"developing concepts" = concepts that are changing and growing, i.e. evolving.' },
    { q: 'According to the passage, objects in a period room are related by all of the following EXCEPT ____ .', opts: ['place of manufacture', 'past ownership', 'style', 'date'], a: 1, why: 'The last sentence lists style, date, place of manufacture. Past ownership is not given.' },
    { q: 'What is the relationship between the two paragraphs in this passage?', opts: ['The second paragraph explains a philosophy of art appreciation that contrasts with the philosophy explained in the first.', 'Each paragraph describes a different approach to the display of objects in a museum.', 'Each paragraph describes a different historical period.', 'The second paragraph explains a term that was mentioned in the first paragraph.'], a: 3, why: 'The first part mentions "period-room display"; the last paragraph then explains the concept of a period room.' },
    { q: 'Which of the following excerpts from the passage explains why displays at Winterthur have changed?', opts: ['The Winterthur museum is a collection and a house. There are many museums devoted to the decorative arts ...', 'The changes have coincided with developing concepts of the American arts, increased knowledge on the part of collectors and students, and a progression toward the achievement of a historical effect in a period-room display.', 'Like an English country house, it is an organic structure; the house, as well as the collection and manner of displaying it, has changed over the years.', 'The concept of a period room as a display technique has developed gradually over the years ...'], a: 1, why: 'Option 2 gives the reasons for the changes: new ideas in American arts, more knowledge and the aim of historical effect. Option 3 only says that they changed.' }
  ]
}
];
