---
layout: post
title: Intentional and Emergent Design Systems II
date: '2020-02-07T00:00:01+00:00'


---

I believe Robin Rendle's [Systems, Mistakes, and the Sea](https://www.robinrendle.com/essays/systems-mistakes-and-the-sea) was a catalyst for several enjoyable articles on design systems since the beginning of the year. Notably Jeremy Keith's [Web standards, dictionaries, and design systems](https://adactio.com/journal/16342), Frank Chimero's [Gardening vs Architecture](https://frankchimero.com/blog/2020/gardening-vs-architecture/), a subsequent, deeper dive in Jeremy's [Architects, gardeners, and design systems](https://adactio.com/journal/16369), and Dave Rupert's [The Web is Industrialized and I helped industrialize it](https://daverupert.com/2020/01/the-web-is-industrialized-and-i-helped-industrialize-it/). 

What follows is a contribution to this discussion. I'm still unpacking it but it feels timely to push some thoughts out into the open whether they're ready or not.

I believe that we are collectively tapping into something important within the design system discourse. Something felt, but difficult to uncover and put into words. However, it is gaining shape with some common themes around the role of **humans and machines**, **order and chaos**, **industry and liberty**.

I'm going to dive deeper into the conversation through the framing I believe helps me most by elaborating on [Intentional and Emergent Design Systems](http://jordanm.co.uk/2019/07/30/intentional-and-emergent-design-systems.html).

## Reach &amp; Scope

As far as I am aware, there is no collective understanding of the desirable reach of a design system. The intentional camp believes that everything must come from the system. By default, the system permeates the entire product.

In an intentional design system, there is no room for chaos. Only order. If something doesn't fit the system it doesn't belong in the system. If something cannot be born out of the system, it will not belong in the system. Intentional systems are authoritarian by nature.

Their liberal counterpart, the emergent design system, begins with creativity and chaos deriving patterns for the system later. Decisions start from user outcomes (the sum of all parts) and work backwards to find reusable parts. It's hard to quantify the reach of emergent systems. It may cover a small amount of the product, and it may cover a lot of the product. It's not all-encompassing. There is likely a correlation between the number of unique user problems encountered and the overall coverage of the system.

The scope of an intentional design system is large by default and requires some degree of conjectural bloat. When components are front-loaded into the process you get wastage as a byproduct. In contrast, emergent design systems require [gardening](https://frankchimero.com/blog/2020/gardening-vs-architecture/).

## The Sunk Cost Fallacy of Design Systems

An intentional design system assumes that your design work is done. You can maintain it, of course, but making changes to the system becomes a bureaucratic process.

> We’ve industrialized design and are relegated to squeezing efficiencies out of it through our design systems. All CSS changes must now have a business value and user story ticket attached to it.
> 
> Dave Rupert &mdash; [The Web is Industrialized and I helped industrialize it](https://daverupert.com/2020/01/the-web-is-industrialized-and-i-helped-industrialize-it/)

I remember coming up against design bureaucracy during my time working as part of a large scale product team. We were faced with many new user problems in need of solutions. The team were hellbent on shaping the solution to the problem out of the prebuilt pieces of the design system. Reasoning by analogy. The method of thinking that rarely leads to new solutions for new problems. First-principles reasoning was deemed too expensive. 

I was met with arguments like "That means we’re going to have to create a new rule for this component, we’ll have to get internal sign-off, the developers will have to invest extra effort, it’ll need to go through testing, do you seriously want to go through all those steps?"

It was clear that we had been designed into a corner by our design system or at least our organisation's ideology. What if our initial assumptions were wrong? What if we didn't have the pieces to address these new problems?

I noticed a pattern. If a problem could be easily solved, low-effort, low value, or if it had already been solved - defer to the system. Watch out for when the system pushes back. If the design system pushes back, it's time for human intervention and invention.

Useful questions to ask when the system pushes back:

- Do we need to amend the system?
- Is it a unique case that should sit outside the system? 
- Is it likely to reoccur in different variations?
- Is it something that **should** be governed by a design system?
- Does the system bake in more assumptions than a different approach? (Occam's Razor is a good guide for software decisions)
- Does building the best thing involve building it out of the things we’ve already built? Or does it require building something new?

You can tell what type of design system you're working with if it biases solutions towards pre-existing components or if the system gives you the freedom to invent.


## Leaving Room for Creativity

The majority of systems I hear people advocate for *appear* to subscribe to intentional design systems. Because of this, one of my overriding fears is that design systems are designing designers out of the picture. For years we've pushed against the idea of design as a commodity, yet here we are commoditising design down to atomic levels.

> “Sometimes you load up a show on Netflix or a song on Spotify and you can feel the algorithm in it."
> 
> Frank Chimero &mdash; [Gardening vs Architecture](https://frankchimero.com/blog/2020/gardening-vs-architecture/)

If I could give an artificial intelligence the keys to fully automating modern design, I’d point it towards an intentional design system. An emergent approach leaves room for mystery, chaos, intuition, creativity and expression[^1] - the unpredictable, unique, innately human elements.

**Do design systems limit creativity?** The answer rests on what type of system you subscribe to.

The worst incarnation of a design system designs designers out of the picture. If I were building an AI tool to displace designers, I'd point them towards an all-encompassing, intentional design system. I fear that we're blindly running towards automation and we're giving the algorithms the template our jobs. It's not hard to imagine a world where No Code technology complements No Design. By contrast, the best incarnation of a design system leaves room for creativity, invention, the **human** elements.

---

Jeremy Keith recently added colour to the idea of intentional and emergent design systems drawing ideological comparisons with language prescriptivists and language descriptivists.

> Language prescriptivists attempt to define rules about what’s right or right or wrong in a language. Rules like “never end a sentence with a preposition.” Prescriptivists are generally fighting a losing battle and spend most of their time bemoaning the decline of their language because people aren’t following the rules.
> 
> Language descriptivists work the exact opposite way. They see their job as documenting existing language usage instead of defining it. Lexicographers—like Merriam-Webster or the Oxford English Dictionary—receive complaints from angry prescriptivists when dictionaries document usage like “literally” meaning “figuratively”.
>
> Jeremy Keith - [Web standards, dictionaries, and design systems](https://adactio.com/journal/16342)

When I first read the article, I quietly took issue with where Jeremy's interpretation landed. The reasoning up until the ending resonated, but I believed his conclusion put intentional design systems on the side of beauty at odds with the emergent design systems - accurate but not beautiful.

> I think we can learn from the worlds of web standards and dictionaries here. A prescriptive approach might give you a beautiful design system, but if it doesn’t reflect the actual product, it’s fiction. A descriptive approach might give a design system with imperfections and annoying flaws, but at least it will be accurate.
> 
> I think it’s more important for a design system to be accurate than beautiful.
>
> Jeremy Keith - [Web standards, dictionaries, and design systems](https://adactio.com/journal/16342)

How can front-loaded design systems result in more beautiful products than design systems that begin with the end in mind and work backwards?

Then I realised the flaw in my thinking. Jeremy was describing the design system *itself*, not the fruits of the system. (The irony of my flawed thinking further highlights my own biases towards the emergent end of the spectrum!)

I feel that one further elaboration is required: an intentional design system can create beautiful design systems, an emergent design system can be created from beautiful products.

[^1]: I used to poke fun at the websites of the early 2010s claiming to be "handcrafted". Now I'm thinking they were on to something. Perhaps "handcrafted" was the wrong adjective, but I think they were trying to describe something else. Something made through more effort, deliberateness, craft, and creativity. These experiences placed more of an emphasis on the importance of aesthetics, they spoke to human ideals such as affordance, familiarity, and metaphor. Flat design lends itself towards low-effort commoditisation and malleability in a design system - perhaps leading to the ideology of "everything that can be systemised, will be systemised"