trackSheetSwitch = (toggle) => {
  if (toggle == 0) {
    document.getElementById("role_header1").textContent = "Consulting";

    document.getElementById("resume-content").innerHTML = "p";
    document.getElementById("resume-content").textContent =
      "My interdisciplinary team of Engineering, Medical Students, and L&D Professionals have a spent years developing, adapting, and optimizing academic systems for student success! I have helped 100's of students through workshops, classrooms, and one one mentorship.";

    document.getElementById("role_header2").textContent = "Marketing Campaigns";

    document.getElementById("resume-content2").innerHTML = "p";

    document.getElementById("resume-content2").textContent =
      "my team has run month long campaigns on Instagram, Facebook, and Twitter that has increased impressions by up to 30%";

    document.getElementById("resume-content2").style = "margin-bottom: 2.3%";
  } else {
    document.getElementById("resume-content2").style = "padding-right 90.3%";
    document.getElementById("resume-content2").style = "margin-right 5.3%";
    document.getElementById("resume-content2").style = "margin-bottom: 2.3%";

    document.getElementById("role_header1").textContent =
      "Head of Educational Content -- KOI, Los Angeles";

    document.getElementById("resume-content").innerHTML = "";
    experience1 = document.createElement("li");

    item1Text = experience1.textContent =
      "As the Lead of Educational Content I was involved with every project at KOI. KOI is an edtech startup which teaches more than 1.32 million students across all social media platforms.";

    document.getElementById("resume-content").appendChild(experience1);

    experience1 = document.createElement("li");

    item1Text = experience1.textContent =
      "I taught cohorts of 12+ and increased student outcomes by up to 20% as measured by engagement rates and gpa increases";

    document.getElementById("resume-content").appendChild(experience1);

    experience1 = document.createElement("li");

    item1Text = experience1.textContent =
      "I led workshops covering topics including time management, learning strategies, organizational skills, etc.";

    document.getElementById("resume-content").appendChild(experience1);

    experience1 = document.createElement("li");

    item1Text = experience1.textContent =
      "I was the lead project manager for “StudyQuest”, a course which was the main source of revenue for KOI. I led our team of mentors which has, planned, coordinated, organized and delivered dozens of internal and external projects.";

    document.getElementById("resume-content").appendChild(experience1);

    experience1 = document.createElement("li");

    item1Text = experience1.textContent =
      "Section Leads” was a project fully developed by a team of 3 which introduced the live cohort educational model. These sessions boosted average engagement by 248%(YTD and have metamorphosized the industry standard for e-learning courses).";

    document.getElementById("resume-content").appendChild(experience1);

    document.getElementById("role_header2").textContent =
      "Chairman of Biomedical Engineering -- Engineering Pivot, International";

    document.getElementById("resume-content2").innerHTML = "";

    experience2 = document.createElement("li");

    item2Text = experience2.textContent =
      "Mentoring students for their non-scholarly research ventures, this entailed me overseeing 1k+ students globally";

    document.getElementById("resume-content2").appendChild(experience2);

    experience2 = document.createElement("li");

    item2Text = experience2.textContent =
      "led the peer review process, and organized virtual conferences led by my colleagues, to showcase current research and discuss relevant areas for future research ventures.";

    document.getElementById("resume-content2").appendChild(experience2);

    experience2 = document.createElement("li");

    item2Text = experience2.textContent =
      "The papers written by the committee were viewed over 60k times";

    document.getElementById("resume-content2").appendChild(experience2);

    experience2 = document.createElement("li");

    item2Text = experience2.textContent =
      "Developed article writing guidelines and learning courses";

    document.getElementById("resume-content2").appendChild(experience2);
  }
};
