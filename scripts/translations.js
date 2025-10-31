/* 
 * PontoCego Security - Translation System
 * Bilingual support: Portuguese (default) and English
 */

const translations = {
  pt: {
    // Navbar
    navHome: "Início",
    navServices: "Serviços",
    navAbout: "Sobre",
    navTeam: "Equipe",
    navContact: "Contato",
    
    // Hero Section
    heroTitle: "PontoCego Security",
    heroSubtitle: "Cibersegurança sem pontos cegos",
    heroTagline: "Protegendo o que você não pode ver",
    btnLearnMore: "Saiba Mais",
    btnGetQuote: "Solicitar Orçamento",
    
    // Services Section
    servicesTitle: "Nossos Serviços",
    servicesSubtitle: "Soluções de cibersegurança abrangentes para proteger o seu negócio",

    service1Title: "Pentest",
    service1Desc: "Simulamos ataques cibernéticos reais para identificar vulnerabilidades antes que agentes maliciosos possam explorá-las. Cada projeto segue uma metodologia estruturada e alinhada a frameworks modernos, garantindo uma cobertura completa da sua superfície de ataque.",
    service1Desc2: "Nossos testes de penetração combinam reconhecimento automatizado, exploração manual e análise pós-exploração para avaliar não apenas como um invasor poderia obter acesso, mas também o impacto potencial para o negócio caso isso ocorra. Os testes podem ser conduzidos em ambientes controlados ou em sistemas de produção, sob rigorosas medidas de segurança para evitar interrupções.",

    service2Title: "Avaliação de Vulnerabilidades",
    service2Desc: "Nossas avaliações de vulnerabilidades oferecem uma visão completa da postura de segurança da sua organização, identificando fraquezas em sistemas, redes e aplicações. Utilizamos scanners líderes de mercado (como Nessus, OpenVAS, Nmap e Nikto), combinados com validação manual, para eliminar falsos positivos e garantir resultados precisos e acionáveis.",
    service2Desc2: "Cada vulnerabilidade é analisada com base em sua pontuação CVSS, grau de explorabilidade e contexto de negócio, permitindo priorizar as correções de forma eficiente e orientada ao risco.",

    service3Title: "Consultoria em Cibersegurança",
    service3Desc: "Nossos serviços de consultoria oferecem expertise estratégica e técnica para ajudar organizações a projetar, implementar e manter programas de cibersegurança robustos. Alinhamos suas operações a frameworks reconhecidos internacionalmente, como NIST CSF, ISO 27001 e CIS Controls, garantindo conformidade e resiliência.",
    service3Desc2: "Seja para estabelecer políticas de governança, aprimorar sua arquitetura de segurança ou se preparar para auditorias, fornecemos orientações baseadas em experiência prática e profundo conhecimento técnico.",

    service4Title: "Plataforma de Conscientização sobre Phishing",
    service4Desc: "Os usuários continuam sendo um dos pontos de entrada mais explorados em ataques cibernéticos. Nossa próxima Plataforma de Conscientização sobre Phishing foi desenvolvida para testar, medir e aprimorar a resiliência dos colaboradores por meio de campanhas de phishing controladas, módulos de aprendizado adaptativo e análises detalhadas.",
    service4Desc2: "Com o uso de templates de e-mail realistas, simulações de payloads e acompanhamento comportamental, as organizações poderão avaliar como seus colaboradores reagem a tentativas de engenharia social e oferecer treinamentos personalizados em tempo real para corrigir vulnerabilidades humanas.",
    comingSoon: "Em breve",

    service1Bullet1: "Testes de penetração em aplicações web (OWASP Top 10, testes de API, falhas de autenticação e autorização)",
    service1Bullet2: "Testes de penetração em redes e infraestrutura (interna/externa, firewalls, VPNs e redes sem fio)",
    service1Bullet3: "Avaliação de ambientes em nuvem (configurações e permissões de identidade em AWS, Azure e GCP)",
    service1Bullet4: "Relatórios técnicos e executivos detalhados com evidências de exploração, classificação de riscos e plano de correção priorizado",

    service2Bullet1: "Varredura automatizada de infraestrutura, hosts e aplicações",
    service2Bullet2: "Verificação manual de vulnerabilidades críticas",
    service2Bullet3: "Priorização baseada em risco e validação de explorabilidade",
    service2Bullet4: "Plano de correção detalhado com ações práticas",
    service2Bullet5: "Reavaliações periódicas para medir o progresso e manter a melhoria contínua",

    service3Bullet1: "Avaliação de postura de segurança e análise de riscos",
    service3Bullet2: "Desenvolvimento de políticas, procedimentos e estruturas de governança em cibersegurança",
    service3Bullet3: "Conformidade regulatória e preparação para auditorias (LGPD e GDPR)",
    service3Bullet4: "Design e fortalecimento de arquitetura de segurança (segmentação de rede, controle de acesso, zero trust)",
    service3Bullet5: "Planejamento e simulação de resposta a incidentes, exercícios de mesa e prontidão forense",

    service4Bullet1: "Simulações de phishing realistas e baseadas em dados, com payloads personalizados",
    service4Bullet2: "Campanhas segmentadas por departamento, nível de risco ou função",
    service4Bullet3: "Relatórios detalhados de conscientização e comportamento",
    service4Bullet4: "Plataforma de treinamentos automatizados em vídeo",
    service4Bullet5: "Integração com sistemas de e-mail corporativos",

    
    // Why Choose Us
    whyTitle: "Por Que Escolher a PontoCego",
    whySubtitle: "Experiência, dedicação e resultados que fazem a diferença",
    
    why1Title: "Expertise Comprovada",
    why1Desc: "Nossa equipe reúne profissionais com formação internacional e sólida experiência no mercado de segurança cibernética e de desenvolvimento de software. Atuamos em projetos complexos, aplicando metodologias avançadas para identificar vulnerabilidades, proteger sistemas críticos e antecipar ameaças. A combinação de conhecimento técnico, visão estratégica e prática real garante soluções confiáveis e eficazes para nossos clientes.",
    
    why2Title: "Abordagem Personalizada",
    why2Desc: "Cada organização possui desafios e riscos únicos. Por isso, desenvolvemos estratégias sob medida, alinhadas ao perfil do negócio, aos objetivos e à infraestrutura tecnológica de cada cliente. Nosso trabalho vai além da identificação de vulnerabilidades: criamos planos de ação detalhados que equilibram segurança, eficiência operacional e mitigação de riscos.",
    
    why3Title: "Resultados Mensuráveis",
    why3Desc: "Entregamos análises detalhadas, relatórios técnicos e recomendações práticas que podem ser implementadas imediatamente. Nosso foco é gerar impacto real na segurança da sua empresa, ajudando a reduzir riscos cibernéticos, aumentar a resiliência dos sistemas e oferecer confiança a todos.",

    // Our Impact Section
    impactTitle: "Nosso Impacto",
    impactSubtitle: "Resultados reais que demonstram nosso compromisso com a segurança.",
    impactVulns: "20+ vulnerabilidades remediadas",
    impactBreaches: "0 violações pós-engajamento",
    impactContinents: "Clientes em 3 continentes",
    
    // About Page
    aboutTitle: "Sobre Nós",
    aboutSubtitle: "Conheça a PontoCego Security",
    
    whoWeAreTitle: "Quem Somos",
    whoWeAreText1: "A PontoCego Security é uma empresa brasileira de cibersegurança dedicada a ajudar organizações de todos os portes a construírem ambientes digitais mais seguros e resilientes. Somos especializados em proteger pequenas e médias empresas em todo o mundo, oferecendo serviços remotos de cibersegurança de alta qualidade, acessíveis e que eliminam as barreiras de distância e complexidade.",
    whoWeAreText2: "Fundada por profissionais apaixonados por eliminar os “pontos cegos” que deixam as empresas vulneráveis, a PontoCego Security foi criada para reduzir a crescente diferença de segurança entre grandes corporações e organizações menores. Nossa crença é simples: toda empresa merece proteção em nível corporativo, independentemente de seu tamanho, orçamento ou localização.",
    whoWeAreText3: "Oferecemos soluções práticas e orientadas por dados que combinam automação avançada, experiência manual e visão estratégica. Desde testes de intrusão (pentests) e avaliações de vulnerabilidades até revisão de código seguro e consultoria, nossos serviços são projetados para ajudar empresas a identificar, compreender e eliminar riscos antes que possam ser explorados. Nossa equipe trabalha de acordo com frameworks reconhecidos pelo setor — OWASP, MITRE ATT&CK e NIST — garantindo consistência, precisão e alinhamento com padrões globais em tudo o que fazemos. Juntos, unimos expertise técnica, experiência prática e uma missão compartilhada de tornar a cibersegurança mais acessível, transparente e eficaz.",
    
    missionTitle: "Nossa Missão",
    missionText: "Nossa missão é oferecer soluções de cibersegurança de classe mundial que capacitem pequenas e médias empresas a proteger seus ativos digitais, minimizar riscos cibernéticos e operar com confiança em um mundo digital em constante evolução.",
    missionText2: "Buscamos democratizar a cibersegurança, tornando a proteção avançada e a orientação estratégica acessíveis a qualquer empresa, não apenas àquelas que possuem grandes equipes internas de TI. Por meio de pesquisa contínua, colaboração e aprimoramento constante, ajudamos organizações a fortalecer suas defesas, atender a requisitos de conformidade e construir resiliência duradoura contra ameaças modernas.",
    
    valuesTitle: "Nossos Valores",
    value1Title: "Excelência",
    value1Desc: "Somos movidos pela precisão técnica, dedicação e compromisso com resultados. Cada projeto é conduzido com o mesmo rigor e atenção, seja para uma startup local ou para um cliente internacional. Refinamos constantemente nossas metodologias para garantir exatidão, qualidade e melhorias mensuráveis na postura de segurança de nossos clientes.",
    value2Title: "Integridade",
    value2Desc: "A confiança está no centro do nosso trabalho. Atuamos com honestidade, transparência e responsabilidade em todos os projetos, protegendo não apenas sistemas, mas também relacionamentos e reputações. Valorizamos a comunicação aberta e a conduta ética como princípios inegociáveis.",
    value3Title: "Inovação",
    value3Desc: "A cibersegurança nunca para e nós também não. Nossa equipe pesquisa continuamente novas técnicas de ataque, ferramentas e tendências para se manter à frente das ameaças. Investimos em educação contínua e desenvolvimento profissional, possuindo e buscando certificações como CEH, eJPT e HTB CPTS, garantindo que nossa expertise permaneça na vanguarda da cibersegurança moderna.",
    
    btnMeetTeam: "Conheça Nossa Equipe",
    
    // Team Page
    teamTitle: "Nossa Equipe",
    teamSubtitle: "Especialistas dedicados à sua segurança digital",
    
    member1Name: "Andressa Mathias",
    member1Role: "Fundadora & Engenheira de Software",
    member1Bio: "Com experiência em web design e desenvolvimento de software. Ela aplica práticas modernas de segurança e padrões de desenvolvimento para garantir a proteção de dados e a confiabilidade dos sistemas em cada projeto.",
    
    member2Name: "Cezar Pedroso",
    member2Role: "Pentester",
    member2Bio: "Cezar é especializado em segurança de redes e aplicações web. Ele conduz avaliações de vulnerabilidades e pentests alinhados aos padrões OWASP e NIST, ajudando organizações a identificar e mitigar riscos por meio de análises práticas e insights acionáveis.",
    
    member3Name: "Daniel Saguar Gonzalez",
    member3Role: "Analista de Segurança",
    member3Bio: "Daniel atua nas áreas de análise de vulnerabilidades, resposta a incidentes e automação de segurança. Ele utiliza ferramentas baseadas em IA e frameworks consolidados para detectar e mitigar ameaças, aprimorando a resiliência e a estabilidade dos sistemas sob sua responsabilidade.",
    
    // Contact Page
    contactTitle: "Entre em Contato",
    contactSubtitle: "Estamos prontos para ajudar a proteger seu negócio",
    
    contactFormTitle: "Envie uma Mensagem",
    labelName: "Nome",
    labelEmail: "E-mail",
    labelMessage: "Mensagem",
    btnSend: "Enviar Mensagem",
    
    contactInfoTitle: "Informações de Contato",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    locationLabel: "Localização",
    locationText: "Curitiba, Brasil",
    
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    
    // Privacy Policy
    privacyTitle: "Política de Privacidade",
    privacyIntro: "Na PontoCego Security, levamos sua privacidade a sério.",
    privacySection1Title: "Coleta de Informações",
    privacySection1Text: "Coletamos apenas as informações necessárias para fornecer nossos serviços de forma eficaz.",
    privacySection1Bullet1: "Informações de contato (nome, e-mail, telefone)",
    privacySection1Bullet2: "Informações da empresa",
    privacySection1Bullet3: "Dados técnicos necessários para avaliações de segurança",
    privacySection2Title: "Uso de Informações",
    privacySection2Text: "Suas informações são usadas exclusivamente para melhorar nossos serviços e comunicação.",
    privacySection2Bullet1: "Prestação de serviços de cibersegurança",
    privacySection2Bullet2: "Comunicação sobre projetos e propostas",
    privacySection2Bullet3: "Melhorias nos nossos serviços",
    privacySection2Bullet4: "Cumprimento de obrigações legais",
    privacySection3Title: "Proteção de Dados",
    privacySection3Text: "Utilizamos as melhores práticas de segurança para proteger suas informações.",
    privacySection3Bullet1: "Criptografia de dados em trânsito e em repouso",
    privacySection3Bullet2: "Controles de acesso rigorosos",
    privacySection3Bullet3: "Auditorias regulares de segurança",
    privacySection3Bullet4: "Conformidade com LGPD e GDPR",
    privacySection4Title: "Compartilhamento de Dados",
    privacySection4Text: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando:",
    privacySection4Bullet1: "Necessário para prestação de serviços contratados",
    privacySection4Bullet2: "Requerido por lei ou ordem judicial",
    privacySection4Bullet3: "Com seu consentimento explícito",
    privacySection5Title: "Seus Direitos",
    privacySection5Text: "Você tem o direito de:",
    privacySection5Bullet1: "Acessar seus dados pessoais",
    privacySection5Bullet2: "Corrigir informações incorretas",
    privacySection5Bullet3: "Solicitar a exclusão de seus dados",
    privacySection5Bullet4: "Revogar consentimentos",
    privacySection5Bullet5: "Portar seus dados para outro fornecedor",
    privacySection6Title: "Cookies e Tecnologias Similares",
    privacySection6Text: "Utilizamos cookies essenciais para o funcionamento do site e para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.",
    privacySection7Title: "Serviços de Terceiros",
    privacySection7Text: "Utilizamos o serviço Formspree para gerenciar o envio de formulários de contato. As informações fornecidas (como nome, e-mail e mensagem) são processadas pelos servidores do Formspree e encaminhadas para nossa equipe por e-mail. O Formspree atua apenas como intermediário técnico e não utiliza seus dados para fins próprios. Para mais detalhes, consulte a Política de Privacidade do Formspree.",
    privacySection8Title: "Contato",
    privacySection8Text: "Para questões sobre privacidade ou para exercer seus direitos, entre em contato conosco:",
    privacySection8Email: "E-mail: pontocegosec@proton.me",
    privacySection9Title: "Atualizações desta Política",
    privacySection9Text: "Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através do nosso site ou por e-mail.",
    privacyLastUpdate: "Última atualização: 25 de outubro de 2025",
    
    // Footer
    footerAbout: "Sobre a PontoCego",
    footerAboutText: "Especialistas em cibersegurança dedicados a proteger seu negócio contra ameaças digitais.",
    footerQuickLinks: "Links Rápidos",
    footerFollowUs: "Siga-Nos",
    footerCopyright: "© 2025 PontoCego Security. Todos os direitos reservados.",
    privacyPolicy: "Política de Privacidade"
  },
  
  en: {
    // Navbar
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navTeam: "Team",
    navContact: "Contact",
    
    // Hero Section
    heroTitle: "PontoCego Security",
    heroSubtitle: "Cybersecurity without blind spots",
    heroTagline: "Securing what you can't see",
    btnLearnMore: "Learn More",
    btnGetQuote: "Get a Quote",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive cybersecurity solutions to protect your business",

    service1Title: "Penetration Testing",
    service1Desc: "We simulate real-world cyberattacks to uncover vulnerabilities before threat actors can exploit them. Each engagement follows a structured methodology aligned with modern frameworks, ensuring comprehensive coverage of your attack surface.",
    service1Desc2: "Our penetration tests combine automated reconnaissance, manual exploitation, and post-exploitation analysis to assess not only how attackers could gain access, but also the potential business impact if they succeed. Testing can be conducted in controlled environments or production systems under strict safety measures to avoid disruption.",

    service2Title: "Vulnerability Assessment",
    service2Desc: "Our vulnerability assessments provide a complete snapshot of your organization’s security posture, identifying weaknesses across systems, networks, and applications. We leverage industry-leading scanners (e.g., Nessus, OpenVAS, Nmap, Nikto) combined with manual validation to eliminate false positives and ensure actionable insights.",
    service2Desc2: "Each vulnerability is analyzed based on its CVSS score, exploitability, and business context, allowing you to prioritize remediation where it matters most.",

    service3Title: "Cybersecurity Consulting",
    service3Desc: "Our consulting services deliver strategic and technical expertise to help organizations design, implement, and maintain robust cybersecurity programs. We align your operations with internationally recognized frameworks such as NIST CSF, ISO 27001, and CIS Controls, ensuring both compliance and resilience.",
    service3Desc2: "Whether you’re establishing governance policies, enhancing your security architecture, or preparing for audits, we provide guidance backed by hands-on experience and deep technical understanding.",

    service4Title: "Phishing Awareness Platform",
    service4Desc: "Humans remain one of the most exploited entry points in cyberattacks. Our upcoming Phishing Awareness Platform is designed to test, measure, and improve user resilience through controlled phishing campaigns, adaptive learning modules, and detailed analytics.",
    service4Desc2: "Using realistic email templates, payload simulations, and behavioral tracking, organizations can evaluate how employees react to social engineering attempts and deliver personalized micro-trainings to address weaknesses in real time.",
    comingSoon: "Coming Soon",

    service1Bullet1: "Web application penetration testing (OWASP Top 10, API testing, authentication, authorization flaws)",
    service1Bullet2: "Network and infrastructure penetration testing (internal/external, firewalls, VPNs, and wireless)",
    service1Bullet3: "Cloud environment assessments (AWS, Azure, GCP configurations and identity permissions)",
    service1Bullet4: "Detailed technical and executive reporting with exploitation evidence, risk ratings, and prioritized remediation",

    service2Bullet1: "Automated scanning of infrastructure, hosts, and applications",
    service2Bullet2: "Manual verification of high-impact vulnerabilities",
    service2Bullet3: "Risk-based prioritization and exploitability validation",
    service2Bullet4: "Comprehensive remediation plan with actionable steps",
    service2Bullet5: "Periodic reassessments to measure progress and maintain continuous improvement",

    service3Bullet1: "Security posture and risk assessment",
    service3Bullet2: "Development of cybersecurity policies, procedures, and governance frameworks",
    service3Bullet3: "Regulatory compliance and audit preparation (LGPD and GDPR)",
    service3Bullet4: "Security architecture design and hardening (network segmentation, access control, zero trust)",
    service3Bullet5: "Incident response planning, tabletop exercises, and forensic readiness",

    service4Bullet1: "Realistic, data-driven phishing simulations with custom payloads",
    service4Bullet2: "Campaigns segmented by department, risk level, or role",
    service4Bullet3: "Comprehensive awareness and behavioral reporting",
    service4Bullet4: "Automated video training platform",
    service4Bullet5: "Integration with email systems",
    
    // Why Choose Us
    whyTitle: "Why Choose PontoCego",
    whySubtitle: "Experience, dedication, and results that make a difference",

    why1Title: "Proven Expertise",
    why1Desc: "Our team brings together professionals with international training and solid experience in cybersecurity and software development. We work on complex projects, applying advanced methodologies to identify vulnerabilities, protect critical systems, and anticipate threats. The combination of technical knowledge, strategic vision, and hands-on experience ensures reliable and effective solutions for our clients.",

    why2Title: "Personalized Approach",
    why2Desc: "Every organization has unique challenges and risks. That's why we develop tailored strategies aligned with each client's business profile, objectives, and technological infrastructure. Our work goes beyond identifying vulnerabilities: we create detailed action plans that balance security, operational efficiency, and risk mitigation.",

    why3Title: "Measurable Results",
    why3Desc: "We deliver detailed analyses, technical reports, and actionable recommendations that can be implemented immediately. Our focus is to generate real impact on your company's security, helping reduce cyber risks, increase system resilience, and provide confidence to all stakeholders.",

    // Our Impact Section
    impactTitle: "Our Impact",
    impactSubtitle: "Real results that reflect our commitment to security.",
    impactVulns: "20+ vulnerabilities remediated",
    impactBreaches: "0 breaches post-engagement",
    impactContinents: "Clients across 3 continents",

    // About Page
    aboutTitle: "About Us",
    aboutSubtitle: "Get to know PontoCego Security",
    
    whoWeAreTitle: "Who We Are",
    whoWeAreText1: "PontoCego Security is a Brazilian cybersecurity company dedicated to helping organizations of all sizes build safer, more resilient digital environments. We specialize in protecting small and medium-sized businesses all over the world by providing high-quality, affordable, and remote cybersecurity services that remove the barriers of distance and complexity.",
    whoWeAreText2: "Founded by professionals passionate about eliminating the “blind spots” that leave businesses vulnerable, PontoCego Security was created to close the growing security gap between large corporations and smaller organizations. Our belief is simple: every company deserves enterprise-level protection, regardless of its size, budget, or location.",
    whoWeAreText3: "We deliver practical and data-driven solutions that combine advanced automation, manual expertise, and strategic insight. From penetration testing and vulnerability assessments to secure code review and consulting, our services are designed to help companies identify, understand, and eliminate risks before attackers can exploit them. Our team works according to industry-recognized frameworks — OWASP, MITRE ATT&CK, and NIST — to ensure consistency, precision, and global standards in everything we do. Together, they combine technical expertise, real-world experience, and a shared mission to make cybersecurity more accessible, transparent, and effective",
    
    missionTitle: "Our Mission",
    missionText: "Our mission is to provide world-class cybersecurity solutions that empower small and medium-sized businesses to protect their digital assets, minimize cyber risks, and operate confidently in a constantly evolving digital world.",
    missionText2: "We strive to democratize cybersecurity, making advanced protection and strategic guidance available to every business, not just those with large internal IT departments. Through continuous research, collaboration, and improvement, we help organizations strengthen their defenses, meet compliance requirements, and build lasting resilience against modern threats.",
    
    valuesTitle: "Our Values",
    value1Title: "Excellence",
    value1Desc: "We are driven by technical precision, dedication, and a commitment to results. Every engagement is handled with the same level of rigor and care, whether for a local startup or an international client. We continuously refine our methodologies to ensure accuracy, quality, and measurable improvement in our clients’ security posture.",
    value2Title: "Integrity",
    value2Desc: "Trust is at the heart of our work. We act with honesty, transparency, and accountability in every project, safeguarding not only systems but also relationships and reputations. We value open communication and ethical conduct as non-negotiable principles.",
    value3Title: "Innovation",
    value3Desc: "Cybersecurity never stands still, and neither do we. Our team continually researches emerging attack techniques, tools, and trends to stay ahead of the curve. We invest in ongoing education and professional development, pursuing and holding certifications such as CEH, eJPT, and HTB CPTS, ensuring our expertise remains at the forefront of modern cybersecurity.",
    
    btnMeetTeam: "Meet Our Team",
    
    // Team Page
    teamTitle: "Our Team",
    teamSubtitle: "Experts dedicated to your digital security",
    
    member1Name: "Andressa Mathias",
    member1Role: "Founder & Software Engineer",
    member1Bio: "With solid experience in web design and software development, Andressa leads the creation of secure, efficient applications. She applies modern security practices and development standards to ensure data protection and system reliability across every project.",
    
    member2Name: "Cezar Pedroso",
    member2Role: "Pentester",
    member2Bio: "Cezar specializes in network and web application security. He conducts vulnerability assessments and exploit testing aligned with OWASP and NIST standards, helping organizations identify and mitigate risks through practical, actionable insights.",
    
    member3Name: "Daniel Saguar Gonzalez",
    member3Role: "Security Analyst",
    member3Bio: "Daniel works in vulnerability analysis, incident response, and security automation. He leverages AI-driven tools and proven security frameworks to detect and mitigate threats, improving the resilience and reliability of systems under his supervision.",
    
    // Contact Page
    contactTitle: "Get In Touch",
    contactSubtitle: "We're ready to help protect your business",
    
    contactFormTitle: "Send a Message",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    btnSend: "Send Message",
    
    contactInfoTitle: "Contact Information",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    locationLabel: "Location",
    locationText: "Curitiba, Brazil",
    
    successMessage: "Message sent successfully! We'll be in touch soon.",
    
    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacyIntro: "At PontoCego Security, we take your privacy seriously.",
    privacySection1Title: "Information Collection",
    privacySection1Text: "We only collect information necessary to effectively provide our services.",
    privacySection1Bullet1: "Contact information (name, email, phone)",
    privacySection1Bullet2: "Company information",
    privacySection1Bullet3: "Technical data required for security assessments",
    privacySection2Title: "Use of Information",
    privacySection2Text: "Your information is used exclusively to improve our services and communication.",
    privacySection2Bullet1: "Provision of cybersecurity services",
    privacySection2Bullet2: "Communication about projects and proposals",
    privacySection2Bullet3: "Improvements to our services",
    privacySection2Bullet4: "Compliance with legal obligations",
    privacySection3Title: "Data Protection",
    privacySection3Text: "We use security best practices to protect your information.",
    privacySection3Bullet1: "Data encryption in transit and at rest",
    privacySection3Bullet2: "Strict access controls",
    privacySection3Bullet3: "Regular security audits",
    privacySection3Bullet4: "LGPD and GDPR compliance",
    privacySection4Title: "Data Sharing",
    privacySection4Text: "We do not sell, rent, or share your personal information with third parties, except when:",
    privacySection4Bullet1: "Necessary for contracted service delivery",
    privacySection4Bullet2: "Required by law or court order",
    privacySection4Bullet3: "With your explicit consent",
    privacySection5Title: "Your Rights",
    privacySection5Text: "You have the right to:",
    privacySection5Bullet1: "Access your personal data",
    privacySection5Bullet2: "Correct inaccurate information",
    privacySection5Bullet3: "Request deletion of your data",
    privacySection5Bullet4: "Revoke consent",
    privacySection5Bullet5: "Port your data to another provider",
    privacySection6Title: "Cookies and Similar Technologies",
    privacySection6Text: "We use essential cookies for site functionality and to improve your browsing experience. You can configure your browser to refuse cookies, but this may affect site functionality.",
    privacySection7Title: "Third-Party Services",
    privacySection7Text: "We use Formspree to manage contact form submissions. The information provided (such as name, email, and message) is processed by Formspree's servers and forwarded to our team via email. Formspree acts only as a technical intermediary and does not use your data for its own purposes. For more details, see Formspree's Privacy Policy.",
    privacySection8Title: "Contact",
    privacySection8Text: "For privacy questions or to exercise your rights, contact us:",
    privacySection8Email: "Email: pontocegosec@proton.me",
    privacySection9Title: "Policy Updates",
    privacySection9Text: "This policy may be updated periodically. We will notify you of significant changes through our website or by email.",
    privacyLastUpdate: "Last updated: October 25, 2025",
    
    // Footer
    footerAbout: "About PontoCego",
    footerAboutText: "Cybersecurity experts dedicated to protecting your business from digital threats.",
    footerQuickLinks: "Quick Links",
    footerFollowUs: "Follow Us",
    footerCopyright: "© 2025 PontoCego Security. All rights reserved.",
    privacyPolicy: "Privacy Policy"
  }
};

let currentLang = 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('preferredLanguage', currentLang);
  updateContent();
  updateLanguageToggle();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  updateContent();
  updateLanguageToggle();
}

function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

function updateLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  setLanguage(savedLang);
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
}

document.addEventListener('DOMContentLoaded', initLanguage);
