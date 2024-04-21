---
author: Invasion
pubDatetime: 2024-04-22T21:03:36+02:00
modDatetime:
title: Hello, World!
slug: hello-world
featured: false
draft: false
tags:
  - tech
  - personal
description: Hey, you. You're finally awake.
---

# Hello, world!

This is the first blog on the site! (I'm finally satisfied with the technical side)

This website was built both because I wanted a place to write down (and share) my thoughts and try building a website without WordPress.

I have built a few websites (static and e-commerce) with WordPress because I simply didn't know any other/better way that was as easy.

# Why Astro

## Speed

Over time (and sometimes even right at the start) I noticed the WordPress websites became very sluggish because of the required plugins etc.

Out of curiosity I started looking at alternatives and found the world of SSG's (Static Site Generators) like [Astro](https://astro.build/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) and many others.

Literally every example I could find of an SSG built website was fast and looked nice, so I decided the next one I made would be SSG based.

Astro stood out to me because of it's server first architecture for rendering, which is about the only part I understand as a sysadmin. I've read developers love it though, and all the examples I found were **very** fast and pretty.

## Maintenance

Keeping everything up to date was a nightmare. Many plugins were not maintained but became critical to some installs over time. The capabilities of WordPress itself most of the time vastly exceeded what was necessary for the project too. More bloat = harder to maintain.

## Content type

This is specifically for the blog side, but a lot of SSG's use markdown files for blog posts. This ensures data portability, making a migration if ever needed that much smoother.

A few weeks/months ago I was looking for a more private/agnostic alternative for OneNote/Notion and fell in the [Obsidian](https://obsidian.md/) rabbit hole.
I have been using it for a while now and it has become an essential daily tool for me. This made the thought of using an SSG even more attractive.

## Privacy/security

My blog doesn't need a lot of features, but WordPress by default crams a lot in bloat pages you might forget to delete or disable. Especially when you start adding plugins.

Even something as simple as a text input field can be exploited against a user if the website is not well maintained or uses a bad theme/plugin.

![image](/src/assets/images/blog-cookies-compressed.png)

<p style="text-align: center; font-style: italic;">And having no bloat means no cookies by default!</p>

I have been toying with the idea of using a privacy friendly analytics tool but this won't be anytime soon if at all.

Of course, not being able to code has it's downsides with this approach. But finding a nice base theme and fiddling around with it is doable. The one I chose is [Github/Astro-Paper](https://github.com/satnaing/astro-paper).
