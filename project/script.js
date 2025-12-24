
const cardsList = [
  "00_Fool.jpg","01_Magician.jpg","02_HighPriestess.jpg","03_Empress.jpg","04_Emperor.jpg",
  "05_Hierophant.jpg","06_Lovers.jpg","07_Chariot.jpg","08_Strength.jpg","09_Hermit.jpg",
  "10_WheelOfFortune.jpg","11_Justice.jpg","12_HangedMan.jpg","13_Death.jpg","14_Temperance.jpg",
  "15_Devil.jpg","16_Tower.jpg","17_Star.jpg","18_Moon.jpg","19_Sun.jpg","20_Judgement.jpg","21_World.jpg"
];


const meanings = {

"00_Fool.jpg": {
  name: "The Fool",
  past_upright: [
    "Your past holds a moment where you bravely stepped into the unknown, even if you felt unprepared. That leap shaped your courage and taught you that hope can be stronger than fear.",
    "There was a time when you acted from pure instinct and innocence. Even if mistakes were made, that chapter awakened a deep part of you searching for freedom.",
    "You come from a period of fresh starts and spontaneous choices. Those experiences opened your heart and helped you understand your own willingness to explore life."
  ],
  present_upright: [
    "Right now, your spirit longs to break free from routine and embrace something new. A part of you is ready for a beginning that feels clean and honest.",
    "This moment invites you to trust yourself, even if the path is unclear. Your heart knows where it wants to go — allow it to guide you gently forward.",
    "You are on the edge of a new chapter. The universe is asking you to release fear and hold on to faith, even if you can’t yet see the full picture."
  ],
  future_upright: [
    "Your future carries a fresh start — a moment when you feel lighter, freer, and more connected to your true desires.",
    "Soon, you will be invited into something completely new. This opportunity will help you rediscover joy and innocence.",
    "You are moving toward a chapter that encourages boldness. A leap of faith will open doors you didn’t know were meant for you."
  ],
  past_reversed: [
    "Your past includes a moment where fear stopped you from stepping forward, leaving you unsure and disconnected from your instincts.",
    "You once hesitated when life asked you to leap, and that hesitation left a mark — but it also taught you the value of patience and grounding.",
    "There was a chapter behind you where recklessness or confusion led to consequences that still echo emotionally."
  ],
  present_reversed: [
    "Right now, uncertainty may be clouding your path. You may feel stuck between wanting change and fearing what it might bring.",
    "A part of you longs for a fresh beginning, but doubt or lack of direction keeps you standing still. Be gentle with yourself — clarity will come.",
    "You may feel ungrounded or hesitant today. Take small steps instead of big jumps, and let stability guide you back to yourself."
  ],
  future_reversed: [
    "If you move forward without reflection, you may repeat a familiar mistake or fall into an old pattern.",
    "The future asks you to pause before leaping. A thoughtful approach will protect you from unnecessary pain.",
    "Soon you will be asked to choose between fear and growth — take your time, and let inner clarity guide your decision."
  ]
},

"01_Magician.jpg": {
  name: "The Magician",
  past_upright: [
    "Your past holds a moment where you discovered your own capability, even if quietly. You realized you could create more than you once believed.",
    "There was a time when you acted with intention and aligned your energy with your goals — and it changed something inside you.",
    "You come from a chapter where your skills began to awaken. You learned the power of focus and belief."
  ],
  present_upright: [
    "Right now, your personal power is stronger than you think. You have everything you need to shape the direction of your life.",
    "Your ideas, talents, and intuition are aligning. This is a time to act boldly and trust your ability to manifest.",
    "You are in a moment where clarity flows through you. What you focus on now can grow into something meaningful."
  ],
  future_upright: [
    "The future brings a moment of strong manifestation. Your efforts will align with results, opening doors you’ve waited for.",
    "Soon, you will feel empowered and capable, able to take action with confidence and precision.",
    "You are moving toward a chapter where your skills will shine. You will create something that feels deeply aligned with who you are."
  ],
  past_reversed: [
    "Your past carries a time when self-doubt held you back from recognizing your true potential.",
    "There was a moment where confusion, scattered energy, or manipulation—whether from you or someone else—blurred your path.",
    "You once felt powerless or misled, shaping your current desire for clarity and honesty."
  ],
  present_reversed: [
    "You may feel disconnected from your own abilities right now, unsure of where to direct your energy.",
    "Someone may be influencing your perception, or you may be doubting your worth. Pause and reconnect to what feels true.",
    "Your energy feels scattered. Slow down, ground yourself, and release any pressure to act before you are ready."
  ],
  future_reversed: [
    "The future warns of unrealistic expectations or someone trying to manipulate your vision — stay aware and trust your intuition.",
    "You may soon face a moment of self-doubt, but it will teach you to step back into your authenticity.",
    "A lack of clarity may slow progress, but with patience you’ll regain control and realign with your purpose."
  ]
},

"02_HighPriestess.jpg": {
  name: "The High Priestess",
  past_upright: [
    "Your past holds quiet moments where intuition guided you more than logic, shaping who you’ve become.",
    "You come from a chapter filled with unspoken truths and emotional depth — lessons learned in silence.",
    "There was a time when you sensed everything deeply, even if you kept your feelings hidden."
  ],
  present_upright: [
    "Right now, your inner voice is louder than the world around you. Trust the guidance rising from within.",
    "You are in a moment of emotional sensitivity and spiritual clarity. Answers will arrive when you create stillness.",
    "Something beneath the surface is trying to reveal itself. Listen gently — your intuition knows the way."
  ],
  future_upright: [
    "A revelation or emotional insight awaits you. Soon, something hidden will come into focus.",
    "You are moving toward a deeper understanding of yourself and your relationships.",
    "The future brings clarity through intuition — a truth rises softly, helping you heal."
  ],
  past_reversed: [
    "Your past holds a time when you ignored or doubted your inner knowing, leading to confusion.",
    "There was a moment where secrets — yours or someone else’s — clouded your perception.",
    "You once silenced your emotional truth, and the weight of that silence shaped your heart."
  ],
  present_reversed: [
    "Right now, your intuition feels blocked or muted. You may be overthinking or trying too hard to find answers.",
    "You might be receiving mixed signals — from others or from your own emotions. Give yourself space.",
    "Something feels unclear, and you may not know who or what to trust. Start by trusting yourself."
  ],
  future_reversed: [
    "The future warns against ignoring your intuition. Listen to small signs — they matter.",
    "A delay in clarity may leave you uncertain, but patience will reveal what is hidden.",
    "You may face emotional confusion before understanding fully returns."
  ]
},

"03_Empress.jpg": {
  name: "The Empress",
  past_upright: [
    "You once gave deeply, nurturing others even when you felt empty. That tenderness shaped your healing journey.",
    "Your past carries moments of emotional warmth and care, revealing how strong your heart truly is.",
    "There was a time when you created beauty around you, even during personal struggle."
  ],
  present_upright: [
    "Right now you are being asked to nurture yourself with the same compassion you offer others.",
    "Your emotional energy is softening. Healing, creativity, and comfort are rising within you.",
    "You are entering a phase of gentle expansion — your heart is learning to feel safe again."
  ],
  future_upright: [
    "Love, comfort, or emotional security will soon deepen in your life. You are moving toward warmth.",
    "A time of abundance and emotional renewal lies ahead of you.",
    "You’re entering a future where your heart will feel nourished, supported, and understood."
  ],
  past_reversed: [
    "Your past holds wounds from giving too much and receiving too little.",
    "There was a period where you felt unseen or emotionally unsupported, shaping your insecurities today.",
    "You once struggled with self-worth, leaving old scars that still ask for healing."
  ],
  present_reversed: [
    "You may feel emotionally drained or disconnected from your sense of worth right now.",
    "Your heart is tired from carrying too much. It’s time to rest and rebuild your energy.",
    "This moment asks you to stop abandoning yourself for the sake of others."
  ],
  future_reversed: [
    "If you continue ignoring your needs, emotional exhaustion may deepen.",
    "Your future warns against pouring into people who cannot pour back into you.",
    "A lack of self-care may create distance within your relationships — choose yourself gently."
  ]
},

"04_Emperor.jpg": {
  name: "The Emperor",
  past_upright: [
    "Your past was shaped by responsibility — times where you had to be strong even when you were hurting.",
    "You once built stability for yourself or those around you, giving structure where there was none.",
    "There was a moment where discipline shaped your growth, teaching you resilience."
  ],
  present_upright: [
    "Right now, you’re being called to take control of your life with clarity and grounded strength.",
    "You are entering a moment where structure will support your emotional well-being.",
    "Your energy is becoming more focused — boundaries and stability are helping you heal."
  ],
  future_upright: [
    "A future of stability awaits you. You will feel more secure and confident in your choices.",
    "You’re moving toward a time where your leadership and discipline bring real progress.",
    "Soon you will stand firmly in your power, building something meaningful and lasting."
  ],
  past_reversed: [
    "Your past holds memories of someone overpowering you — or a time where you felt small and unheard.",
    "There was a chapter where lack of structure left you emotionally unstable.",
    "You once struggled with control — either losing it or having too much forced upon you."
  ],
  present_reversed: [
    "You may feel ungrounded or overwhelmed by responsibility at this time.",
    "Control issues — yours or someone else's — may be affecting your peace.",
    "You might feel unsupported or unsure of your direction. Pause and find your center."
  ],
  future_reversed: [
    "The future warns of rigid expectations or emotional burnout if you don’t soften your approach.",
    "You may face power struggles ahead — choose patience over force.",
    "Loose boundaries may create chaos later; strengthen them gently now."
  ]
},

"05_Hierophant.jpg": {
  name: "The Hierophant",
  past_upright: [
    "Your past was shaped by tradition, guidance, or lessons learned through experience.",
    "You once followed a path that others expected of you, even if quietly.",
    "A mentor, belief, or value system shaped who you became."
  ],
  present_upright: [
    "Right now, you are being guided toward stability, wisdom, and grounded choices.",
    "This moment invites you to lean on what you know to be true — your inner values.",
    "You are learning to trust steady, patient growth rather than rushing forward."
  ],
  future_upright: [
    "A stable path lies ahead — one built on wisdom, patience, and trust.",
    "Soon, a mentor or supportive system will help guide your next steps.",
    "Your future brings clarity through grounded, steady choices."
  ],
  past_reversed: [
    "Your past holds a time where you felt restricted by expectations or traditions.",
    "There was a moment where you broke away from what others demanded of you.",
    "You once rebelled against a path that didn’t feel aligned with your soul."
  ],
  present_reversed: [
    "You may be questioning rules, beliefs, or patterns that once felt stable.",
    "Right now, you are craving freedom from pressure or expectation.",
    "Your spirit is asking you to step outside what others consider 'normal' or 'safe.'"
  ],
  future_reversed: [
    "The future invites you to explore your own truth, even if it challenges old structures.",
    "You may soon feel called to break a pattern that has held you back emotionally.",
    "A moment of redefining your beliefs will open the way for healing."
  ]
},

"06_Lovers.jpg": {
  name: "The Lovers",
  past: {
    upright: [
      "Your past holds a connection that shaped you deeply — a bond that taught you how powerful love can be when it is safe and mutual.",
      "There was once harmony in your life that helped you discover who you were through someone else, a moment of emotional alignment that left a mark on your heart."
    ],
    reversed: [
      "A past relationship or choice left you feeling torn, divided, or uncertain. The wound came from having to choose between yourself and someone else.",
      "Miscommunication or imbalance in love shaped your earlier experiences, teaching you the weight of giving too much."
    ]
  },
  present: {
    upright: [
      "Right now your heart is seeking alignment — clarity between what you feel and what you choose. A meaningful bond may be deepening.",
      "Your emotions are guiding you toward a connection that feels honest and healing. Love is trying to open a door for you."
    ],
    reversed: [
      "You may feel disconnected or uncertain in love at the moment. Emotions and decisions are tangled together.",
      "A lack of harmony or clarity in a relationship is pulling at your heart. You’re being asked to choose what honors your well-being."
    ]
  },
  future: {
    upright: [
      "A deep emotional connection will strengthen in your future — one that feels aligned with your truth.",
      "A choice in love will become clearer soon. What is meant for you will move toward you naturally."
    ],
    reversed: [
      "A difficult decision about love lies ahead, but it will bring emotional honesty and closure.",
      "The future asks you to be careful with your heart — not every connection deserves your softness."
    ]
  }
},

"07_Chariot.jpg": {
  name: "The Chariot",
  past_upright: [
    "Your past was shaped by determination and the drive to move forward.",
    "There were moments where you took control of your path, even when it was difficult.",
    "Your efforts in the past helped you develop inner strength and resilience."
  ],
  present_upright: [
    "Right now, you are regaining a sense of control and direction.",
    "You are learning to trust your inner drive and steady your focus.",
    "This is a moment to move forward with careful determination."
  ],
  future_upright: [
    "The future brings progress earned through consistent effort.",
    "You will move steadily toward a meaningful goal.",
    "Success will come through persistence and thoughtful action."
  ],
  past_reversed: [
    "In the past, you may have felt overwhelmed or uncertain about your direction.",
    "Moments of doubt may have slowed your progress or made you question yourself.",
    "You learned lessons from times when control felt out of reach."
  ],
  present_reversed: [
    "Right now, you may feel lost or unsure about which way to go.",
    "Frustration or tension may cloud your judgment.",
    "Pausing and reflecting will help you regain clarity and balance."
  ],
  future_reversed: [
    "If you push too hard, burnout may follow.",
    "The future asks for steady, balanced effort rather than forceful action.",
    "Taking things slowly will help you maintain direction and clarity."
  ]
},

"08_Strength.jpg": {
  name: "Strength",
  past_upright: [
    "Your past shows moments where quiet courage guided you.",
    "You faced challenges that taught patience, resilience, and gentle self-control.",
    "Strength was built through compassion and understanding rather than force."
  ],
  present_upright: [
    "Right now, you are discovering your inner resilience once more.",
    "You are learning to face fears calmly and with patience.",
    "This is a time for gentle self-trust and emotional balance."
  ],
  future_upright: [
    "The future holds a steady growth of confidence and emotional strength.",
    "You will face challenges with grace and measured courage.",
    "Your personal power will emerge naturally and without strain."
  ],
  past_reversed: [
    "You may have experienced doubt or insecurity in the past.",
    "Moments of fear may have made you question your abilities.",
    "You learned to navigate vulnerability and emotional fragility."
  ],
  present_reversed: [
    "Right now, self-doubt may be affecting your confidence.",
    "You may feel emotionally fragile, needing kindness toward yourself.",
    "It is a time to nurture patience and compassion inwardly."
  ],
  future_reversed: [
    "The future invites you to release self-criticism.",
    "Strength will grow as you embrace gentleness and acceptance.",
    "Confidence will build gradually through emotional care."
  ]
},

"09_Hermit.jpg": {
  name: "The Hermit",
  past_upright: [
    "Your past reflects periods of quiet reflection and inner searching.",
    "You sought understanding and wisdom by looking within.",
    "Solitude helped shape the guidance you carry today."
  ],
  present_upright: [
    "Right now, you are being called to pause and reflect deeply.",
    "This is a time to listen to your inner voice and intuition.",
    "Answers come through stillness and self-awareness rather than action."
  ],
  future_upright: [
    "The future offers moments of insight and personal understanding.",
    "You will gain clarity about yourself and your path.",
    "Wisdom will come gently through reflection and experience."
  ],
  past_reversed: [
    "In the past, isolation may have felt heavy or unhelpful.",
    "You may have avoided your feelings instead of facing them.",
    "Moments of withdrawal were not always nurturing."
  ],
  present_reversed: [
    "Right now, you may feel disconnected or withdrawn.",
    "Avoiding emotions may delay clarity.",
    "You are invited to approach reflection with gentleness, not distance."
  ],
  future_reversed: [
    "Too much withdrawal may lead to loneliness.",
    "The future encourages gentle openness alongside reflection.",
    "Connection will support clarity and personal growth."
  ]
},

"10_WheelOfFortune.jpg": {
  name: "Wheel of Fortune",
  past_upright: [
    "Your past has been shaped by cycles of change and shifting circumstances.",
    "You learned to adapt to ups and downs that influenced your path.",
    "Fate introduced lessons that shaped your resilience and perspective."
  ],
  present_upright: [
    "Right now, you are at a turning point.",
    "Life is gently rearranging circumstances to bring you closer to opportunity.",
    "This is a time to notice patterns and trust the unfolding process."
  ],
  future_upright: [
    "The future holds positive cycles and meaningful change.",
    "Opportunities will align with your intentions and readiness.",
    "Progress comes through patience and adaptation to the flow of life."
  ],
  past_reversed: [
    "In the past, you may have felt stuck or held back by repeating patterns.",
    "Challenges may have made you cautious or uncertain about change.",
    "You learned the importance of timing and patience."
  ],
  present_reversed: [
    "Right now, you may feel blocked or delayed.",
    "Movement feels slower than expected, yet cycles are still in motion.",
    "Pausing and observing will help you navigate temporary obstacles."
  ],
  future_reversed: [
    "The future asks you to release resistance to change.",
    "Delays serve as protection while you prepare for new cycles.",
    "Adjusting to timing will allow smoother progress ahead."
  ]
},

"11_Justice.jpg": {
  name: "Justice",
  past_upright: [
    "Your past was shaped by moments where honesty and responsibility played a key role.",
    "You learned important lessons through truth, even when it was uncomfortable.",
    "A choice from the past taught you the importance of fairness and balance."
  ],
  present_upright: [
    "Right now, you are being asked to act with honesty and clarity.",
    "This is a time to face situations with fairness — both toward yourself and others.",
    "You are learning to trust truth as your guiding light."
  ],
  future_upright: [
    "A fair outcome is forming quietly in the background.",
    "Your future will reward you for choosing honesty over avoidance.",
    "Balance will slowly return through clear and thoughtful decisions."
  ],
  past_reversed: [
    "Your past holds a moment where truth may have been hidden or avoided.",
    "You may have experienced unfairness that left emotional confusion.",
    "A situation from your past felt unbalanced or unresolved."
  ],
  present_reversed: [
    "Right now, you may be avoiding accountability or clarity.",
    "Something feels emotionally unbalanced and hard to define.",
    "You may be struggling to see truth clearly in the present moment."
  ],
  future_reversed: [
    "The future warns against ignoring truth for too long.",
    "Unresolved matters may return gently asking for closure.",
    "Clarity will only come when honesty is fully embraced."
  ]
},

"12_HangedMan.jpg": {
  name: "The Hanged Man",
  past_upright: [
    "Your past required patience and quiet surrender.",
    "There was a time when waiting taught you more than action ever could.",
    "You learned important lessons through stillness and trust."
  ],
  present_upright: [
    "Right now, you are being asked to pause and look at things differently.",
    "This is a moment for reflection rather than movement.",
    "You are learning to release control and trust the process."
  ],
  future_upright: [
    "Peace will come through acceptance and gentle understanding.",
    "The future invites you to let go with softness rather than force.",
    "A clearer perspective will slowly unfold."
  ],
  past_reversed: [
    "In the past, you may have resisted change or deep reflection.",
    "You felt stuck because release felt too difficult.",
    "Fear may have delayed important emotional growth."
  ],
  present_reversed: [
    "Right now, you may feel emotionally blocked or restless.",
    "You want movement but feel unsure how to proceed.",
    "There is tension between wanting change and fearing it."
  ],
  future_reversed: [
    "If resistance remains, progress may feel delayed.",
    "The future asks for openness rather than control.",
    "Growth will come once fear softens."
  ]
},

"13_Death.jpg": {
  name: "Death",
  past_upright: [
    "Your past was shaped by a powerful ending that changed your direction.",
    "You closed one chapter to make space for something new.",
    "A transformation from your past still influences you today."
  ],
  present_upright: [
    "Right now, you are standing at the edge of change.",
    "Something in your life is gently asking to be released.",
    "This moment invites renewal through quiet transformation."
  ],
  future_upright: [
    "A fresh beginning is slowly approaching.",
    "Your future holds a new version of yourself shaped by healing.",
    "What ends will gently open the door to something better."
  ],
  past_reversed: [
    "Your past may hold a time when you resisted letting go.",
    "Fear made endings feel heavier than they needed to be.",
    "You held on longer than your heart wanted to."
  ],
  present_reversed: [
    "Right now, fear of change may be creating emotional tension.",
    "You may feel stuck between what was and what could be.",
    "Letting go feels difficult, even when you know it is needed."
  ],
  future_reversed: [
    "If release is delayed, healing may take longer than expected.",
    "The future asks you to trust change instead of fearing it.",
    "Peace will arrive once attachment softens."
  ]
},

"14_Temperance.jpg": {
  name: "Temperance",
  past_upright: [
    "Your past taught you the importance of balance and patience.",
    "You once learned how to blend emotion and logic gently.",
    "Harmony guided you through moments of uncertainty."
  ],
  present_upright: [
    "Right now, you are learning emotional moderation and calm.",
    "This is a time of quiet healing and steady growth.",
    "You are discovering peace through balance."
  ],
  future_upright: [
    "Your future holds a period of harmony and emotional stability.",
    "Peace will return through gentle understanding.",
    "You will find strength through patience and softness."
  ],
  past_reversed: [
    "Your past may reflect moments of emotional excess or stress.",
    "You once struggled to find your inner balance.",
    "Imbalance taught you difficult but important lessons."
  ],
  present_reversed: [
    "Right now, your emotions may feel scattered or intense.",
    "You may be feeling pulled in different directions.",
    "It is time to slow down and reconnect with calm."
  ],
  future_reversed: [
    "If balance is ignored, emotional tension may grow.",
    "The future asks you to restore harmony before moving forward.",
    "Peace will return once moderation is embraced."
  ]
},

"15_Devil.jpg": {
  name: "The Devil",
  past_upright: [
    "Your past holds a time where unhealthy attachment influenced your choices.",
    "You once felt emotionally tied to something difficult to release.",
    "Fear or desire shaped a chapter of your life."
  ],
  present_upright: [
    "Right now, you may feel tempted or controlled by old habits.",
    "This is a moment of becoming aware of emotional limitations.",
    "You are learning what still holds power over you."
  ],
  future_upright: [
    "Your future asks you to face your fears gently and honestly.",
    "True freedom will begin through awareness.",
    "You are being guided to reclaim your emotional power."
  ],
  past_reversed: [
    "Your past shows the beginning of breaking free from emotional chains.",
    "You started to recognize what no longer served you.",
    "Old fears slowly lost their grip."
  ],
  present_reversed: [
    "Right now, you are releasing attachment and fear.",
    "Emotional healing is happening quietly.",
    "You are reclaiming control over your inner world."
  ],
  future_reversed: [
    "Freedom will come through conscious choice and self-trust.",
    "Your future holds release from what once restricted you.",
    "Peace will grow as fear fades."
  ]
},

"16_Tower.jpg": {
  name: "The Tower",
  past_upright: [
    "Your past was shaped by a sudden shift that changed your direction.",
    "Something unexpected forced you to see life differently.",
    "What fell apart taught you deep emotional truths."
  ],
  present_upright: [
    "Right now, truth is quietly dismantling old illusions.",
    "This is a time of awakening through emotional honesty.",
    "You are seeing what can no longer stand as it once did."
  ],
  future_upright: [
    "Your future holds a powerful realization.",
    "What changes will guide you toward something more real.",
    "Transformation will clear space for something stronger."
  ],
  past_reversed: [
    "Your past shows a time where change was avoided.",
    "You sensed transformation but chose delay.",
    "Fear softened the impact but postponed growth."
  ],
  present_reversed: [
    "Right now, you may feel resistant to necessary change.",
    "You sense something must shift but hesitate.",
    "Fear may be slowing transformation."
  ],
  future_reversed: [
    "The future brings gentle change rather than sudden disruption.",
    "Delays protect you while healing unfolds slowly.",
    "Transformation will arrive when you are ready."
  ]
},

"17_Star.jpg": {
  name: "The Star",
  past_upright: [
    "Your past was touched by hope during difficult times.",
    "Faith helped guide you through emotional heaviness.",
    "You once trusted that healing was possible."
  ],
  present_upright: [
    "Right now, healing is softly unfolding within you.",
    "You are reconnecting with hope and emotional light.",
    "This moment brings quiet renewal."
  ],
  future_upright: [
    "Your future holds peace, gentle joy, and emotional clarity.",
    "A calm sense of trust will return to your heart.",
    "Hope will quietly guide you forward."
  ],
  past_reversed: [
    "Your past reflects moments where hope felt distant.",
    "You may have felt disconnected from faith.",
    "Emotional exhaustion clouded light."
  ],
  present_reversed: [
    "Right now, you may feel drained or uncertain.",
    "Hope feels fragile but still present.",
    "This is a time to gently rebuild trust."
  ],
  future_reversed: [
    "The future asks you to nurture hope carefully.",
    "Healing will come through patience and kindness.",
    "Light will return slowly and steadily."
  ]
},

"18_Moon.jpg": {
  name: "The Moon",
  past_upright: [
    "Your past was guided by emotion and uncertainty.",
    "You once walked through confusion and emotional fog.",
    "Fear shaped part of your journey."
  ],
  present_upright: [
    "Right now, your intuition is softly guiding you.",
    "You are learning to listen to feelings rather than logic.",
    "This is a time of emotional awareness."
  ],
  future_upright: [
    "The future will slowly reveal what is hidden.",
    "Truth will become clearer with time.",
    "Emotional understanding will replace confusion."
  ],
  past_reversed: [
    "Your past reflects a time when fear controlled your choices.",
    "You struggled to trust your inner voice.",
    "Emotional shadows shaped your direction."
  ],
  present_reversed: [
    "Right now, confusion is beginning to lift.",
    "You are slowly finding emotional clarity.",
    "Fear is losing its grip."
  ],
  future_reversed: [
    "Truth will gently rise to the surface.",
    "The future brings emotional honesty.",
    "Clarity will replace illusion."
  ]
},

"19_Sun.jpg": {
  name: "The Sun",
  past_upright: [
    "Your past holds moments of joy, warmth, and confidence.",
    "You once felt emotionally supported and understood.",
    "Happiness shaped a chapter of your life."
  ],
  present_upright: [
    "Right now, happiness is gently returning.",
    "You are stepping into emotional warmth and clarity.",
    "This is a time of renewed confidence."
  ],
  future_upright: [
    "Your future holds joy, success, and emotional fulfillment.",
    "Light will surround your next chapter.",
    "You are moving toward emotional happiness."
  ],
  past_reversed: [
    "Your past shows moments where joy felt distant.",
    "Confidence may have been shaken.",
    "Emotional warmth was clouded."
  ],
  present_reversed: [
    "Right now, light is present but softened.",
    "You may feel temporary sadness or doubt.",
    "Joy is returning slowly."
  ],
  future_reversed: [
    "The future asks you to nurture happiness gently.",
    "True joy will grow through emotional care.",
    "Light will strengthen with time."
  ]
},

"20_Judgement.jpg": {
  name: "Judgement",
  past_upright: [
    "Your past holds a moment of deep realization.",
    "You once recognized an inner truth that changed you.",
    "Awakening quietly shaped your direction."
  ],
  present_upright: [
    "Right now, you are being called to rise emotionally.",
    "This is a time of release, reflection, and renewal.",
    "Your heart asks for honest self-review."
  ],
  future_upright: [
    "The future brings a gentle awakening.",
    "You will step into clarity through forgiveness and understanding.",
    "A new emotional chapter will begin."
  ],
  past_reversed: [
    "Your past reflects moments of self-doubt and hesitation.",
    "You once ignored an inner calling.",
    "Fear delayed emotional awakening."
  ],
  present_reversed: [
    "Right now, you may be avoiding your true path.",
    "Inner truth feels uncomfortable to face.",
    "You are questioning your sense of purpose."
  ],
  future_reversed: [
    "If avoidance continues, awakening may feel delayed.",
    "The future asks for courage and self-honesty.",
    "Truth will arrive when you are ready to face it."
  ]
},

"21_World.jpg": {
  name: "The World",
  past_upright: [
    "Your past reflects a moment of emotional completion.",
    "You once reached a meaningful personal milestone.",
    "A cycle closed with understanding."
  ],
  present_upright: [
    "Right now, you stand in a place of fulfillment.",
    "You are feeling the wholeness of your journey.",
    "Everything is aligning gently."
  ],
  future_upright: [
    "The future brings a sense of joyful completion.",
    "You will feel whole through emotional achievement.",
    "Your path leads toward peaceful fulfillment."
  ],
  past_reversed: [
    "Your past reflects unfinished emotional business.",
    "A cycle remained open longer than expected.",
    "Closure felt delayed."
  ],
  present_reversed: [
    "Right now, something still feels incomplete.",
    "You may be searching for emotional closure.",
    "There is one final piece missing."
  ],
  future_reversed: [
    "The future asks you to claim your own closure.",
    "Completion will come through conscious acceptance.",
    "Peace will follow once endings are honored."
  ]
}

};


let user = {};
let deck = []; 
let chosenThree = [];

const userForm = document.getElementById("userForm");
const userSection = document.getElementById("user-section");
const shuffleSection = document.getElementById("shuffle-section");
const spreadSection = document.getElementById("spread-section");
const readingSection = document.getElementById("reading-section");

const shuffleBoard = document.getElementById("shuffleBoard");
const shuffleBtn = document.getElementById("shuffleBtn");
const dealBtn = document.getElementById("dealBtn");

const spread = document.getElementById("spread");
const revealAllBtn = document.getElementById("revealAllBtn");
const readingOutput = document.getElementById("readingOutput");
const restartBtn = document.getElementById("restartBtn");

const cardSlots = document.querySelectorAll(".card-slot");


function rndInt(n){ return Math.floor(Math.random()*n); }
function shuffleArray(a){
  for (let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function pickPronoun(g){
  if (g === "he") return { subj: "he", obj: "him", poss: "his" };
  if (g === "she") return { subj: "she", obj: "her", poss: "her" };
 
}
function escapeHtml(s){
  if (s === undefined || s === null) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}


userForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  user.name = document.getElementById("name").value.trim() || "Seeker";
  user.age = document.getElementById("age").value || "";
  user.status = document.getElementById("status").value || "";
  user.relationship = document.getElementById("relationship").value || "";
  user.gender = document.getElementById("gender").value || "they";

  
  buildDeck();
  userSection.classList.add("d-none");
  shuffleSection.classList.remove("d-none");
});


function buildDeck(){
  deck = cardsList.map(fn => ({ filename: fn, reversed: Math.random() < 0.5 }));
  shuffleArray(deck);
  renderShuffleBoard();
}


function renderShuffleBoard(){
  shuffleBoard.innerHTML = "";
  const count = Math.min(deck.length, 24);
  for (let i=0;i<count;i++){
    const d = deck[i];
    const el = document.createElement("img");
    el.className = "shuffle-card";
    
    el.src = `cards/back.jpg`;
    el.alt = d.filename;
    
    el.style.left = `${rndInt(80)}%`;
    el.style.top = `${rndInt(70)}%`;
    el.style.transform = `rotate(${rndInt(360)}deg) scale(${0.85 + Math.random()*0.5})`;
    el.onerror = ()=>{ el.style.background="#eee"; el.src=""; el.alt="missing"; el.style.display="flex"; el.style.alignItems="center"; el.style.justifyContent="center"; el.textContent=d.filename;}
    shuffleBoard.appendChild(el);
  }
}


shuffleBtn.addEventListener("click", ()=>{
  const cards = Array.from(document.querySelectorAll(".shuffle-card"));
  cards.forEach(c=>{
    c.style.left = `${rndInt(80)}%`;
    c.style.top = `${rndInt(70)}%`;
    c.style.transform = `rotate(${rndInt(360)}deg) scale(${0.85 + Math.random()*0.5})`;
  });
  dealBtn.disabled = false;
});

dealBtn.addEventListener("click", ()=>{
  if (deck.length < 3){ alert("Not enough cards in deck"); return; }

  shuffleArray(deck);
  chosenThree = [
    { ...deck[0] },
    { ...deck[1] },
    { ...deck[2] }
  ];

 
  const slots = Array.from(document.querySelectorAll(".card-slot"));
  slots.forEach((slot, idx) => {
    const front = slot.querySelector(".card-front");
    front.src = `cards/front/${chosenThree[idx].filename}`;
    front.alt = chosenThree[idx].filename;
    slot.dataset.filename = chosenThree[idx].filename;
    slot.dataset.reversed = chosenThree[idx].reversed ? "true" : "false";
    
    slot.classList.remove("flip");
    slot.classList.remove("locked");
  });

  shuffleSection.classList.add("d-none");
  spreadSection.classList.remove("d-none");
  revealAllBtn.disabled = false;
});


spread.addEventListener("click", (ev)=>{
  const slot = ev.target.closest(".card-slot");
  if (!slot) return;
  if (slot.classList.contains("locked")) return;

  
  slot.classList.add("flip");
  slot.classList.add("locked");
  slot.querySelector(".card-front").classList.remove("d-none");
  

  
  const front = slot.querySelector(".card-front");
  const isRev = slot.dataset.reversed === "true";
  if (isRev) front.style.transform = "rotate(180deg)";
  else front.style.transform = "rotate(0deg)";

  checkAllRevealed();
});


revealAllBtn.addEventListener("click", ()=>{
  document.querySelectorAll(".card-slot").forEach(slot=>{
    if (!slot.classList.contains("locked")){
      slot.classList.add("flip");
      slot.classList.add("locked");
      front.classList.remove("d-none");

      const front = slot.querySelector(".card-front");
      const isRev = slot.dataset.reversed === "true";
      if (isRev) front.style.transform = "rotate(180deg)";
      else front.style.transform = "rotate(0deg)";
    }
  });
  checkAllRevealed();
});


function checkAllRevealed(){
  const locked = document.querySelectorAll(".card-slot.locked").length;
  if (locked >= 3){
    setTimeout(generateReading, 600);
  }
}

function generateReading() {
  const pron = pickPronoun(user.gender);
  const header = `<p><strong>${escapeHtml(user.name)}</strong>, a ${escapeHtml(user.age)}-year-old ${escapeHtml(user.status)} in a ${escapeHtml(user.relationship)} relationship.</p>`;

  const slots = Array.from(document.querySelectorAll(".card-slot"));
  const positions = ["Past", "Present", "Future"];
  let html = header;

  slots.forEach((slot, i) => {
    const filename = slot.dataset.filename;
    const reversed = slot.dataset.reversed === "true";
    const meta = meanings[filename];
    const title = meta ? meta.name : filename.replace(/_/g, " ").replace(".jpg", "");

    let meaningText = "Meaning not added yet.";

    if (meta) {
      const posKey = ["past", "present", "future"][i];

      if (meta[`${posKey}_upright`] && meta[`${posKey}_reversed`]) {
        const list = reversed ? meta[`${posKey}_reversed`] : meta[`${posKey}_upright`];
        meaningText = list[Math.floor(Math.random() * list.length)];
      } else if (meta[posKey]) {
        const list = reversed ? meta[posKey].reversed : meta[posKey].upright;
        meaningText = list[Math.floor(Math.random() * list.length)];
      }
    }

   
    html += `
      <div class="card-reading">
        <img src="cards/front/${escapeHtml(filename)}"
             alt="${escapeHtml(title)}"
             style="transform: rotate(${reversed ? 180 : 0}deg);" />
        <div>
          <div class="card-meta card-title">
            ${positions[i]} — ${escapeHtml(title)} ${reversed ? "(reversed)" : ""}
          </div>
          <div class="card-meta mt-2">
            ${escapeHtml(meaningText)}
          </div>
        </div>
      </div>
    `;
  });

 
  const overall = `<p>Overall: ${escapeHtml(user.name)}, your journey shows strength rising through experience. The past has shaped you, the present is activating you, and the future is calling you forward. What you choose now will define the emotional path that opens next.</p>`;

  readingOutput.innerHTML = html + overall;

  spreadSection.classList.add("d-none");
  readingSection.classList.remove("d-none");
}



restartBtn.addEventListener("click", ()=>{
 
  readingSection.classList.add("d-none");
  userSection.classList.remove("d-none");
  userForm.reset();
  shuffleBoard.innerHTML = "";
  document.querySelectorAll(".card-slot").forEach(s=>{
    s.classList.remove("flip","locked");
    s.dataset.filename = "";
    s.dataset.reversed = "false";
    const front = s.querySelector(".card-front");
    front.src = "";
    front.style.transform = "";
  });
});





