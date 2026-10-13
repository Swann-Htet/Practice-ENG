/* Grammar patterns taken from "GRAMMAR EE ENG CONTENT 65 2025.pdf", the VOCAB sheet (discourse markers) and the
 " EE ENG" guide + SIMULATION 001 (with key). Block types: p, formula, ul, ex, table, tip, warn */
window.GRAMMAR = [
{
 id: 'format', title: 'Exam overview & strategy',
 my: 'စာမေးပွဲပုံစံနှင့် ဗျူဟာ',
 src: 'Guide p.2, Grammar p.1',
 blocks: [
 {t:'p', text:'The Exit Examination for Communicative English has about 100 items and lasts 3 hours. You pass with 60 items or more (60%). The online and on-site versions differ, and every student gets a different random set from a large item bank, so understanding the pattern matters more than memorising old items.'},
 {t:'table', head:['Part','Section','Items','Notes'], rows:[
 ['1 Listening & Speaking','Conversations, Talks, Speaking (dialogue completion)','about 25 in total','Each recording is spoken TWICE; the script is not printed.'],
 ['2 Grammar & Written Expressions','Error Identification, Grammar in Context (incomplete sentence), Written Expressions (text completion)','about 50','The biggest part. Learn tense, agreement, voice, connectors, word form.'],
 ['3 Reading','Passages 1 to 3','about 25','Main idea, vocabulary in context, reference, EXCEPT and inference questions.']
 ]},
 {t:'tip', text:'Spend the first look on the choices. If the choices are different forms of one word, it is a word-form question. If they are different tenses, it is tense. If they are connectors, translate the sentence and choose by meaning.'},
 {t:'ul', items:[
 'Incomplete Sentence: pick the choice that completes one sentence (word form, agreement, tense, voice, connector, if-clause).',
 'Error Identification: four underlined parts; pick the one that is INCORRECT. Typical errors: wrong word form, S-V agreement, tense/voice, wrong connector, parallel structure.',
 'Text Completion: a passage with numbered blanks; use the whole passage context (time, singular/plural, meaning).'
 ]}
 ]
},
{
 id: 'pos', title: 'Part of speech and word form',
 my: 'စကားလုံးအမျိုးအစား',
 src: 'Grammar p.2, p.3, p.19',
 blocks: [
 {t:'formula', text:'N. + V. (Adj. / Adv.)', note:'First decide the word class: translate the word; if you cannot, read the suffix; the best method is to use BOTH the suffix and the meaning.'},
 {t:'p', text:'Word-form questions give four forms of the same root (for example mobilizes / mobile / mobility / mobilization). Find what the blank needs by looking at its position.'},
 {t:'table', head:['Position of the blank','Needs','Example'], rows:[
 ['a / an / the + ____ + N', 'Adjective', 'a beautiful teacher'],
 ['a / an / the + ____ + Adj. + N', 'Adverb (modifies the adjective)', 'a really beautiful teacher'],
 ['S + ____ + O (verb slot)', 'Verb, in the right tense and agreement', 'The commander mobilizes the troops'],
 ['the ____ of / an ____ to / an ____ of', 'Noun', 'the toxicity of the mixture; an adjustment to the schedule; an explanation of the tasks'],
 ['V. to be / linking verb + ____', 'Adjective', 'The flowers smell sweet']
 ]},
 {t:'h', text:'Adjective suffixes (from the sheet)'},
 {t:'p', text:'-ary -al -able -ent -ant -ical -ic -ible -ish -ive -less -like -ly -ing -y -ed -ous -ful -some'},
 {t:'h', text:'Adverb rule'},
 {t:'formula', text:'Adj. + ly = Adv.', note:'Exception: good (adj.) becomes well (adv.). Careful: some words ending in -ly are adjectives (friendly, lovely, costly).'},
 {t:'ex', items:[
 {s:'An adjustment to Linda\'s schedule has to be made.', n:'noun after the article "An"'},
 {s:'The boss provided an explanation of the tasks.', n:'noun after "an"'},
 {s:'Each worker is giving an assignment that he or she must complete.', n:'noun, because an + ____ + that-clause'},
 {s:'Human beings have a long record of communicating knowledge and belief.', n:'"belief" (noun) is parallel to "knowledge"'},
 {s:'Perhaps the most admirable part ... has been a general reluctance to call it a religious war.', n:'a general + noun'}
 ]},
 {t:'warn', text:'Word-form error pattern: the underlined word is an adjective where a noun is needed (reluctant -> reluctance, tradition -> traditional, deficient -> deficiency, dehydrate -> dehydration, social -> society).'}
 ]
},
{
 id: 'svo', title: 'Sentence structure (S + V + O)',
 my: 'ဝါကျဖွဲ့စည်းပုံ (ပုဒ်ကြီး၊ ကြိယာ၊ ပစ္စည်း)',
 src: 'Grammar p.2-3',
 blocks: [
 {t:'formula', text:'Subject (S.) + Verb / Predicate (V.) + Object (O.)', note:'A well-built sentence is clear, concise and grammatically correct. These three parts are the base of every pattern in the exam.'},
 {t:'table', head:['Part','Meaning'], rows:[
 ['Subject', 'The person, place, thing or idea that does or is described in the sentence.'],
 ['Predicate', 'The part that tells what the subject does or is, including the verb.'],
 ['Object', 'The word or word group that receives the action of the verb.']
 ]},
 {t:'ex', items:[
 {s:'John ate an apple.'}, {s:'The cat chased the mouse.'}, {s:'She reads a book.'},
 {s:'They built a house.'}, {s:'The teacher explained the lesson.'}
 ]},
 {t:'tip', text:'In "Incomplete sentence" questions, always ask first: is the blank the verb slot? If the sentence already has a main verb, the blank is not a main verb.'},
 {t:'ex', items:[
 {s:'Mountainous North Korea has access to mineral ____ (that more successful neighbor in the south lacks).', n:'S + V + O, then a relative clause modifies the object'},
 {s:'China, ____ , is now the world\'s second-largest economy.', n:'the real verb is "is": the blank must be a modifier "which used to be ..."'}
 ]}
 ]
},
{
 id: 'phrase', title: 'Noun phrases, modifiers and sentences',
 my: 'နာမ်စုနှင့် ဝါကျ ခွဲခြားခြင်း',
 src: 'Grammar p.4-7',
 blocks: [
 {t:'p', text:'A noun phrase is a noun with its modifiers. It is NOT a sentence because it has no main verb. A sentence needs S + V. Modifiers of a noun come in four patterns.'},
 {t:'table', head:['Pattern','Meaning','Examples'], rows:[
 ['a / an / the + Adj. + N', 'adjective before the noun', 'a beautiful teacher; an interesting writer; The diligent worker; The curious child'],
 ['preposition + noun', 'prepositional phrase after the noun', 'the book on the table; Many people in Thailand; Many flowers in the garden; An old armchair beside the fireplace'],
 ['who / which / that + verb', 'relative clause', 'P\'Folk, who is my teacher; The man whom I love; The house that overlooks the ocean'],
 ['V.ing / V.3', 'participle phrase', 'The boys running toward us; a student punished by his teacher; A car, damaged in the accident']
 ]},
 {t:'h', text:'Noun phrase vs sentence'},
 {t:'formula', text:'Noun phrase: N + modifier (no main verb) Sentence: N + modifier + V + (O)'},
 {t:'ex', items:[
 {s:'Lisa is an interesting writer.', n:'sentence (is = verb)'},
 {s:'The book on the table is English.', n:'sentence (subject "The book on the table", verb "is")'},
 {s:'They won the championship with sheer perseverance.', n:'sentence'},
 {s:'The love behind their relationship was evident.', n:'sentence'},
 {s:'The house that overlooks the ocean is my dream home.', n:'sentence'},
 {s:'This is the restaurant where we had our first date.', n:'sentence'},
 {s:'The team, celebrating their victory, danced and cheered in the locker room.', n:'sentence'},
 {s:'The painting, inspired by nature\'s beauty, captured the essence of tranquility.', n:'sentence'}
 ]},
 {t:'h', text:'Noun phrases (not sentences) from the sheet'},
 {t:'ul', items:[
 'The diligent worker', 'Many flowers in the garden', 'The house that overlooks the ocean', 'A car, damaged in the accident',
 'The team, celebrating their victory', 'The curious child', 'An old armchair beside the fireplace', 'We watched the birds in the sky (= sentence)',
 'He painted a masterpiece on the canvas (= sentence)', 'The person whom you met yesterday is my cousin (= sentence)',
 'They brought us a delicious cake, baked to perfection (= sentence)', 'The logic behind his argument was sound (= sentence)',
 'The old man, walking slowly, admired the sunset over the horizon (= sentence)', 'The artist painting passionately',
 'The athletes, training rigorously, prepared for the upcoming competition (= sentence)', 'The number of students in the classroom',
 'Everything from Thai food to vegan to complex French macarons', 'The boy punished by the teacher is my son (= sentence)',
 'The guys who ran toward us', 'your essay about Thailand\'s economy'
 ]},
 {t:'tip', text:'To find the true subject of a long sentence, cross out the modifiers (prepositional phrase, relative clause, V-ing / V3 phrase). What is left is S + V + O.'}
 ]
},
{
 id: 'connectors', title: 'Connectors and discourse markers',
 my: 'ဝါကျချိတ်ဆက်စကားလုံးများ',
 src: 'Grammar p.6; Vocab p.13-18',
 blocks: [
 {t:'p', text:'This topic is used in almost every exam (the sheet says it appears in every version). Decide by MEANING first, then by what follows the blank: a noun/noun phrase, or a clause (S + V).'},
 {t:'table', head:['Meaning','+ NOUN (phrase)','+ CLAUSE (S + V)','Burmese'], rows:[
 ['despite / although (contrast)', 'despite, in spite of', 'although, though, even though, even if', 'ဖြစ်သော်လည်း'],
 ['because (cause)', 'because of, due to, owing to, thanks to, as a result of, on account of', 'because, since, for, as, seeing that, now that', '...ကြောင့်'],
 ['purpose', 'to / in order to / so as to + V1', 'so that, in order that + S + V', '...ရန်၊ ...အောင်'],
 ['example', 'such as + N / V-ing', 'for example, for instance + sentence', 'ဥပမာ'],
 ['time / contrast', 'while, meanwhile, whereas', 'while + S + V', '...နေစဉ်၊ ...ဆိုသော်လည်း'],
 ['no matter', 'no matter what + N, S + V', 'no matter how + Adj., S + V', 'ဘာပင်ဖြစ်စေ']
 ]},
 {t:'h', text:'Meaning groups (all from the sheet)'},
 {t:'table', head:['Group','Words','Burmese meaning'], rows:[
 ['Addition','besides, moreover, furthermore, in addition','ထို့အပြင်၊ ထို့ပြင်'],
 ['Contrast','still, but, yet, however, nevertheless, nonetheless','သို့သော်၊ ဒါပေမယ့်'],
 ['Concession','although, though, even though, even if','ဖြစ်သော်လည်း'],
 ['Result','so, thus, hence, therefore, thereby, consequently, accordingly','ထို့ကြောင့်'],
 ['Contrast + noun','despite, in spite of','...ဖြစ်သော်လည်း (+ နာမ်)'],
 ['Purpose + clause','so that, in order that','...ဖြစ်စေရန် (+ S+V)'],
 ['Purpose + verb','to, in order to, so as to','...ရန်အတွက် (+ V)'],
 ['Opposite view','for all that, on the other hand','သို့သော်လည်း၊ အခြားတစ်ဖက်မှ'],
 ['Cause + noun','due to, owing to, thanks to, as a result of, on account of, because of','...ကြောင့် (+ နာမ်)'],
 ['Cause + clause','because, since, for, as, seeing that, now that','...ဖြစ်သောကြောင့် (+ S+V)'],
 ['Simultaneous / contrast','while, meanwhile, whereas','...နေစဉ်၊ ...ဆိုသော်လည်း'],
 ['Similarity','likewise, similarly, correspondingly','အလားတူပင်'],
 ['Otherwise','or, or else, otherwise, if not','မဟုတ်ပါက'],
 ['Example','such as + N ; for example, for instance + N/clause','ဥပမာ၊ ...ကဲ့သို့သော'],
 ['No matter','no matter what + N, S+V ; no matter how + Adj., S+V','ဘာပင်ဖြစ်စေ'],
 ['Precaution','in case / just in case','...ဖြစ်လာမည်ကို စောင့်ရှောက်၍']
 ]},
 {t:'h', text:'Pairs and look-alikes'},
 {t:'table', head:['Pattern','Meaning','Example'], rows:[
 ['either ... or ...', 'one or the other', 'Either he or she cooks dinner.'],
 ['neither ... nor ...', 'not this and not that', 'Neither this driver nor the other one was going fast.'],
 ['not only ... but also ...', 'both (and more)', 'She not only plays well but also writes music.'],
 ['apparently', 'clearly / it seems', 'Apparently something had been discussed in her absence.'],
 ['As a result (, S+V) vs As a result of + N', 'sentence-linker vs preposition', 'You didn\'t pass. As a result, you have to retake it. / As a result of our studies, we found...'],
 ['Instead (adv.) vs Instead of + N / V-ing', 'adverb vs preposition', 'Instead of having to cook dinner, let\'s eat out.'],
 ['because, since = reason', 'two clauses that are cause and effect', 'You should bring an umbrella because it is raining.'],
 ['although = contrast', 'the second clause is the surprise', 'Although the car was destroyed, no one was injured.'],
 ['moreover, furthermore = adds', 'a semicolon or full stop, then the connector + comma', 'The car looked good; moreover, the price was right.'],
 ['however = contrast', 'a semicolon or full stop, then however + comma', 'The movie got good reviews; however, it was very long.']
 ]},
 {t:'warn', text:'Typical error items: "Due to the fact that people are different, they\'re very important ..." ; "Despite of the fact that" (wrong "of") ; "Though ... but ..." (two connectors for one contrast) ; "Because of Nokia still commands ..." (Because of + clause) ; "Instead spending" (should be Instead of spending) ; "As a result of students are expected" (As a result of + clause).'},
 {t:'h', text:'Procedure'},
 {t:'ul', items:[
 'Translate the whole sentence and decide the relationship: cause, contrast, addition, result, purpose, condition.',
 'Remove choices that do not match the meaning.',
 'Check the blank: is it followed by a noun or by S + V? Choose the connector type accordingly.',
 'In Error Identification, only ONE connector links two clauses. "Although ... but" is wrong; "Because ... so" is wrong.'
 ]}
 ]
},
{
 id: 'sv', title: 'Subject-verb agreement',
 my: 'ကတ္တားနှင့် ကြိယာ ကိုက်ညီမှု',
 src: 'Grammar p.7-9, p.14',
 blocks: [
 {t:'formula', text:'Subject (singular) + verb + s / es Subject (plural) + verb (no s / es)', note:'Cross out every modifier first, then match the REAL subject with the verb.'},
 {t:'table', head:['Between the subject and the verb','What to do','Example'], rows:[
 ['Prepositional phrase (in/on/at/with/from/for + N)', 'ignore it', 'The teachers in the classroom are explaining.'],
 ['Relative clause (who, which, that + V)', 'ignore it', 'The girl who is wearing a red dress is dancing.'],
 ['V-ing / V3 phrase', 'ignore it', 'Many children playing in the park make a lot of noise.'],
 ['Adjective before the noun', 'ignore it', 'The diligent worker finishes early.']
 ]},
 {t:'ex', items:[
 {s:'Cooking meals for the family brings everyone together.', n:'gerund subject = singular -> brings'},
 {s:'The paintings on the wall are hanging.', n:'subject "paintings" (plural), not "wall"'},
 {s:'The teacher who is explaining the lesson is very patient.', n:'subject "teacher" (singular)'},
 {s:'Playing games on the weekends strengthens friendships.', n:'gerund -> singular'},
 {s:'The book recommended by the librarian gains popularity.', n:'subject "book"'},
 {s:'Relations between the African nations of Senegal and the Gambia are friendly.', n:'"Relations" is plural'},
 {s:'Experts on air pollution and environmental campaigners complain that these measures do not go far enough.', n:'compound plural subject'},
 {s:'The organizers of the fundraiser are compiling a to-do list.', n:'"organizers" is plural'},
 {s:'Testing food or water for pesticide contamination usually involves sending samples to a laboratory.', n:'gerund subject -> involves'},
 {s:'Sudden temperature changes in winter are often associated with a cold or the flu.', n:'"changes" is plural'},
 {s:'The number of doctors working in towns ... is relatively small.', n:'The number of + plural noun takes a SINGULAR verb'}
 ]},
 {t:'warn', text:'Common traps: "The number of ..." (singular) vs "A number of ..." (plural); "one of the most important parts" (plural noun after "one of the"); a plural noun hidden behind a prepositional phrase; a singular subject followed by "as well as" or "accompanied by".'}
 ]
},
{
 id: 'tense', title: 'Tenses',
 my: 'ကာလ (Tense)',
 src: 'Grammar p.11-12',
 blocks: [
 {t:'p', text:'The sheet says tense is the most frequent topic: expect 2 to 3 items. Learn the time words and the structure; any form of question can then be solved.'},
 {t:'table', head:['Tense','Structure','Use','Time words'], rows:[
 ['Present Simple','S (singular) + V s/es ; S (plural) + V1','present habit, routine, fact','today, nowadays, every day/month/week, always, usually, sometimes'],
 ['Past Simple','S + V2 (S used to + V.inf)','finished events in the past','yesterday, last month/week/year, ... ago, in + year'],
 ['Future Simple','S + will + V.inf (S is/am/are going to + V.inf)','events not yet arrived','tomorrow, soon, next month/week/year, later'],
 ['Present Continuous','S + is/am/are + V.ing','happening now','now, at this time, at the moment'],
 ['Past Continuous','S + was/were + V.ing','in progress in the past','at nine o\'clock yesterday (exact time in the past)'],
 ['Present Perfect','S + has/have + V3','from past up to now','since, for, never, ever, recently, so far, up to present'],
 ['Past Perfect','S + had + V3','earlier past (before another past)','Past Perfect before Past Simple; Past Simple after Past Perfect']
 ]},
 {t:'formula', text:'While + Past Continuous /// When + Past Simple', note:'Past Continuous is the action in progress; Past Simple is the event that interrupts it.'},
 {t:'h', text:'Practice items from the sheet (Pb001 - Pb004)'},
 {t:'ex', items:[
 {s:'Nowadays, however, young men with a technical education are well paid because of the great demand for highly skilled workmen.', n:'Pb001: "Nowadays" + present passive. Answer: are well paid'},
 {s:'While they were facing death and injury, I was dining out at my favorite restaurant in Paris.', n:'Pb002: two actions in progress. Answer: were facing, was dining'},
 {s:'Shawn had requested all the forms and information before he began the application process.', n:'Pb003: Past Perfect before Past Simple. Answer: had requested, began'},
 {s:'For over a decade, the issue of same-sex marriage has been a flashpoint political issue in the United States.', n:'Pb004: "For over a decade" -> Present Perfect. Answer: has been a flashpoint political issue'}
 ]},
 {t:'tip', text:'Tense check order: (1) time words, (2) neighbouring verbs in the sentence, (3) translate the whole sentence, (4) check the definition of each tense.'},
 {t:'ex', items:[
 {s:'Columbus landed on an island in the Caribbean in 1492.', n:'"in 1492" -> Past Simple'},
 {s:'Mr. Chan has been in charge of operations since the beginning of last year.', n:'since + point of time -> Present Perfect'},
 {s:'In the 17th century, a Turkish merchant brought the flower to Bulgaria.', n:'"In the 17th century" -> Past Simple'},
 {s:'A spokesperson confirms that ticket prices will decrease by five cents next month.', n:'"next month" -> will'},
 {s:'He would have gone to work if he hadn\'t been sick.', n:'third conditional: had + V3 / would have + V3'}
 ]}
 ]
},
{
 id: 'modal', title: 'Modal verbs',
 my: 'အကူကြိယာ (Modal Verbs)',
 src: 'Grammar p.12; p.17',
 blocks: [
 {t:'formula', text:'Modals and others + V.1 (infinitive without to)', note:'V1 is the base verb without s / es / ed / ing. Exceptions in form: is, am, are, was, were become "be".'},
 {t:'table', head:['Modal','Meaning','Notes'], rows:[
 ['can, could','be able to','ability / possibility'],
 ['will, would','will (future) / would','would also for polite requests and past habits'],
 ['shall, should','will / ought to','should = advice'],
 ['may, might','may / might (possible)','possibility'],
 ['must','must','strong necessity; mustn\'t = prohibition'],
 ['has to / have to / had to / be to','must (necessity)','have to changes with the subject'],
 ['do / does / did','helping verbs','do + V1'],
 ['be going to = be about to','be about to','near future'],
 ['ought to','should','ought to + V1'],
 ['used to','used to (past habit)','used to + V1'],
 ['had better','should / had better','had better + V1'],
 ['would rather','would prefer','would rather + V1']
 ]},
 {t:'ex', items:[
 {s:'You must stop at a red light when you drive.', n:'rule / obligation'},
 {s:'It\'s wet and windy outside today. You shouldn\'t go out without an umbrella.', n:'advice'},
 {s:'You have too many careless mistakes in this paper; therefore, you\'d better correct them.', n:'had better + V1'},
 {s:'I really wish I had the money to go overseas.', n:'wish + past tense for an unreal present wish'},
 {s:'You must not drive without a licensed driving instructor until you have obtained a full driving license.', n:'need not (wrong) -> must not'}
 ]},
 {t:'warn', text:'After a modal never use to or -s: "can to go", "must goes" and "should to stop" are wrong.'}
 ]
},
{
 id: 'passive', title: 'Passive voice',
 my: 'အာဏာခံဝါကျ (Passive Voice)',
 src: 'Grammar p.13-14',
 blocks: [
 {t:'formula', text:'Subject (receives the action) + be (is / am / are / was / were / will be / has been ...) + V3', note:'Use passive when the subject is acted upon. Translate the sentence to check.'},
 {t:'ex', items:[
 {s:'Nowadays, smart phones are considered as another facility for humans.', n:'are considered'},
 {s:'Your letters are typed by your group members.', n:'are typed by'},
 {s:'Thai traditional food is sold on street corners all over the country.', n:'is sold'},
 {s:'My favorite dish is grilled and served with fried rice or a baked potato, and a salad.', n:'is grilled and served'},
 {s:'This house was built by my father.', n:'past + by-agent'},
 {s:'He had written three books before 1867.', n:'active (the subject wrote the books)'},
 {s:'The computer will be repaired tomorrow.', n:'future passive: will be + V3'},
 {s:'Every year thousands of people are killed on our roads.', n:'are killed'},
 {s:'Some people are inspired by the bravery of Iranians who continue to demand their rights.', n:'are inspired by'},
 {s:'A machine ... has been developed by researchers at the Institute of Food Research in Norwich.', n:'has been developed'}
 ]},
 {t:'table', head:['Tense','Passive form'], rows:[
 ['Present Simple','am / is / are + V3'], ['Past Simple','was / were + V3'], ['Future Simple','will be + V3'],
 ['Present Perfect','has / have been + V3'], ['Past Perfect','had been + V3'], ['Modal','modal + be + V3 (should be done)']
 ]},
 {t:'tip', text:'Steps: find "be + V3" first; then ask whether the subject should do the action or receive it. In Error Identification a missing "be" (e.g., "have used" -> "have been used", "constructed in 1961" -> "was constructed", "arrested in Boston" -> "was arrested") is a favourite error.'}
 ]
},
{
 id: 'shortcut', title: 'Shortcut: tense / modal / voice',
 my: 'အတိုချုံး ဖြေရှင်းနည်း',
 src: 'Grammar p.14-15',
 blocks: [
 {t:'table', head:['Step','What to check','Example'], rows:[
 ['1','Is the blank the VERB slot? (S + V + O)','He ____ difficulty communicating with the employees -> had'],
 ['2','Agreement: singular subject + s/es, plural subject without','Relations between ... Senegal and the Gambia ____ friendly -> are'],
 ['3','Tense: time words, surrounding verbs, translate, check definitions','Columbus ____ on an island in 1492 -> landed'],
 ['4','Voice: look for be + V3, then translate to see whether the subject is acted upon','Every year thousands of people ____ on our roads -> are killed']
 ]},
 {t:'ex', items:[
 {s:'We wonder whether 25 days is enough time to complete our order.', n:'"25 days" as an amount of time takes a singular verb'},
 {s:'The director says that she plans to hire several new staff members next year.', n:'singular subject, present simple'},
 {s:'The conference will focus on workplace health and safety matters.', n:'will + V1'},
 {s:'Plastic pollution affects every waterway, sea and ocean in the world.', n:'uncountable noun = singular'}
 ]}
 ]
},
{
 id: 'adjadv', title: 'Adjectives and adverbs',
 my: 'နာမဝိသေသနနှင့် ကြိယာဝိသေသန',
 src: 'Grammar p.19-20',
 blocks: [
 {t:'p', text:'An adjective modifies a noun or pronoun. An adverb modifies a verb, an adjective, a whole sentence, or another adverb. Most adverbs end in -ly (Adj. + ly = Adv.); good becomes well.'},
 {t:'table', head:['No.','Adjective patterns','Adverb patterns'], rows:[
 ['1','a / an / the + Adj. + N (before the noun)','a / an / the + Adv. + Adj. + N ; an adverb modifies an adjective (before it) or another adverb (before it) ; sentence adverbs start or end the sentence'],
 ['2','S + V. (to be or linking verb) + Adj.','S + Verb + Adv. (after a normal verb that is not "to be" or a linking verb)'],
 ['3','S + Verb + Obj. + Adj.','S + Verb + Adv. + V3 / V-ing']
 ]},
 {t:'h', text:'Linking verbs (take an adjective, not an adverb)'},
 {t:'p', text:'become, get, go, grow (= become) ; look (= seem to the eye) ; sound (= seem to the ear) ; seem, appear (= give the impression) ; turn (= change into) ; taste (= have a flavour) ; feel ; smell (= have a smell) ; keep, remain, stay (= continue to be)'},
 {t:'h', text:'Verb + object + adjective (pattern 3)'},
 {t:'p', text:'keep (= maintain), prove, make (= cause to be), leave (= let stay), consider (= regard as), drive (= make someone feel), treat, let, play, plus find, believe, think (opinion verbs).'},
 {t:'ex', items:[
 {s:'She sang the song beautifully at the concert.', n:'adverb after a normal verb'},
 {s:'The flowers smell sweet.', n:'smell = linking verb -> adjective'},
 {s:'This is the most expensive restaurant in town.', n:'superlative adjective'},
 {s:'The chef prepared the dish quickly.', n:'adverb of manner'},
 {s:'His arguments were logical but ultimately unconvincing.', n:'were = to be -> adjective'},
 {s:'The innovative presentation was accepted by the committee.', n:'adjective before the noun'},
 {s:'Her voice was powerful during the performance.', n:'to be + adjective'},
 {s:'It wasn\'t a deliberate action. It happened accidentally.', n:'adj. before the noun; adverb after the verb'},
 {s:'Introducing yourself to new people is fun, but making small talk can be hard.', n:'be + adjective'},
 {s:'Effective contraception can reduce but never eliminate the need for termination of pregnancy.', n:'parallel verbs after the modal'}
 ]},
 {t:'warn', text:'Error pattern: an adverb before a noun (ingeniously robotic systems -> ingenious), or "recently years" -> "recent years". Check the word after the underlined adverb: if it is a noun, the blank needs an adjective.'},
 {t:'tip', text:'Check the verb first (to be / linking?), then ask: does the blank modify a noun (adjective) or a verb / adjective (adverb)?'}
 ]
},
{
 id: 'nonfinite', title: 'Non-finite verbs',
 my: 'ကာလမပါသော ကြိယာ (Infinitive, Gerund, Participle)',
 src: 'Grammar p.21-22',
 blocks: [
 {t:'p', text:'A non-finite verb looks like a verb but is not the main verb. It is used to make a sentence longer (as modifiers or objects).'},
 {t:'table', head:['Kind','Form','Notes'], rows:[
 ['1. Infinitive','V1 (no s / es / ed / ing; be for is/am/are/was/were)','two kinds: with to / without to'],
 ['2. Gerund','V-ing that acts as a noun (meaning "the act of ...")','Drink-driving has caused many tragic deaths.'],
 ['3. Participle','Present: V-ing ; Past: V-ed / V3','Perfect: active "having + V3" ; passive "having been + V3"']
 ]},
 {t:'h', text:'Verb patterns (from the sheet)'},
 {t:'formula', text:'S + let / make / have / help + O + V.nf (no to)'},
 {t:'formula', text:'S + other verbs (want, ask, remind, tell ...) + O + to V.nf (with to)'},
 {t:'formula', text:'S + enjoy / avoid / consider (finish, keep ...) + O / V-ing'},
 {t:'ex', items:[
 {s:'I have my friend call me back.', n:'have + O + V1 (no to)'},
 {s:'I let her continue to use my phone.', n:'let + O + V1'},
 {s:'I want to tell you our actual date.', n:'want + to V1'},
 {s:'N\'Ohm asks me to be away from him.', n:'ask + O + to V1'},
 {s:'She enjoys going to the party.', n:'enjoy + V-ing'},
 {s:'The dog kept barking all night.', n:'keep + V-ing'},
 {s:'Computers and cell phones let people communicate with each other by voice or text.', n:'let + O + V1'},
 {s:'Pleum reminded me not to forget our promise.', n:'remind + O + (not) to V1'},
 {s:'Jim spends too much time playing computer games.', n:'spend time + V-ing'},
 {s:'Would you mind keeping an eye on my luggage?', n:'Would you mind + V-ing'},
 {s:'Certain artworks make him experience time with particular sharpness.', n:'make + O + V1'}
 ]},
 {t:'warn', text:'Error items with non-finite verbs: "looking forward to help" (to is a preposition: looking forward to helping), "We shall now presenting" (modal + V1), "Instead spending" (Instead of spending), "the culture can never appropriated" (can never be appropriated), "spent five years to write" (spent ... writing), "It seemed to be peaceful and simply" (parallel: peaceful and simple).'}
 ]
},
{
 id: 'quant', title: 'Quantifiers, each other and miscellaneous',
 my: 'အရေအတွက်စကားလုံးများ',
 src: 'Grammar p.16; Simulation p.1',
 blocks: [
 {t:'table', head:['Word','Used with','Example'], rows:[
 ['everybody / everyone', 'singular verb', 'Everybody is here.'],
 ['each / every + singular noun', 'singular verb', 'Each worker is giving an assignment.'],
 ['much + uncountable noun', 'singular', 'much money / much time'],
 ['another + singular noun', 'one more', 'another reason'],
 ['many + plural countable noun', 'plural', 'many students'],
 ['other + plural noun', 'plural', 'other people'],
 ['a few + plural countable noun', 'a small number', 'a few companies'],
 ['a little + uncountable noun', 'a small amount', 'a little money'],
 ['too many + plural countable', 'more than enough', 'too many careless mistakes']
 ]},
 {t:'formula', text:'each other = between 2 people one another = among more than 2', note:'"Three women are bragging to one another"; "The two students rivaled each other".'},
 {t:'ex', items:[
 {s:'The two students rivaled each other for the scholarship.', n:'2 people'},
 {s:'Three women are bragging to one another about their respective sons.', n:'3 people'},
 {s:'Between performing in her lavish Las Vegas show and making movies, Cher still finds time to pursue her other passion.', n:'between + gerund'},
 {s:'Figs, insects, lizards and centipedes are favorite food source as well as many other kinds of fruit.', n:'as well as = and, also'}
 ]}
 ]
},
{
 id: 'if', title: 'If-clauses (conditionals)',
 my: 'အကယ်၍ ဝါကျများ (Conditionals)',
 src: 'Vocab p.16-17; Grammar p.23',
 blocks: [
 {t:'p', text:'When the connector is If, check the tense pair (the sheet\'s shortcut).'},
 {t:'table', head:['Type','If-clause','Main clause','Use'], rows:[
 ['Type 1 (real/possible)','If ( S + V1 )','( S will + V.inf )','a possible future condition'],
 ['Type 2 (unreal present)','If ( S + V2 )','( S would + V.inf )','imaginary / unlikely now'],
 ['Type 3 (unreal past)','If ( S + had + V3 )','( S would have + V3 )','imaginary past, cannot change']
 ]},
 {t:'ex', items:[
 {s:'If someone gave me a gift for no reason, I\'d feel happy.', n:'Type 2: gave + would'},
 {s:'If he had taken a taxi, he wouldn\'t have missed the plane.', n:'Type 3'},
 {s:'He would have gone to work if he hadn\'t been sick.', n:'Type 3 (main clause first)'},
 {s:'In case of rain or snow during next week\'s wedding reception, the occasion will be held in the ballroom instead.', n:'In case of + N'}
 ]},
 {t:'warn', text:'Other condition words: unless (= if not) is NOT followed by a negative: "Unless you don\'t try" is wrong -> "Unless you try". Also "if not", "otherwise", "or else" for "if this does not happen".'},
 {t:'tip', text:'The wish pattern: "I wish I had the money" (past tense for an unreal present). Do not use "hope" with a past unreal.'}
 ]
},
{
 id: 'parallel', title: 'Parallel structure and lists',
 my: 'အပြိုင်ပုံစံ (Parallel Structure)',
 src: 'Vocab p.13, Simulation key',
 blocks: [
 {t:'formula', text:'XXX and / or XXX', note:'The two sides of "and / or" must be the same form: noun and noun, V-ing and V-ing, adjective and adjective, clause and clause.'},
 {t:'ex', items:[
 {s:'such as waving and handshaking', n:'such as + gerunds (both V-ing)'},
 {s:'the easiest way to introduce yourself is to talk about something you have in common', n:'to + V1 parallel with the subject idea'},
 {s:'Japan and South Korea rebuilt their war-torn countries and became two of the most advanced economies.', n:'rebuilt ... and became (same tense)'},
 {s:'Tiny Singapore has transitioned from one of the poorest countries in the world to one of the richest.', n:'from ... to ...'},
 {s:'Hiding of information or providing incorrect information (Internet fraud).', n:'noun phrase / gerund pair'},
 {s:'It seemed to be peaceful and simple.', n:'peaceful and simple (adj. + adj.), not simply'}
 ]},
 {t:'warn', text:'Error pattern: a word class that does not match its partner, e.g. "Studies ... communicating knowledge and believe" -> "knowledge and belief".'}
 ]
},
{
 id: 'errorid', title: 'Error Identification: error checklist',
 my: 'အမှားရှာဖွေခြင်း စစ်ဆေးရန်စာရင်း',
 src: 'Guide p.6-7; Simulation key',
 blocks: [
 {t:'p', text:'Read the whole sentence, find the real subject and verb, then check each underlined part against the list. The answer key of the sheet shows that these error types repeat.'},
 {t:'table', head:['Error type','Wrong -> right','Source item'], rows:[
 ['Word form (adj./adv./noun)','ingeniously robotic -> ingenious robotic','Guide Q13, Sim Q1'],
 ['Word form (noun/adj.)','a deficient of folic acid -> a deficiency of','Guide Q21'],
 ['Word form (verb/noun)','severe dehydrate -> dehydration','Guide Q18'],
 ['Adjective order / form','the claws strong -> the strong claws','Guide Q19'],
 ['Plural noun','a hundred bear -> bears','Grammar sheet p.17 Q9'],
 ['Agreement','temperature changes ... is -> are','Sim Q11'],
 ['Tense / verb form','Smolinski worked -> has worked (for the past 25 years)','Guide Q16'],
 ['Tense (reported)','a team led by ... say -> said','Sim Q7'],
 ['Voice','constructed in 1961 -> was constructed','Guide Q10'],
 ['Voice','accused of planning -> was accused of','Sim Q14'],
 ['Voice / form','were appreciating -> appreciated','Guide Q11'],
 ['to + V-ing','looking forward to help -> to helping','Guide Q12'],
 ['Connector','Despite of the fact that -> Despite the fact that','Guide Q17'],
 ['Connector','Although ... but he possesses -> Although ..., he possesses','Guide Q14'],
 ['Preposition','caused for storms -> caused by storms','Guide Q22'],
 ['Modal','would generally be the last person -> will generally be / is generally','Guide Q15'],
 ['Comparative','more large -> larger','Guide Q24'],
 ['Verb agreement','Maria Tallchief demonstrate -> demonstrates','Guide Q23'],
 ['Influence (verb)','influence on health -> influence health (verb + object)','Sim Q13'],
 ['Unless','Unless you don\'t try -> Unless you try','Sim Q8']
 ]},
 {t:'tip', text:'When two parts look wrong, choose the one that breaks a grammar RULE (agreement, form, structure) rather than the one that only "sounds odd".'}
 ]
},
{
 id: 'textcomp', title: 'Text completion (Written expressions)',
 my: 'စာပိုဒ်ဖြည့်သွင်းခြင်း',
 src: 'Grammar p.10, p.18, p.24; Simulation Part 3',
 blocks: [
 {t:'p', text:'A short passage has numbered blanks. Each blank usually tests ONE point but the answer can depend on the surrounding sentences.'},
 {t:'table', head:['Clue in the passage','What to choose'], rows:[
 ['"one of the greatest ____"', 'plural noun: problems'],
 ['"The rapid rise in global temperature ____ many consequences"', 'singular subject "rise": has'],
 ['"for the past few decades, the number of people ... ____ dramatically"', '"the number of" -> singular: has increased'],
 ['"mental health ____ often ignored in the past"', 'past passive: was'],
 ['"Experts agree that society ____ reduce the stigma"', 'modal for obligation: must / should'],
 ['"several awareness campaigns ____ to encourage people"', 'present perfect passive: have been launched'],
 ['"it allows individuals to share experiences, ____ it sometimes spreads misinformation"', 'contrast connector: but'],
 ['"Families ____ to give more emotional support"', 'passive: have been encouraged'],
 ['"community events are often designed ____ integration"', 'purpose: to promote']
 ]},
 {t:'tip', text:'Do not choose only by the sentence containing the blank. Check the paragraph for time (past / present), singular or plural topic and the logical relation (cause, contrast, addition).'}
 ]
},
{
 id: 'convo', title: 'Conversation / speaking expressions',
 my: 'စကားပြောပြန်ကြားချက်များ',
 src: 'Guide p.5-6',
 blocks: [
 {t:'p', text:'Choose the response that fits both meaning and politeness.'},
 {t:'table', head:['Situation','Best response','Why'], rows:[
 ['Asking for help: "I\'m in an awful mess here. ____" "Certainly. What needs to be done?"', 'Could you give me a hand?', 'a polite request that fits "Certainly"'],
 ['"Would you mind lending me a car?"', 'No, not at all.', 'with "Would you mind", "No / Not at all" = I agree'],
 ['"Mason looks really annoyed. ____ ?"', 'What could be bothering him?', 'the reply "I\'m not sure" shows a guess about a cause'],
 ['"Can I speak to Bob please?" "Sorry. He\'s not in just now." "____"', 'Would you give him a message please?', 'the caller asks someone to pass a message'],
 ['"How do you do?"', 'How do you do?', 'a formal greeting is answered with the same words'],
 ['"I really don\'t like shopping around the holidays." "____ . It\'s always so busy."', 'I couldn\'t agree with you more.', '= I completely agree']
 ]}
 ]
}
];
