(() => {
  const english = document.documentElement.lang === 'en';
  const text = english
    ? {
        role: 'INFORMATION SECURITY ANALYST',
        title: 'Web pentest and API security focused on evidence, impact and remediation.',
        intro: 'Security professional focused on authorized testing, clear documentation and continuous technical development.',
        viewCases: 'View security cases',
        github: 'See GitHub projects',
        linkedin: 'View LinkedIn',
        profile: 'SECURITY PROFILE',
        focus: 'Focus',
        environment: 'Environment',
        methodology: 'Methodology',
        education: 'Education',
        labs: 'Authorized labs and academic projects',
        degree: 'Computer Science degree',
        process: 'HOW I WORK',
        processIntro: 'A structured approach from scope definition to practical remediation guidance.',
        steps: ['Scope and rules of engagement', 'Reconnaissance and attack-surface mapping', 'Manual validation and impact analysis', 'Evidence, reporting and recommendations']
      }
    : {
        role: 'ANALISTA DE SEGURANÇA DA INFORMAÇÃO',
        title: 'Pentest Web e segurança de APIs com foco em evidências, impacto e correção.',
        intro: 'Atuação focada em testes autorizados, documentação clara e desenvolvimento técnico contínuo.',
        viewCases: 'Ver cases de segurança',
        github: 'Ver projetos no GitHub',
        linkedin: 'Ver LinkedIn',
        profile: 'PERFIL DE SEGURANÇA',
        focus: 'Foco',
        environment: 'Ambiente',
        methodology: 'Metodologia',
        education: 'Formação',
        labs: 'Laboratórios autorizados e projetos acadêmicos',
        degree: 'Bacharel em Ciência da Computação',
        process: 'COMO EU TRABALHO',
        processIntro: 'Uma abordagem estruturada do escopo à recomendação prática de correção.',
        steps: ['Escopo e regras de engajamento', 'Reconhecimento e mapeamento da superfície', 'Validação manual e análise de impacto', 'Evidências, relatório e recomendações']
      };

  const originalMain = document.querySelector('main');
  if (!originalMain) return;
  const sections = [...originalMain.querySelectorAll(':scope > section')];
  document.body.className = 'casebook-page';
  document.body.dataset.desktopReady = 'true';

  const shell = document.createElement('div');
  shell.className = 'casebook-shell';
  shell.innerHTML = `
    <header class="casebook-header">
      <a class="casebook-brand" href="#top"><span>&gt;_</span> VINICIUS<span class="blue">LIMA</span><small>.SEC</small></a>
      <nav class="casebook-nav" aria-label="${english ? 'Main navigation' : 'Navegação principal'}">
        <a href="cases.html">${english ? 'Cases' : 'Cases'}</a>
        <a href="#competencias">${english ? 'Capabilities' : 'Competências'}</a>
        <a href="#stack">Stack</a>
        <a href="#sobre">${english ? 'About' : 'Sobre'}</a>
        <a class="casebook-cta" href="#contato">${english ? 'Contact' : 'Contato'} ↗</a>
      </nav>
      <a class="casebook-language" href="${english ? 'index.html' : 'en.html'}">${english ? 'PT' : 'EN'} ↗</a>
    </header>
    <main class="casebook-main" id="top">
      <section class="casebook-hero">
        <div class="casebook-hero-copy">
          <p class="casebook-role">${text.role} · RED TEAM · WEB PENTEST · API SECURITY</p>
          <h1>${text.title}</h1>
          <p class="casebook-intro">${text.intro}</p>
          <div class="casebook-actions"><a class="casebook-button primary" href="cases.html">${text.viewCases} ↗</a><a class="casebook-button" href="https://github.com/ViniciusH97" target="_blank" rel="noopener noreferrer">${text.github} ↗</a><a class="casebook-button" href="https://www.linkedin.com/in/vinicius-lima-753551285/" target="_blank" rel="noopener noreferrer">${text.linkedin} ↗</a></div>
        </div>
        <section class="profile-panel">
          <div class="panel-label">${text.profile}</div>
          <dl>
            <div><dt>${text.focus}</dt><dd>Web · REST APIs · Linux</dd></div>
            <div><dt>${text.environment}</dt><dd>${text.labs}</dd></div>
            <div><dt>${text.methodology}</dt><dd>OWASP · WSTG · MITRE ATT&amp;CK</dd></div>
            <div><dt>${text.education}</dt><dd>${text.degree}</dd></div>
          </dl>
        </section>
      </section>
      <section class="process-strip" aria-labelledby="process-title">
        <div><p class="casebook-kicker">// ${text.process}</p><p id="process-title">${text.processIntro}</p></div>
        <ol>${text.steps.map((step, index) => `<li><b>0${index + 1}</b><span>${step}</span></li>`).join('')}</ol>
      </section>
      <div class="casebook-sections"></div>
    </main>
  `;
  document.body.replaceChildren(shell);
  const container = shell.querySelector('.casebook-sections');
  sections.forEach((section) => {
    section.className = `${section.className.replace(/\bwindow-content\b/g, '').trim()} casebook-section`;
    container.append(section);
  });
  const terminal = shell.querySelector('#terminal-section');
  if (terminal) terminal.hidden = true;
  const footer = document.createElement('footer');
  footer.className = 'casebook-footer';
  footer.innerHTML = `<span>VINICIUS<span class="blue">LIMA</span>.SEC</span><span>${english ? 'Authorized testing only · Academic and controlled environments.' : 'Testes somente mediante autorização · Ambientes acadêmicos e controlados.'}</span>`;
  shell.querySelector('.casebook-main').append(footer);
})();
