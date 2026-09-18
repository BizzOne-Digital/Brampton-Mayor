export type AboutBlock = {
  id: string
  title: string
  paragraphs: string[]
  pullQuote?: string
}

export const aboutIntro = {
  headline: 'Born in Brampton. Raised in Brampton. Ready to Serve Brampton.',
  lead: 'Brampton isn’t simply the city where I live. It’s the city that raised me.',
}

export const aboutSections: AboutBlock[] = [
  {
    id: 'roots',
    title: 'Brampton Is Home',
    paragraphs: [
      'I was born and raised right here in Brampton. I attended local schools, walked these streets, played sports in these communities, built lifelong friendships here, and experienced many of the same opportunities and challenges that Brampton families experience today.',
      'I attended St. Augustine Secondary School before leaving Brampton to attend Bishop’s University, where I studied Sports Studies, English Literature, and Business Entrepreneurship.',
      'Leaving home for university allowed me to experience life outside of Brampton, meet people from across the country and see different communities firsthand. But it also gave me a greater appreciation for the city that made me who I am.',
      'No matter where life has taken me, Brampton has always been home.',
    ],
  },
  {
    id: 'paths',
    title: 'Athlete. Artist. Entrepreneur. Youth Worker.',
    paragraphs: [
      'My story has never followed just one path.',
      'I am a musician and artist. I play drums and bass, and I’ve spent years around music, creating, performing and understanding the discipline required to develop a craft.',
      'I’m also an athlete.',
      'Football was a major part of my life, and like many young athletes, I dreamed of one day playing professionally. I continued pursuing that goal and eventually attended a tryout with the Ottawa REDBLACKS, hoping to take another step toward the CFL. Unfortunately, an injury during the tryout changed the direction of that journey.',
      'But I refused to allow an injury to determine the rest of my story. I worked my way back, returned to football and eventually played semi-professionally.',
      'When I eventually stepped away from playing, I took the discipline, determination and resilience that sports taught me and redirected it toward something even more important: helping young people.',
      'Through my work in social services and with youth across Canada, I have worked with young people from many different backgrounds and circumstances. I’ve seen firsthand the difference one opportunity, one mentor, one coach, one teacher or one person who genuinely believes in them can make.',
      'Those experiences have heavily influenced why I am seeking to serve Brampton today.',
    ],
  },
  {
    id: 'greatness',
    title: 'Brampton Produces Greatness. We Should Help Build It.',
    paragraphs: [
      'Brampton has always been a city people talk about.',
      'The question is: How do we want people to talk about Brampton?',
      'Our city has produced extraordinary talent—athletes, musicians, entertainers, entrepreneurs, professionals and community leaders whose accomplishments have reached audiences around the world.',
      'But through conversations I’ve had with athletes and entertainers, I’ve repeatedly heard a similar concern: while they were developing their talent, struggling, sacrificing and trying to become successful, they didn’t always feel that their city was behind them.',
      'Then, once they accomplished something significant, everyone knew their name.',
      'That is where a disconnect can happen.',
      'Brampton shouldn’t discover its talent after the world discovers it.',
      'We should be helping develop that talent from the beginning.',
      'Imagine a Brampton where young musicians have access to affordable rehearsal and recording spaces. Where teenagers interested in cooking can learn culinary skills. Where young people can learn trades and hands-on skills. Where aspiring entrepreneurs can learn how to turn an idea into a business.',
      'We shouldn\'t simply celebrate our success stories.',
      'We should help create them.',
    ],
  },
  {
    id: 'safety',
    title: 'A Safer Brampton Starts With Opportunity',
    paragraphs: [
      'Families deserve to feel safe in the city they call home.',
      'Technology, policing and cameras can all have a role in public safety. But cameras on every corner cannot address every reason crime happens.',
      'We also have to invest in prevention.',
      'We need to ask what happens before a young person gets involved in crime.',
      'Do they have somewhere meaningful to go after school? Can they play sports? Learn music? Learn a trade? Develop culinary skills? Learn financial literacy? Meet entrepreneurs and professionals who came from communities just like theirs?',
      'I want Brampton to expand opportunities that give young people life skills, hands-on training, music and arts programs, culinary education, athletics, mentorship, entrepreneurship and career development.',
      'A safer Brampton requires enforcement, prevention, opportunity and community working together.',
    ],
  },
  {
    id: 'taxes',
    title: 'Fighting to Keep Property Taxes Affordable',
    paragraphs: [
      'Brampton residents are already feeling the pressure of the cost of living.',
      'Families are dealing with mortgages and rent, groceries, utilities, transportation, childcare and countless other expenses. Municipal government must recognize that every additional dollar matters.',
      'I will fight to avoid unnecessary property-tax increases and demand greater accountability for how residents\' tax dollars are spent.',
      'That doesn\'t mean ignoring the services and infrastructure a growing city needs. It means setting priorities, finding efficiencies and making sure residents receive value for the money they send to City Hall.',
      'But controlling costs is only one part of the equation.',
      'We also need to grow Brampton\'s economic base.',
    ],
  },
  {
    id: 'live-work',
    title: 'Brampton Should Be a Place Where You Can Live AND Work',
    paragraphs: [
      'For too many residents, living in Brampton means leaving Brampton every morning to go to work.',
      'That needs to change.',
      'Our goal should be to build an economy where more residents have the opportunity to find high-quality careers right here at home.',
      'That means aggressively competing for corporate offices, technology companies, financial institutions, research facilities, advanced manufacturing and other major employers.',
      'I want Brampton actively pursuing the kinds of investments associated with major companies such as TD, Samsung, Sony and other national and global corporations—not because of any one particular company, but because Brampton should compete for the headquarters, offices, investment and high-quality employment that major corporations bring.',
      'Brampton already has a significant business base and has recently attracted major investments. Our challenge is to build on that momentum and create an even broader range of high-paying professional and skilled careers within the city.',
      'When businesses invest here, people work here. Employees spend money here. Local restaurants and businesses gain customers. Commercial development contributes to the municipal tax base.',
      'More economic activity stays in Brampton.',
    ],
  },
  {
    id: 'time',
    title: 'Give People Their Time Back',
    paragraphs: [
      'This isn\'t only an economic issue.',
      'It\'s a quality-of-life issue.',
      'Consider someone commuting roughly an hour or more each way for work.',
      'Over five days a week and approximately 20 working days a month, that can represent dozens of hours every month spent travelling instead of living.',
      'Those are hours that could be spent having dinner with your children.',
      'Helping them with homework.',
      'Coaching a team.',
      'Volunteering.',
      'Supporting a local business.',
      'Exercising.',
      'Participating in your community.',
      'Or simply being home with your family.',
      'Time has value.',
      'If we can create more opportunities for Bramptonians to live, work, build careers and raise their families in the same city, we\'re not only strengthening our economy.',
      'We\'re strengthening families.',
      'We\'re strengthening neighbourhoods.',
      'And we\'re strengthening Brampton.',
    ],
  },
  {
    id: 'gage-park',
    title: 'Gage Park Should Bring Brampton Together',
    paragraphs: [
      'Brampton is incredibly diverse.',
      'That diversity should be something we experience—not just something we talk about.',
      'Places like Gage Park can play an even greater role in bringing our city together.',
      'I want our public spaces used for programming that gives residents opportunities to experience the cultures, music, food, arts and traditions found throughout Brampton.',
      'No community should feel forgotten, and no group should feel that our city\'s public spaces belong more to someone else than they do to them.',
      'Brampton belongs to all of us.',
    ],
  },
  {
    id: 'why-running',
    title: 'Why I\'m Running',
    paragraphs: [
      'I\'m not running for Mayor because I believe Brampton is a bad city.',
      'I\'m running because I know what Brampton can become.',
      'This city raised me.',
      'It educated me.',
      'It gave me teammates, teachers, coaches, mentors, friends and opportunities.',
      'I\'ve been an athlete. I\'ve been an artist. I\'ve worked with young people. I\'ve become an entrepreneur. I\'ve experienced success and setbacks. I\'ve travelled and worked across Canada.',
      'And through all of those experiences, one thing has remained constant: Brampton is home.',
      'I want our children to grow up believing their city is invested in their future.',
      'I want families to be able to afford to remain here.',
      'I want our entrepreneurs to build here.',
      'I want our residents to find meaningful careers here.',
      'I want our seniors and families to feel safe here.',
      'I want our artists and athletes to know Brampton supports them before the rest of the world knows their names.',
      'And when someone from Brampton achieves greatness, I don\'t want them simply to say: “I\'m from Brampton.”',
      'I want them to be proud to say: “Brampton believed in me.”',
      'This campaign isn\'t about pretending one person can solve every problem.',
      'It\'s about bringing residents, businesses, community organizations, young people and leaders together around a common goal: Building a city where you don\'t have to leave Brampton to find opportunity.',
    ],
  },
]

export const aboutClosing = {
  paragraphs: [
    'My name is Nathaniel “Nate” Peart.',
    'I was born here. I was raised here. And I\'m ready to serve the city I will always call home.',
  ],
  signoff: 'Putting Brampton First, Always',
}

export const journeySteps = [
  'Born and raised in Brampton',
  'St. Augustine Secondary School',
  "Bishop's University — Sports Studies, English Literature, Business Entrepreneurship",
  'Musician and artist',
  'Athlete — pursuit of professional football',
  'Ottawa REDBLACKS tryout',
  'Return to football and semi-professional play',
  'Youth work and social services across Canada',
  'Entrepreneurship',
  'Candidate for Mayor of Brampton',
]
