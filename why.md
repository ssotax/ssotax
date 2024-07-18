---
title: Why?
description: Why does SSOtax.org exist and what is it?
order: 3
---

## Why the project is needed

[**SSOtax.org**](https://ssotax.org) is an open source project to raise awareness how important SSO is as a core security requirement and that it should be available for everyone! It is maintained by the IT and InfoSec community.

Single sign-on (SSO) is a mechanism for outsourcing the authentication (via OpenID Connect, SAML) to a third party identity provider, such as Google, Microsoft, Okta, etc.

Companies rely on SSO to centrally lock down any employee access at the time of their offboarding (and to support robust Multi-Factor-Authentication). Imagine offboarding a single employee from 30 different SaaS applications: Assuming it takes an IT admin 4 minutes to login to a tool and suspend the account it would take them two hours to suspend every access. Two hours in which an employee would have unauthorized access!

**SSO is not a luxury feature but a a core security requirement for any company!**

If a vendor takes your security seriously they shouldn’t charge for a security feature that’s already developed. It would be unheard of for a car manufacturer to deliver your car but asking for an expensive software upgrade to unlock 100% of braking performance. SaaS vendors are essentially doing the same by locking existing security features behind an expensive paywall. Many vendors charge 2x, 3x, or 4x the base product pricing for access to SSO!

## Who is behind SSOtax.org?

I learned myself about the problem in the past while introducing Okta in my previous company and not being able to connect it to all existing SaaS as SSO was behind a pay wall.

When I was talking to CTOs and Security Leads about SaaS security, often the term **SSO Tax** came up. I noticed that people complained about not getting a clear understanding what that means for their SaaS tools as the [existing overview](http://sso.tax){:target="_blank_"} is outdated.

The SSO Tax was one of the reasons for starting [AccessOwl](https://www.accessowl.io){:target="_blank"} - a SaaS Provisioning and Governance platform. My co-founder Philip and I were frustrated that access management was turned into a product category solely accessible to large enterprises. In todays day and age managing your employee’s access to SaaS should not be considered a luxury product anymore.

## The original SSO.tax

As the [original project](https://sso.tax){:target="_blank_"} was not maintained for over a year and several reach outs to the maintainer were unsuccessful, I decided to [fork](https://github.com/ssotax/ssotax){:target="_blank_"}, updating the data and actively processing PRs to advance the core idea. At the same time it was a great opportunity to [integrate](https://github.com/robchahin/sso-wall-of-shame/issues/100){:target="_blank_"} [community](https://github.com/robchahin/sso-wall-of-shame/issues/36){:target="_blank_"} [feedback](https://github.com/robchahin/sso-wall-of-shame/issues/140){:target="_blank_"} and improve the overall page.

**The objective extends beyond shaming vendors by also [applauding those who genuinely value their customers’ security](friends-of-sso)!**

This project was originally created by [**robchahin**](https://github.com/robchahin){:target="_blank_"}, who single-handedly coined the term **SSO Tax** and spotlighted the issue. **Big shoutout to Rob!**

*~Mathias (Co-Founder of [AccessOwl](https://www.accessowl.io){:target="_blank_"})*
