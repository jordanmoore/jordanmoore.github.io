---
layout: post
title: Intentional and Emergent Design Systems
date: '2019-07-30T00:00:01+00:00'
summary: Writing my todo list for the day is a key part of my morning routine and essential to state setting and priming
label: Tactics &amp; Habits
---

There appears to be two competing approaches in designing design systems. I’m going to call these approaches intentional design systems and emergent design systems to create a clear distinction between both.

### An intentional design system

This appears to be the default methodology in design circles. The flavour and framework may vary, but the approach generally consists of: design system first → design/build solutions.

I have a few concerns with this way of working with design systems. Front-loading design and/or build with the pieces you believe you’ll eventually need to arrive at a solution creates a limited set of outcomes. Any attempt to create more pieces in anticipation of generating a greater number of outcomes results in conjectural bloat – a cost offset to the user paid for in unnecessary data and time.

<figure>
    <img src="{{ site.url }}/img/intentionalds.jpg">
    <figcaption>Simplified flow of an intentional design system (building blocks first)</figcaption>
</figure>

Assuming the pieces will arrange themselves into answers means that you begin by painting yourself into a corner with something yet to prove its worth. This variety of design systems thinking usually finds its authors and gatekeepers consulting with the system over answers rather than thinking from first principles. Intentional design system advocates focus primarily on the what and how rather than the why.

### An emergent design system

Then there is the opposing approach, the unashamedly cart before horse way of looking at design systems.

This approach is much closer to the user needs end of the scale by beginning with creative solutions before deriving patterns and systems (i.e the system emerges from real, coded scenarios).


<figure>
    <img src="{{ site.url }}/img/emergentds.jpg">
    <figcaption>Simplified flow of an emergent design system (solution first, derive systems)</figcaption>
</figure>

Emergent design systems are typically more liberal and agnostic to predefined ideas and pieces. The rules are written as the game is played, not before, which opens up more creative possibilities. The rules committed to code have been proven in the wild and earned their place in the system.

The fundamental difference between the two competing methods is the point at which design decisions become codified as part of a design system. This may seem like a minor point to get stuck on but it touches on an old CSS problem: it’s hard to remove CSS after the fact because it isn’t clear where certain style rules are used or perhaps never used. Front-loading a design system with granular, variable-like CSS rules is as good as saying those rules are immovable and any attempt to move them will have unintended consequences up the design system chain from granular to fully formed components and patterns.

Waiting for systems to emerge, through a continuous process of building and deconstructing, goes some way towards remedying the assumptions of the alternative technique.