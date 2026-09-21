import {
  BookOpen, Wrench, Briefcase, Zap, Heart, Users,
  Scissors, Sparkles, Laptop, Hammer, Store, TrendingUp,
  LineChart, Droplets, Building2, Wheat, GraduationCap,
  HandHeart, Lightbulb, UserCheck, Network
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface ProgramStat {
  label: string;
  value: string;
}

export interface ApplicationStep {
  step: string;
  desc: string;
}

export interface WhatItem {
  label: string;
  desc: string;
  icon: ReactNode;
}

export interface SubProgram {
  name: string;
  desc: string;
  icon: ReactNode;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  heroTagline: string;
  description: string;
  icon: ReactNode;
  color: 'gold' | 'gold' | 'navy';
  stats: ProgramStat[];
  who: string[];
  what: WhatItem[];
  subPrograms?: SubProgram[];
  eligibility: string[];
  applicationSteps: ApplicationStep[];
  selectionProcess: string[];
  locations: string[];
}

export const programs: Program[] = [
  {
    id: 'education',
    title: 'Education & Student Support',
    subtitle: 'Unlocking academic potential for every learner',
    heroTagline: 'Because every mind deserves a chance to flourish.',
    description:
      'Our Education & Student Support program removes the financial and social barriers that prevent talented individuals from accessing quality education. We provide end-to-end academic support -- from scholarships to materials, tutoring, and mentorship -- ensuring that no learner is left behind.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Beneficiaries Supported', value: '500+' },
      { label: 'Scholarships Awarded', value: '120+' },
      { label: 'Schools Partnered', value: '30+' },
      { label: 'Locations Served', value: '10+' },
    ],
    who: [
      'Students from low-income or disadvantaged backgrounds',
      'Orphans and vulnerable children (OVCs)',
      'First-generation tertiary-level students',
      'Students with documented academic potential but limited resources',
      'Individuals seeking to return to education after hardship',
    ],
    what: [
      { label: 'Scholarship Grants', desc: 'Full and partial scholarships covering tuition fees, accommodation, and related academic expenses.', icon: <GraduationCap className="w-6 h-6 text-gold" /> },
      { label: 'Educational Materials', desc: 'Distribution of textbooks, stationery, laptops, and other learning tools to students in need.', icon: <BookOpen className="w-6 h-6 text-gold" /> },
      { label: 'Academic Assistance & Tutoring', desc: 'Supplementary classes, remedial tutoring, and after-school learning support.', icon: <Lightbulb className="w-6 h-6 text-gold" /> },
      { label: 'Student Welfare Support', desc: 'Counselling, nutritional support, and psychosocial assistance to ensure wellbeing.', icon: <HandHeart className="w-6 h-6 text-gold" /> },
      { label: 'Mentorship Pairing', desc: 'Connecting students with accomplished professionals as long-term mentors and role models.', icon: <Users className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Must demonstrate financial need through supporting documentation',
      'Must demonstrate academic potential or a commitment to learning',
      'Must be enrolled in, or actively seeking to enrol in, a recognised institution',
      'Must reside within our operational areas (exceptions considered case-by-case)',
      'Must be willing to engage with assigned mentors and support staff',
    ],
    applicationSteps: [
      { step: '1. Complete Application Form', desc: 'Fill in the online or paper application form available on this website or from our offices.' },
      { step: '2. Submit Supporting Documents', desc: 'Provide proof of income/financial need, academic records, identification, and a personal statement.' },
      { step: '3. Initial Screening', desc: 'Our program team reviews all applications for completeness and basic eligibility.' },
      { step: '4. Interview', desc: 'Shortlisted applicants are invited for a personal or virtual interview with our selection panel.' },
      { step: '5. Decision & Notification', desc: 'Successful applicants are notified in writing and onboarded into the program.' },
    ],
    selectionProcess: [
      'Applications are reviewed by a dedicated panel of program officers and community representatives',
      'Selection is based on a holistic assessment: financial need, academic commitment, and community impact potential',
      'Preference is given to orphans, children from single-parent households, and first-generation students',
      'All decisions are made transparently and documented to ensure fairness',
      'Unsuccessful applicants receive feedback and are encouraged to reapply in subsequent cycles',
    ],
    locations: ['Local community centres', 'Partner school campuses', 'Regional offices (upcoming)', 'Online/virtual support available'],
  },

  {
    id: 'vocational',
    title: 'Vocational Training',
    subtitle: 'Building capable hands for a self-reliant future',
    heroTagline: 'A skill is a tool for life -- and a gateway to economic freedom.',
    description:
      'Our Vocational Training programs provide practical, market-relevant skills to individuals who may not have taken the conventional academic route. We partner with experienced trainers and industry practitioners to deliver high-quality, hands-on courses across multiple trades.',
    icon: <Wrench className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Graduates to Date', value: '300+' },
      { label: 'Training Courses', value: '8+' },
      { label: 'Employment Rate Post-Training', value: '75%' },
      { label: 'Training Centres', value: '5+' },
    ],
    who: [
      'School leavers and out-of-school youth (ages 16-35)',
      'Unemployed or underemployed adults seeking new skills',
      'Women seeking economic independence through a trade',
      'Persons with disabilities seeking adapted vocational pathways',
      'Community members referred by partner organisations',
    ],
    what: [
      { label: 'Tailoring & Garment Construction', desc: 'End-to-end sewing, pattern cutting, and garment production training for beginners and intermediate learners.', icon: <Scissors className="w-6 h-6 text-gold" /> },
      { label: 'Beauty & Nail Technician', desc: 'Professional cosmetology, nail art, and beauty therapy courses leading to industry certification.', icon: <Sparkles className="w-6 h-6 text-gold" /> },
      { label: 'Fashion Design', desc: 'Creative design principles, fabric selection, brand building, and small-scale fashion entrepreneurship.', icon: <Scissors className="w-6 h-6 text-gold" /> },
      { label: 'Digital & Computer Skills', desc: 'Foundational ICT, Microsoft Office, graphic design, and digital marketing for the modern economy.', icon: <Laptop className="w-6 h-6 text-gold" /> },
      { label: 'Technical & Artisan Trades', desc: 'Carpentry, plumbing, welding, electrical work, and other artisan trades for infrastructure demand.', icon: <Hammer className="w-6 h-6 text-gold" /> },
    ],
    subPrograms: [
      { name: 'Tailoring Academy', desc: 'A 3-6 month intensive garment construction programme with start-up tool kit upon graduation.', icon: <Scissors className="w-6 h-6 text-gold" /> },
      { name: 'Beauty & Cosmetology School', desc: 'Professional beauty training covering skin care, nail technology, and hair styling.', icon: <Sparkles className="w-6 h-6 text-gold" /> },
      { name: 'Fashion & Design Studio', desc: 'Creative fashion design with business modules to help graduates launch their own labels.', icon: <Scissors className="w-6 h-6 text-gold" /> },
      { name: 'Digital Skills Hub', desc: 'Online and offline digital literacy training for youth and women.', icon: <Laptop className="w-6 h-6 text-gold" /> },
      { name: 'Artisan Trades Centre', desc: 'Hands-on technical training in building and infrastructure trades.', icon: <Hammer className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Age 16-45 (exceptions considered for widows and persons with disabilities)',
      'Ability to commit to the full duration of the course (typically 3-6 months)',
      'Demonstrated financial need or limited access to private training',
      'Must be a resident in or near our operational areas',
      'No prior experience required -- beginner courses available',
    ],
    applicationSteps: [
      { step: '1. Choose Your Course', desc: 'Browse available vocational courses and select the one that aligns with your interests and goals.' },
      { step: '2. Fill Application Form', desc: 'Complete the registration form online or at our offices, indicating your preferred course and start date.' },
      { step: '3. Intake Assessment', desc: 'A brief assessment to gauge existing skills and ensure correct course-level placement.' },
      { step: '4. Enrolment Confirmation', desc: 'Receive enrolment confirmation, training schedule, and information about any tools or materials to bring.' },
      { step: '5. Begin Training', desc: 'Attend classes, complete practical assessments, and receive your certificate upon successful completion.' },
    ],
    selectionProcess: [
      'Applications are reviewed on a rolling basis as courses fill up',
      'Priority given to individuals with the greatest financial need',
      'Gender-balanced cohorts are maintained where possible',
      'Persons with disabilities are actively encouraged and accommodated',
      'Waiting lists are maintained when courses are full -- applicants are notified for the next intake',
    ],
    locations: ['Hub Training Centre (Main Campus)', 'Community-based satellite training venues', 'Partner vocational institutes'],
  },

  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & Business Support',
    subtitle: 'Turning ideas into thriving enterprises',
    heroTagline: 'Ambition is the seed -- we provide the soil and sunlight.',
    description:
      'Our Entrepreneurship & Business Support program creates an end-to-end ecosystem for aspiring and existing entrepreneurs. From ideation and training to mentorship, funding linkages, and market access, we provide the resources and connections needed to build sustainable businesses that create jobs and uplift communities.',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'navy',
    stats: [
      { label: 'Businesses Supported', value: '150+' },
      { label: 'Jobs Created', value: '400+' },
      { label: 'Training Workshops', value: '50+' },
      { label: 'Mentors in Network', value: '30+' },
    ],
    who: [
      'Aspiring entrepreneurs with a viable business idea',
      'Existing micro and small business owners seeking to grow',
      'Youth (18-35) with entrepreneurial ambition',
      'Women-led businesses seeking structured support',
      'Community groups establishing social enterprises',
    ],
    what: [
      { label: 'Startup Support & Incubation', desc: 'Structured incubation programme with workspace, coaching, and early-stage advisory services.', icon: <Store className="w-6 h-6 text-navy" /> },
      { label: 'Business Training Workshops', desc: 'Practical workshops on financial management, marketing, operations, and legal compliance.', icon: <TrendingUp className="w-6 h-6 text-navy" /> },
      { label: 'Entrepreneurship Education', desc: 'Structured curriculum on business ideation, market research, business plan development, and pitching.', icon: <Lightbulb className="w-6 h-6 text-navy" /> },
      { label: 'Business Mentorship', desc: 'One-on-one and group mentoring sessions with experienced business leaders and industry experts.', icon: <Users className="w-6 h-6 text-navy" /> },
      { label: 'Equipment & Seed Support', desc: 'Access to starter equipment grants and linkages to micro-finance institutions for seed funding.', icon: <LineChart className="w-6 h-6 text-navy" /> },
    ],
    eligibility: [
      'Must have a documented business idea or an existing business under 3 years old',
      'Must be willing to participate in full business training curriculum',
      'Must demonstrate commitment through attending all required sessions',
      'Business must have a demonstrable community or social benefit',
      'Must not be receiving concurrent support from conflicting programmes',
    ],
    applicationSteps: [
      { step: '1. Submit Business Concept Note', desc: 'Submit a brief (1-2 page) description of your business idea, target market, and expected impact.' },
      { step: '2. Application Review', desc: 'Our panel reviews all concept notes for viability, originality, and community alignment.' },
      { step: '3. Pitch Session', desc: 'Shortlisted applicants pitch their concept to the panel and receive structured feedback.' },
      { step: '4. Enrolment in Training', desc: 'Selected entrepreneurs enrol in the business training programme (typically 8-12 weeks).' },
      { step: '5. Mentorship Matching & Support', desc: 'Graduates are matched with a mentor and continue to receive ongoing advisory support.' },
    ],
    selectionProcess: [
      'All concept notes are reviewed by a panel of business experts and program staff',
      'Shortlisting prioritises innovation, social impact, and scalability',
      'Gender equity targets ensure at least 40% of supported businesses are women-led',
      'Youth-led enterprises (founder under 35) receive bonus consideration',
      'All selected entrepreneurs sign a commitment agreement outlining expectations',
    ],
    locations: ['Entrepreneurship Hub (Main Office)', 'Virtual/online coaching sessions available', 'Local community business hubs'],
  },

  {
    id: 'youth',
    title: 'Youth Empowerment',
    subtitle: 'Raising the next generation of leaders and changemakers',
    heroTagline: 'Young people are not the future -- they are the present.',
    description:
      'Our Youth Empowerment programme is built on the belief that when young people are equipped with the right skills, mindset, and opportunities, they become the most powerful agents of community transformation. We deliver leadership, skills, civic, and wellbeing programmes tailored specifically to the youth.',
    icon: <Zap className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Youth Engaged', value: '1,000+' },
      { label: 'Leadership Workshops', value: '60+' },
      { label: 'Youth-Led Projects', value: '25+' },
      { label: 'Volunteer Youth Ambassadors', value: '80+' },
    ],
    who: [
      'Young people aged 15-35',
      'Out-of-school youth seeking direction and skill development',
      'Youth leaders and student union representatives',
      'Young people from disadvantaged and at-risk backgrounds',
      'Youth seeking entrepreneurship or career guidance',
    ],
    what: [
      { label: 'Leadership Training', desc: 'Workshops on civic leadership, public speaking, conflict resolution, and community organising.', icon: <UserCheck className="w-6 h-6 text-gold" /> },
      { label: 'Career Guidance & Counselling', desc: 'One-on-one sessions to help youth identify strengths, set goals, and map career pathways.', icon: <Lightbulb className="w-6 h-6 text-gold" /> },
      { label: 'Youth Skills & Vocational Training', desc: 'Skill-building programmes linked to our Vocational Training offering, tailored for youth.', icon: <Wrench className="w-6 h-6 text-gold" /> },
      { label: 'Sports & Recreation Initiatives', desc: 'Structured sports programmes promoting teamwork, discipline, and physical health.', icon: <Zap className="w-6 h-6 text-gold" /> },
      { label: 'Youth Volunteer & Ambassador Programme', desc: 'Engaging youth as active participants in our community outreach and advocacy efforts.', icon: <Network className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Must be between 15 and 35 years of age',
      'Must reside in or near our operational areas',
      'Must demonstrate enthusiasm and commitment to personal development',
      'Priority given to at-risk youth and those from disadvantaged backgrounds',
      'Parental/guardian consent required for those under 18',
    ],
    applicationSteps: [
      { step: '1. Register Online or In-Person', desc: 'Complete the Youth Empowerment programme registration form.' },
      { step: '2. Attend Orientation', desc: 'All new participants attend a mandatory orientation session to understand the programme.' },
      { step: '3. Stream Placement', desc: 'Based on age, interest, and goals, participants are placed into the appropriate stream.' },
      { step: '4. Active Participation', desc: 'Engage in workshops, projects, mentoring, and community activities.' },
      { step: '5. Graduation & Certification', desc: 'Receive a certificate of participation and be inducted as a Youth Ambassador.' },
    ],
    selectionProcess: [
      'Open registration -- all eligible youth who apply are welcomed',
      'For competitive streams (e.g., leadership awards), a panel reviews applications and interviews',
      'Priority given to youth referred by social workers, schools, or community leaders',
      'No applicant is turned away on financial grounds',
      'Peer-nomination system used for Ambassador selection',
    ],
    locations: ['Community youth centres', 'Schools and tertiary institutions', 'Sports grounds and recreation facilities', 'Online platforms for remote youth'],
  },

  {
    id: 'women',
    title: 'Women Empowerment',
    subtitle: 'Championing equity, dignity, and opportunity for women',
    heroTagline: 'When women rise, communities flourish.',
    description:
      `Our Women Empowerment programme addresses the systemic barriers that limit women's social, economic, and political participation. We provide a safe, supportive environment where women can access education, skills training, health resources, legal awareness, and peer support -- enabling them to become independent, confident, and influential leaders in their homes and communities.`,
    icon: <Heart className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Women Reached', value: '800+' },
      { label: 'Women-Led Businesses Supported', value: '100+' },
      { label: 'Training Sessions Held', value: '75+' },
      { label: 'Communities Reached', value: '15+' },
    ],
    who: [
      'Women of all ages, with particular focus on ages 18-55',
      'Widows, single mothers, and female heads of household',
      'Survivors of gender-based violence seeking rehabilitation',
      'Women seeking to start or grow a business',
      'Young women and girls at risk of early marriage or school dropout',
    ],
    what: [
      { label: 'Economic Empowerment Training', desc: 'Skills training, business support, and micro-finance linkages to help women achieve financial independence.', icon: <TrendingUp className="w-6 h-6 text-gold" /> },
      { label: 'Leadership & Advocacy', desc: 'Workshops on rights, civic engagement, and community leadership for women.', icon: <UserCheck className="w-6 h-6 text-gold" /> },
      { label: 'Health & Wellness Programmes', desc: 'Maternal health, mental health, and general wellness sessions delivered by trained professionals.', icon: <Heart className="w-6 h-6 text-gold" /> },
      { label: 'GBV Awareness & Support', desc: 'Safe spaces, awareness campaigns, and referral networks for survivors of gender-based violence.', icon: <HandHeart className="w-6 h-6 text-gold" /> },
      { label: 'Savings & Credit Groups', desc: 'Structured savings groups and cooperative lending circles to build financial resilience.', icon: <LineChart className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Must identify as a woman',
      'Must reside in or near our operational areas',
      'No minimum education requirement -- all literacy levels welcome',
      'Priority given to widows, single mothers, and GBV survivors',
      'Young women aged 15-17 may participate with parental/guardian consent',
    ],
    applicationSteps: [
      { step: '1. Register & Enrol', desc: 'Visit our office or complete the online form to register for the Women Empowerment programme.' },
      { step: '2. Needs Assessment', desc: 'Participate in a confidential one-on-one needs assessment with a program officer.' },
      { step: '3. Programme Placement', desc: 'Be placed in the appropriate stream (economic, social, or health) based on your needs and goals.' },
      { step: '4. Active Participation', desc: 'Attend training sessions, support group meetings, and mentoring sessions.' },
      { step: '5. Ongoing Support', desc: 'Access alumni networks, continued business advisory, and peer-support groups after programme completion.' },
    ],
    selectionProcess: [
      'Open-door policy -- all women who apply are welcomed and assessed',
      'Immediate priority given to women in crisis (GBV survivors, recently widowed)',
      'Economic empowerment stream has limited cohort sizes -- places filled on a first-come, first-served basis',
      'Confidentiality is strictly maintained in all assessment and selection processes',
      'Community leaders and social workers may nominate beneficiaries',
    ],
    locations: ["Women's Empowerment Centre (dedicated safe space)", 'Community halls and local meeting points', 'Health facility partnerships', 'Online support groups'],
  },

  {
    id: 'community',
    title: 'Community Development',
    subtitle: 'Building stronger, more resilient communities from the ground up',
    heroTagline: 'Infrastructure is the backbone of every thriving community.',
    description:
      'Our Community Development pillar focuses on the physical, environmental, and economic infrastructure of the communities we serve. By partnering with local leaders, government bodies, and international donors, we co-design and implement projects that create lasting improvements in quality of life -- from clean water access to thriving local markets.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'navy',
    stats: [
      { label: 'Water Projects Completed', value: '12+' },
      { label: 'Communities Served', value: '20+' },
      { label: 'Agricultural Beneficiaries', value: '200+' },
      { label: 'Infrastructure Projects', value: '15+' },
    ],
    who: [
      'Entire community groups and villages in underserved areas',
      'Local government bodies and community leaders',
      'Farmers and agricultural cooperatives',
      'Local traders and market vendors',
      'Youth groups engaged in community service',
    ],
    what: [
      { label: 'Water, Sanitation & Hygiene (WASH)', desc: 'Borehole drilling, water purification, and community toilet construction in water-scarce areas.', icon: <Droplets className="w-6 h-6 text-navy" /> },
      { label: 'Community Infrastructure', desc: 'Construction and rehabilitation of community centres, schools, clinics, and access roads.', icon: <Building2 className="w-6 h-6 text-navy" /> },
      { label: 'Agricultural & Food Security', desc: 'Modern farming training, cooperative farming projects, and food-security initiatives.', icon: <Wheat className="w-6 h-6 text-navy" /> },
      { label: 'Local Market Development', desc: 'Market infrastructure support, supply-chain training, and market-linkage programmes for traders.', icon: <Store className="w-6 h-6 text-navy" /> },
      { label: 'Environmental Sustainability', desc: 'Tree-planting, waste management, and clean-energy initiatives for a greener community.', icon: <Zap className="w-6 h-6 text-navy" /> },
    ],
    eligibility: [
      'Projects are community-nominated -- any community in our operational area may submit a project proposal',
      'Community leadership must be actively involved in planning and execution',
      'Projects must demonstrate a clear, measurable community benefit',
      'Communities must contribute a defined level of local resources (labour, materials, land)',
      'Proposals must be endorsed by recognised community or local government structures',
    ],
    applicationSteps: [
      { step: '1. Community Consultation', desc: 'The community identifies its most urgent development need and holds a local consultation meeting.' },
      { step: '2. Project Proposal Submission', desc: 'The community leader or appointed representative submits a project proposal form to our offices.' },
      { step: '3. Field Assessment', desc: 'Our Community Development team conducts a site visit and needs assessment.' },
      { step: '4. Project Approval & Planning', desc: 'Approved projects enter a joint planning phase with the community and our technical team.' },
      { step: '5. Implementation & Handover', desc: 'Project is implemented collaboratively and formally handed over to the community with a sustainability plan.' },
    ],
    selectionProcess: [
      'All project proposals are reviewed by a panel of community development officers and technical experts',
      'Selection prioritises communities with the greatest unmet need and least access to government services',
      'Projects with strong community co-investment are ranked higher',
      'Environmental and sustainability impact is assessed as part of the scoring criteria',
      'Decisions are communicated to all applicant communities in writing',
    ],
    locations: ['Rural and peri-urban communities in operational areas', 'Partner local government authority areas', 'International project sites (via donor partnerships)'],
  },

  {
    id: 'scholarships',
    title: 'Scholarships',
    subtitle: 'Investing in human capital -- one student at a time',
    heroTagline: 'Education is the most powerful weapon for change.',
    description:
      "The Dr. Theo's Empowerment Hub Scholarship Programme is one of our flagship initiatives. We award merit-based and need-based scholarships to outstanding students who are unable to fund their own education. Our scholarships cover tuition, accommodation, and essential academic costs.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Scholarships Awarded', value: '120+' },
      { label: 'Institutions Partnered', value: '25+' },
      { label: 'Scholarship Types', value: '4' },
      { label: 'Graduation Rate of Recipients', value: '91%' },
    ],
    who: [
      'Secondary school students seeking tertiary scholarships',
      'Undergraduate students at accredited institutions',
      'Vocational training students',
      'Students with outstanding academic performance but insufficient financial means',
      'Students from marginalised or underrepresented groups',
    ],
    what: [
      { label: 'Full Tuition Scholarship', desc: 'Complete coverage of academic fees for the full duration of the programme.', icon: <GraduationCap className="w-6 h-6 text-gold" /> },
      { label: 'Partial Tuition Grant', desc: 'Contribution towards tuition fees to supplement other sources of funding.', icon: <BookOpen className="w-6 h-6 text-gold" /> },
      { label: 'Bursary & Stipend', desc: 'Monthly living stipend to cover accommodation and subsistence costs.', icon: <HandHeart className="w-6 h-6 text-gold" /> },
      { label: 'Academic Materials Grant', desc: 'One-time grant for the purchase of textbooks, stationery, and study equipment.', icon: <Lightbulb className="w-6 h-6 text-gold" /> },
      { label: 'Mentorship & Career Support', desc: 'All scholars are enrolled in our mentorship programme and receive career counselling.', icon: <Users className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Must be enrolled or accepted into an accredited secondary or tertiary institution',
      'Must maintain a minimum grade average (typically 60% or equivalent)',
      'Must demonstrate verifiable financial need',
      'Must be a citizen or legal resident of an operational country',
      'Must not be receiving a full scholarship from another source',
    ],
    applicationSteps: [
      { step: '1. Download & Complete Application', desc: 'Obtain the scholarship application form from our website or offices.' },
      { step: '2. Gather Documents', desc: 'Prepare transcripts, proof of admission, financial-need documents, two references, and a personal essay.' },
      { step: '3. Submit Application', desc: 'Submit all materials by the published deadline (typically twice per year -- January and July).' },
      { step: '4. Shortlisting & Interview', desc: 'Shortlisted candidates are contacted for a panel interview.' },
      { step: '5. Award Notification', desc: 'Successful scholars are notified and scholarship funds disbursed directly to the institution.' },
    ],
    selectionProcess: [
      'Applications are assessed by a Scholarship Selection Committee comprising academics, community leaders, and Hub staff',
      'Scoring rubric: 40% financial need, 40% academic performance, 20% personal essay and community contribution',
      'Interviews evaluate character, ambition, and alignment with Hub values',
      'All decisions are final and communicated in writing',
      'Scholars sign a scholarship agreement committing to maintain academic standards and serve as ambassadors',
    ],
    locations: ['Applications accepted nationally and internationally', 'Funds disbursed to accredited institutions directly'],
  },

  {
    id: 'skills',
    title: 'Skills Acquisition',
    subtitle: 'Equipping individuals with tools for lifelong economic independence',
    heroTagline: 'Skills are currency -- invest in yours today.',
    description:
      'Our Skills Acquisition programme is designed for individuals who want to gain practical, income-generating skills but who may not qualify for or require a full vocational training course. We offer short, focused skill-building workshops covering a wide range of trades and professional competencies.',
    icon: <Hammer className="w-8 h-8" />,
    color: 'gold',
    stats: [
      { label: 'Skills Courses Offered', value: '15+' },
      { label: 'Graduates', value: '600+' },
      { label: 'Training Weeks (avg. per course)', value: '4-8' },
      { label: 'Employer Partnerships', value: '20+' },
    ],
    who: [
      'Adults of any age seeking short-term upskilling',
      'Employed individuals looking to add a marketable skill',
      'Job-seekers wanting to improve employability',
      'Entrepreneurs adding skills to complement their business',
      'Community groups seeking collective skill-building',
    ],
    what: [
      { label: 'Short-Course Skill Workshops', desc: 'Intensive 4-8 week courses in specific trades and professional skills.', icon: <Hammer className="w-6 h-6 text-gold" /> },
      { label: 'Digital Literacy', desc: 'Basic to advanced computing, internet skills, and social media for business.', icon: <Laptop className="w-6 h-6 text-gold" /> },
      { label: 'Financial Literacy', desc: 'Budgeting, savings, investment basics, and understanding financial products.', icon: <LineChart className="w-6 h-6 text-gold" /> },
      { label: 'Entrepreneurial Skills', desc: 'Practical business skills including pricing, customer service, and record-keeping.', icon: <Briefcase className="w-6 h-6 text-gold" /> },
      { label: 'Certificate & Recognition', desc: 'All participants receive a certificate of completion recognised by partner employers.', icon: <GraduationCap className="w-6 h-6 text-gold" /> },
    ],
    eligibility: [
      'Open to all adults aged 18 and above',
      'No minimum educational qualification required',
      'Must be available to attend the full scheduled course',
      'Priority given to unemployed and underemployed individuals',
      'Special cohorts for women and persons with disabilities available',
    ],
    applicationSteps: [
      { step: '1. View Available Courses', desc: 'Browse the current skills course schedule on our website or at our offices.' },
      { step: '2. Register', desc: 'Complete the simple registration form and select your preferred course and start date.' },
      { step: '3. Confirmation', desc: 'Receive confirmation of enrolment and pre-training information.' },
      { step: '4. Attend & Complete', desc: 'Attend all sessions and complete practical assessments.' },
      { step: '5. Collect Certificate', desc: 'Receive your certificate at a graduation event and be connected to our alumni network.' },
    ],
    selectionProcess: [
      'Courses are generally open-access -- places allocated on a first-come, first-served basis',
      'Targeted outreach ensures underrepresented groups are aware of and can access opportunities',
      'For employer-sponsored cohorts, employers participate in the selection process',
      'No one is excluded on the basis of financial inability -- bursaries available',
    ],
    locations: ['Hub Training Centre', 'Community skills hubs', 'Mobile training units (rural areas)', 'Online short courses (select programmes)'],
  },

  {
    id: 'mentorship',
    title: 'Mentorship Programme',
    subtitle: 'Connecting experience with potential',
    heroTagline: 'Behind every success story is a great mentor.',
    description:
      'Our Mentorship Programme creates structured, meaningful connections between experienced professionals and emerging talent across all our programme areas. Mentors from diverse fields volunteer their time, wisdom, and networks to guide mentees through challenges, decisions, and growth opportunities.',
    icon: <Users className="w-8 h-8" />,
    color: 'navy',
    stats: [
      { label: 'Active Mentor-Mentee Pairs', value: '120+' },
      { label: 'Volunteer Mentors', value: '80+' },
      { label: 'Industries Represented', value: '15+' },
      { label: 'Sessions Facilitated', value: '500+' },
    ],
    who: [
      'Students and graduates seeking career direction',
      'Young entrepreneurs needing business guidance',
      'Women seeking professional role models',
      'Youth transitioning from vocational training to employment',
      'Any Hub beneficiary wishing to be matched with a mentor',
    ],
    what: [
      { label: 'One-on-One Mentoring', desc: 'Regular, structured sessions between mentor and mentee with clear goals and accountability.', icon: <Users className="w-6 h-6 text-navy" /> },
      { label: 'Group Mentoring Circles', desc: 'Small-group sessions where one mentor works with 4-6 mentees on shared challenges.', icon: <Network className="w-6 h-6 text-navy" /> },
      { label: 'Industry Exposure Visits', desc: 'Organised visits to businesses, institutions, and professional environments.', icon: <Briefcase className="w-6 h-6 text-navy" /> },
      { label: 'Mentorship Masterclasses', desc: 'Open sessions where leading professionals share expertise on specific topics.', icon: <Lightbulb className="w-6 h-6 text-navy" /> },
      { label: 'Alumni Network Access', desc: 'All programme graduates join our alumni network for ongoing peer and professional support.', icon: <HandHeart className="w-6 h-6 text-navy" /> },
    ],
    eligibility: [
      'Must be enrolled in or a graduate of any Hub programme to be a mentee',
      'Must be willing to meet with a mentor at least twice per month',
      'Must set clear goals at the start of the mentoring relationship',
      'Mentors must have at least 5 years of professional experience in their field',
      'Both mentors and mentees must commit to the full 6-month programme cycle',
    ],
    applicationSteps: [
      { step: '1. Express Interest', desc: 'Complete the Mentorship Interest Form indicating your goals, field of interest, and preferred mentor profile.' },
      { step: '2. Matching Process', desc: 'Our team reviews all forms and matches mentees with the most compatible available mentor.' },
      { step: '3. Introduction Session', desc: 'Mentor and mentee meet for an introductory session facilitated by Hub staff.' },
      { step: '4. Goal Setting', desc: 'Both parties agree on specific goals, meeting frequency, and communication methods.' },
      { step: '5. Active Mentoring & Review', desc: 'Regular sessions over 6 months, with a mid-point and final review by Hub staff.' },
    ],
    selectionProcess: [
      'Matching is based on field of interest, career goals, and personality profile',
      'Hub staff interview both prospective mentors and mentees before finalising matches',
      'Priority given to mentees in our active programmes who express a specific mentorship need',
      'Mentors are vetted for professional background, character, and commitment',
      'Unmatched mentees are placed on a waiting list and notified for the next cohort',
    ],
    locations: ['Hub offices (in-person sessions)', 'Virtual/online (Google Meet, Zoom)', "Mentor's workplace (for industry visits)"],
  },
];

export const getProgramById = (id: string) => programs.find((p) => p.id === id);
