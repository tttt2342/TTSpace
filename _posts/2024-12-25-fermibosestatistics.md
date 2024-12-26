---
layout: post
title: Firmi and Bose Statistics
date: 2024-12-25 15:12:00+0800
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---

### Fermi Statistics
For fermions, each single-particle state can accommodate at most one particle, and thus each state is either occupied or empty. To place $$n_j$$ fermions into $$g_j$$ states, the number of ways:
\begin{equation}
w_j=\frac{g_j!}{n_j!(g_j-n_j)!}
\end{equation}
Therefore
\begin{equation}
\Omega\lbrace n_i\rbrace = \prod_{j}\frac{g_j!}{n_j(g_j-n_j)!}
\end{equation}
Using Lagrage multipliers, we can obtain
\begin{equation}
\bar n_j = \frac{g_j}{\e^{-\alpha+\beta\epsilon_j}+1}
\end{equation}
This is the Fermi Distribution.