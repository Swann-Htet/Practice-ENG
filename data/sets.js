/* Question Set 1 and Set 2, taken from the two PDFs in Downloads:
   Set 1 = "Exit Examination English (1).pdf" (KruN'Folk, 45 pages)
   Set 2 = "Part of Speech" free tutoring sheet (N'Folk Fabulous English, 32 pages)
   Neither PDF prints an answer key (Set 2 says the key is posted on the author's Instagram story), so the answers below were
   worked out and explained here. Items marked with a note are less certain. Format: P(src, type, topic, q, opts, answer 1-4/5, why, note) */
(function () {
  var cnt = { S1: 0, S2: 0 };
  function P(src, type, topic, q, opts, a, why, note) {
    cnt[src]++;
    PRACTICE.push({ id: src + '-' + cnt[src], src: src, type: type, topic: topic, q: q, opts: opts, a: a - 1, why: why, note: note || null });
  }
  PRACTICE_SRC.S1 = 'Set 1: Exit Examination English';
  PRACTICE_SRC.S2 = 'Set 2: Part of Speech';
  var IS = 'Incomplete sentence', EI = 'Error identification', TC = 'Text completion';
  var WF = 'Word form', VC = 'Vocabulary in context', AG = 'Agreement', TE = 'Tense', VO = 'Voice', NF = 'Non-finite verb', IF = 'If-clause',
      RP = 'Relative pronoun', QU = 'Quantifier', ST = 'Sentence structure', AA = 'Adjective & adverb', CO = 'Connector';

  /* ============ SET 1 ============ */
  /* part of speech (choice 1) */
  P('S1', IS, WF, '____ is the most powerful weapon to change this unfavorable economic condition.', ['Educate', 'Education', 'Educational', 'Educated'], 2, 'The subject slot needs a noun: Education.');
  P('S1', IS, WF, 'The news reporter worked for an hour on the ____ of the breaking story.', ['development', 'develop', 'developed', 'developing'], 1, 'the ____ of: noun.');
  P('S1', EI, WF, 'The advantages (1) of radar (2) are its long (3) range, its precision, and its ability for (4) penetrate darkness and adverse weather.', ['of radar', 'are', 'range', 'penetrate'], 4, 'Preposition "for" is followed by V-ing: for penetrating.');
  /* vocabulary homework */
  P('S1', IS, VC, 'Because she wanted to wear an ____ outfit for her first day, she dressed the part of a teacher.', ['appropriate', 'important', 'imperative', 'dangerous'], 1, 'an appropriate outfit = a suitable outfit.');
  P('S1', IS, VC, 'It is unfair to ____ teachers for not promoting students who cannot perform at their grade level.', ['praise', 'criticize', 'inform', 'explain'], 2, '"unfair to ... teachers for not ..." = blame / criticize.');
  P('S1', IS, VC, 'The test takers had ____ 45 minutes to complete the difficult test, but they knew that they needed more time.', ['probably', 'approximately', 'deliberately', 'carefully'], 2, 'approximately 45 minutes = about 45 minutes.');
  P('S1', IS, VC, 'Diet pill advertisements claim that they can ____ belly fat by taking just a few pills a day.', ['eliminate', 'recognize', 'classify', 'purify'], 1, 'eliminate fat = remove it completely.');
  P('S1', IS, WF, 'Macie\'s parents both received a quality ____ , but her mother has a difficult time finding employment.', ['emotion', 'education', 'development', 'confidence'], 2, 'a quality education: it explains why they could expect employment.');
  P('S1', IS, VC, 'Since the orange crops were ____ this year, orange prices are most affordable.', ['elegant', 'fruitless', 'abundant', 'colorful', 'harmless'], 3, 'abundant = plentiful, so prices are low.');
  P('S1', IS, VC, 'The nurse put on gloves so as not to ____ herself or the patient.', ['sufficient', 'careless', 'maleficent', 'benevolence', 'contaminate'], 5, 'to + verb: contaminate (make dirty / infect).');
  P('S1', IS, VC, 'I never thought my brother would ____ and allow me to drive his car for a week.', ['suppress', 'capitulate', 'benefit', 'advantage', 'benediction'], 2, 'capitulate = give in, agree after resisting.');
  P('S1', IS, VC, 'The hurricane managed to destroy all the houses that once stood near the shore. (closest in meaning to "destroy")', ['concentrate', 'eliminate', 'deteriorate', 'bountiful', 'elegant'], 2, 'eliminate = remove completely, closest to destroy.');
  P('S1', IS, VC, 'The library had various cookbooks on everything from Thai food to vegan to complex French macarons. (closest in meaning to "various")', ['diverse', 'plentiful', 'fruitless', 'splendid', 'extraordinary'], 1, 'various = of different kinds = diverse.');
  /* cloze: water */
  var WT = 'Pure water (1) ____ taste and smell. (2) ____ need water in order to survive. ... The human body (3) ____ water to remove wastes ... by which all (4) ____ measured. ... hydrogen, the most (5) ____ element in our universe ...';
  P('S1', TC, AG, WT + '  Blank (1):', ['lack', 'lacks', 'lacking', 'will lack'], 2, 'Singular subject "Pure water" + present fact: lacks.');
  P('S1', TC, AG, WT + '  Blank (2):', ['All living things', 'Everything', 'Something', 'Each of these things'], 1, 'The verb is "need" (plural), so a plural subject: All living things.');
  P('S1', TC, AG, WT + '  Blank (3):', ['uses', 'use', 'used to', 'has used'], 1, 'singular subject "The human body" + present fact.');
  P('S1', TC, AG, WT + '  Blank (4):', ['other liquids is', 'other liquid are', 'other liquid is', 'other liquids are'], 4, 'other + plural noun + are (agreement).');
  P('S1', TC, WF, WT + '  Blank (5):', ['abundant', 'fruitless', 'reliable', 'useful'], 1, 'the most abundant element: hydrogen is the most plentiful element.');
  /* tense (choice 2) */
  P('S1', IS, TE, 'For each of the past five years, my father and I ____ our vacation time at home either ____ in the garden or fixing up the house.', ['have spent, working', 'spent, working', 'spent, worked', 'spend, working'], 1, '"For the past five years" -> present perfect; spend time + V-ing (working).');
  P('S1', IS, TE, 'I heard the news of his success from a friend ____ .', ['since last week', 'a week ago', 'for a week', 'a week from today'], 2, 'past simple "heard" + a week ago.');
  P('S1', EI, TE, 'The megalodon, which (1) goes extinct millions of years ago, was (2) the largest shark ever to (3) prowl the oceans and one of the largest (4) fish on record.', ['goes', 'the largest', 'prowl', 'fish'], 1, '"millions of years ago" -> past simple: went extinct.');
  P('S1', EI, NF, 'As Myanmar is our (1) neighboring country, we should (2) closely (3) following what is happening (4) there.', ['neighboring', 'closely', 'following', 'there'], 3, 'should + V1: follow.');
  P('S1', EI, QU, '(1) Those who (2) exercise on a regular (3) basis will less likely (4) to be badly (5) affected by stress.', ['Those who', 'exercise on a regular', 'basis will less likely', 'to be badly'], 3, '"are less likely to be" is the correct pattern; "will less likely" is wrong.', 'The sheet\'s underlining is not clear; the intended error is "will".');
  /* voice (choice 3) */
  P('S1', IS, VO, 'A new stadium ____ near the station.', ['has build', 'is being built', 'built', 'does not build'], 2, 'the stadium receives the action, in progress: is being built.');
  P('S1', IS, VO, 'A lot of students in Thailand ____ because of the unreasonable school obligations.', ['punish', 'are punished', 'will have punished', 'are punishing'], 2, 'students receive the punishment: are punished.');
  P('S1', IS, TE, 'The friends ____ forward to meeting her.', ['has been looking', 'are looked', 'had been looked', 'are looking'], 4, '"look forward to" is active, plural subject: are looking.');
  /* non-finite (choice 4) */
  P('S1', IS, NF, 'Computers and cell phones let people ____ with each other by voice or text.', ['to communicate', 'communicate', 'communicating', 'communicated'], 2, 'let + O + V1.');
  P('S1', IS, NF, 'Pleum reminded me ____ our promise.', ['forget', 'not to forget', 'forgot', 'forgetting'], 2, 'remind + O + (not) to V1.');
  P('S1', EI, NF, 'Hilary Mantel, a (1) former social worker and film (2) critic, spent five years (3) to write "Wolf Hall" and is (4) currently working on a sequel.', ['former', 'critic', 'to write', 'currently'], 3, 'spend time + V-ing: writing.');
  /* if clause (choice 5) */
  P('S1', IS, IF, 'If Suwitcha had known that the class had been cancelled, she would not ____ to school on that day.', ['drive', 'have driven', 'have drove', 'be driving'], 2, 'Type 3: would not have + V3.');
  P('S1', EI, IF, 'Unless you (1) don\'t try to open them for (2) yourself, you will not be (3) able to know exactly what each (4) is like.', ['don\'t try', 'yourself', 'able', 'is like'], 1, 'Unless already means "if not": Unless you try.');
  P('S1', EI, IF, 'Students (1) would have to pay (2) a late fee (3) unless they register before (4) the last day of the regular registration period.', ['would have to pay', 'a late fee', 'unless they register', 'the last day'], 1, 'real condition: will have to pay.');
  /* relative pronouns */
  P('S1', IS, RP, 'My brother is a person ____ other people find competitive.', ['which', 'where', 'who', 'of which'], 3, 'a person = who (the object, so "who" or "that").');
  P('S1', IS, RP, 'The helper ____ caring and generous likes to please other people.', ['who are', 'that is', 'which is', 'that are'], 2, 'singular subject helper + that is (a person: that / who).');
  P('S1', IS, RP, 'The Challenger always makes decisions ____ other people find difficult to make.', ['who', '-', 'of which', 'whose'], 2, 'The relative pronoun is the object, so it can be omitted.');
  P('S1', IS, RP, 'Do you think you have any personality trait ____ ?', ['who people dislike', 'people dislike', 'people dislike which', 'people who dislike'], 2, 'object relative clause with the pronoun omitted.');
  P('S1', IS, RP, 'I\'m having a lot of fun using the bicycle ____ for my birthday.', ['which gave me', 'which you gave me', 'who gave me', 'who you gave me'], 2, 'thing + which + S + V: which you gave me.');
  /* error identification (choice 1 page 39) */
  P('S1', EI, WF, 'In (1) recently years many plans have (2) been made for large (3) floating cities with living accommodation for as (4) many as 500,000 people.', ['recently', 'been made', 'floating', 'many'], 1, 'adjective before a noun: recent years.');
  P('S1', EI, AG, 'Sudden (1) temperature changes (2) in winter (3) is often associated with (4) a cold or the flu.', ['temperature', 'in winter', 'is', 'a cold'], 3, '"changes" is plural: are.');
  P('S1', EI, WF, '(1) An enlightenment (2) social is (3) ruled by knowledge and reason (4) rather than superstition and prejudice.', ['An enlightenment', 'social', 'ruled', 'rather than'], 2, 'noun needed: An enlightenment society.');
  /* wish */
  P('S1', IS, IF, 'I wish my schedule ____ so full.', ['were not', 'are not', 'was not', 'is not'], 1, 'wish + past: were (the sheet\'s pattern "I wish I were ...").', '"was not" is also heard in informal English, but "were not" is the exam answer.');
  P('S1', IS, IF, 'I don\'t get enough exercise. I wish I ____ a healthier lifestyle.', ['lead', 'leads', 'led', 'leaded'], 3, 'wish + V2: led.');
  P('S1', IS, IF, 'I wish I ____ read it now.', ['could read', 'to read', 'reads', 'reading'], 1, 'wish + could / would + V1.');
  P('S1', IS, IF, 'I wish I ____ to do chores every day.', ['didn\'t had', 'won\'t have', 'don\'t have', 'didn\'t have'], 4, 'wish + didn\'t + V1.');
  P('S1', IS, IF, 'I wish I ____ more free time.', ['had', 'will have', 'have', 'has'], 1, 'wish + V2: had.');
  /* pronouns etc. */
  P('S1', IS, ST, 'If he listened to ____ words, he would understand ____ better.', ['our, us', 'himself, us', 'our, our', 'himself, him'], 1, 'possessive adjective before a noun (our words); object pronoun after a verb (understand us).');
  P('S1', IS, QU, 'Three women are bragging to ____ about their respective sons.', ['one after the other', 'one by one', 'each other', 'one another'], 4, 'more than two: one another.');
  P('S1', EI, ST, '(1) Manufactures of consumer (2) goods often (3) change the styles of (4) theirs products.', ['Manufactures', 'goods', 'change', 'theirs'], 4, 'possessive adjective before a noun: their products.');
  P('S1', IS, ST, 'She made the same mistake last year, ____ ?', ['didn\'t she', 'isn\'t it', 'doesn\'t she', 'did she'], 1, 'question tag: positive past verb -> negative tag with did: didn\'t she.');

  /* ============ SET 2 ============ */
  P('S2', IS, VC, 'The nationalists are very eager to ____ their customs and language.', ['conserve', 'preserve', 'reserve', 'deserve'], 2, 'preserve = keep from loss (customs, language).');
  P('S2', IS, VC, 'The hurricane managed to destroy all the houses that once stood near the shore. (closest in meaning to the idea of destroy)', ['deteriorate', 'desert', 'research', 'abandon'], 1, 'deteriorate = become much worse / damaged; the others do not fit.', 'None of the four is a perfect synonym of "destroy"; deteriorate is the closest in meaning to damage.');
  P('S2', IS, TE, 'I play football with my friends ____ .', ['every day', 'three days ago', 'for three days', 'next day'], 1, 'present simple (play) + a habit marker: every day.');
  P('S2', EI, NF, '(1) Those who (2) exercise on a regular (3) basis will less likely (4) being badly (5) affected by stress.', ['Those who', 'exercise on a regular', 'basis will less likely', 'being badly'], 4, 'be likely to + be: "to be badly affected"; "being" is not correct after "likely".', 'The sentence has two weak points ("will less" and "being"); the underlined part (4) is the intended error in this set.');
  /* cloze test: soil erosion; the sheet gives no options, the options below were written for practice */
  var ER = 'Erosion of America\'s farmland by wind and water (1) ____ a problem since settlers first put the prairies under the plow. By the 1930s, more than 282 million acres of farmland (2) ____ by erosion. After 40 years of (3) ____ efforts, soil erosion has accelerated (4) ____ new demands placed on the land by heavy crop (5) ____ .';
  P('S2', TC, TE, ER + '  Blank (1):', ['has been', 'was', 'is being', 'will be'], 1, '"since ... in the nineteenth century" -> present perfect: has been.', 'The sheet prints no options; the options were written for practice.');
  P('S2', TC, VO, ER + '  Blank (2):', ['had been damaged', 'damaged', 'has damaged', 'were damaging'], 1, 'earlier than "By the 1930s" and passive: had been damaged.', 'The sheet prints no options; the options were written for practice.');
  P('S2', TC, WF, ER + '  Blank (3):', ['conserve', 'conservation', 'conservative', 'conservatively'], 2, 'adjective-like noun before "efforts": conservation efforts.', 'The sheet prints no options; the options were written for practice.');
  P('S2', TC, CO, ER + '  Blank (4):', ['because of', 'because', 'although', 'so that'], 1, 'a noun phrase follows (new demands): because of.', 'The sheet prints no options; the options were written for practice.');
  P('S2', TC, WF, ER + '  Blank (5):', ['produce', 'production', 'productive', 'productively'], 2, 'heavy crop production: noun after the noun modifier.', 'The sheet prints no options; the options were written for practice.');
  /* pb: sample items (page 8-10) */
  P('S2', IS, AG, '____ between the African nations of Senegal and the Gambia are friendly.', ['Relation', 'Relate', 'Relevant', 'Relations'], 4, 'plural verb "are" + noun subject: Relations.');
  P('S2', IS, WF, 'The powder room was filled with ____ come straight from a fashion magazine.', ['glamorous furnishings that seemed to', 'furnishings glamorous that seemed to', 'that seemed to glamorous furnishings', 'that seemed to furnishings glamorous'], 1, 'adjective before the noun (glamorous furnishings) + relative clause.');
  P('S2', EI, WF, 'In (1) recently months, Thailand (2) has been its highest number of daily Covid (3) cases, with the majority of the new infections stemming from the country\'s (4) overcrowded prisons.', ['recently', 'has been', 'cases', 'overcrowded'], 1, 'adjective before a noun: In recent months.', '"has been its highest number" is also awkward (has recorded), but the pattern the sheet practises is recent / recently.');
  /* exercise: noun */
  P('S2', IS, WF, '____ could cause lung problems, similar to bronchitis, and eye and skin problems.', ['Contaminate', 'Contamination', 'Contaminated', 'Contaminates'], 2, 'the subject slot needs a noun: Contamination.');
  P('S2', IS, WF, 'The soldiers will ____ the building and save the hostages.', ['penetration', 'penetrable', 'penetrative', 'penetrate'], 4, 'will + V1.');
  P('S2', IS, WF, 'Macie\'s parents both received a quality ____ , but her mother has a difficult time finding employment.', ['educates', 'educate', 'education', 'educated'], 3, 'a quality + noun.');
  /* exercise: adjective */
  P('S2', IS, WF, '____ injury caused the player to be on the bench for most of the season.', ['Continuously', 'Continuous', 'Continue', 'Continuation'], 2, 'adjective before the noun injury.');
  P('S2', IS, WF, 'The number sign is the ____ symbol for labeling something measured in pounds.', ['conventional', 'conventionally', 'convention', 'conventions'], 1, 'the + adjective + noun.');
  P('S2', IS, WF, 'Cancer patients must undergo the ____ so that all of the cancer is removed.', ['necessarily treatments chemotherapy', 'chemotherapy treatments necessary', 'necessary chemotherapy treatments', 'necessitate treatments chemotherapy'], 3, 'adjective + noun modifier + noun: necessary chemotherapy treatments.');
  /* exercise: adverb */
  P('S2', IS, AA, 'Dinner at the fancy restaurant was ____ expensive, and the 300 dollar tab shocked the dinner guests.', ['extreme', 'extremely', 'extremity', 'extremities'], 2, 'adverb before the adjective expensive.');
  P('S2', IS, AA, 'Such a diet is ____ believed to offer protection against a number of cancers.', ['wide', 'wider', 'widely', 'width'], 3, 'adverb before the V3 "believed": widely believed.');
  P('S2', IS, AA, 'Science\'s progress has been determined by the ____ speed at which we were able to collect data.', ['slow relation', 'relative slow', 'relatively slow', 'slow relatively'], 3, 'adverb + adjective + noun: relatively slow speed.');
  /* exercise: noun (second) */
  P('S2', IS, NF, 'Many founders of the United States were merely farmers, but that didn\'t stop them from ____ their goals.', ['achieving', 'achieve', 'achieves', 'achievable'], 1, 'preposition "from" + V-ing.');
  P('S2', IS, WF, 'When someone is suffering from ____ , they may feel sad or dejected for no reason.', ['depress', 'depressed', 'depresses', 'depression'], 4, 'suffer from + noun: depression.');
  P('S2', IS, WF, 'One piece of trash didn\'t seem of much ____ , but it was the clue that solved the case.', ['important', 'importantly', 'importance', 'import'], 3, 'of much + noun: of much importance.');
  /* sentence completion */
  P('S2', IS, WF, '____ was shown in her family when Sylvia\'s four children graduated from college and became doctors.', ['Succeed', 'Successful', 'Success', 'Successfully'], 3, 'the subject slot needs a noun: Success.');
  P('S2', IS, WF, 'Jazz players in the ____ very rarely play modern songs and mostly stick to their fixed song-list.', ['traditional band', 'band traditionally', 'traditionally band', 'band traditional'], 1, 'the + adjective + noun: the traditional band.');
  P('S2', IS, WF, 'The pharmacist can ____ you on over-the-counter cough medicines.', ['advice', 'advisor', 'advisors', 'advise'], 4, 'can + V1: advise (verb); advice is the noun.');
  P('S2', IS, AA, 'Our engineers are working on an ____ way to recharge our XZ876 electric engines.', ['economy', 'economics', 'economical', 'economically'], 3, 'an + adjective + noun: an economical way.');
  P('S2', IS, AA, 'Frozen Chinese food is ____ available at major supermarkets and delicatessens.', ['wide', 'width', 'widely', 'widen'], 3, 'adverb before the adjective available.');
  P('S2', IS, WF, 'Huntington Hotel provides a wide ____ of recreational activities for its guests.', ['varied', 'variable', 'vary', 'variety'], 4, 'a wide variety of: noun.');
  P('S2', IS, WF, '____ between a third world and first world country is the average quality of living for its citizens.', ['The biggest different', 'The difference biggest', 'The biggest difference', 'The different biggest'], 3, 'the + superlative adjective + noun.');
  P('S2', IS, WF, 'The planning committee representatives made ____ the event until the end of the month.', ['a collective decision to postpone', 'collectively a decision to postpone', 'a decision collectively to postpone', 'a decision collective to postpone'], 1, 'a + adjective + noun + to V1.');
  /* error identification */
  P('S2', EI, WF, 'After checking the box for (1) having a (2) criminal record, the applicant (3) wanted to explain her (4) respond to the manager.', ['having a', 'criminal record', 'wanted to explain', 'respond'], 4, 'her + noun: response.');
  P('S2', EI, WF, 'The expert witness (1) played a (2) significance part in the case, demonstrating that the accused could not (3) have caused such (4) damages.', ['played a', 'significance', 'have caused', 'damages'], 2, 'a + adjective + noun: a significant part.');
  P('S2', EI, AA, 'After so many silly (1) answers, the teacher (2) was happy that her top student gave a (3) reasonably response to (4) the question.', ['answers', 'was happy', 'reasonably', 'the question'], 3, 'a + adjective + noun: a reasonable response.');
  P('S2', EI, WF, '(1) According to the label, this solution should (2) acceleration my hair growth and (3) provide me (4) with long tresses in a short time.', ['According to', 'acceleration', 'provide me', 'with long tresses'], 2, 'should + V1: accelerate.');
  P('S2', EI, AA, '(1) Because a truck (2) flipped over, we (3) have been stuck in (4) stationarily traffic for over three hours now.', ['Because', 'flipped over', 'have been stuck', 'stationarily'], 4, 'adjective before the noun traffic: stationary.');

  window.QSETS = [
    { id: 'set1', src: 'S1', title: 'Set 1', sub: 'Exit Examination English', pdf: 'Exit Examination English (1).pdf, 45 pages (KruN\'Folk)',
      about: 'Vocabulary homework, part of speech, tense, voice, non-finite verbs, if-clauses, relative pronouns, wish, pronouns and error identification, in the order of the sheet.' },
    { id: 'set2', src: 'S2', title: 'Set 2', sub: 'Part of Speech', pdf: 'Part of Speech free tutoring sheet, 32 pages (N\'Folk Fabulous English)',
      about: 'Vocabulary, a cloze test, and the Pb001 to Pb025 items on noun, verb, adjective and adverb forms, sentence completion and error identification.' }
  ];
})();
