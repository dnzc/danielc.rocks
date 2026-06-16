+++
title = "Rebirth"
date = 2026-06-14
+++

Hello, world!

The old website is gone. I'm sure you're very sad, if you even know what I'm talking about.

Obligatory first post incoming...

## The old website

Once upon a time, when I was young and naive, I thought writing an entire static site generator was worth my time. Well, really it was more of a sunk-cost thing - after implementing a million of my own features (which I'm pretty proud of to be honest), I was too scared to let my brainchild go.

{{ video(src="theme-change.mp4", caption="Look mom, I can change the theme!") }}

Then one day I was browsing the list of [SoME4 entries](https://some.3b1b.co/archive?category=non-video&year=2025&page=1) and came across [ekunazanu.foo](https://ekunazanu.foo). I was stunned at how amazing the site looked, and looking at the source I was *blown away* at how simple the content layout was:

```
ekunazanu.foo/
├─ content/
│  └─ posts/
│     └─ a-cool-article.md
├─ templates/
└─ config.toml
```

Compared to the structure of my old project:

```
my-old-ssg/
├─ source/
│  ├─ content/
│  └─ themeable-svgs/        (???)
├─ ssg/
│  ├─ log-files/
│  ├─ templates/
│  ├─ util-scripts/
│  ├─ builder.py             (source of ptsd)
│  ├─ constants.py
│  ├─ mistune_processor.py
│  └─ run.py
└─ next-app/
   ├─ components/           ┐
   ├─ public/               │
   ├─ article_data.json     ├─ BLOAT
   ├─ next.config.mjs       │
   └─ vercel.json           ┘
```

And my collective three braincells thought:

> I've just reinvented the wheel.

Oops.

I realised: why did I ever want to write a markdown parser myself???? I want to write maths, not get stuck for weeks trying to fix some obscure regex bug.

Should I have made this revelation earlier? Probably - but that's why I'm a mathmo not a software engineer /s

{{ figure(src="code-freq.png", alt="1052 days of commits", caption="1052 days of pain.") }}

So, I made the switch to [Zola](https://www.getzola.org/), a static site generator that other people smarter than me have spent more braincells on. Lo and behold, I was writing maths within a couple of minutes rather than a couple of years :/

## Why Zola specifically?

Simple really - It seemed like the easiest option, and I didn't want to get stuck in the [paradox of choice](https://en.wikipedia.org/wiki/The_Paradox_of_Choice) that I was all too familiar with after having downloaded Arch about 1000000 times only to wipe the disk to make way for another linux distro an hour later.

{{ figure(src="distracted.svg", width="200px", alt="Distracted by yet another shiny thing") }}

The use of a well-known static-site generator instead of my own is such a lightweight and flexible workflow compared to before, and I am FREE FROM WORRYING ABOUT BUGS ALL THE TIME!!!!. Literally all I had to do was run `zola init myblog` and *voila*, everything was created - all I had to do was make everything look pretty.
