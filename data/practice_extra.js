/* Extra practice items for the three extra patterns (written for this site). Same format as practice.js. */
(function () {
  var n = 0;
  function P(type, topic, q, opts, a, why) { n++; PRACTICE.push({ id: 'EX-' + n, src: 'EX', type: type, topic: topic, q: q, opts: opts, a: a - 1, why: why, note: null }); }
  var IS = 'Incomplete sentence', EI = 'Error identification';
  var R = 'Reported speech', M = 'Mixed if-clause', H = 'Present perfect + past simple';
  PRACTICE_SRC.EX = 'Extra patterns (written for this site)';

  P(IS, R, 'He said, "I am tired." -> He said that he ____ tired.', ['is', 'was', 'has been', 'will be'], 2, 'Past reporting verb: present simple backshifts to past simple.');
  P(IS, R, 'She said, "I have finished my work." -> She said she ____ her work.', ['has finished', 'had finished', 'finished', 'finishes'], 2, 'present perfect -> past perfect.');
  P(IS, R, '"Where do you live?" he asked me. -> He asked me where ____ .', ['do I live', 'I lived', 'did I live', 'I live?'], 2, 'A reported question uses statement order and no "do/did".');
  P(IS, R, 'The teacher said, "Open your books." -> The teacher told us ____ our books.', ['open', 'to open', 'opened', 'opening'], 2, 'told + object + to V1.');
  P(IS, R, '"Don\'t make noise," she said. -> She told them ____ noise.', ['don\'t make', 'not make', 'not to make', 'to not making'], 3, 'negative command: told + O + not to V1.');
  P(IS, R, '"Will you come tomorrow?" he asked. -> He asked if I ____ the next day.', ['will come', 'would come', 'come', 'am coming'], 2, 'will -> would; tomorrow -> the next day.');
  P(EI, R, 'He asked me (1) what (2) was my (3) name (4) at the interview.', ['what', 'was my', 'name', 'at the interview'], 2, 'A reported question uses statement order: what my name was.');
  P(IS, R, '"I will call you tomorrow," he said. -> He said that he ____ call me the next day.', ['will', 'would', 'can', 'is going'], 2, 'will -> would.');
  P(IS, R, 'The teacher said, "Water boils at 100 degrees." -> The teacher said that water ____ at 100 degrees.', ['boiled', 'boils', 'had boiled', 'is boiling'], 2, 'A fact that is always true needs no backshift.');
  P(IS, R, '"We are going to the market now," they said. -> They said they ____ to the market then.', ['are going', 'were going', 'had gone', 'will go'], 2, 'present continuous -> past continuous; now -> then.');
  P(IS, R, '"Let\'s go to the beach," she said. -> She suggested ____ to the beach.', ['to go', 'going', 'went', 'that we goes'], 2, 'suggest + V-ing (or that + S + V1).');
  P(IS, R, '"I saw him yesterday," she said. -> She said she had seen him ____ .', ['yesterday', 'the day before', 'tomorrow', 'next day'], 2, 'yesterday -> the day before.');

  P(IS, M, 'If I ____ harder last year, I would have a better job now.', ['studied', 'had studied', 'study', 'would study'], 2, 'Mixed A: had + V3 (past cause), would + V1 (result now).');
  P(IS, M, 'If he were more careful, he ____ that mistake yesterday.', ['wouldn\'t make', 'wouldn\'t have made', 'won\'t make', 'hadn\'t made'], 2, 'Mixed B: V2 in the if-clause, would have + V3 for a past result.');
  P(IS, M, 'If you ____ your homework, you can go out.', ['have finished', 'had finished', 'would finish', 'will finish'], 1, 'Type 1 with present perfect: the action must be finished first.');
  P(IS, M, 'If she ____ the keys, she would be at home now.', ['didn\'t lose', 'hadn\'t lost', 'won\'t lose', 'doesn\'t lose'], 2, 'Mixed A: past cause (had + V3) with a result now.');
  P(IS, M, 'I wish I ____ to the party last night.', ['went', 'had gone', 'would go', 'go'], 2, 'wish + had + V3 = regret about the past.');
  P(EI, M, 'If I (1) would have (2) known the answer, I (3) would have (4) told you.', ['(1) would have', '(2) known', '(3) would have', '(4) told'], 1, 'No would in the if-clause: If I had known.');
  P(IS, M, 'If it ____ tomorrow, we will cancel the picnic.', ['rains', 'will rain', 'rained', 'would rain'], 1, 'Type 1: present simple in the if-clause, even for the future.');
  P(IS, M, 'If I ____ you, I would apologise.', ['am', 'was', 'were', 'had been'], 3, 'Type 2: "were" is used for all persons.');
  P(IS, M, 'Unless you ____ hard, you will fail.', ['study', 'don\'t study', 'studied', 'would study'], 1, 'Unless already means "if not": no negative after it.');

  P(IS, H, 'She ____ here since she moved in 2015.', ['lived', 'has lived', 'had lived', 'was living'], 2, 'since + past point: present perfect.');
  P(IS, H, 'It has been two years since he ____ .', ['leaves', 'left', 'has left', 'had left'], 2, 'since + V2.');
  P(IS, H, 'By the time we arrived, the film ____ .', ['started', 'has started', 'had started', 'was starting'], 3, 'The earlier action takes had + V3.');
  P(IS, H, 'It is the first time I ____ this dish.', ['ate', 'have eaten', 'had eaten', 'eat'], 2, 'It is the first time + present perfect.');
  P(IS, H, 'I ____ him yesterday.', ['have seen', 'saw', 'had seen', 'have been seeing'], 2, 'yesterday -> past simple.');
  P(IS, H, 'After she ____ lunch, she went back to work.', ['has eaten', 'had eaten', 'eats', 'eating'], 2, 'After + had + V3 for the earlier action.');
  P(EI, H, 'She (1) has gone (2) to the market (3) yesterday (4) with her mother.', ['has gone', 'to the market', 'yesterday', 'with her mother'], 1, 'yesterday needs past simple: went.');
  P(IS, H, 'We ____ each other since 2010.', ['know', 'knew', 'have known', 'are knowing'], 3, 'since + year: present perfect.');
  P(IS, H, 'When I ____ home, my mother had already cooked dinner.', ['arrived', 'have arrived', 'had arrived', 'arrive'], 1, 'The later action (arrived) is past simple; the earlier action is past perfect.');
})();

