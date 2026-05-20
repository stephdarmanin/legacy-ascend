// Legacy Life Coaching — Lead capture quiz
(function () {
  const QUESTIONS = [
    {
      q: 'Where are you in your career right now?',
      options: [
        { letter: 'A', text: "I've finished a career program and I'm ready to move — I need an edge." },
        { letter: 'B', text: "I'm in a senior role but something's missing. I want more than a title change." },
        { letter: 'C', text: "I'm successful on paper but I feel stuck, invisible, or burned out." },
        { letter: 'D', text: "I'm actively looking for my next executive role and need strategic support." },
      ],
    },
    {
      q: "What's the real challenge you're facing?",
      options: [
        { letter: 'A', text: "I know what I want but don't know how to position myself to get it." },
        { letter: 'B', text: "I'm not sure what I want anymore — I need clarity first." },
        { letter: 'C', text: "I keep getting close but not closing. Something's off in how I'm showing up." },
        { letter: 'D', text: 'I have multiple options and need help choosing the right path.' },
      ],
    },
    {
      q: 'What would make this worth it for you?',
      options: [
        { letter: 'A', text: 'Landing a specific role at the right level within 90 days.' },
        { letter: 'B', text: 'Feeling clear, confident, and excited about my direction again.' },
        { letter: 'C', text: 'Being seen as the obvious choice — owning any room I walk into.' },
        { letter: 'D', text: 'A complete redesign: career, life, priorities — the whole picture.' },
      ],
    },
    {
      q: 'How ready are you to invest in yourself right now?',
      options: [
        { letter: 'A', text: "I'm ready to go. Start immediately." },
        { letter: 'B', text: "I'm serious but want to talk first." },
        { letter: 'C', text: "I'm exploring — show me what's possible." },
        { letter: 'D', text: 'Something small to start — prove it works, then I\'m all in.' },
      ],
    },
  ];

  const RESULTS = {
    A: {
      eyebrow: 'Your Result',
      title: 'The Strategic Executive',
      body: "You know where you're going. What you need is precision — sharper positioning, a strategic search, and someone who can compress the timeline. The Executive Track is built exactly for this moment.",
      rec: { name: 'The Executive Track', price: '$750 – $1,200 AUD', href: 'career.html' },
    },
    B: {
      eyebrow: 'Your Result',
      title: 'The Reinventor',
      body: "You've outgrown the version of yourself that got you here. Clarity comes first — then momentum. The Breakthrough is a 30-day reset designed to get you unstuck, reconnected, and moving forward faster than you'd expect.",
      rec: { name: 'The Breakthrough', price: '$1,500 AUD', href: 'breakthrough.html' },
    },
    C: {
      eyebrow: 'Your Result',
      title: 'The Quiet High Achiever',
      body: "You're delivering — but you're not landing the way you should. This isn't about more effort. It's about presence, positioning, and the subtle gap between competent and unmistakable.",
      rec: { name: 'Prosper (or The Accelerator)', price: '$2,500 – $3,997 AUD', href: 'prosper.html' },
    },
    D: {
      eyebrow: 'Your Result',
      title: 'The Builder',
      body: "You're testing the water — and that's the right move. Start with a conversation. If you want a fast, focused first win, the Activation Hour is built to deliver one tangible shift in a single session.",
      rec: { name: 'Discovery Call or Activation Hour', price: 'Free – $150 AUD', href: 'book.html' },
    },
  };

  function mode(answers) {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((a) => { counts[a] = (counts[a] || 0) + 1; });
    // tiebreak: prefer higher-priced rec (Steph's commercial preference) → order C > B > A > D
    const priority = ['C', 'B', 'A', 'D'];
    let best = priority[0];
    let bestCount = -1;
    priority.forEach((letter) => {
      if (counts[letter] > bestCount) {
        best = letter;
        bestCount = counts[letter];
      }
    });
    return best;
  }

  class Quiz {
    constructor(root) {
      this.root = root;
      this.step = 0;
      this.answers = [];
      this.render();
    }

    render() {
      if (this.step < QUESTIONS.length) {
        this.renderQuestion();
      } else {
        this.renderResult();
      }
    }

    renderQuestion() {
      const q = QUESTIONS[this.step];
      const progress = ((this.step) / QUESTIONS.length) * 100;
      this.root.innerHTML = `
        <div class="quiz-card">
          <div class="quiz-progress" aria-hidden="true">
            <div class="quiz-progress-bar" style="width:${progress}%"></div>
          </div>
          <div class="quiz-step-indicator">Question ${this.step + 1} of ${QUESTIONS.length}</div>
          <h3 class="quiz-question">${q.q}</h3>
          <div class="quiz-options" role="radiogroup" aria-label="${escapeAttr(q.q)}">
            ${q.options.map((opt) => `
              <button type="button" class="quiz-option" data-letter="${opt.letter}">${escapeHTML(opt.text)}</button>
            `).join('')}
          </div>
        </div>
      `;
      this.root.querySelectorAll('.quiz-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.answers.push(btn.dataset.letter);
          this.step += 1;
          this.render();
          this.root.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    renderResult() {
      const letter = mode(this.answers);
      const r = RESULTS[letter];
      this.root.innerHTML = `
        <div class="quiz-card">
          <div class="quiz-progress" aria-hidden="true">
            <div class="quiz-progress-bar" style="width:100%"></div>
          </div>
          <div class="quiz-result-eyebrow">${r.eyebrow}</div>
          <h3 class="quiz-result-title">${escapeHTML(r.title)}</h3>
          <p class="quiz-result-body">${escapeHTML(r.body)}</p>
          <div class="quiz-result-rec">
            <div class="quiz-result-rec-label">Recommended Package</div>
            <div class="quiz-result-rec-name">${escapeHTML(r.rec.name)}</div>
            <div class="quiz-result-rec-price">${escapeHTML(r.rec.price)}</div>
          </div>
          <div class="quiz-result-actions">
            <a class="btn-primary on-light" href="${r.rec.href}">Explore This Package →</a>
            <a class="btn-outline" href="book.html">Book a Discovery Call</a>
          </div>
          <form class="quiz-email-form" novalidate>
            <label class="quiz-email-label" for="quiz-email">Want your full results + personalised guide? Drop your email.</label>
            <div class="quiz-email-input-row">
              <input class="quiz-email-input" type="email" id="quiz-email" name="email" placeholder="you@example.com" required />
              <button type="submit" class="btn-primary on-light">Send →</button>
            </div>
          </form>
        </div>
      `;
      const form = this.root.querySelector('.quiz-email-form');
      form.addEventListener('submit', (e) => this.submitEmail(e, letter));
    }

    submitEmail(e, letter) {
      e.preventDefault();
      const input = this.root.querySelector('#quiz-email');
      const email = (input.value || '').trim();
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        input.focus();
        input.style.borderColor = '#a36f45';
        return;
      }
      try {
        const stored = JSON.parse(localStorage.getItem('legacy_quiz_leads') || '[]');
        stored.push({ email, result: letter, answers: this.answers, when: new Date().toISOString() });
        localStorage.setItem('legacy_quiz_leads', JSON.stringify(stored));
      } catch (_) { /* localStorage may be blocked; non-fatal */ }

      const subject = encodeURIComponent(`Quiz lead — ${RESULTS[letter].title}`);
      const body = encodeURIComponent(
        `New quiz lead:\n\nEmail: ${email}\nResult: ${RESULTS[letter].title} (${letter})\nAnswers: ${this.answers.join(', ')}\nRecommended: ${RESULTS[letter].rec.name}\n`
      );
      window.location.href = `mailto:hello@stephdarmanin.com?subject=${subject}&body=${body}`;

      e.target.outerHTML = `<div class="quiz-thanks">Thank you. Steph will be in touch within 48 hours.</div>`;
    }
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function escapeAttr(s) { return escapeHTML(s); }

  const root = document.getElementById('quiz-root');
  if (root) new Quiz(root);
})();
