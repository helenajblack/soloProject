var scipts = new script({

  [question1: '',
    answer1_1: '',
    audio1_1: '',
    answer1_2: '',
    audio1_2: '',
    answer1_3: '',
    audio1_3: '',
  ]

  introFile: 'Hello, I am having an emergency and calling using the urgenC app because I cannot use my voice to speak. Please remain on the line and I will give you the details of my emergency.',
  introFile2: 'My name is' + user_name + 'and I am located at ' + google_location,

  emergency1: 'What"s your emergency?',
  answer2_1: 'Home Invasion',
  audio2_1: 'Someone has entered my home and I need help.'

  nameQ1: 'What"s your name?',
  answerNQ1: user_name,

  question1: 'What kind of residence are you in?',
  answer1_1: 'Home',
  audio1_1: 'none',
  answer1_2: 'Business',
  audio1_2: 'none',
  answer1_3: 'Apartment',
  audio1_3: question2,

  question2: 'Is it your apartment?',
  answer2_1: 'Yes',
  audio2_1: question3,
  answer2_2: 'No',
  audio2_2: 'none',

  question3: 'Are you alone?',
  answer3_1: 'Yes',
  audio3_1: 'I am alone in my apartment.' + question_4,
  answer3_2: 'No',
  audio3_2: 'none',





});
